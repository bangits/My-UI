import { createUseStyles, Styles } from 'react-jss';

export const useStyles = <T = {}>(styles: Styles<string, T>, data?: T) => {
  return createUseStyles<string, T>(styles)(data);
};
