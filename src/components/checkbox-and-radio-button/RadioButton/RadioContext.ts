import { createContext } from 'react';
import { RadioGroupProps } from './RadioGroup';

export const { Provider, Consumer } = createContext<RadioGroupProps>({});
