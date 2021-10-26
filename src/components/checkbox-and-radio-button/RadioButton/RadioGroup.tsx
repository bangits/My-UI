import { typedMemo } from '@/helpers';
import { IComponent } from '@/types/props';
import React, { FC, useCallback, useState } from 'react';
import { Provider } from './RadioContext';

export interface RadioGroupProps extends IComponent {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
  name?: string;
}

const RadioGroup: FC<RadioGroupProps> = ({ children, onChange, value, defaultValue, name }) => {
  const [selectedRadio, setSelectedRadio] = useState<string | null>(defaultValue || null);

  const handleRadioChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRadio(event.currentTarget.value);
  }, []);

  return (
    <Provider
      value={{
        name,
        onChange: onChange ?? handleRadioChange,
        value: value ?? selectedRadio
      }}>
      {children}
    </Provider>
  );
};

export default typedMemo(RadioGroup);
