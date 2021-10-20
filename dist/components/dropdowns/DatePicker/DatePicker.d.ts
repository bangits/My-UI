import { ReactDatePickerProps } from '@my-ui/react-datepicker';
import React from 'react';
export interface DatepickerProps extends ReactDatePickerProps {
    withDropdowns?: boolean;
}
declare const DatePicker: React.FC<DatepickerProps>;
export default DatePicker;
