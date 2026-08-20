import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { P as cn } from "./router-G4sCl9hs.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/switch-Ck4st0qB.js
var import_jsx_runtime = require_jsx_runtime();
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-ink/15 transition-[background-color] duration-150 data-[state=checked]:bg-navy", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "block size-5 translate-x-0.5 rounded-full bg-paper-2 shadow-sm transition-transform duration-150 data-[state=checked]:translate-x-[22px]" })
	});
}
//#endregion
export { Switch as t };
