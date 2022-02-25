import { Tooltip } from '@/my-ui-core';
import { DetailedHTMLProps, FC, HTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';

const TextWithTooltip: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { disabled?: boolean }
> = (elementProps) => {
  const typographyComponentRef = useRef<HTMLDivElement>(null);

  const [isEllipsisActive, setElipssisActive] = useState(false);

  const element = useMemo(() => <div {...elementProps} ref={typographyComponentRef} />, [elementProps]);

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setElipssisActive(
        !elementProps.disabled &&
          typographyComponentRef.current?.offsetWidth < typographyComponentRef.current?.scrollWidth
      );
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [elementProps]);

  return elementWithTooltip;
};

TextWithTooltip.defaultProps = {
  disabled: false
};

export default TextWithTooltip;
