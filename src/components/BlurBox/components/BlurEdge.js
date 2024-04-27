import { SIZES } from "../constants";
import {
  Canvas,
  LinearGradient,
  Rect,
} from "@shopify/react-native-skia";
import React from "react";

const BlurEdge = ({
  enabled,
  height,
  style,
  ...props
}) => {
  if (!enabled) {
    return null;
  }
  return (
    <Canvas style={[style, { height }]}>
      <Rect x={0} y={0} width={SIZES.WINDOW.WIDTH} height={height}>
        <LinearGradient {...props} />
      </Rect>
    </Canvas>
  );
};

BlurEdge.defaultProps = {
  enabled: true
};

export default BlurEdge;
