import { createUseStyles, Styles } from 'react-jss';

export const useStyles = (styles: Styles<string, unknown>) => {
  return createUseStyles(styles)();
};
