import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { P as cn } from "./router-G4sCl9hs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-Cxs8NiOC.js
var import_jsx_runtime = require_jsx_runtime();
function Progress({ value, className }) {
	const v = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-1.5 w-full overflow-hidden rounded-full bg-ink/8", className),
		role: "progressbar",
		"aria-valuenow": Math.round(v),
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
			className: "block h-full rounded-full bg-navy transition-[width] duration-300 ease-out",
			style: { width: `${v}%` }
		})
	});
}
//#endregion
export { Progress as t };
