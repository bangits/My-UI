import { typedMemo } from '@/helpers/typedMemo';
import { IComponent } from '@/types/props';
import React, { FC, ReactNode, useCallback, useState } from 'react';
import { Provider } from './RadioContext';

export interface RadioGroupProps extends IComponent {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
  name?: string;
  children?: ReactNode;
}

const RadioGroup: FC<RadioGroupProps> = ({ children, onChange, value, defaultValue, name }) => {
  const [selected, setSelected] = useState<string>(defaultValue);

  const handleRadioChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(event.currentTarget.value);
  }, []);

  return (
    <Provider
      value={{
        name,
        onChange: onChange ? onChange : handleRadioChange,
        value: value ? value : selected
      }}>
      {children}
    </Provider>
  );
};

export default typedMemo(RadioGroup);
