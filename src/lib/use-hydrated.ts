import { useEffect, useState } from "react";
import { useStudy } from "./store";

export function useHydrated() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const unsub = useStudy.persist.onFinishHydration(() => setReady(true));
    setReady(useStudy.persist.hasHydrated());
    return unsub;
  }, []);
  return ready;
}
