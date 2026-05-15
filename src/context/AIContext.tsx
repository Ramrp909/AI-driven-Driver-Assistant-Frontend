import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type AIContextType = {
  faceDetected: boolean;
  setFaceDetected: (value: boolean) => void;

  isDrowsy: boolean;
  setIsDrowsy: (value: boolean) => void;

  attentionScore: number;
  setAttentionScore: (value: number) => void;

  attentionStatus: string;
  setAttentionStatus: (value: string) => void;

  telemetry: any;
setTelemetry: (value: any) => void;
};

const AIContext = createContext<AIContextType | null>(
  null
);

export const AIProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [faceDetected, setFaceDetected] =
    useState(false);

  const [isDrowsy, setIsDrowsy] =
    useState(false);

  const [attentionScore, setAttentionScore] =
    useState(95);

  const [attentionStatus, setAttentionStatus] =
    useState("Focused");

    const [telemetry, setTelemetry] =
  useState<any>(null);

  return (
    <AIContext.Provider
      value={{
        faceDetected,
        setFaceDetected,

        isDrowsy,
        setIsDrowsy,

        attentionScore,
        setAttentionScore,

        attentionStatus,
        setAttentionStatus,

        telemetry,
        setTelemetry,
      }}
    >
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => {
  const context = useContext(AIContext);

  if (!context) {
    throw new Error(
      "useAI must be used inside AIProvider"
    );
  }

  return context;
};