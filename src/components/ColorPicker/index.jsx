import React from "react";
import { Panel, ColorInput, InputContainer } from "./styles";

const ColorPicker = ({ setWrapperColor, wrapperColor }) => {
  return (
    <Panel>
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
