import { Tooltip } from '@/my-ui-core';
import { DetailedHTMLProps, FC, HTMLAttributes, useMemo, useRef } from 'react';

const TextWithTooltip: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (elementProps) => {
  const typographyComponentRef = useRef<HTMLDivElement>(null);

  const isEllipsisActive = typographyComponentRef.current?.offsetWidth < typographyComponentRef.current?.scrollWidth;

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
    [isEllipsisActive]
  );

  return elementWithTooltip;
};

export default TextWithTooltip;
