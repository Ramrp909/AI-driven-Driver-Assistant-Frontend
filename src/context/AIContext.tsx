import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type NotificationType = {
  id: string;
  type:
  | "danger"
  | "warning"
  | "safe"
  | "info";
  // severity:
  // | "danger"
  // | "warning"
  // | "safe"
  // | "info";
  title: string;
  message: string;
  timestamp: number;
  duration?: number;
};

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

notifications: NotificationType[];

setNotifications: React.Dispatch<
  React.SetStateAction<any[]>
>;

addNotification: (
  notification: Omit<
    NotificationType,
    "id" | "timestamp"
  >
) => void;

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

  const [
  notifications,
  setNotifications,
] = useState<NotificationType[]>(
  []
);

// const addNotification = (
//   notification: Omit<
//     NotificationType,
//     "id" | "timestamp"
//   >
// ) => {

//   const newNotification = {
//     ...notification,

//     id: Date.now().toString(),

//     timestamp: Date.now(),
//   };

//   setNotifications((prev) => [
//     newNotification,
//     ...prev,
//   ]);
// };

const addNotification = (
  notification: Omit<
    NotificationType,
    "id" | "timestamp"
  >
) => {

  const id =
    Date.now().toString();

  const newNotification = {
    ...notification,

    id,

    timestamp: Date.now(),
  };

  setNotifications((prev) => [
    newNotification,
    ...prev,
  ]);

  // Auto dismiss
  setTimeout(() => {

    setNotifications((prev) =>
      prev.filter(
        (item) =>
          item.id !== id
      )
    );

  }, notification.duration || 5000);
};

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

        notifications,
        addNotification,

        setNotifications,
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