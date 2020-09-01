import React from "react";
import { Slider } from "antd";

export const AttributeSlider = ({attribute, setAttribute}) => {
    const onChange = value => {
        setAttribute(attribute, value);
      };
    return <>{attribute}<Slider onChange={onChange} min={0} max={10} /></>
};