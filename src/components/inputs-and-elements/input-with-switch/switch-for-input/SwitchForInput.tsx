import { useCallback, useMemo, useState } from 'react';
import { DropdownArrowIconUp, DropdownArrowIconDown } from '../../../../icons';
import styles from './SwitchForInput.module.scss';

export interface SwitchForInputProps {
  options: Record<string, string | number>[];
  idProp: string;
  labelProp: string;
  value: number;
}

export const SwitchForInput = ({ options, idProp, labelProp }: SwitchForInputProps) => {
  const [currentOption, setCurrentOption] = useState(0);

  const computedOptions = useMemo(
    () => options.map((option) => ({ id: option[idProp], label: option[labelProp] })),
    [options, idProp, labelProp]
  );

  const upClick = useCallback(() => {
    currentOption > 0 && setCurrentOption(currentOption - 1);
  }, [currentOption]);

  const downClick = useCallback(() => {
    currentOption < computedOptions.length - 1 && setCurrentOption(currentOption + 1);
  }, [currentOption]);

  return (
    <span className={styles.base}>
      <span className={styles.divider}></span>
      <span className={styles.option}>{computedOptions[currentOption].label}</span>
      <span className={styles.arrowsWrapper}>
        <DropdownArrowIconUp className={styles.arrow} onClick={upClick} width={8} height={4} />
        <DropdownArrowIconDown className={styles.arrow} onClick={downClick} width={8} height={4} />
      </span>
    </span>
  );
};
