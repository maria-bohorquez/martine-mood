import React, { useState } from "react";
import { Panel, ColorInput, InputContainer, Arrow } from "./styles";

const ColorPicker = ({ setWrapperColor, wrapperColor }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <Panel $isOpen={showColorPicker}>
      <Arrow
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
        $isOpen={showColorPicker}
      />
      <InputContainer>
        <p>Background: </p>
        <ColorInput
          type="color"
          value={wrapperColor}
          onChange={(event) => setWrapperColor(event.target.value)}
        />
      </InputContainer>
    </Panel>
  );
};
export default ColorPicker;
