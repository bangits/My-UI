import { Checkbox } from "@/components";
import { components } from '@em/react-select';
import React from "react";

export const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <Checkbox checked={props.isSelected} onChange={() => null} /> <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };
  
export const ValueContainer = ({ children, ...props }) => {
    return (
      //@ts-ignore
      <components.ValueContainer {...props}>
        <components.Placeholder {...props} isFocused={props.isFocused}>
          {props.selectProps.placeholder}
        </components.Placeholder>
        {React.Children.map(children, (child) =>
          (child && child.type === components.Input) || components.Placeholder ? child : null
        )}
      </components.ValueContainer>
    );
  };