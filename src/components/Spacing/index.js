import React from "react";
import useTheming from "../../utils/hooks/useTheming";

function Spacing({ height = 0, width = 0 }) {
  const { spacing } = useTheming();

  return <div style={{ height: spacing(height), width: spacing(width) }} />;
}

export default Spacing;
