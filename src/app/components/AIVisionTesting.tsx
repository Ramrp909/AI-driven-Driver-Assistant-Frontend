
import { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import DriverHealthMonitoring from "./DriverHealthMonitoring";
import {
  FaceMesh,
  FACEMESH_CONTOURS,
  FACEMESH_TESSELATION,
} from "@mediapipe/face_mesh";

import axios from "axios";

import { drawConnectors } from "@mediapipe/drawing_utils";
import { useAI } from "../../context/AIContext";




const DebugCard = ({
  label,
  value,
}: {
  label: string;
  value: any;
}) => (
  <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
    <p className="text-sm text-slate-500 dark:text-slate-400">
      {label}
    </p>

    <p className="text-lg font-semibold text-cyan-500 mt-2">
      {value}
    </p>
  </div>
);

export default function AIVisionTesting() {
 
  const {
  telemetry,
  setTelemetry,
} = useAI();
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

useEffect(() => {
  const faceMesh = new FaceMesh({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    },
  });

  faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: false,
    minDetectionConfidence: 0.3,
    minTrackingConfidence: 0.3,
  });

  faceMesh.onResults((results) => {
    const canvas = canvasRef.current;
    const video = webcamRef.current?.video;

    if (!canvas || !video) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      results.image,
      0,
      0,
      canvas.width,
      canvas.height
    );

    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        drawConnectors(
          ctx,
          landmarks,
          FACEMESH_CONTOURS,
          {
            color: "#00FFFF",
            lineWidth: 1,
          }
        );
      }
    }
  });

  const interval = setInterval(async () => {
    const video = webcamRef.current?.video;

    if (
      video &&
      video.readyState === 4
    ) {
      await faceMesh.send({
        image: video,
      });
    }
  }, 300);

  const backendInterval = setInterval(
  async () => {
    const video =
      webcamRef.current?.video;

    if (
      video &&
      video.readyState === 4
    ) {
      const canvas =
        document.createElement("canvas");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx =
        canvas.getContext("2d");

      if (!ctx) return;

      ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );

      canvas.toBlob(
        async (blob) => {
          if (!blob) return;

          const formData =
            new FormData();

          formData.append(
            "file",
            blob,
            "frame.jpg"
          );

          try {
            const response =
              await axios.post(
                "http://127.0.0.1:8000/detect-face",
                formData
              );

            setTelemetry(
              response.data
            );
          } catch (error) {
            console.error(error);
          }
        },
        "image/jpeg"
      );
    }
  },
  500
);
  return () => {
    clearInterval(interval);
    clearInterval(backendInterval);
  };
}, []);

  return (<>
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            AI Vision Testing
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Real-time face landmark monitoring
          </p>
        </div>

        <div className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium">
          AI ACTIVE
        </div>
      </div>

      {/* <div className="relative rounded-2xl overflow-hidden aspect-video bg-black">
        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored={true}
          screenshotFormat="image/jpeg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
      </div> */}

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4">
          <p className="text-sm text-slate-500">Face Mesh</p>
          <p className="text-lg font-semibold text-cyan-500">
            Active
          </p>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4">
          <p className="text-sm text-slate-500">Eye Tracking</p>
          <p className="text-lg font-semibold text-green-500">
            Tracking
          </p>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4">
          <p className="text-sm text-slate-500">Attention</p>
          <p className="text-lg font-semibold text-green-500">
            Focused
          </p>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4">
          <p className="text-sm text-slate-500">Latency</p>
          <p className="text-lg font-semibold text-cyan-500">
            12ms
          </p>
        </div>
      </div> */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

  {/* Webcam Section */}
  <div className="lg:col-span-2">
    <div className="relative rounded-2xl overflow-hidden bg-black h-[350px]">
      
      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={true}
        screenshotFormat="image/jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  </div>

  {/* Live Status Section */}
  <div className="space-y-4">

    <DebugCard
      label="Attention"
      value={
        telemetry?.attentionStatus ??
        "N/A"
      }
    />

    <DebugCard
      label="Attention Score"
      value={
        telemetry?.attentionScore ??
        0
      }
    />

    <DebugCard
      label="Head Direction"
      value={
        telemetry?.headDirection ??
        "Center"
      }
    />

    <DebugCard
      label="Drowsy"
      value={
        telemetry?.isDrowsy
          ? "Yes"
          : "No"
      }
    />

  </div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

  <DebugCard
    label="Face Detected"
    value={
      telemetry?.faceDetected
        ? "Yes"
        : "No"
    }
  />

  <DebugCard
    label="Face Count"
    value={telemetry?.faceCount ?? 0}
  />

  <DebugCard
    label="Looking Away"
    value={
      telemetry?.lookingAway
        ? "Yes"
        : "No"
    }
  />

  <DebugCard
    label="Blink"
    value={
      telemetry?.blinkDetected
        ? "Yes"
        : "No"
    }
  />

  <DebugCard
    label="Eye Distance"
    value={
      telemetry?.eyeDistance ??
      0
    }
  />

</div>

      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">

  <DebugCard
    label="Face Detected"
    value={
      telemetry?.faceDetected
        ? "Yes"
        : "No"
    }
  />

  <DebugCard
    label="Face Count"
    value={telemetry?.faceCount ?? 0}
  />

  <DebugCard
    label="Attention"
    value={
      telemetry?.attentionStatus ??
      "N/A"
    }
  />

  <DebugCard
    label="Attention Score"
    value={
      telemetry?.attentionScore ??
      0
    }
  />

  <DebugCard
    label="Drowsy"
    value={
      telemetry?.isDrowsy
        ? "Yes"
        : "No"
    }
  />

  <DebugCard
    label="Looking Away"
    value={
      telemetry?.lookingAway
        ? "Yes"
        : "No"
    }
  />

  <DebugCard
    label="Head Direction"
    value={
      telemetry?.headDirection ??
      "Center"
    }
  />

  <DebugCard
    label="Blink"
    value={
      telemetry?.blinkDetected
        ? "Yes"
        : "No"
    }
  />

  <DebugCard
    label="Eye Distance"
    value={
      telemetry?.eyeDistance ??
      0
    }
  />
</div> */}
    </div>
    <DriverHealthMonitoring />
    </>
  );
}