import { useEffect } from 'react';
import PeerController from '../../PeerController';

const usePeerEvent = (event: string, func: Function) => {
  useEffect(() => {
    PeerController.addListener(event, func)
    return () => PeerController.removeListener(func)
  }, [event, func])

  return 
}

export default usePeerEvent;