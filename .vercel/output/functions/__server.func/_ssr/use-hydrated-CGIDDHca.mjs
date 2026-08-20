import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as useStudy } from "./router-G4sCl9hs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-hydrated-CGIDDHca.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useHydrated() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const unsub = useStudy.persist.onFinishHydration(() => setReady(true));
		setReady(useStudy.persist.hasHydrated());
		return unsub;
	}, []);
	return ready;
}
//#endregion
export { useHydrated as t };
