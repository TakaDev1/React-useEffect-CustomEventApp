import React, { useEffect } from "react";
import DisplayEventStatus from "./DisplayEventStatus";

type Props = {
  handler: (event: Event) => void;
};

const HandleCustomEvent = ({ handler }: Props) => {
  useEffect(() => {
    window.addEventListener("custom-event", handler);

    return () => {
      window.removeEventListener("custom-event", handler);
    };
  }, [handler]);
  return (
    <div>
      <DisplayEventStatus />
    </div>
  );
};

export default HandleCustomEvent;
