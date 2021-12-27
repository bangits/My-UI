import { Tooltip } from '@/my-ui-core';
import { DetailedHTMLProps, FC, HTMLAttributes, memo, useMemo, useRef } from 'react';

const TextWithTooltip: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { disabled?: boolean }
> = (elementProps) => {
  const typographyComponentRef = useRef<HTMLDivElement>(null);

  const isEllipsisActive =
    !elementProps.disabled && typographyComponentRef.current?.offsetWidth < typographyComponentRef.current?.scrollWidth;

  const element = <div {...elementProps} ref={typographyComponentRef} />;

  const elementWithTooltip = useMemo(
    () =>
      isEllipsisActive ? (
        <Tooltip showEvent='hover' text={element}>
          {element}
        </Tooltip>
      ) : (
        element
      ),
    [isEllipsisActive, element]
  );

  return elementWithTooltip;
};

export default memo(TextWithTooltip);
