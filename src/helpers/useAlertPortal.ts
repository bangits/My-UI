import { useEffect, useState } from 'react';
import { uniqueIdMaker } from '.';

export const useAlertPortal = () => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`alert-portal-${uniqueIdMaker()}`);

  useEffect(() => {
    const div = document.createElement('div');
    div.id = portalId;
    document.getElementsByTagName('body')[0].prepend(div);

    setLoaded(true);

    return () => {
      document.getElementsByTagName('body')[0].removeChild(div);
    };
  }, [portalId]);

  return { loaded, portalId };
};
