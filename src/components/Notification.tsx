import { createContext, useContext, useState, type ReactNode } from "react";
import { Notification as KendoNotification, NotificationGroup } from "@progress/kendo-react-notification";

interface Notification {
  id: number;
  message: string;
}

interface NotificationContextType {
  addNotification: (message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string) => {
    const id = Date.now(); // Unique ID based on timestamp
    setNotifications((prev) => [...prev, { message, id }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000); // Auto-dismiss after 3 seconds
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      <NotificationGroup style={{ right: 10, top: 10, position: "fixed" }}>
        {notifications.map((n) => (
          <KendoNotification key={n.id} type={{ style: "success", icon: true }}>
            <span>{n.message}</span>
          </KendoNotification>
        ))}
      </NotificationGroup>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to access the notification context
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
