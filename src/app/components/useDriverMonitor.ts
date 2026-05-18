import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useAI } from "../../context/AIContext";
import { demoNotifications } from "../components/NotificationSystem";

export default function useDriverMonitor() {

  const {
    setFaceDetected: setGlobalFaceDetected,
    setIsDrowsy: setGlobalIsDrowsy,
    setAttentionScore: setGlobalAttentionScore,
    setAttentionStatus: setGlobalAttentionStatus,
    setTelemetry,
    addNotification,
  } = useAI();

  const webcamRef = useRef<Webcam>(null);

  const [faceDetected, setFaceDetected] =
    useState(false);

  const [faceCount, setFaceCount] =
    useState(0);

  const [isScanning, setIsScanning] =
    useState(false);

  const [isDrowsy, setIsDrowsy] =
    useState(false);

  const [attentionScore, setAttentionScore] =
    useState(0);

  const [showDangerAlert, setShowDangerAlert] =
    useState(false);

  const [
    attentionStatus,
    setAttentionStatus,
  ] = useState("Focused");

  const [lastAlertTime, setLastAlertTime] =
    useState(0);

  const ALERT_COOLDOWN = 8000;

  const speakAlert = (message: string) => {

    const speech =
      new SpeechSynthesisUtterance(
        message
      );

    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 0.8;

    window.speechSynthesis.speak(
      speech
    );
  };

  const detectFace = async () => {

    if (!webcamRef.current) return;

    const screenshot =
      webcamRef.current.getScreenshot();

    if (!screenshot) return;

    try {

      setIsScanning(true);

      const blob = await fetch(
        screenshot
      ).then((res) => res.blob());

      const formData =
        new FormData();

      formData.append(
        "file",
        blob,
        "frame.jpg"
      );

      const response =
        await axios.post(
          "http://127.0.0.1:8000/detect-face",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      setFaceDetected(
        response.data.faceDetected
      );

      setIsDrowsy(
        response.data.isDrowsy
      );

      setAttentionStatus(
        response.data.attentionStatus
      );

      setAttentionScore(
        response.data.attentionScore
      );

      setGlobalFaceDetected(
        response.data.faceDetected
      );

      setGlobalIsDrowsy(
        response.data.isDrowsy
      );

      setGlobalAttentionStatus(
        response.data.attentionStatus
      );

      setGlobalAttentionScore(
        response.data.attentionScore
      );

      setTelemetry(response.data);

    } catch (error) {

      console.error(
        "Face detection error:",
        error
      );

    } finally {

      setIsScanning(false);
    }
  };

  const triggerDangerAlert = () => {

    setShowDangerAlert(true);

    speakAlert(
      "Warning. Driver drowsiness detected."
    );

    setTimeout(() => {

      setShowDangerAlert(false);

      addNotification(
        demoNotifications.drowsinessDetected
      );

    }, 5000);
  };

  const triggerDangerRoad = () => {

    addNotification({
      type: "warning",

      title: "Driver Distracted",

      message:
        "Please focus on the road.",

      duration: 5000,
    });

    speakAlert(
      "Warning. Driver distraction detected."
    );
  };

  useEffect(() => {

    const interval = setInterval(() => {

      detectFace();

    }, 2000);

    return () =>
      clearInterval(interval);

  }, []);

  useEffect(() => {

    const now = Date.now();

    if (
      now - lastAlertTime <
      ALERT_COOLDOWN
    ) {
      return;
    }

    if (isDrowsy) {

      triggerDangerAlert();

      setLastAlertTime(now);

      return;
    }

    if (
      attentionStatus ===
      "Distracted"
    ) {

      triggerDangerRoad();

      setLastAlertTime(now);
    }

  }, [
    isDrowsy,
    attentionStatus,
    lastAlertTime,
  ]);

  return {
    webcamRef,

    faceDetected,
    faceCount,
    isScanning,
    isDrowsy,
    attentionScore,
    attentionStatus,

    showDangerAlert,
  };
}