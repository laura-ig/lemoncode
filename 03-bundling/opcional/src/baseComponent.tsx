import React from "react";
import getAvg from "./baseService";

export const BaseComponent: React.FC = () => {

  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 30];
    setAverage(getAvg(scores));
  }, []);
  
  return (
    <div>
      Media: <span>{average}</span>
    </div>
  );
};