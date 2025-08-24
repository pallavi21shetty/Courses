import React, { useEffect, useState } from "react";

function NetworkStatus() {
  // Step 1: create state to store online/offline
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  // Step 2: setup event listeners
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Step 3: show UI
  return (
    <div>
      {isOnline ? (
        <p style={{ color: "green" }}> You are Online</p>
      ) : (
        <p style={{ color: "red" }}> You are Offline</p>
      )}
    </div>
  );
}

export default NetworkStatus;
