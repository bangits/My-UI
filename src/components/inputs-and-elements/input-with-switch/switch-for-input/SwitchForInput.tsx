import { MouseEvent, ReactNode, useCallback, useMemo, useState } from 'react';
import { DropdownArrowIconUp, DropdownArrowIconDown } from '../../../../icons';
import styles from './SwitchForInput.module.scss';

export interface SwitchForInputProps {
  options: Record<string, string | number>[];
  idProp: string;
  labelProp: string;
  initialValue: number;
  onChange?: (value: number, e: MouseEvent<SVGSVGElement>) => void;
}

export const SwitchForInput = ({ options, idProp, labelProp, onChange, initialValue }: SwitchForInputProps) => {
  const [currentOption, setCurrentOption] = useState(initialValue);

  const computedOptions = useMemo(
    () => options.map((option) => ({ id: option[idProp], label: option[labelProp] })),
    [options, idProp, labelProp]
  );

  const upClick = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      if (currentOption > 0) {
        setCurrentOption(currentOption - 1);
        onChange?.(computedOptions[currentOption - 1].id as number, e);
      } else {
        setCurrentOption(computedOptions.length - 1);
        onChange?.(computedOptions[computedOptions.length - 1].id as number, e);
      }
    },
    [currentOption]
  );

  const downClick = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      if (currentOption < computedOptions.length - 1) {
        setCurrentOption(currentOption + 1);
        onChange?.(computedOptions[currentOption + 1].id as number, e);
      } else {
        setCurrentOption(0);
        onChange?.(computedOptions[0].id as number, e);
      }
    },
    [currentOption]
  );

  return (
    <span className={styles.Base}>
      <span className={styles.Divider}></span>
      <span className={styles.Option}>{computedOptions[currentOption].label}</span>
      <span className={styles.ArrowsWrapper}>
        <DropdownArrowIconUp className={styles.Arrow} onClick={upClick} width={8} height={4} />
        <DropdownArrowIconDown className={styles.Arrow} onClick={downClick} width={8} height={4} />
      </span>
    </span>
  );
};
