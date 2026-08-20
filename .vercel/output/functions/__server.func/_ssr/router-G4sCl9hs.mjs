import { o as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as useRouter, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogPortal, c as Slot, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as __exportAll } from "./ssr.mjs";
import { a as PostgresIntrospector, c as sql, i as PostgresAdapter, n as getKyselyDatabaseType, o as PostgresQueryCompiler, s as CompiledQuery, t as createKyselyAdapter } from "../_libs/@better-auth/kysely-adapter+[...].mjs";
import { $t as runWithAdapter, At as email, C as serializeSignedCookie, Ct as isSafeUrlScheme, D as decodeJwt, Dt as any, E as base64Url, Ft as optional, Gt as ATTR_CONTEXT, Ht as toKebabCase, It as record, Jt as import_src, Kt as ATTR_HOOK_TYPE, Lt as string, Mt as looseObject, Nt as number, O as decodeProtectedHeader, Ot as array, Pt as object, Q as encode, Qt as queueAfterTransactionHook, Rt as union, S as serializeCookie, St as createFetch, Vt as capitalizeFirstLetter, Wt as withSpan, Xt as getAuthTables, Yt as safeJSONParse, Zt as getCurrentAdapter, _ as runWithRequestState, _n as BetterAuthError, a as createAuthorizationURL, an as createRandomStringGenerator, b as createRouter$1, bn as defineErrorCodes, c as createRateLimitKey, cn as shouldPublishLog, d as deprecate, en as runWithTransaction, f as createAuthEndpoint, g as hasRequestState, gn as APIError, h as defineRequestState, hn as isTest, i as refreshAccessToken, in as generateId, jt as literal, k as jwtVerify, kt as boolean, l as findInvalidTrustedProxies, m as isAPIError, mn as isProduction, n as socialProviders, nn as initGetModelName, o as applyDefaultAccessTokenExpiry, on as createLogger, p as createAuthMiddleware, pn as isDevelopment, qt as ATTR_OPERATION_ID, r as validateAuthorizationCode, rn as initGetFieldName, s as isLoopbackHost, sn as logger, t as SocialProviderListEnum, tn as getBetterAuthVersion, u as getIp, un as env, ut as JWTExpired, v as getCurrentAuthContext, vn as kAPIErrorHeaderSymbol, w as filterOutputFields, wt as normalizePathname, x as toResponse, xt as betterFetch, y as runWithEndpointContext, yn as BASE_ERROR_CODES } from "../_libs/@better-auth/core+[...].mjs";
import { _ as BookOpen, a as Sun, h as ChartNoAxesColumn, l as Layers, o as Search, p as ClipboardCheck, r as TriangleAlert, s as Moon, t as X, u as House } from "../_libs/lucide-react.mjs";
import { n as string$1, t as boolean$1 } from "../_libs/zod.mjs";
import { i as atom, n as onMount, r as onSet, t as listenKeys } from "../_libs/nanostores.mjs";
import { n as defu, t as createDefu } from "../_libs/defu.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as hkdf, t as sha256 } from "../_libs/noble__hashes.mjs";
import { i as jwtDecrypt, n as EncryptJWT, r as SignJWT, t as calculateJwkThumbprint } from "../_libs/jose.mjs";
import { i as verifyPassword, n as binary, r as hashPassword, t as createHMAC } from "../_libs/better-auth__utils.mjs";
import { n as createHash, t as createTelemetry } from "../_libs/@better-auth/telemetry+[...].mjs";
import { a as utf8ToBytes, i as managedNonce, n as bytesToHex, r as hexToBytes, t as xchacha20poly1305 } from "../_libs/noble__ciphers.mjs";
import { t as Pool } from "../_libs/pg.mjs";
import { randomBytes } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-BAr_sN-T.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function shuffle(arr) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function dayKey(ts = Date.now()) {
	const d = new Date(ts);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function fmtWhen(ts) {
	if (!ts) return "—";
	const d = ts - Date.now();
	if (d <= 0) return "now";
	const DAY = 864e5;
	if (d < DAY) return `in ${Math.max(1, Math.round(d / 36e5))}h`;
	return `in ${Math.round(d / DAY)}d`;
}
function fmtDateTime(ts) {
	return new Date(ts).toLocaleString(void 0, {
		day: "numeric",
		month: "short",
		hour: "2-digit",
		minute: "2-digit"
	});
}
function wordCount(text) {
	return text.trim().split(/\s+/).filter(Boolean).length;
}
function readMinutes(words) {
	return Math.max(1, Math.round(words / 200));
}
function highlightDates(text) {
	return text.replace(/\b(1?\d{3}(?:–|-)\d{2,4}|[12]\d{3}|AD \d+|\d+ BC)\b/g, "<mark>$1</mark>");
}
function escapeHtml(t) {
	return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-G4sCl9hs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
/**
* Whether `origin` is a known Grok embedder. Exported for tests.
* Do not list internal staging hosts here — this file ships in download/export.
*/
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
/** Public preview zone. Staging embedders frame this host via the proxy CSP. */
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
/** Resolve the parent origin to post to, or null when the bridge must noop. */
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	const candidates = [referrer, ancestorOrigin ?? ""].filter(Boolean);
	for (const candidate of candidates) try {
		const origin = candidate.includes("://") ? new URL(candidate).origin : candidate;
		if (isGrokEmbedderOrigin(origin)) return origin;
		if (!isSandboxPreviewGuestHost(guestHostname)) continue;
		const parsed = new URL(origin.includes("://") ? origin : `https://${origin}`);
		if (parsed.protocol === "https:" || parsed.protocol === "http:") return parsed.origin;
	} catch {}
	return null;
}
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var PACKAGE_VERSION = "1.6.27";
var GENERIC_OAUTH_ERROR_CODES = defineErrorCodes({
	INVALID_OAUTH_CONFIGURATION: "Invalid OAuth configuration",
	TOKEN_URL_NOT_FOUND: "Invalid OAuth configuration. Token URL not found.",
	PROVIDER_CONFIG_NOT_FOUND: "No config found for provider",
	PROVIDER_ID_REQUIRED: "Provider ID is required",
	INVALID_OAUTH_CONFIG: "Invalid OAuth configuration.",
	SESSION_REQUIRED: "Session is required",
	ISSUER_MISMATCH: "OAuth issuer mismatch. The authorization server issuer does not match the expected value (RFC 9207).",
	ISSUER_MISSING: "OAuth issuer parameter missing. The authorization server did not include the required iss parameter (RFC 9207)."
});
var genericOAuthClient = () => {
	return {
		id: "generic-oauth-client",
		version: PACKAGE_VERSION,
		$InferServerPlugin: {},
		$ERROR_CODES: GENERIC_OAUTH_ERROR_CODES
	};
};
function tryDecode$1(str) {
	if (str.indexOf("%") === -1) return str;
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}
var SECURE_COOKIE_PREFIX = "__Secure-";
/**
* Split a comma-joined `Set-Cookie` header string into individual cookies.
*/
function splitSetCookieHeader(setCookie) {
	if (!setCookie) return [];
	const result = [];
	let start = 0;
	let i = 0;
	while (i < setCookie.length) {
		if (setCookie[i] === ",") {
			let j = i + 1;
			while (j < setCookie.length && setCookie[j] === " ") j++;
			while (j < setCookie.length && setCookie[j] !== "=" && setCookie[j] !== ";" && setCookie[j] !== ",") j++;
			if (j < setCookie.length && setCookie[j] === "=") {
				const part = setCookie.slice(start, i).trim();
				if (part) result.push(part);
				start = i + 1;
				while (start < setCookie.length && setCookie[start] === " ") start++;
				i = start;
				continue;
			}
		}
		i++;
	}
	const last = setCookie.slice(start).trim();
	if (last) result.push(last);
	return result;
}
function parseSetCookieHeader(setCookie) {
	const cookies = /* @__PURE__ */ new Map();
	splitSetCookieHeader(setCookie).forEach((cookieString) => {
		const [nameValue, ...attributes] = cookieString.split(";").map((part) => part.trim());
		const [name, ...valueParts] = (nameValue || "").split("=");
		const value = unquoteCookieValue(valueParts.join("="));
		if (!name) return;
		const attrObj = { value: tryDecode$1(value) };
		attributes.forEach((attribute) => {
			const [attrName, ...attrValueParts] = attribute.split("=");
			const attrValue = attrValueParts.join("=");
			const normalizedAttrName = attrName.trim().toLowerCase();
			switch (normalizedAttrName) {
				case "max-age":
					attrObj["max-age"] = attrValue ? parseInt(attrValue.trim(), 10) : void 0;
					break;
				case "expires":
					attrObj.expires = attrValue ? new Date(attrValue.trim()) : void 0;
					break;
				case "domain":
					attrObj.domain = attrValue ? attrValue.trim() : void 0;
					break;
				case "path":
					attrObj.path = attrValue ? attrValue.trim() : void 0;
					break;
				case "secure":
					attrObj.secure = true;
					break;
				case "httponly":
					attrObj.httponly = true;
					break;
				case "samesite":
					attrObj.samesite = attrValue ? attrValue.trim().toLowerCase() : void 0;
					break;
				case "partitioned":
					attrObj.partitioned = true;
					break;
				default: attrObj[normalizedAttrName] = attrValue ? attrValue.trim() : true;
			}
		});
		cookies.set(name, attrObj);
	});
	return cookies;
}
function toCookieOptions(attributes) {
	return {
		maxAge: attributes["max-age"],
		expires: attributes.expires,
		domain: attributes.domain,
		path: attributes.path,
		secure: attributes.secure,
		httpOnly: attributes.httponly,
		sameSite: attributes.samesite,
		partitioned: attributes.partitioned
	};
}
/**
* Cookie-name token char set per RFC 7230 §3.2.6.
*
* @see https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6
*/
var cookieNameRegex = /^[\x21\x23-\x27\x2A\x2B\x2D\x2E\x30-\x39\x41-\x5A\x5E\x5F\x60\x61-\x7A\x7C\x7E]+$/;
/**
* Cookie-value char set per RFC 6265 §4.1.1, plus space and comma.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
* @see https://github.com/golang/go/issues/7243
*/
var cookieValueRegex = /^[\x20\x21\x23-\x3A\x3C-\x5B\x5D-\x7E]*$/;
/**
* Strip surrounding double-quotes per RFC 6265 §4.1.1 quoted-string form.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
*/
function unquoteCookieValue(value) {
	if (value.length < 2 || !value.startsWith("\"") || !value.endsWith("\"")) return value;
	return value.slice(1, -1);
}
/**
* Trim leading/trailing OWS (space / horizontal tab) per RFC 7230 §3.2.3.
* Narrower than `String.prototype.trim()`, which strips CR/LF and other
* whitespace and would let CTLs escape `cookieValueRegex`.
*
* @see https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.3
*/
function trimOWS(s) {
	let start = 0;
	let end = s.length;
	while (start < end) {
		const c = s.charCodeAt(start);
		if (c !== 32 && c !== 9) break;
		start++;
	}
	while (end > start) {
		const c = s.charCodeAt(end - 1);
		if (c !== 32 && c !== 9) break;
		end--;
	}
	return start === 0 && end === s.length ? s : s.slice(start, end);
}
/**
* Tolerates `;` separators without the SP that RFC 6265 §4.2.1 mandates,
* since proxies and runtimes commonly strip it. Silently drops entries
* whose name violates RFC 7230 token or whose value violates RFC 6265
* cookie-octet (plus space and comma). Strips optional surrounding
* double-quotes per RFC 6265 §4.1.1.
*/
function parseCookies(cookie) {
	const cookieMap = /* @__PURE__ */ new Map();
	if (cookie.length < 2) return cookieMap;
	for (const chunk of cookie.split(";")) {
		const eq = chunk.indexOf("=");
		if (eq === -1) continue;
		const key = trimOWS(chunk.slice(0, eq));
		const val = unquoteCookieValue(trimOWS(chunk.slice(eq + 1)));
		if (cookieNameRegex.test(key) && cookieValueRegex.test(val)) cookieMap.set(key, tryDecode$1(val));
	}
	return cookieMap;
}
/**
* Add or replace a cookie in the request `Cookie` header.
*
* Cookie pairs are joined with `; `, but `headers.append("cookie", ...)`
* joins with `, ` in some runtimes (e.g. Deno, Cloudflare Workers) and
* breaks downstream cookie parsing. This builds the header value via
* parse-mutate-serialize.
*/
function setRequestCookie(headers, name, value) {
	const cookieMap = parseCookies(headers.get("cookie") || "");
	if (cookieNameRegex.test(name)) cookieMap.set(name, value);
	headers.set("cookie", Array.from(cookieMap, ([k, v]) => `${k}=${encodeURIComponent(v)}`).join("; "));
}
/**
* Escapes a character if it has a special meaning in regular expressions
* and returns the character as is if it doesn't
*/
function escapeRegExpChar(char) {
	if (char === "-" || char === "^" || char === "$" || char === "+" || char === "." || char === "(" || char === ")" || char === "|" || char === "[" || char === "]" || char === "{" || char === "}" || char === "*" || char === "?" || char === "\\") return `\\${char}`;
	else return char;
}
/**
* Escapes all characters in a given string that have a special meaning in regular expressions
*/
function escapeRegExpString(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) result += escapeRegExpChar(str[i]);
	return result;
}
/**
* Transforms one or more glob patterns into a RegExp pattern
*/
function transform(pattern, separator = true) {
	if (Array.isArray(pattern)) return `(?:${pattern.map((p) => `^${transform(p, separator)}$`).join("|")})`;
	let separatorSplitter = "";
	let separatorMatcher = "";
	let wildcard = ".";
	if (separator === true) {
		separatorSplitter = "/";
		separatorMatcher = "[/\\\\]";
		wildcard = "[^/\\\\]";
	} else if (separator) {
		separatorSplitter = separator;
		separatorMatcher = escapeRegExpString(separatorSplitter);
		if (separatorMatcher.length > 1) {
			separatorMatcher = `(?:${separatorMatcher})`;
			wildcard = `((?!${separatorMatcher}).)`;
		} else wildcard = `[^${separatorMatcher}]`;
	}
	const requiredSeparator = separator ? `${separatorMatcher}+?` : "";
	const optionalSeparator = separator ? `${separatorMatcher}*?` : "";
	const segments = separator ? pattern.split(separatorSplitter) : [pattern];
	let result = "";
	for (let s = 0; s < segments.length; s++) {
		const segment = segments[s];
		const nextSegment = segments[s + 1];
		let currentSeparator = "";
		if (!segment && s > 0) continue;
		if (separator) if (s === segments.length - 1) currentSeparator = optionalSeparator;
		else if (nextSegment !== "**") currentSeparator = requiredSeparator;
		else currentSeparator = "";
		if (separator && segment === "**") {
			if (currentSeparator) {
				result += s === 0 ? "" : currentSeparator;
				result += `(?:${wildcard}*?${currentSeparator})*?`;
			}
			continue;
		}
		for (let c = 0; c < segment.length; c++) {
			const char = segment[c];
			if (char === "\\") {
				if (c < segment.length - 1) {
					result += escapeRegExpChar(segment[c + 1]);
					c++;
				}
			} else if (char === "?") result += wildcard;
			else if (char === "*") result += `${wildcard}*?`;
			else result += escapeRegExpChar(char);
		}
		result += currentSeparator;
	}
	return result;
}
function isMatch(regexp, sample) {
	if (typeof sample !== "string") throw new TypeError(`Sample must be a string, but ${typeof sample} given`);
	return regexp.test(sample);
}
/**
* Compiles one or more glob patterns into a RegExp and returns an isMatch function.
* The isMatch function takes a sample string as its only argument and returns `true`
* if the string matches the pattern(s).
*
* ```js
* wildcardMatch('src/*.js')('src/index.js') //=> true
* ```
*
* ```js
* const isMatch = wildcardMatch('*.example.com', '.')
* isMatch('foo.example.com') //=> true
* isMatch('foo.bar.com') //=> false
* ```
*/
function wildcardMatch(pattern, options) {
	if (typeof pattern !== "string" && !Array.isArray(pattern)) throw new TypeError(`The first argument must be a single pattern string or an array of patterns, but ${typeof pattern} given`);
	if (typeof options === "string" || typeof options === "boolean") options = { separator: options };
	if (arguments.length === 2 && !(typeof options === "undefined" || typeof options === "object" && options !== null && !Array.isArray(options))) throw new TypeError(`The second argument must be an options object or a string/boolean separator, but ${typeof options} given`);
	options = options || {};
	if (options.separator === "\\") throw new Error("\\ is not a valid separator because it is used for escaping. Try setting the separator to `true` instead");
	const regexpPattern = transform(pattern, options.separator);
	const regexp = new RegExp(`^${regexpPattern}$`, options.flags);
	const fn = isMatch.bind(null, regexp);
	fn.options = options;
	fn.pattern = pattern;
	fn.regexp = regexp;
	return fn;
}
var SLASH_CHAR_CODE = "/".charCodeAt(0);
/**
* Minimal loopback check for dev scheme inference only. Reachable from
* `client/config.ts` via `getBaseURL`, so we MUST NOT import the full
* `@better-auth/core/utils/host` classifier here: its `utils/ip` dependency
* on zod would leak into the client bundle (see `e2e/smoke/test/vite.spec.ts`).
*
* Server-side SSRF/loopback checks (oauth redirect matching, trusted-origin
* resolution, electron fetch gate) continue to use the authoritative
* `isLoopbackHost` from `@better-auth/core/utils/host`. This helper's only
* job is picking `http` vs `https` for dev ergonomics.
*/
function isLoopbackForDevScheme(host) {
	const hostname = host.replace(/:\d+$/, "").replace(/^\[|\]$/g, "").toLowerCase();
	return hostname === "localhost" || hostname.endsWith(".localhost") || hostname === "::1" || hostname.startsWith("127.");
}
function trimTrailingSlashes(value) {
	let end = value.length;
	while (end > 0 && value.charCodeAt(end - 1) === SLASH_CHAR_CODE) end--;
	return end === value.length ? value : value.slice(0, end);
}
function checkHasPath(url) {
	try {
		return (trimTrailingSlashes(new URL(url).pathname) || "/") !== "/";
	} catch {
		throw new BetterAuthError(`Invalid base URL: ${url}. Please provide a valid base URL.`);
	}
}
function assertHasProtocol(url) {
	try {
		const parsedUrl = new URL(url);
		if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") throw new BetterAuthError(`Invalid base URL: ${url}. URL must include 'http://' or 'https://'`);
	} catch (error) {
		if (error instanceof BetterAuthError) throw error;
		throw new BetterAuthError(`Invalid base URL: ${url}. Please provide a valid base URL.`, { cause: error });
	}
}
function withPath(url, path = "/api/auth") {
	assertHasProtocol(url);
	if (checkHasPath(url)) return url;
	const trimmedUrl = trimTrailingSlashes(url);
	if (!path || path === "/") return trimmedUrl;
	path = path.startsWith("/") ? path : `/${path}`;
	return `${trimmedUrl}${path}`;
}
function validateProxyHeader(header, type) {
	if (!header || header.trim() === "") return false;
	if (type === "proto") return header === "http" || header === "https";
	if (type === "host") {
		if ([
			/\.\./,
			/\0/,
			/[\s]/,
			/^[.]/,
			/[<>'"]/,
			/javascript:/i,
			/file:/i,
			/data:/i
		].some((pattern) => pattern.test(header))) return false;
		return /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(:[0-9]{1,5})?$/.test(header) || /^(\d{1,3}\.){3}\d{1,3}(:[0-9]{1,5})?$/.test(header) || /^\[[0-9a-fA-F:]+\](:[0-9]{1,5})?$/.test(header) || /^localhost(:[0-9]{1,5})?$/i.test(header);
	}
	return false;
}
function getBaseURL(url, path, request, loadEnv, trustedProxyHeaders) {
	if (url) return withPath(url, path);
	if (loadEnv !== false) {
		const fromEnv = env.BETTER_AUTH_URL || env.NEXT_PUBLIC_BETTER_AUTH_URL || env.PUBLIC_BETTER_AUTH_URL || env.NUXT_PUBLIC_BETTER_AUTH_URL || env.NUXT_PUBLIC_AUTH_URL || (env.BASE_URL !== "/" ? env.BASE_URL : void 0);
		if (fromEnv) return withPath(fromEnv, path);
	}
	const fromRequest = request?.headers.get("x-forwarded-host");
	const fromRequestProto = request?.headers.get("x-forwarded-proto");
	if (fromRequest && fromRequestProto && trustedProxyHeaders) {
		if (validateProxyHeader(fromRequestProto, "proto") && validateProxyHeader(fromRequest, "host")) try {
			return withPath(`${fromRequestProto}://${fromRequest}`, path);
		} catch (_error) {}
	}
	if (request) {
		const url = getOrigin(request.url);
		if (!url) throw new BetterAuthError("Could not get origin from request. Please provide a valid base URL.");
		return withPath(url, path);
	}
	if (typeof window !== "undefined" && window.location) return withPath(window.location.origin, path);
}
function getOrigin(url) {
	try {
		const parsedUrl = new URL(url);
		return parsedUrl.origin === "null" ? null : parsedUrl.origin;
	} catch {
		return null;
	}
}
function getProtocol(url) {
	try {
		return new URL(url).protocol;
	} catch {
		return null;
	}
}
function getHost(url) {
	try {
		return new URL(url).host;
	} catch {
		return null;
	}
}
/**
* Checks if the baseURL config is a dynamic config object
*/
function isDynamicBaseURLConfig(config) {
	return typeof config === "object" && config !== null && "allowedHosts" in config && Array.isArray(config.allowedHosts);
}
/**
* Check if a value is a `Request`
* - `instanceof`: works for native Request instances
* - `toString`: handles where instanceof check fails but the object is still a
*   valid Request (e.g. cross-realm, polyfills). Paired with a shape check so
*   an object that only spoofs `Symbol.toStringTag` without the real shape is
*   rejected before downstream code tries to read `.headers` / `.url`.
*
* @param value The value to check
* @returns `true` if the value is a Request instance
*/
function isRequestLike(value) {
	if (value instanceof Request) return true;
	if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Request]") return false;
	const v = value;
	return typeof v.url === "string" && typeof v.headers === "object" && v.headers !== null && typeof v.headers.get === "function";
}
/**
* Extracts the host from a `Request` or `Headers`.
* Honors `x-forwarded-host` only when `trustedProxyHeaders` is enabled,
* then falls back to the `host` header and finally the request URL.
*/
function getHostFromSource(source, trustedProxyHeaders) {
	const headers = isRequestLike(source) ? source.headers : source;
	if (trustedProxyHeaders) {
		const forwardedHost = headers.get("x-forwarded-host");
		if (forwardedHost && validateProxyHeader(forwardedHost, "host")) return forwardedHost;
	}
	const host = headers.get("host");
	if (host && validateProxyHeader(host, "host")) return host;
	if (isRequestLike(source)) try {
		return new URL(source.url).host;
	} catch {
		return null;
	}
	return null;
}
/**
* Extracts the protocol from a `Request` or `Headers`.
* Honors `x-forwarded-proto` only when `trustedProxyHeaders` is enabled,
* then falls back to the request URL, then to "https".
*/
function getProtocolFromSource(source, configProtocol, trustedProxyHeaders) {
	if (configProtocol === "http" || configProtocol === "https") return configProtocol;
	const headers = isRequestLike(source) ? source.headers : source;
	if (trustedProxyHeaders) {
		const forwardedProto = headers.get("x-forwarded-proto");
		if (forwardedProto && validateProxyHeader(forwardedProto, "proto")) return forwardedProto;
	}
	if (isRequestLike(source)) try {
		const url = new URL(source.url);
		if (url.protocol === "http:" || url.protocol === "https:") return url.protocol.slice(0, -1);
	} catch {}
	const host = getHostFromSource(source, trustedProxyHeaders);
	if (host && isLoopbackForDevScheme(host)) return "http";
	return "https";
}
/**
* Matches a hostname against a host pattern.
* Supports wildcard patterns like `*.vercel.app` or `preview-*.myapp.com`.
*
* @param host The hostname to test (e.g., "myapp.com", "preview-123.vercel.app")
* @param pattern The host pattern (e.g., "myapp.com", "*.vercel.app")
* @returns {boolean} true if the host matches the pattern, false otherwise.
*
* @example
* ```ts
* matchesHostPattern("myapp.com", "myapp.com") // true
* matchesHostPattern("preview-123.vercel.app", "*.vercel.app") // true
* matchesHostPattern("preview-123.myapp.com", "preview-*.myapp.com") // true
* matchesHostPattern("evil.com", "myapp.com") // false
* ```
*/
var matchesHostPattern = (host, pattern) => {
	if (!host || !pattern) return false;
	const normalizedHost = host.replace(/^https?:\/\//, "").split("/")[0].toLowerCase();
	const normalizedPattern = pattern.replace(/^https?:\/\//, "").split("/")[0].toLowerCase();
	if (normalizedPattern.includes("*") || normalizedPattern.includes("?")) return wildcardMatch(normalizedPattern)(normalizedHost);
	return normalizedHost.toLowerCase() === normalizedPattern.toLowerCase();
};
/**
* Resolves the base URL from a dynamic config based on the incoming request.
* Validates the derived host against the allowedHosts allowlist.
*
* @param config The dynamic base URL config
* @param request The incoming request
* @param basePath The base path to append
* @returns The resolved base URL with path
* @throws BetterAuthError if host is not in allowedHosts and no fallback is set
*/
function resolveDynamicBaseURL(config, source, basePath, trustedProxyHeaders) {
	const host = getHostFromSource(source, trustedProxyHeaders);
	if (!host) {
		if (config.fallback) return withPath(config.fallback, basePath);
		throw new BetterAuthError("Could not determine host from request headers. Please provide a fallback URL in your baseURL config.");
	}
	if (config.allowedHosts.some((pattern) => matchesHostPattern(host, pattern))) return withPath(`${getProtocolFromSource(source, config.protocol, trustedProxyHeaders)}://${host}`, basePath);
	if (config.fallback) return withPath(config.fallback, basePath);
	throw new BetterAuthError(`Host "${host}" is not in the allowed hosts list. Allowed hosts: ${config.allowedHosts.join(", ")}. Add this host to your allowedHosts config or provide a fallback URL.`);
}
/**
* Resolves the base URL from any config type (static string or dynamic object).
* This is the main entry point for base URL resolution.
*
* @param config The base URL config (string or object)
* @param basePath The base path to append
* @param request Optional request for dynamic resolution
* @param loadEnv Whether to load from environment variables
* @param trustedProxyHeaders Whether to trust proxy headers (for legacy behavior)
* @returns The resolved base URL with path
*/
function resolveBaseURL(config, basePath, source, loadEnv, trustedProxyHeaders) {
	if (isDynamicBaseURLConfig(config)) {
		if (source) return resolveDynamicBaseURL(config, source, basePath, trustedProxyHeaders);
		if (config.fallback) return withPath(config.fallback, basePath);
		return getBaseURL(void 0, basePath, void 0, loadEnv, trustedProxyHeaders);
	}
	const request = isRequestLike(source) ? source : void 0;
	if (typeof config === "string") return getBaseURL(config, basePath, request, loadEnv, trustedProxyHeaders);
	return getBaseURL(void 0, basePath, request, loadEnv, trustedProxyHeaders);
}
function isPlainObject(value) {
	if (typeof value !== "object" || value === null) return false;
	const prototype = Object.getPrototypeOf(value);
	return prototype === Object.prototype || prototype === null;
}
/**
* Deep structural equality for JSON-serializable values.
* Handles: primitives, null, arrays, and plain objects.
* Short-circuits on referential equality at every recursion level.
*/
function isJsonEqual(a, b) {
	if (a === b) return true;
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) if (!isJsonEqual(a[i], b[i])) return false;
		return true;
	}
	if (isPlainObject(a) && isPlainObject(b)) {
		const keysA = Object.keys(a);
		const keysB = Object.keys(b);
		if (keysA.length !== keysB.length) return false;
		for (const key of keysA) if (!(key in b) || !isJsonEqual(a[key], b[key])) return false;
		return true;
	}
	return false;
}
/**
* Attach an equality gate to a nanostores atom via `onSet`.
* When `isEqual(currentValue, newValue)` returns true, the `set()` call
* is aborted: no listeners fire, no framework re-renders occur.
*
* Returns the unsubscribe function from `onSet`.
*/
function withEquality(store, isEqual) {
	return onSet(store, ({ newValue, abort }) => {
		if (isEqual(store.value, newValue)) abort();
	});
}
var PROTO_POLLUTION_PATTERNS = {
	proto: /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
	constructor: /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
	protoShort: /"__proto__"\s*:/,
	constructorShort: /"constructor"\s*:/
};
var JSON_SIGNATURE = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
var SPECIAL_VALUES = {
	true: true,
	false: false,
	null: null,
	undefined: void 0,
	nan: NaN,
	infinity: Number.POSITIVE_INFINITY,
	"-infinity": Number.NEGATIVE_INFINITY
};
var ISO_DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function isValidDate(date) {
	return date instanceof Date && !isNaN(date.getTime());
}
function parseISODate(value) {
	const match = ISO_DATE_REGEX.exec(value);
	if (!match) return null;
	const [, year, month, day, hour, minute, second, ms, offsetSign, offsetHour, offsetMinute] = match;
	const date = new Date(Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), parseInt(hour, 10), parseInt(minute, 10), parseInt(second, 10), ms ? parseInt(ms.padEnd(3, "0"), 10) : 0));
	if (offsetSign) {
		const offset = (parseInt(offsetHour, 10) * 60 + parseInt(offsetMinute, 10)) * (offsetSign === "+" ? -1 : 1);
		date.setUTCMinutes(date.getUTCMinutes() + offset);
	}
	return isValidDate(date) ? date : null;
}
function betterJSONParse(value, options = {}) {
	const { strict = false, warnings = false, reviver, parseDates = true } = options;
	if (typeof value !== "string") return value;
	const trimmed = value.trim();
	const lowerValue = trimmed.toLowerCase();
	if (lowerValue.length <= 9 && lowerValue in SPECIAL_VALUES) return SPECIAL_VALUES[lowerValue];
	if (!JSON_SIGNATURE.test(trimmed)) {
		if (strict) throw new SyntaxError("[better-json] Invalid JSON");
		return value;
	}
	if (Object.entries(PROTO_POLLUTION_PATTERNS).some(([key, pattern]) => {
		const matches = pattern.test(trimmed);
		if (matches && warnings) console.warn(`[better-json] Detected potential prototype pollution attempt using ${key} pattern`);
		return matches;
	}) && strict) throw new Error("[better-json] Potential prototype pollution attempt detected");
	try {
		const secureReviver = (key, value) => {
			if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
				if (warnings) console.warn(`[better-json] Dropping "${key}" key to prevent prototype pollution`);
				return;
			}
			if (parseDates && typeof value === "string") {
				const date = parseISODate(value);
				if (date) return date;
			}
			return reviver ? reviver(key, value) : value;
		};
		return JSON.parse(trimmed, secureReviver);
	} catch (error) {
		if (strict) throw error;
		return value;
	}
}
function parseJSON(value, options = { strict: true }) {
	return betterJSONParse(value, options);
}
var redirectPlugin = {
	id: "redirect",
	name: "Redirect",
	hooks: { onSuccess(context) {
		if (context.data?.url && context.data?.redirect && isSafeUrlScheme(context.data.url)) {
			if (typeof window !== "undefined" && window.location) {
				if (window.location) try {
					window.location.href = context.data.url;
				} catch {}
			}
		}
	} }
};
var kBroadcastChannel = Symbol.for("better-auth:broadcast-channel");
var now$2 = () => Math.floor(Date.now() / 1e3);
var WindowBroadcastChannel = class {
	listeners = /* @__PURE__ */ new Set();
	name;
	constructor(name = "better-auth.message") {
		this.name = name;
	}
	subscribe(listener) {
		this.listeners.add(listener);
		return () => {
			this.listeners.delete(listener);
		};
	}
	post(message) {
		if (typeof window === "undefined") return;
		try {
			localStorage.setItem(this.name, JSON.stringify({
				...message,
				timestamp: now$2()
			}));
		} catch {}
	}
	setup() {
		if (typeof window === "undefined" || typeof window.addEventListener === "undefined") return () => {};
		const handler = (event) => {
			if (event.key !== this.name) return;
			const message = JSON.parse(event.newValue ?? "{}");
			if (message?.event !== "session" || !message?.data) return;
			this.listeners.forEach((listener) => listener(message));
		};
		window.addEventListener("storage", handler);
		return () => {
			window.removeEventListener("storage", handler);
		};
	}
};
function getGlobalBroadcastChannel(name = "better-auth.message") {
	if (!globalThis[kBroadcastChannel]) globalThis[kBroadcastChannel] = new WindowBroadcastChannel(name);
	return globalThis[kBroadcastChannel];
}
var kFocusManager = Symbol.for("better-auth:focus-manager");
var WindowFocusManager = class {
	listeners = /* @__PURE__ */ new Set();
	subscribe(listener) {
		this.listeners.add(listener);
		return () => {
			this.listeners.delete(listener);
		};
	}
	setFocused(focused) {
		this.listeners.forEach((listener) => listener(focused));
	}
	setup() {
		if (typeof window === "undefined" || typeof document === "undefined" || typeof window.addEventListener === "undefined") return () => {};
		const visibilityHandler = () => {
			if (document.visibilityState === "visible") this.setFocused(true);
		};
		document.addEventListener("visibilitychange", visibilityHandler, false);
		return () => {
			document.removeEventListener("visibilitychange", visibilityHandler, false);
		};
	}
};
function getGlobalFocusManager() {
	if (!globalThis[kFocusManager]) globalThis[kFocusManager] = new WindowFocusManager();
	return globalThis[kFocusManager];
}
var kOnlineManager = Symbol.for("better-auth:online-manager");
var WindowOnlineManager = class {
	listeners = /* @__PURE__ */ new Set();
	isOnline = typeof navigator !== "undefined" ? navigator.onLine : true;
	subscribe(listener) {
		this.listeners.add(listener);
		return () => {
			this.listeners.delete(listener);
		};
	}
	setOnline(online) {
		this.isOnline = online;
		this.listeners.forEach((listener) => listener(online));
	}
	setup() {
		if (typeof window === "undefined" || typeof window.addEventListener === "undefined") return () => {};
		const onOnline = () => this.setOnline(true);
		const onOffline = () => this.setOnline(false);
		window.addEventListener("online", onOnline, false);
		window.addEventListener("offline", onOffline, false);
		return () => {
			window.removeEventListener("online", onOnline, false);
			window.removeEventListener("offline", onOffline, false);
		};
	}
};
function getGlobalOnlineManager() {
	if (!globalThis[kOnlineManager]) globalThis[kOnlineManager] = new WindowOnlineManager();
	return globalThis[kOnlineManager];
}
var now$1 = () => Math.floor(Date.now() / 1e3);
/**
* Rate limit: don't refetch on focus if a session request was made within this many seconds
*/
var FOCUS_REFETCH_RATE_LIMIT_SECONDS = 5;
function createSessionRefreshManager(opts) {
	const { fetchSession, shouldPollSession = () => true, sessionSignal, options = {} } = opts;
	const refetchInterval = options.sessionOptions?.refetchInterval ?? 0;
	const refetchOnWindowFocus = options.sessionOptions?.refetchOnWindowFocus ?? true;
	const refetchWhenOffline = options.sessionOptions?.refetchWhenOffline ?? false;
	const state = {
		isInitialized: false,
		lastSessionRequest: 0
	};
	const shouldRefetch = () => {
		return refetchWhenOffline || getGlobalOnlineManager().isOnline;
	};
	const triggerRefetch = (event) => {
		if (!shouldRefetch()) return;
		if (event?.event === "storage") {
			fetchSession();
			return;
		}
		if (event?.event === "poll") {
			state.lastSessionRequest = now$1();
			fetchSession();
			return;
		}
		if (event?.event === "visibilitychange") {
			if (now$1() - state.lastSessionRequest < FOCUS_REFETCH_RATE_LIMIT_SECONDS) return;
			state.lastSessionRequest = now$1();
			fetchSession();
			return;
		}
		fetchSession();
	};
	const broadcastSessionUpdate = (trigger) => {
		getGlobalBroadcastChannel().post({
			event: "session",
			data: { trigger },
			clientId: Math.random().toString(36).substring(7)
		});
	};
	const setupPolling = () => {
		if (refetchInterval && refetchInterval > 0) state.pollInterval = setInterval(() => {
			if (shouldPollSession()) triggerRefetch({ event: "poll" });
		}, refetchInterval * 1e3);
	};
	const setupBroadcast = () => {
		state.unsubscribeBroadcast = getGlobalBroadcastChannel().subscribe(() => {
			triggerRefetch({ event: "storage" });
		});
	};
	const setupFocusRefetch = () => {
		if (!refetchOnWindowFocus) return;
		state.unsubscribeFocus = getGlobalFocusManager().subscribe(() => {
			triggerRefetch({ event: "visibilitychange" });
		});
	};
	const setupOnlineRefetch = () => {
		state.unsubscribeOnline = getGlobalOnlineManager().subscribe((online) => {
			if (online) triggerRefetch({ event: "visibilitychange" });
		});
	};
	const setupSignalSubscription = () => {
		state.unsubscribeSignal = sessionSignal.listen(() => {
			fetchSession();
		});
	};
	const init = () => {
		if (state.isInitialized) return;
		state.isInitialized = true;
		setupPolling();
		setupBroadcast();
		setupFocusRefetch();
		setupOnlineRefetch();
		setupSignalSubscription();
		state.cleanupBroadcastSetup = getGlobalBroadcastChannel().setup();
		state.cleanupFocusSetup = getGlobalFocusManager().setup();
		state.cleanupOnlineSetup = getGlobalOnlineManager().setup();
	};
	const cleanup = () => {
		if (!state.isInitialized) return;
		if (state.pollInterval) {
			clearInterval(state.pollInterval);
			state.pollInterval = void 0;
		}
		if (state.unsubscribeBroadcast) {
			state.unsubscribeBroadcast();
			state.unsubscribeBroadcast = void 0;
		}
		if (state.unsubscribeFocus) {
			state.unsubscribeFocus();
			state.unsubscribeFocus = void 0;
		}
		if (state.unsubscribeOnline) {
			state.unsubscribeOnline();
			state.unsubscribeOnline = void 0;
		}
		if (state.unsubscribeSignal) {
			state.unsubscribeSignal();
			state.unsubscribeSignal = void 0;
		}
		if (state.cleanupBroadcastSetup) {
			state.cleanupBroadcastSetup();
			state.cleanupBroadcastSetup = void 0;
		}
		if (state.cleanupFocusSetup) {
			state.cleanupFocusSetup();
			state.cleanupFocusSetup = void 0;
		}
		if (state.cleanupOnlineSetup) {
			state.cleanupOnlineSetup();
			state.cleanupOnlineSetup = void 0;
		}
		state.isInitialized = false;
		state.lastSessionRequest = 0;
	};
	return {
		init,
		cleanup,
		triggerRefetch,
		broadcastSessionUpdate
	};
}
var isServer = () => typeof window === "undefined";
/**
* Normalize $fetch response: `throw: true` returns data directly,
* otherwise `{ data, error }`.
*/
function normalizeSessionResponse(res) {
	if (typeof res === "object" && res !== null && "data" in res && "error" in res) return res;
	return {
		data: res,
		error: null
	};
}
function normalizeSessionData(data) {
	if (!data) return null;
	if (data.session === null && data.user === null) return null;
	return data;
}
function isSessionAtomEqual(a, b) {
	return isJsonEqual(a.data, b.data) && a.error === b.error && a.isPending === b.isPending && a.isRefetching === b.isRefetching && a.refetch === b.refetch;
}
function getSessionAtom($fetch, options) {
	const $signal = /* @__PURE__ */ atom(false);
	let activeRequest;
	const refetch = (queryParams) => fetchSession(queryParams);
	const session = /* @__PURE__ */ atom({
		data: null,
		error: null,
		isPending: true,
		isRefetching: false,
		refetch
	});
	withEquality(session, isSessionAtomEqual);
	const executeSessionFetch = async (signal, queryParams) => {
		const current = session.value;
		session.set({
			...current,
			isPending: current.data === null,
			isRefetching: true,
			error: null,
			refetch
		});
		if (signal.aborted) return;
		try {
			const res = await $fetch("/get-session", {
				method: "GET",
				query: queryParams?.query,
				signal
			});
			if (signal.aborted) return;
			let { data, error } = normalizeSessionResponse(res);
			if (data?.needsRefresh) try {
				const refreshRes = await $fetch("/get-session", {
					method: "POST",
					signal
				});
				if (signal.aborted) return;
				({data, error} = normalizeSessionResponse(refreshRes));
			} catch {
				if (signal.aborted) return;
			}
			if (error) {
				const latest = session.value;
				const isUnauthorized = error?.status === 401;
				session.set({
					data: isUnauthorized ? null : latest.data,
					error,
					isPending: false,
					isRefetching: false,
					refetch
				});
				return;
			}
			const sessionData = normalizeSessionData(data);
			const current = session.value;
			const stableData = current.data != null && sessionData != null && isJsonEqual(current.data, sessionData) ? current.data : sessionData;
			session.set({
				data: stableData,
				error: null,
				isPending: false,
				isRefetching: false,
				refetch
			});
		} catch (fetchError) {
			if (signal.aborted) return;
			const latest = session.value;
			session.set({
				data: latest.data,
				error: fetchError,
				isPending: false,
				isRefetching: false,
				refetch
			});
		}
	};
	const fetchSession = (queryParams) => {
		activeRequest?.cancel();
		const controller = new AbortController();
		const request = {
			cancel: () => controller.abort(),
			promise: Promise.resolve().then(() => {
				if (controller.signal.aborted) return;
				return executeSessionFetch(controller.signal, queryParams);
			})
		};
		activeRequest = request;
		const clearActiveRequest = () => {
			if (activeRequest === request) activeRequest = void 0;
		};
		request.promise.then(clearActiveRequest, clearActiveRequest);
		return request.promise;
	};
	const fetchSessionOnMount = () => activeRequest?.promise ?? fetchSession();
	let broadcastSessionUpdate = () => {};
	onMount(session, () => {
		let timeoutId;
		if (!isServer()) timeoutId = setTimeout(() => {
			fetchSessionOnMount();
		}, 0);
		const refreshManager = createSessionRefreshManager({
			fetchSession,
			shouldPollSession: () => session.value.data != null,
			sessionSignal: $signal,
			options
		});
		refreshManager.init();
		broadcastSessionUpdate = refreshManager.broadcastSessionUpdate;
		return () => {
			if (timeoutId) clearTimeout(timeoutId);
			refreshManager.cleanup();
		};
	});
	return {
		session,
		$sessionSignal: $signal,
		broadcastSessionUpdate: (trigger) => broadcastSessionUpdate(trigger)
	};
}
var resolvePublicAuthUrl = (basePath) => {
	if (typeof process === "undefined") return void 0;
	const path = basePath ?? "/api/auth";
	if (process.env.NEXT_PUBLIC_AUTH_URL) return process.env.NEXT_PUBLIC_AUTH_URL;
	if (typeof window === "undefined") {
		if (process.env.NEXTAUTH_URL) try {
			return process.env.NEXTAUTH_URL;
		} catch {}
		if (process.env.VERCEL_URL) try {
			const protocol = process.env.VERCEL_URL.startsWith("http") ? "" : "https://";
			return `${new URL(`${protocol}${process.env.VERCEL_URL}`).origin}${path}`;
		} catch {}
	}
};
var getClientConfig = (options, loadEnv) => {
	const isCredentialsSupported = "credentials" in Request.prototype;
	const baseURL = getBaseURL(options?.baseURL, options?.basePath, void 0, loadEnv) ?? resolvePublicAuthUrl(options?.basePath) ?? "/api/auth";
	const pluginsFetchPlugins = options?.plugins?.flatMap((plugin) => plugin.fetchPlugins).filter((pl) => pl !== void 0) || [];
	const lifeCyclePlugin = {
		id: "lifecycle-hooks",
		name: "lifecycle-hooks",
		hooks: {
			onSuccess: options?.fetchOptions?.onSuccess,
			onError: options?.fetchOptions?.onError,
			onRequest: options?.fetchOptions?.onRequest,
			onResponse: options?.fetchOptions?.onResponse
		}
	};
	const { onSuccess: _onSuccess, onError: _onError, onRequest: _onRequest, onResponse: _onResponse, ...restOfFetchOptions } = options?.fetchOptions || {};
	const $fetch = createFetch({
		baseURL,
		...isCredentialsSupported ? { credentials: "include" } : {},
		method: "GET",
		jsonParser(text) {
			if (!text) return null;
			return parseJSON(text, { strict: false });
		},
		customFetchImpl: fetch,
		...restOfFetchOptions,
		plugins: [
			lifeCyclePlugin,
			...restOfFetchOptions.plugins || [],
			...options?.disableDefaultFetchPlugins ? [] : [redirectPlugin],
			...pluginsFetchPlugins
		]
	});
	const { $sessionSignal, session, broadcastSessionUpdate } = getSessionAtom($fetch, options);
	const plugins = options?.plugins || [];
	let pluginsActions = {};
	const pluginsAtoms = {
		$sessionSignal,
		session
	};
	const pluginPathMethods = {
		"/sign-out": "POST",
		"/revoke-sessions": "POST",
		"/revoke-other-sessions": "POST",
		"/delete-user": "POST"
	};
	const atomListeners = [{
		signal: "$sessionSignal",
		matcher(path) {
			return path === "/sign-out" || path === "/update-user" || path === "/update-session" || path === "/sign-up/email" || path === "/sign-in/email" || path === "/delete-user" || path === "/verify-email" || path === "/revoke-sessions" || path === "/revoke-session" || path === "/revoke-other-sessions" || path === "/change-email" || path === "/change-password";
		},
		callback(path) {
			if (path === "/sign-out") broadcastSessionUpdate("signout");
			else if (path === "/update-user" || path === "/update-session") broadcastSessionUpdate("updateUser");
		}
	}];
	for (const plugin of plugins) {
		if (plugin.getAtoms) Object.assign(pluginsAtoms, plugin.getAtoms?.($fetch));
		if (plugin.pathMethods) Object.assign(pluginPathMethods, plugin.pathMethods);
		if (plugin.atomListeners) atomListeners.push(...plugin.atomListeners);
	}
	const $store = {
		notify: (signal) => {
			pluginsAtoms[signal].set(!pluginsAtoms[signal].get());
		},
		listen: (signal, listener) => {
			pluginsAtoms[signal].subscribe(listener);
		},
		atoms: pluginsAtoms
	};
	for (const plugin of plugins) if (plugin.getActions) pluginsActions = defu(plugin.getActions?.($fetch, $store, options) ?? {}, pluginsActions);
	return {
		get baseURL() {
			return baseURL;
		},
		pluginsActions,
		pluginsAtoms,
		pluginPathMethods,
		atomListeners,
		$fetch,
		$store
	};
};
function isAtom(value) {
	return typeof value === "object" && value !== null && "get" in value && typeof value.get === "function" && "lc" in value && typeof value.lc === "number";
}
function getMethod(path, knownPathMethods, args) {
	const method = knownPathMethods[path];
	const { fetchOptions, query: _query, ...body } = args || {};
	if (method) return method;
	if (fetchOptions?.method) return fetchOptions.method;
	if (body && Object.keys(body).length > 0) return "POST";
	return "GET";
}
function createDynamicPathProxy(routes, client, knownPathMethods, atoms, atomListeners) {
	function createProxy(path = []) {
		return new Proxy(function() {}, {
			get(_, prop) {
				if (typeof prop !== "string") return;
				if (prop === "then" || prop === "catch" || prop === "finally") return;
				const fullPath = [...path, prop];
				let current = routes;
				for (const segment of fullPath) if (current && typeof current === "object" && segment in current) current = current[segment];
				else {
					current = void 0;
					break;
				}
				if (typeof current === "function") return current;
				if (isAtom(current)) return current;
				return createProxy(fullPath);
			},
			apply: async (_, __, args) => {
				const routePath = "/" + path.map(toKebabCase).join("/");
				const arg = args[0] || {};
				const fetchOptions = args[1] || {};
				const { query, fetchOptions: argFetchOptions, ...body } = arg;
				const options = {
					...fetchOptions,
					...argFetchOptions
				};
				const method = getMethod(routePath, knownPathMethods, arg);
				return await client(routePath, {
					...options,
					body: method === "GET" ? void 0 : {
						...body,
						...options?.body || {}
					},
					query: query || options?.query,
					method,
					async onSuccess(context) {
						await options?.onSuccess?.(context);
						if (!atomListeners || options.disableSignal) return;
						/**
						* We trigger listeners
						*/
						const matches = atomListeners.filter((s) => s.matcher(routePath));
						if (!matches.length) return;
						const visited = /* @__PURE__ */ new Set();
						for (const match of matches) {
							const signal = atoms[match.signal];
							if (!signal) return;
							if (visited.has(match.signal)) continue;
							visited.add(match.signal);
							/**
							* To avoid race conditions we set the signal in a setTimeout
							*/
							const val = signal.get();
							setTimeout(() => {
								signal.set(!val);
							}, 10);
							match.callback?.(routePath);
						}
					}
				});
			}
		});
	}
	return createProxy();
}
/**
* Subscribe to store changes and get store's value.
*
* Can be used with store builder too.
*
* ```js
* import { useStore } from 'nanostores/react'
*
* import { router } from '../store/router'
*
* export const Layout = () => {
*   let page = useStore(router)
*   if (page.route === 'home') {
*     return <HomePage />
*   } else {
*     return <Error404 />
*   }
* }
* ```
*
* @param store Store instance.
* @returns Store value.
*/
function useStore(store, options = {}) {
	const snapshotRef = (0, import_react.useRef)(store.get());
	const { keys, deps = [store, keys] } = options;
	const subscribe = (0, import_react.useCallback)((onChange) => {
		const emitChange = (value) => {
			if (snapshotRef.current === value) return;
			snapshotRef.current = value;
			onChange();
		};
		emitChange(store.value);
		if (keys?.length) return listenKeys(store, keys, emitChange);
		return store.listen(emitChange);
	}, deps);
	const get = () => snapshotRef.current;
	return (0, import_react.useSyncExternalStore)(subscribe, get, get);
}
function getAtomKey(str) {
	return `use${capitalizeFirstLetter(str)}`;
}
function createAuthClient(options) {
	const { pluginPathMethods, pluginsActions, pluginsAtoms, $fetch, $store, atomListeners } = getClientConfig(options);
	const resolvedHooks = {};
	for (const [key, value] of Object.entries(pluginsAtoms)) resolvedHooks[getAtomKey(key)] = () => useStore(value);
	return createDynamicPathProxy({
		...pluginsActions,
		...resolvedHooks,
		$fetch,
		$store
	}, $fetch, pluginPathMethods, pluginsAtoms, atomListeners);
}
var GROK_PROVIDERS = [{
	providerId: "grok-google",
	idp: "google",
	label: "Google"
}, {
	providerId: "grok-x",
	idp: "twitter",
	label: "X"
}];
/**
* Better Auth client for this React SPA (browser-side).
*
* Talks to this app's OWN Better Auth at same-origin `/api/auth/*`. In the live
* preview the app is an embedded iframe with PARTITIONED cookies, so after a
* popup sign-in it can't read the session cookie — it authenticates with a
* bearer token instead (captured from the popup, see `signIn`). The `onRequest`
* hook attaches that token when present; when deployed (cookie auth) no token
* is stored, so nothing changes.
*/
var authClient = createAuthClient({
	plugins: [genericOAuthClient()],
	fetchOptions: { onRequest(ctx) {
		const token = getBearerToken();
		if (token) ctx.headers.set("Authorization", `Bearer ${token}`);
		return ctx;
	} }
});
var BEARER_KEY = "grok-auth.bearer-token";
/** The stored preview bearer token, or null. */
function getBearerToken() {
	if (typeof window === "undefined") return null;
	try {
		return window.sessionStorage.getItem(BEARER_KEY);
	} catch {
		return null;
	}
}
function setBearerToken(token) {
	if (typeof window === "undefined") return;
	try {
		if (token) window.sessionStorage.setItem(BEARER_KEY, token);
		else window.sessionStorage.removeItem(BEARER_KEY);
	} catch {}
}
/**
* The sandbox live preview runs this app inside an iframe on a `*.grok-sandbox.com`
* host, where a full-page redirect to the broker can't work — so sign-in uses a
* popup there and a normal redirect everywhere else.
*/
function inLivePreview() {
	return typeof window !== "undefined" && window.location.hostname.endsWith(".grok-sandbox.com");
}
/**
* Start sign-in with one upstream provider (`providerId` from `GROK_PROVIDERS`),
* federating through the Grok auth broker.
*
* - **Live preview** (`*.grok-sandbox.com` iframe): opens a POPUP to
*   `/auth/popup`, served by the template Vite plugin (see `vite.config.ts` +
*   `popup.server.ts`) — 302s to the broker/upstream login (no app chrome) and,
*   on return, posts the session bearer token back. We store it and refresh the
*   session; no top-level navigation of the iframe to the broker.
* - **Deployed** (and local non-iframe): a normal full-page redirect into the broker.
*
* Either way it clears any existing local session FIRST so switching providers
* actually switches identity.
*/
async function signIn(providerId, opts = {}) {
	const callbackURL = opts.callbackURL ?? "/";
	const errorCallbackURL = opts.errorCallbackURL ?? "/";
	const popup = inLivePreview() ? openSignInPopup(providerId) : null;
	if (Boolean(getBearerToken()) || !inLivePreview()) try {
		await authClient.signOut();
	} catch {}
	setBearerToken(null);
	if (inLivePreview()) {
		if (!popup) throw new Error("Pop-up blocked — allow pop-ups for sign-in");
		const token = await waitForPopupToken(popup);
		if (!token) throw new Error("Sign-in was cancelled or failed");
		setBearerToken(token);
		try {
			await authClient.getSession();
		} catch {}
		if (typeof window !== "undefined") {
			const dest = new URL(callbackURL, window.location.origin);
			const here = window.location;
			if (dest.origin !== here.origin || dest.pathname !== here.pathname || dest.search !== here.search) window.location.href = callbackURL;
		}
		return;
	}
	const { data, error } = await authClient.signIn.oauth2({
		providerId,
		callbackURL,
		errorCallbackURL
	});
	if (error) throw new Error(error.message ?? "Sign-in failed");
	if (data?.url) window.location.href = data.url;
}
/**
* Open `/auth/popup` in a new window. Must run synchronously inside the click
* handler (no await before this). The path is served by the template Vite
* plugin (`authPopupPlugin` in vite.config.ts) — NOT by a React route.
*
* Opens the real URL directly (not about:blank → assign). From a cross-origin
* iframe the about:blank dance often fails on the first click and the window
* ends up showing the app shell.
*/
function openSignInPopup(providerId) {
	const url = `${window.location.origin}/auth/popup?providerId=${encodeURIComponent(providerId)}`;
	const name = `grok-signin-${Date.now()}`;
	return window.open(url, name, "popup,width=500,height=650");
}
/**
* Wait for the popup's completion page to postMessage the session bearer (or
* for the user to dismiss the popup).
*/
function waitForPopupToken(popup) {
	return new Promise((resolve) => {
		const origin = window.location.origin;
		let settled = false;
		let closeTimer;
		const settle = (token) => {
			if (settled) return;
			settled = true;
			cleanup();
			resolve(token);
		};
		const onMessage = (event) => {
			if (event.origin !== origin) return;
			const data = event.data;
			if (!data || data.source !== "grok-auth-popup") return;
			settle(data.token ?? null);
		};
		const pollTimer = window.setInterval(() => {
			if (!popup.closed) return;
			window.clearInterval(pollTimer);
			closeTimer = window.setTimeout(() => settle(null), 400);
		}, 300);
		function cleanup() {
			window.clearInterval(pollTimer);
			if (closeTimer !== void 0) window.clearTimeout(closeTimer);
			window.removeEventListener("message", onMessage);
		}
		window.addEventListener("message", onMessage);
	});
}
/** Sign out of THIS app's local session, clear the preview token, then redirect. */
async function signOut$1(redirectTo = "/") {
	try {
		await authClient.signOut();
	} finally {
		setBearerToken(null);
	}
	window.location.href = redirectTo;
}
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled (default) -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
/**
* Render children only once we KNOW the visitor is signed out (`isPending` has
* cleared and there is no user). Hidden while the session is still loading.
*/
function SignedOut({ children }) {
	const { user, isPending } = useCurrentUserState();
	if (isPending || user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of).
*/
function UserButton() {
	const user = useCurrentUser();
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void signOut$1(),
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline",
				children: "Sign out"
			})
		]
	});
}
var handbook_default = {
	title: "Life in the UK: A guide for new residents – 3rd Edition",
	chapters: [
		{
			"num": 1,
			"title": "The values and principles of the UK",
			"sections": [
				{
					"id": "1.1",
					"title": "Chapter 1: The values and principles of the UK",
					"blocks": [
						{
							"t": "p",
							"x": "In this chapter you will learn about the fundamental rights and responsibilities which apply to everyone who lives in the UK, citizen or not. There is also some information about the format of the Life in the UK Test and the requirements for becoming a permanent resident."
						},
						{
							"t": "p",
							"x": "The questions you get in the real test will be based on the whole book, including this introductory chapter so make sure that you are familiar with the details of the application process for permanent residence as well as the rights and responsibilities of UK residents."
						},
						{
							"t": "infohead",
							"x": "IN THIS CHAPTER THERE IS INFORMATION ABOUT:"
						},
						{
							"t": "info",
							"x": "The fundamental principles of British life"
						},
						{
							"t": "info",
							"x": "Responsibilities and freedoms of all UK residents"
						},
						{
							"t": "info",
							"x": "Becoming a permanent resident"
						},
						{
							"t": "info",
							"x": "Taking the Life in the UK test"
						},
						{
							"t": "info",
							"x": "The testable sections of this book"
						},
						{
							"t": "info",
							"x": "Britain is a fantastic place to live: a modern, thriving society with a long and illustrious history. Our people have been at the heart of the world’s political, scientific, industrial and cultural development. We are proud of our record of welcoming new migrants who will add to the diversity and dynamism of our national life."
						},
						{
							"t": "info",
							"x": "Applying to become a permanent resident or citizen of the UK is an important decision and commitment. You will be agreeing to accept the responsibilities which go with permanent residence and to respect the laws, values and traditions of the UK. Good citizens are an asset to the UK. We welcome those seeking to make a positive contribution to our society."
						},
						{
							"t": "info",
							"x": "Passing the Life in the UK test is part of demonstrating that you are ready to become a permanent migrant to the UK. This handbook is designed to support you in your preparation. It will help you to integrate into society and play a full role in your local community. It will also help ensure that you have a broad general knowledge of the culture, laws and history of the UK."
						}
					]
				},
				{
					"id": "1.2",
					"title": "Becoming a permanent resident",
					"blocks": [
						{
							"t": "p",
							"x": "To apply to become a permanent resident or citizen of the UK, you will need to: speak and read English have a good understanding of life in the UK."
						},
						{
							"t": "p",
							"x": "There are currently (as of January 2013) two ways you can be tested on these requirements:"
						},
						{
							"t": "p",
							"x": "Take the Life in the UK test. The questions are written in a way that requires an understanding of the English language at English for Speakers of Other Languages (ESOL) Entry Level 3, so there is no need to take a separate English language test. People here on work visas, including those on Tier 1 and Tier 2 of the points based system, normally must pass the Life in the UK test to become permanent residents."
						},
						{
							"t": "p",
							"x": "Pass an ESOL course in English with Citizenship. You will need to take this course if your standard of English is below ESOL Entry Level 3. The course will help you to improve your English and learn more about life in the UK. At the end of the course you will take a test."
						},
						{
							"t": "p",
							"x": "Once you have passed one of these tests, you can make an application for permanent residence or British citizenship. The form that you have to complete and the evidence that you need to provide will depend on your personal circumstances. There is a fee for submitting an application, which is different for the various types of application. All of the forms and a list of fees can be found on the UK Border Agency website, www.ukba.homeoffice.gov.uk. From October 2013, the requirements will change. From that date, for settlement or permanent residence, you will need to:"
						},
						{
							"t": "p",
							"x": "Pass the Life in the UK test"
						},
						{
							"t": "p",
							"x": "AND"
						},
						{
							"t": "p",
							"x": "Produce acceptable evidence of speaking and listening skills in English at B1 of the Common European Framework of Reference. This is equivalent to ESOL Entry Level 3."
						},
						{
							"t": "p",
							"x": "The requirements for citizenship applications may also change in the future. Further details will be published on the UK Border Agency website and you should check the information on that website for current requirements before applying for settlement or citizenship."
						}
					]
				},
				{
					"id": "1.3",
					"title": "The values and principles of the UK",
					"blocks": [
						{
							"t": "p",
							"x": "British society is founded on fundamental values and principles which all those living in the UK should respect and support. These values are reflected in the responsibilities, rights and privileges of being a British citizen or permanent resident of the UK. They are based on history and traditions and are protected by law, customs and expectations. There is no place in British society for extremism or intolerance."
						},
						{
							"t": "p",
							"x": "The fundamental principles of British life include:"
						},
						{
							"t": "p",
							"x": "Democracy"
						},
						{
							"t": "p",
							"x": "The rule of law"
						},
						{
							"t": "p",
							"x": "Individual liberty"
						},
						{
							"t": "p",
							"x": "Tolerance of those with different faiths and beliefs"
						},
						{
							"t": "p",
							"x": "Participation in community life."
						},
						{
							"t": "p",
							"x": "As part of the citizenship ceremony, new citizens pledge to uphold these values. The pledge is:"
						},
						{
							"t": "p",
							"x": "‘I will give my loyalty to the United Kingdom and respect its rights and freedoms. I will uphold its democratic values. I will observe its laws faithfully and fulfil my duties and obligations as a British citizen.’"
						},
						{
							"t": "p",
							"x": "Folowing from the fundamental principles are responsibilities and freedoms which are shared by all those living in the UK and which we expect all residents to respect."
						},
						{
							"t": "p",
							"x": "If you wish to be a permanent resident or citizen of the UK, you should: respect and obey the law respect the rights of others, including their right to their own opinions treat others with fairness look after yourself and your family look after the area in which you live and the environment."
						},
						{
							"t": "p",
							"x": "In return, the UK offers: freedom of belief and religion freedom of speech freedom from unfair discrimination a right to a fair trial a right to join in the election of a government."
						}
					]
				},
				{
					"id": "1.4",
					"title": "Taking the Life in the UK test",
					"blocks": [
						{
							"t": "p",
							"x": "This handbook will help prepare you for taking the Life in the UK test. The test consists of 24 questions about important aspects of life in the UK. Questions are based on ALL parts of the handbook. The 24 questions will be different for each person taking the test at that test session."
						},
						{
							"t": "p",
							"x": "The Life in the UK test is usually taken in English, although special arrangements can be made if you wish to take it in Welsh or Scottish Gaelic."
						},
						{
							"t": "p",
							"x": "You can only take the test at a registered and approved Life in the UK test centre. There are about 60 test centres around the UK. You can only book your test online, at www.lifeintheuktest.gov.uk. You should not take your test at any other establishment as the UK Border Agency will only accept certificates from registered test centres. If you live on the Isle of Man or in the Channel Islands, there are different arrangements for taking the Life in the UK test."
						},
						{
							"t": "p",
							"x": "When booking your test, read the instructions carefully. Make sure you enter your details correctly. You will need to take some identification and proof of your address with you to the test. If you don’t take these, you will not be able to take the test."
						},
						{
							"t": "p",
							"x": "How to use this handbook"
						},
						{
							"t": "p",
							"x": "Everything that you will need to know to pass the Life in the UK test is included in this handbook. The questions will be based on the whole book, including this introduction, so make sure you study the entire book thoroughly. The handbook has been written to ensure that anyone who can read English at ESOL Entry Level 3 or above should have no difficulty with the language."
						},
						{
							"t": "p",
							"x": "The glossary at the back of the handbook contains some key words and phrases, which you might find helpful."
						},
						{
							"t": "p",
							"x": "The 'Check that you understand' boxes are for guidance. They will help you to identify particular things that you should understand. Just knowing the things highlighted in these boxes will not be enough to pass the test. You need to make sure that you understand everything in the book, so please read the information carefully."
						},
						{
							"t": "p",
							"x": "Where to find more information"
						},
						{
							"t": "p",
							"x": "You can find out more information from the following places:"
						},
						{
							"t": "p",
							"x": "The UK Border Agency website (www.ukba.homeoffice.gov.uk) for more information about the application process and the forms you will need to complete The Life in the UK test website (www.lifeintheuktest.gov.uk) for more information about the test and how to book a place to take one Gov.uk (www.gov.uk) for information about ESOL courses and how to find one in your area."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The origin of the values underlying British society"
						},
						{
							"t": "check",
							"x": "The fundamental principles of British life"
						},
						{
							"t": "check",
							"x": "The responsibilities and freedoms which come with permanent residence"
						},
						{
							"t": "check",
							"x": "The process of becoming a permanent resident or citizen."
						}
					]
				}
			]
		},
		{
			"num": 2,
			"title": "What is the UK",
			"sections": [{
				"id": "2.1",
				"title": "Chapter 2: What is the UK?",
				"blocks": [
					{
						"t": "p",
						"x": "In this chapter you will learn about the countries that make up the Union as well as the various phrases used to describe them. Although this chapter is very short you should make sure that you read and understand all facts presented. For instance it is very likely there will be questions about the differences between Great Britain, the British Isles and Britain, or what the Crown Dependencies are."
					},
					{
						"t": "infohead",
						"x": "IN THIS CHAPTER THERE IS INFORMATION ABOUT:"
					},
					{
						"t": "info",
						"x": "The different countries that make up the UK"
					}
				]
			}, {
				"id": "2.2",
				"title": "What is the UK?",
				"blocks": [
					{
						"t": "p",
						"x": "The countries that make up the UK: England, Scotland, Wales and Northern Ireland"
					},
					{
						"t": "p",
						"x": "The UK is made up of England, Scotland, Wales and Northern Ireland. The rest of Ireland is an independent country."
					},
					{
						"t": "p",
						"x": "The official name of the country is the United Kingdom of Great Britain and Northern Ireland. ‘Great Britain’ refers only to England, Scotland and Wales, not to Northern Ireland. The words ‘Britain’,  Isles’ or ‘British’, however, are used in this book to refer to everyone in the UK."
					},
					{
						"t": "p",
						"x": "There are also several islands which are closely linked with the UK but are not part of it: the Channel Islands and the Isle of Man. These have their own governments and are called ‘Crown dependencies’. There are also several British overseas territories in other parts of the world, such as St Helena and the Falkland Islands. They are also linked to the UK but are not a part of it."
					},
					{
						"t": "p",
						"x": "The UK is governed by the parliament sitting in Westminster. Scotland, Wales and Northern Ireland also have parliaments or assemblies of their own, with devolved powers in defined areas."
					},
					{
						"t": "checkhead",
						"x": "Check that you understand:"
					},
					{
						"t": "check",
						"x": "The different countries that make up the UK"
					}
				]
			}]
		},
		{
			"num": 3,
			"title": "A long and illustrious history",
			"sections": [
				{
					"id": "3.1",
					"title": "Chapter 3: A long and illustrious history",
					"blocks": [
						{
							"t": "p",
							"x": "In this chapter you will learn about British history starting from the Stone Age. The beginning focuses on arriving populations which affected the language and religions of Britain. After that the focus is on the development of the Monarchy, church and Parliament. Major battles and significant periods are covered, including the civil war, the industrial revolution and the Empire. There is a lot of information about WWI and WWII and after WWII the chapter focuses on the governments of the UK and devolution in Northern Ireland, Wales and Scotland."
						},
						{
							"t": "p",
							"x": "Make sure that you understand the relationship between the monarchy and Parliament, Protestants and Catholics and Britain and the colonies of the Empire. Think about how the right to vote developed. You should also make sure you know about each of the people described. You will need to know about the Acts of Parliament and other major events. You should make sure that you know all of the dates given in this chapter."
						},
						{
							"t": "infohead",
							"x": "IN THIS CHAPTER THERE IS INFORMATION ABOUT:"
						},
						{
							"t": "info",
							"x": "The history of early Britain"
						},
						{
							"t": "info",
							"x": "The medieval period"
						},
						{
							"t": "info",
							"x": "The Tudor and Stuart monarchs of the UK"
						},
						{
							"t": "info",
							"x": "The establishment of Parliament"
						},
						{
							"t": "info",
							"x": "The unification of the United Kingdom"
						},
						{
							"t": "info",
							"x": "The Enlightenment and Industrial Revolution"
						},
						{
							"t": "info",
							"x": "The Victorian Age and the British Empire"
						},
						{
							"t": "info",
							"x": "The First World War"
						},
						{
							"t": "info",
							"x": "The Great Depression"
						},
						{
							"t": "info",
							"x": "The Second World War"
						},
						{
							"t": "info",
							"x": "Britain since 1945 and the welfare state"
						},
						{
							"t": "info",
							"x": "Great British inventions and sporting figures"
						},
						{
							"t": "info",
							"x": "Government since the Second World War"
						}
					]
				},
				{
					"id": "3.7",
					"title": "Early Britain",
					"blocks": [
						{
							"t": "p",
							"x": "The first people to live in Britain were hunter-gatherers, in what we call the Stone Age. For much of the Stone Age, Britain was connected to the continent by a land bridge. People came and went, following the herds of deer and horses which they hunted. Britain only became permanently separated from the continent by the Channel about 10,000 years ago."
						},
						{
							"t": "p",
							"x": "The first farmers arrived in Britain about 6,000 years ago. The ancestors of these first farmers probably came from south-east Europe. These people built houses, tombs and monuments on the land. One of these monuments, Stonehenge, still stands in what is now the English county of Wiltshire. Stonehenge was probably a special gathering place for seasonal ceremonies. Other Stone Age sites have also survived. Skara Brae on Orkney, off the north coast of Scotland, is the best preserved prehistoric village in northern Europe, and has helped archaeologists to understand more about how people lived near the end of the Stone Age."
						},
						{
							"t": "p",
							"x": "Stonehenge"
						},
						{
							"t": "p",
							"x": "Around 4,000 years ago, people learned to make bronze. We call this period the Bronze Age. People lived in roundhouses and buried their dead in tombs called round barrows. The people of the Bronze Age were accomplished metalworkers who made many beautiful objects in bronze and gold, including tools, ornaments and weapons. The Bronze Age was followed by the Iron Age, when people learned how to make weapons and tools out of iron. People still lived in roundhouses, grouped together into larger settlements, and sometimes defended sites called hill forts. A very impressive hill fort can still be seen today at Maiden Castle, in the English county of Dorset. Most people were farmers, craft workers or warriors. The language they spoke was part of the Celtic language family. Similar languages were spoken across Europe in the Iron Age, and related languages are still spoken today in some parts of Wales, Scotland and Ireland. The people of the Iron Age had a sophisticated culture and economy. They made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings. This marks the beginnings of British history."
						},
						{
							"t": "p",
							"x": "The Romans"
						},
						{
							"t": "p",
							"x": "Julius Caesar led a Roman invasion of Britain in 55 BC. This was unsuccessful and for nearly 100 years Britain remained separate from the Roman Empire. In AD 43 the Emperor Claudius led the Roman army in a new invasion. This time, there was resistance from some of the British tribes but the Romans were successful in occupying almost all of Britain. One of the tribal leaders who fought against the Romans was Boudicca, the queen of the Iceni in what is now eastern England. She is still remembered today and there is a statue of her on Westminster Bridge in London, near the Houses of Parliament."
						},
						{
							"t": "p",
							"x": "Areas of what is now Scotland were never conquered by the Romans, and the Emperor Hadrian built a wall in the north of England to keep out the Picts (ancestors of the Scottish people). Included in the wall were a number of forts. Parts of Hadrian’s Wall, including the forts of Housesteads and Vindolanda, can still be seen. It is a popular area for walkers and is a UNESCO (United Nations Education, Scientific and Cultural Organization) World Heritage Site."
						},
						{
							"t": "p",
							"x": "Hadrians wall"
						},
						{
							"t": "p",
							"x": "The Romans remained in Britain for 400 years. They built roads and public buildings, created a structure of law, and introduced new plants and animals. It was during the 3rd and 4th centuries AD that the first Christian communities began to appear in Britain."
						},
						{
							"t": "p",
							"x": "The Anglo-Saxons"
						},
						{
							"t": "p",
							"x": "The Roman army left Britain in AD 410 to defend other parts of the Roman Empire and never returned. Britain was again invaded by tribes from northern Europe: the Jutes, the Angles and the Saxons. The languages they spoke are the basis of modern-day English. Battles were fought against these invaders but, by about AD 600, Anglo-Saxon kingdoms were established in Britain. These kingdoms were mainly in what is now England. The burial place of one of the kings was at Sutton Hoo in modern Suffolk. This king was buried with treasure and armour, all placed in a ship which was then covered by a mound of earth. Parts of the west of Britain, including much of what is now Wales, and Scotland, remained free of Anglo-Saxon rule."
						},
						{
							"t": "p",
							"x": "The Anglo-Saxons were not Christians when they first came to Britain but, during this period, missionaries came to Britain to preach about Christianity."
						},
						{
							"t": "p",
							"x": "Missionaries from Ireland spread the religion in the north. The most famous of these were St Patrick, who would become the patron saint of Ireland and St Columba, who founded a monastery on the island of Iona, off the coast of what is now Scotland. St Augustine led missionaries from Rome, who spread Christianity in the south. St Augustine became the first Archbishop of Canterbury."
						},
						{
							"t": "p",
							"x": "The Vikings"
						},
						{
							"t": "p",
							"x": "Modern representation of the Vikings: people dressed as Vikings"
						},
						{
							"t": "p",
							"x": "The Vikings came from Denmark and Norway. They first visited Britain in AD 789 to raid coastal towns and take away goods and slaves. Then, they began to stay and form their own communities in the east of England and Scotland. The Anglo-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings. Many of the Viking invaders stayed in Britain – especially in the east and north of England, in an area known as the Danelaw (many places names there, such as Grimsby and Scunthorpe, come from the Viking languages). The Viking settlers mixed with local communities and some converted to Christianity."
						},
						{
							"t": "p",
							"x": "Anglo-Saxon kings continued to rule what is now England, except for a short period when there were Danish kings. The first of these was Cnut, also called Canute."
						},
						{
							"t": "p",
							"x": "In the north, the threat of attack by Vikings had encouraged the people to unite under one king, Kenneth MacAlpin. The term Scotland began to be used to describe that country."
						},
						{
							"t": "p",
							"x": "The Norman Conquest"
						},
						{
							"t": "p",
							"x": "In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings."
						},
						{
							"t": "p",
							"x": "Harold was killed in the battle. William became king of England and is known as William the Conqueror. The battle is commemorated in a great piece of embroidery, known as the Bayeux Tapestry, which can still be seen in France today."
						},
						{
							"t": "p",
							"x": "The Norman Conquest was the last successful foreign invasion of England and led to many changes in government and social structures in England. Norman French, the language of the new ruling class, influenced the development of the English language as we know it today. Initially the Normans also conquered Wales, but the Welsh gradually won territory back. The Scots and the Normans fought on the border between England and Scotland; the Normans took over some land on the border but did not invade Scotland."
						},
						{
							"t": "p",
							"x": "Bayeux Tapestry"
						},
						{
							"t": "p",
							"x": "William sent people all over England to draw up lists of all the towns and villages. The people who lived there, who owned the land and what animals they owned were also listed. This was called the Domesday Book. It still exists today and gives a picture of society in England just after the Norman Conquest."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The history of the UK before the Romans"
						},
						{
							"t": "check",
							"x": "The impact of the Romans on British society"
						},
						{
							"t": "check",
							"x": "The different groups that invaded after the Romans"
						},
						{
							"t": "check",
							"x": "The importance of the Norman invasion in 1066"
						}
					]
				},
				{
					"id": "3.5",
					"title": "The Middle Ages",
					"blocks": [
						{
							"t": "p",
							"x": "War at home and abroad"
						},
						{
							"t": "p",
							"x": "The period after the Norman Conquest up until about 1485 is called the Middle Ages (or the medieval period). It was a time of almost constant war."
						},
						{
							"t": "p",
							"x": "The English kings fought with the Welsh, Scottish and Irish noblemen for control of their lands. In Wales, the English were able to establish their rule. In 1284 King Edward I of England introduced the Statute of Rhuddlan, which annexed Wales to the Crown of England. Huge castles, including Conwy and Caernarvon, were built to maintain this power. By the middle of the 15th century the last Welsh rebellions had been defeated. English laws and the English language were introduced."
						},
						{
							"t": "p",
							"x": "Conwy Castle"
						},
						{
							"t": "p",
							"x": "In Scotland, the English kings were less successful. In 1314 the Scottish, led by Robert the Bruce, defeated the English at the Battle of Bannockburn, and Scotland remained unconquered by the English."
						},
						{
							"t": "p",
							"x": "At the beginning of the Middle Ages, Ireland was an independent country. The English first went to Ireland as troops to help the Irish king and remained to build their own settlements. By 1200, the English ruled an area of Ireland known as the Pale, around Dublin. Some of the important lords in other parts of Ireland accepted the authority of the English king."
						},
						{
							"t": "p",
							"x": "During the Middle Ages, the English kings also fought a number of wars abroad. Many knights took part in the Crusades, in which European Christians fought for control of the Holy Land. English kings also fought a long war with France, called the Hundred Years War (even though it actually lasted 116 years). One of the most famous battles of the Hundred Years War was the Battle of Agincourt in 1415, where King Henry V’s vastly outnumbered English army defeated the French."
						},
						{
							"t": "p",
							"x": "The English left France in the 1450s."
						},
						{
							"t": "p",
							"x": "The Black Death"
						},
						{
							"t": "p",
							"x": "The Normans used a system of land ownership known as feudalism. The king gave land to his lords in return for help in war. Landowners had to send certain numbers of men to serve in the army. Some peasants had their own land but most were serfs."
						},
						{
							"t": "p",
							"x": "They had a small area of their lord’s land where they could grow food. In return, they had to work for their lord and could not move away. The same system developed in southern Scotland. In the north of Scotland and Ireland, land was owned by members of the ‘clans’ (prominent families)."
						},
						{
							"t": "p",
							"x": "In 1348, a disease, probably a form of plague, came to Britain. This was known as the Black Death. One third of the population of England died and a similar proportion in Scotland and Wales. This was one of the worst disasters ever to strike Britain. Following the Black Death, the smaller population meant there was less need to grow cereal crops. There were labour shortages and peasants began to demand higher wages. New social classes appeared, including owners of large areas of land (later called the gentry), and people left the countryside to live in the towns. In the towns, growing wealth led to the development of a strong middle class."
						},
						{
							"t": "p",
							"x": "In Ireland, the Black Death killed many in the Pale and, for a time, the area controlled by the English became smaller."
						},
						{
							"t": "p",
							"x": "Legal and political changes"
						},
						{
							"t": "p",
							"x": "In the Middle Ages, Parliament began to develop into the institution it is today. Its origins can be traced to the king’s council of advisers, which included important noblemen and the leaders of the Church."
						},
						{
							"t": "p",
							"x": "There were few formal limits to the king’s power until 1215. In that year, King John was forced by his noblemen to agree to a number of demands. The result was a charter of rights called the Magna Carta (which means the Great Charter). The Magna Carta established the idea that even the king was subject to the law. It protected the rights of the nobility and restricted the king’s power to collect taxes or to make or change laws. In future, the king would need to involve his noblemen in decisions."
						},
						{
							"t": "p",
							"x": "In England, parliaments were called for the king to consult his nobles, particularly when the king needed to raise money. The numbers attending Parliament increased and two separate parts, known as Houses, were established. The nobility, great landowners and bishops sat in the House of Lords. Knights, who were usually smaller landowners, and wealthy people from towns and cities were elected to sit in the House of Commons. Only a small part of the population was able to join in electing the members of the Commons."
						},
						{
							"t": "p",
							"x": "A similar Parliament developed in Scotland. It had three Houses, called Estates: the lords, the commons and the clergy."
						},
						{
							"t": "p",
							"x": "This was also a time of development in the legal system. The principle that judges are independent of the government began to be established. In England, judges developed ‘common law’ by a process of precedence (that is, following previous decisions) and tradition. In Scotland, the legal system developed slightly differently and laws were ‘codified’ (that is, written down)."
						},
						{
							"t": "p",
							"x": "A distinct identity"
						},
						{
							"t": "p",
							"x": "The Middle Ages saw the development of a national culture and identity. After the Norman Conquest, the king and his noblemen had spoken Norman French and the peasants had continued to speak Anglo-Saxon. Gradually these two languages combined to become one English language. Some words in modern English – for example, ‘park’ and ‘beauty’ – are based on Norman French words. Others – for example, ‘apple’, ‘cow’ and ‘summer’ – are based on Anglo-Saxon words. In modern English there are often words with very similar meanings, one from French and one from Anglo-Saxon. ‘Demand’ (French) and ‘ask’ (Anglo-Saxon) are examples. By 1400, in England, official documents were being written in English, and English had become the preferred language of the royal court and Parliament."
						},
						{
							"t": "p",
							"x": "Windsor Castle"
						},
						{
							"t": "p",
							"x": "In the years leading up to 1400, Geoffrey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. The people decided to tell each other stories on the journey, and the poems describe the travellers and some of the stories they told. This collection of poems is called The Canterbury Tales. It was one of the first books to be printed by William Caxton, the first person in England to print books using a printing press. Many of the stories are still popular. Some have been made into plays and television programmes."
						},
						{
							"t": "p",
							"x": "In Scotland, many people continued to speak Gaelic and the Scots language also developed. A number of poets began to write in the Scots language. One example is John Barbour, who wrote The Bruce about the Battle of Bannockburn."
						},
						{
							"t": "p",
							"x": "The Middle Ages also saw a change in the type of buildings in Britain. Castles were built in many places in Britain and Ireland, partly for defence. Today many are in ruins, although some, such as Windsor and Edinburgh, are still in use. Great cathedrals – for example, Lincoln Cathedral – were also built, and many of these are still used for worship. Several of the cathedrals had windows of stained glass, telling stories about the Bible and Christian saints. The glass in York Minster is a famous example."
						},
						{
							"t": "p",
							"x": "During this period, England was an important trading nation. English wool became a very important export. People came to England from abroad to trade and also to work. Many had special skills, such as weavers from France, engineers from Germany, glass manufacturers from Italy and canal builders from Holland."
						},
						{
							"t": "p",
							"x": "The Wars of the Roses"
						},
						{
							"t": "p",
							"x": "The symbol of the House of Tudors. A white rose inside of a red rose."
						},
						{
							"t": "p",
							"x": "In 1455, a civil war was begun to decide who should be king of England. It was fought between the supporters of two families: the House of Lancaster and the House of York. This war was called the Wars of the Roses, because the symbol of Lancaster was a red rose and the symbol of York was a white rose. The war ended with the Battle of Bosworth Field in 1485. King Richard III of the House of York was killed in the battle and Henry Tudor, the leader of the House of Lancaster, became King Henry VII. Henry then married King Richard’s niece, Elizabeth of York, and united the two families. Henry was the first king of the House of Tudor."
						},
						{
							"t": "p",
							"x": "The symbol of the House of Tudor was a red rose with a white rose inside it as a sign that the Houses of York and Lancaster were now allies."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The wars that took place in the Middle Ages"
						},
						{
							"t": "check",
							"x": "How Parliament began to develop"
						},
						{
							"t": "check",
							"x": "The way that land ownership worked"
						},
						{
							"t": "check",
							"x": "The effect of the Black Death"
						},
						{
							"t": "check",
							"x": "The development of English language and culture"
						},
						{
							"t": "p",
							"x": "The Wars of the Roses and the founding of the House of Tudor"
						}
					]
				},
				{
					"id": "3.6",
					"title": "The Tudors and Stuarts",
					"blocks": [
						{
							"t": "p",
							"x": "Religious conflicts"
						},
						{
							"t": "p",
							"x": "After his victory in the Wars of the Roses, Henry VII wanted to make sure that England remained peaceful and that his position as king was secure. He deliberately strengthened the central administration of England and reduced the power of the nobles. He was thrifty and built up the monarchy’s financial reserves. When he died, his son Henry VIII continued the policy of centralising power."
						},
						{
							"t": "p",
							"x": "Henry VIII was most famous for breaking away from the Church of Rome and marrying six times."
						},
						{
							"t": "p",
							"x": "THE SIX WIVES OF HENRY VIII"
						},
						{
							"t": "p",
							"x": "Catherine of Aragon – Catherine was a Spanish princess. She and Henry had a number of children but only one, Mary, survived. When Catherine was too old to give him another child, Henry decided to divorce her, hoping that another wife would give him a son to be his heir."
						},
						{
							"t": "p",
							"x": "Anne Boleyn – Anne Boleyn was English. She and Henry had one daughter, Elizabeth. Anne was unpopular in the country and was accused of taking lovers. She was executed at the Tower of London."
						},
						{
							"t": "p",
							"x": "Jane Seymour – Henry married Jane after Anne’s execution. She gave Henry the son he wanted, Edward, but she died shortly after the birth."
						},
						{
							"t": "p",
							"x": "Anne of Cleves – Anne was a German princess. Henry married her for political reasons but divorced her soon after."
						},
						{
							"t": "p",
							"x": "Catherine Howard – Catherine was a cousin of Anne Boleyn. She was also accused of taking lovers and executed."
						},
						{
							"t": "p",
							"x": "Catherine Parr – Catherine was a widow who married Henry late in his life. She survived him and married again but died soon after."
						},
						{
							"t": "p",
							"x": "To divorce his first wife, Henry needed the approval of the Pope. When the Pope refused, Henry established the Church of England. In this new Church, the king, not the Pope, would have the power to appoint bishops and order how people should worship."
						},
						{
							"t": "p",
							"x": "King Henry VII"
						},
						{
							"t": "p",
							"x": "At the same time the Reformation was happening across Europe. This was a movement against the authority of the Pope and the ideas and practices of the Roman Catholic Church. The Protestants formed their own churches. They read the Bible in their own languages instead of in Latin; they did not pray to saints or at shrines; and they believed that a person’s own relationship with God was more important than submitting to the authority of the Church. Protestant ideas gradually gained strength in England, Wales and Scotland during the 16th century."
						},
						{
							"t": "p",
							"x": "In Ireland, however, attempts by the English to impose Protestantism (alongside efforts to introduce the English system of laws about the inheritance of land) led to rebellion from the Irish chieftains, and much brutal fighting followed."
						},
						{
							"t": "p",
							"x": "During the reign of Henry VIII, Wales became formally united with England by the Act for the Government of Wales. The Welsh sent representatives to the House of Commons and the Welsh legal system was reformed."
						},
						{
							"t": "p",
							"x": "Henry VIII was succeeded by his son Edward VI, who was strongly Protestant. During his reign, the Book of Common Prayer was written to be used in the Church of England. A version of this book is still used in some churches today. Edward died at the age of 15 after ruling for just over six years, and his half-sister Mary became queen. Mary was a devout Catholic and persecuted Protestants (for this reason, she became known as ‘Bloody Mary’). Mary also died after a short reign and the next monarch was her half-sister, Elizabeth, the daughter of Henry VIII and Anne Boleyn."
						},
						{
							"t": "p",
							"x": "Queen Elizabeth I"
						},
						{
							"t": "p",
							"x": "Queen Elizabeth I"
						},
						{
							"t": "p",
							"x": "Queen Elizabeth I was a Protestant. She re-established the Church of England as the official Church in England. Everyone had to attend their local church and there were laws about the type of religious services and the prayers which could be said, but Elizabeth did not ask about people’s real beliefs. She succeeded in finding a balance between the views of Catholics and the more extreme Protestants. In this way, she avoided any serious religious conflict within England. Elizabeth became one of the most popular monarchs in English history, particularly after 1588, when the English defeated the Spanish Armada (a large fleet of ships), which had been sent by Spain to conquer England and restore Catholicism."
						},
						{
							"t": "p",
							"x": "The Reformation in Scotland and Mary, Queen of Scots"
						},
						{
							"t": "p",
							"x": "Scotland had also been strongly influenced by Protestant ideas. In 1560, the predominantly Protestant Scottish Parliament abolished the authority of the Pope in Scotland and Roman Catholic religious services became illegal. A Protestant Church of Scotland with an  leadership was established but, unlike in England, this was not a state Church."
						},
						{
							"t": "p",
							"x": "The queen of Scotland, Mary Stuart (often now called ‘Mary, Queen of Scots’) was a Catholic. She was only a week old when her father died and she became queen."
						},
						{
							"t": "p",
							"x": "Much of her childhood was spent in France. When she returned to Scotland, she was the centre of a power struggle between different groups. When her husband was murdered, Mary was suspected of involvement and fled to England. She gave her throne to her Protestant son, James VI of Scotland. Mary was Elizabeth I’s cousin and hoped that Elizabeth might help her, but Elizabeth suspected Mary of wanting to take over the English throne, and kept her a prisoner for 20 years. Mary was eventually executed, accused of plotting against Elizabeth I."
						},
						{
							"t": "p",
							"x": "Exploration, poetry and drama"
						},
						{
							"t": "p",
							"x": "The Golden Hind"
						},
						{
							"t": "p",
							"x": "The Elizabethan period in England was a time of growing patriotism: a feeling of pride in being English. English explorers sought new trade routes and tried to expand British trade into the Spanish colonies in the Americas. Sir Francis Drake, one of the commanders in the defeat of the Spanish Armada, was one of the founders of England’s naval tradition. His ship, the Golden Hind, was one of the first to sail right around (‘circumnavigate’) the world. In Elizabeth I’s time, English settlers first began to colonise the eastern coast of America. This colonisation, particularly by people who disagreed with the religious views of the next two kings, greatly increased in the next century."
						},
						{
							"t": "p",
							"x": "The Elizabethan period is also remembered for the richness of its poetry and drama, especially the plays and poems of William Shakespeare."
						},
						{
							"t": "p",
							"x": "WILLIAM SHAKESPEARE (1564–1616)"
						},
						{
							"t": "p",
							"x": "Shakespeare was born in Stratford-upon-Avon, England. He was a playwright and actor and wrote many poems and plays. His most famous plays include A Midsummer Night’s Dream, Hamlet, Macbeth and Romeo and Juliet. He also dramatised significant events from the past, but he did not focus solely on kings and queens. He was one of the first to portray ordinary Englishmen and women. Shakespeare had a great influence on the English language and invented many words that are still common today. Lines from his plays and poems which are often still quoted include:"
						},
						{
							"t": "p",
							"x": "Once more unto the breach (Henry V)"
						},
						{
							"t": "p",
							"x": "To be or not to be (Hamlet)"
						},
						{
							"t": "p",
							"x": "A rose by any other name (Romeo and Juliet)"
						},
						{
							"t": "p",
							"x": "All the world’s a stage (As You Like It)"
						},
						{
							"t": "p",
							"x": "The darling buds of May (Sonnet 18 – Shall I Compare Thee To a Summer’s Day)."
						},
						{
							"t": "p",
							"x": "Many people regard Shakespeare as the greatest playwright of all time. His plays and poems are still performed and studied in Britain and other countries today. The Globe Theatre in London is a modern copy of the theatres in which his plays were first performed."
						},
						{
							"t": "p",
							"x": "James VI and I"
						},
						{
							"t": "p",
							"x": "Elizabeth I never married and so had no children of her own to inherit her throne. When she died in 1603 her heir was her cousin James VI of Scotland. He became King James I of England, Wales and Ireland but Scotland remained a separate country."
						},
						{
							"t": "p",
							"x": "THE KING JAMES BIBLE"
						},
						{
							"t": "p",
							"x": "One achievement of King James’ reign was a new translation of the Bible into English. This translation is known as the ‘King James Version’ or the ‘Authorised Version’. It was not the first English Bible but is a version which continues to be used in many Protestant churches today."
						},
						{
							"t": "p",
							"x": "Ireland"
						},
						{
							"t": "p",
							"x": "During this period, Ireland was an almost completely Catholic country. Henry VII and Henry VIII had extended English control outside the Pale and had established English authority over the whole country. Henry VIII took the title ‘King of Ireland’. English laws were introduced and local leaders were expected to follow the instructions of the Lord Lieutenants in Dublin."
						},
						{
							"t": "p",
							"x": "During the reigns of Elizabeth I and James I, many people in Ireland opposed rule by the Protestant government in England. There were a number of rebellions. The English government encouraged Scottish and English Protestants to settle in Ulster, the northern province of Ireland, taking over the land from Catholic landholders."
						},
						{
							"t": "p",
							"x": "These settlements were known as plantations. Many of the new settlers came from south-west Scotland and other land was given to companies based in London."
						},
						{
							"t": "p",
							"x": "James later organised similar plantations in several other parts of Ireland. This had serious longterm consequences for the history of England, Scotland and Ireland."
						},
						{
							"t": "p",
							"x": "The rise of Parliament"
						},
						{
							"t": "p",
							"x": "Elizabeth I was very skilled at managing Parliament. During her reign, she was successful in balancing her wishes and views against those of the House of Lords and those of the House of Commons, which was increasingly Protestant in its views."
						},
						{
							"t": "p",
							"x": "James I and his son Charles I were less skilled politically. Both believed in the ‘Divine Right of Kings’: the idea that the king was directly appointed by God to rule."
						},
						{
							"t": "p",
							"x": "They thought that the king should be able to act without having to seek approval from Parliament. When Charles I inherited the thrones of England, Wales, Ireland and Scotland, he tried to rule in line with this principle. When he could not get Parliament to agree with his religious and foreign policies, he tried to rule without Parliament at all. For 11 years, he found ways in which to raise money without Parliament’s approval but eventually trouble in Scotland meant that he had to recall Parliament."
						},
						{
							"t": "p",
							"x": "The beginning of the English civil war"
						},
						{
							"t": "p",
							"x": "Charles I wanted the worship of the Church of England to include more ceremony and introduced a revised Prayer Book. He tried to impose this Prayer Book on the Presbyterian Church in Scotland and this led to serious unrest. A Scottish army was formed and Charles could not find the money he needed for his own army without the help of Parliament. In 1640, he recalled Parliament to ask it for funds. Many in Parliament were Puritans, a group of Protestants who advocated strict and simple religious doctrine and worship. They did not agree with the king’s religious views and disliked his reforms of the Church of England. Parliament refused to give the king the money he asked for, even after the Scottish army invaded England."
						},
						{
							"t": "p",
							"x": "Another rebellion began in Ireland because the Roman Catholics in Ireland were afraid of the growing power of the Puritans. Parliament took this opportunity to demand control of the English army – a change that would have transferred substantial power from the king to Parliament. In response, Charles I entered the House"
						},
						{
							"t": "p",
							"x": "of Commons and tried to arrest five parliamentary leaders, but they had been warned and were not there. (No monarch has set foot in the Commons since.) Civil war between the king and Parliament could not now be avoided and began in 1642. The country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads)."
						},
						{
							"t": "p",
							"x": "Oliver Cromwell and the English Republic"
						},
						{
							"t": "p",
							"x": "Oliver Cromwell"
						},
						{
							"t": "p",
							"x": "The king’s army was defeated at the Battles of Marston Moor and Naseby. By 1646, it was clear that Parliament had won the war. Charles was held prisoner by the parliamentary army. He was still unwilling to reach any agreement with Parliament and in 1649 he was executed."
						},
						{
							"t": "p",
							"x": "England declared itself a republic, called the Commonwealth. It no longer had a monarch. For a time, it was not totally clear how the country would be governed."
						},
						{
							"t": "p",
							"x": "For now, the army was in control. One of its generals, Oliver Cromwell, was sent to Ireland, where the revolt which had begun in 1641 still continued and where there was still a Royalist army. Cromwell was successful in establishing the authority of the English Parliament but did this with such violence that even today Cromwell remains a controversial figure in Ireland."
						},
						{
							"t": "p",
							"x": "The Scots had not agreed to the execution of Charles I and declared his son Charles II to be king. He was crowned king of Scotland and led a Scottish army into England. Cromwell defeated this army in the Battles of Dunbar and Worcester. Charles II escaped from Worcester, famously hiding in an oak tree on one occasion, and eventually fled to Europe. Parliament now controlled Scotland as well as England and Wales."
						},
						{
							"t": "p",
							"x": "After his campaign in Ireland and victory over Charles II at Worcester, Cromwell was recognised as the leader of the new republic. He was given the title of Lord Protector and ruled until his death in 1658. When Cromwell died, his son, Richard, became Lord Protector in his place but was not able to control the army or the government. Although Britain had been a republic for 11 years, without Oliver Cromwell there was no clear leader or system of government. Many people in the country wanted stability. People began to talk about the need for a king."
						},
						{
							"t": "p",
							"x": "The Restoration"
						},
						{
							"t": "p",
							"x": "In May 1660, Parliament invited Charles II to come back from exile in the Netherlands. He was crowned King Charles II of England, Wales, Scotland and Ireland."
						},
						{
							"t": "p",
							"x": "Charles II made it clear that he had ‘no wish to go on his travels again’. He understood that he could not always do as he wished but would sometimes need to reach agreement with Parliament. Generally, Parliament supported his policies. The Church of England again became the established official Church. Both Roman Catholics and Puritans were kept out of power."
						},
						{
							"t": "p",
							"x": "During Charles II’s reign, in 1665, there was a major outbreak of plague in London. Thousands of people died, especially in poorer areas. The following year, a great fire destroyed much of the city, including many churches and St Paul’s Cathedral. London was rebuilt with a new St Paul’s, which was designed by a famous architect, Sir Christopher Wren. Samuel Pepys wrote about these events in a diary which was later published and is still read today."
						},
						{
							"t": "p",
							"x": "The Habeas Corpus Act became law in 1679. This was a very important piece of legislation which remains relevant today. Habeas corpus is Latin for ‘you must present the person in court’. The Act guaranteed that no one could be held prisoner unlawfully. Every prisoner has a right to a court hearing."
						},
						{
							"t": "p",
							"x": "Charles II was interested in science. During his reign, the Royal Society was formed to promote ‘natural knowledge’. This is the oldest surviving scientific society in the world. Among its early members were Sir Edmund Halley, who successfully predicted the return of the comet now called Halley’s Comet, and Sir Isaac Newton."
						},
						{
							"t": "p",
							"x": "ISAAC NEWTON (1643–1727)"
						},
						{
							"t": "p",
							"x": "Born in Lincolnshire, eastern England, Isaac Newton first became interested in science when he studied at Cambridge University. He became an important figure in the field. His most famous published work was Philosophiae Naturalis Principia Mathematica (‘Mathematical Principles of Natural Philosophy’), which showed how gravity applied to the whole universe. Newton also discovered that white light is made up of the colours of the rainbow. Many of his discoveries are still important for modern science."
						},
						{
							"t": "p",
							"x": "A Catholic King"
						},
						{
							"t": "p",
							"x": "Charles II had no legitimate children. He died in 1685 and his brother, James, who was a Roman Catholic, became King James II in England, Wales and Ireland and King James VII of Scotland. James favoured Roman Catholics and allowed them to be army Officers, which an Act of Parliament had forbidden. He did not seek to reach agreements with Parliament and arrested some of the bishops of the Church of England. People in England worried that James wanted to make England a Catholic country once more. However, his heirs were his two daughters, who were both firmly Protestant, and people thought that this meant there would soon be a Protestant monarch again. Then, James’s wife had a son. Suddenly, it seemed likely that the next monarch would not be a Protestant after all."
						},
						{
							"t": "p",
							"x": "The Glorious Revolution"
						},
						{
							"t": "p",
							"x": "James II’s elder daughter, Mary, was married to her cousin William of Orange, the Protestant ruler of the Netherlands. In 1688, important Protestants in England asked William to invade England and proclaim himself king. When William reached England, there was no resistance. James fled to France and William took over the throne, becoming William III in England, Wales and Ireland, and William II of Scotland. William ruled jointly with Mary. This event was later called the ‘Glorious Revolution’ because there was no fighting in England and because it guaranteed the power of Parliament, ending the threat of a monarch ruling on his or her own as he or she wished. James II wanted to regain the throne and invaded Ireland with the help of a French army. William defeated James II at the Battle of the Boyne in Ireland in 1690, an event which is still celebrated by some in Northern Ireland today. William re-conquered Ireland and James fled back to France. Many restrictions were placed on the Roman Catholic Church in Ireland and Irish Catholics were unable to take part in the government."
						},
						{
							"t": "p",
							"x": "There was also support for James in Scotland. An attempt at an armed rebellion in support of James was quickly defeated at Killiecrankie. All Scottish clans were required formally to accept William as king by taking an oath. The MacDonalds of Glencoe were late in taking the oath and were all killed. The memory of this massacre meant some Scots distrusted the new government."
						},
						{
							"t": "p",
							"x": "Some continued to believe that James was the rightful king, particularly in Scotland. Some joined him in exile in France; others were secret supporters. James’ supporters became known as Jacobites."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "How and why religion changed during this period"
						},
						{
							"t": "check",
							"x": "The importance of poetry and drama in the Elizabethan period"
						},
						{
							"t": "check",
							"x": "About the involvement of Britain in Ireland"
						},
						{
							"t": "check",
							"x": "The development of Parliament and the only period in history when England was a republic"
						},
						{
							"t": "check",
							"x": "Why there was a restoration of the monarchy"
						},
						{
							"t": "check",
							"x": "How the Glorious Revolution happened"
						}
					]
				},
				{
					"id": "3.3",
					"title": "A global power",
					"blocks": [
						{
							"t": "p",
							"x": "Constitutional monarchy - The Bill of Rights"
						},
						{
							"t": "p",
							"x": "At the coronation of William and Mary, a Declaration of Rights was read. This confirmed that the king would no longer be able to raise taxes or administer justice without agreement from Parliament. The balance of power between monarch and Parliament had now permanently changed. The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power. Parliament took control of who could be monarch and declared that the king or queen must be a Protestant. A new Parliament had to be elected at least every three years (later this became seven years and now it is five years). Every year the monarch had to ask Parliament to renew funding for the army and the navy."
						},
						{
							"t": "p",
							"x": "These changes meant that, to be able to govern effectively, the monarch needed to have advisers, or ministers, who would be able to ensure a majority of votes in the House of Commons and the House of Lords. There were two main groups in Parliament, known as the Whigs and the Tories. (The modern Conservative Party is still sometimes referred to as the Tories.) This was the beginning of party politics."
						},
						{
							"t": "p",
							"x": "This was also an important time for the development of a free press (newspapers and other publications which are not controlled by the government). From 1695, newspapers were allowed to operate without a government licence. Increasing numbers of newspapers began to be published."
						},
						{
							"t": "p",
							"x": "The laws passed after the Glorious Revolution are the beginning of what is called ‘constitutional monarchy’. The monarch remained very important but was no longer able to insist on particular policies or actions if Parliament did not agree. After William III, the ministers gradually became more important than the monarch but this was not a democracy in the modern sense. The number of people who had the right to vote for members of Parliament was still very small. Only men who owned property of a certain value were able to vote. No women at all had the vote. Some constituencies were controlled by a single wealthy family. These were called ‘pocket boroughs’. Other constituencies had hardly any voters and were called ‘rotten boroughs’."
						},
						{
							"t": "p",
							"x": "A growing population"
						},
						{
							"t": "p",
							"x": "This was a time when many people left Britain and Ireland to settle in new colonies in America and elsewhere, but others came to live in Britain. The first Jews to come to Britain since the Middle Ages settled in London in 1656. Between 1680 and 1720 many refugees called Huguenots came from France. They were Protestants and had been persecuted for their religion. Many were educated and skilled and worked as scientists, in banking, or in weaving or other crafts."
						},
						{
							"t": "p",
							"x": "The Act of Treaty or Union in Scotland"
						},
						{
							"t": "p",
							"x": "William and Mary’s successor, Queen Anne, had no surviving children. This created uncertainty over the succession in England, Wales and Ireland and in Scotland."
						},
						{
							"t": "p",
							"x": "The Act of Union, known as the Treaty of Union in Scotland, was therefore agreed in 1707, creating the Kingdom of Great Britain. Although Scotland was no longer an independent country, it kept its own legal and education systems and Presbyterian Church."
						},
						{
							"t": "p",
							"x": "The Prime Minister"
						},
						{
							"t": "p",
							"x": "When Queen Anne died in 1714, Parliament chose a German, George I, to be the next king, because he was Anne’s nearest Protestant relative. An attempt by Scottish Jacobites to put James II’s son on the throne instead was quickly defeated. George I did not speak very good English and this increased his need to rely on his ministers. The most important minister in Parliament became known as the Prime Minister. The first man to be called this was Sir Robert Walpole, who was Prime Minister from 1721 to 1742."
						},
						{
							"t": "p",
							"x": "The rebellion of the clans"
						},
						{
							"t": "p",
							"x": "In 1745 there was another attempt to put a Stuart king back on the throne in place of George I’s son, George II. Charles Edward Stuart (Bonnie Prince Charlie), the grandson of James II, landed in Scotland. He was supported by clansmen from the Scottish highlands and raised an army. Charles initially had some successes but was defeated by George II’s army at the Battle of Culloden in 1746. Charles escaped back to Europe."
						},
						{
							"t": "p",
							"x": "The clans lost a lot of their power and influence after Culloden. Chieftains became landlords if they had the favour of the English king, and clansmen became tenants who had to pay for the land they used."
						},
						{
							"t": "p",
							"x": "A process began which became known as the ‘Highland Clearances’. Many Scottish landlords destroyed individual small farms (known as ‘crofts’) to make space for large flocks of sheep and cattle. Evictions became very common in the early 19th century. Many Scottish people left for North America at this time."
						},
						{
							"t": "p",
							"x": "ROBERT BURNS (1759–96)"
						},
						{
							"t": "p",
							"x": "Known in Scotland as ‘The Bard’, Robert Burns was a Scottish poet. He wrote in the Scots language, English with some Scottish words, and standard English. He also revised a lot of traditional folk songs by changing or adding lyrics. Burns’ best-known work is probably the song Auld Lang Syne, which is sung by people in the UK and other countries when they are celebrating the New Year (or Hogmanay as it is called in Scotland)."
						},
						{
							"t": "p",
							"x": "The Enlightenment"
						},
						{
							"t": "p",
							"x": "During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘the Enlightenment’. Many of the great thinkers of the Enlightenment were Scottish. Adam Smith developed ideas about economics which are still referred to today. David Hume’s ideas about human nature continue to influence philosophers. Scientific discoveries, such as James Watt’s work on steam power, helped the progress of the Industrial Revolution. One of the most important principles of the Enlightenment was that everyone should have the right to their own political and religious beliefs and that the state should not try to dictate to them. This continues to be an important principle in the UK today."
						},
						{
							"t": "p",
							"x": "The Industrial Revolution"
						},
						{
							"t": "p",
							"x": "Before the 18th century, agriculture was the biggest source of employment in Britain. There were many cottage industries, where people worked from home to produce goods such as cloth and lace."
						},
						{
							"t": "p",
							"x": "Example of agriculture: Wheat fields in the UK"
						},
						{
							"t": "p",
							"x": "The Industrial Revolution was the rapid development of industry in Britain in the 18th and 19th centuries. Britain was the first country to industrialise on a large scale. It happened because of the development of machinery and the use of steam power. Agriculture and the manufacturing of goods became mechanised. This made things more efficient and increased production. Coal and other raw materials were needed to power the new factories. Many people moved from the countryside and started working in the mining and manufacturing industries."
						},
						{
							"t": "p",
							"x": "Industrial Revolution"
						},
						{
							"t": "p",
							"x": "The development of the Bessemer process for the mass production of steel led to the development of the shipbuilding industry and the railways. Manufacturing jobs became the main source of employment in Britain."
						},
						{
							"t": "p",
							"x": "RICHARD ARKWRIGHT (1732–92)"
						},
						{
							"t": "p",
							"x": "Born in 1732, Arkwright originally trained and worked as a barber. He was able to dye hair and make wigs. When wigs became less popular, he started to work in textiles. He improved the original carding machine. Carding is the process of preparing fibres for spinning into yarn and fabric. He also developed horse-driven spinning mills that used only one machine. This increased the efficiency of production. Later, he used the steam engine to power machinery. Arkwright is particularly remembered for the efficient and profitable way that he ran his factories."
						},
						{
							"t": "p",
							"x": "Better transport links were needed to transport raw materials and manufactured goods. Canals were built to link the factories to towns and cities and to the ports, particularly in the new industrial areas in the middle and north of England."
						},
						{
							"t": "p",
							"x": "Working conditions during the Industrial Revolution were very poor. There were no laws to protect employees, who were often forced to work long hours in dangerous situations. Children also worked and were treated in the same way as adults. Sometimes they were treated even more harshly."
						},
						{
							"t": "p",
							"x": "This was also a time of increased colonisation overseas. Captain James Cook mapped the coast of Australia and a few colonies were established there. Britain gained control over Canada, and the East India Company, originally set up to trade, gained control of large parts of India. Colonies began to be established in southern Africa."
						},
						{
							"t": "p",
							"x": "Britain traded all over the world and began to import more goods. Sugar and tobacco came from North America and the West Indies; textiles, tea and spices came from India and the area that is today called Indonesia. Trading and settlements overseas sometimes brought Britain into conflict with other countries, particularly France, which was expanding and trading in a similar way in many of the same areas of the world."
						},
						{
							"t": "p",
							"x": "SAKE DEAN MAHOMET (1759–1851)"
						},
						{
							"t": "p",
							"x": "Mahomet was born in 1759 and grew up in the Bengal region of India. He served in the Bengal army and came to Britain in 1782. He then moved to Ireland and eloped with an Irish girl called Jane Daly in 1786, returning to England at the turn of the century. In 1810 he opened the Hindoostane Coffee House in George Street, London. It was the first curry house to open in Britain. Mahomet and his wife also introduced ‘shampooing’, the Indian art of head massage, to Britain."
						},
						{
							"t": "p",
							"x": "The slave trade"
						},
						{
							"t": "p",
							"x": "This commercial expansion and prosperity was sustained in part by the booming slave trade. While slavery was illegal within Britain itself, by the 18th century it was a fully established overseas industry, dominated by Britain and the American colonies. Slaves came primarily from West Africa. Travelling on British ships in horrible conditions, they were taken to America and the Caribbean, where they were made to work on tobacco and sugar plantations. The living and working conditions for slaves were very bad. Many slaves tried to escape and others revolted against their owners in protest at their terrible treatment."
						},
						{
							"t": "p",
							"x": "There were, however, people in Britain who opposed the slave trade. The first formal anti-slavery groups were set up by the Quakers in the late 1700s, and they petitioned Parliament to ban the practice. William Wilberforce, an evangelical Christian and a member of Parliament, also played an important part in changing the law. Along with other abolitionists (people who supported the abolition of slavery), he succeeded in turning public opinion against the slave trade. In 1807, it became illegal to trade slaves in British ships or from British ports, and in 1833 the Emancipation Act abolished slavery throughout the British Empire. The Royal Navy stopped slave ships from other countries, freed the slaves and punished the slave traders. After 1833, 2 million Indian and Chinese workers were employed to replace the freed slaves. They worked on sugar plantations in the Caribbean, in mines in South Africa, on railways in East Africa and in the army in Kenya."
						},
						{
							"t": "p",
							"x": "The American war of independence"
						},
						{
							"t": "p",
							"x": "By the 1760s, there were substantial British colonies in North America. The colonies were wealthy and largely in control of their own affairs. Many of the colonist families had originally gone to North America in order to have religious freedom. They were well educated and interested in ideas of liberty. The British government wanted to tax the colonies. The colonists saw this as an attack on their freedom and said there should be ‘no taxation without representation’ in the British Parliament. Parliament tried to compromise by repealing some of the taxes, but relationships between the British government and the colonies continued to worsen."
						},
						{
							"t": "p",
							"x": "Fighting broke out between the colonists and the British forces. In 1776, 13 American colonies declared their independence, stating that people had a right to establish their own governments. The colonists eventually defeated the British army and Britain recognised the colonies’ independence in 1783."
						},
						{
							"t": "p",
							"x": "War with France"
						},
						{
							"t": "p",
							"x": "During the 18th century, Britain fought a number of wars with France. In 1789, there was a revolution in France and the new French government soon declared war on Britain. Napoleon, who became Emperor of France, continued the war. Britain’s navy fought against combined French and Spanish fleets, winning the Battle of Trafalgar in 1805. Admiral Nelson was in charge of the British fleet at Trafalgar and was killed in the battle. Nelson’s Column in Trafalgar Square, London, is a monument to him. His ship, HMS Victory, can be visited in Portsmouth. The British army also fought against the French. In 1815, the French Wars ended with the defeat of the Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo. Wellington was known as the Iron Duke and later became Prime Minister."
						},
						{
							"t": "p",
							"x": "THE UNION FLAG"
						},
						{
							"t": "p",
							"x": "Although Ireland had had the same monarch as England and Wales since Henry VIII, it had remained a separate country. In 1801, Ireland became unified with England, Scotland and Wales after the Act of Union of 1800. This created the United Kingdom of Great Britain and Ireland. One symbol of this union between England, Scotland, Wales and Ireland was a new version of the official flag, the Union Flag. This is often called the Union Jack. The flag combined crosses associated with England, Scotland and Ireland. It is still used today as the official flag of the UK."
						},
						{
							"t": "p",
							"x": "The Union Flag consists of three crosses:"
						},
						{
							"t": "p",
							"x": "The cross of St George, patron saint of England, is a red cross on a white ground."
						},
						{
							"t": "p",
							"x": "The cross of St Andrew, patron saint of Scotland, is a diagonal white cross on a blue ground."
						},
						{
							"t": "p",
							"x": "The cross of St Patrick, patron saint of Ireland, is a diagonal red cross on a white ground."
						},
						{
							"t": "p",
							"x": "There is also an official Welsh flag, which shows a Welsh dragon. The Welsh dragon does not appear on the Union Flag because, when the first Union Flag was created in 1606 from the flags of Scotland and England, the Principality of Wales was already united with England."
						},
						{
							"t": "p",
							"x": "The Victorian Age"
						},
						{
							"t": "p",
							"x": "In 1837, Queen Victoria became queen of the UK at the age of 18. She reigned until 1901, almost 64 years. At the date of writing (2013) this is the longest reign of any British monarch. Her reign is known as the Victorian Age. It was a time when Britain increased in power and influence abroad. Within the UK, the middle classes because increasingly significant and a number of reformers led moves to improve conditions of life for the poor."
						},
						{
							"t": "p",
							"x": "Queen Victoria"
						},
						{
							"t": "p",
							"x": "The British Empire"
						},
						{
							"t": "p",
							"x": "During the Victorian period, the British Empire grew to cover all of India, Australia and large parts of Africa. It became the largest empire the world has ever seen, with an estimated population of more than 400 million people."
						},
						{
							"t": "p",
							"x": "Many people were encouraged to leave the UK to settle overseas. Between 1853 and 1913, as many as 13 million British citizens left the country. People continued to come to Britain from other parts of the world. For example, between 1870 and 1914, around 120,000 Russian and Polish Jews came to Britain to escape persecution. Many settled in London’s East End and in Manchester and Leeds. People from the Empire, including India and Africa, also came to Britain to live, work and study."
						},
						{
							"t": "p",
							"x": "Trade and industry"
						},
						{
							"t": "p",
							"x": "Britain continued to be a great trading nation. The government began to promote policies of free trade, abolishing a number of taxes on imported goods. One example of this was the repealing of the Corn Laws in 1846. These had prevented the import of cheap grain. The reforms helped the development of British industry, because raw materials could now be imported more cheaply."
						},
						{
							"t": "p",
							"x": "Working conditions in factories gradually became better. In 1847, the number of hours that women and children could work was limited by law to 10 hours per day."
						},
						{
							"t": "p",
							"x": "Better housing began to be built for workers."
						},
						{
							"t": "p",
							"x": "Transport links also improved, enabling goods and people to move more easily around the country. Just before Victoria came to the throne, the father and son George and Robert Stephenson pioneered the railway engine and a major expansion of the railways took place in the Victorian period. Railways were built throughout the Empire. There were also great advances in other areas, such as the building of bridges by engineers such as Isambard Kingdom Brunel."
						},
						{
							"t": "p",
							"x": "ISAMBARD KINGDOM BRUNEL (1806–59)"
						},
						{
							"t": "p",
							"x": "Brunel was originally from Portsmouth, England. He was an engineer who built tunnels, bridges, railway lines and ships. He was responsible for constructing the Great Western Railway, which was the first major railway built in Britain. It runs from Paddington Station in London to the south west of England, the West Midlands and Wales. Many of Brunel’s bridges are still in use today."
						},
						{
							"t": "p",
							"x": "British industry led the world in the 19th century. The UK produced more than half of the world’s iron, coal and cotton cloth. The UK also became a centre for financial services, including insurance and banking. In 1851, the Great Exhibition opened in Hyde Park in the Crystal Palace, a huge building made of steel and glass. Exhibits ranged from huge machines to handmade goods. Countries from all over the world showed their goods but most of the objects were made in Britain."
						},
						{
							"t": "p",
							"x": "The Crimean War"
						},
						{
							"t": "p",
							"x": "From 1853 to 1856, Britain fought with Turkey and France against Russia in the Crimean War. It was the first war to be extensively covered by the media through news stories and photographs. The conditions were very poor and many soldiers died from illnesses they caught in the hospitals, rather than from war wounds."
						},
						{
							"t": "p",
							"x": "Queen Victoria introduced the Victoria Cross medal during this war. It honours acts of valour by soldiers."
						},
						{
							"t": "p",
							"x": "FLORENCE NIGHTINGALE (1820–1910)"
						},
						{
							"t": "p",
							"x": "Florence Nightingale was born in Italy to English parents. At the age of 31, she trained as a nurse in Germany. In 1854, she went to Turkey and worked in military hospitals, treating soldiers who were fighting in the Crimean War. She and her fellow nurses improved the conditions in the hospital and reduced the mortality rate."
						},
						{
							"t": "p",
							"x": "In 1860 she established the Nightingale Training School for nurses at St Thomas’ Hospital in London. The school was the first of its kind and still exists today, as do many of the practices that Florence used. She is often regarded as the founder of modern nursing."
						},
						{
							"t": "p",
							"x": "Ireland in the 19th century"
						},
						{
							"t": "p",
							"x": "Conditions in Ireland were not as good as in the rest of the UK. Two-thirds of the population still depended on farming to make their living, often on very small plots of land. Many depended on potatoes as a large part of their diet. In the middle of the century the potato crop failed, and Ireland suffered a famine. A million people died from disease and starvation. Another million and a half left Ireland. Some emigrated to the United States and others came to England. By 1861 there were large populations of Irish people in cities such as Liverpool, London, Manchester and Glasgow."
						},
						{
							"t": "p",
							"x": "The Irish Nationalist movement had grown strongly through the 19th century. Some, such as the Fenians, favoured complete independence. Others, such as Charles Stuart Parnell, advocated ‘Home Rule’, in which Ireland would remain in the UK but have its own parliament."
						},
						{
							"t": "p",
							"x": "The right to vote"
						},
						{
							"t": "p",
							"x": "As the middle classes in the wealthy industrial towns and cities grew in influence, they began to demand more political power. The Reform Act of 1832 had greatly increased the number of people with the right to vote. The Act also abolished the old pocket and rotten boroughs (see Chapter 4) and more parliamentary seats were given to the towns and cities. There was a permanent shift of political power from the countryside to the towns but voting was still based on ownership of property."
						},
						{
							"t": "p",
							"x": "This meant that members of the working class were still unable to vote."
						},
						{
							"t": "p",
							"x": "A movement began to demand the vote for the working classes and other people without property. Campaigners, called the Chartists, presented petitions to Parliament. At first they seemed to be unsuccessful, but in 1867 there was another Reform Act. This created many more urban seats in Parliament and reduced the amount of property that people needed to have before they could vote. However, the majority of men still did not have the right to vote and no women could vote."
						},
						{
							"t": "p",
							"x": "Politicians realised that the increased number of voters meant that they needed to persuade people to vote for them if they were to be sure of being elected to Parliament. The political parties began to create organisations to reach out to ordinary voters. Universal suffrage (the right of every adult, male or female, to vote) followed in the next century."
						},
						{
							"t": "p",
							"x": "In common with the rest of Europe, women in 19th century Britain had fewer rights than men. Until 1870, when a woman got married, her earnings, property and money automatically belonged to her husband. Acts of Parliament in 1870 and 1882 gave wives the right to keep their own earnings and property. In the late 19th and early 20th centuries, an increasing number of women campaigned and demonstrated for greater rights and, in particular, the right to vote. They formed the women’s suffrage movement and became known as ‘suffragettes’."
						},
						{
							"t": "p",
							"x": "EMMELINE PANKHURST (1858–1928)"
						},
						{
							"t": "p",
							"x": "Emmeline Pankhurst was born in Manchester in 1858. She set up the Women’s Franchise League in 1889, which fought to get the vote in local elections for married women. In 1903 she helped found the Women’s Social and Political Union (WSPU). This was the first group whose members were called ‘suffragettes’. The group used civil disobedience as part of their protest to gain the vote for women. They chained themselves to railings, smashed windows and committed arson. Many of the women, including Emmeline, went on hunger strike. In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War. Shortly before Emmeline’s death in 1928, women were given the right to vote at the age of 21, the same as men."
						},
						{
							"t": "p",
							"x": "The future of the Empire"
						},
						{
							"t": "p",
							"x": "Although the British Empire continued to grow until the 1920s, there was already discussion in the late 19th century about its future direction. Supporters of expansion believed that the Empire benefited Britain through increased trade and commerce. Others thought the Empire had become over-expanded and that the frequent conflicts in many parts of the Empire, such as India’s north-west frontier or southern Africa, were a drain on resources. Yet the great majority of British people believed in the Empire as a force for good in the world."
						},
						{
							"t": "p",
							"x": "The Boer War of 1899 to 1902 made the discussions about the future of the Empire more urgent. The British went to war in South Africa with settlers from the Netherlands called the Boers. The Boers fought fiercely and the war went on for over three years. Many died in the fighting and many more from disease. There was some public sympathy for the Boers and people began to question whether the Empire could continue. As different parts of the Empire developed, they won greater freedom and autonomy from Britain. Eventually, by the second half of the 20th century, there was, for the most part, an orderly transition from Empire to Commonwealth, with countries being granted their independence."
						},
						{
							"t": "p",
							"x": "RUDYARD KIPLING (1865–1936)"
						},
						{
							"t": "p",
							"x": "Rudyard Kipling was born in India in 1865 and later lived in India, the UK and the USA. He wrote books and poems set in both India and the UK. His poems and novels reflected the idea that the British Empire was a force for good. Kipling was awarded the Nobel Prize in Literature in 1907. His books include the Just So Stories and The Jungle Book, which continue to be popular today. His poem If has often been voted among the UK’s favourite poems. It begins with these words:"
						},
						{
							"t": "p",
							"x": "‘If you can keep your head when all about you"
						},
						{
							"t": "p",
							"x": "Are losing theirs and blaming it on you;"
						},
						{
							"t": "p",
							"x": "If you can trust yourself when all men doubt you,"
						},
						{
							"t": "p",
							"x": "But make allowance for their doubting too;"
						},
						{
							"t": "p",
							"x": "If you can wait and not be tired by waiting,"
						},
						{
							"t": "p",
							"x": "Or being lied about, don’t deal in lies,"
						},
						{
							"t": "p",
							"x": "Or being hated, don’t give way to hating,"
						},
						{
							"t": "p",
							"x": "And yet don’t look too good, nor talk too wise’"
						},
						{
							"t": "p",
							"x": "(If, Rudyard Kipling)"
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The change in the balance of power between Parliament and the monarchy"
						},
						{
							"t": "check",
							"x": "When and why Scotland joined England and Wales to become Great Britain"
						},
						{
							"t": "check",
							"x": "The reasons for a rebellion in Scotland led by Bonnie Prince Charlie"
						},
						{
							"t": "check",
							"x": "The ideas of the Enlightenment"
						},
						{
							"t": "check",
							"x": "The importance of the Industrial Revolution and development of industry"
						},
						{
							"t": "check",
							"x": "The slave trade and when it was abolished"
						},
						{
							"t": "check",
							"x": "The growth of the British Empire"
						},
						{
							"t": "check",
							"x": "How democracy developed during this period"
						}
					]
				},
				{
					"id": "3.4",
					"title": "The 20th century",
					"blocks": [
						{
							"t": "p",
							"x": "The First World War"
						},
						{
							"t": "p",
							"x": "The early 20th century was a time of optimism in Britain. The nation, with its expansive Empire, well-admired navy, thriving industry and strong political institutions, was what is now known as a global ‘superpower’. It was also a time of social progress. Financial help for the unemployed, old-age pensions and free school meals were just a few of the important measures introduced. Various laws were passed to improve safety in the workplace; town planning rules were tightened to prevent the further development of slums; and better support was given to mothers and their children after divorce or separation. Local government became more democratic and a salary for members of Parliament (MPs) was introduced for the first time, making it easier for more people to take part in public life."
						},
						{
							"t": "p",
							"x": "Representation of the First World War"
						},
						{
							"t": "p",
							"x": "This era of optimism and progress was cut short when war broke out between several European nations. On 28 June 1914, Archduke Franz Ferdinand of Austria was assassinated. This set off a chain of events leading to the First World War (1914–18). But while the assassination provided the trigger for war, other factors – such as a growing sense of nationalism in many European states; increasing militarism; imperialism; and the division of the major European powers into two camps – all set the conditions for war."
						},
						{
							"t": "p",
							"x": "The conflict was centred in Europe, but it was a global war involving nations from around the world. Britain was part of the Allied Powers, which included (amongst others) France, Russia, Japan, Belgium, Serbia – and later, Greece, Italy, Romania and the United States. The whole of the British Empire was involved in the conflict – for example, more than a million Indians fought on behalf of Britain in lots of different countries, and around 40,000 were killed. Men from the West Indies, Africa, Australia, New Zealand and Canada also fought with the British. The Allies fought against the Central Powers – mainly Germany, the Austro- Hungarian Empire, the Ottoman Empire and later Bulgaria. Millions of people were killed or wounded, with more than 2 million British casualties. One battle, the British attack on the Somme in July 1916, resulted in about 60,000 British casualties on the first day alone."
						},
						{
							"t": "p",
							"x": "The First World War ended at 11.00 am on 11th November 1918 with victory for Britain and its allies."
						},
						{
							"t": "p",
							"x": "The partition of Ireland"
						},
						{
							"t": "p",
							"x": "In 1913, the British government promised ‘Home Rule’ for Ireland. The proposal was to have a self-governing Ireland with its own parliament but still part of the UK. A Home Rule Bill was introduced in Parliament. It was opposed by the Protestants in the north of Ireland, who threatened to resist Home Rule by force."
						},
						{
							"t": "p",
							"x": "The outbreak of the First World War led the British government to postpone any changes in Ireland. Irish Nationalists were not willing to wait and in 1916 there was an uprising (the Easter Rising) against the British in Dublin. The leaders of the uprising were executed under military law. A guerrilla war against the British army and the police in Ireland followed. In 1921 a peace treaty was signed and in 1922 Ireland became two countries. The six counties in the north which were mainly Protestant remained part of the UK under the name Northern Ireland. The rest of Ireland became the Irish Free State. It had its own government and became a republic in 1949."
						},
						{
							"t": "p",
							"x": "There were people in both parts of Ireland who disagreed with the split between the North and the South. They still wanted Ireland to be one independent country."
						},
						{
							"t": "p",
							"x": "Years of disagreement led to a terror campaign in Northern Ireland and elsewhere. The conflict between those wishing for full Irish independence and those wishing to remain loyal to the British government is often referred to as ‘the Troubles’."
						},
						{
							"t": "p",
							"x": "The inter-war period"
						},
						{
							"t": "p",
							"x": "In the 1920s, many people’s living conditions got better. There were improvements in public housing and new homes were built in many towns and cities. However, in 1929, the world entered the ‘Great Depression’ and some parts of the UK suffered mass unemployment. The effects of the depression of the 1930s were felt differently in different parts of the UK. The traditional heavy industries such as shipbuilding were badly affected but new industries – including the automobile and aviation industries – developed. As prices generally fell, those in work had more money to spend. Car ownership doubled from 1 million to 2 million between 1930 and 1939. In addition, many new houses were built. It was also a time of cultural blossoming, with writers such as Graham Greene and Evelyn Waugh prominent."
						},
						{
							"t": "p",
							"x": "The economist John Maynard Keynes published influential new theories of economics. The BBC started radio broadcasts in 1922 and began the world’s first regular television service in 1936."
						},
						{
							"t": "p",
							"x": "The Second World War"
						},
						{
							"t": "p",
							"x": "Adolf Hitler came to power in Germany in 1933. He believed that the conditions imposed on Germany by the Allies after the First World War were unfair; he also wanted to conquer more land for the German people. He set about renegotiating treaties, building up arms, and testing Germany’s military strength in nearby countries. The British government tried to avoid another war. However, when Hitler invaded Poland in 1939, Britain and France declared war in order to stop his aggression."
						},
						{
							"t": "p",
							"x": "The war was initially fought between the Axis powers (fascist Germany and Italy and the Empire of Japan) and the Allies. The main countries on the allied side were the UK, France, Poland, Australia, New Zealand, Canada, and the Union of South Africa."
						},
						{
							"t": "p",
							"x": "Having occupied Austria and invaded Czechoslovakia, Hitler followed his invasion of Poland by taking control of Belgium and the Netherlands. Then, in 1940, German forces defeated allied troops and advanced through France. At this time of national crisis, Winston Churchill became Prime Minister and Britain’s war leader."
						},
						{
							"t": "p",
							"x": "As France fell, the British decided to evacuate British and French soldiers from France in a huge naval operation. Many civilian volunteers in small pleasure and fishing boats from Britain helped the Navy to rescue more than 300,000 men from the beaches around Dunkirk. Although many lives and a lot of equipment were lost, the evacuation was a success and meant that Britain was better able to continue the fight against the Germans. The evacuation gave rise to the phrase ‘the Dunkirk spirit’."
						},
						{
							"t": "p",
							"x": "From the end of June 1940 until the German invasion of the Soviet Union in June 1941, Britain and the Empire stood almost alone against Nazi Germany."
						},
						{
							"t": "p",
							"x": "Hitler wanted to invade Britain, but before sending in troops, Germany needed to control the air. The Germans waged an air campaign against Britain, but the British resisted with their fighter planes and eventually won the crucial aerial battle against the Germans, called ‘the Battle of Britain’, in the summer of 1940. The most important planes used by the Royal Air Force in the Battle of Britain were the Spitfire and the Hurricane – which were designed and built in Britain. Despite this crucial victory, the German air force was able to continue bombing London and other British cities at night-time. This was called the Blitz. Coventry was almost totally destroyed and a great deal of damage was done in other cities, especially in the East End of London. Despite the destruction, there was a strong national spirit of resistance in the UK. The phrase ‘the Blitz spirit’ is still used today to describe Britons pulling together in the face of adversity."
						},
						{
							"t": "p",
							"x": "Second World War Planes"
						},
						{
							"t": "p",
							"x": "WINSTON CHURCHILL (1874–1965)"
						},
						{
							"t": "p",
							"x": "Churchill was the son of a politician and, before becoming a Conservative MP in 1900, was a soldier and journalist. In May 1940 he became Prime Minister. He refused to surrender to the Nazis and was an inspirational leader to the British people in a time of great hardship. He lost the General Election in 1945 but returned as Prime Minister in 1951."
						},
						{
							"t": "p",
							"x": "He was an MP until he stood down at the 1964 General Election. Following his death in 1965, he was given a state funeral. He remains a much-admired figure to this day, and in 2002 was voted the greatest Briton of all time by the public. During the War, he made many famous speeches including lines which you may still hear:"
						},
						{
							"t": "p",
							"x": "‘I have nothing to offer but blood, toil, tears and sweat’"
						},
						{
							"t": "p",
							"x": "Churchill’s first speech to the House of Commons after he became Prime Minister, 1940"
						},
						{
							"t": "p",
							"x": "‘We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender’"
						},
						{
							"t": "p",
							"x": "Speech to the House of Commons after Dunkirk 1940"
						},
						{
							"t": "p",
							"x": "‘Never in the field of human conflict was so much owed by so many to so few’ Speech to the House of Commons during the Battle of Britain, 1940 At the same time as defending Britain, the British military was fighting the Axis on many other fronts. In Singapore, the Japanese defeated the British and then occupied Burma, threatening India. The United States entered the war when the Japanese bombed its naval base at Pearl Harbour in December 1941."
						},
						{
							"t": "p",
							"x": "That same year, Hitler attempted the largest invasion in history by attacking the Soviet Union. It was a fierce conflict, with huge losses on both sides. German forces were ultimately repelled by the Soviets, and the damage they sustained proved to be a pivotal point in the war."
						},
						{
							"t": "p",
							"x": "The allied forces gradually gained the upper hand, winning significant victories in North Africa and Italy. German losses in the Soviet Union, combined with the support of the Americans, meant that the Allies were eventually strong enough to attack Hitler’s forces in Western Europe. On 6 June 1944, allied forces landed in Normandy (this event is often referred to as ‘D-Day’). Following victory on the beaches of Normandy, the allied forces pressed on through France and eventually into Germany. The Allies comprehensively defeated Germany in May 1945."
						},
						{
							"t": "p",
							"x": "The war against Japan ended in August 1945 when the United States dropped its newly developed atom bombs on the Japanese cities of Hiroshima and Nagasaki."
						},
						{
							"t": "p",
							"x": "Scientists led by Ernest Rutherford, working at Manchester and then Cambridge University, were the first to ‘split the atom’ and took part in the Manhattan Project in the United States, which developed the atomic bomb. The war was finally over."
						},
						{
							"t": "p",
							"x": "ALEXANDER FLEMING (1881–1955)"
						},
						{
							"t": "p",
							"x": "Born in Scotland, Fleming moved to London as a teenager and later qualified as a doctor. He was researching influenza (the ‘flu’) in 1928 when he discovered penicillin. This was then further developed into a usable drug by the scientists Howard Florey and Ernst Chain. By the 1940s it was in mass production. Fleming won the Nobel Prize in Medicine in 1945. Penicillin is still used to treat bacterial infections today."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "What happened during the First World War"
						},
						{
							"t": "check",
							"x": "The partition of Ireland and the establishment of the UK as it is today"
						},
						{
							"t": "p",
							"x": "The events of the Second World War"
						}
					]
				},
				{
					"id": "3.2",
					"title": "Britain since 1945",
					"blocks": [
						{
							"t": "p",
							"x": "The welfare state"
						},
						{
							"t": "p",
							"x": "Although the UK had won the war, the country was exhausted economically and the people wanted change. During the war, there had been significant reforms to the education system and people now looked for wider social reforms."
						},
						{
							"t": "p",
							"x": "In 1945 the British people elected a Labour government. The new Prime Minister was Clement Atlee, who promised to introduce the welfare state outlined in the Beveridge Report. In 1948, Aneurin (Nye) Bevan, the Minister for Health, led the establishment of the National Health Service (NHS), which guaranteed a minimum standard of health care for all, free at the point of use. A national system of benefits was also introduced to provide ‘social security’, so that the population would be protected from the ‘cradle to the grave’. The government took into public ownership (nationalised) the railways, coal mines and gas, water and electricity supplies."
						},
						{
							"t": "p",
							"x": "Another aspect of change was self-government for former colonies. In 1947, independence was granted to nine countries, including India, Pakistan and Ceylon (now Sri Lanka). Other colonies in Africa, the Caribbean and the Pacific achieved independence over the next 20 years."
						},
						{
							"t": "p",
							"x": "The UK developed its own atomic bomb and joined the new North Atlantic Treaty Organization (NATO), an alliance of nations set up to resist the perceived threat of invasion by the Soviet Union and its allies."
						},
						{
							"t": "p",
							"x": "Britain had a Conservative government from 1951 to 1964. The 1950s were a period of economic recovery after the war and increasing prosperity for working people. The Prime Minister of the day, Harold Macmillan, was famous for his ‘wind of change’ speech about decolonisation and independence for the countries of the Empire."
						},
						{
							"t": "p",
							"x": "CLEMENT ATTLEE (1883–1967)"
						},
						{
							"t": "p",
							"x": "Clement Attlee"
						},
						{
							"t": "p",
							"x": "Clement Attlee was born in London in 1883. His father was a solicitor and, after studying at Oxford University, Attlee became a barrister. He gave this up to do social work in East London and eventually became a Labour MP. He was Winston Churchill’s Deputy Prime Minister in the wartime coalition government and became Prime Minister after the Labour Party won the 1945 election. He was Prime Minister from 1945 to 1951 and led the Labour Party for 20 years. Attlee’s government undertook the nationalisation of major industries (like coal and steel), created the National Health Service and implemented many of Beveridge’s plans for a stronger welfare state. Attlee also introduced measures to improve the conditions of workers."
						},
						{
							"t": "p",
							"x": "WILLIAM BEVERIDGE (1879–1963)"
						},
						{
							"t": "p",
							"x": "William Beveridge (later Lord Beveridge) was a British economist and social reformer. He served briefly as a Liberal MP and was subsequently the leader of the Liberals in the House of Lords but is best known for the 1942 report Social Insurance and Allied Services (known as the Beveridge Report). The report was commissioned by the wartime government in 1941. It recommended that the government should find ways of fighting the five ‘Giant Evils’ of Want, Disease, Ignorance, Squalor and Idleness and provided the basis of the modern welfare state."
						},
						{
							"t": "p",
							"x": "R A BUTLER (1902–82)"
						},
						{
							"t": "p",
							"x": "Richard Austen Butler (later Lord Butler) was born in 1902. He became a Conservative MP in 1923 and held several positions before becoming responsible for education in 1941. In this role, he oversaw the introduction of the Education Act 1944 (often called ‘The Butler Act’), which introduced free secondary education in England and Wales. The education system has changed significantly since the Act was introduced, but the division between primary and secondary schools that it enforced still remains in most areas of Britain."
						},
						{
							"t": "p",
							"x": "DYLAN THOMAS (1914–53)"
						},
						{
							"t": "p",
							"x": "Dylan Thomas was a Welsh poet and writer. He often read and performed his work in public, including for the BBC. His most well-known works include the radio play Under Milk Wood, first performed after his death in 1954, and the poem Do Not Go Gentle into That Good Night, which he wrote for his dying father in 1952."
						},
						{
							"t": "p",
							"x": "He died at the age of 39 in New York. There are several memorials to him in his birthplace, Swansea, including a statue and the Dylan Thomas Centre."
						},
						{
							"t": "p",
							"x": "Migration in post-war Britain"
						},
						{
							"t": "p",
							"x": "Rebuilding Britain after the Second World War was a huge task. There were labour shortages and the British government encouraged workers from Ireland and other parts of Europe to come to the UK and help with the reconstruction. In 1948, people from the West Indies were also invited to come and work."
						},
						{
							"t": "p",
							"x": "During the 1950s, there was still a shortage of labour in the UK. Further immigration was therefore encouraged for economic reasons, and many industries advertised for workers from overseas. For example, centres were set up in the West Indies to recruit people to drive buses. Textile and engineering firms from the north of England and the Midlands sent agents to India and Pakistan to find workers. For about 25 years, people from the West Indies, India, Pakistan and (later) Bangladesh travelled to work and settle in Britain."
						},
						{
							"t": "p",
							"x": "Social change in the 1960s"
						},
						{
							"t": "p",
							"x": "The decade of the 1960s was a period of significant social change. It was known as ‘the Swinging Sixties’. There was growth in British fashion, cinema and popular music. Two well-known pop music groups at the time were The Beatles and The Rolling Stones. People started to become better off and many bought cars and other consumer goods."
						},
						{
							"t": "p",
							"x": "It was also a time when social laws were liberalised, for example in relation to divorce and to abortion in England, Wales and Scotland. The position of women in the workplace also improved. It was quite common at the time for employers to ask women to leave their jobs when they got married, but Parliament passed new laws giving women the right to equal pay and made it illegal for employers to discriminate against women because of their gender."
						},
						{
							"t": "p",
							"x": "The 1960s was also a time of technological progress. Britain and France developed the world’s only supersonic commercial airliner, Concorde. New styles of architecture, including high-rise buildings and the use of concrete and steel, became common."
						},
						{
							"t": "p",
							"x": "The number of people migrating from the West Indies, India, Pakistan and what is now Bangladesh fell in the late 1960s because the government passed new laws to restrict immigration to Britain. Immigrants were required to have a strong connection to Britain through birth or ancestry. Even so, during the early 1970s, Britain admitted 28,000 people of Indian origin who had been forced to leave Uganda."
						},
						{
							"t": "p",
							"x": "SOME GREAT BRITISH INVENTIONS OF THE 20TH CENTURY"
						},
						{
							"t": "p",
							"x": "Britain has given the world some wonderful inventions. Examples from the 20th century include:"
						},
						{
							"t": "p",
							"x": "The television was developed by Scotsman John Logie Baird (1888–1946) in the 1920s. In 1932 he made the first television broadcast between London and Glasgow."
						},
						{
							"t": "p",
							"x": "Radar was developed by Scotsman Sir Robert Watson-Watt (1892–1973), who proposed that enemy aircraft could be detected by radio waves. The first successful radar test took place in 1935."
						},
						{
							"t": "p",
							"x": "Working with radar led Sir Bernard Lovell (1913–2012) to make new discoveries in astronomy. The radio telescope he built at Jodrell Bank in Cheshire was for many years the biggest in the world and continues to operate today."
						},
						{
							"t": "p",
							"x": "A Turing machine is a theoretical mathematical device invented by Alan Turing (1912–54), a British mathematician, in the 1930s. The theory was influential in the development of computer science and the modern-day computer."
						},
						{
							"t": "p",
							"x": "The Scottish physician and researcher John MacLeod (1876–1935) was the co-discoverer of insulin, used to treat diabetes."
						},
						{
							"t": "p",
							"x": "The structure of the DNA molecule was discovered in 1953 through work at British universities in London and Cambridge. This discovery contributed to many scientific advances, particularly in medicine and fighting crime. Francis Crick (1916–2004), one of those awarded the Nobel Prize for this discovery, was British."
						},
						{
							"t": "p",
							"x": "The jet engine was developed in Britain in the 1930s by Sir Frank Whittle (1907–96), a British Royal Air Force engineer Officer."
						},
						{
							"t": "p",
							"x": "Sir Christopher Cockerell (1910–99), a British inventor, invented the hovercraft in the 1950s."
						},
						{
							"t": "p",
							"x": "Britain and France developed Concorde, the world’s only supersonic passenger aircraft. It first flew in 1969 and began carrying passengers in 1976. Concorde was retired from service in 2003."
						},
						{
							"t": "p",
							"x": "The Harrier jump jet, an aircraft capable of taking off vertically, was also designed and developed in the UK."
						},
						{
							"t": "p",
							"x": "In the 1960s, James Goodfellow (1937–) invented the cash-dispensing ATM (automatic teller machine) or ‘cashpoint’. The first of these was put into use by Barclays Bank in Enfield, north London in 1967."
						},
						{
							"t": "p",
							"x": "IVF (in-vitro fertilisation) therapy for the treatment of infertility was pioneered in Britain by physiologist Sir Robert Edwards (1925–) and gynaecologist Patrick Steptoe (1913–88). The world’s first ‘test-tube baby’ was born in Oldham, Lancashire in 1978."
						},
						{
							"t": "p",
							"x": "In 1996, two British scientists, Sir Ian Wilmot (1944–) and Keith Campbell (1954–2012), led a team which was the first to succeed in cloning a mammal, Dolly the sheep. This has led to further research into the possible use of cloning to preserve endangered species and for medical purposes."
						},
						{
							"t": "p",
							"x": "Sir Peter Mansfield (1933–), a British scientist, is the co-inventor of the MRI (magnetic resonance imaging) scanner. This enables doctors and researchers to obtain exact and non-invasive images of human internal organs and has revolutionised diagnostic medicine."
						},
						{
							"t": "p",
							"x": "The inventor of the World Wide Web, Sir Tim Berners-Lee (1955–), is British. Information was successfully transferred via the web for the first time on 25 December 1990."
						},
						{
							"t": "p",
							"x": "Problems in the economy in the 1970s"
						},
						{
							"t": "p",
							"x": "In the late 1970s, the post-war economic boom came to an end. Prices of goods and raw materials began to rise sharply and the exchange rate between the pound and other currencies was unstable. This caused problems with the ‘balance of payments’: imports of goods were valued at more than the price paid for exports."
						},
						{
							"t": "p",
							"x": "Many industries and services were affected by strikes and this caused problems between the trade unions and the government. People began to argue that the unions were too powerful and that their activities were harming the UK."
						},
						{
							"t": "p",
							"x": "The 1970s were also a time of serious unrest in Northern Ireland. In 1972, the Northern Ireland Parliament was suspended and Northern Ireland was directly ruled by the UK government. Some 3,000 people lost their lives in the decades after 1969 in the violence in Northern Ireland."
						},
						{
							"t": "p",
							"x": "MARY PETERS (1939–)"
						},
						{
							"t": "p",
							"x": "Born in Manchester, Mary Peters moved to Northern Ireland as a child. She was a talented athlete who won an Olympic gold medal in the pentathlon in 1972. After this, she raised money for local athletics and became the team manager for the women’s British Olympic team. She continues to promote sport and tourism in Northern Ireland and was made a Dame of the British Empire in 2000 in recognition of her work."
						},
						{
							"t": "p",
							"x": "Europe and the Common Market"
						},
						{
							"t": "p",
							"x": "West Germany, France, Belgium, Italy, Luxembourg and the Netherlands formed the European Economic Community (EEC) in 1957. At first the UK did not wish to join the EEC but it eventually did so in 1973. The UK is a full member of the European Union but does not use the Euro currency."
						},
						{
							"t": "p",
							"x": "Conservative government from 1979 to1997"
						},
						{
							"t": "p",
							"x": "MARGARET THATCHER (1925–2013)"
						},
						{
							"t": "p",
							"x": "Margaret Thatcher"
						},
						{
							"t": "p",
							"x": "Margaret Thatcher was the daughter of a grocer from Grantham in Lincolnshire. She trained as a chemist and lawyer. She was elected as a Conservative MP in 1959 and became a cabinet minister in 1970 as the Secretary of State for Education and Science. In 1975 she was elected as Leader of the Conservative Party and so became Leader of the Opposition."
						},
						{
							"t": "p",
							"x": "Following the Conservative victory in the General Election in 1979, Margaret Thatcher became the first woman Prime Minister of the UK. She was the longest- serving Prime Minister of the 20th century, remaining in Office until 1990. During her premiership, there were a number of important economic reforms within the UK. She worked closely with the United States President, Ronald Reagan, and was one of the first Western leaders to recognise and welcome the changes in the leadership of the Soviet Union which eventually led to the end of the Cold War."
						},
						{
							"t": "p",
							"x": "Margaret Thatcher, Britain’s first woman Prime Minister, led the Conservative government from 1979 to 1990. The government made structural changes to the economy through the privatisation of nationalised industries and imposed legal controls on trade union powers. Deregulation saw a great increase in the role of the City of London as an international centre for investments, insurance and other financial services. Traditional industries, such as shipbuilding and coal mining, declined. In 1982, Argentina invaded the Falkland Islands, a British overseas territory in the South Atlantic. A naval taskforce was sent from the UK and military action led to the recovery of the islands. John Major was Prime Minister after Mrs Thatcher, and helped establish the Northern Ireland peace process."
						},
						{
							"t": "p",
							"x": "ROALD DAHL (1916–90)"
						},
						{
							"t": "p",
							"x": "Roald Dahl was born in Wales to Norwegian parents. He served in the Royal Air Force during the Second World War. It was during the 1940s that he began to publish books and short stories. He is most well known for his children’s books, although he also wrote for adults. His best-known works include Charlie and the Chocolate Factory and George’s Marvellous Medicine. Several of his books have been made into films."
						},
						{
							"t": "p",
							"x": "Labour government from 1997-2010"
						},
						{
							"t": "p",
							"x": "In 1997 the Labour Party led by Tony Blair was elected. The Blair government introduced a Scottish Parliament and a Welsh Assembly. The Scottish Parliament has substantial powers to legislate. The Welsh Assembly was given fewer legislative powers but considerable control over public services. In Northern Ireland, the Blair government was able to build on the peace process, resulting in the Good Friday Agreement signed in 1998. The Northern Ireland Assembly was elected in 1999 but suspended in 2002. It was not reinstated until 2007. Most paramilitary groups in Northern Ireland have decommissioned their arms and are inactive. Gordon Brown took over as Prime Minister in 2007."
						},
						{
							"t": "p",
							"x": "Conflicts in Afghanistan and Iraq"
						},
						{
							"t": "p",
							"x": "Throughout the 1990s, Britain played a leading role in coalition forces involved in the liberation of Kuwait, following the Iraqi invasion in 1990, and the conflict in the Former Republic of Yugoslavia. Since 2000, British armed forces have been engaged in the global fight against international terrorism and against the proliferation of weapons of mass destruction, including operations in Afghanistan and Iraq. British combat troops left Iraq in 2009. The UK now operates in Afghanistan as part of the United Nations (UN) mandated 50-nation International Security Assistance Force"
						},
						{
							"t": "p",
							"x": "(ISAF) coalition and at the invitation of the Afghan government. ISAF is working to ensure that Afghan territory can never again be used as a safe haven for international terrorism, where groups such as Al Qa’ida could plan attacks on the international community. As part of this, ISAF is building up the Afghan National Security Forces and is helping to create a secure environment in which governance and development can be extended. International forces are gradually handing over responsibility for security to the Afghans, who will have full security responsibility in all provinces by the end of 2014."
						},
						{
							"t": "p",
							"x": "Coalition government from 2010 to 2015"
						},
						{
							"t": "p",
							"x": "In May 2010, and for the first time in the UK since February 1974, no political party won an overall majority in the General Election. The Conservative and Liberal Democrat parties formed a coalition and the leader of the Conservative Party, David Cameron, became Prime Minister."
						},
						{
							"t": "p",
							"x": "Conservative Government from 2015 to 2024"
						},
						{
							"t": "p",
							"x": "The Conservative Government, which governed the United Kingdom from 2015 to 2024, saw multiple prime ministers, including David Cameron, Theresa May, Boris Johnson, Liz Truss, and Rishi Sunak. During this period, significant events included the 2016 EU membership referendum (Brexit), leadership changes, and handling of the COVID-19 pandemic. Despite reshuffling his cabinet and local election losses, Rishi Sunak has called for a general election on July 4, 2024. The Conservative Party’s popularity declined during this time, while Labour, the Liberal Democrats, and the Greens made substantial gains."
						},
						{
							"t": "p",
							"x": "Labour Government from 2024"
						},
						{
							"t": "p",
							"x": "The Labour party, lead by Keir Starmer, won the majority in the 2024 general election and formed the government."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The establishment of the welfare state"
						},
						{
							"t": "check",
							"x": "How life in Britain changed in the 1960s and 1970s"
						},
						{
							"t": "check",
							"x": "British inventions of the 20th century (you do not need to remember dates of births and deaths)"
						},
						{
							"t": "check",
							"x": "Events since 1979"
						}
					]
				}
			]
		},
		{
			"num": 4,
			"title": "A modern, thriving society",
			"sections": [
				{
					"id": "4.1",
					"title": "Chapter 4: A modern, thriving society",
					"blocks": [
						{
							"t": "p",
							"x": "IN THIS CHAPTER you will learn about the population and culture of the UK. The start of the chapter shows you where the major cities of the UK are. You should be sure you can identify the various cities, such as Leeds and Bradford, confidently. Because the UK is a multicultural country you will also have to know the sizes of the different ethnic and religious groups in the UK, as well as their main festivals."
						},
						{
							"t": "p",
							"x": "The chapter focuses on British culture after that and you should make sure you know who each of the people described are and what they have achieved. Britain’s recent sporting success at the Olympics features heavily so focus on who won medals and for what as well as the general information about sport in the UK. Make sure you familiarise yourself with the poems, films, books and other works listed too, as well as the artists, composers, architects, authors, poets and other famous people. You should also familiarise yourself with the extracts of poems provided and be able to recognise the famous landmarks at the end of the chapter."
						},
						{
							"t": "infohead",
							"x": "IN THIS CHAPTER THERE IS INFORMATION ABOUT:"
						},
						{
							"t": "info",
							"x": "The cities and population of the UK"
						},
						{
							"t": "info",
							"x": "Religious festivals of the UK"
						},
						{
							"t": "info",
							"x": "Popular sports and famous sportsmen and women"
						},
						{
							"t": "info",
							"x": "The development of music, including famous composers"
						},
						{
							"t": "info",
							"x": "British theatre and cinema through the ages"
						},
						{
							"t": "info",
							"x": "British artists and architects"
						},
						{
							"t": "info",
							"x": "Famous British poets and authors"
						},
						{
							"t": "info",
							"x": "Sections of famous British poems"
						},
						{
							"t": "info",
							"x": "British comedy and leisure activities"
						},
						{
							"t": "info",
							"x": "Famous British landmarks"
						}
					]
				},
				{
					"id": "4.2",
					"title": "Arts and culture",
					"blocks": [
						{
							"t": "p",
							"x": "Music"
						},
						{
							"t": "p",
							"x": "Music is an important part of British culture, with a rich and varied heritage. It ranges from classical music to modern pop. There are many different venues and musical events that take place across the UK."
						},
						{
							"t": "p",
							"x": "The Proms is an eight-week summer season of orchestral classical music that takes place in various venues, including the Royal Albert Hall in London. It has been organised by the British Broadcasting Corporation (BBC) since 1927. The Last Night of the Proms is the most well-known concert and (along with others in the series) is broadcast on television."
						},
						{
							"t": "p",
							"x": "Classical music has been popular in the UK for many centuries. Henry Purcell (1659–95) was the organist at Westminster Abbey. He wrote church music, operas and other pieces, and developed a British style distinct from that elsewhere in Europe. He continues to be influential on British composers."
						},
						{
							"t": "p",
							"x": "Classical music remains very popular in the UK"
						},
						{
							"t": "p",
							"x": "The German-born composer George Frederick Handel (1695–1759) spent many years in the UK and became a British citizen in 1727. He wrote the Water Music for King George I and Music for the Royal Fireworks for his son, George II. Both these pieces continue to be very popular. Handel also wrote an oratorio, Messiah, which is sung regularly by choirs, often at Easter time."
						},
						{
							"t": "p",
							"x": "More recently, important composers include Gustav Holst (1874–1934), whose work includes The Planets, a suite of pieces themed around the planets of the solar system. He adapted Jupiter, part of the Planets suite, as the tune for I vow to thee my country, a popular hymn in British churches."
						},
						{
							"t": "p",
							"x": "Sir Edward Elgar (1857–1934) was born in Worcester, England. His best-known work is probably the Pomp and Circumstance Marches. March No 1 (Land of Hope and Glory) is usually played at the Last Night of the Proms at the Royal Albert Hall."
						},
						{
							"t": "p",
							"x": "Ralph Vaughan Williams (1872–1958) wrote music for orchestras and choirs. He was strongly influenced by traditional English folk music."
						},
						{
							"t": "p",
							"x": "Sir William Walton (1902–83) wrote a wide range of music, from film scores to opera. He wrote marches for the coronations of King George VI and Queen Elizabeth II but his best-known works are probably Façade, which became a ballet, and Balthazar’s Feast, which is intended to be sung by a large choir."
						},
						{
							"t": "p",
							"x": "Benjamin Britten (1913–76) is best known for his operas, which include Peter Grimes and Billy Budd. He also wrote A Young Person’s Guide to the Orchestra, which is based on a piece of music by Purcell and introduces the listener to the various different sections of an orchestra. He founded the Aldeburgh festival in Suffolk, which continues to be a popular music event of international importance."
						},
						{
							"t": "p",
							"x": "Other types of popular music, including folk music, jazz, pop and music, have flourished in Britain since the 20th century. Britain has had an impact on popular music around the world, due to the wide use of the English language, the UK’s cultural links with many countries, and British capacity for invention and innovation."
						},
						{
							"t": "p",
							"x": "Since the 1960s, British pop music has made one of the most important cultural contributions to life in the UK. Bands including The Beatles and The Rolling Stones continue to have an influence on music both here and abroad. British pop music has continued to innovate – for example, the Punk movement of the late 1970s, and the trend towards boy and girl bands in the 1990s."
						},
						{
							"t": "p",
							"x": "There are many large venues that host music events throughout the year, such as: Wembley Stadium; The O2 in Greenwich, south-east London; and the Scottish Exhibition and Conference Centre (SECC) in Glasgow."
						},
						{
							"t": "p",
							"x": "Festival season takes place across the UK every summer, with major events in various locations. Famous festivals include Glastonbury, the Isle of Wight Festival and the V Festival. Many bands and solo artists, both well-known and up-and-coming, perform at these events."
						},
						{
							"t": "p",
							"x": "The National Eisteddfod of Wales is an annual cultural festival which includes music, dance, art and original performances largely in Welsh. It includes a number of important competitions for Welsh poetry."
						},
						{
							"t": "p",
							"x": "The Mercury Music Prize is awarded each September for the best album from the UK and Ireland. The Brit Awards is an annual event that gives awards in a range of categories, such as best British group and best British solo artist."
						},
						{
							"t": "p",
							"x": "Theatre"
						},
						{
							"t": "p",
							"x": "There are theatres in most towns and cities throughout the UK, ranging from the large to the small. They are an important part of local communities and often show both professional and amateur productions. London’s West End, also known as ‘Theatreland’, is particularly well known. The Mousetrap, a murder-mystery play by Dame Agatha Christie, has been running in the West End since 1952 and has had the longest initial run of any show in history."
						},
						{
							"t": "p",
							"x": "There is also a strong tradition of musical theatre in the UK. In the 19th century, Gilbert and Sullivan wrote comic operas, often making fun of popular culture and politics. These operas include HMS Pinafore, The Pirates of Penzance and The Mikado. Gilbert and Sullivan’s work is still often staged by professional and amateur groups. More recently, Andrew Lloyd Webber has written the music for shows which have been popular throughout the world, including, in collaboration with Tim Rice, Jesus Christ Superstar and Evita, and also Cats and The Phantom of the Opera."
						},
						{
							"t": "p",
							"x": "One British tradition is the pantomime. Many theatres produce a pantomime at Christmas time. They are based on fairy stories and are light-hearted plays with music and comedy, enjoyed by family audiences. One of the traditional characters is the Dame, a woman played by a man. There is often also a pantomime horse or cow played by two actors in the same costume."
						},
						{
							"t": "p",
							"x": "The Edinburgh Festival takes place in Edinburgh, Scotland, every summer. It is a series of different arts and cultural festivals, with the biggest and most well-known being the Edinburgh Festival Fringe (‘the Fringe’). The Fringe is a showcase of mainly theatre and comedy performances. It often shows experimental work."
						},
						{
							"t": "p",
							"x": "The Laurence Olivier Awards take place annually at different venues in London. There are a variety of categories, including best director, best actor and best actress."
						},
						{
							"t": "p",
							"x": "The awards are named after the British actor Sir Laurence Olivier, later Lord Olivier, who was best known for his roles in various Shakespeare plays."
						},
						{
							"t": "p",
							"x": "Art"
						},
						{
							"t": "p",
							"x": "During the Middle Ages, most art had a religious theme, particularly wall paintings in churches and illustrations in religious books. Much of this was lost after the Protestant Reformation but wealthy families began to collect other paintings and sculptures. Many of the painters working in Britain in the 16th and 17th centuries were from abroad – for example, Hans Holbein and Sir Anthony Van Dyck. British artists, particularly those painting portraits and landscapes, became well known from the 18th century onwards."
						},
						{
							"t": "p",
							"x": "Works by British and international artists are displayed in galleries across the UK. Some of the most well-known galleries are The National Gallery, Tate Britain and Tate Modern in London, the National Museum in Cardiff, and the National Gallery of Scotland in Edinburgh."
						},
						{
							"t": "p",
							"x": "The Turner Prize was established in 1984 and celebrates contemporary art. It was named after Joseph Turner. Four works are shortlisted every year and shown at Tate Britain before the winner is announced. The Turner Prize is recognised as one of the most prestigious visual art awards in Europe. Previous winners include Damien Hirst and Richard Wright."
						},
						{
							"t": "p",
							"x": "NOTABLE BRITISH ARTISTS"
						},
						{
							"t": "p",
							"x": "Thomas Gainsborough (1727–88) was a portrait painter who often painted people in country or garden scenery."
						},
						{
							"t": "p",
							"x": "David Allan (1744–96) was a Scottish painter who was best known for painting portraits. One of his most famous works is called The Origin of Painting."
						},
						{
							"t": "p",
							"x": "Joseph Turner (1775–1851) was an influential landscape painter in a modern style. He is considered the artist who raised the profile of landscape painting."
						},
						{
							"t": "p",
							"x": "John Constable (1776–1837) was a landscape painter most famous for his works of Dedham Vale on the Suffolk–Essex border in the east of England."
						},
						{
							"t": "p",
							"x": "The Pre-Raphaelites were an important group of artists in the second half of the 19th century. They painted detailed pictures on religious or literary themes in bright colours. The group included Holman Hunt, Dante Gabriel Rossetti and Sir John Millais."
						},
						{
							"t": "p",
							"x": "Sir John Lavery (1856–1941) was a very successful Northern Irish portrait painter. His work included painting the Royal Family."
						},
						{
							"t": "p",
							"x": "Henry Moore (1898–1986) was an English sculptor and artist. He is best known for his large bronze abstract sculptures."
						},
						{
							"t": "p",
							"x": "John Petts (1914–91) was a Welsh artist, best known for his engravings and stained glass."
						},
						{
							"t": "p",
							"x": "Lucian Freud (1922–2011) was a German-born British artist. He is best known for his portraits."
						},
						{
							"t": "p",
							"x": "David Hockney (1937–) was an important contributor to the ‘pop art’ movement of the 1960s and continues to be influential today."
						},
						{
							"t": "p",
							"x": "Architecture"
						},
						{
							"t": "p",
							"x": "The architectural heritage of the UK is rich and varied. In the Middle Ages, great cathedrals and churches were built, many of which still stand today. Examples are the cathedrals in Durham, Lincoln, Canterbury and Salisbury. The White Tower in the Tower of London is an example of a Norman castle keep, built on the orders of William the Conqueror."
						},
						{
							"t": "p",
							"x": "The Tower of London"
						},
						{
							"t": "p",
							"x": "Gradually, as the countryside became more peaceful and landowners became richer, the houses of the wealthy became more elaborate and great country houses such as Hardwick Hall in Derbyshire were built. British styles of architecture began to evolve."
						},
						{
							"t": "p",
							"x": "In the 17th century, Inigo Jones took inspiration from classical architecture to design the Queen’s House at Greenwich and the Banqueting House in Whitehall in London. Later in the century, Sir Christopher Wren helped develop a British version of the ornate styles popular in Europe in buildings such as the new St Paul’s Cathedral."
						},
						{
							"t": "p",
							"x": "In the 18th century, simpler designs became popular. The Scottish architect Robert Adam influenced the development of architecture in the UK, Europe and America. He designed the inside decoration as well as the building itself in great houses such as Dumfries House in Scotland. His ideas influenced architects in cities such as Bath, where the Royal Crescent was built."
						},
						{
							"t": "p",
							"x": "In the 19th century, the medieval ‘gothic’ style became popular again. As cities expanded, many great public buildings were built in this style. The Houses of Parliament and St Pancras Station were built at this time, as were the town halls in cities such as Manchester and Sheffield."
						},
						{
							"t": "p",
							"x": "Cenotaph in London, Whitehall"
						},
						{
							"t": "p",
							"x": "In the 20th century, Sir Edwin Lutyens had an influence throughout the British Empire. He designed New Delhi to be the seat of government in India. After the First World War, he was responsible for many war memorials throughout the world, including the Cenotaph in Whitehall. The Cenotaph is the site of the annual Remembrance Day service attended by the Queen, politicians and foreign ambassadors."
						},
						{
							"t": "p",
							"x": "Modern British architects including Sir Norman Foster, Lord (Richard) Rogers and Dame Zaha Hadid continue to work on major projects throughout the world as well as within the UK."
						},
						{
							"t": "p",
							"x": "Alongside the development of architecture, garden design and landscaping have played an important role in the UK. In the 18th century, Lancelot ‘Capability’"
						},
						{
							"t": "p",
							"x": "Brown designed the grounds around country houses so that the landscape appeared to be natural, with grass, trees and lakes. He often said that a place had ‘capabilities’. Later, Gertrude Jekyll often worked with Edwin Lutyens to design colourful gardens around the houses he designed. Gardens continue to be an important part of homes in the UK. The annual Chelsea Flower Show showcases garden design from Britain and around the world."
						},
						{
							"t": "p",
							"x": "Fashion and design"
						},
						{
							"t": "p",
							"x": "Britain has produced many great designers, from Thomas Chippendale (who designed furniture in the 18th century) to Clarice Cliff (who designed Art Deco ceramics) to Sir Terence Conran (a 20th-century interior designer). Leading fashion designers of recent years include Mary Quant, Alexander McQueen and Vivienne Westwood."
						},
						{
							"t": "p",
							"x": "Literature"
						},
						{
							"t": "p",
							"x": "The UK has a prestigious literary history and tradition. Several British writers, including the novelist Sir William Golding, the poet Seamus Heaney, and the playwright Harold Pinter, have won the Nobel Prize in Literature. Other authors have become well known in popular fiction. Agatha Christie’s detective stories are read all over the world and Ian Fleming’s books introduced James Bond. In 2003, The Lord of the Rings by JRR Tolkien was voted the country’s best-loved novel."
						},
						{
							"t": "p",
							"x": "The Man Booker Prize for Fiction is awarded annually for the best fiction novel written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since 1968. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes."
						},
						{
							"t": "p",
							"x": "NOTABLE AUTHORS AND WRITERS"
						},
						{
							"t": "p",
							"x": "Jane Austen (1775–1817) was an English novelist. Her books include Pride and Prejudice and Sense and Sensibility. Her novels are concerned with marriage and family relationships. Many have been made into television programmes or films."
						},
						{
							"t": "p",
							"x": "Charles Dickens (1812–70) wrote a number of very famous novels, including Oliver Twist and Great Expectations. You will hear references in everyday talk to some of the characters in his books, such as Scrooge (a mean person) or Mr Micawber (always hopeful)."
						},
						{
							"t": "p",
							"x": "Robert Louis Stevenson (1850–94) wrote books which are still read by adults and children today. His most famous books include Treasure Island, Kidnapped and Dr Jekyll and Mr Hyde."
						},
						{
							"t": "p",
							"x": "Thomas Hardy (1840–1928) was an author and poet. His best-known novels focus on rural society and include Far from the Madding Crowd and Jude the Obscure."
						},
						{
							"t": "p",
							"x": "Sir Arthur Conan Doyle (1859–1930) was a Scottish doctor and writer. He was best known for his stories about Sherlock Holmes, who was one of the first fictional detectives."
						},
						{
							"t": "p",
							"x": "Evelyn Waugh (1903–66) wrote satirical novels, including Decline and Fall and Scoop. He is perhaps best known for Brideshead Revisited."
						},
						{
							"t": "p",
							"x": "Sir Kingsley Amis (1922–95) was an English novelist and poet. He wrote more than 20 novels. The most well-known is Lucky Jim."
						},
						{
							"t": "p",
							"x": "Graham Greene (1904–91) wrote novels often influenced by his religious beliefs, including The Heart of the Matter, The Honorary Consul, Brighton Rock and Our Man in Havana."
						},
						{
							"t": "p",
							"x": "J K Rowling (1965–) wrote the Harry Potter series of children’s books, which have enjoyed huge international success. She now writes fiction for adults as well."
						},
						{
							"t": "p",
							"x": "British poets"
						},
						{
							"t": "p",
							"x": "British poetry is among the richest in the world. The Anglo-Saxon poem Beowulf tells of its hero’s battles against monsters and is still translated into modern English. Poems which survive from the Middle Ages include Chaucer’s Canterbury Tales and a poem called Sir Gawain and the Green Knight, about one of the knights at the court of King Arthur."
						},
						{
							"t": "p",
							"x": "As well as plays, Shakespeare wrote many sonnets (poems which must be 14 lines long) and some longer poems. As Protestant ideas spread, a number of poets wrote poems inspired by their religious views. One of these was John Milton, who wrote Paradise Lost."
						},
						{
							"t": "p",
							"x": "Other poets, including William Wordsworth, were inspired by nature. Sir Walter Scott wrote poems inspired by Scotland and the traditional stories and songs from the area on the borders of Scotland and England. He also wrote novels, many of which were set in Scotland."
						},
						{
							"t": "p",
							"x": "Poetry was very popular in the 19th century, with poets such as William Blake, John Keats, Lord Byron, Percy Shelley, Alfred Lord Tennyson, and Robert and Elizabeth Browning. Later, many poets – for example, Wilfred Owen and Siegfried Sassoon – were inspired to write about their experiences in the First World War."
						},
						{
							"t": "p",
							"x": "More recently, popular poets have included Sir Walter de la Mare, John Masefield, Sir John Betjeman and Ted Hughes. Some of the best-known poets are buried or commemorated in Poet’s Corner in Westminster Abbey."
						},
						{
							"t": "p",
							"x": "Some famous lines include:"
						},
						{
							"t": "p",
							"x": "‘Oh to be in England now that April’s there"
						},
						{
							"t": "p",
							"x": "And whoever wakes in England sees, some morning, unaware,"
						},
						{
							"t": "p",
							"x": "That the lowest boughs and the brushwood sheaf"
						},
						{
							"t": "p",
							"x": "Round the elm-tree bole are in tiny leaf"
						},
						{
							"t": "p",
							"x": "While the Chaffinch sings on the orchard bough"
						},
						{
							"t": "p",
							"x": "In England – Now!’"
						},
						{
							"t": "p",
							"x": "(Robert Browning, 1812–89 – Home Thoughts from Abroad)"
						},
						{
							"t": "p",
							"x": "‘She walks in beauty, like the night"
						},
						{
							"t": "p",
							"x": "Of cloudless climes and starry skies,"
						},
						{
							"t": "p",
							"x": "All that’s best of dark and bright"
						},
						{
							"t": "p",
							"x": "Meet in her aspect and her eyes’"
						},
						{
							"t": "p",
							"x": "(Lord Byron, 1788–1824 – She Walks in Beauty)"
						},
						{
							"t": "p",
							"x": "‘I wander’d lonely as a cloud"
						},
						{
							"t": "p",
							"x": "That floats on high o’er vales and hills"
						},
						{
							"t": "p",
							"x": "When all at once I saw a crowd,"
						},
						{
							"t": "p",
							"x": "A host of golden daffodils’"
						},
						{
							"t": "p",
							"x": "(William Wordsworth, 1770–1850 – The Daffodils)"
						},
						{
							"t": "p",
							"x": "‘Tyger! Tyger! Burning bright"
						},
						{
							"t": "p",
							"x": "In the forests of the night,"
						},
						{
							"t": "p",
							"x": "What immortal hand or eye"
						},
						{
							"t": "p",
							"x": "Could frame thy fearful symmetry?’"
						},
						{
							"t": "p",
							"x": "(William Blake, 1757–1827 – The Tyger)"
						},
						{
							"t": "p",
							"x": "‘What passing-bells for these who die as cattle?"
						},
						{
							"t": "p",
							"x": "Only the monstrous anger of the guns."
						},
						{
							"t": "p",
							"x": "Only the stuttering rifles’ rapid rattle"
						},
						{
							"t": "p",
							"x": "Can patter out their hasty orisons.’"
						},
						{
							"t": "p",
							"x": "(Wilfred Owen, 1893–1918 – Anthem for Doomed Youth)"
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "Which sports are particularly popular in the UK"
						},
						{
							"t": "p",
							"x": "Some of the major sporting events that take place each year"
						},
						{
							"t": "p",
							"x": "Some of the major arts and culture events that happen in the UK"
						},
						{
							"t": "p",
							"x": "How achievements in arts and culture are formally recognised"
						},
						{
							"t": "p",
							"x": "Important figures in British literature"
						}
					]
				},
				{
					"id": "4.3",
					"title": "Customs and traditions",
					"blocks": [
						{
							"t": "p",
							"x": "The main Christian festivals"
						},
						{
							"t": "p",
							"x": "Christmas Day, 25 December, celebrates the birth of Jesus Christ. It is a public holiday. Many Christians go to church on Christmas Eve (24 December) or on Christmas Day itself."
						},
						{
							"t": "p",
							"x": "Christmas is celebrated in a traditional way. People usually spend the day at home and eat a special meal, which often includes roast turkey, Christmas pudding and mince pies. They give gifts, send cards and decorate their houses. Christmas is a special time for children. Very young children believe that Father Christmas (also known as Santa Claus) brings them presents during the night before Christmas Day. Many people decorate a tree in their home."
						},
						{
							"t": "p",
							"x": "Boxing Day is the day after Christmas Day and is a public holiday."
						},
						{
							"t": "p",
							"x": "Easter eggs, often chocolate eggs given as presents on Easter day."
						},
						{
							"t": "p",
							"x": "Easter takes place in March or April. It marks the death of Jesus Christ on Good Friday and his rising from the dead on Easter Sunday. Both Good Friday and the following Monday, called Easter Monday, are public holidays."
						},
						{
							"t": "p",
							"x": "The 40 days before Easter are known as Lent. It is a time when Christians take time to reflect and prepare for Easter. Traditionally, people would fast during this period and today many people will give something up, like a favourite food. The day before Lent starts is called Shrove Tuesday, or Pancake Day. People eat pancakes, which were traditionally made to use up foods such as eggs, fat and milk before fasting. Lent begins on Ash Wednesday. There are church services where Christians are marked with an ash cross on their forehead as a symbol of death and sorrow for sin."
						},
						{
							"t": "p",
							"x": "Easter is also celebrated by people who are not religious. ‘Easter eggs’ are chocolate eggs often given as presents at Easter as a symbol of new life."
						},
						{
							"t": "p",
							"x": "Other religious festivals"
						},
						{
							"t": "p",
							"x": "Diwali normally falls in October or November and lasts for five days. It is often called the Festival of Lights. It is celebrated by Hindus and Sikhs. It celebrates the victory of good over evil and the gaining of knowledge. There are different stories about how the festival came about. There is a famous celebration of Diwali in Leicester."
						},
						{
							"t": "p",
							"x": "Hannukah is in November or December and is celebrated for eight days. It is to remember the Jews’ struggle for religious freedom. On each day of the festival a candle is lit on a stand of eight candles (called a menorah) to remember the story of the festival, where oil that should have lasted only a day did so for eight."
						},
						{
							"t": "p",
							"x": "Eid al-Fitr celebrates the end of Ramadan, when Muslims have fasted for a month. They thank Allah for giving them the strength to complete the fast. The date when it takes place changes every year. Muslims attend special services and meals."
						},
						{
							"t": "p",
							"x": "Eid ul Adha remembers that the prophet Ibrahim was willing to sacrifice his son when God ordered him to. It reminds Muslims of their own commitment to God."
						},
						{
							"t": "p",
							"x": "Many Muslims sacrifice an animal to eat during this festival. In Britain this has to be done in a slaughterhouse."
						},
						{
							"t": "p",
							"x": "Vaisakhi (also spelled Baisakhi) is a Sikh festival which celebrates the founding of the Sikh community known as the Khalsa. It is celebrated on 14 April each year with parades, dancing and singing."
						},
						{
							"t": "p",
							"x": "Other festivals and traditions"
						},
						{
							"t": "p",
							"x": "New year in Scotland, also called Hogmanay, Edinburgh"
						},
						{
							"t": "p",
							"x": "New Year, 1 January, is a public holiday. People usually celebrate on the night of 31 December (called New Year’s Eve). In Scotland, 31 December is called Hogmanay and 2 January is also a public holiday. For some Scottish people, Hogmanay is a bigger holiday than Christmas."
						},
						{
							"t": "p",
							"x": "Valentine’s Day, 14 February, is when lovers exchange cards and gifts. Sometimes people send anonymous cards to someone they secretly admire."
						},
						{
							"t": "p",
							"x": "April Fool’s Day, 1 April, is a day when people play jokes on each other until midday. The television and newspapers often have stories that are April Fool jokes."
						},
						{
							"t": "p",
							"x": "Mothering Sunday (or Mother’s Day) is the Sunday three weeks before Easter. Children send cards or buy gifts for their mothers."
						},
						{
							"t": "p",
							"x": "Father’s Day is the third Sunday in June. Children send cards or buy gifts for their fathers."
						},
						{
							"t": "p",
							"x": "Halloween, 31 October, is an ancient festival and has roots in the pagan festival to mark the beginning of winter. Young people will often dress up in frightening costumes to play ‘trick or treat’. People give them treats to stop them playing tricks on them. A lot of people carve lanterns out of pumpkins and put a candle inside."
						},
						{
							"t": "p",
							"x": "Bonfire Night, 5 November, is an occasion when people in Great Britain set off fireworks at home or in special displays. The origin of this celebration was an event in 1605, when a group of Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament."
						},
						{
							"t": "p",
							"x": "Remembrance Day, 11 November, commemorates those who died fighting for the UK and its allies. Originally it commemorated the dead of the First World War, which ended on 11 November 1918. People wear poppies (the red flower found on the battlefields of the First World War). At 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall, London."
						},
						{
							"t": "p",
							"x": "Bank holidays"
						},
						{
							"t": "p",
							"x": "As well as those mentioned previously, there are other public holidays each year called bank holidays, when banks and many other businesses are closed for the day."
						},
						{
							"t": "p",
							"x": "These are of no religious significance. They are at the beginning of May, in late May or early June, and in August. In Northern Ireland, the anniversary of the Battle of the Boyne in July is also a public holiday."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The main Christian festivals that are celebrated in the UK"
						},
						{
							"t": "check",
							"x": "Other religious festivals that are important in the UK"
						},
						{
							"t": "check",
							"x": "Some of the other events that are celebrated in the UK"
						},
						{
							"t": "check",
							"x": "What a bank holiday is"
						}
					]
				},
				{
					"id": "4.4",
					"title": "Leisure",
					"blocks": [
						{
							"t": "p",
							"x": "People in the UK spend their leisure time in many different ways."
						},
						{
							"t": "p",
							"x": "Gardening"
						},
						{
							"t": "p",
							"x": "A lot of people have gardens at home and will spend their free time looking after them. Some people rent additional land called ‘an allotment’, where they grow fruit and vegetables. Gardening and flower shows range from major national exhibitions to small local events. Many towns have garden centres selling plants and gardening equipment. There are famous gardens to visit throughout the UK, including Kew Gardens, Sissinghurst and Hidcote in England, Crathes Castle and Inveraray Castle in Scotland, Bodnant Garden in Wales, and Mount Stewart in Northern Ireland."
						},
						{
							"t": "p",
							"x": "Kew gardens"
						},
						{
							"t": "p",
							"x": "The countries that make up the UK all have flowers which are particularly associated with them and which are sometimes worn on national saints’ days:"
						},
						{
							"t": "p",
							"x": "Shopping"
						},
						{
							"t": "p",
							"x": "There are many different places to go shopping in the UK. Most towns and cities have a central shopping area, which is called the town centre. Undercover shopping centres are also common – these might be in town centres or on the outskirts of a town or city. Most shops in the UK are open seven days a week, although trading hours on Sundays and public holidays are generally reduced. Many towns also have markets on one or more days a week, where stallholders sell a variety of goods."
						},
						{
							"t": "p",
							"x": "Cooking and food"
						},
						{
							"t": "p",
							"x": "Many people in the UK enjoy cooking. They often invite each other to their homes for dinner. A wide variety of food is eaten in the UK because of the country’s rich cultural heritage and diverse population."
						},
						{
							"t": "p",
							"x": "TRADITIONAL FOODS"
						},
						{
							"t": "p",
							"x": "There are a variety of foods that are traditionally associated with different parts of the UK:"
						},
						{
							"t": "p",
							"x": "England: Roast beef, which is served with potatoes, vegetables, Yorkshire puddings (batter that is baked in the oven) and other accompaniments. Fish and chips are also popular."
						},
						{
							"t": "p",
							"x": "Wales: Welsh cakes – a traditional Welsh snack made from flour, dried fruits and spices, and served either hot or cold."
						},
						{
							"t": "p",
							"x": "Scotland: Haggis – a sheep’s stomach stuffed with offal, suet, onions and oatmeal."
						},
						{
							"t": "p",
							"x": "Northern Ireland: Ulster fry – a fried meal with bacon, eggs, sausage, black pudding, white pudding, tomatoes, mushrooms, soda bread and potato bread."
						},
						{
							"t": "p",
							"x": "Films"
						},
						{
							"t": "p",
							"x": "British film industry"
						},
						{
							"t": "p",
							"x": "The UK has had a major influence on modern cinema."
						},
						{
							"t": "p",
							"x": "Charlie Chaplin, famous for playing a tramp character"
						},
						{
							"t": "p",
							"x": "Films were first shown publicly in the UK in 1896 and film screenings very quickly became popular. From the beginning, film makers became famous for clever special effects and this continues to be an area of British expertise. From the early days of the cinema, British actors have worked in both the UK and USA. Sir Charles (Charlie) Chaplin became famous in silent movies for his tramp character and was one of many British actors to make a career in Hollywood."
						},
						{
							"t": "p",
							"x": "British studios flourished in the 1930s. Eminent directors included Sir Alexander Korda and Sir Alfred Hitchcock, who later left for Hollywood and remained an important film director until his death in 1980. During the Second World War, British movies (for example, In Which We Serve) played an important part in boosting morale. Later, British directors including Sir David Lean and Ridley Scott found great success both in the UK and internationally."
						},
						{
							"t": "p",
							"x": "The 1950s and 1960s were a high point for British comedies, including Passport to Pimlico, The Ladykillers and, later, the Carry On films."
						},
						{
							"t": "p",
							"x": "Many of the films now produced in the UK are made by foreign companies, using British expertise. Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry Potter and James Bond), have been produced in the UK. Ealing Studios has a claim to being the oldest continuously working film studio facility in the world. Britain continues to be particularly strong in special effects and animation. One example is the work of Nick Park, who has won four Oscars for his animated films, including three for films featuring Wallace and Gromit."
						},
						{
							"t": "p",
							"x": "Actors such as Sir Lawrence Olivier, David Niven, Sir Rex Harrison and Richard Burton starred in a wide variety of popular films. British actors continue to be popular and continue to win awards throughout the world. Recent British actors to have won Oscars include Colin Firth, Sir Anthony Hopkins, Dame Judi Dench, Kate Winslet and Tilda Swinton."
						},
						{
							"t": "p",
							"x": "The annual British Academy Film Awards, hosted by the British Academy of Film and Television Arts (BAFTA), are the British equivalent of the Oscars."
						},
						{
							"t": "p",
							"x": "SOME FAMOUS BRITISH FILMS"
						},
						{
							"t": "p",
							"x": "The 39 Steps (1935), directed by Alfred Hitchcock"
						},
						{
							"t": "p",
							"x": "Brief Encounter (1945), directed by David Lean"
						},
						{
							"t": "p",
							"x": "The Third Man (1949), directed by Carol Reed"
						},
						{
							"t": "p",
							"x": "The Belles of St Trinian’s (1954), directed by Frank Launder"
						},
						{
							"t": "p",
							"x": "Lawrence of Arabia (1962), directed by David Lean"
						},
						{
							"t": "p",
							"x": "Women in Love (1969), directed by Ken Russell"
						},
						{
							"t": "p",
							"x": "Don’t Look Now (1973), directed by Nicolas Roeg"
						},
						{
							"t": "p",
							"x": "Chariots of Fire (1981), directed by Hugh Hudson"
						},
						{
							"t": "p",
							"x": "The Killing Fields (1984), directed by Roland Joffé"
						},
						{
							"t": "p",
							"x": "Four Weddings and a Funeral (1994), directed by Mike Newell"
						},
						{
							"t": "p",
							"x": "Touching the Void (2003), directed by Kevin MacDonald."
						},
						{
							"t": "p",
							"x": "British comedy"
						},
						{
							"t": "p",
							"x": "The traditions of comedy and satire, and the ability to laugh at ourselves, are an important part of the UK character. Medieval kings and rich nobles had jesters who told jokes and made fun of people in the Court. Later, Shakespeare included comic characters in his plays. In the 18th century, political cartoons attacking prominent politicians – and, sometimes, the monarch or other members of the Royal Family – became increasingly popular. In the 19th century, satirical magazines began to be published. The most famous was Punch, which was published for the first time in the 1840s. Today, political cartoons continue to be published in newspapers, and magazines such as_Private Eye_ continue the tradition of satire."
						},
						{
							"t": "p",
							"x": "Comedians were a popular feature of British music hall, a form of variety theatre which was very common until television became the leading form of entertainment in the UK. Some of the people who had performed in the music halls in the 1940s and 1950s, such as Morecambe and Wise, became stars of television."
						},
						{
							"t": "p",
							"x": "Television comedy developed its own style. Situation comedies, or sitcoms, which often look at family life and relationships in the workplace, remain popular. Satire has also continued to be important, with shows like That Was The Week That Was in the 1960s and Spitting Image in the 1980s and 1990s. In 1969, Monty Python’s Flying Circus introduced a new type of progressive comedy. Stand-up comedy, where a solo comedian talks to a live audience, has become popular again in recent years."
						},
						{
							"t": "p",
							"x": "Television and radio"
						},
						{
							"t": "p",
							"x": "Many different television (TV) channels are available in the UK. Some are free to watch and others require a paid subscription. British television shows a wide variety of programmes. Popular programmes include regular soap operas such as Coronation Street and EastEnders. In Scotland, some Scotland-specific programmes are shown and there is also a channel with programmes in the Gaelic language. There is a Welsh-language channel in Wales. There are also programmes specific to Northern Ireland and some programmes broadcast in Irish Gaelic."
						},
						{
							"t": "p",
							"x": "Everyone in the UK with a TV, computer or other medium which can be used for watching TV must have a television licence. One licence covers all of the equipment in one home, except when people rent different rooms in a shared house and each has a separate tenancy agreement – those people must each buy a separate licence. People over 75 can apply for a free TV licence and blind people can get a 50% discount. You will receive a fine of up to £1,000 if you watch TV but do not have a TV licence."
						},
						{
							"t": "p",
							"x": "The money from TV licences is used to pay for the British Broadcasting Corporation (BBC). This is a British public service broadcaster providing television and radio programmes. The BBC is the largest broadcaster in the world. It is the only wholly state-funded media organisation that is independent of government. Other UK channels are primarily funded through advertisements and subscriptions."
						},
						{
							"t": "p",
							"x": "There are also many different radio stations in the UK. Some broadcast nationally and others in certain cities or regions. There are radio stations that play certain types of music and some broadcast in regional languages such as Welsh or Gaelic. Like television, BBC radio stations are funded by TV licences and other radio stations are funded through advertisements."
						},
						{
							"t": "p",
							"x": "Social networking"
						},
						{
							"t": "p",
							"x": "Social networking websites such as Facebook and Twitter are a popular way for people to stay in touch with friends, organise social events, and share photos, videos and opinions. Many people use social networking on their mobile phones when out and about."
						},
						{
							"t": "p",
							"x": "Pubs and night clubs"
						},
						{
							"t": "p",
							"x": "Public houses (pubs) are an important part of the UK social culture. Many people enjoy meeting friends in the pub. Most communities will have a ‘local’ pub that is a natural focal point for social activities. Pub quizzes are popular. Pool and darts are traditional pub games. To buy alcohol in a pub or night club you must be 18 or over, but people under that age may be allowed in some pubs with an adult. When they are 16, people can drink wine or beer with a meal in a hotel or restaurant (including eating areas in pubs) as long as they are with someone over 18."
						},
						{
							"t": "p",
							"x": "Pubs are usually open during the day from 11.00 am (12 noon on Sundays). Night clubs with dancing and music usually open and close later than pubs. The licensee decides the hours that the pub or night club is open."
						},
						{
							"t": "p",
							"x": "Betting and gambling"
						},
						{
							"t": "p",
							"x": "In the UK, people often enjoy a gamble on sports or other events. There are also casinos in many places. You have to be 18 to go into betting shops or gambling clubs. There is a National Lottery for which draws are made every week. You can enter by buying a ticket or a scratch card. People under 18 (minimum age will rose from 16 to 18 from April 2021) are not allowed to participate in the National Lottery."
						},
						{
							"t": "p",
							"x": "Pets"
						},
						{
							"t": "p",
							"x": "A lot of people in the UK have pets such as cats or dogs. They might have them for company or because they enjoy looking after them. It is against the law to treat a pet cruelly or to neglect it. All dogs in public places must wear a collar showing the name and address of the owner. The owner is responsible for keeping the dog under control and for cleaning up after the animal in a public place."
						},
						{
							"t": "p",
							"x": "Vaccinations and medical treatment for animals are available from veterinary surgeons (vets). There are charities which may help people who cannot afford to pay a vet."
						}
					]
				},
				{
					"id": "4.5",
					"title": "Places of interest",
					"blocks": [
						{
							"t": "p",
							"x": "The UK has a large network of public footpaths in the countryside. There are also many opportunities for mountain biking, mountaineering and hill walking. There are 15 national parks in England, Wales and Scotland. They are areas of protected countryside that everyone can visit, and where people live, work and look after the landscape."
						},
						{
							"t": "p",
							"x": "There are many museums in the UK, which range from small community museums to large national and civic collections. Famous landmarks exist in towns, cities and the countryside throughout the UK. Most of them are open to the public to view (generally for a charge)."
						},
						{
							"t": "p",
							"x": "Many parts of the countryside and places of interest are kept open by the National Trust in England, Wales and Northern Ireland and the National Trust for Scotland."
						},
						{
							"t": "p",
							"x": "Both are charities that work to preserve important buildings, coastline and countryside in the UK. The National Trust was founded in 1895 by three volunteers."
						},
						{
							"t": "p",
							"x": "There are now more than 61,000 volunteers helping to keep the organisation running."
						},
						{
							"t": "p",
							"x": "UK landmarks"
						},
						{
							"t": "p",
							"x": "Big Ben is the nickname for the great bell of the clock at the Houses of Parliament in London. Many people call the clock Big Ben as well. The clock is over 150 years old and is a popular tourist attraction. The clock tower is named ‘Elizabeth Tower’ in honour of Queen Elizabeth II’s Diamond Jubilee in 2012."
						},
						{
							"t": "p",
							"x": "The Eden Project is located in Cornwall, in the south west of England. Its biomes, which are like giant greenhouses, house plants from all over the world. The Eden Project is also a charity which runs environmental and social projects internationally."
						},
						{
							"t": "p",
							"x": "The Castle is a dominant feature of the skyline in Edinburgh, Scotland. It has a long history, dating back to the early Middle Ages. It is looked after by Historic Scotland, a Scottish government agency."
						},
						{
							"t": "p",
							"x": "Located on the north-east coast of Northern Ireland, the Giant’s Causeway is a land formation of columns made from volcanic lava. It was formed about 50 million years ago. There are many legends about the Causeway and how it was formed."
						},
						{
							"t": "p",
							"x": "Loch Lomond and the Trossachs National Park"
						},
						{
							"t": "p",
							"x": "This national park covers 720 square miles (1,865 square kilometres) in the west of Scotland. Loch Lomond is the largest expanse of fresh water in mainland Britain and probably the best-known part of the park."
						},
						{
							"t": "p",
							"x": "LONDON EYE"
						},
						{
							"t": "p",
							"x": "London Eye captured at night. It is also used as part of New Year celebrations."
						},
						{
							"t": "p",
							"x": "The London Eye is situated on the southern bank of the River Thames and is a Ferris wheel that is 443 feet (135 metres) tall. It was originally built as part of the UK’s celebration of the new millennium and continues to be an important part of New Year celebrations."
						},
						{
							"t": "p",
							"x": "Snowdonia is a national park in North Wales. It covers an area of 838 square miles (2,170 square kilometres). Its most well-known landmark is Snowdon, which is the highest mountain in Wales."
						},
						{
							"t": "p",
							"x": "The Tower of London was first built by William the Conqueror after he became king in 1066. Tours are given by the Yeoman Warders, also known as Beefeaters, who tell visitors about the building’s history. People can also see the Crown Jewels there."
						},
						{
							"t": "p",
							"x": "The views that can be seen in Lake District"
						},
						{
							"t": "p",
							"x": "The Lake District is England’s largest national park. It covers 885 square miles (2,292 square kilometres). It is famous for its lakes and mountains and is very popular with climbers, walkers and sailors. The biggest stretch of water is Windermere. In 2007, television viewers voted Wastwater as Britain’s favourite view."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "Some of the ways in which people in the UK spend their leisure time"
						},
						{
							"t": "check",
							"x": "The development of British cinema"
						},
						{
							"t": "check",
							"x": "What the television licence is and how it funds the BBC"
						},
						{
							"t": "check",
							"x": "Some of the places of interest to visit in the UK"
						}
					]
				},
				{
					"id": "4.6",
					"title": "Religion",
					"blocks": [
						{
							"t": "p",
							"x": "The UK is historically a Christian country. In the 2009 Citizenship Survey, 70% of people identified themselves as Christian. Much smaller proportions identified themselves as Muslim (4%), Hindu (2%), Sikh (1%), Jewish or Buddhist (both less than 0.5%), and 2% of people followed another religion. There are religious buildings for other religions all over the UK. This includes Islamic mosques, Hindu temples, Jewish synagogues, Sikh gurdwaras and Buddhist temples. However, everyone has the legal right to choose their religion, or to choose not to practise a religion. In the Citizenship Survey, 21% of people said that they had no religion."
						},
						{
							"t": "p",
							"x": "Christian Churches"
						},
						{
							"t": "p",
							"x": "In England, there is a constitutional link between Church and state. The official Church of the state is the Church of England (called the Anglican Church in other countries and the Episcopal Church in Scotland and the United States). It is a Protestant Church and has existed since the Reformation in the 1530s."
						},
						{
							"t": "p",
							"x": "The monarch is the head of the Church of England. The spiritual leader of the Church of England is the Archbishop of Canterbury. The monarch has the right to select the Archbishop and other senior church officials, but usually the choice is made by the Prime Minister and a committee appointed by the Church. Several Church of England bishops sit in the House of Lords."
						},
						{
							"t": "p",
							"x": "In Scotland, the national Church is the Church of Scotland, which is a Presbyterian Church. It is governed by ministers and elders. The chairperson of the General Assembly of the Church of Scotland is the Moderator, who is appointed for one year only and often speaks on behalf of that Church."
						},
						{
							"t": "p",
							"x": "Churches in the UK: Inside a Catholic Church"
						},
						{
							"t": "p",
							"x": "There is no established Church in Wales or Northern Ireland. Other Protestant Christian groups in the UK are Baptists, Methodists, Presbyterians and Quakers. There are also other denominations of Christianity, the biggest of which is Roman Catholic."
						},
						{
							"t": "p",
							"x": "Patron Saints' days"
						},
						{
							"t": "p",
							"x": "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day:"
						},
						{
							"t": "p",
							"x": "1 March: St David’s Day, Wales"
						},
						{
							"t": "p",
							"x": "17 March: St Patrick’s Day, Northern Ireland"
						},
						{
							"t": "p",
							"x": "23 April: St George’s Day, England"
						},
						{
							"t": "p",
							"x": "30 November: St Andrew’s Day, Scotland."
						},
						{
							"t": "p",
							"x": "Only Scotland and Northern Ireland have their patron saint’s day as an official holiday (although in Scotland not all businesses and Offices will close). Events are held across Scotland, Northern Ireland and the rest of the country, especially where there are a lot of people of Scottish, Northern Irish and Irish heritage."
						},
						{
							"t": "p",
							"x": "While the patron saints’ days are no longer public holidays in England and Wales, they are still celebrated. Parades and small festivals are held all over the two countries."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The different religions that are practised in the UK"
						},
						{
							"t": "check",
							"x": "That the Anglican Church, also known as the Church of England, is the Church of the state in England (the ‘established Church’)"
						},
						{
							"t": "check",
							"x": "That other branches of the Christian Church also practise their faith in the UK without being linked to the state"
						},
						{
							"t": "check",
							"x": "That other religions are practised in the UK"
						},
						{
							"t": "check",
							"x": "About the patron saints"
						}
					]
				},
				{
					"id": "4.7",
					"title": "Sport",
					"blocks": [
						{
							"t": "p",
							"x": "Sports of all kinds play an important part in many people’s lives. There are several sports that are particularly popular in the UK. Many sporting events take place at major stadiums such as Wembley Stadium in London and the Millennium Stadium in Cardiff."
						},
						{
							"t": "p",
							"x": "Local governments and private companies provide sports facilities such as swimming pools, tennis courts, football pitches, dry ski slopes and gymnasiums. Many famous sports, including cricket, football, lawn tennis, golf and rugby, began in Britain."
						},
						{
							"t": "p",
							"x": "The UK has hosted the Olympic Games on three occasions: 1908, 1948 and 2012. The main Olympic site for the 2012 Games was in Stratford, East London. The British team was very successful, across a wide range of Olympic sports, finishing third in the medal table."
						},
						{
							"t": "p",
							"x": "The UK has hosted the olympic games 3 times."
						},
						{
							"t": "p",
							"x": "The Paralympic Games for 2012 were also hosted in London. The Paralympics have their origin in the work of Dr Sir Ludwig Guttman, a German refugee, at the Stoke Mandeville hospital in Buckinghamshire. Dr Guttman developed new methods of treatment for people with spinal injuries and encouraged patients to take part in exercise and sport."
						},
						{
							"t": "p",
							"x": "NOTABLE BRITISH SPORTSMEN AND WOMEN"
						},
						{
							"t": "p",
							"x": "Sir Roger Bannister (1929–) was the first man in the world to run a mile in under four minutes, in 1954."
						},
						{
							"t": "p",
							"x": "Sir Jackie Stewart (1939–) is a Scottish former racing driver who won the Formula 1 world championship three times."
						},
						{
							"t": "p",
							"x": "Bobby Moore (1941–93) captained the English football team that won the World Cup in 1966."
						},
						{
							"t": "p",
							"x": "Sir Ian Botham (1955–) captained the English cricket team and holds a number of English Test cricket records, both for batting and for bowling."
						},
						{
							"t": "p",
							"x": "Jayne Torvill (1957–) and Christopher Dean (1958–) won gold medals for ice dancing at the Olympic Games in 1984 and in four consecutive world championships."
						},
						{
							"t": "p",
							"x": "Sir Steve Redgrave (1962–) won gold medals in rowing in five consecutive Olympic Games and is one of Britain’s greatest Olympians."
						},
						{
							"t": "p",
							"x": "Baroness Tanni-Grey Thompson (1969–) is an athlete who uses a wheelchair and won 16 Paralympic medals, including 11 gold medals, in races over five Paralympic Games. She won the London Marathon six times and broke a total of 30 world records."
						},
						{
							"t": "p",
							"x": "Dame Kelly Holmes (1970–) won two gold medals for running in the 2004 Olympic Games. She has held a number of British and European records."
						},
						{
							"t": "p",
							"x": "Dame Ellen MacArthur (1976–) is a yachtswoman and in 2004 became the fastest person to sail around the world singlehanded."
						},
						{
							"t": "p",
							"x": "Sir Chris Hoy (1976–) is a Scottish cyclist who has won six gold and one silver Olympic medals. He has also won 11 world championship titles."
						},
						{
							"t": "p",
							"x": "David Weir (1979–) is a Paralympian who uses a wheelchair and has won six gold medals over two Paralympic Games. He has also won the London Marathon six times."
						},
						{
							"t": "p",
							"x": "Bradley Wiggins (1980–) is a cyclist. In 2012, he became the first Briton to win the Tour de France. He has won seven Olympic medals, including gold medals in the 2004, 2008 and 2012 Olympic Games."
						},
						{
							"t": "p",
							"x": "Mo Farah (1983–) is a British distance runner, born in Somalia. He won gold medals in the 2012 Olympics for the 5,000 and 10,000 metres and is the first Briton to win the Olympic gold medal in the 10,000 metres."
						},
						{
							"t": "p",
							"x": "Jessica Ennis (1986–) is an athlete. She won the 2012 Olympic gold medal in the heptathlon, which includes seven different track and field events. She also holds a number of British athletics records."
						},
						{
							"t": "p",
							"x": "Andy Murray (1987–) is a Scottish tennis player who in 2012 won the men’s singles in the US Open. He is the first British man to win a singles title in a Grand Slam tournament since 1936. In the same year, he won Olympic gold and silver medals and was runner-up in the men’s singles at Wimbledon."
						},
						{
							"t": "p",
							"x": "Ellie Simmonds (1994–) is a Paralympian who won gold medals for swimming at the 2008 and 2012 Paralympic Games and holds a number of world records. She was the youngest member of the British team at the 2008 Games."
						},
						{
							"t": "p",
							"x": "Cricket"
						},
						{
							"t": "p",
							"x": "Cricket originated in England and is now played in many countries. Games can last up to five days but still result in a draw! The idiosyncratic nature of the game and its complex laws are said to reflect the best of the British character and sense of fair play. You may come across expressions such as ‘rain stopped play’, ‘batting on a sticky wicket’, ‘playing a straight bat’, ‘bowled a googly’ or ‘it’s just not cricket’, which have passed into everyday usage. The most famous competition is the Ashes, which is a series of Test matches played between England and Australia."
						},
						{
							"t": "p",
							"x": "Football"
						},
						{
							"t": "p",
							"x": "Football is the UK's most popular sport."
						},
						{
							"t": "p",
							"x": "Football is the UK’s most popular sport. It has a long history in the UK and the first professional football clubs were formed in the late 19th century."
						},
						{
							"t": "p",
							"x": "England, Scotland, Wales and Northern Ireland each have separate leagues in which clubs representing different towns and cities compete. The English Premier League attracts a huge international audience. Many of the best players in the world play in the Premier League. Many UK teams also compete in competitions such as the UEFA (Union of European Football Associations) Champions League, against other teams from Europe. Most towns and cities have a professional club and people take great pride in supporting their home team. There can be great rivalry between different football clubs and among fans."
						},
						{
							"t": "p",
							"x": "Each country in the UK also has its own national team that competes with other national teams across the world in tournaments such as the FIFA (Fédération Internationale de Football Association) World Cup and the UEFA European Football Championships. England’s only international tournament victory was at the World Cup of 1966, hosted in the UK."
						},
						{
							"t": "p",
							"x": "Football is also a popular sport to play in many local communities, with people playing amateur games every week in parks all over the UK."
						},
						{
							"t": "p",
							"x": "Rugby"
						},
						{
							"t": "p",
							"x": "Rugby originated in England in the early 19th century and is very popular in the UK today. There are two different types of rugby, which have different rules: union and league. Both have separate leagues and national teams in England, Wales, Scotland and Northern Ireland (who play with the Irish Republic). Teams from all countries compete in a range of competitions. The most famous rugby union competition is the Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy. The Super League is the most well-known rugby league (club) competition."
						},
						{
							"t": "p",
							"x": "Horse-racing"
						},
						{
							"t": "p",
							"x": "There is a very long history of horse racing in Britain, with evidence of events taking place as far back as Roman times. The sport has a long association with royalty. There are racecourses all over the UK. Famous horse-racing events include: Royal Ascot, a five-day race meeting in Berkshire attended by members of the Royal Family; the Grand National at Aintree near Liverpool; and the Scottish Grand National at Ayr. There is a National Horseracing Museum in Newmarket, Suffolk."
						},
						{
							"t": "p",
							"x": "Golf"
						},
						{
							"t": "p",
							"x": "The modern game of golf can be traced back to 15th century Scotland. It is a popular sport played socially as well as professionally. There are public and private golf courses all over the UK. St Andrews in Scotland is known as the home of golf. The Open Championship is the only ‘Major’ tournament held outside the United States. It is hosted by a different golf course every year."
						},
						{
							"t": "p",
							"x": "Tennis"
						},
						{
							"t": "p",
							"x": "Modern tennis evolved in England in the late 19th century. The first tennis club was founded in Leamington Spa in 1872. The most famous tournament hosted in Britain is The Wimbledon Championships, which takes place each year at the All England Lawn Tennis and Croquet Club. It is the oldest tennis tournament in the world and the only ‘Grand Slam’ event played on grass."
						},
						{
							"t": "p",
							"x": "Water sports"
						},
						{
							"t": "p",
							"x": "Sailing continues to be popular in the UK, reflecting our maritime heritage. A British sailor, Sir Francis Chichester, was the first person to sail single-handed around the world, in 1966/67. Two years later, Sir Robin Knox-Johnston became the first person to do this without stopping. Many sailing events are held throughout the UK, the most famous of which is at Cowes on the Isle of Wight. Rowing is also popular, both as a leisure activity and as a competitive sport. There is a popular yearly race on the Thames between Oxford and Cambridge Universities."
						},
						{
							"t": "p",
							"x": "Motor sports"
						},
						{
							"t": "p",
							"x": "There is a long history of motor sport in the UK, for both cars and motor cycles. Motor-car racing in the UK started in 1902. The UK continues to be a world leader in the development and manufacture of motor-sport technology. A Formula 1 Grand Prix event is held in the UK each year and a number of British Grand Prix drivers have won the Formula 1 World Championship. Recent British winners include Damon Hill, Lewis Hamilton and Jensen Button."
						},
						{
							"t": "p",
							"x": "Skiing"
						},
						{
							"t": "p",
							"x": "Skiing is increasingly popular in the UK. Many people go abroad to ski and there are also dry ski slopes throughout the UK. Skiing on snow may also be possible during the winter. There are five ski centres in Scotland, as well as Europe’s longest dry ski slope near Edinburgh."
						}
					]
				},
				{
					"id": "4.8",
					"title": "The UK today",
					"blocks": [
						{
							"t": "p",
							"x": "The UK today is a more diverse society than it was 100 years ago, in both ethnic and religious terms. Post-war immigration means that nearly 10% of the population has a parent or grandparent born outside the UK. The UK continues to be a multinational and multiracial society with a rich and varied culture. This section will tell you about the different parts of the UK and some of the important places. It will also explain some of the UK’s traditions  customs and some of the popular activities that take place."
						},
						{
							"t": "p",
							"x": "The nations of the UK"
						},
						{
							"t": "p",
							"x": "The UK is located in the north west of Europe. The longest distance on the mainland is from John O’Groats on the north coast of Scotland to Land’s End in the south-west corner of England. It is about 870 miles (approximately 1,400 kilometres). Most people live in towns and cities but much of Britain is still countryside."
						},
						{
							"t": "p",
							"x": "Many people continue to visit the countryside for holidays and for leisure activities such as walking, camping and fishing."
						},
						{
							"t": "p",
							"x": "CITIES OF THE UK"
						},
						{
							"t": "p",
							"x": "ENGLAND"
						},
						{
							"t": "p",
							"x": "London"
						},
						{
							"t": "p",
							"x": "Birmingham"
						},
						{
							"t": "p",
							"x": "Liverpool"
						},
						{
							"t": "p",
							"x": "Leeds"
						},
						{
							"t": "p",
							"x": "Sheffield"
						},
						{
							"t": "p",
							"x": "Bristol"
						},
						{
							"t": "p",
							"x": "Manchester"
						},
						{
							"t": "p",
							"x": "Bradford"
						},
						{
							"t": "p",
							"x": "Newcastle Upon Tyne"
						},
						{
							"t": "p",
							"x": "Plymouth"
						},
						{
							"t": "p",
							"x": "Southampton"
						},
						{
							"t": "p",
							"x": "Norwich"
						},
						{
							"t": "p",
							"x": "WALES"
						},
						{
							"t": "p",
							"x": "Cardiff"
						},
						{
							"t": "p",
							"x": "Swansea"
						},
						{
							"t": "p",
							"x": "Newport"
						},
						{
							"t": "p",
							"x": "SCOTLAND"
						},
						{
							"t": "p",
							"x": "Edinburgh"
						},
						{
							"t": "p",
							"x": "Glasgow"
						},
						{
							"t": "p",
							"x": "Dundee"
						},
						{
							"t": "p",
							"x": "Aberdeen"
						},
						{
							"t": "p",
							"x": "NORTHERN IRELAND"
						},
						{
							"t": "p",
							"x": "Belfast"
						},
						{
							"t": "p",
							"x": "CAPITAL CITIES"
						},
						{
							"t": "p",
							"x": "The capital city of the UK is London"
						},
						{
							"t": "p",
							"x": "Scotland"
						},
						{
							"t": "p",
							"x": "The capital city of Scotland is Edinburgh"
						},
						{
							"t": "p",
							"x": "Wales"
						},
						{
							"t": "p",
							"x": "The capital city of Wales is Cardiff"
						},
						{
							"t": "p",
							"x": "Northern Ireland"
						},
						{
							"t": "p",
							"x": "The capital city of Northern Ireland is Belfast"
						},
						{
							"t": "p",
							"x": "UK currency"
						},
						{
							"t": "p",
							"x": "The currency in the UK is the pound sterling (symbol £). There are 100 pence in a pound. The denominations (values) of currency are: coins: 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2 notes: £5, £10, £20, £50."
						},
						{
							"t": "p",
							"x": "Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK. However, shops and businesses do not have to accept them."
						},
						{
							"t": "p",
							"x": "Languages and dialects"
						},
						{
							"t": "p",
							"x": "There are many variations in language in the different parts of the UK. The English language has many accents and dialects. In Wales, many people speak Welsh – a completely different language from English – and it is taught in schools and universities. In Scotland, Gaelic (again, a different language) is spoken in some parts of the Highlands and Islands, and in Northern Ireland some people speak Irish Gaelic."
						},
						{
							"t": "p",
							"x": "Population"
						},
						{
							"t": "p",
							"x": "The table below shows how the population of the UK has changed over time."
						},
						{
							"t": "p",
							"x": "Population growth in the UK"
						},
						{
							"t": "p",
							"x": "Source: National Statistics"
						},
						{
							"t": "p",
							"x": "In Scotland, Gaelic is spoken in some parts of the Highlands and Islands, and in Northern Ireland some people speak Irish Gaelic."
						},
						{
							"t": "p",
							"x": "Population growth has been faster in more recent years. Migration into the UK and longer life expectancy have played a part in population growth."
						},
						{
							"t": "p",
							"x": "The population is very unequally distributed over the four parts of the UK. England more or less consistently makes up 84% of the total population, Wales around 5%, Scotland just over 8% and Northern Ireland less than 3%."
						},
						{
							"t": "p",
							"x": "An ageing population"
						},
						{
							"t": "p",
							"x": "People in the UK are living longer than ever before. This is due to improved living standards and better health care. There are now a record number of people aged 85 and over. This has an impact on the cost of pensions and health care."
						},
						{
							"t": "p",
							"x": "Year"
						},
						{
							"t": "p",
							"x": "Population"
						},
						{
							"t": "p",
							"x": "1600"
						},
						{
							"t": "p",
							"x": "Just over 4 million"
						},
						{
							"t": "p",
							"x": "1700"
						},
						{
							"t": "p",
							"x": "5 million"
						},
						{
							"t": "p",
							"x": "1801"
						},
						{
							"t": "p",
							"x": "8 million"
						},
						{
							"t": "p",
							"x": "1851"
						},
						{
							"t": "p",
							"x": "20 million"
						},
						{
							"t": "p",
							"x": "1901"
						},
						{
							"t": "p",
							"x": "40 million"
						},
						{
							"t": "p",
							"x": "1951"
						},
						{
							"t": "p",
							"x": "50 million"
						},
						{
							"t": "p",
							"x": "1998"
						},
						{
							"t": "p",
							"x": "57 million"
						},
						{
							"t": "p",
							"x": "2005"
						},
						{
							"t": "p",
							"x": "Just under 60 million"
						},
						{
							"t": "p",
							"x": "2010"
						},
						{
							"t": "p",
							"x": "Just over 62 million"
						},
						{
							"t": "p",
							"x": "2022"
						},
						{
							"t": "p",
							"x": "Estimated 67.6 million"
						},
						{
							"t": "p",
							"x": "Ethnic diversity"
						},
						{
							"t": "p",
							"x": "The UK population is ethnically diverse and changing rapidly, especially in large cities such as London. It is not always easy to get an exact picture of the ethnic origin of all the population. There are people in the UK with ethnic origins from all over the world. In surveys, the most common ethnic description chosen is white, which includes people of European, Australian, Canadian, New Zealand and American descent. Other significant groups are those of Asian, black and mixed descent."
						},
						{
							"t": "p",
							"x": "An equal society"
						},
						{
							"t": "p",
							"x": "Within the UK, it is a legal requirement that men and women should not be discriminated against because of their gender or because they are, or are not, married."
						},
						{
							"t": "p",
							"x": "They have equal rights to work, own property, marry and divorce. If they are married, both parents are equally responsible for their children."
						},
						{
							"t": "p",
							"x": "Women in Britain today make up about half of the workforce. On average, girls leave school with better qualifications than boys. More women than men study at university."
						},
						{
							"t": "p",
							"x": "Employment opportunities for women are much greater than they were in the past. Women work in all sectors of the economy, and there are now more women in high-level positions than ever before, including senior managers in traditionally male-dominated occupations. Alongside this, men now work in more varied jobs than they did in the past."
						},
						{
							"t": "p",
							"x": "It is no longer expected that women should stay at home and not work. Women often continue to work after having children. In many families today, both partners work and both share responsibility for childcare and household chores."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The capital cities of the UK"
						},
						{
							"t": "check",
							"x": "What languages other than English are spoken in particular parts of the UK"
						},
						{
							"t": "check",
							"x": "How the population of the UK has changed"
						},
						{
							"t": "check",
							"x": "That the UK is an equal society and ethnically diverse"
						},
						{
							"t": "check",
							"x": "The currency of the UK"
						}
					]
				}
			]
		},
		{
			"num": 5,
			"title": "The UK Government, the law and your role",
			"sections": [
				{
					"id": "5.1",
					"title": "Chapter 5: The UK government, the law and your role",
					"blocks": [
						{
							"t": "p",
							"x": "In this chapter you will learn how the UK is governed. You need to understand the Queen’s role in government and her powers. Make sure you understand how people are appointed to the two Houses of Parliament and the specific roles detailed, such as the Speaker and cabinet, and your rights to vote and stand for election."
						},
						{
							"t": "p",
							"x": "Everyone should understand the workings of the devolved administrations but pay particular attention if you are taking the test in Scotland, Wales or Northern Ireland."
						},
						{
							"t": "p",
							"x": "The UK’s international role is explained through the Commonwealth, EU and others so focus on the differences between these bodies and their member countries."
						},
						{
							"t": "p",
							"x": "The chapter then explains common laws, fundamental rights, policing and the courts of the UK. Pay particular attention to this so you know the differences between the various courts and offences they deal with. Finally the chapter deals with taxation, driving and community activity."
						},
						{
							"t": "infohead",
							"x": "IN THIS CHAPTER THERE IS INFORMATION ABOUT:"
						},
						{
							"t": "info",
							"x": "Britain as a constitutional monarchy"
						},
						{
							"t": "info",
							"x": "How Parliament works"
						},
						{
							"t": "info",
							"x": "Elections, the government and the opposition"
						},
						{
							"t": "info",
							"x": "Devolved administrations of the UK"
						},
						{
							"t": "info",
							"x": "The Commonwealth, EU, UN and NATO"
						},
						{
							"t": "info",
							"x": "British law and justice"
						},
						{
							"t": "info",
							"x": "The courts"
						},
						{
							"t": "info",
							"x": "Fundamental principles and rights"
						},
						{
							"t": "info",
							"x": "Tax"
						},
						{
							"t": "info",
							"x": "Driving"
						},
						{
							"t": "info",
							"x": "Community work and getting involved"
						},
						{
							"t": "info",
							"x": "The UK is a parliamentary democracy with the monarch as head of state. This section will tell you about the different institutions which make up this democratic system and explain how you can play a part in the democratic process."
						}
					]
				},
				{
					"id": "5.2",
					"title": "The development of British democracy",
					"blocks": [
						{
							"t": "p",
							"x": "Democracy is a system of government where the whole adult population gets a say. This might be by direct voting or by choosing representatives to make decisions on their behalf."
						},
						{
							"t": "p",
							"x": "At the turn of the 19th century, Britain was not a democracy as we know it today. Although there were elections to select members of Parliament (MPs), only a small group of people could vote. They were men who were over 21 years of age and who owned a certain amount of property."
						},
						{
							"t": "p",
							"x": "The franchise (that is, the number of people who had the right to vote) grew over the course of the 19th century and political parties began to involve ordinary men and women as members."
						},
						{
							"t": "p",
							"x": "In the 1830s and 1840s, a group called the Chartists campaigned for reform. They wanted six changes: for every man to have the vote elections every year for all regions to be equal in the electoral system secret ballots for any man to be able to stand as an MP for MPs to be paid."
						},
						{
							"t": "p",
							"x": "At the time, the campaign was generally seen as a failure. However, by 1918 most of these reforms had been adopted. The voting franchise was also extended to women over 30, and then in 1928 to men and women over 21. In 1969, the voting age was reduced to 18 for men and women."
						}
					]
				},
				{
					"id": "5.3",
					"title": "The British constitution",
					"blocks": [
						{
							"t": "p",
							"x": "A constitution is a set of principles by which a country is governed. It includes all of the institutions that are responsible for running the country and how their power is kept in check. The constitution also includes laws and conventions. The British constitution is not written down in any single document, and therefore it is described as ‘unwritten’. This is mainly because the UK, unlike America or France, has never had a revolution which led permanently to a totally new system of government. Our most important institutions have developed over hundreds of years. Some people believe that there should be a single document, but others believe an unwritten constitution allows for more flexibility and better government."
						},
						{
							"t": "p",
							"x": "Constitutional institutions"
						},
						{
							"t": "p",
							"x": "In the UK, there are several different parts of government. The main ones are: the monarchy"
						},
						{
							"t": "p",
							"x": "Parliament (the House of Commons and the House of Lords) the Prime Minister the cabinet the judiciary (courts) the police the civil service local government."
						},
						{
							"t": "p",
							"x": "In addition, there are devolved governments in Scotland, Wales and Northern Ireland that have the power to legislate on certain issues."
						},
						{
							"t": "p",
							"x": "The monarchy"
						},
						{
							"t": "p",
							"x": "The monarch"
						},
						{
							"t": "p",
							"x": "The monarch is the head of state of the UK. The monarch or head of state for many countries in the Commonwealth. The UK has a constitutional monarchy. This means that the king or queen does not rule the country but appoints the government, which the people have chosen in a democratic election. The monarch invites the leader of the party with the largest number of MPs, or the leader of a coalition between more than one party, to become the Prime Minister. The monarch has regular meetings with the Prime Minister and can advise, warn and encourage, but the decisions on government policies are made by the Prime Minister and cabinet."
						},
						{
							"t": "p",
							"x": "Queen Elizabeth II reigned since her father’s death in 1952, and in 2012 she celebrated her Diamond Jubilee (60 years as queen). She died on September 8, 2022."
						},
						{
							"t": "p",
							"x": "She was married to Prince Philip. Her eldest son, Charles (King Charles III), is the current ruling monarch. Prince Edward, became the Duke of Edinburgh in 2023 on his 59th birthday by his eldest brother, King Charles III, who formerly held the title."
						},
						{
							"t": "p",
							"x": "King Charles III has been the sovereign since 2022, and his heir apparent is his elder son, William, Prince of Wales (title for the heir apparent to the throne)."
						},
						{
							"t": "p",
							"x": "William's three children are next, in order of birth: Prince George, Princess Charlotte, and Prince Louis."
						},
						{
							"t": "p",
							"x": "The monarch has important ceremonial roles, such as the opening of the new parliamentary session each year. On this occasion the King (or Queen) makes a speech which summarises the government’s policies for the year ahead. All Acts of Parliament are made in the Majesty's name."
						},
						{
							"t": "p",
							"x": "The monarch represents the UK to the rest of the world. The monarch receives foreign ambassadors and high commissioners, entertains visiting heads of state, and makes state visits overseas in support of diplomatic and economic relationships with other countries."
						},
						{
							"t": "p",
							"x": "The monarch has an important role in providing stability and continuity. While governments and Prime Ministers change regularly, the monarch continues as head of state. The monarch provides a focus for national identity and pride, which was demonstrated through the celebrations of the Queen Elizabeth's Jubilee."
						},
						{
							"t": "p",
							"x": "The national anthem"
						},
						{
							"t": "p",
							"x": "The National Anthem of the UK is ‘God Save the King (or Queen)’. It is played at important national occasions and at events attended by the King (or Queen) or the Royal Family. The first verse is:"
						},
						{
							"t": "p",
							"x": "‘God save our gracious King!"
						},
						{
							"t": "p",
							"x": "Long live our noble King!"
						},
						{
							"t": "p",
							"x": "God save the King!"
						},
						{
							"t": "p",
							"x": "Send her victorious,"
						},
						{
							"t": "p",
							"x": "Happy and glorious,"
						},
						{
							"t": "p",
							"x": "Long to reign over us,"
						},
						{
							"t": "p",
							"x": "God save the King!’"
						},
						{
							"t": "p",
							"x": "New citizens swear or affirm loyalty to the King as part of the citizenship ceremony."
						},
						{
							"t": "p",
							"x": "Oath of allegiance"
						},
						{
							"t": "p",
							"x": "‘I (name) swear by Almighty God that on becoming a British citizen, I will be faithful and bear true allegiance to His Majesty King Charles the Third, his Heirs and Successors, according to law.’"
						},
						{
							"t": "p",
							"x": "Affirmation of allegiance"
						},
						{
							"t": "p",
							"x": "‘I (name) do solemnly, sincerely and truly declare and affirm that on becoming a British citizen, I will be faithful and bear true allegiance to His Majesty King Charles the Third, his Heirs and Successors, according to law.’"
						},
						{
							"t": "p",
							"x": "System of government"
						},
						{
							"t": "p",
							"x": "The system of government in the UK is a parliamentary democracy. The UK is divided into parliamentary constituencies. Voters in each constituency elect their member of Parliament (MP) in a General Election. All of the elected MPs form the House of Commons. Most MPs belong to a political party, and the party with the majority of MPs forms the government. If one party does not get a majority, two parties can join together to form a coalition."
						},
						{
							"t": "p",
							"x": "The House of Commons"
						},
						{
							"t": "p",
							"x": "Parliamentary debates in the House of Commons"
						},
						{
							"t": "p",
							"x": "The House of Commons is regarded as the more important of the two chambers in Parliament because its members are democratically elected. The Prime Minister and almost all the members of the cabinet are members of the House of Commons (MPs). Each MP represents a parliamentary constituency, which is a small area of the country. MPs have a number of different responsibilities. They: represent everyone in their constituency help to create new laws scrutinise and comment on what the government is doing debate important national issues."
						},
						{
							"t": "p",
							"x": "The House of Lords"
						},
						{
							"t": "p",
							"x": "The House of Lords"
						},
						{
							"t": "p",
							"x": "Members of the House of Lords, known as peers, are not elected by the people and do not represent a constituency. The role and membership of the House of Lords has changed over the last 50 years."
						},
						{
							"t": "p",
							"x": "Until 1958, all peers were:"
						},
						{
							"t": "p",
							"x": "‘hereditary’, which means they inherited their title, or senior judges, or bishops of the Church of England."
						},
						{
							"t": "p",
							"x": "Since 1958, the Prime Minister has had the power to nominate peers just for their own lifetime. These are called life peers. They have usually had an important career in politics, business, law or another profession. Life peers are appointed by the monarch on the advice of the Prime Minister. They also include people nominated by the leaders of the other main political parties or by an independent Appointments Commission for non-party peers."
						},
						{
							"t": "p",
							"x": "Since 1999, hereditary peers have lost the automatic right to attend the House of Lords. They now elect a few of their number to represent them in the House of Lords."
						},
						{
							"t": "p",
							"x": "The House of Lords is normally more independent of the government than the House of Commons. It can suggest amendments or propose new laws, which are then discussed by MPs. The House of Lords checks laws that have been passed by the House of Commons to ensure they are fit for purpose. It also holds the government to account to make sure that it is working in the best interests of the people. There are peers who are specialists in particular areas, and their knowledge is useful in making and checking laws. The House of Commons has powers to overrule the House of Lords, but these are not used often."
						},
						{
							"t": "p",
							"x": "The Speaker"
						},
						{
							"t": "p",
							"x": "Debates in the House of Commons are chaired by the Speaker. This person is the chief Officer of the House of Commons. The Speaker is neutral and does not represent a political party, even though he or she is an MP, represents a constituency and deals with constituents’ problems like any other MP. The Speaker is chosen by other MPs in a secret ballot."
						},
						{
							"t": "p",
							"x": "The Speaker keeps order during political debates to make sure the rules are followed. This includes making sure the opposition has a guaranteed amount of time to debate issues which it chooses. The Speaker also represents Parliament on ceremonial occasions."
						},
						{
							"t": "p",
							"x": "Elections"
						},
						{
							"t": "p",
							"x": "UK elections"
						},
						{
							"t": "p",
							"x": "MPs are elected at a General Election, which is held at least every five years."
						},
						{
							"t": "p",
							"x": "If an MP dies or resigns, there will be a fresh election, called a byelection, in his or her constituency."
						},
						{
							"t": "p",
							"x": "MPs are elected through a system called ‘first past the post’. In each constituency, the candidate who gets the most votes is elected. The government is usually formed by the party that wins the majority of constituencies. If no party wins a majority, two parties may join together to form a coalition."
						},
						{
							"t": "p",
							"x": "European parliamentary elections"
						},
						{
							"t": "p",
							"x": "Elections for the European Parliament are also held every five years. Elected members are called members of the European Parliament (MEPs). Elections to the European Parliament use a system of proportional representation, where seats are allocated to each party in proportion to the total number of votes it has won."
						},
						{
							"t": "p",
							"x": "Contacting elected members"
						},
						{
							"t": "p",
							"x": "All elected members have a duty to serve and represent their constituents. You can get contact details for all your representatives and their parties from your local library and from www.parliament.uk. MPs, Assembly members, members of the Scottish Parliament (MSPs) and MEPs are also listed in The Phone Book, published by BT, and in_Yellow Pages_."
						},
						{
							"t": "p",
							"x": "You can contact MPs by letter or telephone at their constituency Office, or at their Office in the House of Commons: The House of Commons, Westminster, London SW1A 0AA, telephone 020 7729 3000. In addition, many MPs, Assembly members, MSPs and MEPs hold regular local ‘surgeries’, where constituents can go in person to talk about issues that are of concern to them. These surgeries are often advertised in the local newspaper."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "How democracy has developed in the UK"
						},
						{
							"t": "check",
							"x": "What a constitution is and how the UK’s constitution is different from those of most other countries"
						},
						{
							"t": "check",
							"x": "The role of the monarch"
						},
						{
							"t": "check",
							"x": "The role of the House of Commons and House of Lords"
						},
						{
							"t": "check",
							"x": "What the Speaker does"
						},
						{
							"t": "check",
							"x": "How the UK elects MPs and MEPs"
						}
					]
				},
				{
					"id": "5.4",
					"title": "Fundamental principles",
					"blocks": [
						{
							"t": "p",
							"x": "Britain has a long history of respecting an individual’s rights and ensuring essential freedoms. These rights have their roots in Magna Carta, the Habeas Corpus Act and the Bill of Rights of 1689, and they have developed over a period of time. British diplomats and lawyers had an important role in drafting the European Convention on Human Rights and Fundamental Freedoms. The UK was one of the first countries to sign the Convention in 1950."
						},
						{
							"t": "p",
							"x": "Some of the principles included in the European Convention on Human Rights are: right to life prohibition of torture prohibition of slavery and forced labour right to liberty and security right to a fair trial freedom of thought, conscience and religion freedom of expression (speech)."
						},
						{
							"t": "p",
							"x": "The Human Rights Act 1998 incorporated the European Convention on Human Rights into UK law. The government, public bodies and the courts must follow the principles of the Convention."
						},
						{
							"t": "p",
							"x": "Equal opportunities"
						},
						{
							"t": "p",
							"x": "UK laws ensure that people are not treated unfairly in any area of life or work because of their age, disability, sex, pregnancy and maternity, race, religion or belief, sexuality or marital status. If you face problems with discrimination, you can get more information from the Citizens Advice Bureau or from one of the following organisations:"
						},
						{
							"t": "p",
							"x": "England and Wales: Equality and Human Rights Commission (www.equalityhumanrights.com)"
						},
						{
							"t": "p",
							"x": "Scotland: Equality and Human Rights Commission in Scotland (www.equalityhumanrights.com/scotland/the-commission-inscotland) and Scottish Human Rights Commission (www.scottishhumanrights.com)"
						},
						{
							"t": "p",
							"x": "Northern Ireland: Equality Commission for Northern Ireland (www.equalityni.org)"
						},
						{
							"t": "p",
							"x": "Northern Ireland Human Rights Commission (www.nihrc.org)."
						},
						{
							"t": "p",
							"x": "Domestic violence"
						},
						{
							"t": "p",
							"x": "In the UK, brutality and violence in the home is a serious crime. Anyone who is violent towards their partner – whether they are a man or woman, married or living together – can be prosecuted. Any man who forces a woman to have sex, including a woman’s husband, can be charged with rape."
						},
						{
							"t": "p",
							"x": "It is important for anyone facing domestic violence to get help as soon as possible. A solicitor or the Citizens Advice Bureau can explain the available options. In some areas there are safe places to go and stay in, called refuges or shelters. There are emergency telephone numbers in the helpline section at the front of Yellow Pages, including, for women, the number of the nearest women’s centre. You can also phone the 24-hour National Domestic Violence Freephone Helpline on 0808 2000 247 at any time, or the police can help you find a safe place to stay."
						},
						{
							"t": "p",
							"x": "Female genital mutilation"
						},
						{
							"t": "p",
							"x": "Female genital mutilation (FGM), also known as cutting or female circumcision, is illegal in the UK. Practising FGM or taking a girl or woman abroad for FGM is a criminal offence."
						},
						{
							"t": "p",
							"x": "Forced marriage"
						},
						{
							"t": "p",
							"x": "A marriage should be entered into with the full and free consent of both people involved. Arranged marriages, where both parties agree to the marriage, are acceptable in the UK."
						},
						{
							"t": "p",
							"x": "Forced marriage is where one or both parties do not or cannot give their consent to enter into the partnership. Forcing another person to marry is a criminal offence."
						},
						{
							"t": "p",
							"x": "Forced Marriage Protection Orders were introduced in 2008 for England, Wales and Northern Ireland under the Forced Marriage (Civil Protection) Act 2007. Court orders can be obtained to protect a person from being forced into a marriage, or to protect a person in a forced marriage. Similar Protection Orders were introduced in Scotland in November 2011."
						},
						{
							"t": "p",
							"x": "A potential victim, or someone acting for them, can apply for an order. Anyone found to have breached an order can be jailed for up to two years for contempt of court."
						},
						{
							"t": "p",
							"x": "5.4.1 Taxation"
						},
						{
							"t": "p",
							"x": "Income tax"
						},
						{
							"t": "p",
							"x": "People in the UK have to pay tax on their income, which includes: wages from paid employment profits from self-employment taxable benefits pensions income from property, savings and dividends."
						},
						{
							"t": "p",
							"x": "Money raised from income tax pays for government services such as roads, education, police and the armed forces."
						},
						{
							"t": "p",
							"x": "For most people, the right amount of income tax is automatically taken from their income from employment by their employer and paid directly to HM"
						},
						{
							"t": "p",
							"x": "Revenue & Customs (HMRC), the government department that collects taxes. This system is called ‘Pay As You Earn’ (PAYE). If you are self- employed, you need to pay your own tax through a system called ‘self- assessment’, which includes completing a tax return. Other people may also need to complete a tax return. If HMRC sends you a tax return, it is important to complete and return the form as soon as you have all the necessary information."
						},
						{
							"t": "p",
							"x": "You can find out more about income tax at www.hmrc.gov.uk/incometax."
						},
						{
							"t": "p",
							"x": "You can get help and advice about taxes and completing tax forms from the"
						},
						{
							"t": "p",
							"x": "HMRC self-assessment helpline, on 0845 300 0627, and the HMRC website at www.hmrc.gov.uk."
						},
						{
							"t": "p",
							"x": "National insurance"
						},
						{
							"t": "p",
							"x": "Almost everybody in the UK who is in paid work, including self-employed people, must pay National Insurance Contributions. The money raised from"
						},
						{
							"t": "p",
							"x": "National Insurance Contributions is used to pay for state benefits and services such as the state retirement pension and the National Health Service"
						},
						{
							"t": "p",
							"x": "(NHS)."
						},
						{
							"t": "p",
							"x": "Employees have their National Insurance Contributions deducted from their pay by their employer. People who are self-employed need to pay National"
						},
						{
							"t": "p",
							"x": "Insurance Contributions themselves. Anyone who does not pay enough"
						},
						{
							"t": "p",
							"x": "National Insurance Contributions will not be able to receive certain contributory benefits such as Jobseeker’s Allowance or a full state retirement pension. Some workers, such as part-time workers, may not qualify for statutory payments such as maternity pay if they do not earn enough."
						},
						{
							"t": "p",
							"x": "Further guidance about National Insurance Contributions is available on"
						},
						{
							"t": "p",
							"x": "HMRC’s website at www.hmrc.gov.uk/ni."
						},
						{
							"t": "p",
							"x": "Getting a National Insurance number"
						},
						{
							"t": "p",
							"x": "A National Insurance number is a unique personal account number. It makes sure that the National Insurance Contributions and tax you pay are properly recorded against your name. All young people in the UK are sent a National"
						},
						{
							"t": "p",
							"x": "Insurance number just before their 16th birthday."
						},
						{
							"t": "p",
							"x": "A non-UK national living in the UK and looking for work, starting work or setting up as self-employed will need a National Insurance number."
						},
						{
							"t": "p",
							"x": "However, you can start work without one. If you have permission to work in the UK, you will need to telephone the Department for Work and Pensions"
						},
						{
							"t": "p",
							"x": "(DWP) to arrange to get a National Insurance number. You may be required to attend an interview. The DWP will advise you of the appropriate application process and tell you which documents you will need to bring to an interview if one is necessary. You will usually need documents that prove your identity and that you have permission to work in the UK. A National"
						},
						{
							"t": "p",
							"x": "Insurance number does not on its own prove to an employer that you have the right to work in the UK."
						},
						{
							"t": "p",
							"x": "You can find out more information about how to apply for a National"
						},
						{
							"t": "p",
							"x": "Insurance number at www.gov.uk."
						},
						{
							"t": "p",
							"x": "5.4.2 Driving"
						},
						{
							"t": "p",
							"x": "In the UK, you must be at least 17 years old to drive a car or motor cycle and you must have a driving licence to drive on public roads. To get a UK driving licence you must pass a driving test, which tests both your knowledge and your practical skills. You need to be at least 16 years old to ride a moped, and there are other age requirements and special tests for driving large vehicles."
						},
						{
							"t": "p",
							"x": "Follow the government guidelines to learn what you need to drive. The first step is applying for a provisional driving license and finding a driving instuctor. Then you will need to pass:"
						},
						{
							"t": "p",
							"x": "A driving theory test (Consists of a multiple choice theory test and a hazard perception test)"
						},
						{
							"t": "p",
							"x": "A practical driving test"
						},
						{
							"t": "p",
							"x": "Drivers can use their driving licence until they are 70 years old. After that, the licence is valid for three years at a time."
						},
						{
							"t": "p",
							"x": "In Northern Ireland, a newly qualified driver must display an ‘R’ place (for restricted driver) for one year after passing the test."
						},
						{
							"t": "p",
							"x": "If your driving licence is from a country in the European Union (EU),"
						},
						{
							"t": "p",
							"x": "Iceland, Liechtenstein or Norway, you can drive in the UK for as long as your licence is valid. If you have a licence from any other country, you may use it in the UK for up to 12 months. To continue driving after that, you must get a UK full driving licence."
						},
						{
							"t": "p",
							"x": "If you are resident in the UK, your car or motor cycle must be registered at the Driver and Vehicle Licensing Agency (DVLA). You must pay an annual road tax and display the tax disc, which shows that the tax has been paid, on the windscreen. You must also have valid motor insurance. It is a serious criminal offence to drive without insurance. If your vehicle is over three years old, you must take it for a Ministry of Transport (MOT) test every year. It is an offence not to have an MOT certificate if your vehicle is more than three years old. You can find out more about vehicle tax and MOT requirements from www.gov.uk."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The fundamental principles of UK law"
						},
						{
							"t": "check",
							"x": "That domestic violence, FGM and forced marriage are illegal in the UK"
						},
						{
							"t": "check",
							"x": "The system of income tax and National Insurance"
						},
						{
							"t": "check",
							"x": "The requirements for driving a car"
						}
					]
				},
				{
					"id": "5.5",
					"title": "Respecting the law",
					"blocks": [
						{
							"t": "p",
							"x": "One of the most important responsibilities of all residents in the UK is to know and obey the law. This section will tell you about the legal system in the UK and some of the laws that may affect you. Britain is proud of being a welcoming country, but all residents, regardless of their background, are expected to comply with the law and to understand that some things which may be allowed in other legal systems are not acceptable in the UK. Those who do not respect the law should not expect to be allowed to become permanent residents in the UK."
						},
						{
							"t": "p",
							"x": "The law is relevant to all areas of life in the UK. You should make sure that you are aware of the laws which affect your everyday life, including both your personal and business affairs."
						},
						{
							"t": "p",
							"x": "The law in the UK"
						},
						{
							"t": "p",
							"x": "Every person in the UK receives equal treatment under the law. This means that the law applies in the same way to everyone, no matter who they are or where they are from."
						},
						{
							"t": "p",
							"x": "Laws can be divided into criminal law and civil law:"
						},
						{
							"t": "p",
							"x": "Criminal law relates to crimes, which are usually investigated by the police or another authority such as a council, and which are punished by the courts."
						},
						{
							"t": "p",
							"x": "Civil law is used to settle disputes between individuals or groups."
						},
						{
							"t": "p",
							"x": "Examples of criminal laws are:"
						},
						{
							"t": "p",
							"x": "Carrying a weapon: it is a criminal offence to carry a weapon of any kind, even if it is for self-defence. This includes a gun, a knife or anything that is made or adapted to cause injury."
						},
						{
							"t": "p",
							"x": "Drugs: selling or buying drugs such as heroin, cocaine, ecstasy and cannabis is illegal in the UK."
						},
						{
							"t": "p",
							"x": "Racial crime: it is a criminal offence to cause harassment, alarm or distress to someone because of their religion or ethnic origin."
						},
						{
							"t": "p",
							"x": "Selling tobacco: it is illegal to sell tobacco products (for example, cigarettes, cigars, roll-up tobacco) to anyone under the age of 18."
						},
						{
							"t": "p",
							"x": "Smoking in public places: it is against the law to smoke tobacco products in nearly every enclosed public place in the UK. There are signs displayed to tell you where you cannot smoke."
						},
						{
							"t": "p",
							"x": "Buying alcohol: it is a criminal offence to sell alcohol to anyone who is under 18 or to buy alcohol for people who are under the age of 18. (There is one exception: people aged 16 or over can drink alcohol with a meal in a hotel or restaurant."
						},
						{
							"t": "p",
							"x": "Drinking in public: some places have alcohol-free zones where you cannot drink in public. The police can also confiscate alcohol or move young people on from public places. You can be fined or arrested."
						},
						{
							"t": "p",
							"x": "This list does not include all crimes. There are many that apply in most countries, such as murder, theft and assault. You can find out more about types of crime in the UK at www.gov.uk."
						},
						{
							"t": "p",
							"x": "Examples of civil laws are:"
						},
						{
							"t": "p",
							"x": "Housing law: this includes disputes between landlords and tenants over issues such as repairs and eviction."
						},
						{
							"t": "p",
							"x": "Consumer rights: an example of this is a dispute about faulty goods or services."
						},
						{
							"t": "p",
							"x": "Employment law: these cases include disputes over wages and cases of unfair dismissal or discrimination in the workplace."
						},
						{
							"t": "p",
							"x": "Debt: people might be taken to court if they owe money to someone."
						},
						{
							"t": "p",
							"x": "The police and their duties"
						},
						{
							"t": "p",
							"x": "Police in the UK"
						},
						{
							"t": "p",
							"x": "The job of the police in the UK is to: protect life and property prevent disturbances (also known as keeping the peace) prevent and detect crime."
						},
						{
							"t": "p",
							"x": "The police are organised into a number of separate police forces headed by Chief Constables. They are independent of the government."
						},
						{
							"t": "p",
							"x": "In November 2012, the public elected Police and Crime Commissioners (PCCs) in England and Wales. These are directly elected individuals who are responsible for the delivery of an efficient and effective police force that reflects the needs of their local communities. PCCs set local police priorities and the local policing budget."
						},
						{
							"t": "p",
							"x": "They also appoint the Chief Constable."
						},
						{
							"t": "p",
							"x": "The police force is a public service that helps and protects everyone, no matter what their background or where they live. Police Officers must themselves obey the law. They must not misuse their authority, make a false statement, be rude or abusive, or commit racial discrimination. If police Officers are corrupt or misuse their authority they are severely punished."
						},
						{
							"t": "p",
							"x": "Police Officers are supported by police community support Officers (PSCOs). PSCOs have different roles according to the area but usually patrol the streets, work with the public, and support police Officers at crime scenes and major events."
						},
						{
							"t": "p",
							"x": "All people in the UK are expected to help the police prevent and detect crimes whenever they can. If you are arrested and taken to a police station, a police Officer will tell you the reason for your arrest and you will be able to seek legal advice."
						},
						{
							"t": "p",
							"x": "If something goes wrong, the police complaints system tries to put it right. Anyone can make a complaint about the police by going to a police station or writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland."
						},
						{
							"t": "p",
							"x": "Terrorism and extremism"
						},
						{
							"t": "p",
							"x": "The UK faces a range of terrorist threats. The most serious of these is from Al Qa’ida, its affiliates and like-minded organisations. The UK also faces threats from other kinds of terrorism, such as Northern Ireland-related terrorism."
						},
						{
							"t": "p",
							"x": "All terrorist groups try to radicalise and recruit people to their cause. How, where and to what extent they try to do so will vary. Evidence shows that these groups attract very low levels of public support, but people who want to make their home in the UK should be aware of this threat. It is important that all citizens feel safe."
						},
						{
							"t": "p",
							"x": "This includes feeling safe from all kinds of extremism (vocal or active opposition to fundamental British values), including religious extremism and far-right extremism."
						},
						{
							"t": "p",
							"x": "If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local police force."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The difference between civil and criminal law and some examples of each"
						},
						{
							"t": "check",
							"x": "The duties of the police"
						},
						{
							"t": "check",
							"x": "The possible terrorist threats facing the UK"
						},
						{
							"t": "p",
							"x": "5.5.1 The role of the courts"
						},
						{
							"t": "p",
							"x": "The judiciary"
						},
						{
							"t": "p",
							"x": "Judges (who are together called ‘the judiciary’) are responsible for interpreting the law and ensuring that trials are conducted fairly. The government cannot interfere with this."
						},
						{
							"t": "p",
							"x": "Sometimes the actions of the government are claimed to be illegal. If the judges agree, then the government must either change its policies or ask"
						},
						{
							"t": "p",
							"x": "Parliament to change the law. If judges find that a public body is not respecting someone’s legal rights, they can order that body to change its practices and/or pay compensation. Judges also make decisions in disputes between members of the public or organisations. These might be about contracts, property or employment rights or after an accident."
						},
						{
							"t": "p",
							"x": "Criminal courts"
						},
						{
							"t": "p",
							"x": "There are some differences between the court systems in England and"
						},
						{
							"t": "p",
							"x": "Wales, Scotland and Northern Ireland."
						},
						{
							"t": "p",
							"x": "Magistrates’ and Justice of the Peace Courts"
						},
						{
							"t": "p",
							"x": "In England, Wales and Northern Ireland, most minor criminal cases are dealt with in a Magistrates’ Court. In Scotland, minor criminal offences go to a"
						},
						{
							"t": "p",
							"x": "Justice of the Peace Court."
						},
						{
							"t": "p",
							"x": "Magistrates and Justices of the Peace (JPs) are members of the local community. In England, Wales and Scotland they usually work unpaid and do not need legal qualifications. They receive training to do the job and are supported by a legal adviser. Magistrates decide the verdict in each case that comes before them and, if the person is found guilty, the sentence that they are given. In Northern Ireland, cases are heard by a District Judge or Deputy"
						},
						{
							"t": "p",
							"x": "District Judge, who is legally qualified and paid."
						},
						{
							"t": "p",
							"x": "Crown Courts and Sheriff Courts"
						},
						{
							"t": "p",
							"x": "In England, Wales and Northern Ireland, serious offences are tried in front of a judge and a jury in a Crown Court. In Scotland, serious cases are heard in a Sheriff Court with either a sheriff or a sheriff with a jury. The most serious cases in Scotland, such as murder, are heard at a High Court with a judge and jury. A jury is made up of members of the public chosen at random from the local electoral register. In England, Wales and Northern"
						},
						{
							"t": "p",
							"x": "Ireland a jury has 12 members, and in Scotland a jury has 15 members."
						},
						{
							"t": "p",
							"x": "Everyone who is summoned to do jury service must do it unless they are not eligible (for example, because they have a criminal conviction) or they provide a good reason to be excused, such as ill health."
						},
						{
							"t": "p",
							"x": "The jury has to listen to the evidence presented at the trial and then decide a verdict of ‘guilty’ or ‘not guilty’ based on what they have heard. In"
						},
						{
							"t": "p",
							"x": "Scotland, a third verdict of ‘not proven’ is also possible. If the jury finds a defendant guilty, the judge decides on the penalty."
						},
						{
							"t": "p",
							"x": "Youth Courts"
						},
						{
							"t": "p",
							"x": "In England, Wales and Northern Ireland, if an accused person is aged 10 to"
						},
						{
							"t": "p",
							"x": "17, the case is normally heard in a Youth Court in front of up to three specially trained magistrates or a District Judge. The most serious cases will go to the Crown Court. The parents or carers of the young person are expected to attend the hearing. Members of the public are not allowed in"
						},
						{
							"t": "p",
							"x": "Youth Courts, and the name or photographs of the accused young person cannot be published in newspapers or used by the media."
						},
						{
							"t": "p",
							"x": "In Scotland a system called the Children’s Hearings System is used to deal with children and young people who have committed an offence."
						},
						{
							"t": "p",
							"x": "Northern Ireland has a system of youth conferencing to consider how a child should be dealt with when they have committed an offence."
						},
						{
							"t": "p",
							"x": "Civil courts"
						},
						{
							"t": "p",
							"x": "County Courts"
						},
						{
							"t": "p",
							"x": "County Courts deal with a wide range of civil disputes. These include people trying to get back money that is owed to them, cases involving personal injury, family matters, breaches of contract, and divorce. In"
						},
						{
							"t": "p",
							"x": "Scotland, most of these matters are dealt with in the Sheriff Court. More serious civil cases – for example, when a large amount of compensation is being claimed – are dealt with in the High Court in England, Wales and"
						},
						{
							"t": "p",
							"x": "Northern Ireland. In Scotland, they are dealt with in the Court of Session in"
						},
						{
							"t": "p",
							"x": "Edinburgh."
						},
						{
							"t": "p",
							"x": "The small claims procedure"
						},
						{
							"t": "p",
							"x": "The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer."
						},
						{
							"t": "p",
							"x": "This procedure is used for claims of less than £10,000 in England and Wales and £5,000 in Scotland and Northern Ireland. The hearing is held in front of a judge in an ordinary room, and people from both sides of the dispute sit around a table. Small claims can also be issued online through Money"
						},
						{
							"t": "p",
							"x": "Claims Online (www.moneyclaim.gov.uk)."
						},
						{
							"t": "p",
							"x": "You can get details about the small claims procedure from your local"
						},
						{
							"t": "p",
							"x": "County Court or Sheriff Court. Details of your local court can be found as follows:"
						},
						{
							"t": "p",
							"x": "England and Wales: at www.gov.uk"
						},
						{
							"t": "p",
							"x": "Scotland: at www.scotcourts.gov.uk"
						},
						{
							"t": "p",
							"x": "Northern Ireland: at www.courtsni.gov.uk."
						},
						{
							"t": "p",
							"x": "Legal advice"
						},
						{
							"t": "p",
							"x": "Solicitors"
						},
						{
							"t": "p",
							"x": "Solicitors are trained lawyers who give advice on legal matters, take action for their clients and represent their clients in court."
						},
						{
							"t": "p",
							"x": "There are solicitors’ Offices throughout the UK. It is important to find out which aspects of law a solicitor specialises in and to check that they have the right experience to help you with your case. Many advertise in local newspapers and in Yellow Pages. The Citizens Advice Bureau"
						},
						{
							"t": "p",
							"x": "(www.citizensadvice.org.uk) can give you names of local solicitors and which areas of law they specialise in. You can also get this information from the Law Society (www.lawsociety.org.uk) in England and Wales, the Law"
						},
						{
							"t": "p",
							"x": "Society of Scotland (www.lawscot.org.uk) or the Law Society of Northern"
						},
						{
							"t": "p",
							"x": "Ireland (www.lawsoc-ni.org). Solicitors’ charges are usually based on how much time they spend on a case. It is very important to find out at the start how much a case is likely to cost."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The role of the judiciary"
						},
						{
							"t": "check",
							"x": "About the different criminal courts in the UK"
						},
						{
							"t": "check",
							"x": "About the different civil courts in the UK"
						},
						{
							"t": "check",
							"x": "How you can settle a small claim"
						}
					]
				},
				{
					"id": "5.6",
					"title": "The government",
					"blocks": [
						{
							"t": "p",
							"x": "The Prime Minister"
						},
						{
							"t": "p",
							"x": "The Prime Minister (PM) is the leader of the political party in power. He or she appoints the members of the cabinet and has control over many important public appointments. The official home of the Prime Minister is 10 Downing Street, in central London, near the Houses of Parliament. He or she also has a country house outside London called Chequers."
						},
						{
							"t": "p",
							"x": "The Prime Minister can be changed if the MPs in the governing party decide to do so, or if he or she wishes to resign. The Prime Minister usually resigns if his or her party loses a General Election."
						},
						{
							"t": "p",
							"x": "The cabinet"
						},
						{
							"t": "p",
							"x": "The Prime Minister appoints about 20 senior MPs to become ministers in charge of departments. These include:"
						},
						{
							"t": "p",
							"x": "Chancellor of the Exchequer – responsible for the economy"
						},
						{
							"t": "p",
							"x": "Home Secretary – responsible for crime, policing and immigration"
						},
						{
							"t": "p",
							"x": "Foreign Secretary – responsible for managing relationships with foreign countries other ministers (called ‘Secretaries of State’) responsible for subjects such as education, health and defence."
						},
						{
							"t": "p",
							"x": "These ministers form the cabinet, a committee which usually meets weekly and makes important decisions about government policy. Many of these decisions have to be debated or approved by Parliament."
						},
						{
							"t": "p",
							"x": "Each department also has a number of other ministers, called Ministers of State and Parliamentary Under-Secretaries of State, who take charge of particular areas of the department’s work."
						},
						{
							"t": "p",
							"x": "The opposition"
						},
						{
							"t": "p",
							"x": "The second-largest party in the House of Commons is called the opposition. The leader of the opposition usually becomes Prime Minister if his or her party wins the next General Election."
						},
						{
							"t": "p",
							"x": "The leader of the opposition leads his or her party in pointing out what they see as the government’s failures and weaknesses. One important opportunity to do this is at Prime Minister’s Questions, which takes place every week while Parliament is sitting. The leader of the opposition also appoints senior opposition MPs to be ‘shadow ministers’. They form the shadow cabinet and their role is to challenge the government and put forward alternative policies."
						},
						{
							"t": "p",
							"x": "The party system"
						},
						{
							"t": "p",
							"x": "Anyone aged 18 or over can stand for election as an MP but they are unlikely to win unless they have been nominated to represent one of the major political parties."
						},
						{
							"t": "p",
							"x": "These are the Conservative Party, the Labour Party, the Liberal Democrats, or one of the parties representing Scottish, Welsh or Northern Irish interests."
						},
						{
							"t": "p",
							"x": "There are a few MPs who do not represent any of the main political parties. They are called ‘independents’ and usually represent an issue important to their constituency."
						},
						{
							"t": "p",
							"x": "The main political parties actively look for members of the public to join their debates, contribute to their costs, and help at elections for Parliament or for local government. They have branches in most constituencies and hold policy-making conferences every year."
						},
						{
							"t": "p",
							"x": "Pressure and lobby groups are organisations which try to influence government policy. They play an important role in politics. Some are representative organisations such as the CBI (Confederation of British Industry), which represents the views of British business. Others campaign on particular topics, such as the environment (for example, Greenpeace) or human rights (for example, Liberty)."
						},
						{
							"t": "p",
							"x": "The civil service"
						},
						{
							"t": "p",
							"x": "Civil servants support the government in developing and implementing its policies. They also deliver public services. Civil servants are accountable to ministers."
						},
						{
							"t": "p",
							"x": "They are chosen on merit and are politically neutral – they are not political appointees. People can apply to join the civil service through an application process, like other jobs in the UK. Civil servants are expected to carry out their role with dedication and a commitment to the civil service and its core values. These are: integrity, honesty, objectivity and impartiality (including being politically neutral)."
						},
						{
							"t": "p",
							"x": "Local government"
						},
						{
							"t": "p",
							"x": "Towns, cities and rural areas in the UK are governed by democratically elected councils, often called ‘local authorities’. Some areas have both district and county councils, which have different functions. Most large towns and cities have a single local authority."
						},
						{
							"t": "p",
							"x": "Local authorities provide a range of services in their areas. They are funded by money from central government and by local taxes."
						},
						{
							"t": "p",
							"x": "Many local authorities appoint a mayor, who is the ceremonial leader of the council. In some towns, a mayor is elected to be the effective leader of the administration. London has 33 local authorities, with the Greater London Authority and the Mayor of London coordinating policies across the capital. For most local authorities, local elections for councillors are held in May every year. Many candidates stand for council election as members of a political party."
						},
						{
							"t": "p",
							"x": "Devolved administrations"
						},
						{
							"t": "p",
							"x": "Since 1997, some powers have been devolved from the central government to give people in Wales, Scotland and Northern Ireland more control over matters that directly affect them. There has been a Welsh Assembly and a Scottish Parliament since 1999. There is also a Northern Ireland Assembly, although this has been suspended on a few occasions."
						},
						{
							"t": "p",
							"x": "Policy and laws governing defence, foreign affairs, immigration, taxation and social security all remain under central UK government control. However, many other public services, such as education, are controlled by the devolved administrations."
						},
						{
							"t": "p",
							"x": "The devolved administrations each have their own civil service."
						},
						{
							"t": "p",
							"x": "The Welsh government"
						},
						{
							"t": "p",
							"x": "The Welsh government and National Assembly for Wales are based in Cardiff, the capital city of Wales. The National Assembly has 60 Assembly members (AMs) and elections are held every four years using a form of proportional representation. Members can speak in either Welsh or English and all of the Assembly’s publications are in both languages."
						},
						{
							"t": "p",
							"x": "The Assembly has the power to make laws for Wales in 20 areas, including: education and training health and social services economic development housing."
						},
						{
							"t": "p",
							"x": "Since 2011, the National Assembly for Wales has been able to pass laws on these topics without the agreement of the UK Parliament."
						},
						{
							"t": "p",
							"x": "The Scottish Parliament"
						},
						{
							"t": "p",
							"x": "The Scottish Parliament was formed in 1999. It sits in Edinburgh, the capital city of Scotland."
						},
						{
							"t": "p",
							"x": "There are 129 members of the Scottish Parliament (MSPs), elected by a form of proportional representation. The Scottish Parliament can pass laws for Scotland on all matters which are not specifically reserved to the UK Parliament. The matters on which the Scottish Parliament can legislate include: civil and criminal law health education planning additional tax-raising powers."
						},
						{
							"t": "p",
							"x": "The Northern Ireland Assembly"
						},
						{
							"t": "p",
							"x": "A Northern Ireland Parliament was established in 1922, when Ireland was divided, but it was abolished in 1972, shortly after the Troubles broke out in 1969."
						},
						{
							"t": "p",
							"x": "The Northern Ireland Assembly was established soon after the Belfast Agreement (or Good Friday Agreement) in 1998. There is a power-sharing agreement which distributes ministerial Offices amongst the main parties. The Assembly has 90 elected members, known as MLAs (members of the Legislative Assembly). They are elected with a form of proportional representation."
						},
						{
							"t": "p",
							"x": "The Northern Ireland Assembly can make decisions on issues such as: education agriculture the environment health social services."
						},
						{
							"t": "p",
							"x": "The UK government has the power to suspend all devolved assemblies. It has used this power several times in Northern Ireland when local political leaders found it difficult to work together. However, the Assembly has been running successfully since 2007."
						},
						{
							"t": "p",
							"x": "The media and government"
						},
						{
							"t": "p",
							"x": "Proceedings in Parliament are broadcast on television and published in official reports called Hansard. Written reports can be found in large libraries and at www.parliament.uk. Most people get information about political issues and events from newspapers (often called ‘the press’), television, radio and the internet."
						},
						{
							"t": "p",
							"x": "The UK has a free press. This means that what is written in newspapers is free from government control. Some newspaper owners and editors hold strong political opinions and run campaigns to try to influence government policy and public opinion."
						},
						{
							"t": "p",
							"x": "By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The role of the Prime Minister, cabinet, opposition and shadow cabinet"
						},
						{
							"t": "check",
							"x": "The role of political parties in the UK system of government"
						},
						{
							"t": "check",
							"x": "Who the main political parties are"
						},
						{
							"t": "check",
							"x": "What pressure and lobby groups do"
						},
						{
							"t": "check",
							"x": "The role of the civil service"
						},
						{
							"t": "check",
							"x": "The role of local government"
						},
						{
							"t": "check",
							"x": "The powers of the devolved governments in Wales, Scotland and Northern Ireland"
						},
						{
							"t": "check",
							"x": "How proceedings in Parliament are recorded"
						},
						{
							"t": "check",
							"x": "The role of the media in keeping people informed about political issues"
						},
						{
							"t": "p",
							"x": "5.6.1 Who can vote?"
						},
						{
							"t": "p",
							"x": "The UK has had a fully democratic voting system since 1928. The present voting age of 18 was set in 1969 and (with a few exceptions) all UK-born and naturalised adult citizens have the right to vote."
						},
						{
							"t": "p",
							"x": "Adult citizens of the UK, and citizens of the Commonwealth and the Irish"
						},
						{
							"t": "p",
							"x": "Republic who are resident in the UK, can vote in all public elections. Adult citizens of other EU states who are resident in the UK can vote in all elections except General Elections."
						},
						{
							"t": "p",
							"x": "The electoral register"
						},
						{
							"t": "p",
							"x": "To be able to vote in a parliamentary, local or European election, you must have your name on the electoral register."
						},
						{
							"t": "p",
							"x": "If you are eligible to vote, you can register by contacting your local council electoral registration Office. This is usually based at your local council (in"
						},
						{
							"t": "p",
							"x": "Scotland it may be based elsewhere). If you don’t know which local authority you come under, you can find out by visiting www.aboutmyvote.co.uk and entering your postcode. You can also download voter registration forms in English, Welsh and some other languages."
						},
						{
							"t": "p",
							"x": "The electoral register is updated every year in September or October. An electoral registration form is sent to every household and this has to be completed and returned with the names of everyone who is resident in the household and eligible to vote."
						},
						{
							"t": "p",
							"x": "In Northern Ireland a different system operates. This is called ‘individual registration’ and all those entitled to vote must complete their own registration form. Once registered, people stay on the register provided their personal details do not change. For more information see the Electoral"
						},
						{
							"t": "p",
							"x": "Office for Northern Ireland website at www.eoni.org.uk"
						},
						{
							"t": "p",
							"x": "By law, each local authority has to make its electoral register available for anyone to look at, although this has to be supervised. The register is kept at each local electoral registration Office (or council Office in England and"
						},
						{
							"t": "p",
							"x": "Wales). It is also possible to see the register at some public buildings such as libraries."
						},
						{
							"t": "p",
							"x": "Where to vote"
						},
						{
							"t": "p",
							"x": "Polling station with a ballot box displayed"
						},
						{
							"t": "p",
							"x": "People vote in elections at places called polling stations, or polling places in"
						},
						{
							"t": "p",
							"x": "Scotland. Before the election you will be sent a poll card. This tells you where your polling station or polling place is and when the election will take place. On election day, the polling station or place will be open from 7.00 am until 10.00 pm."
						},
						{
							"t": "p",
							"x": "When you arrive at the polling station, the staff will ask for your name and address. In Northern Ireland you will also have to show photographic identification. You will then get your ballot paper, which you take to a polling booth to fill in privately. You should make up your own mind who to vote for. No one has the right to make you vote for a particular candidate."
						},
						{
							"t": "p",
							"x": "You should follow the instructions on the ballot paper. Once you have completed it, put it in the ballot box."
						},
						{
							"t": "p",
							"x": "If it is difficult for you to get to a polling station or polling place, you can register for a postal ballot. Your ballot paper will be sent to your home before the election. You then fill it in and post it back. You can choose to do this when you register to vote."
						},
						{
							"t": "p",
							"x": "Standing for office"
						},
						{
							"t": "p",
							"x": "Most citizens of the UK, the Irish Republic or the Commonwealth aged 18 or over can stand for public Office. There are some exceptions, including: members of the armed forces civil servants people found guilty of certain criminal offences."
						},
						{
							"t": "p",
							"x": "Members of the House of Lords may not stand for election to the House of"
						},
						{
							"t": "p",
							"x": "Commons but are eligible for all other public Offices."
						},
						{
							"t": "p",
							"x": "Visiting Parliament and the devolved administrations"
						},
						{
							"t": "p",
							"x": "The UK Parliament"
						},
						{
							"t": "p",
							"x": "The public can listen to debates in the Palace of Westminster from public galleries in both the House of Commons and the House of Lords."
						},
						{
							"t": "p",
							"x": "You can write to your local MP in advance to ask for tickets or you can queue on the day at the public entrance. Entrance is free. Sometimes there are long queues for the House of Commons and people have to wait for at least one to two hours. It is usually easier to get in to the House of Lords."
						},
						{
							"t": "p",
							"x": "You can find further information on the UK Parliament website at www.parliament.uk."
						},
						{
							"t": "p",
							"x": "Northern Ireland Assembly"
						},
						{
							"t": "p",
							"x": "In Northern Ireland elected members, known as MLAs, meet in the"
						},
						{
							"t": "p",
							"x": "Northern Ireland Assembly at Stormont, in Belfast."
						},
						{
							"t": "p",
							"x": "There are two ways to arrange a visit to Stormont. You can either contact the"
						},
						{
							"t": "p",
							"x": "Education Service (details are on the Northern Ireland Assembly website at www.niassembly.gov.uk) or contact an MLA."
						},
						{
							"t": "p",
							"x": "Scottish Parliament"
						},
						{
							"t": "p",
							"x": "In Scotland the elected members, called MSPs, meet in the Scottish"
						},
						{
							"t": "p",
							"x": "Parliament building at Holyrood in Edinburgh (for more information, see www.scottish.parliament.uk)."
						},
						{
							"t": "p",
							"x": "You can get information, book tickets or arrange tours through visitor services. You can write to them at the Scottish Parliament, Edinburgh, EH99"
						},
						{
							"t": "p",
							"x": "1SP, telephone 0131 348 5200 or email sp.bookings@scottish.parliament.uk"
						},
						{
							"t": "p",
							"x": "National Assembly for Wales"
						},
						{
							"t": "p",
							"x": "In Wales the elected members, known as AMs, meet in the Welsh Assembly in the Senedd in Cardiff Bay (for more information, see www.wales.gov.uk)."
						},
						{
							"t": "p",
							"x": "The Senedd is an open building. You can book guided tours or seats in the public galleries for the Welsh Assembly. To make a booking, contact the"
						},
						{
							"t": "p",
							"x": "Assembly Booking Service on 0845 010 5500 or email assembly.bookings@wales.gsi.gov.uk"
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "Who is eligible to vote"
						},
						{
							"t": "check",
							"x": "How you register to vote"
						},
						{
							"t": "check",
							"x": "How to vote"
						},
						{
							"t": "check",
							"x": "Who can stand for public Office"
						},
						{
							"t": "check",
							"x": "How you can visit Parliament, the Northern Ireland Assembly, the Scottish Parliament and the Welsh Assembly"
						}
					]
				},
				{
					"id": "5.7",
					"title": "The UK and international institutions",
					"blocks": [
						{
							"t": "p",
							"x": "The Commonwealth"
						},
						{
							"t": "p",
							"x": "The Commonwealth is an association of countries that support each other and work together towards shared goals in democracy and development. Most member states were once part of the British Empire, although a few countries which were not have also joined."
						},
						{
							"t": "p",
							"x": "The monarch (currently King Charles III) is the ceremonial head of the Commonwealth, which currently has 54 member states. Membership is voluntary. The Commonwealth has no power over its members, although it can suspend membership. The Commonwealth is based on the core values of democracy, good government and the rule of law."
						},
						{
							"t": "p",
							"x": "Commonwealth members"
						},
						{
							"t": "p",
							"x": "There 56 member states:"
						},
						{
							"t": "p",
							"x": "Africa"
						},
						{
							"t": "p",
							"x": "Asia"
						},
						{
							"t": "p",
							"x": "Caribbean and Americas"
						},
						{
							"t": "p",
							"x": "Europe"
						},
						{
							"t": "p",
							"x": "Pacific"
						},
						{
							"t": "p",
							"x": "Botswana"
						},
						{
							"t": "p",
							"x": "Bangladesh"
						},
						{
							"t": "p",
							"x": "Antigua and Barbuda"
						},
						{
							"t": "p",
							"x": "Cyprus"
						},
						{
							"t": "p",
							"x": "Australia"
						},
						{
							"t": "p",
							"x": "Cameroon"
						},
						{
							"t": "p",
							"x": "Brunei Darussalam"
						},
						{
							"t": "p",
							"x": "Bahamas, The"
						},
						{
							"t": "p",
							"x": "Malta"
						},
						{
							"t": "p",
							"x": "Fiji"
						},
						{
							"t": "p",
							"x": "Gabon"
						},
						{
							"t": "p",
							"x": "India"
						},
						{
							"t": "p",
							"x": "Barbados"
						},
						{
							"t": "p",
							"x": "United Kingdom"
						},
						{
							"t": "p",
							"x": "Kiribati"
						},
						{
							"t": "p",
							"x": "Gambia, The"
						},
						{
							"t": "p",
							"x": "Malaysia"
						},
						{
							"t": "p",
							"x": "Belize"
						},
						{
							"t": "p",
							"x": "Nauru"
						},
						{
							"t": "p",
							"x": "Ghana"
						},
						{
							"t": "p",
							"x": "Maldives"
						},
						{
							"t": "p",
							"x": "Canada"
						},
						{
							"t": "p",
							"x": "New Zealand"
						},
						{
							"t": "p",
							"x": "Kenya"
						},
						{
							"t": "p",
							"x": "Pakistan"
						},
						{
							"t": "p",
							"x": "Dominica"
						},
						{
							"t": "p",
							"x": "Papua New Guinea"
						},
						{
							"t": "p",
							"x": "Kingdom of Eswatini"
						},
						{
							"t": "p",
							"x": "Singapore"
						},
						{
							"t": "p",
							"x": "Grenada"
						},
						{
							"t": "p",
							"x": "Samoa"
						},
						{
							"t": "p",
							"x": "Lesotho"
						},
						{
							"t": "p",
							"x": "Sri Lanka"
						},
						{
							"t": "p",
							"x": "Guyana"
						},
						{
							"t": "p",
							"x": "Solomon Islands"
						},
						{
							"t": "p",
							"x": "Malawi"
						},
						{
							"t": "p",
							"x": "Jamaica"
						},
						{
							"t": "p",
							"x": "Tonga"
						},
						{
							"t": "p",
							"x": "Mauritius"
						},
						{
							"t": "p",
							"x": "Saint Lucia"
						},
						{
							"t": "p",
							"x": "Tuvalu"
						},
						{
							"t": "p",
							"x": "Mozambique"
						},
						{
							"t": "p",
							"x": "St Kitts and Nevis"
						},
						{
							"t": "p",
							"x": "Vanuatu"
						},
						{
							"t": "p",
							"x": "Namibia"
						},
						{
							"t": "p",
							"x": "St Vincent and The Grenadines"
						},
						{
							"t": "p",
							"x": "Nigeria"
						},
						{
							"t": "p",
							"x": "Trinidad and Tobago"
						},
						{
							"t": "p",
							"x": "Rwanda"
						},
						{
							"t": "p",
							"x": "Seychelles"
						},
						{
							"t": "p",
							"x": "Sierra Leone"
						},
						{
							"t": "p",
							"x": "South Africa"
						},
						{
							"t": "p",
							"x": "Togo"
						},
						{
							"t": "p",
							"x": "Uganda"
						},
						{
							"t": "p",
							"x": "United Republic of Tanzania"
						},
						{
							"t": "p",
							"x": "Zambia"
						},
						{
							"t": "p",
							"x": "The European Union"
						},
						{
							"t": "p",
							"x": "European Union Flag"
						},
						{
							"t": "p",
							"x": "The European Union (EU), originally called the European Economic Community (EEC), was set up by six western European countries (Belgium, France, Germany, Italy, Luxembourg and the Netherlands) who signed the Treaty of Rome on 25 March 1957."
						},
						{
							"t": "p",
							"x": "BREXIT"
						},
						{
							"t": "p",
							"x": "The UK originally decided not to join this group but it became a member in 1973. The UK left the EU after the Brexit vote. Brexit officially took place at 23:00 GMT on 31 January 2020."
						},
						{
							"t": "p",
							"x": "There are now 27 EU member states."
						},
						{
							"t": "p",
							"x": "EU member states"
						},
						{
							"t": "p",
							"x": "Austria"
						},
						{
							"t": "p",
							"x": "Belgium"
						},
						{
							"t": "p",
							"x": "Bulgaria"
						},
						{
							"t": "p",
							"x": "Cyprus"
						},
						{
							"t": "p",
							"x": "Czech Republic"
						},
						{
							"t": "p",
							"x": "Denmark"
						},
						{
							"t": "p",
							"x": "Estonia"
						},
						{
							"t": "p",
							"x": "Finland"
						},
						{
							"t": "p",
							"x": "France"
						},
						{
							"t": "p",
							"x": "Germany"
						},
						{
							"t": "p",
							"x": "Greece"
						},
						{
							"t": "p",
							"x": "Hungary"
						},
						{
							"t": "p",
							"x": "Ireland"
						},
						{
							"t": "p",
							"x": "Italy"
						},
						{
							"t": "p",
							"x": "Latvia"
						},
						{
							"t": "p",
							"x": "Lithuania"
						},
						{
							"t": "p",
							"x": "Luxembourg"
						},
						{
							"t": "p",
							"x": "Malta"
						},
						{
							"t": "p",
							"x": "Netherlands"
						},
						{
							"t": "p",
							"x": "Poland"
						},
						{
							"t": "p",
							"x": "Portugal"
						},
						{
							"t": "p",
							"x": "Romania"
						},
						{
							"t": "p",
							"x": "Slovakia"
						},
						{
							"t": "p",
							"x": "Slovenia"
						},
						{
							"t": "p",
							"x": "Spain"
						},
						{
							"t": "p",
							"x": "Sweden"
						},
						{
							"t": "p",
							"x": "Croatia"
						},
						{
							"t": "p",
							"x": "With effect from 2024, no general principle of EU law is part of UK law. European laws are called directives, regulations or framework decisions."
						},
						{
							"t": "p",
							"x": "The Council of Europe"
						},
						{
							"t": "p",
							"x": "The Council of Europe is separate from the EU. It has 47 member countries, including the UK, and is responsible for the protection and promotion of human rights in those countries. It has no power to make laws but draws up conventions and charters, the most well-known of which is the European Convention on Human Rights and Fundamental Freedoms, usually called the European Convention on Human Rights."
						},
						{
							"t": "p",
							"x": "The United Nations"
						},
						{
							"t": "p",
							"x": "The UK is part of the United Nations (UN), an international organisation with more than 190 countries as members. The UN was set up after the Second World War and aims to prevent war and promote international peace and security. There are 15 members on the UN Security Council, which recommends action when there are international crises and threats to peace. The UK is one of five permanent members of the Security Council."
						},
						{
							"t": "p",
							"x": "The North Atlantic Treaty Organization (NATO)"
						},
						{
							"t": "p",
							"x": "The UK is also a member of NATO. NATO is a group of European and North American countries that have agreed to help each other if they come under attack. It also aims to maintain peace between all of its members."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "What the Commonwealth is and its role"
						},
						{
							"t": "check",
							"x": "Other international organisations of which the UK is a member"
						}
					]
				},
				{
					"id": "5.8",
					"title": "Your role in the community",
					"blocks": [
						{
							"t": "p",
							"x": "Becoming a British citizen or settling in the UK brings responsibilities but also opportunities. Everyone has the opportunity to participate in their community. This section looks at some of the responsibilities of being a citizen and gives information about how you can help to make your community a better place to live and work."
						},
						{
							"t": "p",
							"x": "Values and responsibilities"
						},
						{
							"t": "p",
							"x": "Although Britain is one of the world’s most diverse societies, there is a set of shared values and responsibilities that everyone can agree with. These values and responsibilities include: to obey and respect the law to be aware of the rights of others and respect those rights to treat others with fairness to behave responsibly to help and protect your family to respect and preserve the environment to treat everyone equally, regardless of sex, race, religion, age, disability, class or sexual orientation to work to provide for yourself and your family to help others to vote in local and national government elections."
						},
						{
							"t": "p",
							"x": "Taking on these values and responsibilities will make it easier for you to become a full and active citizen."
						},
						{
							"t": "p",
							"x": "Being a good neighbour"
						},
						{
							"t": "p",
							"x": "When you move into a new house or apartment, introduce yourself to the people who live near you. Getting to know your neighbours can help you to become part of the community and make friends. Your neighbours are also a good source of help – for example, they may be willing to feed your pets if you are away, or offer advice on local shops and services."
						},
						{
							"t": "p",
							"x": "You can help prevent any problems and conflicts with your neighbours by respecting their privacy and limiting how much noise you make. Also try to keep your garden tidy, and only put your refuse bags and bins on the street or in communal areas if they are due to be collected."
						},
						{
							"t": "p",
							"x": "Getting involved in local activities"
						},
						{
							"t": "p",
							"x": "Volunteering and helping your community are an important part of being a good citizen. They enable you to integrate and get to know other people. It helps to make your community a better place if residents support each other. It also helps you to fulfil your duties as a citizen, such as behaving responsibly and helping others."
						},
						{
							"t": "p",
							"x": "5.8.1 How you can support your community"
						},
						{
							"t": "p",
							"x": "There are a number of positive ways in which you can support your community and be a good citizen."
						},
						{
							"t": "p",
							"x": "Jury service"
						},
						{
							"t": "p",
							"x": "As well as getting the right to vote, people on the electoral register are randomly selected to serve on a jury. Anyone who is on the electoral register and is aged 18 to 70 can be asked to do this."
						},
						{
							"t": "p",
							"x": "Helping in schools"
						},
						{
							"t": "p",
							"x": "If you have children, there are many ways in which you can help at their schools. Parents can often help in classrooms, by supporting activities or listening to children read."
						},
						{
							"t": "p",
							"x": "Many schools organise events to raise money for extra equipment or out-of- school activities. Activities might include book sales, toy sales or bringing food to sell. You might have good ideas of your own for raising money."
						},
						{
							"t": "p",
							"x": "Sometimes events are organised by parent-teacher associations (PTAs)."
						},
						{
							"t": "p",
							"x": "Volunteering to help with their events or joining the association is a way of doing something good for the school and also making new friends in your local community. You can find out about these opportunities from notices in the school or notes your children bring home."
						},
						{
							"t": "p",
							"x": "School governors and school boards"
						},
						{
							"t": "p",
							"x": "School governors, or members of the school board in Scotland, are people from the local community who wish to make a positive contribution to children’s education. They must be aged 18 or over at the date of their election or appointment. There is no upper age limit."
						},
						{
							"t": "p",
							"x": "Governors and school boards have an important part to play in raising school standards. They have three key roles: setting the strategic direction of the school ensuring accountability monitoring and evaluating school performance."
						},
						{
							"t": "p",
							"x": "You can contact your local school to ask if they need a new governor or school board member. In England, you can also apply online at the School"
						},
						{
							"t": "p",
							"x": "Governors’ One-Stop Shop at www.sgoss.org.uk. In England, parents and other community groups can apply to open a free school in their local area."
						},
						{
							"t": "p",
							"x": "More information about this can be found on the Department for Education website at www.dfe.gov.uk."
						},
						{
							"t": "p",
							"x": "Supporting political parties"
						},
						{
							"t": "p",
							"x": "Political parties welcome new members. Joining one is a way to demonstrate your support for certain views and to get involved in the democratic process."
						},
						{
							"t": "p",
							"x": "Political parties are particularly busy at election times. Members work hard to persuade people to vote for their candidates – for instance, by handing out leaflets in the street or by knocking on people’s doors and asking for their support. This is called ‘canvassing’. You don’t have to tell a canvasser how you intend to vote if you don’t want to."
						},
						{
							"t": "p",
							"x": "British citizens can stand for Office as a local councillor, a member of"
						},
						{
							"t": "p",
							"x": "Parliament (or the devolved equivalents) or a member of the European"
						},
						{
							"t": "p",
							"x": "Parliament. This is an opportunity to become even more involved in the political life of the UK. You may also be able to stand for Office if you are an Irish citizen, an eligible Commonwealth citizen or (except for standing to be an MP) a citizen of another EU country."
						},
						{
							"t": "p",
							"x": "You can find out more about joining a political party from the individual party websites."
						},
						{
							"t": "p",
							"x": "Helping with local services"
						},
						{
							"t": "p",
							"x": "There are opportunities to volunteer with a wide range of local service providers, including local hospitals and youth projects. Services often want to involve local people in decisions about the way in which they work."
						},
						{
							"t": "p",
							"x": "Universities, housing associations, museums and arts councils may advertise for people to serve as volunteers in their governing bodies."
						},
						{
							"t": "p",
							"x": "You can volunteer with the police, and become a special constable or a lay"
						},
						{
							"t": "p",
							"x": "(non-police) representative. You can also apply to become a magistrate. You will often find advertisements for vacancies in your local newspaper or on local radio. You can also find out more about these sorts of roles at www.gov.uk."
						},
						{
							"t": "p",
							"x": "Blood and organ donation"
						},
						{
							"t": "p",
							"x": "Donated blood is used by hospitals to help people with a wide range of injuries and illnesses. Giving blood only takes about an hour to do. You can register to give blood at:"
						},
						{
							"t": "p",
							"x": "England and North Wales: www.blood.co.uk"
						},
						{
							"t": "p",
							"x": "Rest of Wales: www.welsh-blood.org.uk"
						},
						{
							"t": "p",
							"x": "Scotland: www.scotblood.co.uk"
						},
						{
							"t": "p",
							"x": "Northern Ireland: www.nibts.org"
						},
						{
							"t": "p",
							"x": "Many people in the UK are waiting for organ transplants. If you register to be an organ donor, it can make it easier for your family to decide whether to donate your organs when you die. You can register to be an organ donor at www.organdonation.nhs.uk. Living people can also donate a kidney."
						},
						{
							"t": "p",
							"x": "Other ways to volunteer"
						},
						{
							"t": "p",
							"x": "Volunteering is working for good causes without payment. There are many benefits to volunteering, such as meeting new people helping make your community a better place. Some volunteer activities will give you a chance to practise your English or develop work skills that will help you find a job or improve your curriculum vitae (CV). Many people volunteer simply because they want to help other people."
						},
						{
							"t": "p",
							"x": "Activities you can do as a volunteer include: working with animals – for example, caring for animals at a local rescue shelter youth work – for example, volunteering at a youth group helping improve the environment – for example, participating in a litter pick-up in the local area working with the homeless in, for example, a homelessness shelter mentoring – for example, supporting someone who has just come out of prison work in health and hospitals – for example, working on an information desk in a hospital helping older people at, for example, a residential care home."
						},
						{
							"t": "p",
							"x": "There are thousands of active charities and voluntary organisations in the"
						},
						{
							"t": "p",
							"x": "UK. They work to improve the lives of people, animals and the environment in many different ways. They range from the British branches of international organisations, such as the British Red Cross, to small local charities working in particular areas. They include charities working with older people (such as Age UK), with children (for example, the National"
						},
						{
							"t": "p",
							"x": "Society for the Prevention of Cruelty to Children (NSPCC)), and with the homeless (for example, Crisis and Shelter). There are also medical research charities (for example, Cancer Research UK), environmental charities"
						},
						{
							"t": "p",
							"x": "(including the National Trust and Friends of the Earth) and charities working with animals (such as the People’s Dispensary for Sick Animals"
						},
						{
							"t": "p",
							"x": "(PDSA))."
						},
						{
							"t": "p",
							"x": "Volunteers are needed to help with their activities and to raise money. The charities often advertise in local newspapers, and most have websites that"
						},
						{
							"t": "p",
							"x": "include information about their opportunities. You can also get information about volunteering for different organisations from www.do-it.org.uk."
						},
						{
							"t": "p",
							"x": "There are many opportunities for young people to volunteer and receive accreditation which will help them to develop their skills. These include the"
						},
						{
							"t": "p",
							"x": "National Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project. You can find out more about these opportunities as follows:"
						},
						{
							"t": "p",
							"x": "National Citizen Service: at nationalcitizenservice.direct.gov.uk"
						},
						{
							"t": "p",
							"x": "England: at www.vinspired.com"
						},
						{
							"t": "p",
							"x": "Wales: at www.gwirvol.org"
						},
						{
							"t": "p",
							"x": "Scotland: at www.vds.org.uk"
						},
						{
							"t": "p",
							"x": "Northern Ireland: at www.volunteernow.co.uk"
						},
						{
							"t": "p",
							"x": "5.8.2 Looking after the environment"
						},
						{
							"t": "p",
							"x": "It is important to recycle as much of your waste as you can. Using recycled materials to make new products uses less energy and means that we do not need to extract more raw materials from the earth. It also means that less rubbish is created, so the amount being put into landfill is reduced."
						},
						{
							"t": "p",
							"x": "You can learn more about recycling and its benefits at www.recyclenow.com. At this website you can also find out what you can recycle at home and in the local area if you live in England. This information is available for Wales at www.wasteawarenesswales.org.uk, for"
						},
						{
							"t": "p",
							"x": "Scotland at www.recycleforscotland.com and for Northern Ireland from your local authority."
						},
						{
							"t": "p",
							"x": "A good way to support your local community is to shop for products locally where you can. This will help businesses and farmers in your area and in"
						},
						{
							"t": "p",
							"x": "Britain. It will also reduce your carbon footprint, because the products you buy will not have had to travel as far."
						},
						{
							"t": "p",
							"x": "Walking and using public transport to get around when you can is also a good way to protect the environment. It means that you create less pollution than when you use a car."
						},
						{
							"t": "checkhead",
							"x": "Check that you understand:"
						},
						{
							"t": "check",
							"x": "The different ways you can help at your child’s school"
						},
						{
							"t": "check",
							"x": "The role of school governors and members of school boards, and how you can become one"
						},
						{
							"t": "check",
							"x": "The role of members of political parties"
						},
						{
							"t": "check",
							"x": "The different local services people can volunteer to support"
						},
						{
							"t": "check",
							"x": "How to donate blood and organs"
						},
						{
							"t": "check",
							"x": "The benefits of volunteering for you, other people and the community"
						},
						{
							"t": "check",
							"x": "The types of activities that volunteers can do"
						},
						{
							"t": "check",
							"x": "How you can look after the environment"
						}
					]
				}
			]
		},
		{
			"num": 6,
			"title": "Summary",
			"sections": [{
				"id": "6.1",
				"title": "Sources",
				"blocks": [
					{
						"t": "p",
						"x": "In addition to this PDF version, you can also learn interactively and complete practice materials available online."
					},
					{
						"t": "p",
						"x": "6.1.1 Online study materials"
					},
					{
						"t": "p",
						"x": "Britizen.uk"
					},
					{
						"t": "p",
						"x": "45 practice tests"
					},
					{
						"t": "p",
						"x": "Online study guide"
					},
					{
						"t": "p",
						"x": "6.1.2 Physical copy"
					},
					{
						"t": "p",
						"x": "If you prefer to read a physical copy, you can buy a paper copy."
					}
				]
			}, {
				"id": "6.2",
				"title": "Key Material and Facts",
				"blocks": [
					{
						"t": "p",
						"x": "A summary of key dates and facts extracted from e-publication Life in the United Kingdom: A guide for new residents, 3rd Edition. We recommend you reading the source material to get a better context for these facts."
					},
					{
						"t": "p",
						"x": "6.2.1 Key acts"
					},
					{
						"t": "p",
						"x": "Magna Carta (1215): reduced rights of the king and laid out basic rights of the people."
					},
					{
						"t": "p",
						"x": "Act for the Government of Wales (under King Henry VII, 1500s): united"
					},
					{
						"t": "p",
						"x": "England and Wales"
					},
					{
						"t": "p",
						"x": "Habeas Corpus Act (1679): forbid unlawful imprisonment"
					},
					{
						"t": "p",
						"x": "Bill of Rights (1689): confirmed the rights of Parliament and the limits of the king’s power"
					},
					{
						"t": "p",
						"x": "Act of Union (1707): united kingdoms of England and Scotland and created Kingdom of GB"
					},
					{
						"t": "p",
						"x": "Reform Act (1832): abolished pocket and rotten boroughs and gave more parliamentary seats to towns and cities. Increased number of (male) voters."
					},
					{
						"t": "p",
						"x": "Emancipation Act (1833): abolished slavery throughout British Empire."
					},
					{
						"t": "p",
						"x": "William Wilberforce was leading abolitionist and Quakers set up first anti-slavery groups. More than 2 million migrants came from India and"
					},
					{
						"t": "p",
						"x": "China to replace labour force."
					},
					{
						"t": "p",
						"x": "Women’s suffrage – 1918 (vote at 30+ yrs) and 1928 (vote at 21 yrs, same as men)"
					},
					{
						"t": "p",
						"x": "1913: Home Rule proposed in Ireland. Idea was to have a self-governing"
					},
					{
						"t": "p",
						"x": "Ireland with its own parliament that still remained part of the UK. WWI postponed any changes. Irish nationalists didn’t want to wait and the"
					},
					{
						"t": "p",
						"x": "Easter Rising against the British in Dublin took place in 1916. Guerrilla war followed."
					},
					{
						"t": "p",
						"x": "1921: Peace treaty signed splitting Ireland in two"
					},
					{
						"t": "p",
						"x": "6.2.2 Eras"
					},
					{
						"t": "p",
						"x": "Romans: ruled Britain from 43-410 AD (approximately 400 years)."
					},
					{
						"t": "p",
						"x": "Hadrian’s wall built on orders of Roman Emperor Hadrian to keep out tribes (Picts) who lived in what is now Scotland."
					},
					{
						"t": "p",
						"x": "Middle Ages (1066-1485): period of constant war, including Crusades and Hundred Years’ War."
					},
					{
						"t": "p",
						"x": "Elizabethan period (1500s): known for growing patriotism, expanded trade and rich poetry and drama."
					},
					{
						"t": "p",
						"x": "The Enlightenment (1700s): development of new ideas about politics, philosophy and science. Adam Smith (economics) and David Hume"
					},
					{
						"t": "p",
						"x": "(philosopher) influential Scottish thinkers."
					},
					{
						"t": "p",
						"x": "Industrial Revolution (from mid-1700s to 1800s). Britain produced over half of the world’s supplies of cotton cloth, coal and iron. Machinery and stream power developed."
					},
					{
						"t": "p",
						"x": "Victorian Age (1837-1901): Queen Victoria reigned; Britain increased power and influence abroad. Became largest empire in world history."
					},
					{
						"t": "p",
						"x": "Middle classes grew significantly and reformers improved conditions for the poor."
					},
					{
						"t": "p",
						"x": "6.2.3 Modern era"
					},
					{
						"t": "p",
						"x": "1900s: jet engine and radar invented. TV & World Wide Web (Tim"
					},
					{
						"t": "p",
						"x": "Berners-Lee) invented. Hovercraft invented (Sir Christopher Cockrell) and penicillin discovered (Sir Alexander Flemming). ATM invented."
					},
					{
						"t": "p",
						"x": "Cloned sheep Dolly. Developed Concorde (supersonic jet) with the"
					},
					{
						"t": "p",
						"x": "French. Co-discovered insulin and co-invented the MRI. Structure of"
					},
					{
						"t": "p",
						"x": "DNA molecule discovered. Radio telescope at Jodrell Bank was for many years the world’s largest. Harrier jump jet (takes off vertically). IVF therapy."
					},
					{
						"t": "p",
						"x": "State retirement pension and free school meals introduced before WWI"
					},
					{
						"t": "p",
						"x": "1929: Great Depression. Aviation and automobile industries developed."
					},
					{
						"t": "p",
						"x": "High unemployment, especially in “heavy” industries (e.g. shipbuilding)."
					},
					{
						"t": "p",
						"x": "1942: Beveridge Report (William Beveridge) set out ideas which led to foundation of modern welfare state."
					},
					{
						"t": "p",
						"x": "1944: Education Act (R A Butler). Free secondary education and clear distinction between primary and secondary education."
					},
					{
						"t": "p",
						"x": "1945-1950: NHS and social security system established."
					},
					{
						"t": "p",
						"x": "1947: 9 colonies gained independence, including India, Pakistan, and Sri"
					},
					{
						"t": "p",
						"x": "Lanka"
					},
					{
						"t": "p",
						"x": "1950s: Post-war labour shortages led to recruitment of workers from"
					},
					{
						"t": "p",
						"x": "India, Pakistan, West Indies and Bangladesh."
					},
					{
						"t": "p",
						"x": "1960s: Increased wealth and liberalisation of social laws (e.g. abortion and divorce)."
					},
					{
						"t": "p",
						"x": "1973: UK joined the EEC"
					},
					{
						"t": "p",
						"x": "1998: Good Friday Agreement led to establishment of Northern Irish parliament"
					},
					{
						"t": "p",
						"x": "1999: Scottish parliament & Welsh assembly established"
					},
					{
						"t": "p",
						"x": "6.2.4 Battles and wars"
					},
					{
						"t": "p",
						"x": "1066: William of Normandy conquered England at Battle of Hastings"
					},
					{
						"t": "p",
						"x": "(Bayeux Tapestry)"
					},
					{
						"t": "p",
						"x": "1314: Battle of Bannockburn. Scottish King Robert the Bruce defeated the English."
					},
					{
						"t": "p",
						"x": "1455: War of the Roses. Civil war between House of Lancaster (red rose) and House of York (white rose) to determine who should be king of"
					},
					{
						"t": "p",
						"x": "England. Ended at Battle of Bosworth Field (1485). Henry Tudor of"
					},
					{
						"t": "p",
						"x": "House of Lancaster became King Henry VII and married Elizabeth of"
					},
					{
						"t": "p",
						"x": "York, uniting the two families as the House of Tudor (red rose with a white rose inside)."
					},
					{
						"t": "p",
						"x": "Last of the Welsh rebellions had been defeated by mid-15th century."
					},
					{
						"t": "p",
						"x": "1588: Spanish Armada was defeated under Elizabeth I"
					},
					{
						"t": "p",
						"x": "1640: Beginning of English Civil War. Parliament (supporters:"
					},
					{
						"t": "p",
						"x": "Roundheads) vs the King (Cavaliers). Charles I introduced Prayer Book;"
					},
					{
						"t": "p",
						"x": "Parliament, made of Puritans, didn’t back him. King’s army defeated at"
					},
					{
						"t": "p",
						"x": "Battles of Marston Moor and Naseby. King Charles I executed."
					},
					{
						"t": "p",
						"x": "1776: American colonies declare independence over taxation."
					},
					{
						"t": "p",
						"x": "1805: Battle of Trafalgar. Lord Horatio Nelson (of Nelson’s Column) defeated French (Napoleon) + Spanish fleet."
					},
					{
						"t": "p",
						"x": "1815: Battle of Waterloo. Lord Wellington defeated Napoleon."
					},
					{
						"t": "p",
						"x": "1889-1902: Boer War in South Africa."
					},
					{
						"t": "p",
						"x": "1916: Battle of the Somme WW1. British forces suffered 60,000 causalities on the first day."
					},
					{
						"t": "p",
						"x": "1918: WWI ended at 11.00 on 11/11."
					},
					{
						"t": "p",
						"x": "1939: German invasion of Poland led UK and France to declare war on"
					},
					{
						"t": "p",
						"x": "Germany"
					},
					{
						"t": "p",
						"x": "1940 (WWII): Evacuation of Dunkirk. Rescue of 300,000 men by volunteers and small boats."
					},
					{
						"t": "p",
						"x": "1940 (WWII): Battle of Britain. German/British aerial battle."
					},
					{
						"t": "p",
						"x": "1982: Argentina invaded Falkland Islands"
					},
					{
						"t": "p",
						"x": "6.2.5 Key events"
					},
					{
						"t": "p",
						"x": "1348: Black Death. Killed over 1/3 of Britain. Fewer people meant less need for cereal crops as well as labour shortages, then increased wages."
					},
					{
						"t": "p",
						"x": "Movement into cities and towns. Gentry (landowners of large plots) and middle class developed."
					},
					{
						"t": "p",
						"x": "1400: English became preferred language of courts and official documents."
					},
					{
						"t": "p",
						"x": "1660: The Restoration (of the monarchy). Charles (King of Scotland) invited to come back as King Charles II after Oliver Cromwell’s death."
					},
					{
						"t": "p",
						"x": "1665: Great Plague"
					},
					{
						"t": "p",
						"x": "Glorious Revolution (1688): English Protestants asked Mary’s husband"
					},
					{
						"t": "p",
						"x": "William of Orange (of the Netherlands) to proclaim himself king, as didn’t want a Catholic king. He faced no resistance."
					},
					{
						"t": "p",
						"x": "During Queen Elizabeth I’s reign, English settlers began to move to"
					},
					{
						"t": "p",
						"x": "North American colonies."
					},
					{
						"t": "p",
						"x": "6.2.6 People"
					},
					{
						"t": "p",
						"x": "Sir Robert Walpole: first PM (1721-1742) as King George I (a German) relied heavily on ministers because of his poor English"
					},
					{
						"t": "p",
						"x": "Oliver Cromwell: titled Lord Protector (circa 1640s-1650s) and led"
					},
					{
						"t": "p",
						"x": "Britain whilst it was without a monarch"
					},
					{
						"t": "p",
						"x": "King Alfred the Great united the Anglo-Saxon kingdoms of England and defeated the Vikings."
					},
					{
						"t": "p",
						"x": "Isambard Kingdom Brunel: engineer (bridges, trains, tunnels, ships)"
					},
					{
						"t": "p",
						"x": "Dylan Thomas: Welsh poet (“Under Milk Wood” & “Do Not Go Gentle into that Good Night”)"
					},
					{
						"t": "p",
						"x": "Robert Burns: Scottish poet (“The Bard”), Auld Lang Syne"
					},
					{
						"t": "p",
						"x": "Richard Arkwright: Efficient and profitable factory owner during"
					},
					{
						"t": "p",
						"x": "Industrial Revolution"
					},
					{
						"t": "p",
						"x": "Sake Dean Mahomet: set up first curry house in Britain and introduced shampooing"
					},
					{
						"t": "p",
						"x": "Florence Nightingale: founder of modern nursing"
					},
					{
						"t": "p",
						"x": "Emmeline Pankhurst: Suffrage leader"
					},
					{
						"t": "p",
						"x": "Rudyard Kipling: Indian-born author and poet. Work reflected idea that"
					},
					{
						"t": "p",
						"x": "British empire was a force for good."
					},
					{
						"t": "p",
						"x": "George and Robert Stevenson: famous pioneers of railway engines"
					},
					{
						"t": "p",
						"x": "St Columba & St Augustine: led missionaries from Rome."
					},
					{
						"t": "p",
						"x": "Sir Francis Drake: Elizabethan sailor who helped defeat Spanish Armada and who later sailed around the world."
					},
					{
						"t": "p",
						"x": "Hugunots: French Protestants feeling prosecution settled in England pre-1720"
					},
					{
						"t": "p",
						"x": "Henry VIII: famous for marrying 6 times and breaking away from"
					},
					{
						"t": "p",
						"x": "Church of Rome so he could get a divorce. Wales was united with"
					},
					{
						"t": "p",
						"x": "England under his rule. Wives (in order): (1) Catherine of Aragon (2)"
					},
					{
						"t": "p",
						"x": "Anne Boleyn (3) Jane Seymour (4) Anne of Cleves (5) Catherine Howard"
					},
					{
						"t": "p",
						"x": "(6) Catherine Parr"
					},
					{
						"t": "p",
						"x": "Margaret Thatcher was first female PM and the longest serving PM of the"
					},
					{
						"t": "p",
						"x": "20th century."
					},
					{
						"t": "p",
						"x": "Alexander Fleming: Scottish doctor who discovered penicillin (1928)"
					},
					{
						"t": "p",
						"x": "Clement Attlee: Churchill’s Deputy PM. Became PM in 1945."
					},
					{
						"t": "p",
						"x": "Nationalised major industries and created NHS."
					},
					{
						"t": "p",
						"x": "Mary Peters: Olympic athlete who promoted sport and tourism in"
					},
					{
						"t": "p",
						"x": "Northern Ireland."
					},
					{
						"t": "p",
						"x": "Roald Dahl: Welsh author (“Charlie and the Chocolate Factory” &"
					},
					{
						"t": "p",
						"x": "“George’s Marvellous Medicine”)."
					},
					{
						"t": "p",
						"x": "Sir Arthur Conan Doyle: Scottish author (“Sherlock Holmes”)"
					}
				]
			}]
		}
	]
};
var facts_default = /*#__PURE__*/ JSON.parse("[{\"t\":\"values\",\"q\":\"How many questions are there in the Life in the UK test?\",\"a\":\"24 questions\",\"d\":[\"12 questions\",\"33 questions\",\"50 questions\"],\"s\":\"24 questions\"},{\"t\":\"values\",\"q\":\"What are the test questions based on?\",\"a\":\"ALL parts of the handbook\",\"d\":[\"Only the history chapter\",\"Only chapters 4 and 5\",\"Only the summary of key facts\"],\"s\":\"ALL parts of the handbook\"},{\"t\":\"values\",\"q\":\"What level of English do the Life in the UK test questions require?\",\"a\":\"ESOL Entry Level 3\",\"d\":[\"ESOL Entry Level 1\",\"GCSE English\",\"University-level English\"],\"s\":\"ESOL Entry Level 3\"},{\"t\":\"values\",\"q\":\"From October 2013, what English evidence is needed for settlement alongside the test?\",\"a\":\"Speaking and listening skills at B1 of the Common European Framework of Reference\",\"d\":[\"Speaking and listening skills at A2 of the Common European Framework of Reference\",\"C1 of the Common European Framework\",\"No English evidence is needed\"],\"s\":\"Speaking and listening skills at B1 of the Common European Framework of Reference\"},{\"t\":\"values\",\"q\":\"Name the five fundamental principles of British life.\",\"a\":\"Democracy; the rule of law; individual liberty; tolerance of those with different faiths and beliefs; participation in community life\",\"d\":[\"Democracy; monarchy; free trade; low taxes; strong armed forces\",\"Equality; fraternity; liberty; justice; charity\",\"Democracy; socialism; individual liberty; religious unity; patriotism\"],\"s\":\"Democracy; the rule of law; individual liberty; tolerance of those with different faiths and beliefs; participation in community life\"},{\"t\":\"values\",\"q\":\"In the citizenship pledge, new citizens promise to give their loyalty to what?\",\"a\":\"The United Kingdom, and respect its rights and freedoms\",\"d\":[\"The King personally, and his heirs\",\"The Church of England\",\"The British Empire\"],\"s\":\"The United Kingdom\"},{\"t\":\"values\",\"q\":\"According to the handbook, what has no place in British society?\",\"a\":\"Extremism or intolerance\",\"d\":[\"Religious diversity\",\"Political debate\",\"Immigration\"],\"s\":\"Extremism or intolerance\"},{\"t\":\"values\",\"q\":\"Which of these is a responsibility you should respect as a permanent resident or citizen?\",\"a\":\"Look after the area in which you live and the environment\",\"d\":[\"Attend church every week\",\"Join a political party\",\"Serve in the armed forces\"],\"s\":\"Look after the area in which you live and the environment\"},{\"t\":\"values\",\"q\":\"Which of these freedoms does the UK offer in return for its residents' responsibilities?\",\"a\":\"A right to a fair trial\",\"d\":[\"A right to free housing\",\"A guaranteed job\",\"Freedom from all taxation\"],\"s\":\"A right to a fair trial\"},{\"t\":\"values\",\"q\":\"Who normally must pass the Life in the UK test to become permanent residents?\",\"a\":\"People here on work visas, including those on Tier 1 and Tier 2 of the points-based system\",\"d\":[\"Only refugees\",\"Only students\",\"Only people from outside Europe, because EU citizens are exempt from the Life in the UK test for settlement\"],\"s\":\"People here on work visas, including those on Tier 1 and Tier 2 of the points-based system\"},{\"t\":\"values\",\"q\":\"What should you do if your standard of English is below ESOL Entry Level 3?\",\"a\":\"Pass an ESOL course in English with Citizenship, with a test at the end\",\"d\":[\"Take the test in your own language\",\"Apply for an exemption\",\"Wait five more years\"],\"s\":\"Pass an ESOL course in English with Citizenship, with a test at the end\"},{\"t\":\"uk-nations\",\"q\":\"Which countries make up the UK?\",\"a\":\"England, Scotland, Wales and Northern Ireland\",\"d\":[\"England, Scotland and Wales only\",\"England, Scotland, Wales and Ireland\",\"England and Wales only\"],\"s\":\"England, Scotland, Wales and Northern Ireland\"},{\"t\":\"uk-nations\",\"q\":\"What is the official name of the country?\",\"a\":\"The United Kingdom of Great Britain and Northern Ireland\",\"d\":[\"The United Kingdom of Britain and Ireland\",\"Great Britain and Ireland\",\"The British Isles\"],\"s\":\"The United Kingdom of Great Britain and Northern Ireland\"},{\"t\":\"uk-nations\",\"q\":\"What does 'Great Britain' refer to?\",\"a\":\"Only England, Scotland and Wales, not Northern Ireland\",\"d\":[\"England, Scotland, Wales and Northern Ireland\",\"England and Wales only\",\"The whole of the British Isles including Ireland\"],\"s\":\"Only England, Scotland and Wales, not Northern Ireland\"},{\"t\":\"uk-nations\",\"q\":\"What are the Channel Islands and the Isle of Man called?\",\"a\":\"Crown dependencies — closely linked with the UK but not part of it\",\"d\":[\"British overseas territories\",\"Counties of England\",\"Independent members of the EU\"],\"s\":\"Crown dependencies\"},{\"t\":\"uk-nations\",\"q\":\"St Helena and the Falkland Islands are examples of what?\",\"a\":\"British overseas territories linked to the UK but not part of it\",\"d\":[\"Crown dependencies\",\"Countries of the UK\",\"Commonwealth republics\"],\"s\":\"British overseas territories\"},{\"t\":\"uk-nations\",\"q\":\"What is the status of the rest of Ireland (outside Northern Ireland)?\",\"a\":\"An independent country\",\"d\":[\"A Crown dependency\",\"Part of the UK\",\"A British overseas territory\"],\"s\":\"An independent country\"},{\"t\":\"uk-nations\",\"q\":\"Where does the parliament that governs the UK sit?\",\"a\":\"Westminster\",\"d\":[\"Whitehall\",\"Windsor\",\"Stormont\"],\"s\":\"Westminster\"},{\"t\":\"uk-nations\",\"q\":\"What do Scotland, Wales and Northern Ireland have?\",\"a\":\"Parliaments or assemblies of their own, with devolved powers in defined areas\",\"d\":[\"No governing bodies of their own\",\"Full independence from Westminster\",\"Only ceremonial councils\"],\"s\":\"Parliaments or assemblies of their own, with devolved powers in defined areas\"},{\"t\":\"early-britain\",\"q\":\"What were the first people to live in Britain?\",\"a\":\"Hunter-gatherers, in what we call the Stone Age\",\"d\":[\"Farmers, in the Bronze Age\",\"Romans\",\"Anglo-Saxons\"],\"s\":\"Hunter-gatherers\"},{\"t\":\"early-britain\",\"q\":\"When did Britain become permanently separated from the continent by the Channel?\",\"a\":\"About 10,000 years ago\",\"d\":[\"About 1,000 years ago\",\"About 100,000 years ago\",\"About 2,000 years ago\"],\"s\":\"About 10,000 years ago\"},{\"t\":\"early-britain\",\"q\":\"What is Stonehenge and where is it?\",\"a\":\"A Stone Age monument in the English county of Wiltshire\",\"d\":[\"A Roman fort in Scotland\",\"A Bronze Age village in Wales\",\"A Viking burial site in Yorkshire\"],\"s\":\"A Stone Age monument in the English county of Wiltshire\"},{\"t\":\"early-britain\",\"q\":\"What is Skara Brae?\",\"a\":\"The best preserved prehistoric village in northern Europe, on Orkney, off the north coast of Scotland\",\"d\":[\"The best preserved Roman town in northern Europe, on the south coast of England near Dover\",\"A castle in Wales\",\"A monastery in Ireland\"],\"s\":\"The best preserved prehistoric village in northern Europe, on Orkney, off the north coast of Scotland\"},{\"t\":\"early-britain\",\"q\":\"How did people live in the Bronze Age?\",\"a\":\"In roundhouses, and they buried their dead in tombs called round barrows\",\"d\":[\"In stone castles\",\"In Roman villas\",\"In longhouses with thatched halls\"],\"s\":\"In roundhouses\"},{\"t\":\"early-britain\",\"q\":\"What language did people speak in the Iron Age?\",\"a\":\"A language from the Celtic language family\",\"d\":[\"Latin\",\"An early form of Anglo-Saxon brought over by settlers from northern Europe\",\"Old Norse\"],\"s\":\"A language from the Celtic language family\"},{\"t\":\"early-britain\",\"q\":\"What happened for the first time in the Iron Age in Britain?\",\"a\":\"The people made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings\",\"d\":[\"The first books were written\",\"The first paved roads were built, linking the hill forts to the coastal trading settlements\",\"The first churches were built\"],\"s\":\"The people made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings\"},{\"t\":\"early-britain\",\"q\":\"Who led a Roman invasion of Britain in 55 BC that was unsuccessful?\",\"a\":\"Julius Caesar\",\"d\":[\"Emperor Claudius\",\"Emperor Hadrian\",\"Boudicca\"],\"s\":\"Julius Caesar\"},{\"t\":\"early-britain\",\"q\":\"When did the Romans successfully invade Britain, and under which emperor?\",\"a\":\"In AD 43, under the Emperor Claudius\",\"d\":[\"In 55 BC, under Julius Caesar\",\"In AD 410, under Hadrian\",\"In AD 600, under Constantine\"],\"s\":\"In AD 43, under the Emperor Claudius\"},{\"t\":\"early-britain\",\"q\":\"Who was Boudicca?\",\"a\":\"A queen of the Iceni tribe who fought against the Romans; there is a statue of her on Westminster Bridge in London\",\"d\":[\"A Saxon queen who fought against the Vikings; her statue stands at the entrance to the Tower of London\",\"The first Christian queen of Britain\",\"A Norman princess\"],\"s\":\"A queen of the Iceni tribe who fought against the Romans; there is a statue of her on Westminster Bridge in London\"},{\"t\":\"early-britain\",\"q\":\"Why was Hadrian's Wall built?\",\"a\":\"On the orders of the Roman Emperor Hadrian, to keep out the Picts (ancestors of the Scottish people)\",\"d\":[\"To keep out the Vikings\",\"To mark the border with Wales\",\"To defend against the Normans\"],\"s\":\"On the orders of the Roman Emperor Hadrian\"},{\"t\":\"early-britain\",\"q\":\"Which forts on Hadrian's Wall can still be visited?\",\"a\":\"Housesteads and Vindolanda\",\"d\":[\"Conwy and Caernarvon\",\"Dover and Portchester\",\"Edinburgh and Stirling\"],\"s\":\"Housesteads and Vindolanda\"},{\"t\":\"early-britain\",\"q\":\"How long did the Romans remain in Britain?\",\"a\":\"400 years (they ruled from AD 43 to 410)\",\"d\":[\"100 years\",\"200 years\",\"600 years\"],\"s\":\"400 years\"},{\"t\":\"early-britain\",\"q\":\"When did the first Christian communities begin to appear in Britain?\",\"a\":\"During the 3rd and 4th centuries AD\",\"d\":[\"During the 1st century BC\",\"After the Norman Conquest\",\"In the 7th century AD\"],\"s\":\"During the 3rd and 4th centuries AD\"},{\"t\":\"early-britain\",\"q\":\"Which tribes invaded Britain after the Romans left?\",\"a\":\"The Jutes, the Angles and the Saxons, from northern Europe\",\"d\":[\"The Picts, the Gauls and the Franks\",\"The Danes and the Normans\",\"The Celts and the Iberians\"],\"s\":\"The Jutes, the Angles and the Saxons, from northern Europe\"},{\"t\":\"early-britain\",\"q\":\"By about which year were Anglo-Saxon kingdoms established in Britain?\",\"a\":\"By about AD 600\",\"d\":[\"By AD 43\",\"By AD 1066\",\"By AD 900\"],\"s\":\"By about AD 600\"},{\"t\":\"early-britain\",\"q\":\"What was found at Sutton Hoo in Suffolk?\",\"a\":\"The burial place of one of the Anglo-Saxon kings, buried with treasure and armour in a ship covered by a mound of earth\",\"d\":[\"A Roman amphitheatre\",\"A Viking longship, buried with weapons and treasure, that carried raiders up the rivers of East Anglia\",\"Stone Age cave paintings\"],\"s\":\"The burial place of one of the Anglo-Saxon kings, buried with treasure and armour in a ship covered by a mound of earth\"},{\"t\":\"early-britain\",\"q\":\"Who were St Columba and St Augustine?\",\"a\":\"Missionaries who came to Britain to preach about Christianity — Columba in what is now Scotland, Augustine in the south of England\",\"d\":[\"Roman generals\",\"Anglo-Saxon kings\",\"Viking leaders who converted to Christianity\"],\"s\":\"Missionaries who came to Britain to preach about Christianity\"},{\"t\":\"early-britain\",\"q\":\"St Augustine became the first Archbishop of where?\",\"a\":\"Canterbury\",\"d\":[\"York\",\"London\",\"Winchester\"],\"s\":\"Canterbury\"},{\"t\":\"early-britain\",\"q\":\"Where did the Vikings come from?\",\"a\":\"Denmark and Norway\",\"d\":[\"Germany and France\",\"Sweden and Finland\",\"Iceland and Ireland\"],\"s\":\"Denmark and Norway\"},{\"t\":\"early-britain\",\"q\":\"When did the Vikings first visit Britain?\",\"a\":\"In AD 789, to raid coastal towns and take away goods and slaves\",\"d\":[\"In AD 43\",\"In AD 1066\",\"In AD 600\"],\"s\":\"In AD 789\"},{\"t\":\"early-britain\",\"q\":\"Which king defeated the Vikings and united the Anglo-Saxon kingdoms of England?\",\"a\":\"King Alfred the Great\",\"d\":[\"King Harold\",\"King Kenneth MacAlpin\",\"King Canute\"],\"s\":\"King Alfred the Great\"},{\"t\":\"early-britain\",\"q\":\"What is the area of the east and north of England where Viking languages and customs dominated called?\",\"a\":\"The Danelaw — many place names there, such as Grimsby and Scunthorpe, come from the Viking languages\",\"d\":[\"The Pale\",\"Wessex\",\"Northumbria\"],\"s\":\"The Danelaw\"},{\"t\":\"early-britain\",\"q\":\"Who united the tribes in the north of what is now Scotland against Viking attack?\",\"a\":\"Kenneth MacAlpin — the term Scotland began to be used to describe that country\",\"d\":[\"Robert the Bruce\",\"William Wallace\",\"Alfred the Great\"],\"s\":\"Kenneth MacAlpin\"},{\"t\":\"early-britain\",\"q\":\"What happened at the Battle of Hastings in 1066?\",\"a\":\"William, the Duke of Normandy, defeated Harold, the Saxon king of England; Harold was killed in the battle\",\"d\":[\"The Vikings under King Canute defeated the Anglo-Saxons, and Harold fled into exile in Normandy\",\"The Romans left Britain\",\"The Scots defeated the English\"],\"s\":\"William, the Duke of Normandy, defeated Harold, the Saxon king of England; Harold was killed in the battle\"},{\"t\":\"early-britain\",\"q\":\"What is the Bayeux Tapestry?\",\"a\":\"An embroidery, still displayed in France today, that commemorates the Battle of Hastings\",\"d\":[\"A Norman law book, still kept in France today, recording the laws William introduced after the Conquest\",\"A Viking treasure\",\"A royal crown\"],\"s\":\"An embroidery, still displayed in France today, that commemorates the Battle of Hastings\"},{\"t\":\"early-britain\",\"q\":\"What was the Domesday Book?\",\"a\":\"A list William the Conqueror had made of all the towns and villages, showing who owned the land and what animals they owned\",\"d\":[\"A book of church law\",\"A history of the Norman kings, written by monks to record the deeds of William the Conqueror and his sons\",\"A collection of Anglo-Saxon poems\"],\"s\":\"A list William the Conqueror had made of all the towns and villages, showing who owned the land and what animals they owned\"},{\"t\":\"early-britain\",\"q\":\"What was the last successful foreign invasion of England?\",\"a\":\"The Norman Conquest in 1066\",\"d\":[\"The Viking raids of AD 789\",\"The Spanish Armada in 1588\",\"The Glorious Revolution in 1688\"],\"s\":\"The Norman Conquest in 1066\"},{\"t\":\"middle-ages\",\"q\":\"What period do we call the Middle Ages?\",\"a\":\"The period from the Norman Conquest (1066) up until about 1485 — a period of almost constant war\",\"d\":[\"AD 43 to 410\",\"The period from the Roman invasion (AD 43) up until the Norman Conquest of 1066\",\"1603 to 1714\"],\"s\":\"The period from the Norman Conquest (1066) up until about 1485\"},{\"t\":\"middle-ages\",\"q\":\"What were the Crusades?\",\"a\":\"Wars in which European Christians fought for control of the Holy Land\",\"d\":[\"Wars between England and Scotland\",\"Peasant uprisings in England\",\"Viking invasions of Britain\"],\"s\":\"Wars in which European Christians fought for control of the Holy Land\"},{\"t\":\"middle-ages\",\"q\":\"What happened at the Battle of Bannockburn in 1314?\",\"a\":\"The Scottish king Robert the Bruce defeated the English, and Scotland remained unconquered by the English\",\"d\":[\"The English conquered Scotland\",\"The Vikings defeated the Scots\",\"Wales was annexed to England\"],\"s\":\"The Scottish king Robert the Bruce defeated the English\"},{\"t\":\"middle-ages\",\"q\":\"What did the Statute of Rhuddlan do in 1284?\",\"a\":\"It annexed Wales to the Crown of England, under King Edward I\",\"d\":[\"It united England and Scotland\",\"It gave Ireland independence\",\"It created the first English Parliament\"],\"s\":\"It annexed Wales to the Crown of England, under King Edward I\"},{\"t\":\"middle-ages\",\"q\":\"What did the English kings build in Wales to maintain their power?\",\"a\":\"Huge castles, including Conwy and Caernarvon, many of which still stand today\",\"d\":[\"Cathedrals in every town\",\"A great stone wall along the border with England, long stretches of which can still be visited today\",\"New universities\"],\"s\":\"Huge castles, including Conwy and Caernarvon, many of which still stand today\"},{\"t\":\"middle-ages\",\"q\":\"By which year were the last Welsh rebellions defeated?\",\"a\":\"By 1415, and English laws and the English language were then introduced in Wales\",\"d\":[\"By 1284\",\"By 1066\",\"By 1485\"],\"s\":\"By 1415\"},{\"t\":\"middle-ages\",\"q\":\"What was 'the Pale' in Ireland?\",\"a\":\"The area around Dublin ruled by the English — elsewhere Irish chieftains and lords ruled\",\"d\":[\"A wall built to keep out the Irish\",\"The Irish parliament\",\"An area ruled by the Vikings\"],\"s\":\"The area around Dublin ruled by the English\"},{\"t\":\"middle-ages\",\"q\":\"What was the Hundred Years War?\",\"a\":\"A long period of war between England and France that actually lasted 116 years\",\"d\":[\"A war between England and Scotland\",\"A civil war in England\",\"A war between England and Spain\"],\"s\":\"A long period of war between England and France that actually lasted 116 years\"},{\"t\":\"middle-ages\",\"q\":\"What happened at the Battle of Agincourt in 1415?\",\"a\":\"King Henry V's vastly outnumbered English army defeated the French\",\"d\":[\"The French defeated the English\",\"The Scots defeated the English\",\"The English left France\"],\"s\":\"King Henry V's vastly outnumbered English army defeated the French\"},{\"t\":\"middle-ages\",\"q\":\"When did the English leave France?\",\"a\":\"In the 1450s\",\"d\":[\"In 1415\",\"In 1066\",\"In the 1550s\"],\"s\":\"In the 1450s\"},{\"t\":\"middle-ages\",\"q\":\"What was the Black Death and when did it come to Britain?\",\"a\":\"A form of plague that came to Britain in 1348 and killed over one third of the population of England, Wales and Scotland\",\"d\":[\"A famine in 1348 that killed one tenth of the population\",\"A war that began in 1348\",\"A plague in 1665 that killed half of London\"],\"s\":\"A form of plague that came to Britain in 1348 and killed over one third of the population of England, Wales and Scotland\"},{\"t\":\"middle-ages\",\"q\":\"What social changes followed the Black Death?\",\"a\":\"Labour shortages led to higher wages, people moved into towns, and new social classes appeared, including owners of large areas of land (later called the gentry) and a strong middle class\",\"d\":[\"Wages fell and towns emptied permanently\",\"The feudal system was strengthened\",\"The monarchy was abolished\"],\"s\":\"Labour shortages led to higher wages, people moved into towns\"},{\"t\":\"middle-ages\",\"q\":\"What was Magna Carta and when was it signed?\",\"a\":\"A charter of rights agreed by King John in 1215 — it limited the power of the king and protected the rights of the nobility\",\"d\":[\"A law of 1215 that gave all men the vote\",\"A peace treaty with France in 1415\",\"A church law of 1066\"],\"s\":\"A charter of rights agreed by King John in 1215\"},{\"t\":\"middle-ages\",\"q\":\"What did Parliament develop into in England during the Middle Ages?\",\"a\":\"Two Houses: the House of Lords (nobility, great landowners and bishops) and the House of Commons (knights and wealthy people from towns and cities)\",\"d\":[\"A single chamber of judges\",\"A single council of church leaders and royal judges that advised the king on taxes but could not pass laws\",\"An assembly elected by all adults\"],\"s\":\"Two Houses: the House of Lords (nobility, great landowners and bishops) and the House of Commons (knights and wealthy people from towns and cities)\"},{\"t\":\"middle-ages\",\"q\":\"In Scotland, how many Houses did Parliament have in the Middle Ages?\",\"a\":\"Three Houses, called Estates: the lords, the commons and the clergy\",\"d\":[\"Two Houses, like England\",\"One House\",\"Four Houses\"],\"s\":\"Three Houses, called Estates\"},{\"t\":\"middle-ages\",\"q\":\"By about 1400, what language was preferred in the royal courts and official documents in England?\",\"a\":\"English — a combination of Norman French and Anglo-Saxon\",\"d\":[\"Latin\",\"Norman French\",\"Welsh\"],\"s\":\"English\"},{\"t\":\"middle-ages\",\"q\":\"Who wrote The Canterbury Tales?\",\"a\":\"Geoffrey Chaucer — a series of poems about people travelling to Canterbury on a pilgrimage\",\"d\":[\"William Shakespeare\",\"William Caxton\",\"John Barbour\"],\"s\":\"Geoffrey Chaucer\"},{\"t\":\"middle-ages\",\"q\":\"Who was the first person in England to print books using a printing press?\",\"a\":\"William Caxton — The Canterbury Tales was one of the first books he printed\",\"d\":[\"Geoffrey Chaucer\",\"Johannes Gutenberg\",\"Sir Isaac Newton\"],\"s\":\"William Caxton\"},{\"t\":\"middle-ages\",\"q\":\"What were the Wars of the Roses?\",\"a\":\"A civil war begun in 1455 to decide who should be king of England, fought between the House of Lancaster (red rose) and the House of York (white rose)\",\"d\":[\"A series of wars between England and France, begun in 1455, over who should inherit the French crown\",\"A rebellion of peasants against the king\",\"Wars between England and Scotland\"],\"s\":\"A civil war begun in 1455 to decide who should be king of England, fought between the House of Lancaster (red rose) and the House of York (white rose)\"},{\"t\":\"middle-ages\",\"q\":\"How did the Wars of the Roses end?\",\"a\":\"At the Battle of Bosworth Field in 1485: King Richard III of the House of York was killed and Henry Tudor became King Henry VII\",\"d\":[\"At the Battle of Agincourt in 1415\",\"With the signing of Magna Carta\",\"At the Battle of Bannockburn\"],\"s\":\"At the Battle of Bosworth Field in 1485\"},{\"t\":\"middle-ages\",\"q\":\"What symbol did the House of Tudor adopt?\",\"a\":\"A red rose with a white rose inside it, as a sign that the Houses of York and Lancaster were now allies\",\"d\":[\"A golden lion\",\"A white dragon\",\"A crowned thistle\"],\"s\":\"A red rose with a white rose inside it\"},{\"t\":\"tudors-stuarts\",\"q\":\"What is Henry VIII most famous for?\",\"a\":\"Breaking away from the Church of Rome and marrying six times\",\"d\":[\"Defeating the Spanish Armada\",\"Uniting England and Scotland\",\"Winning the Hundred Years War\"],\"s\":\"Breaking away from the Church of Rome and marrying six times\"},{\"t\":\"tudors-stuarts\",\"q\":\"Who was Henry VIII's first wife and what happened to her?\",\"a\":\"Catherine of Aragon, a Spanish princess — Henry divorced her when she was too old to give him another child; their surviving child was Mary\",\"d\":[\"Anne Boleyn — she was executed\",\"Jane Seymour — she died after childbirth\",\"Catherine Parr — she survived him\"],\"s\":\"Catherine of Aragon, a Spanish princess\"},{\"t\":\"tudors-stuarts\",\"q\":\"What happened to Anne Boleyn?\",\"a\":\"She was accused of taking lovers and executed at the Tower of London; she and Henry had one daughter, Elizabeth\",\"d\":[\"She died shortly after giving birth to the son Henry wanted, and was buried at Westminster Abbey\",\"Henry divorced her for political reasons\",\"She survived Henry and married again\"],\"s\":\"She was accused of taking lovers and executed at the Tower of London; she and Henry had one daughter, Elizabeth\"},{\"t\":\"tudors-stuarts\",\"q\":\"Which wife gave Henry VIII the son he wanted?\",\"a\":\"Jane Seymour — the son was Edward, but Jane died shortly after the birth\",\"d\":[\"Catherine of Aragon\",\"Anne of Cleves\",\"Catherine Howard\"],\"s\":\"Jane Seymour\"},{\"t\":\"tudors-stuarts\",\"q\":\"Why did Henry VIII establish the Church of England?\",\"a\":\"The Pope refused to approve his divorce from Catherine of Aragon, so Henry created a Church where the king, not the Pope, had power to appoint bishops and order how people should worship\",\"d\":[\"He wanted to become a Protestant reformer\",\"Parliament forced him to\",\"The Pope excommunicated the whole of England first\"],\"s\":\"The Pope refused to approve his divorce from Catherine of Aragon\"},{\"t\":\"tudors-stuarts\",\"q\":\"What was the Reformation?\",\"a\":\"A movement against the authority of the Pope and the ideas and practices of the Roman Catholic Church, which formed Protestant ideas across Europe\",\"d\":[\"The restoration of the monarchy\",\"A movement to reform Parliament and extend the vote to ordinary people across Protestant Europe\",\"The reform of the voting system\"],\"s\":\"A movement against the authority of the Pope and the ideas and practices of the Roman Catholic Church\"},{\"t\":\"tudors-stuarts\",\"q\":\"During whose reign was Wales formally united with England?\",\"a\":\"Henry VIII's — by the Act for the Government of Wales; Welsh representatives were sent to the House of Commons\",\"d\":[\"Elizabeth I's\",\"Henry VII's\",\"James I's\"],\"s\":\"Henry VIII's\"},{\"t\":\"tudors-stuarts\",\"q\":\"What is Edward VI remembered for?\",\"a\":\"The Book of Common Prayer, written during his reign for the Church of England; he was strongly Protestant and died at 15\",\"d\":[\"Defeating the Armada\",\"Marrying six times\",\"Restoring the Catholic religion in England and ordering a new Latin prayer book for every parish church\"],\"s\":\"The Book of Common Prayer, written during his reign for the Church of England; he was strongly Protestant and died at 15\"},{\"t\":\"tudors-stuarts\",\"q\":\"Why was Queen Mary known as 'Bloody Mary'?\",\"a\":\"She was a devout Catholic who persecuted Protestants for their religious beliefs\",\"d\":[\"She executed her own sisters\",\"She led England into a bloody war with France\",\"She suppressed a rebellion in Ireland\"],\"s\":\"She was a devout Catholic who persecuted Protestants for their religious beliefs\"},{\"t\":\"tudors-stuarts\",\"q\":\"Who became queen after Mary's death?\",\"a\":\"Her half-sister Elizabeth, daughter of Henry VIII and Anne Boleyn\",\"d\":[\"Mary, Queen of Scots\",\"Lady Jane Grey\",\"Queen Anne\"],\"s\":\"Her half-sister Elizabeth\"},{\"t\":\"tudors-stuarts\",\"q\":\"What happened to the Spanish Armada in 1588?\",\"a\":\"Elizabeth I's English fleet defeated the large Spanish fleet sent to conquer England and restore Catholicism\",\"d\":[\"It successfully invaded England\",\"It was destroyed by the French navy before it could reach England, ending Spain's war with France\",\"It conquered Ireland\"],\"s\":\"Elizabeth I's English fleet defeated the large Spanish fleet sent to conquer England and restore Catholicism\"},{\"t\":\"tudors-stuarts\",\"q\":\"Who was Mary, Queen of Scots?\",\"a\":\"The Catholic queen of Scotland — she fled to England, was held prisoner by Elizabeth I for 20 years, and was executed for plotting against Elizabeth\",\"d\":[\"Elizabeth I's daughter\",\"Henry VIII's fourth wife\",\"The Protestant queen of Ireland\"],\"s\":\"The Catholic queen of Scotland\"},{\"t\":\"tudors-stuarts\",\"q\":\"What was the Elizabethan period known for?\",\"a\":\"A growing sense of English patriotism, expanded trade, and rich poetry and drama\",\"d\":[\"Civil war and plague\",\"The Industrial Revolution\",\"Religious persecution of Protestants\"],\"s\":\"A growing sense of English patriotism, expanded trade\"},{\"t\":\"tudors-stuarts\",\"q\":\"Who was Sir Francis Drake?\",\"a\":\"One of the commanders in the defeat of the Spanish Armada and one of the founders of England's naval tradition; his ship, the Golden Hind, was one of the first to sail right around the world\",\"d\":[\"The first Archbishop of Canterbury\",\"A playwright at Elizabeth's court\",\"The founder of the Royal Society and the first Englishman to map the coasts of the New World for Queen Elizabeth I\"],\"s\":\"One of the commanders in the defeat of the Spanish Armada and one of the founders of England's naval tradition; his ship, the Golden Hind, was one of the first to sail right around the world\"},{\"t\":\"tudors-stuarts\",\"q\":\"Where was William Shakespeare born?\",\"a\":\"In Stratford-upon-Avon, in 1564\",\"d\":[\"In London, in 1564\",\"In Canterbury, in 1500\",\"In Oxford, in 1616\"],\"s\":\"In Stratford-upon-Avon, in 1564\"},{\"t\":\"tudors-stuarts\",\"q\":\"Which of these lines was coined by Shakespeare?\",\"a\":\"'To be or not to be' — from Hamlet\",\"d\":[\"'We shall fight on the beaches'\",\"'The lady's not for turning'\",\"'Do not go gentle into that good night'\"],\"s\":\"'To be or not to be'\"},{\"t\":\"tudors-stuarts\",\"q\":\"Who became King of England when Elizabeth I died in 1603?\",\"a\":\"Her cousin James VI of Scotland, who became King James I of England, Wales and Ireland — Elizabeth never married and had no children\",\"d\":[\"Charles I\",\"Henry Tudor\",\"William of Orange\"],\"s\":\"Her cousin James VI of Scotland\"},{\"t\":\"tudors-stuarts\",\"q\":\"What is the King James Bible?\",\"a\":\"A new translation of the Bible into English, also known as the Authorised Version, produced during James I's reign\",\"d\":[\"The first Bible printed in Latin\",\"A Catholic prayer book in Latin, ordered by James I for use in the churches of England and Scotland\",\"A history of the kings of England\"],\"s\":\"A new translation of the Bible into English, also known as the Authorised Version, produced during James I's reign\"},{\"t\":\"tudors-stuarts\",\"q\":\"What were the Plantations in Ireland under Elizabeth I and James I?\",\"a\":\"The English government took land from Catholic landholders and gave it to Protestant settlers from England and Scotland, especially in Ulster\",\"d\":[\"Farms set up to grow potatoes\",\"New towns built by the government to house Irish workers who had lost their farmland in the famine\",\"Monasteries established by the Church\"],\"s\":\"The English government took land from Catholic landholders and gave it to Protestant settlers from England and Scotland, especially in Ulster\"},{\"t\":\"tudors-stuarts\",\"q\":\"What did Charles I believe about the monarchy?\",\"a\":\"In the 'Divine Right of Kings' — that kings were directly appointed by God to rule\",\"d\":[\"That Parliament should control the king\",\"That the Church should choose kings\",\"That kings should be elected\"],\"s\":\"In the 'Divine Right of Kings'\"},{\"t\":\"tudors-stuarts\",\"q\":\"Why did war break out between Charles I and Scotland?\",\"a\":\"Charles introduced a revised Prayer Book and tried to impose it on the Presbyterian Church in Scotland, causing serious unrest\",\"d\":[\"The Scottish Parliament refused to pay taxes for the king's wars and expelled his bishops from Edinburgh\",\"Scotland allied with France\",\"Charles banned the Scottish Parliament\"],\"s\":\"Charles introduced a revised Prayer Book and tried to impose it on the Presbyterian Church in Scotland, causing serious unrest\"},{\"t\":\"tudors-stuarts\",\"q\":\"What were the two sides in the English Civil War called?\",\"a\":\"The king's supporters were the Cavaliers, and Parliament's supporters were the Roundheads\",\"d\":[\"The Whigs and the Tories\",\"The Yorkists and the Lancastrians\",\"The Jacobites and the Puritans\"],\"s\":\"The king's supporters were the Cavaliers\"},{\"t\":\"tudors-stuarts\",\"q\":\"At which battles was the king's army defeated in the Civil War?\",\"a\":\"The Battles of Marston Moor and Naseby\",\"d\":[\"Hastings and Bannockburn\",\"Trafalgar and Waterloo\",\"Dunbar and Worcester\"],\"s\":\"The Battles of Marston Moor and Naseby\"},{\"t\":\"tudors-stuarts\",\"q\":\"What happened to Charles I?\",\"a\":\"He was executed in 1649, and England declared itself a republic called the Commonwealth\",\"d\":[\"He escaped to France and died in exile\",\"He was imprisoned for life\",\"He abdicated in favour of his son\"],\"s\":\"He was executed in 1649\"},{\"t\":\"tudors-stuarts\",\"q\":\"What title was Oliver Cromwell given?\",\"a\":\"Lord Protector — he led England until his death, while Britain was without a king\",\"d\":[\"King of England\",\"Prime Minister\",\"Regent\"],\"s\":\"Lord Protector\"},{\"t\":\"tudors-stuarts\",\"q\":\"After which battles was Charles II defeated before escaping to Europe?\",\"a\":\"The Battles of Dunbar and Worcester — he famously hid in an oak tree on one occasion\",\"d\":[\"Marston Moor and Naseby\",\"Bosworth Field and Agincourt\",\"Culloden and Bannockburn\"],\"s\":\"The Battles of Dunbar and Worcester\"},{\"t\":\"tudors-stuarts\",\"q\":\"What was the Restoration?\",\"a\":\"In May 1660, Parliament invited Charles II to come back from exile in the Netherlands and he was crowned king — the monarchy was restored\",\"d\":[\"The rebuilding of London after the Great Fire\",\"The return of the Catholic Church to England in May 1660, after the death of Oliver Cromwell\",\"The restoration of Magna Carta\"],\"s\":\"In May 1660, Parliament invited Charles II to come back from exile in the Netherlands and he was crowned king\"},{\"t\":\"tudors-stuarts\",\"q\":\"What did the Habeas Corpus Act of 1679 guarantee?\",\"a\":\"That no one could be held prisoner unlawfully — every prisoner has a right to a court hearing\",\"d\":[\"Freedom of the press\",\"The right to vote\",\"Freedom of religion\"],\"s\":\"That no one could be held prisoner unlawfully\"},{\"t\":\"tudors-stuarts\",\"q\":\"What happened in London in 1665?\",\"a\":\"The Great Plague — a major outbreak of plague; thousands died, especially in poorer areas\",\"d\":[\"The Great Fire of London\",\"The Glorious Revolution\",\"The execution of Charles I\"],\"s\":\"The Great Plague\"},{\"t\":\"tudors-stuarts\",\"q\":\"What followed the Great Fire of London in 1666?\",\"a\":\"Much of the city was destroyed and had to be rebuilt; St Paul's Cathedral was designed and built by Sir Christopher Wren\",\"d\":[\"The plague spread further through the ruined city, and the royal court moved to Oxford for a decade\",\"The king moved the capital to York\",\"London was abandoned for a decade\"],\"s\":\"Much of the city was destroyed and had to be rebuilt; St Paul's Cathedral was designed and built by Sir Christopher Wren\"},{\"t\":\"tudors-stuarts\",\"q\":\"What was the Royal Society?\",\"a\":\"Formed under Charles II, it is the oldest surviving scientific society in the world; early members included Sir Edmund Halley and Sir Isaac Newton\",\"d\":[\"A society of court painters\",\"The king's private council of advisers, set up under Charles II to direct scientific and religious policy in England\",\"A religious order\"],\"s\":\"Formed under Charles II, it is the oldest surviving scientific society in the world; early members included Sir Edmund Halley and Sir Isaac Newton\"},{\"t\":\"tudors-stuarts\",\"q\":\"Why were many people alarmed when James II became king?\",\"a\":\"He was a Roman Catholic who favoured Catholics, acted against Protestant clergy and ignored Parliament — and his new son would be brought up Catholic\",\"d\":[\"He was too young to rule\",\"He wanted to abolish the monarchy and hand power to a council of Puritan clergy and army officers\",\"He refused to marry\"],\"s\":\"He was a Roman Catholic who favoured Catholics, acted against Protestant clergy and ignored Parliament\"},{\"t\":\"tudors-stuarts\",\"q\":\"What was the Glorious Revolution of 1688?\",\"a\":\"Important Protestants asked William of Orange, husband of James II's daughter Mary, to invade and proclaim himself king; there was no fighting in England and the revolution guaranteed the power of Parliament\",\"d\":[\"A violent civil war that restored the Catholic Church\",\"A peasant uprising against taxes\",\"The execution of James II\"],\"s\":\"Important Protestants asked William of Orange, husband of James II's daughter Mary\"},{\"t\":\"tudors-stuarts\",\"q\":\"What did the Bill of Rights of 1689 confirm?\",\"a\":\"The rights of Parliament and the limits of the king's power — the king could no longer raise taxes or administer justice without agreement from Parliament\",\"d\":[\"The right of every man to vote\",\"Freedom of religion for Catholics\",\"The independence of Scotland\"],\"s\":\"The rights of Parliament and the limits of the king's power\"},{\"t\":\"global-power\",\"q\":\"What is a constitutional monarchy?\",\"a\":\"A system in which the king or queen remains head of state but a constitution limits royal power — this developed in Britain after the Glorious Revolution\",\"d\":[\"A monarchy in which the king or queen holds absolute power granted directly by a written constitution\",\"A republic with an elected president\",\"Rule by the Church\"],\"s\":\"A system in which the king or queen remains head of state but a constitution limits royal power\"},{\"t\":\"global-power\",\"q\":\"Why could the monarch no longer rule alone after 1689?\",\"a\":\"The monarch needed Parliament's agreement — Parliament had to be called every year because the king needed money for wars and taxes could not be raised without it\",\"d\":[\"The monarch was banned from London\",\"The army controlled the government\",\"The Pope forbade it\"],\"s\":\"The monarch needed Parliament's agreement\"},{\"t\":\"global-power\",\"q\":\"What was the Act of Union of 1707?\",\"a\":\"It united the kingdoms of England and Scotland and created the Kingdom of Great Britain; Scotland kept its own legal and education systems and Presbyterian Church\",\"d\":[\"It united England and Wales\",\"It united Great Britain and Ireland into a single kingdom and abolished Scotland's separate legal system and Church\",\"It gave Scotland independence\"],\"s\":\"It united the kingdoms of England and Scotland and created the Kingdom of Great Britain; Scotland kept its own legal and education systems and Presbyterian Church\"},{\"t\":\"global-power\",\"q\":\"Why did Sir Robert Walpole become the first Prime Minister?\",\"a\":\"King George I, a German, spoke poor English and relied heavily on his ministers — Walpole was Prime Minister from 1721 to 1742\",\"d\":[\"Parliament elected him president\",\"George I died without an heir\",\"He led a rebellion against the king\"],\"s\":\"King George I, a German, spoke poor English and relied heavily on his ministers\"},{\"t\":\"global-power\",\"q\":\"What happened at the Battle of Culloden in 1746?\",\"a\":\"Charles Edward Stuart (Bonnie Prince Charlie), who had raised an army of Scottish clansmen to claim the throne, was defeated by George II's army; he escaped to Europe\",\"d\":[\"The Scots defeated the English\",\"The Jacobites captured London\",\"The clans defeated the government\"],\"s\":\"Charles Edward Stuart (Bonnie Prince Charlie)\"},{\"t\":\"global-power\",\"q\":\"What were the Highland Clearances?\",\"a\":\"Scottish landlords destroyed small farms (crofts) to make room for large flocks of sheep and cattle; many Scottish people left for North America\",\"d\":[\"The clearing of forests for farmland\",\"The eviction of English settlers from the Scottish Highlands after the defeat of Bonnie Prince Charlie\",\"A programme to build new Highland towns\"],\"s\":\"Scottish landlords destroyed small farms (crofts) to make room for large flocks of sheep and cattle; many Scottish people left for North America\"},{\"t\":\"global-power\",\"q\":\"Who was Robert Burns?\",\"a\":\"A Scottish poet known as 'The Bard' — his best known work is Auld Lang Syne, sung at New Year (Hogmanay in Scotland)\",\"d\":[\"A Welsh poet who wrote Under Milk Wood\",\"An English playwright\",\"The inventor of the steam engine\"],\"s\":\"A Scottish poet known as 'The Bard'\"},{\"t\":\"global-power\",\"q\":\"What was the Enlightenment?\",\"a\":\"A period in the 18th century when new ideas about politics, philosophy and science developed — Adam Smith developed ideas about economics and David Hume about human nature\",\"d\":[\"A religious revival movement of the 18th century, led by travelling preachers in Scotland and Wales\",\"The spread of electric lighting\",\"A period of censorship and control\"],\"s\":\"A period in the 18th century when new ideas about politics, philosophy and science developed\"},{\"t\":\"global-power\",\"q\":\"Which important principle from the Enlightenment is still central today?\",\"a\":\"That everyone should have the right to their own political and religious beliefs and that the state should not try to dictate them\",\"d\":[\"That the state should choose people's religion\",\"That only landowners and church members should be free to hold political and religious opinions\",\"That kings rule by divine right\"],\"s\":\"That everyone should have the right to their own political and religious beliefs and that the state should not try to dictate them\"},{\"t\":\"global-power\",\"q\":\"Why is the Industrial Revolution significant for Britain?\",\"a\":\"Britain was the first country to industrialise on a large scale — machinery and steam power developed, and Britain produced more than half of the world's supplies of iron, coal and cotton cloth\",\"d\":[\"Britain was the last country to industrialise\",\"It made Britain mainly an agricultural country\",\"It ended the British Empire\"],\"s\":\"Britain was the first country to industrialise on a large scale\"},{\"t\":\"global-power\",\"q\":\"Who was Richard Arkwright?\",\"a\":\"An Industrial Revolution figure remembered for efficiently and profitably running factories — he improved carding machines and used water power to drive machinery\",\"d\":[\"A canal engineer who built the waterways carrying coal and cotton between the new industrial cities\",\"The inventor of the jet engine\",\"A leading abolitionist\"],\"s\":\"An Industrial Revolution figure remembered for efficiently and profitably running factories\"},{\"t\":\"global-power\",\"q\":\"Who was Sake Dean Mahomet?\",\"a\":\"He opened the Hindoostane Coffee House in London in 1810, the first curry house in Britain, and introduced 'shampooing' — the Indian art of head massage — to Britain\",\"d\":[\"The first Indian member of Parliament, elected in London in 1810, who introduced curry houses to Britain\",\"A famous Victorian engineer\",\"The founder of the East India Company\"],\"s\":\"He opened the Hindoostane Coffee House in London in 1810, the first curry house in Britain\"},{\"t\":\"global-power\",\"q\":\"Who were the first formal anti-slavery groups set up by?\",\"a\":\"The Quakers, in the late 1700s\",\"d\":[\"The Church of England\",\"The Chartists\",\"The Methodists\"],\"s\":\"The Quakers, in the late 1700s\"},{\"t\":\"global-power\",\"q\":\"Who was William Wilberforce?\",\"a\":\"An evangelical Christian and MP who played an important part in changing the law — a leading abolitionist\",\"d\":[\"The first Prime Minister\",\"A factory owner who campaigned in Parliament for shorter working hours for women and children\",\"The founder of the Royal Navy\"],\"s\":\"An evangelical Christian and MP who played an important part in changing the law\"},{\"t\":\"global-power\",\"q\":\"When did it become illegal to trade slaves in British ships or from British ports?\",\"a\":\"In 1807\",\"d\":[\"In 1833\",\"In 1776\",\"In 1865\"],\"s\":\"In 1807\"},{\"t\":\"global-power\",\"q\":\"What did the Emancipation Act of 1833 do?\",\"a\":\"It abolished slavery throughout the British Empire\",\"d\":[\"It banned the trading of slaves in British ships\",\"It gave women the vote\",\"It ended child labour\"],\"s\":\"It abolished slavery throughout the British Empire\"},{\"t\":\"global-power\",\"q\":\"After slavery was abolished, where did replacement workers come from?\",\"a\":\"Two million migrants came from India and China to replace the freed slaves\",\"d\":[\"One million migrants came from Africa\",\"Workers came from Australia\",\"Convicts were sent from Britain\"],\"s\":\"Two million migrants came from India and China to replace the freed slaves\"},{\"t\":\"global-power\",\"q\":\"When did the American colonies declare independence?\",\"a\":\"In 1776, over taxation — Britain recognised the colonies' independence in 1783\",\"d\":[\"In 1765\",\"In 1783\",\"In 1812\"],\"s\":\"In 1776\"},{\"t\":\"global-power\",\"q\":\"What happened at the Battle of Trafalgar in 1805?\",\"a\":\"Admiral Nelson defeated the combined French and Spanish fleets; Nelson was killed — Nelson's Column in Trafalgar Square commemorates him, and his ship HMS Victory can be visited in Portsmouth\",\"d\":[\"The Duke of Wellington defeated Napoleon's combined fleet; Wellington was killed during the battle\",\"The French invaded Britain\",\"The Spanish Armada was defeated\"],\"s\":\"Admiral Nelson defeated the combined French and Spanish fleets; Nelson was killed\"},{\"t\":\"global-power\",\"q\":\"How did the Napoleonic Wars end?\",\"a\":\"In 1815 the French Wars ended with the defeat of Napoleon by the Duke of Wellington at the Battle of Waterloo\",\"d\":[\"With the Battle of Trafalgar in 1805\",\"With a peace treaty signed in Paris in 1820, after Napoleon had defeated Wellington at Waterloo\",\"With the French invasion of Britain\"],\"s\":\"In 1815 the French Wars ended with the defeat of Napoleon by the Duke of Wellington at the Battle of Waterloo\"},{\"t\":\"global-power\",\"q\":\"Which crosses make up the Union Flag?\",\"a\":\"The cross of St George (England), the cross of St Andrew (Scotland) and the cross of St Patrick (Ireland)\",\"d\":[\"The crosses of St George, St David and St Andrew\",\"The crosses of St George, St Patrick and St David\",\"The crosses of St Andrew, St Columba and St George\"],\"s\":\"The cross of St George (England), the cross of St Andrew (Scotland) and the cross of St Patrick (Ireland)\"},{\"t\":\"global-power\",\"q\":\"Why is the Welsh dragon not on the Union Flag?\",\"a\":\"Because when the first Union Flag was created in 1606, the Principality of Wales was already united with England\",\"d\":[\"Because Wales chose not to be represented\",\"Because dragons were not allowed on flags\",\"Because Wales joined the Union last, after the design of the flag had already been agreed in 1801\"],\"s\":\"Because when the first Union Flag was created in 1606, the Principality of Wales was already united with England\"},{\"t\":\"global-power\",\"q\":\"How long did Queen Victoria reign?\",\"a\":\"From 1837 until 1901 — almost 64 years, and the Victorian Age is named after her\",\"d\":[\"From 1801 to 1837\",\"From 1837 to 1887\",\"From 1851 to 1901\"],\"s\":\"From 1837 until 1901\"},{\"t\":\"global-power\",\"q\":\"What happened to the British Empire during the Victorian period?\",\"a\":\"It grew to cover all of India, Australia and large parts of Africa — it became the largest empire the world has ever seen, with an estimated population of more than 400 million people\",\"d\":[\"It lost most of its territories\",\"It was limited to North America\",\"It merged with the French empire\"],\"s\":\"It grew to cover all of India, Australia and large parts of Africa\"},{\"t\":\"global-power\",\"q\":\"What was the Crimean War notable for?\",\"a\":\"It was the first war to be extensively covered by the media; Queen Victoria introduced the Victoria Cross medal during it to honour acts of valour\",\"d\":[\"It was the first war fought entirely by a volunteer army, and no medals were awarded for acts of bravery\",\"It was fought entirely at sea\",\"Britain lost the war\"],\"s\":\"It was the first war to be extensively covered by the media; Queen Victoria introduced the Victoria Cross medal during it to honour acts of valour\"},{\"t\":\"global-power\",\"q\":\"Who was Florence Nightingale?\",\"a\":\"The founder of modern nursing — she treated soldiers in the Crimean War and established the Nightingale Training School for nurses at St Thomas' Hospital in London in 1860\",\"d\":[\"The first woman MP\",\"A suffragette leader\",\"A Victorian novelist\"],\"s\":\"The founder of modern nursing\"},{\"t\":\"global-power\",\"q\":\"What happened in Ireland in the middle of the 19th century?\",\"a\":\"The potato crop failed and Ireland suffered a famine — a million people died and another million and a half left Ireland, many for the United States or England\",\"d\":[\"A civil war broke out\",\"Ireland gained independence\",\"Ireland's population doubled\"],\"s\":\"The potato crop failed and Ireland suffered a famine\"},{\"t\":\"global-power\",\"q\":\"Who were the Fenians?\",\"a\":\"Irish nationalists who favoured complete independence from Britain — others, such as Charles Stuart Parnell, advocated 'Home Rule'\",\"d\":[\"Irish landlords loyal to Britain\",\"Protestant settlers in Ulster\",\"Irish soldiers in the British army\"],\"s\":\"Irish nationalists who favoured complete independence from Britain\"},{\"t\":\"global-power\",\"q\":\"What did the Reform Act of 1832 do?\",\"a\":\"It greatly increased the number of people with the right to vote and abolished the old pocket and rotten boroughs, giving more parliamentary seats to towns and cities\",\"d\":[\"It gave women the vote\",\"It abolished the House of Lords\",\"It introduced secret ballots at every election and extended the vote to all men and women over the age of 21\"],\"s\":\"It greatly increased the number of people with the right to vote and abolished the old pocket and rotten boroughs, giving more parliamentary seats to towns and cities\"},{\"t\":\"global-power\",\"q\":\"What six changes did the Chartists campaign for?\",\"a\":\"A vote for every man, elections every year, equal electoral regions, secret ballots, any man able to stand as an MP, and payment for MPs\",\"d\":[\"Votes for women, free schools, pensions, an NHS, fair rents and shorter hours\",\"Independence for Ireland, Scotland and Wales and three other reforms\",\"Abolition of the monarchy and five other reforms\"],\"s\":\"A vote for every man, elections every year, equal electoral regions, secret ballots, any man able to stand as an MP, and payment for MPs\"},{\"t\":\"global-power\",\"q\":\"When were women given voting rights?\",\"a\":\"In 1918 women over 30 got the vote; in 1928 women could vote at 21, the same age as men\",\"d\":[\"In 1928 women over 30; in 1945 at 21\",\"In 1918 women got the vote at 21, the same age as men, and could stand as MPs from 1928 onwards\",\"In 1900 women over 30; in 1918 at 21\"],\"s\":\"In 1918 women over 30 got the vote; in 1928 women could vote at 21, the same age as men\"},{\"t\":\"global-power\",\"q\":\"Who was Emmeline Pankhurst?\",\"a\":\"A leader of the campaign for women's votes — she helped found the Women's Social and Political Union, the first group whose members were called 'suffragettes'\",\"d\":[\"The first woman Prime Minister\",\"The founder of modern nursing\",\"A famous Victorian novelist\"],\"s\":\"A leader of the campaign for women's votes\"},{\"t\":\"global-power\",\"q\":\"Who was Rudyard Kipling?\",\"a\":\"An author and poet born in India — he was awarded the Nobel Prize in Literature in 1907; his books include the Just So Stories and The Jungle Book, and his poem 'If'\",\"d\":[\"An engineer who built the Great Western Railway\",\"A Scottish economist\",\"A Victorian Prime Minister\"],\"s\":\"An author and poet born in India\"},{\"t\":\"global-power\",\"q\":\"Who was Isambard Kingdom Brunel?\",\"a\":\"An engineer who built tunnels, bridges, railway lines and ships — including the Great Western Railway and the Clifton Suspension Bridge\",\"d\":[\"A famous portrait painter\",\"The engineer who invented the television and made the first broadcast between London and Glasgow\",\"A leading abolitionist\"],\"s\":\"An engineer who built tunnels, bridges, railway lines and ships\"},{\"t\":\"20th-century\",\"q\":\"What set off the First World War?\",\"a\":\"The assassination of Archduke Franz Ferdinand of Austria in 1914 — the war began in a very complex situation of factors\",\"d\":[\"The German invasion of Poland\",\"The sinking of a British ship\",\"A revolution in France\"],\"s\":\"The assassination of Archduke Franz Ferdinand of Austria in 1914\"},{\"t\":\"20th-century\",\"q\":\"What happened on the first day of the Battle of the Somme in 1916?\",\"a\":\"The British forces suffered 60,000 casualties — the British attack on the Somme lasted throughout the autumn\",\"d\":[\"The British captured Berlin\",\"The war ended\",\"20,000 German soldiers surrendered\"],\"s\":\"The British forces suffered 60,000 casualties\"},{\"t\":\"20th-century\",\"q\":\"When did the First World War end?\",\"a\":\"At 11.00 am on 11 November 1918, with victory for Britain and its allies\",\"d\":[\"On 1 July 1916\",\"On 11 November 1919\",\"On 8 May 1918\"],\"s\":\"At 11.00 am on 11 November 1918\"},{\"t\":\"20th-century\",\"q\":\"What was proposed for Ireland in 1913?\",\"a\":\"Home Rule — a self-governing Ireland with its own parliament, still part of the UK; the First World War postponed it\",\"d\":[\"Complete independence\",\"Union with Scotland\",\"Partition into two countries\"],\"s\":\"Home Rule\"},{\"t\":\"20th-century\",\"q\":\"What was the Easter Rising?\",\"a\":\"An uprising by Irish nationalists against the British in Dublin in 1916 — its leaders were executed and a guerrilla war followed\",\"d\":[\"A strike by Irish dockworkers\",\"A Protestant rebellion in Ulster\",\"A famine protest in 1848\"],\"s\":\"An uprising by Irish nationalists against the British in Dublin in 1916\"},{\"t\":\"20th-century\",\"q\":\"What happened to Ireland in 1921-22?\",\"a\":\"A peace treaty was signed in 1921 and in 1922 Ireland became two countries: the six mainly Protestant counties in the north remained part of the UK, and the rest became the Irish Free State\",\"d\":[\"The whole of Ireland became independent\",\"Ireland was fully absorbed into the UK\",\"Ireland joined the League of Nations as one state\"],\"s\":\"A peace treaty was signed in 1921 and in 1922 Ireland became two countries\"},{\"t\":\"20th-century\",\"q\":\"When did the BBC start radio broadcasts?\",\"a\":\"In 1922 — and it began the world's first regular television service in 1936\",\"d\":[\"In 1936\",\"In 1910\",\"In 1945\"],\"s\":\"In 1922\"},{\"t\":\"20th-century\",\"q\":\"What happened in 1929?\",\"a\":\"The world entered the Great Depression — some parts of the UK, such as the heavy industries of shipbuilding, suffered mass unemployment, while new industries like automobiles and aviation developed\",\"d\":[\"The Second World War began\",\"The General Strike took place\",\"Britain left the gold standard permanently\"],\"s\":\"The world entered the Great Depression\"},{\"t\":\"20th-century\",\"q\":\"What event led Britain and France to declare war on Germany in 1939?\",\"a\":\"Hitler's invasion of Poland\",\"d\":[\"The invasion of France\",\"The bombing of London\",\"The invasion of the Soviet Union\"],\"s\":\"Hitler's invasion of Poland\"},{\"t\":\"20th-century\",\"q\":\"Who became Prime Minister in 1940 and led Britain through the Second World War?\",\"a\":\"Winston Churchill\",\"d\":[\"Neville Chamberlain\",\"Clement Attlee\",\"Stanley Baldwin\"],\"s\":\"Winston Churchill\"},{\"t\":\"20th-century\",\"q\":\"What happened at Dunkirk in 1940?\",\"a\":\"Around 300,000 men were rescued from the beaches at Dunkirk by a fleet including small boats crewed by volunteers — remembered as 'the Dunkirk spirit'\",\"d\":[\"The Allied forces landed in France and pushed the German army back from the beaches of Normandy\",\"The German navy was destroyed\",\"British forces captured the port from Germany\"],\"s\":\"Around 300,000 men were rescued from the beaches at Dunkirk by a fleet including small boats crewed by volunteers\"},{\"t\":\"20th-century\",\"q\":\"What was the Battle of Britain?\",\"a\":\"The aerial battle in the summer of 1940 in which Britain's Royal Air Force resisted the German air force — the crucial aeroplanes were the Spitfire and the Hurricane\",\"d\":[\"A naval battle fought in the Channel in the summer of 1940 to stop the German invasion fleet\",\"The German invasion of Britain by sea\",\"A tank battle in southern England\"],\"s\":\"The aerial battle in the summer of 1940 in which Britain's Royal Air Force resisted the German air force\"},{\"t\":\"20th-century\",\"q\":\"What was the Blitz?\",\"a\":\"The German bombing campaign against London and other British cities at night — coastal towns were also bombed and the 'Blitz spirit' is still remembered\",\"d\":[\"The British bombing of Berlin\",\"A plan to evacuate children\",\"The German invasion of the Soviet Union\"],\"s\":\"The German bombing campaign against London and other British cities at night\"},{\"t\":\"20th-century\",\"q\":\"What happened on D-Day, 6 June 1944?\",\"a\":\"Allied forces landed in Normandy and pushed the German army back — one of the most important events of the war\",\"d\":[\"Germany surrendered\",\"The war in the Pacific ended\",\"Allied forces landed in Italy\"],\"s\":\"Allied forces landed in Normandy and pushed the German army back\"},{\"t\":\"20th-century\",\"q\":\"How did the war against Japan end?\",\"a\":\"The United States dropped atomic bombs on the Japanese cities of Hiroshima and Nagasaki, and Japan surrendered in August 1945\",\"d\":[\"Japan was invaded by the Allies\",\"Japan surrendered after the fall of Berlin\",\"A peace treaty was signed in 1946\"],\"s\":\"The United States dropped atomic bombs on the Japanese cities of Hiroshima and Nagasaki\"},{\"t\":\"20th-century\",\"q\":\"Which British scientists were important in the development of the atomic bomb?\",\"a\":\"Scientists led by New Zealand-born Ernest Rutherford, working at Manchester and then Cambridge University, were the first to 'split the atom'\",\"d\":[\"Isaac Newton and Edmund Halley\",\"Crick and Watson, working at Oxford University, who were the first to produce a chain reaction in 1938\",\"Frank Whittle and Robert Watson-Watt\"],\"s\":\"Scientists led by New Zealand-born Ernest Rutherford, working at Manchester and then Cambridge University, were the first to 'split the atom'\"},{\"t\":\"since-1945\",\"q\":\"Who was elected Prime Minister in 1945?\",\"a\":\"Clement Attlee, leader of the Labour Party, who defeated Winston Churchill in the general election\",\"d\":[\"Winston Churchill\",\"Harold Macmillan\",\"Anthony Eden\"],\"s\":\"Clement Attlee\"},{\"t\":\"since-1945\",\"q\":\"What did the Beveridge Report of 1942 set out?\",\"a\":\"Ideas which led to the establishment of the modern welfare state — it was written by William Beveridge and called Social Insurance and Allied Services\",\"d\":[\"Plans for the D-Day invasion\",\"The design of the NHS hospitals\",\"A plan for rebuilding London\"],\"s\":\"Ideas which led to the establishment of the modern welfare state\"},{\"t\":\"since-1945\",\"q\":\"What did the Education Act of 1944 introduce, and who introduced it?\",\"a\":\"Free secondary education in England and Wales — introduced by the Conservative MP R A Butler (often called 'The Butler Act')\",\"d\":[\"Free university education, introduced by Attlee\",\"Free primary schools, introduced by Beveridge\",\"Compulsory nursery education, introduced by Bevan\"],\"s\":\"Free secondary education in England and Wales\"},{\"t\":\"since-1945\",\"q\":\"When was the National Health Service (NHS) established, and by whom?\",\"a\":\"In 1948 — Aneurin (Nye) Bevan, the Minister for Health, led the establishment of the NHS, which guaranteed a minimum standard of health care for all, free at the point of use\",\"d\":[\"In 1945, by Winston Churchill\",\"In 1951, by Clement Attlee\",\"In 1942, by William Beveridge\"],\"s\":\"In 1948\"},{\"t\":\"since-1945\",\"q\":\"What else did the Attlee government do besides founding the NHS?\",\"a\":\"It introduced a national system of benefits (social security) and nationalised the railways, coal mines and gas, water and electricity supplies; independence was granted to India and Pakistan in 1947\",\"d\":[\"It privatised the railways, coal mines and utilities, and delayed independence for India and Pakistan until the 1960s\",\"It took Britain into the European Community\",\"It abolished income tax\"],\"s\":\"It introduced a national system of benefits (social security) and nationalised the railways, coal mines and gas, water and electricity supplies; independence was granted to India and Pakistan in 1947\"},{\"t\":\"since-1945\",\"q\":\"Which alliance did the UK join to resist the perceived threat from the Soviet Union?\",\"a\":\"The North Atlantic Treaty Organization (NATO) — the UK also developed its own atomic bomb\",\"d\":[\"The Warsaw Pact\",\"The League of Nations\",\"The European Economic Community\"],\"s\":\"The North Atlantic Treaty Organization (NATO)\"},{\"t\":\"since-1945\",\"q\":\"Which Prime Minister was famous for his 'wind of change' speech?\",\"a\":\"Harold Macmillan — the speech was about decolonisation and independence for the countries of the Empire\",\"d\":[\"Clement Attlee\",\"Winston Churchill\",\"Harold Wilson\"],\"s\":\"Harold Macmillan\"},{\"t\":\"since-1945\",\"q\":\"What was the 'Swinging Sixties' known for?\",\"a\":\"A growth in British fashion, cinema and popular music — including the Beatles and the Rolling Stones — and social laws liberalising abortion and divorce\",\"d\":[\"A period of mass unemployment\",\"The height of the Blitz\",\"Britain joining the euro\"],\"s\":\"A growth in British fashion, cinema and popular music\"},{\"t\":\"since-1945\",\"q\":\"In the late 1960s, where did many migrant workers to the UK come from?\",\"a\":\"In the 1950s, centres were set up in the West Indies to recruit bus crews, and workers from India, Pakistan and (what is now) Bangladesh came to work in textile and engineering firms\",\"d\":[\"Australia and New Zealand only\",\"Mainly from Eastern Europe, recruited by centres set up in Poland to staff the new textile factories\",\"South America\"],\"s\":\"In the 1950s, centres were set up in the West Indies to recruit bus crews\"},{\"t\":\"since-1945\",\"q\":\"When did the UK join the European Economic Community (EEC)?\",\"a\":\"In 1973 — West Germany, France, Belgium, Italy, Luxembourg and the Netherlands had formed it in 1957\",\"d\":[\"In 1957\",\"In 1963\",\"In 1979\"],\"s\":\"In 1973\"},{\"t\":\"since-1945\",\"q\":\"How many people lost their lives in the violence in Northern Ireland after 1969?\",\"a\":\"Some 3,000 people, in the decades after 1969 — the Northern Ireland Parliament was suspended in 1972 and the country was directly ruled by the UK government\",\"d\":[\"Some 300 people\",\"Some 30,000 people\",\"Some 10,000 people\"],\"s\":\"Some 3,000 people\"},{\"t\":\"since-1945\",\"q\":\"Who was Margaret Thatcher?\",\"a\":\"Britain's first woman Prime Minister — Conservative, and the longest-serving Prime Minister of the 20th century, in office from 1979 to 1990\",\"d\":[\"Britain's first woman Chancellor\",\"Labour Prime Minister from 1979 to 1990\",\"Prime Minister during the Second World War\"],\"s\":\"Britain's first woman Prime Minister\"},{\"t\":\"since-1945\",\"q\":\"What happened in 1982 in the Falkland Islands?\",\"a\":\"Argentina invaded the Falkland Islands — a British naval taskforce was sent and the islands were recovered\",\"d\":[\"The islands were sold to Argentina\",\"Britain granted the islands independence\",\"Argentina and Britain agreed joint rule\"],\"s\":\"Argentina invaded the Falkland Islands\"},{\"t\":\"since-1945\",\"q\":\"What did the Blair government introduce in 1997 for Scotland and Wales?\",\"a\":\"A Scottish Parliament and a Welsh Assembly — the Scottish Parliament has substantial powers to legislate\",\"d\":[\"Full independence for both countries\",\"New county councils\",\"Direct rule from Westminster\"],\"s\":\"A Scottish Parliament and a Welsh Assembly\"},{\"t\":\"since-1945\",\"q\":\"What happened in Northern Ireland under the Blair government?\",\"a\":\"The Blair government was able to build on the Good Friday Agreement of 1998, resulting in the establishment of the Northern Ireland Assembly\",\"d\":[\"Direct rule from Westminster was imposed permanently and the Northern Ireland Assembly was abolished for good\",\"Northern Ireland joined the Irish Republic\",\"The border was closed\"],\"s\":\"The Blair government was able to build on the Good Friday Agreement of 1998, resulting in the establishment of the Northern Ireland Assembly\"},{\"t\":\"since-1945\",\"q\":\"What happened in the May 2010 General Election?\",\"a\":\"For the first time since February 1974 no party won an overall majority — the Conservatives and Liberal Democrats formed a coalition and David Cameron became Prime Minister\",\"d\":[\"Labour won a landslide\",\"The Conservatives won an overall majority\",\"A Labour-SNP coalition was formed\"],\"s\":\"For the first time since February 1974 no party won an overall majority\"},{\"t\":\"since-1945\",\"q\":\"Which Prime Ministers served during the Conservative Government of 2015 to 2024?\",\"a\":\"David Cameron, Theresa May, Boris Johnson, Liz Truss and Rishi Sunak\",\"d\":[\"Tony Blair, Gordon Brown and David Cameron\",\"Boris Johnson and Keir Starmer only\",\"John Major, Tony Blair and Theresa May\"],\"s\":\"David Cameron, Theresa May, Boris Johnson, Liz Truss and Rishi Sunak\"},{\"t\":\"since-1945\",\"q\":\"What major vote took place in 2016?\",\"a\":\"The EU membership referendum (Brexit)\",\"d\":[\"The Scottish independence referendum\",\"A referendum on the voting system\",\"A referendum on the monarchy\"],\"s\":\"The EU membership referendum (Brexit)\"},{\"t\":\"since-1945\",\"q\":\"Who formed the government after the 2024 general election?\",\"a\":\"The Labour Party, led by Keir Starmer, won the majority and formed the government\",\"d\":[\"The Conservative Party, led by Rishi Sunak\",\"A Conservative-Liberal Democrat coalition\",\"The Scottish National Party\"],\"s\":\"The Labour Party, led by Keir Starmer, won the majority and formed the government\"},{\"t\":\"since-1945\",\"q\":\"Who developed the television?\",\"a\":\"Scotsman John Logie Baird in the 1920s — in 1932 he made the first television broadcast between London and Glasgow\",\"d\":[\"Sir Frank Whittle\",\"Sir Robert Watson-Watt\",\"Sir Tim Berners-Lee\"],\"s\":\"Scotsman John Logie Baird in the 1920s\"},{\"t\":\"since-1945\",\"q\":\"Who developed radar?\",\"a\":\"Scotsman Sir Robert Watson-Watt, who proposed that enemy aircraft could be detected by radio waves\",\"d\":[\"Sir Frank Whittle\",\"Sir Christopher Cockerell\",\"Alan Turing\"],\"s\":\"Scotsman Sir Robert Watson-Watt\"},{\"t\":\"since-1945\",\"q\":\"Who developed the jet engine?\",\"a\":\"Sir Frank Whittle, a British Royal Air Force engineer officer, in the 1930s\",\"d\":[\"Sir Christopher Cockerell\",\"John Logie Baird\",\"Isambard Kingdom Brunel\"],\"s\":\"Sir Frank Whittle\"},{\"t\":\"since-1945\",\"q\":\"Who invented the hovercraft?\",\"a\":\"Sir Christopher Cockerell, a British inventor, in the 1950s\",\"d\":[\"Sir Frank Whittle\",\"Sir Robert Watson-Watt\",\"Sir Bernard Lovell\"],\"s\":\"Sir Christopher Cockerell\"},{\"t\":\"since-1945\",\"q\":\"Who discovered penicillin?\",\"a\":\"Alexander Fleming, born in Scotland — he discovered penicillin in 1928 while researching influenza; it was developed into a usable drug by Howard Florey and Ernst Chain, and Fleming won the Nobel Prize in Medicine in 1945\",\"d\":[\"Francis Crick\",\"Ernest Rutherford\",\"Sir Peter Mansfield\"],\"s\":\"Alexander Fleming, born in Scotland\"},{\"t\":\"since-1945\",\"q\":\"Which Briton was awarded the Nobel Prize for work on the structure of the DNA molecule?\",\"a\":\"Francis Crick\",\"d\":[\"Alexander Fleming\",\"Tim Berners-Lee\",\"John Macleod\"],\"s\":\"Francis Crick\"},{\"t\":\"since-1945\",\"q\":\"What is the radio telescope at Jodrell Bank?\",\"a\":\"For many years the biggest radio telescope in the world — it was among the first to track space objects by radar\",\"d\":[\"The first television transmitter\",\"A wartime code-breaking machine\",\"The first weather satellite station\"],\"s\":\"For many years the biggest radio telescope in the world\"},{\"t\":\"since-1945\",\"q\":\"Which supersonic airliner did Britain develop with France?\",\"a\":\"Concorde, the supersonic passenger aircraft — it first flew in 1969 and was retired from service in 2003\",\"d\":[\"The Harrier jump jet\",\"The Spitfire\",\"The Comet\"],\"s\":\"Concorde, the supersonic passenger aircraft\"},{\"t\":\"since-1945\",\"q\":\"What is the Harrier jump jet?\",\"a\":\"An aircraft capable of taking off vertically, designed and developed in the UK\",\"d\":[\"A supersonic passenger aircraft developed jointly by Britain and France during the 1960s\",\"A wartime bomber\",\"A helicopter\"],\"s\":\"An aircraft capable of taking off vertically, designed and developed in the UK\"},{\"t\":\"since-1945\",\"q\":\"Who invented the World Wide Web?\",\"a\":\"Sir Tim Berners-Lee, British — information was successfully transferred via the web for the first time on 25 December 1990\",\"d\":[\"Alan Turing\",\"Bill Gates\",\"Sir Christopher Cockerell\"],\"s\":\"Sir Tim Berners-Lee, British\"},{\"t\":\"since-1945\",\"q\":\"What did Alan Turing invent?\",\"a\":\"The Turing machine in the 1930s — a theoretical mathematical device, his theories led to the development of the computer\",\"d\":[\"The World Wide Web\",\"The jet engine\",\"Radar\"],\"s\":\"The Turing machine in the 1930s\"},{\"t\":\"since-1945\",\"q\":\"What medical breakthroughs of the 20th century involved Britain?\",\"a\":\"Scottish physician John Macleod co-discovered insulin; the MRI scanner was co-invented in Britain; and IVF (in-vitro fertilisation) therapy for infertility was pioneered in Britain\",\"d\":[\"The X-ray, the vaccine and antiseptic surgery, which were all discovered in Britain during the 20th century\",\"Anaesthesia, aspirin and antibiotics only\",\"The heart transplant, the stethoscope and the thermometer\"],\"s\":\"Scottish physician John Macleod co-discovered insulin; the MRI scanner was co-invented in Britain; and IVF (in-vitro fertilisation) therapy for infertility was pioneered in Britain\"},{\"t\":\"since-1945\",\"q\":\"What were the first successes in cloning a mammal?\",\"a\":\"Two British scientists, Sir Ian Wilmot and Keith Campbell, led a team which was the first to succeed in cloning a mammal — Dolly the sheep, in 1996\",\"d\":[\"A team of American scientists at Harvard led the first successful cloning of a mammal, a horse called Dolly\",\"French scientists cloned a cow\",\"Japanese scientists cloned a mouse\"],\"s\":\"Two British scientists, Sir Ian Wilmot and Keith Campbell, led a team which was the first to succeed in cloning a mammal\"},{\"t\":\"since-1945\",\"q\":\"Who was Roald Dahl?\",\"a\":\"An author born in Wales to Norwegian parents who served in the RAF in the Second World War — his books include Charlie and the Chocolate Factory and George's Marvellous Medicine\",\"d\":[\"A Welsh poet who wrote Under Milk Wood\",\"A Scottish novelist who served in the Royal Navy and wrote books set in both India and the UK\",\"The author of The Jungle Book\"],\"s\":\"An author born in Wales to Norwegian parents who served in the RAF in the Second World War\"},{\"t\":\"arts\",\"q\":\"What is the Last Night of the Proms?\",\"a\":\"The most famous event of the Proms, an eight-week summer season of orchestral classical music organised by the BBC since 1927, mainly at the Royal Albert Hall\",\"d\":[\"A pop festival in Somerset\",\"A theatre awards ceremony\",\"A Christmas season of choral concerts organised in Edinburgh each winter and broadcast by the BBC since 1947\"],\"s\":\"The most famous event of the Proms, an eight-week summer season of orchestral classical music organised by the BBC since 1927, mainly at the Royal Albert Hall\"},{\"t\":\"arts\",\"q\":\"Which German-born composer spent many years in the UK and became a British citizen in 1727?\",\"a\":\"George Frederick Handel — his best known works include Water Music, Music for the Royal Fireworks and Messiah\",\"d\":[\"Henry Purcell\",\"Gustav Holst\",\"Edward Elgar\"],\"s\":\"George Frederick Handel\"},{\"t\":\"arts\",\"q\":\"Who wrote The Planets, which includes Jupiter?\",\"a\":\"Gustav Holst — part of Jupiter is used as the tune of I Vow to Thee, My Country, a popular hymn\",\"d\":[\"Edward Elgar\",\"Benjamin Britten\",\"Ralph Vaughan Williams\"],\"s\":\"Gustav Holst\"},{\"t\":\"arts\",\"q\":\"Which composer wrote the Pomp and Circumstance Marches?\",\"a\":\"Sir Edward Elgar — March No 1 (Land of Hope and Glory) is usually played at the Last Night of the Proms\",\"d\":[\"Gustav Holst\",\"Henry Purcell\",\"Sir William Walton\"],\"s\":\"Sir Edward Elgar\"},{\"t\":\"arts\",\"q\":\"Who was Benjamin Britten?\",\"a\":\"A composer best known for operas including Peter Grimes and Billy Budd; he also founded the Aldeburgh festival in Suffolk\",\"d\":[\"The organist at Westminster Abbey who wrote church music\",\"The composer of The Planets\",\"A Victorian music hall performer\"],\"s\":\"A composer best known for operas including Peter Grimes and Billy Budd; he also founded the Aldeburgh festival in Suffolk\"},{\"t\":\"arts\",\"q\":\"Who was Henry Purcell?\",\"a\":\"The organist at Westminster Abbey who wrote church music, operas and other pieces, and developed a British style distinct from that elsewhere in Europe\",\"d\":[\"A German-born composer who settled in London and wrote Messiah and the Water Music for the king\",\"The founder of the Proms\",\"A Scottish folk musician\"],\"s\":\"The organist at Westminster Abbey who wrote church music, operas and other pieces\"},{\"t\":\"arts\",\"q\":\"Which large annual popular music festivals take place in the UK?\",\"a\":\"Glastonbury, the Isle of Wight Festival and the V Festival\",\"d\":[\"The Proms, the Eisteddfod and the Fringe\",\"Wimbledon, Ascot and Henley\",\"The Mercury, Brit and Turner festivals\"],\"s\":\"Glastonbury, the Isle of Wight Festival and the V Festival\"},{\"t\":\"arts\",\"q\":\"What is the Mercury Music Prize?\",\"a\":\"A prize awarded each September for the best album from the UK and Ireland\",\"d\":[\"An award for the best British film\",\"A theatre award\",\"A poetry prize\"],\"s\":\"A prize awarded each September for the best album from the UK and Ireland\"},{\"t\":\"arts\",\"q\":\"What are the Brit Awards?\",\"a\":\"An annual event that gives awards in categories such as best British group and best British solo artist\",\"d\":[\"Annual awards for British theatre, given in categories such as best director, best actor and best actress\",\"Awards for British architecture\",\"Awards for British sport\"],\"s\":\"An annual event that gives awards in categories such as best British group and best British solo artist\"},{\"t\":\"arts\",\"q\":\"What is a pantomime?\",\"a\":\"A traditional theatre production, often based on fairy stories, staged around Christmas time — a light-hearted play with music and comedy\",\"d\":[\"A silent play performed entirely in mime, traditionally staged in London theatres at Easter time\",\"A Shakespeare tragedy\",\"A summer opera festival\"],\"s\":\"A traditional theatre production, often based on fairy stories, staged around Christmas time\"},{\"t\":\"arts\",\"q\":\"What is the Edinburgh Festival Fringe?\",\"a\":\"The largest arts festival in the world, part of a set of arts and cultural festivals held in Edinburgh every summer — it showcases mainly theatre and comedy performances\",\"d\":[\"A season of classical music concerts held in London every summer and organised by the BBC since 1927\",\"A film festival in Wales\",\"A flower show in Scotland\"],\"s\":\"The largest arts festival in the world, part of a set of arts and cultural festivals held in Edinburgh every summer\"},{\"t\":\"arts\",\"q\":\"What are the Laurence Olivier Awards?\",\"a\":\"Annual theatre awards held at different venues in London, named after the actor Sir Laurence Olivier, in categories including best director, best actor and best actress\",\"d\":[\"Annual film awards held in London, named after a famous director, in categories including best picture\",\"Music awards held in Manchester\",\"Literary awards for playwrights\"],\"s\":\"Annual theatre awards held at different venues in London, named after the actor Sir Laurence Olivier\"},{\"t\":\"arts\",\"q\":\"Which 18th-century artist was best known for his portraits?\",\"a\":\"Thomas Gainsborough, who often painted people in country or garden scenery\",\"d\":[\"John Constable\",\"Joseph Turner\",\"David Hockney\"],\"s\":\"Thomas Gainsborough\"},{\"t\":\"arts\",\"q\":\"Who was John Constable?\",\"a\":\"A landscape painter most famous for his works of Dedham Vale on the Suffolk-Essex border\",\"d\":[\"A portrait painter of the aristocracy who usually painted his subjects in country or garden scenery\",\"A sculptor\",\"A Pre-Raphaelite painter\"],\"s\":\"A landscape painter most famous for his works of Dedham Vale on the Suffolk-Essex border\"},{\"t\":\"arts\",\"q\":\"What is the Turner Prize?\",\"a\":\"One of the most prestigious contemporary art awards, established in 1984 and named after Joseph Turner; previous winners include Damien Hirst and Richard Wright\",\"d\":[\"A prize for landscape photography, established in 1984 in memory of Joseph Turner and awarded each year in Edinburgh\",\"A prize for classical portraiture\",\"An architecture prize\"],\"s\":\"One of the most prestigious contemporary art awards, established in 1984 and named after Joseph Turner; previous winners include Damien Hirst and Richard Wright\"},{\"t\":\"arts\",\"q\":\"Which architect designed the new St Paul's Cathedral in the 17th century?\",\"a\":\"Sir Christopher Wren\",\"d\":[\"Inigo Jones\",\"Sir Edwin Lutyens\",\"Robert Adam\"],\"s\":\"Sir Christopher Wren\"},{\"t\":\"arts\",\"q\":\"Who designed the Cenotaph in Whitehall?\",\"a\":\"Sir Edwin Lutyens, who also designed New Delhi to be the seat of government in India — the Cenotaph is the site of the annual Remembrance Day service\",\"d\":[\"Sir Christopher Wren\",\"Dame Zaha Hadid\",\"Sir Norman Foster\"],\"s\":\"Sir Edwin Lutyens\"},{\"t\":\"arts\",\"q\":\"Who was Gertrude Jekyll?\",\"a\":\"A garden designer who often worked with Sir Edwin Lutyens to design colourful gardens around the houses he designed\",\"d\":[\"A famous novelist of the Victorian period whose books describe country houses and their gardens\",\"A suffragette leader\",\"A portrait painter\"],\"s\":\"A garden designer who often worked with Sir Edwin Lutyens to design colourful gardens around the houses he designed\"},{\"t\":\"arts\",\"q\":\"What annual flower show takes place in London showcasing garden design?\",\"a\":\"The Chelsea Flower Show\",\"d\":[\"The Kew Garden Festival\",\"The Eden Show\",\"The Hampton Court Fair\"],\"s\":\"The Chelsea Flower Show\"},{\"t\":\"arts\",\"q\":\"Which British writers have won the Nobel Prize in Literature?\",\"a\":\"Several, including the novelist Sir William Golding, the poet Seamus Heaney, and the playwright Harold Pinter\",\"d\":[\"Jane Austen, Charles Dickens and Thomas Hardy\",\"J K Rowling, Agatha Christie and Roald Dahl\",\"Graham Greene, Evelyn Waugh and Kingsley Amis\"],\"s\":\"Several, including the novelist Sir William Golding, the poet Seamus Heaney\"},{\"t\":\"arts\",\"q\":\"Who wrote Pride and Prejudice and Sense and Sensibility?\",\"a\":\"Jane Austen — her books are concerned with marriage and family relationships\",\"d\":[\"Charles Dickens\",\"Thomas Hardy\",\"The Bronte sisters\"],\"s\":\"Jane Austen\"},{\"t\":\"arts\",\"q\":\"Which novelist wrote Oliver Twist and Great Expectations?\",\"a\":\"Charles Dickens\",\"d\":[\"Thomas Hardy\",\"Sir Arthur Conan Doyle\",\"Evelyn Waugh\"],\"s\":\"Charles Dickens\"},{\"t\":\"arts\",\"q\":\"Who created the character Sherlock Holmes?\",\"a\":\"Sir Arthur Conan Doyle — Sherlock Holmes was a fictional detective in London\",\"d\":[\"Agatha Christie\",\"Graham Greene\",\"Ian Fleming\"],\"s\":\"Sir Arthur Conan Doyle\"},{\"t\":\"arts\",\"q\":\"Who wrote the Harry Potter series?\",\"a\":\"J K Rowling — the books have been translated into many languages and made into films\",\"d\":[\"Roald Dahl\",\"J R R Tolkien\",\"Sir William Golding\"],\"s\":\"J K Rowling\"},{\"t\":\"arts\",\"q\":\"What is the Man Booker Prize?\",\"a\":\"An annual prize for fiction awarded since 1968 — authors including Ian McEwan, Hilary Mantel and Julian Barnes have won it\",\"d\":[\"A poetry prize\",\"A prize for children's books\",\"A science writing prize\"],\"s\":\"An annual prize for fiction awarded since 1968\"},{\"t\":\"arts\",\"q\":\"Which Scottish novelist wrote the famous Waverley novels?\",\"a\":\"Sir Walter Scott\",\"d\":[\"Robert Louis Stevenson\",\"Robert Burns\",\"John Barbour\"],\"s\":\"Sir Walter Scott\"},{\"t\":\"arts\",\"q\":\"Which poet wrote The Daffodils ('I wandered lonely as a cloud')?\",\"a\":\"William Wordsworth — a poet inspired by nature\",\"d\":[\"William Blake\",\"John Keats\",\"Lord Byron\"],\"s\":\"William Wordsworth\"},{\"t\":\"arts\",\"q\":\"Which poets are known for their poetry about the First World War?\",\"a\":\"Wilfred Owen and Siegfried Sassoon — they wrote about their experiences in the trenches\",\"d\":[\"Tennyson and Browning\",\"Wordsworth and Coleridge\",\"Eliot and Auden\"],\"s\":\"Wilfred Owen and Siegfried Sassoon\"},{\"t\":\"arts\",\"q\":\"Where are many great poets buried or commemorated?\",\"a\":\"In Poets' Corner in Westminster Abbey\",\"d\":[\"In St Paul's Cathedral\",\"In Canterbury Cathedral\",\"In the Tower of London\"],\"s\":\"In Poets' Corner in Westminster Abbey\"},{\"t\":\"customs\",\"q\":\"When is Christmas Day and how is it celebrated?\",\"a\":\"On 25 December, celebrating the birth of Jesus Christ — a public holiday when many people spend the day with their family, eat turkey, exchange gifts and decorate trees\",\"d\":[\"On 24 December, with fireworks\",\"On 26 December, with gift-giving\",\"On 6 January, with feasting\"],\"s\":\"On 25 December, celebrating the birth of Jesus Christ\"},{\"t\":\"customs\",\"q\":\"What is Boxing Day?\",\"a\":\"The day after Christmas Day (26 December), and it is a public holiday\",\"d\":[\"The day before Christmas\",\"The first day of January\",\"The last Friday before Christmas\"],\"s\":\"The day after Christmas Day (26 December)\"},{\"t\":\"customs\",\"q\":\"What does Easter commemorate?\",\"a\":\"The death of Jesus Christ on Good Friday and his rising from the dead on Easter Sunday\",\"d\":[\"The birth of Jesus Christ, celebrated each spring with chocolate eggs as a symbol of new life\",\"The harvest\",\"The coming of spring only\"],\"s\":\"The death of Jesus Christ on Good Friday and his rising from the dead on Easter Sunday\"},{\"t\":\"customs\",\"q\":\"What is Lent, and what day does it begin on?\",\"a\":\"The 40 days before Easter, a time when Christians take time to reflect and prepare for Easter, traditionally by fasting — it begins on Ash Wednesday\",\"d\":[\"The 12 days after Christmas, beginning on Boxing Day\",\"The week before Christmas, beginning on Advent Sunday\",\"The 40 days after Easter, beginning on Easter Monday\"],\"s\":\"The 40 days before Easter, a time when Christians take time to reflect and prepare for Easter, traditionally by fasting\"},{\"t\":\"customs\",\"q\":\"What is Shrove Tuesday also called, and what do people do?\",\"a\":\"Pancake Day — the day before Lent starts, when people traditionally eat pancakes\",\"d\":[\"Ash Wednesday — people fast\",\"Mothering Sunday — people give gifts\",\"Hogmanay — people sing Auld Lang Syne\"],\"s\":\"Pancake Day\"},{\"t\":\"customs\",\"q\":\"What are Easter eggs?\",\"a\":\"Chocolate eggs often given as presents at Easter as a symbol of new life\",\"d\":[\"Painted hen's eggs eaten on Good Friday\",\"Eggs hidden by the Church\",\"Eggs given at Christmas\"],\"s\":\"Chocolate eggs often given as presents at Easter as a symbol of new life\"},{\"t\":\"customs\",\"q\":\"What is Diwali and who celebrates it?\",\"a\":\"The Festival of Lights, celebrated by Hindus and Sikhs — it normally falls in October or November and lasts for five days, celebrating the victory of good over evil\",\"d\":[\"A Muslim festival at the end of Ramadan\",\"A Jewish festival of lights in December\",\"A Buddhist new year festival\"],\"s\":\"The Festival of Lights, celebrated by Hindus and Sikhs\"},{\"t\":\"customs\",\"q\":\"What is Hanukkah?\",\"a\":\"A Jewish festival in November or December lasting eight days, remembering the Jews' struggle for religious freedom — on each day a candle is lit on a menorah\",\"d\":[\"A Hindu festival of lights held over five days in October or November to mark the start of the new year\",\"A festival at the end of a month of fasting\",\"A spring harvest festival\"],\"s\":\"A Jewish festival in November or December lasting eight days, remembering the Jews' struggle for religious freedom\"},{\"t\":\"customs\",\"q\":\"What is Eid al-Fitr?\",\"a\":\"A Muslim festival celebrating the end of Ramadan, when Muslims have fasted for a month — they thank Allah for the strength to complete the fast\",\"d\":[\"A festival remembering the prophet Ibrahim's sacrifice\",\"The Muslim new year\",\"A harvest celebration\"],\"s\":\"A Muslim festival celebrating the end of Ramadan\"},{\"t\":\"customs\",\"q\":\"What is Eid ul Adha?\",\"a\":\"A Muslim festival remembering that the prophet Ibrahim was willing to sacrifice his son when God ordered him to — many Muslims sacrifice an animal to eat, which in Britain must be done in a slaughterhouse\",\"d\":[\"The festival that celebrates the end of Ramadan, when Muslims have fasted for a whole month\",\"The Festival of Lights\",\"A festival marking the birth of the prophet\"],\"s\":\"A Muslim festival remembering that the prophet Ibrahim was willing to sacrifice his son when God ordered him to\"},{\"t\":\"customs\",\"q\":\"What is Vaisakhi and when is it celebrated?\",\"a\":\"A Sikh festival (also spelled Baisakhi) celebrating the founding of the Sikh community known as the Khalsa — celebrated on 14 April each year with parades, dancing and singing\",\"d\":[\"A Hindu festival held each October to celebrate the victory of good over evil with lights and fireworks\",\"A Buddhist festival in May\",\"A Jewish festival in September\"],\"s\":\"A Sikh festival (also spelled Baisakhi) celebrating the founding of the Sikh community known as the Khalsa\"},{\"t\":\"customs\",\"q\":\"What is Bonfire Night and when is it?\",\"a\":\"5 November — people set off fireworks at home or in special displays; its origin is the night in 1605 when a group of Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament\",\"d\":[\"31 October — a night of dressing up and pumpkins\",\"11 November — a night to remember the war dead\",\"1 January — a night of fireworks for the new year\"],\"s\":\"5 November\"},{\"t\":\"customs\",\"q\":\"What is Remembrance Day?\",\"a\":\"11 November — it commemorates those who died fighting for the UK and its allies; people wear poppies, there is a two-minute silence at 11.00 am, and wreaths are laid at the Cenotaph in Whitehall\",\"d\":[\"5 November — remembering a failed plot\",\"The last Monday in May\",\"25 December\"],\"s\":\"11 November\"},{\"t\":\"customs\",\"q\":\"What is Halloween and what are its roots?\",\"a\":\"31 October — an ancient festival with roots in the pagan festival marking the beginning of winter; young people dress up and go 'trick or treating', and people carve lanterns out of pumpkins\",\"d\":[\"A Christian festival celebrating saints' lives only\",\"A Roman harvest festival\",\"A Viking midwinter feast\"],\"s\":\"31 October\"},{\"t\":\"customs\",\"q\":\"What happens on 14 February?\",\"a\":\"Valentine's Day — when lovers exchange cards and gifts, and sometimes people send anonymous cards to someone they secretly admire\",\"d\":[\"April Fool's Day\",\"Mothering Sunday\",\"New Year's Day\"],\"s\":\"Valentine's Day\"},{\"t\":\"customs\",\"q\":\"What happens on 1 April in the UK?\",\"a\":\"April Fool's Day — people play jokes on each other until midday; television and newspapers often have stories to trick people\",\"d\":[\"People exchange anonymous cards\",\"People eat pancakes\",\"People set off fireworks\"],\"s\":\"April Fool's Day\"},{\"t\":\"customs\",\"q\":\"What are bank holidays?\",\"a\":\"Public holidays with no religious or national significance when banks and many other businesses are closed for the day — they are of no religious significance\",\"d\":[\"Religious holidays observed by banks and their workers, each one linked to a saint's day in the Christian calendar\",\"Days when only banks close\",\"Saints' days celebrated across the UK\"],\"s\":\"Public holidays with no religious or national significance when banks and many other businesses are closed for the day\"},{\"t\":\"customs\",\"q\":\"What is Hogmanay?\",\"a\":\"31 December, New Year's Eve, in Scotland — a public holiday there, and for some Scottish people a bigger holiday than Christmas\",\"d\":[\"The Scottish name for Easter\",\"A Welsh music festival\",\"The Scottish harvest festival\"],\"s\":\"31 December, New Year's Eve, in Scotland\"},{\"t\":\"leisure\",\"q\":\"What proportion of people in the UK have gardens, and what do many rent?\",\"a\":\"A lot of people have gardens at home and spend their free time looking after them; some people rent additional land called an allotment, where they grow fruit and vegetables\",\"d\":[\"Most people have no access to gardens\",\"Most people rent their gardens from the local council, and extra land for growing vegetables is called a croft\",\"Gardens are owned only by councils\"],\"s\":\"A lot of people have gardens at home and spend their free time looking after them; some people rent additional land called an allotment\"},{\"t\":\"leisure\",\"q\":\"Which flowers are associated with each country of the UK?\",\"a\":\"England the rose, Scotland the thistle, Wales the daffodil and Northern Ireland the shamrock\",\"d\":[\"England the daffodil, Scotland the rose, Wales the thistle, Northern Ireland the poppy\",\"England the lily, Scotland the heather, Wales the leek, Northern Ireland the rose\",\"England the tulip, Scotland the thistle, Wales the daisy, Northern Ireland the clover\"],\"s\":\"England the rose, Scotland the thistle, Wales the daffodil and Northern Ireland the shamrock\"},{\"t\":\"leisure\",\"q\":\"What is fish and chips?\",\"a\":\"A traditional food of England — fish coated in batter, fried, and eaten with chips\",\"d\":[\"A Scottish dish of oats and meat\",\"An Ulster fry\",\"A Welsh cake\"],\"s\":\"A traditional food of England\"},{\"t\":\"leisure\",\"q\":\"What is haggis?\",\"a\":\"A traditional food of Scotland — a sheep's stomach filled with offal, suet, onions and oatmeal\",\"d\":[\"A Welsh soup made with lamb\",\"A fried bread from Northern Ireland\",\"An English roast dish\"],\"s\":\"A traditional food of Scotland\"},{\"t\":\"leisure\",\"q\":\"What is an Ulster fry?\",\"a\":\"A traditional food of Northern Ireland — a fried meal with bacon, eggs, sausage, black pudding, white pudding, tomatoes, mushrooms, soda bread and potato bread\",\"d\":[\"A Scottish breakfast of porridge\",\"A Welsh dish of leeks and cheese\",\"A fish dish from Belfast\"],\"s\":\"A traditional food of Northern Ireland\"},{\"t\":\"leisure\",\"q\":\"What is Welsh rarebit?\",\"a\":\"A traditional food of Wales — bread and melted cheese (also called Welsh rabbit)\",\"d\":[\"A rabbit stew from Wales\",\"A sweet cake with dried fruit\",\"A lamb roast\"],\"s\":\"A traditional food of Wales\"},{\"t\":\"leisure\",\"q\":\"Who were Sir Alfred Hitchcock and Sir David Lean?\",\"a\":\"Great British film directors — Lean directed films such as Lawrence of Arabia; Hitchcock later moved to Hollywood\",\"d\":[\"Famous British actors\",\"Television comedians\",\"Theatre producers in the West End\"],\"s\":\"Great British film directors\"},{\"t\":\"leisure\",\"q\":\"What happened to the British film industry in the 1950s and 1960s?\",\"a\":\"British studios flourished — the Ealing Studios comedies were popular, and 007 (James Bond) films began, based on books by Ian Fleming\",\"d\":[\"All British studios closed\",\"Films could only be made in Hollywood\",\"Cinema was banned on Sundays\"],\"s\":\"British studios flourished\"},{\"t\":\"leisure\",\"q\":\"What are the BAFTAs?\",\"a\":\"The British Academy of Film and Television Arts (BAFTA) awards — the British equivalent of the Oscars\",\"d\":[\"British music awards\",\"British theatre awards\",\"British sports personality awards\"],\"s\":\"The British Academy of Film and Television Arts (BAFTA) awards\"},{\"t\":\"leisure\",\"q\":\"What tradition does British comedy draw on?\",\"a\":\"A long tradition — from medieval court jesters, through Shakespeare's comic characters, satirical magazines like Punch in the Victorian period, music hall, and later television satire such as Monty Python's Flying Circus\",\"d\":[\"Comedy only became popular after 1945\",\"Comedy was banned in the Victorian period\",\"British comedy comes entirely from America\"],\"s\":\"A long tradition\"},{\"t\":\"leisure\",\"q\":\"What do you need to watch television in the UK?\",\"a\":\"A television licence — one licence covers all of the equipment at one address; people over 75 can apply for a free licence and blind people get a 50% discount\",\"d\":[\"A licence for each television set\",\"No licence is needed\",\"A licence only for satellite television\"],\"s\":\"A television licence\"},{\"t\":\"leisure\",\"q\":\"What are popular UK soap operas mentioned in the handbook?\",\"a\":\"Coronation Street and EastEnders\",\"d\":[\"Neighbours and Home and Away\",\"Doctor Who and Sherlock\",\"The Archers and Casualty\"],\"s\":\"Coronation Street and EastEnders\"},{\"t\":\"leisure\",\"q\":\"What is the National Lottery, and how old must you be to participate?\",\"a\":\"A lottery drawn every week — you can buy tickets or scratch cards if you are 18 or over\",\"d\":[\"A weekly draw for people 16 and over\",\"A monthly draw for adults over 21\",\"A raffle run by local councils\"],\"s\":\"A lottery drawn every week\"},{\"t\":\"leisure\",\"q\":\"How old must you be to go into a betting shop or gambling club?\",\"a\":\"18 or over\",\"d\":[\"16 or over\",\"21 or over\",\"There is no age limit\"],\"s\":\"18 or over\"},{\"t\":\"leisure\",\"q\":\"What is a pub quiz?\",\"a\":\"A popular pub activity — quizzes are often held in pubs, and people can take part in teams\",\"d\":[\"A television game show\",\"A test to obtain a licence\",\"A political debate held in pubs\"],\"s\":\"A popular pub activity\"},{\"t\":\"leisure\",\"q\":\"At what age can you drink alcohol in a pub?\",\"a\":\"You must be 18 to drink alcohol in a pub, but 16-year-olds can drink beer, wine or cider with a meal if they are with an adult\",\"d\":[\"16 in all circumstances\",\"21 in all circumstances\",\"18, with no exceptions of any kind\"],\"s\":\"You must be 18 to drink alcohol in a pub\"},{\"t\":\"leisure\",\"q\":\"What must dog owners do in public places?\",\"a\":\"All dogs in public places must wear a collar showing the name and address of the owner — the owner is responsible for keeping the dog under control and cleaning up after it\",\"d\":[\"Keep dogs on a lead at all times everywhere\",\"Obtain a dog licence each year\",\"Muzzle all dogs in parks\"],\"s\":\"All dogs in public places must wear a collar showing the name and address of the owner\"},{\"t\":\"places\",\"q\":\"How many national parks are there?\",\"a\":\"There are 15 national parks in England, Wales and Scotland — areas of protected countryside that everyone can visit\",\"d\":[\"10 national parks\",\"20 national parks\",\"5 national parks\"],\"s\":\"15 national parks\"},{\"t\":\"places\",\"q\":\"What is the Giant's Causeway?\",\"a\":\"A land formation of columns made from volcanic lava on the north-east coast of Northern Ireland, formed about 50 million years ago — there are many legends about it\",\"d\":[\"A Roman road in Scotland\",\"A mountain range in Wales\",\"A cliff formation of white chalk columns on the coast of Cornwall, shaped by the sea about 50 million years ago\"],\"s\":\"A land formation of columns made from volcanic lava on the north-east coast of Northern Ireland, formed about 50 million years ago\"},{\"t\":\"places\",\"q\":\"What is the Eden Project and where is it?\",\"a\":\"Biomes like giant greenhouses housing plants from all over the world, located in Cornwall, in the south west of England — it is also a charity for environmental education\",\"d\":[\"A royal botanical garden in Scotland holding the largest collection of trees and plants in Europe\",\"A theme park in Wales\",\"A zoo in London\"],\"s\":\"Biomes like giant greenhouses housing plants from all over the world, located in Cornwall\"},{\"t\":\"places\",\"q\":\"What is Big Ben?\",\"a\":\"The nickname for the great bell of the clock at the Houses of Parliament in London — the clock is over 150 years old, and the clock tower is named 'Elizabeth Tower' in honour of Queen Elizabeth II's Diamond Jubilee in 2012\",\"d\":[\"The name of the clock tower itself only\",\"A statue outside Parliament\",\"The nickname of the Speaker's chair\"],\"s\":\"The nickname for the great bell of the clock at the Houses of Parliament in London\"},{\"t\":\"places\",\"q\":\"What is the London Eye?\",\"a\":\"A Ferris wheel on the southern bank of the River Thames, 443 feet (135 metres) tall — it was originally built as part of the UK's celebration of the new millennium\",\"d\":[\"A skyscraper on the southern bank of the River Thames, 443 feet tall, built to celebrate the millennium\",\"A bridge over the Thames\",\"An observatory in Greenwich\"],\"s\":\"A Ferris wheel on the southern bank of the River Thames, 443 feet (135 metres) tall\"},{\"t\":\"places\",\"q\":\"Where is Loch Lomond and The Trossachs National Park?\",\"a\":\"In the west of Scotland — Loch Lomond is the largest expanse of fresh water in mainland Britain\",\"d\":[\"In the north of England\",\"In south Wales\",\"In Northern Ireland\"],\"s\":\"In the west of Scotland\"},{\"t\":\"places\",\"q\":\"What is Edinburgh Castle?\",\"a\":\"A dominant feature of the skyline of Edinburgh, Scotland — it has a long history dating back to the early Middle Ages and is looked after by Historic Scotland\",\"d\":[\"A Norman castle in Wales\",\"A royal palace in London\",\"A ruined abbey in the Borders\"],\"s\":\"A dominant feature of the skyline of Edinburgh, Scotland\"},{\"t\":\"places\",\"q\":\"What is the Lake District?\",\"a\":\"England's largest national park, famous for its lakes and mountains — its largest lake is Windermere\",\"d\":[\"A park in Scotland famous for lochs\",\"A coastal park in Wales\",\"A forest park in Northern Ireland\"],\"s\":\"England's largest national park, famous for its lakes and mountains\"},{\"t\":\"places\",\"q\":\"What is Snowdonia?\",\"a\":\"A national park in North Wales covering 838 square miles (2,170 square kilometres) — its most well-known landmark is Snowdon, the highest mountain in Wales\",\"d\":[\"A national park in the west of Scotland containing the highest mountain in the British Isles\",\"A mountain in the Lake District\",\"A valley in south Wales\"],\"s\":\"A national park in North Wales covering 838 square miles (2,170 square kilometres)\"},{\"t\":\"places\",\"q\":\"What is the Tower of London and who guards it?\",\"a\":\"A tower first built by William the Conqueror after he became king in 1066; tours are given by the Yeoman Warders (Beefeaters), and people can see the Crown Jewels there\",\"d\":[\"A Victorian prison guarded by police\",\"A royal palace guarded by the Household Cavalry\",\"A cathedral tower guarded by vergers\"],\"s\":\"A tower first built by William the Conqueror after he became king in 1066; tours are given by the Yeoman Warders (Beefeaters)\"},{\"t\":\"religion\",\"q\":\"In the 2009 Citizenship Survey, what percentage of people identified themselves as Christian?\",\"a\":\"70% — with 4% Muslim, 2% Hindu, 1% Sikh, less than 0.5% Jewish or Buddhist, and 21% saying they had no religion\",\"d\":[\"59%\",\"80%\",\"45%\"],\"s\":\"70%\"},{\"t\":\"religion\",\"q\":\"What is the official Church of the state in England?\",\"a\":\"The Church of England, called the Anglican Church in other countries and the Episcopal Church in Scotland and the United States — a Protestant Church that has existed since the Reformation in the 1530s\",\"d\":[\"The Roman Catholic Church, restored as the state Church after the Reformation and led in England by a cardinal\",\"The Methodist Church\",\"The Presbyterian Church\"],\"s\":\"The Church of England, called the Anglican Church in other countries and the Episcopal Church in Scotland and the United States\"},{\"t\":\"religion\",\"q\":\"Who is the head of the Church of England, and who is its spiritual leader?\",\"a\":\"The monarch is the head; the spiritual leader is the Archbishop of Canterbury\",\"d\":[\"The Prime Minister is head; the Pope is spiritual leader\",\"The Archbishop is head; the monarch is spiritual leader\",\"The Moderator is head; the Dean is spiritual leader\"],\"s\":\"The monarch is the head; the spiritual leader is the Archbishop of Canterbury\"},{\"t\":\"religion\",\"q\":\"What is the national Church in Scotland?\",\"a\":\"The Church of Scotland, a Presbyterian Church governed by ministers and elders — its General Assembly chairperson is the Moderator, appointed for one year\",\"d\":[\"The Church of England\",\"The Episcopal Church\",\"There is no national Church in Scotland\"],\"s\":\"The Church of Scotland, a Presbyterian Church governed by ministers and elders\"},{\"t\":\"religion\",\"q\":\"Is there an established Church in Wales and Northern Ireland?\",\"a\":\"No — there is no established Church in Wales or Northern Ireland\",\"d\":[\"Yes, the Church of England in both\",\"Yes, the Presbyterian Church in both\",\"Yes, the Church in Wales is established\"],\"s\":\"No\"},{\"t\":\"religion\",\"q\":\"When is St David's Day, the national day of Wales?\",\"a\":\"1 March — St David is the patron saint of Wales\",\"d\":[\"17 March\",\"23 April\",\"30 November\"],\"s\":\"1 March\"},{\"t\":\"religion\",\"q\":\"When is St Patrick's Day, the national day of Northern Ireland?\",\"a\":\"17 March — St Patrick is the patron saint; only Scotland and Northern Ireland have their patron saint's day as an official holiday\",\"d\":[\"1 March\",\"30 November\",\"23 April\"],\"s\":\"17 March\"},{\"t\":\"religion\",\"q\":\"When is St George's Day, the national day of England?\",\"a\":\"23 April — St George is the patron saint of England\",\"d\":[\"1 March\",\"17 March\",\"30 November\"],\"s\":\"23 April\"},{\"t\":\"religion\",\"q\":\"When is St Andrew's Day, the national day of Scotland?\",\"a\":\"30 November — St Andrew is the patron saint of Scotland\",\"d\":[\"23 April\",\"17 March\",\"1 March\"],\"s\":\"30 November\"},{\"t\":\"sport\",\"q\":\"How many times has the UK hosted the Olympic Games?\",\"a\":\"On three occasions: 1908, 1948 and 2012 — the main Olympic site for the 2012 Games was in Stratford, East London, and the British team finished third in the medal table\",\"d\":[\"Twice: 1948 and 2012\",\"Once: 2012\",\"Four times: 1908, 1936, 1948 and 2012\"],\"s\":\"On three occasions\"},{\"t\":\"sport\",\"q\":\"How did the Paralympic Games originate?\",\"a\":\"They have their origin in the work of Dr Sir Ludwig Guttman, a German refugee, at the Stoke Mandeville hospital in Buckinghamshire — he developed new methods of treatment for people with spinal injuries and encouraged patients to take part in exercise and sport\",\"d\":[\"They began in America after the Second World War as a sports competition for injured servicemen\",\"They were founded by the Olympic Committee in Greece\",\"They started at the 1908 London Olympics\"],\"s\":\"They have their origin in the work of Dr Sir Ludwig Guttman, a German refugee, at the Stoke Mandeville hospital in Buckinghamshire\"},{\"t\":\"sport\",\"q\":\"Who was the first man to run a mile in under four minutes?\",\"a\":\"Sir Roger Bannister, in 1954\",\"d\":[\"Sir Chris Hoy\",\"Mo Farah\",\"Sir Steve Redgrave\"],\"s\":\"Sir Roger Bannister, in 1954\"},{\"t\":\"sport\",\"q\":\"Who was Sir Jackie Stewart?\",\"a\":\"A Scottish former racing driver who won the Formula 1 world championship three times\",\"d\":[\"A Scottish footballer who captained the national team at three World Cup tournaments in the 1970s\",\"A rugby captain\",\"An Olympic cyclist\"],\"s\":\"A Scottish former racing driver who won the Formula 1 world championship three times\"},{\"t\":\"sport\",\"q\":\"Who was Bobby Moore?\",\"a\":\"The captain of the English football team that won the World Cup in 1966\",\"d\":[\"A Formula 1 champion\",\"A famous cricketer\",\"The first man to sail single-handed around the world\"],\"s\":\"The captain of the English football team that won the World Cup in 1966\"},{\"t\":\"sport\",\"q\":\"Who is Sir Steve Redgrave?\",\"a\":\"A rower who won gold medals in five consecutive Olympic Games and is one of Britain's greatest Olympians\",\"d\":[\"A cyclist who won six gold medals\",\"A sprinter who won four golds\",\"A sailor who won gold medals in five consecutive Olympic Games and sailed around the world single-handed\"],\"s\":\"A rower who won gold medals in five consecutive Olympic Games and is one of Britain's greatest Olympians\"},{\"t\":\"sport\",\"q\":\"Who is Baroness Tanni Grey-Thompson?\",\"a\":\"An athlete who uses a wheelchair and won 16 Paralympic medals, including 11 gold medals, in races over five Paralympic Games — she won the London Marathon six times\",\"d\":[\"A Paralympic swimmer with 8 medals\",\"An Olympic cyclist\",\"A tennis champion\"],\"s\":\"An athlete who uses a wheelchair and won 16 Paralympic medals, including 11 gold medals\"},{\"t\":\"sport\",\"q\":\"Who is Dame Kelly Holmes?\",\"a\":\"She won two gold medals for running in the 2004 Olympic Games and has held a number of British and European records\",\"d\":[\"A Paralympic athlete with 16 medals\",\"A swimmer who won two gold medals at the 2004 Olympic Games and was the first British woman to swim the Channel\",\"A rower with five gold medals\"],\"s\":\"She won two gold medals for running in the 2004 Olympic Games and has held a number of British and European records\"},{\"t\":\"sport\",\"q\":\"Who is Dame Ellen MacArthur?\",\"a\":\"A yachtswoman who in 2004 became the fastest person to sail around the world single-handed\",\"d\":[\"A yachtswoman who in 2004 became the first woman to swim the English Channel in both directions\",\"An Olympic rower\",\"A Paralympic cyclist\"],\"s\":\"A yachtswoman who in 2004 became the fastest person to sail around the world single-handed\"},{\"t\":\"sport\",\"q\":\"Who is Sir Chris Hoy?\",\"a\":\"A Scottish cyclist who has won six gold and one silver Olympic medals and eleven world championship titles\",\"d\":[\"A Scottish racing driver who won the Formula 1 world championship six times and eleven Grands Prix\",\"An English rower\",\"A Welsh sprinter\"],\"s\":\"A Scottish cyclist who has won six gold and one silver Olympic medals and eleven world championship titles\"},{\"t\":\"sport\",\"q\":\"Who is Mo Farah?\",\"a\":\"A British distance runner born in Somalia — he won gold medals in the 2012 Olympics for the 5,000 and 10,000 metres and is the first Briton to win the Olympic gold medal in the 10,000 metres\",\"d\":[\"A British sprinter born in Jamaica\",\"A marathon runner from Kenya\",\"A middle-distance runner from Wales\"],\"s\":\"A British distance runner born in Somalia\"},{\"t\":\"sport\",\"q\":\"Who is Jessica Ennis?\",\"a\":\"An athlete who won the 2012 Olympic gold medal in the heptathlon, which includes seven different track and field events\",\"d\":[\"A cyclist who won the Tour de France\",\"A swimmer with two golds\",\"A tennis champion\"],\"s\":\"An athlete who won the 2012 Olympic gold medal in the heptathlon\"},{\"t\":\"sport\",\"q\":\"Who is Andy Murray?\",\"a\":\"A Scottish tennis player who in 2012 won the men's singles in the US Open — the first British man to win a singles title in a Grand Slam tournament since 1936; he also won Olympic gold and silver medals in 2012\",\"d\":[\"An English tennis player who won Wimbledon in 1936\",\"A Welsh tennis champion\",\"A Scottish golfer\"],\"s\":\"A Scottish tennis player who in 2012 won the men's singles in the US Open\"},{\"t\":\"sport\",\"q\":\"Who is Ellie Simmonds?\",\"a\":\"A Paralympian who won gold medals for swimming at the 2008 and 2012 Paralympic Games and was the youngest member of the British team at the 2008 Games\",\"d\":[\"An Olympic gymnast\",\"A Paralympic sprinter who won gold medals in the 100 metres at the 2008 and 2012 Games and carried the flag at the opening ceremony\",\"A wheelchair racer\"],\"s\":\"A Paralympian who won gold medals for swimming at the 2008 and 2012 Paralympic Games and was the youngest member of the British team at the 2008 Games\"},{\"t\":\"sport\",\"q\":\"Who is Bradley Wiggins?\",\"a\":\"A cyclist who in 2012 became the first Briton to win the Tour de France; he has won seven Olympic medals, including gold medals in the 2004, 2008 and 2012 Olympic Games\",\"d\":[\"The first Briton to run a four-minute mile\",\"A Formula 1 world champion who in 2012 became the first Briton to win the title three times in a row\",\"An Olympic rower\"],\"s\":\"A cyclist who in 2012 became the first Briton to win the Tour de France; he has won seven Olympic medals, including gold medals in the 2004, 2008 and 2012 Olympic Games\"},{\"t\":\"sport\",\"q\":\"Who is David Weir?\",\"a\":\"A Paralympian who uses a wheelchair — he won six gold medals over two Paralympic Games and has won the London Marathon six times\",\"d\":[\"An Olympic swimmer\",\"A Paralympic cyclist\",\"A blind footballer\"],\"s\":\"A Paralympian who uses a wheelchair\"},{\"t\":\"sport\",\"q\":\"What is cricket's most famous competition between England and Australia?\",\"a\":\"The Ashes — a series of Test matches played regularly between England and Australia\",\"d\":[\"The Open Championship\",\"The Six Nations\",\"The FA Cup\"],\"s\":\"The Ashes\"},{\"t\":\"sport\",\"q\":\"What is the UK's most popular sport?\",\"a\":\"Football — the first professional clubs were formed in the late 19th century, and the English Premier League attracts a huge international audience\",\"d\":[\"Cricket\",\"Rugby\",\"Tennis\"],\"s\":\"Football\"},{\"t\":\"sport\",\"q\":\"What was England's only international football tournament victory?\",\"a\":\"The World Cup of 1966, hosted in the UK\",\"d\":[\"The World Cup of 1970\",\"The European Championships of 1996\",\"The World Cup of 1990\"],\"s\":\"The World Cup of 1966, hosted in the UK\"},{\"t\":\"sport\",\"q\":\"When and where did rugby originate?\",\"a\":\"In England in the early 19th century — it is a very popular sport with two different types: union and league\",\"d\":[\"In Wales in the 18th century\",\"In Scotland in 1872\",\"In Ireland in 1900\"],\"s\":\"In England in the early 19th century\"},{\"t\":\"sport\",\"q\":\"Where is the Open Championship in golf hosted?\",\"a\":\"On different golf courses — it is the only 'Major' tournament held outside the United States; the modern game of golf can be traced back to 15th-century Scotland, and St Andrews in Scotland is known as the home of golf\",\"d\":[\"Always at St Andrews\",\"Always at Wentworth\",\"Alternately in England and America\"],\"s\":\"On different golf courses\"},{\"t\":\"sport\",\"q\":\"What is the most famous tennis tournament hosted in Britain?\",\"a\":\"The Wimbledon Championships, at the All England Lawn Tennis and Croquet Club — the oldest tennis tournament in the world and the only Grand Slam event played on grass\",\"d\":[\"The US Open\",\"The British Grand Slam at Queen's Club\",\"The Davis Cup\"],\"s\":\"The Wimbledon Championships, at the All England Lawn Tennis and Croquet Club\"},{\"t\":\"sport\",\"q\":\"Which famous horse-racing events take place in the UK?\",\"a\":\"Royal Ascot (a five-day race meeting attended by members of the Royal Family), the Grand National at Aintree near Liverpool, and the Scottish Grand National at Ayr\",\"d\":[\"The Derby at Wembley and the Oaks at Wimbledon\",\"The Melbourne Cup and the Kentucky Derby\",\"The Cheltenham Cup at Ascot\"],\"s\":\"Royal Ascot (a five-day race meeting attended by members of the Royal Family), the Grand National at Aintree near Liverpool\"},{\"t\":\"sport\",\"q\":\"What popular yearly rowing race takes place on the Thames?\",\"a\":\"A race between Oxford and Cambridge Universities — rowing is popular both as a leisure activity and as a competitive sport\",\"d\":[\"A race between London and Oxford\",\"A race between England and Scotland\",\"A race between Eton and Harrow\"],\"s\":\"A race between Oxford and Cambridge Universities\"},{\"t\":\"sport\",\"q\":\"Which British drivers have won the Formula 1 world championship?\",\"a\":\"Recent British winners include Damon Hill, Lewis Hamilton and Jensen Button — motor-car racing in the UK started in 1902 and a Formula 1 Grand Prix event is held in the UK each year\",\"d\":[\"Only Sir Jackie Stewart has won it\",\"Bradley Wiggins and Chris Hoy\",\"No British driver has ever won it\"],\"s\":\"Recent British winners include Damon Hill, Lewis Hamilton and Jensen Button\"},{\"t\":\"uk-today\",\"q\":\"What is the longest distance on the mainland of Britain?\",\"a\":\"From John O'Groats on the north coast of Scotland to Land's End in the south-west corner of England — about 870 miles (approximately 1,400 kilometres)\",\"d\":[\"About 500 miles from London to Edinburgh\",\"About 1,200 miles from Dover to Aberdeen\",\"About 600 miles from Cardiff to Glasgow\"],\"s\":\"About 870 miles, from John O'Groats to Land's End\"},{\"t\":\"uk-today\",\"q\":\"What is the capital city of the UK?\",\"a\":\"London\",\"d\":[\"Birmingham\",\"Manchester\",\"Westminster\"],\"s\":\"London\"},{\"t\":\"uk-today\",\"q\":\"What are the capital cities of Scotland, Wales and Northern Ireland?\",\"a\":\"Edinburgh (Scotland), Cardiff (Wales) and Belfast (Northern Ireland)\",\"d\":[\"Glasgow, Swansea and Londonderry\",\"Edinburgh, Swansea and Armagh\",\"Aberdeen, Cardiff and Belfast\"],\"s\":\"Edinburgh (Scotland), Cardiff (Wales) and Belfast (Northern Ireland)\"},{\"t\":\"uk-today\",\"q\":\"What is the currency of the UK?\",\"a\":\"The pound sterling (symbol £) — there are 100 pence in a pound; coins are 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2, and notes are £5, £10, £20 and £50\",\"d\":[\"The euro\",\"The pound, with 20 shillings in a pound\",\"The sterling dollar\"],\"s\":\"The pound sterling (symbol £)\"},{\"t\":\"uk-today\",\"q\":\"Are Northern Ireland and Scotland banknotes valid in the rest of the UK?\",\"a\":\"Yes — they are valid everywhere in the UK, but shops and businesses do not have to accept them\",\"d\":[\"No — they can only be used locally\",\"Yes, and every shop must accept them\",\"Only in banks\"],\"s\":\"Yes\"},{\"t\":\"uk-today\",\"q\":\"What languages other than English are spoken in parts of the UK?\",\"a\":\"Welsh in Wales (taught in schools and universities), Gaelic in some parts of the Highlands and Islands of Scotland, and Irish Gaelic by some people in Northern Ireland\",\"d\":[\"Cornish in Cornwall, Manx on the Isle of Man, and Norman French in the Channel ports, all taught in schools\",\"French in the Channel ports\",\"Latin in church services only\"],\"s\":\"Welsh in Wales (taught in schools and universities), Gaelic in some parts of the Highlands and Islands of Scotland\"},{\"t\":\"uk-today\",\"q\":\"What was the estimated UK population in 2022?\",\"a\":\"67.6 million — population growth has been faster in recent years, partly due to migration and longer life expectancy\",\"d\":[\"57 million\",\"62 million\",\"72 million\"],\"s\":\"67.6 million\"},{\"t\":\"uk-today\",\"q\":\"How is the population distributed across the four parts of the UK?\",\"a\":\"England makes up about 84% of the population, Wales around 5%, Scotland just over 8%, and Northern Ireland less than 3%\",\"d\":[\"England 70%, Scotland 15%, Wales 10%, Northern Ireland 5%\",\"England 90%, with the rest evenly split\",\"England 75%, Scotland 12%, Wales 8%, Northern Ireland 5%\"],\"s\":\"England makes up about 84% of the population, Wales around 5%, Scotland just over 8%\"},{\"t\":\"uk-today\",\"q\":\"Why does the UK have an ageing population?\",\"a\":\"People are living longer than ever before, due to improved living standards and better health care — there is a record number of people aged 85 and over\",\"d\":[\"Because the birth rate is rising rapidly\",\"Because young people are emigrating\",\"Because of post-war immigration, which brought many older workers and their parents to the UK\"],\"s\":\"People are living longer than ever before, due to improved living standards and better health care\"},{\"t\":\"uk-today\",\"q\":\"What proportion of the UK population has a parent or grandparent born outside the UK?\",\"a\":\"Nearly 10% — post-war immigration means the UK is a multinational and multiracial society\",\"d\":[\"Nearly 25%\",\"Nearly 50%\",\"Less than 2%\"],\"s\":\"Nearly 10%\"},{\"t\":\"uk-today\",\"q\":\"What does the law say about men and women in the UK?\",\"a\":\"It is a legal requirement that men and women should not be discriminated against because of their gender or because they are, or are not, married — they have equal rights to work, own property, marry and divorce\",\"d\":[\"Women gained equal property rights only in 1990\",\"Men and women have equal rights in most areas, except at work where employers may lawfully prefer men\",\"Married women may not own property\"],\"s\":\"It is a legal requirement that men and women should not be discriminated against because of their gender or because they are, or are not, married\"},{\"t\":\"uk-today\",\"q\":\"What share of the workforce do women make up in Britain today?\",\"a\":\"About half — and on average, girls leave school with better qualifications than boys, and more women than men study at university\",\"d\":[\"About a quarter\",\"About a third\",\"About two thirds\"],\"s\":\"About half\"},{\"t\":\"sport\",\"q\":\"Who was Sir Ian Botham?\",\"a\":\"He captained the English cricket team and holds a number of English Test cricket records, both for batting and for bowling\",\"d\":[\"He captained the English football team in 1966\",\"A Formula 1 world champion\",\"A famous rugby captain who holds a number of English records in both the union and league codes\"],\"s\":\"He captained the English cricket team and holds a number of English Test cricket records, both for batting and for bowling\"},{\"t\":\"sport\",\"q\":\"Who were Jayne Torvill and Christopher Dean?\",\"a\":\"They won gold medals for ice dancing at the Olympic Games in 1984 and in four consecutive world championships\",\"d\":[\"Olympic rowing champions\",\"Olympic swimmers who won gold medals at the 1984 Games and in four consecutive European championships\",\"Winners of Wimbledon in 1984\"],\"s\":\"They won gold medals for ice dancing at the Olympic Games in 1984 and in four consecutive world championships\"},{\"t\":\"sport\",\"q\":\"Who was the first person to sail single-handed around the world?\",\"a\":\"Sir Francis Chichester, in 1966/67 — two years later Sir Robin Knox-Johnston became the first to do it without stopping\",\"d\":[\"Dame Ellen MacArthur, in 2004\",\"Sir Robin Knox-Johnston, in 1966\",\"Sir Steve Redgrave, in 1970\"],\"s\":\"Sir Francis Chichester, in 1966/67\"},{\"t\":\"sport\",\"q\":\"What is the most famous rugby union competition?\",\"a\":\"The Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy — the Super League is the most well-known rugby league (club) competition\",\"d\":[\"The Ashes\",\"The Home Nations Trophy, played between England, Scotland, Wales and the two parts of Ireland\",\"The Open Championship\"],\"s\":\"The Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy\"},{\"t\":\"sport\",\"q\":\"Where is the most famous sailing event in the UK held?\",\"a\":\"At Cowes on the Isle of Wight\",\"d\":[\"At Henley on the Thames\",\"At Portsmouth\",\"At Plymouth\"],\"s\":\"At Cowes on the Isle of Wight\"},{\"t\":\"sport\",\"q\":\"How many ski centres are there in Scotland?\",\"a\":\"Five — and Europe's longest dry ski slope is near Edinburgh\",\"d\":[\"Two\",\"Ten\",\"None — skiing only happens abroad\"],\"s\":\"Five\"},{\"t\":\"since-1945\",\"q\":\"Who was Mary Peters?\",\"a\":\"A talented athlete who won an Olympic gold medal in the pentathlon in 1972 — born in Manchester, she moved to Northern Ireland as a child, later became team manager for the women's British Olympic team and was made a Dame in 2000\",\"d\":[\"The first woman to swim the English Channel\",\"A Scottish tennis champion\",\"Britain's first woman Prime Minister\"],\"s\":\"A talented athlete who won an Olympic gold medal in the pentathlon in 1972\"},{\"t\":\"democracy\",\"q\":\"What is a democracy?\",\"a\":\"A system of government where the whole adult population gets a say — either by voting directly or by choosing representatives to make laws and decisions\",\"d\":[\"Rule by the wealthiest citizens\",\"Rule by a hereditary monarch alone\",\"Government by the civil service\"],\"s\":\"A system of government where the whole adult population gets a say\"},{\"t\":\"democracy\",\"q\":\"At the turn of the 19th century, who could vote in Britain?\",\"a\":\"Only a small group of people could vote — those with property over a certain value; Britain was not a democracy as we know it today\",\"d\":[\"All men over 21\",\"All adults over 18\",\"All property owners including women\"],\"s\":\"Only a small group of people could vote\"},{\"t\":\"democracy\",\"q\":\"Who were the Chartists?\",\"a\":\"A group in the 1830s and 1840s who campaigned for reform of the voting system — their campaign was seen as a failure at the time, but by 1918 most of their demands had been adopted\",\"d\":[\"Campaigners against slavery\",\"Supporters of the king in the Civil War\",\"A group of factory owners\"],\"s\":\"A group in the 1830s and 1840s who campaigned for reform of the voting system\"},{\"t\":\"democracy\",\"q\":\"When was the present voting age of 18 set?\",\"a\":\"In 1969 — the voting age was reduced to 18 for men and women\",\"d\":[\"In 1928\",\"In 1918\",\"In 1945\"],\"s\":\"In 1969\"},{\"t\":\"constitution\",\"q\":\"What is a constitution?\",\"a\":\"A set of principles by which a country is governed, including the institutions responsible for running the country and how their power is kept in check\",\"d\":[\"A single legal document listing all of the criminal and civil laws that the courts of a country may apply\",\"The rules of Parliament only\",\"A treaty between nations\"],\"s\":\"A set of principles by which a country is governed, including the institutions responsible for running the country and how their power is kept in check\"},{\"t\":\"constitution\",\"q\":\"Why is the British constitution called 'unwritten'?\",\"a\":\"Because it is not written down in any single document — it has developed over a long history without a revolution forcing a complete written codification\",\"d\":[\"Because it is secret\",\"Because Parliament refuses to write it\",\"Because it changes every year\"],\"s\":\"Because it is not written down in any single document\"},{\"t\":\"constitution\",\"q\":\"What are the constitutional institutions of the UK?\",\"a\":\"The monarchy, Parliament (the House of Commons and the House of Lords), the Prime Minister, the cabinet, the judiciary (courts), the police, the civil service and the local government\",\"d\":[\"Only Parliament and the courts\",\"The monarchy and the Church of England only\",\"The army, the police, the courts and the Church of England, together with the universities and the Bank of England\"],\"s\":\"The monarchy, Parliament (the House of Commons and the House of Lords), the Prime Minister, the cabinet, the judiciary (courts), the police, the civil service and the local government\"},{\"t\":\"constitution\",\"q\":\"Who is the head of state of the UK?\",\"a\":\"The King (or Queen) — the UK has a constitutional monarchy: the monarch does not rule the country but appoints the government, which the people have chosen in a democratic election\",\"d\":[\"The Prime Minister\",\"The Speaker of the House of Commons\",\"The Archbishop of Canterbury\"],\"s\":\"The King (or Queen)\"},{\"t\":\"constitution\",\"q\":\"Who is the current monarch, and since when?\",\"a\":\"King Charles III has been the sovereign since 2022, following the death of Queen Elizabeth II on 8 September 2022\",\"d\":[\"Queen Elizabeth II, since 1952\",\"King William V, since 2023\",\"King Charles III, since 2012\"],\"s\":\"King Charles III, sovereign since 2022\"},{\"t\":\"constitution\",\"q\":\"Who is the heir apparent to the throne?\",\"a\":\"William, Prince of Wales — the elder son of King Charles III; 'Prince of Wales' is the title for the heir apparent\",\"d\":[\"Prince Harry\",\"Prince Edward, Duke of Edinburgh\",\"Prince George\"],\"s\":\"William, Prince of Wales\"},{\"t\":\"constitution\",\"q\":\"What did Queen Elizabeth II celebrate in 2012?\",\"a\":\"Her Diamond Jubilee — 60 years as queen; she reigned from her father's death in 1952 until her death in 2022\",\"d\":[\"Her Golden Jubilee — 50 years\",\"Her Silver Jubilee — 25 years\",\"Her coronation anniversary of 40 years\"],\"s\":\"Her Diamond Jubilee\"},{\"t\":\"constitution\",\"q\":\"What role does the monarch have in relation to the government?\",\"a\":\"The monarch has an important ceremonial role: opening the new parliamentary session each year, making a speech summarising the government's policies for the year, receiving foreign ambassadors, and advising, warning and encouraging the Prime Minister in regular meetings\",\"d\":[\"The monarch decides government policy\",\"The monarch votes in Parliament\",\"The monarch appoints all MPs\"],\"s\":\"The monarch has an important ceremonial role\"},{\"t\":\"constitution\",\"q\":\"What is the National Anthem of the UK?\",\"a\":\"'God Save the King (or Queen)' — played at important national occasions and at events attended by the monarch or the Royal Family\",\"d\":[\"'Land of Hope and Glory'\",\"'Rule Britannia'\",\"'Jerusalem'\"],\"s\":\"'God Save the King (or Queen)'\"},{\"t\":\"constitution\",\"q\":\"What oath do new citizens swear at the citizenship ceremony?\",\"a\":\"An oath of allegiance to His Majesty King Charles the Third, his Heirs and Successors, according to law — or an affirmation for those who prefer not to swear by God\",\"d\":[\"An oath of loyalty to Parliament, the constitution and the laws of the United Kingdom, sworn before a judge\",\"An oath to the Prime Minister\",\"An oath to the flag of the UK\"],\"s\":\"An oath of allegiance to His Majesty King Charles the Third, his Heirs and Successors, according to law\"},{\"t\":\"constitution\",\"q\":\"What is the system of government in the UK?\",\"a\":\"A parliamentary democracy — voters in each constituency elect their member of Parliament (MP) to the House of Commons\",\"d\":[\"A presidential system\",\"Direct democracy by referendum\",\"A federal republic\"],\"s\":\"A parliamentary democracy\"},{\"t\":\"constitution\",\"q\":\"Why is the House of Commons more important than the House of Lords?\",\"a\":\"Because its members are democratically elected — the Prime Minister and almost all the members of the cabinet are members of the House of Commons\",\"d\":[\"Because it is older than the Lords\",\"Because the monarch sits in it\",\"Because it has more members than any other parliament\"],\"s\":\"Because its members are democratically elected\"},{\"t\":\"constitution\",\"q\":\"What do MPs do?\",\"a\":\"They represent everyone in their constituency, help create new laws, scrutinise and comment on what the government is doing, and debate important national issues\",\"d\":[\"They vote on taxes and the budget only, leaving the creation of new laws entirely to the House of Lords\",\"They run local councils\",\"They serve as judges\"],\"s\":\"They represent everyone in their constituency, help create new laws, scrutinise and comment on what the government is doing\"},{\"t\":\"constitution\",\"q\":\"Who sits in the House of Lords?\",\"a\":\"Members not elected by the people: hereditary peers used to have the right, but since 1999 they no longer have an automatic right; most members are now life peers, appointed by the monarch on the advice of the Prime Minister — plus some senior judges and bishops of the Church of England\",\"d\":[\"MPs elected every five years\",\"Only hereditary aristocrats\",\"Judges and police chiefs only\"],\"s\":\"Members not elected by the people\"},{\"t\":\"constitution\",\"q\":\"What can the House of Lords do?\",\"a\":\"It can suggest amendments or propose new laws, and it checks laws passed by the House of Commons to ensure they are fit for purpose — the Commons can overrule the Lords, but this does not happen often\",\"d\":[\"It can permanently block any law\",\"It controls the budget\",\"It appoints the Prime Minister\"],\"s\":\"It can suggest amendments or propose new laws\"},{\"t\":\"constitution\",\"q\":\"What does the Speaker of the House of Commons do?\",\"a\":\"The Speaker chairs debates and keeps order, making sure rules are followed — the Speaker is an MP, neutral in debates, chosen by other MPs in a secret ballot, and represents Parliament on ceremonial occasions\",\"d\":[\"The Speaker leads the largest party\",\"The Speaker writes new laws\",\"The Speaker is appointed by the monarch\"],\"s\":\"The Speaker chairs debates and keeps order, making sure rules are followed\"},{\"t\":\"constitution\",\"q\":\"How often must a General Election be held?\",\"a\":\"At least every five years — if an MP dies or resigns, there is a fresh election, called a by-election, in his or her constituency\",\"d\":[\"Every four years exactly\",\"Every seven years\",\"Whenever the monarch decides\"],\"s\":\"At least every five years\"},{\"t\":\"constitution\",\"q\":\"How are MPs elected?\",\"a\":\"Through a system called 'first past the post' — in each constituency, the candidate who gets the most votes is elected; the government is usually formed by the party that wins the majority of constituencies\",\"d\":[\"By proportional representation\",\"By the House of Lords\",\"By an electoral college\"],\"s\":\"Through a system called 'first past the post'\"},{\"t\":\"constitution\",\"q\":\"Who appoints the Prime Minister?\",\"a\":\"The leader of the political party in power is appointed Prime Minister by the monarch — the PM appoints the members of the cabinet and has control over many important public appointments\",\"d\":[\"The Speaker appoints the PM\",\"MPs elect the PM directly by national vote\",\"The House of Lords chooses the PM\"],\"s\":\"The leader of the political party in power is appointed Prime Minister by the monarch\"},{\"t\":\"constitution\",\"q\":\"Where does the Prime Minister live officially?\",\"a\":\"At 10 Downing Street, in central London, near the Houses of Parliament — the PM also has a country house outside London called Chequers\",\"d\":[\"At Buckingham Palace\",\"At the Palace of Westminster\",\"At Windsor Castle\"],\"s\":\"At 10 Downing Street\"},{\"t\":\"constitution\",\"q\":\"What is the cabinet?\",\"a\":\"About 20 senior MPs appointed by the Prime Minister to be ministers in charge of departments — including the Chancellor of the Exchequer (economy), the Home Secretary (crime, policing and immigration) and the Foreign Secretary (managing relationships with foreign countries)\",\"d\":[\"A committee of the House of Lords\",\"The Prime Minister's private staff of civil servants who manage Downing Street and the government's papers\",\"A group of senior judges\"],\"s\":\"About 20 senior MPs appointed by the Prime Minister to be ministers in charge of departments\"},{\"t\":\"constitution\",\"q\":\"What is the official opposition?\",\"a\":\"The second-largest party in the House of Commons — its leader appoints senior opposition MPs to be 'shadow ministers' and it points out what it sees as the government's failures and weaknesses\",\"d\":[\"Any party that disagrees with the monarch\",\"The party with the fewest seats\",\"Independent MPs only\"],\"s\":\"The second-largest party in the House of Commons\"},{\"t\":\"constitution\",\"q\":\"What is Prime Minister's Questions?\",\"a\":\"An opportunity, once a week, when the Leader of the Opposition and other MPs can ask the Prime Minister questions in the House of Commons\",\"d\":[\"A radio phone-in with the PM\",\"The PM's annual speech\",\"A press conference at Downing Street\"],\"s\":\"A weekly opportunity for MPs to ask the Prime Minister questions\"},{\"t\":\"constitution\",\"q\":\"What are civil servants?\",\"a\":\"People who carry out the work of government departments — they are chosen on merit, are politically neutral, and are professional rather than political appointees\",\"d\":[\"Elected officials in local councils\",\"Members of the ruling party\",\"The Prime Minister's political advisers\"],\"s\":\"People who carry out the work of government departments\"},{\"t\":\"constitution\",\"q\":\"What do local authorities (councils) do, and how are they funded?\",\"a\":\"They provide a range of services in their areas — funded by money from central government and by local taxes, including 'council tax' which applies to all domestic properties\",\"d\":[\"They collect income tax\",\"They are funded entirely by parking fines\",\"They only maintain roads\"],\"s\":\"They provide a range of services in their areas\"},{\"t\":\"constitution\",\"q\":\"When are local council elections held?\",\"a\":\"For most local authorities, elections are held in May every year — many councils appoint a mayor, who is the ceremonial leader of the council\",\"d\":[\"In November every two years\",\"Every five years with the General Election\",\"Only when the government decides\"],\"s\":\"For most local authorities, elections are held in May every year\"},{\"t\":\"constitution\",\"q\":\"What powers have been devolved since 1997?\",\"a\":\"Some powers have been devolved to give people in Wales, Scotland and Northern Ireland more control over matters that directly affect them — there has been a Welsh Assembly and a Scottish Parliament since 1999\",\"d\":[\"All powers including defence and foreign affairs\",\"Only powers over tourism, culture and sport were devolved, with all other matters kept in Westminster\",\"No powers have been devolved\"],\"s\":\"Some powers have been devolved to give people in Wales, Scotland and Northern Ireland more control over matters that directly affect them\"},{\"t\":\"constitution\",\"q\":\"Which policies remain under central UK government control even with devolution?\",\"a\":\"Policy and laws governing defence, foreign affairs, immigration, taxation and social security\",\"d\":[\"Health, education, planning and civil law, which are decided in Westminster for all four nations\",\"Roads and housing\",\"Culture and sport\"],\"s\":\"Policy and laws governing defence, foreign affairs, immigration, taxation and social security\"},{\"t\":\"constitution\",\"q\":\"How many members does the Welsh government have and where does it sit?\",\"a\":\"The Welsh government and National Assembly for Wales are based in Cardiff — the Assembly has 60 members (AMs) and elections are held every four years; members can speak in either Welsh or English\",\"d\":[\"90 members in Swansea\",\"129 members in Cardiff\",\"60 members in Newport\"],\"s\":\"60 members (AMs), based in Cardiff\"},{\"t\":\"constitution\",\"q\":\"How many members does the Scottish Parliament have and where does it sit?\",\"a\":\"The Scottish Parliament sits in Holyrood, Edinburgh, and has 129 members (MSPs), elected by a form of proportional representation\",\"d\":[\"60 members in Glasgow\",\"108 members in Edinburgh\",\"129 members in Stirling\"],\"s\":\"The Scottish Parliament sits in Holyrood, Edinburgh\"},{\"t\":\"constitution\",\"q\":\"What can the Scottish Parliament legislate on?\",\"a\":\"All matters which are not specifically reserved to the UK Parliament — including civil and criminal law, health, education, planning and additional tax-raising powers\",\"d\":[\"Only education and health, with all other law-making powers reserved to the UK Parliament\",\"Only tourism and culture\",\"Defence and foreign affairs\"],\"s\":\"All matters which are not specifically reserved to the UK Parliament\"},{\"t\":\"constitution\",\"q\":\"What is the Northern Ireland Assembly?\",\"a\":\"A devolved assembly established soon after the Belfast Agreement (Good Friday Agreement) in 1998, with 90 elected members known as MLAs (members of the Legislative Assembly); it sits at Stormont and ministerial offices are shared between the main parties\",\"d\":[\"A committee of the Irish parliament\",\"An assembly of 129 members in Belfast\",\"A consultative body appointed by the UK government, with 90 nominated members who advise the Secretary of State from Belfast city hall\"],\"s\":\"A devolved assembly established soon after the Belfast Agreement (Good Friday Agreement) in 1998, with 90 elected members known as MLAs (members of the Legislative Assembly); it sits at Stormont and ministerial offices are shared between the main parties\"},{\"t\":\"constitution\",\"q\":\"When was the Northern Ireland Parliament first established, and what happened in 1972?\",\"a\":\"A Northern Ireland Parliament was established in 1922 when Ireland was divided, but it was abolished in 1972 after the Troubles broke out in 1969 — the Assembly has been suspended on a few occasions since 1998\",\"d\":[\"It was established in 1998 and never suspended\",\"It was established in 1949 and abolished in 1998\",\"It has existed continuously since 1922\"],\"s\":\"A Northern Ireland Parliament was established in 1922 when Ireland was divided\"},{\"t\":\"constitution\",\"q\":\"How are the proceedings of Parliament made public?\",\"a\":\"Proceedings are broadcast on television and published in official reports called Hansard, available in large libraries and at www.parliament.uk — the UK also has a free press\",\"d\":[\"They are kept secret for 30 years\",\"Only ministers may report them\",\"They are reported only in newspapers licensed by the Speaker and may not be broadcast on television\"],\"s\":\"Proceedings are broadcast on television and published in official reports called Hansard, available in large libraries and at www.parliament.uk\"},{\"t\":\"constitution\",\"q\":\"Who has the right to vote in the UK?\",\"a\":\"The present voting age of 18 was set in 1969, and (with a few exceptions) all UK-born and naturalised adult citizens have the right to vote; adult citizens of the Irish Republic and Commonwealth countries who are resident in the UK can also vote\",\"d\":[\"Only UK-born citizens over 21\",\"Only taxpayers over 18\",\"Only British citizens born in England\"],\"s\":\"The present voting age of 18 was set in 1969\"},{\"t\":\"constitution\",\"q\":\"What is the electoral register?\",\"a\":\"The list you must be on in order to vote in a parliamentary, local or European election — you can register by contacting your local council electoral registration office, and the register is updated every year in September or October\",\"d\":[\"The official list of candidates standing for election in each constituency, published by the local council\",\"A record of past election results\",\"The list of MPs in Parliament\"],\"s\":\"The list you must be on in order to vote in a parliamentary, local or European election\"},{\"t\":\"constitution\",\"q\":\"How does the electoral register work in Northern Ireland?\",\"a\":\"Northern Ireland uses 'individual registration' — all those entitled to vote must complete their own registration form; once registered, people stay on the register provided their personal details do not change\",\"d\":[\"One form covers everyone at an address\",\"Registration happens automatically at 18\",\"Voters register at the polling station\"],\"s\":\"Northern Ireland uses 'individual registration'\"},{\"t\":\"constitution\",\"q\":\"Where do people vote in elections?\",\"a\":\"At a polling station (called a polling place in Scotland) — voting takes place on election day from 7.00 am to 10.00 pm, and you can also register for a postal ballot\",\"d\":[\"At the town hall only, from 9 to 5\",\"At any post office\",\"Online only\"],\"s\":\"At a polling station (called a polling place in Scotland)\"},{\"t\":\"constitution\",\"q\":\"Who can stand for public office?\",\"a\":\"Most citizens of the UK, the Irish Republic or the Commonwealth aged 18 or over — with some exceptions, including members of the armed forces, civil servants and people found guilty of certain criminal offences\",\"d\":[\"Only university graduates over 25\",\"Only British-born citizens aged 21 or over who have lived in their constituency for at least five years\",\"Anyone over 16\"],\"s\":\"Most citizens of the UK, the Irish Republic or the Commonwealth aged 18 or over\"},{\"t\":\"constitution\",\"q\":\"How can you visit the Houses of Parliament?\",\"a\":\"Members of the public can listen to debates from public galleries in both the Commons and the Lords — you can write to your local MP for tickets or queue on the day; in Scotland you can arrange visits at Holyrood, and Northern Ireland Assembly sittings at Stormont are public\",\"d\":[\"Parliament is closed to the public\",\"Only school groups may visit\",\"Visits require the Speaker's personal invitation\"],\"s\":\"Members of the public can listen to debates from public galleries in both the Commons and the Lords\"},{\"t\":\"rights-law\",\"q\":\"What is the 'rule of law'?\",\"a\":\"A fundamental principle: no person or organisation — including the government — is above the law; every person is subject to the same laws\",\"d\":[\"The monarch's right to make laws\",\"A law made by judges\",\"The right of Parliament to rule\"],\"s\":\"A fundamental principle\"},{\"t\":\"rights-law\",\"q\":\"What are the two types of law in the UK?\",\"a\":\"Criminal law, which relates to crimes usually investigated by the police and punished by the courts, and civil law, used to settle disputes between individuals or groups\",\"d\":[\"Common law and church law\",\"Royal law and public law\",\"National law and county law\"],\"s\":\"Criminal law and civil law\"},{\"t\":\"rights-law\",\"q\":\"Which of these is an example of a criminal offence?\",\"a\":\"Carrying a weapon — it is a criminal offence to carry a weapon of any kind, even if it is for self-defence; drugs, racial crime and selling tobacco to anyone under 18 are also criminal matters\",\"d\":[\"A dispute with a landlord about repairs\",\"A faulty goods complaint\",\"A disagreement over a debt\"],\"s\":\"Carrying a weapon\"},{\"t\":\"rights-law\",\"q\":\"Which of these is an example of a civil law matter?\",\"a\":\"Housing disputes, consumer rights, disputes about faulty goods or services, employment rights and debt\",\"d\":[\"Selling tobacco to anyone under 18, carrying a weapon in public, and racially motivated crime\",\"Carrying a weapon\",\"Racially motivated crime\"],\"s\":\"Housing disputes, consumer rights, disputes about faulty goods or services, employment rights and debt\"},{\"t\":\"rights-law\",\"q\":\"What are the duties of the police?\",\"a\":\"To protect life and property, prevent disturbances (keep the peace), and prevent and detect crime — the police are independent of the government\",\"d\":[\"To carry out government orders without question\",\"To decide guilt and sentence offenders\",\"To collect taxes and fines\"],\"s\":\"To protect life and property, prevent disturbances (keep the peace)\"},{\"t\":\"rights-law\",\"q\":\"Who are Police and Crime Commissioners (PCCs)?\",\"a\":\"Directly elected individuals, first elected by the public in November 2012 in England and Wales, responsible for the delivery of an efficient and effective police force — they set local police priorities and the local policing budget, and appoint the local Chief Constable\",\"d\":[\"Senior police officers promoted by the Home Office in 2012 to command regional forces across the whole UK\",\"Judges who oversee police conduct\",\"Council officials who fund the police\"],\"s\":\"Directly elected individuals, first elected by the public in November 2012 in England and Wales, responsible for the delivery of an efficient and effective police force\"},{\"t\":\"rights-law\",\"q\":\"What can you do if the police do something wrong?\",\"a\":\"Complain — to the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland, or the Police Ombudsman for Northern Ireland\",\"d\":[\"Nothing — police decisions are final\",\"Only sue them in the small claims court\",\"Write to the monarch\"],\"s\":\"Complain\"},{\"t\":\"rights-law\",\"q\":\"What are judges (the judiciary) responsible for?\",\"a\":\"Interpreting the law and ensuring that trials are conducted fairly — the government cannot interfere; if judges find a public body is not respecting someone's legal rights or that a law is incompatible with the Human Rights Act, they can order it to change its practices\",\"d\":[\"Making new laws for Parliament\",\"Investigating crimes\",\"Running the police force\"],\"s\":\"Interpreting the law and ensuring that trials are conducted fairly\"},{\"t\":\"rights-law\",\"q\":\"What was the Human Rights Act 1998?\",\"a\":\"UK legislation that incorporated the European Convention on Human Rights into UK law — protecting rights such as life, liberty and security, a fair trial, freedom of thought, conscience and religion, and freedom of expression\",\"d\":[\"A law giving Parliament new powers to overrule the courts on questions of individual rights\",\"An EU regulation on citizenship\",\"A law about voting rights only\"],\"s\":\"UK legislation that incorporated the European Convention on Human Rights into UK law\"},{\"t\":\"rights-law\",\"q\":\"What principles were included in the European Convention on Human Rights?\",\"a\":\"Rights including the right to life, prohibition of torture, prohibition of slavery and forced labour, the right to liberty and security, the right to a fair trial, and freedom of thought, conscience, religion and expression\",\"d\":[\"The right to free housing, guaranteed employment and a state pension for every resident of a member country\",\"The rules of the European Union single market\",\"The right to bear arms\"],\"s\":\"Rights including the right to life, prohibition of torture, prohibition of slavery and forced labour, the right to liberty and security, the right to a fair trial\"},{\"t\":\"rights-law\",\"q\":\"What is the law on domestic violence?\",\"a\":\"Brutality and violence in the home is a serious crime — anyone who is violent towards their partner, whether man or woman, can be prosecuted; it is also a crime to force anyone, including a spouse, to have sex\",\"d\":[\"It is a private family matter\",\"Only physical injury counts as a crime\",\"It is a civil matter only\"],\"s\":\"Brutality and violence in the home is a serious crime\"},{\"t\":\"rights-law\",\"q\":\"What does the law say about female genital mutilation (FGM)?\",\"a\":\"FGM, also known as cutting or female circumcision, is illegal in the UK — it is also illegal to take a girl or woman abroad for the practice\",\"d\":[\"It is legal if done abroad\",\"It is only banned for children under 16\",\"It is a civil matter\"],\"s\":\"FGM, also known as cutting or female circumcision, is illegal in the UK\"},{\"t\":\"rights-law\",\"q\":\"What is the law on forced marriage?\",\"a\":\"A marriage should be entered into with the full and free consent of both people involved — forced marriage is where one or both parties do not or cannot give consent; Forced Marriage Protection Orders can be made, and breaching an order can lead to imprisonment\",\"d\":[\"Arranged marriages are illegal\",\"Forced marriage is only illegal for under-18s\",\"Consent is only required from the man\"],\"s\":\"A marriage should be entered into with the full and free consent of both people involved\"},{\"t\":\"rights-law\",\"q\":\"What is the difference between an arranged marriage and a forced marriage?\",\"a\":\"Arranged marriages, where both parties agree to the marriage, are acceptable in the UK; forced marriage, without free consent, is not\",\"d\":[\"There is no difference in law\",\"Arranged marriages are also banned\",\"Forced marriages are legal if the families agree\"],\"s\":\"Arranged marriages with the agreement of both parties are acceptable; forced marriage is not\"},{\"t\":\"rights-law\",\"q\":\"How is income tax collected?\",\"a\":\"For most people it is taken automatically from wages by the employer through PAYE (Pay As You Earn); self-employed people must complete a self-assessment tax return — income tax is collected by HM Revenue & Customs (HMRC)\",\"d\":[\"Everyone pays at the local council office\",\"It is added to shop prices\",\"It is collected quarterly by the Bank of England, which sends every worker an annual bill based on their wages\"],\"s\":\"For most people it is taken automatically from wages by the employer through PAYE (Pay As You Earn); self-employed people must complete a self-assessment tax return\"},{\"t\":\"rights-law\",\"q\":\"What does income tax money pay for?\",\"a\":\"Government services such as roads, education, police and the armed forces\",\"d\":[\"Only the Royal Family\",\"Only the National Health Service and the state retirement pension, which are funded entirely from income tax\",\"Only Parliament's costs\"],\"s\":\"Government services such as roads, education, police and the armed forces\"},{\"t\":\"rights-law\",\"q\":\"What are National Insurance contributions?\",\"a\":\"Payments made by almost everybody who works — the money pays for state benefits and services such as the state retirement pension and the National Health Service; employees have them deducted from pay, and self-employed people pay them themselves\",\"d\":[\"Voluntary savings for retirement\",\"A tax on property\",\"Payments for private health insurance\"],\"s\":\"Payments made by almost everybody who works\"},{\"t\":\"rights-law\",\"q\":\"What is a National Insurance number?\",\"a\":\"A unique personal account number that ensures your National Insurance contributions and tax are recorded against your name only — young people receive one just before their 16th birthday, and you need one when you start work\",\"d\":[\"A driving licence number\",\"A passport number\",\"A voter registration number that you must show at the polling station before you are allowed to vote\"],\"s\":\"A unique personal account number that ensures your National Insurance contributions and tax are recorded against your name only\"},{\"t\":\"rights-law\",\"q\":\"At what age can you drive a car or motorcycle in the UK?\",\"a\":\"At 17 — you must have a driving licence and pass a driving test which tests both knowledge and practical skills; at 16 you can ride a moped\",\"d\":[\"At 18 for cars and 17 for mopeds\",\"At 16 for cars\",\"At 21 for all vehicles\"],\"s\":\"At 17\"},{\"t\":\"rights-law\",\"q\":\"Until what age can drivers use their driving licence?\",\"a\":\"Until they are 70 years old — after that, the licence is valid for three years at a time\",\"d\":[\"Until 65, then annually\",\"For life, with no renewal\",\"Until 75, then five years at a time\"],\"s\":\"Until they are 70 years old\"},{\"t\":\"rights-law\",\"q\":\"What must you do if your vehicle is over three years old?\",\"a\":\"Take it for a Ministry of Transport (MOT) test every year — it is an offence not to have an MOT certificate; you must also have valid motor insurance and pay the vehicle tax\",\"d\":[\"Replace it with a newer vehicle\",\"Take it for an MOT every five years\",\"Register it with the police\"],\"s\":\"Take it for a Ministry of Transport (MOT) test every year\"},{\"t\":\"rights-law\",\"q\":\"What should drivers with a licence from another country do?\",\"a\":\"If your licence is from an EU country, Iceland, Liechtenstein or Norway you can drive as long as your licence is valid; from any other country you may drive for up to 12 months, then you must get a UK full driving licence\",\"d\":[\"Any foreign licence remains valid indefinitely in the UK, provided the driver registers it within 12 months of arriving\",\"All visitors must retake a UK test immediately\",\"Foreign licences are never valid\"],\"s\":\"If your licence is from an EU country, Iceland, Liechtenstein or Norway you can drive as long as your licence is valid; from any other country you may drive for up to 12 months, then you must get a UK full driving licence\"},{\"t\":\"courts\",\"q\":\"Which courts deal with minor criminal cases in England, Wales and Northern Ireland?\",\"a\":\"Magistrates' Courts — magistrates (Justices of the Peace) are members of the local community who usually work unpaid, without legal qualifications, and receive training\",\"d\":[\"Crown Courts with juries\",\"County Courts\",\"Sheriff Courts\"],\"s\":\"Magistrates' Courts\"},{\"t\":\"courts\",\"q\":\"How are minor criminal offences dealt with in Scotland?\",\"a\":\"In Justice of the Peace Courts, dealt with by a justice of the peace or by stipendiary magistrates in Glasgow\",\"d\":[\"In Magistrates' Courts in front of three unpaid magistrates, exactly as in England and Wales\",\"In the Sheriff Court with a jury\",\"By the procurator fiscal alone\"],\"s\":\"In Justice of the Peace Courts, dealt with by a justice of the peace or by stipendiary magistrates in Glasgow\"},{\"t\":\"courts\",\"q\":\"Where are serious criminal offences tried in England, Wales and Northern Ireland?\",\"a\":\"In a Crown Court, in front of a judge and a jury of 12 members of the public\",\"d\":[\"In a Magistrates' Court\",\"In the High Court with 15 jurors\",\"In a County Court\"],\"s\":\"In a Crown Court\"},{\"t\":\"courts\",\"q\":\"How many members does a jury have in Scotland?\",\"a\":\"15 — serious cases in Scotland are heard in a Sheriff Court with either a sheriff or a sheriff with a jury, and the most serious cases, such as murder, are heard at a High Court with a judge and jury\",\"d\":[\"12\",\"10\",\"20\"],\"s\":\"15\"},{\"t\":\"courts\",\"q\":\"How is a jury chosen?\",\"a\":\"Members of the public are chosen at random from the local electoral register — anyone on the register aged 18 to 70 can be asked to serve\",\"d\":[\"Volunteers aged 21 to 65 apply to the court and are selected after an interview with the judge\",\"Judges pick experienced jurors\",\"Lawyers select their own jurors\"],\"s\":\"Members of the public are chosen at random from the local electoral register\"},{\"t\":\"courts\",\"q\":\"What verdicts can a jury give?\",\"a\":\"The jury decides the verdict of 'guilty' or 'not guilty' based on the evidence — in Scotland a third verdict of 'not proven' is possible; if guilty, the judge decides the penalty\",\"d\":[\"Guilty, not guilty or pardoned everywhere\",\"Only guilty or not proven\",\"The judge decides the verdict\"],\"s\":\"The jury decides the verdict of 'guilty' or 'not guilty' based on the evidence\"},{\"t\":\"courts\",\"q\":\"How are young people aged 10 to 17 dealt with by the courts?\",\"a\":\"Usually in a Youth Court, in front of up to three specially trained magistrates or a District Judge — the most serious cases go to the Crown Court; the young person's parents or carers must attend, members of the public are not admitted, and the name or photographs of the accused cannot be published\",\"d\":[\"In an ordinary Magistrates' Court, in public, with their names published in the local newspaper\",\"In a Crown Court with a jury of teenagers\",\"They cannot be prosecuted\"],\"s\":\"Usually in a Youth Court\"},{\"t\":\"courts\",\"q\":\"How does Scotland deal with children and young people who have committed an offence?\",\"a\":\"Through the Children's Hearings System; Northern Ireland has a system of youth conferencing to consider how a child should be dealt with\",\"d\":[\"Through Youth Courts in front of three specially trained magistrates, exactly as in England, Wales and Northern Ireland\",\"Through the Sheriff Court only\",\"Children are always tried as adults\"],\"s\":\"Through the Children's Hearings System; Northern Ireland has a system of youth conferencing to consider how a child should be dealt with\"},{\"t\":\"courts\",\"q\":\"Which courts deal with civil disputes?\",\"a\":\"County Courts in England, Wales and Northern Ireland; the Sheriff Court in Scotland — more serious civil cases, such as when a large amount of compensation is being claimed, go to the High Court (Court of Session in Scotland)\",\"d\":[\"Crown Courts in England, Wales and Northern Ireland; the Justice of the Peace Court in Scotland\",\"Magistrates' Courts\",\"Youth Courts\"],\"s\":\"County Courts in England, Wales and Northern Ireland; the Sheriff Court in Scotland\"},{\"t\":\"courts\",\"q\":\"What is the small claims procedure?\",\"a\":\"An informal way of settling minor disputes without spending a lot of time and money on a lawyer — used for claims of less than £10,000 in England and Wales and £5,000 in Scotland and Northern Ireland; claims can also be issued online through Money Claims Online\",\"d\":[\"A criminal procedure for petty theft\",\"Claims under £1,000 in all parts of the UK\",\"A procedure requiring a solicitor\"],\"s\":\"An informal way of settling minor disputes without spending a lot of time and money on a lawyer\"},{\"t\":\"courts\",\"q\":\"What are solicitors?\",\"a\":\"Trained lawyers who give advice on legal matters, take action for their clients and represent them in court — it is important to find out which aspects of law a solicitor specialises in and check their charges\",\"d\":[\"Unpaid volunteers in Magistrates' Courts\",\"Court officials employed by the government to advise judges and manage the daily business of the courts\",\"Police lawyers\"],\"s\":\"Trained lawyers who give advice on legal matters, take action for their clients and represent them in court\"},{\"t\":\"international\",\"q\":\"What is the Commonwealth?\",\"a\":\"An association of countries that support each other and work together towards shared goals in democracy and development — most members were once part of the British Empire; the monarch is its ceremonial head and it currently has 54 member states\",\"d\":[\"A military alliance of former colonies whose members have agreed to defend each other if attacked\",\"A trade union of European states\",\"The UK's overseas territories\"],\"s\":\"An association of countries that support each other and work together towards shared goals in democracy and development\"},{\"t\":\"international\",\"q\":\"What powers does the Commonwealth have over its members?\",\"a\":\"None — membership is voluntary; the Commonwealth has no power over its members, although it can suspend membership; it is based on the core values of democracy, good government and the rule of law\",\"d\":[\"It can make laws for members\",\"It collects taxes from members\",\"It commands members' armies\"],\"s\":\"None\"},{\"t\":\"international\",\"q\":\"What was the European Union originally called and when was it set up?\",\"a\":\"The European Economic Community (EEC) — set up by six western European countries (Belgium, France, Germany, Italy, Luxembourg and the Netherlands) who signed the Treaty of Rome on 25 March 1957\",\"d\":[\"The Council of Europe, set up in 1949\",\"NATO, set up in 1949\",\"The European Federation, set up in 1963\"],\"s\":\"The European Economic Community (EEC)\"},{\"t\":\"international\",\"q\":\"What is the UK's relationship with the EU today?\",\"a\":\"The UK joined in 1973 but left the EU after the Brexit vote — Brexit officially took place at 23:00 GMT on 31 January 2020; there are now 27 EU member states\",\"d\":[\"The UK is a full member of the EU\",\"The UK never joined the EU\",\"The UK left the EU in 2016\"],\"s\":\"The UK joined in 1973 but left the EU after the Brexit vote\"},{\"t\":\"international\",\"q\":\"What is the Council of Europe?\",\"a\":\"Separate from the EU — it has 47 member countries including the UK and is responsible for the protection and promotion of human rights in those countries; it has no power to make laws but draws up conventions and charters such as the European Convention on Human Rights\",\"d\":[\"The EU's law-making body\",\"A military alliance\",\"The parliament of the EU\"],\"s\":\"Separate from the EU\"},{\"t\":\"international\",\"q\":\"What is the United Nations and how is the UK involved?\",\"a\":\"An international organisation with more than 190 countries as members, set up after the Second World War to prevent war and promote international peace and security — the UK is one of five permanent members of the UN Security Council, which has 15 members\",\"d\":[\"A European trade body the UK left in 2020\",\"An alliance of English-speaking countries formed after the First World War to promote trade between its 50 members\",\"A body with 27 members\"],\"s\":\"An international organisation with more than 190 countries as members, set up after the Second World War to prevent war and promote international peace and security\"},{\"t\":\"international\",\"q\":\"What is NATO?\",\"a\":\"A group of European and North American countries that have agreed to help each other if they come under attack — the UK is a member; it also aims to maintain peace between all of its members\",\"d\":[\"A trade organisation of European and North American countries that sets common tariffs for its members\",\"The United Nations' army\",\"A group of Commonwealth countries\"],\"s\":\"A group of European and North American countries that have agreed to help each other if they come under attack\"},{\"t\":\"community\",\"q\":\"What values and responsibilities should those living in the UK follow?\",\"a\":\"Obey and respect the law; be aware of the rights of others and respect those rights; treat others with fairness; behave responsibly; look after and protect your family; and look after the area in which you live and the environment\",\"d\":[\"Attend religious services regularly; vote in every election; serve in the armed forces when asked; and report wrongdoing by your neighbours\",\"Join the armed forces reserve\",\"Report neighbours to the police\"],\"s\":\"Obey and respect the law; be aware of the rights of others and respect those rights; treat others with fairness; behave responsibly; look after and protect your family; and look after the area in which you live and the environment\"},{\"t\":\"community\",\"q\":\"On what basis are school governors and school boards chosen?\",\"a\":\"They are people from the local community who wish to make a positive contribution to children's education — they must be aged 18 or over at the date of their election or appointment; you can contact your local school or apply online\",\"d\":[\"They are appointed by the government from a national list of qualified teachers and school inspectors\",\"They must be qualified teachers\",\"They must be parents only\"],\"s\":\"They are people from the local community who wish to make a positive contribution to children's education\"},{\"t\":\"community\",\"q\":\"How can you support political parties?\",\"a\":\"By becoming a member, helping at elections — for example by handing out leaflets or knocking on doors to ask for support ('canvassing') — political parties welcome new members\",\"d\":[\"Only by donating money\",\"Only by standing as a candidate\",\"By voting more than once\"],\"s\":\"By becoming a member, helping at elections\"},{\"t\":\"community\",\"q\":\"What is jury service?\",\"a\":\"A duty — anyone on the electoral register aged 18 to 70 can be randomly selected and asked to serve on a jury\",\"d\":[\"A voluntary activity for lawyers\",\"Paid work you can apply for\",\"A duty only for property owners\"],\"s\":\"A duty\"},{\"t\":\"community\",\"q\":\"What is the National Citizen Service?\",\"a\":\"A programme that gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project\",\"d\":[\"A compulsory programme of military service that all 16- and 17-year-olds must complete before leaving school\",\"A scheme for retired volunteers\",\"A citizenship test for teenagers\"],\"s\":\"A programme that gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project\"},{\"t\":\"community\",\"q\":\"Who can give blood, and who can donate organs?\",\"a\":\"Anyone aged 17 or over who is in good health can donate blood; many people register to donate organs when they die, and living people can also donate — for example a kidney\",\"d\":[\"Only people aged 18 to 40 who register with their doctor can give blood, and organs may only be donated by relatives\",\"Organ donation is not allowed in the UK\",\"Only relatives may donate organs\"],\"s\":\"Anyone aged 17 or over who is in good health can donate blood; many people register to donate organs when they die\"},{\"t\":\"community\",\"q\":\"How can you look after the environment?\",\"a\":\"Recycle your waste, reuse things like shopping bags, walk or use public transport rather than the car for short journeys, and buy locally grown food where possible to reduce 'food miles'\",\"d\":[\"Burn household waste at home, drive for all short journeys, and buy imported food to support world trade\",\"Always drive to reduce wear on shoes\",\"Buy imported goods to support trade\"],\"s\":\"Recycle your waste, reuse things like shopping bags, walk or use public transport rather than the car for short journeys\"},{\"t\":\"community\",\"q\":\"Why is volunteering valuable?\",\"a\":\"It helps you integrate into your community and meet new people, provides useful experience for job applications, and supports charities and local services — examples include helping in hospitals, youth work, and conservation projects\",\"d\":[\"It is a legal requirement for citizenship\",\"It replaces the need to pay taxes\",\"It is only open to retired people and students, who can claim payment for their time from the local council\"],\"s\":\"It helps you integrate into your community and meet new people, provides useful experience for job applications\"},{\"t\":\"community\",\"q\":\"What does being a good neighbour involve?\",\"a\":\"Introducing yourself, being considerate about noise and keeping shared areas tidy, and offering help — for example taking in deliveries or helping with shopping when a neighbour is ill\",\"d\":[\"Reporting neighbours to the council\",\"Avoiding all contact with neighbours\",\"Joining the neighbourhood watch is compulsory\"],\"s\":\"Introducing yourself, being considerate about noise and keeping shared areas tidy, and offering help\"}]");
var HANDBOOK = handbook_default;
var FACTS = facts_default;
var TOPICS = {
	values: {
		ch: 1,
		name: "Values & principles"
	},
	"uk-nations": {
		ch: 2,
		name: "What is the UK"
	},
	"early-britain": {
		ch: 3,
		name: "Early Britain"
	},
	"middle-ages": {
		ch: 3,
		name: "The Middle Ages"
	},
	"tudors-stuarts": {
		ch: 3,
		name: "Tudors & Stuarts"
	},
	"global-power": {
		ch: 3,
		name: "A global power"
	},
	"20th-century": {
		ch: 3,
		name: "The 20th century"
	},
	"since-1945": {
		ch: 3,
		name: "Britain since 1945"
	},
	arts: {
		ch: 4,
		name: "Arts & culture"
	},
	customs: {
		ch: 4,
		name: "Customs & traditions"
	},
	leisure: {
		ch: 4,
		name: "Leisure"
	},
	places: {
		ch: 4,
		name: "Places of interest"
	},
	religion: {
		ch: 4,
		name: "Religion"
	},
	sport: {
		ch: 4,
		name: "Sport"
	},
	"uk-today": {
		ch: 4,
		name: "The UK today"
	},
	democracy: {
		ch: 5,
		name: "British democracy"
	},
	constitution: {
		ch: 5,
		name: "Constitution & government"
	},
	"rights-law": {
		ch: 5,
		name: "Rights & the law"
	},
	courts: {
		ch: 5,
		name: "The courts"
	},
	international: {
		ch: 5,
		name: "International institutions"
	},
	community: {
		ch: 5,
		name: "Your role in the community"
	}
};
var TOPIC_IDS = Object.keys(TOPICS);
var ROMAN = [
	"",
	"I",
	"II",
	"III",
	"IV",
	"V",
	"VI"
];
function getChapter(num) {
	return HANDBOOK.chapters.find((c) => c.num === num);
}
function chapterFacts(ch) {
	return FACTS.map((f, i) => i).filter((i) => TOPICS[FACTS[i].t].ch === ch);
}
function topicFacts(topic) {
	return FACTS.map((f, i) => i).filter((i) => FACTS[i].t === topic);
}
function sectionWords(sec) {
	return sec.blocks.reduce((n, b) => n + wordCount(b.x), 0);
}
function chapterWords(ch) {
	return ch.sections.reduce((n, s) => n + sectionWords(s), 0);
}
function chapterReadMinutes(ch) {
	return readMinutes(chapterWords(ch));
}
function checkItems() {
	const out = [];
	HANDBOOK.chapters.forEach((c) => c.sections.forEach((s, si) => s.blocks.forEach((b, bi) => {
		if (b.t === "check") out.push({
			ch: c.num,
			sec: si,
			title: s.title,
			x: b.x,
			id: `${c.num}.${si}.${bi}`
		});
	})));
	return out;
}
var TESTABLE_CHAPTERS = HANDBOOK.chapters.filter((c) => c.num <= 5);
var DAY$1 = 864e5;
function freshCard() {
	return {
		ef: 2.5,
		int: 0,
		reps: 0,
		next: 0,
		seen: 0,
		lapses: 0
	};
}
/** SM-2. Quality 0–5. Returns the next card state. */
function rateCard(prev, q) {
	const c = {
		...prev,
		seen: prev.seen + 1
	};
	if (q < 3) {
		c.reps = 0;
		c.int = 1;
		c.lapses += 1;
	} else {
		if (c.reps === 0) c.int = 1;
		else if (c.reps === 1) c.int = 6;
		else c.int = Math.round(c.int * c.ef);
		c.reps += 1;
	}
	c.ef = Math.max(1.3, c.ef + (.1 - (5 - q) * (.08 + (5 - q) * .02)));
	c.next = Date.now() + c.int * DAY$1;
	return c;
}
var V1_KEY = "liuk-study-v1";
function migrateV1() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(V1_KEY);
		if (!raw) return null;
		const s = JSON.parse(raw);
		if (!s.cards) return null;
		return {
			cards: s.cards,
			streak: s.streak ?? {
				last: 0,
				count: 0
			},
			chaptersDone: s.chaptersDone ?? [],
			testHistory: s.testHistory ?? [],
			feynman: s.feynman ?? {},
			theme: s.settings?.theme ?? "light",
			progressive: s.settings?.progressive ?? false,
			newPerDay: s.settings?.newPerDay ?? 10
		};
	} catch {
		return null;
	}
}
var defaults = () => ({
	cards: {},
	streak: {
		last: 0,
		count: 0
	},
	chaptersDone: [],
	sectionsRead: [],
	bookmarks: [],
	testHistory: [],
	feynman: {},
	theme: "light",
	progressive: false,
	newPerDay: 10,
	dailyGoal: 20,
	lastRead: null,
	studyLog: {},
	readerSize: "md",
	activeTest: null,
	activeSession: null,
	hydrated: false
});
var useStudy = create()(persist((set, get) => ({
	...defaults(),
	card: (id) => get().cards[id] ?? freshCard(),
	rate: (id, q) => {
		const next = rateCard(get().cards[id] ?? freshCard(), q);
		set((s) => ({ cards: {
			...s.cards,
			[id]: next
		} }));
		get().bumpStreak();
		get().logStudy(1);
	},
	bumpStreak: () => {
		const today = Math.floor(Date.now() / 864e5);
		const { last, count } = get().streak;
		if (last === today) return;
		set({ streak: {
			last: today,
			count: last === today - 1 ? count + 1 : 1
		} });
	},
	logStudy: (n = 1) => {
		const k = dayKey();
		set((s) => ({ studyLog: {
			...s.studyLog,
			[k]: (s.studyLog[k] ?? 0) + n
		} }));
	},
	toggleChapterDone: (num) => set((s) => ({ chaptersDone: s.chaptersDone.includes(num) ? s.chaptersDone.filter((n) => n !== num) : [...s.chaptersDone, num] })),
	markChapterDone: (num) => set((s) => ({ chaptersDone: s.chaptersDone.includes(num) ? s.chaptersDone : [...s.chaptersDone, num] })),
	markSectionRead: (id) => set((s) => ({ sectionsRead: s.sectionsRead.includes(id) ? s.sectionsRead : [...s.sectionsRead, id] })),
	toggleBookmark: (id) => set((s) => ({ bookmarks: s.bookmarks.includes(id) ? s.bookmarks.filter((x) => x !== id) : [...s.bookmarks, id] })),
	setTheme: (theme) => {
		set({ theme });
		if (typeof document !== "undefined") document.documentElement.classList.toggle("dark", theme === "dark");
	},
	setProgressive: (progressive) => set({ progressive }),
	setNewPerDay: (newPerDay) => set({ newPerDay }),
	setDailyGoal: (dailyGoal) => set({ dailyGoal }),
	setReaderSize: (readerSize) => set({ readerSize }),
	setLastRead: (chapter, section) => set({ lastRead: {
		chapter,
		section
	} }),
	saveFeynman: (id, text) => set((s) => ({ feynman: {
		...s.feynman,
		[id]: text
	} })),
	pushTest: (item) => set((s) => ({ testHistory: [...s.testHistory, item] })),
	setActiveTest: (activeTest) => set({ activeTest }),
	patchActiveTest: (p) => set((s) => s.activeTest ? { activeTest: {
		...s.activeTest,
		...p
	} } : {}),
	setActiveSession: (activeSession) => set({ activeSession }),
	patchActiveSession: (p) => set((s) => s.activeSession ? { activeSession: {
		...s.activeSession,
		...p
	} } : {}),
	resetAll: () => {
		const theme = get().theme;
		set({
			...defaults(),
			theme,
			hydrated: true
		});
	},
	importState: (raw) => {
		if (!raw || typeof raw !== "object") return false;
		const d = raw;
		if (!d.cards || typeof d.cards !== "object") return false;
		set({
			cards: d.cards,
			streak: d.streak ?? {
				last: 0,
				count: 0
			},
			chaptersDone: d.chaptersDone ?? [],
			sectionsRead: d.sectionsRead ?? [],
			bookmarks: d.bookmarks ?? [],
			testHistory: d.testHistory ?? [],
			feynman: d.feynman ?? {},
			theme: d.theme ?? d.settings?.theme ?? get().theme,
			progressive: d.progressive ?? false,
			newPerDay: d.newPerDay ?? 10,
			dailyGoal: d.dailyGoal ?? 20,
			lastRead: d.lastRead ?? null,
			studyLog: d.studyLog ?? {},
			readerSize: d.readerSize ?? "md",
			activeTest: null,
			activeSession: null
		});
		get().setTheme(get().theme);
		return true;
	}
}), {
	name: "liuk-study-v2",
	partialize: (s) => ({
		cards: s.cards,
		streak: s.streak,
		chaptersDone: s.chaptersDone,
		sectionsRead: s.sectionsRead,
		bookmarks: s.bookmarks,
		testHistory: s.testHistory,
		feynman: s.feynman,
		theme: s.theme,
		progressive: s.progressive,
		newPerDay: s.newPerDay,
		dailyGoal: s.dailyGoal,
		lastRead: s.lastRead,
		studyLog: s.studyLog,
		readerSize: s.readerSize
	}),
	onRehydrateStorage: () => (state) => {
		if (!state) return;
		state.activeTest = null;
		state.activeSession = null;
		if (Object.keys(state.cards).length === 0) {
			const v1 = migrateV1();
			if (v1) state.importState(v1);
		}
		if (typeof document !== "undefined") document.documentElement.classList.toggle("dark", state.theme === "dark");
	}
}));
function cardId(i) {
	return `f${i}`;
}
function dueCards() {
	const now = Date.now();
	const cards = useStudy.getState().cards;
	return FACTS.map((_, i) => i).filter((i) => {
		const c = cards[cardId(i)];
		return c && c.seen > 0 && c.next <= now;
	});
}
function newCards() {
	const cards = useStudy.getState().cards;
	return FACTS.map((_, i) => i).filter((i) => {
		const c = cards[cardId(i)];
		return !c || c.seen === 0;
	});
}
function startCardSession(chFilter) {
	const pool = (i) => chFilter === void 0 || TOPICS[FACTS[i].t].ch === chFilter;
	const due = shuffle(dueCards().filter(pool));
	const perDay = useStudy.getState().newPerDay;
	const fresh = shuffle(newCards().filter(pool)).slice(0, Math.max(5, perDay));
	const queue = [];
	let d = 0;
	let n = 0;
	while (d < due.length || n < fresh.length) {
		for (let k = 0; k < 4 && d < due.length; k++) queue.push(due[d++]);
		if (n < fresh.length) queue.push(fresh[n++]);
	}
	if (!queue.length) return null;
	return {
		queue: queue.slice(0, 40),
		pos: 0,
		revealed: false,
		done: 0,
		ratings: [],
		filter: chFilter ?? null,
		startedAt: Date.now()
	};
}
function focusCardSession(index) {
	const fact = FACTS[index];
	const ch = fact ? TOPICS[fact.t].ch : void 0;
	return {
		queue: [index, ...startCardSession(ch)?.queue.filter((x) => x !== index) ?? []].slice(0, 40),
		pos: 0,
		revealed: false,
		done: 0,
		ratings: [],
		filter: ch ?? null,
		startedAt: Date.now()
	};
}
function masteredCount() {
	const cards = useStudy.getState().cards;
	return FACTS.filter((_, i) => {
		const c = cards[cardId(i)];
		return c && c.int >= 21;
	}).length;
}
function seenCount() {
	const cards = useStudy.getState().cards;
	return FACTS.filter((_, i) => {
		const c = cards[cardId(i)];
		return c && c.seen > 0;
	}).length;
}
function todayStudied() {
	return useStudy.getState().studyLog[dayKey()] ?? 0;
}
function chapterUnlocked(num) {
	const s = useStudy.getState();
	if (!s.progressive || num <= 1) return true;
	return s.chaptersDone.includes(num - 1) || s.chaptersDone.includes(num);
}
function topicMastery(ids) {
	if (!ids.length) return 0;
	const cards = useStudy.getState().cards;
	const m = ids.reduce((a, i) => {
		const c = cards[cardId(i)];
		return a + (c ? Math.min(1, c.int / 21) : 0);
	}, 0);
	return Math.round(100 * m / ids.length);
}
function readinessScore() {
	const seen = seenCount() / FACTS.length;
	const mast = masteredCount() / FACTS.length;
	const ch = useStudy.getState().chaptersDone.filter((n) => n <= 5).length / 5;
	const last = useStudy.getState().testHistory.filter((t) => !t.mini).slice(-3);
	const testAvg = last.length ? last.reduce((a, t) => a + t.score / t.total, 0) / last.length : 0;
	const score = seen * 25 + mast * 35 + ch * 15 + testAvg * 25;
	return Math.round(score);
}
function weakTopicIds() {
	const cards = useStudy.getState().cards;
	useStudy.getState().testHistory;
	const wrongBias = /* @__PURE__ */ new Map();
	FACTS.forEach((_, i) => {
		const c = cards[cardId(i)];
		if (c && c.lapses > 0) wrongBias.set(i, (wrongBias.get(i) ?? 0) + c.lapses);
		if (c && c.seen > 0 && c.int < 6) wrongBias.set(i, (wrongBias.get(i) ?? 0) + 1);
	});
	const ranked = [...wrongBias.entries()].sort((a, b) => b[1] - a[1]);
	if (ranked.length >= 8) return ranked.slice(0, 24).map(([i]) => i);
	return FACTS.map((_, i) => i).filter((i) => {
		const c = cards[cardId(i)];
		return !c || c.seen === 0 || c.int < 6;
	}).slice(0, 24);
}
function nextReviewTs() {
	const cards = Object.values(useStudy.getState().cards).filter((c) => c.seen > 0);
	if (!cards.length) return 0;
	return Math.min(...cards.map((c) => c.next));
}
var Dialog = Dialog$1;
function DialogContent({ className, children, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-paper-2 p-5 shadow-card outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		children: [
			title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "font-display text-xl font-semibold text-ink",
				children: title
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "sr-only",
				children: "Dialog"
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
				className: "absolute top-3 right-3 grid size-9 place-items-center rounded-md text-muted hover:bg-ink/5 hover:text-ink",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})
		]
	})] });
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 origin-center transition-[scale,background-color,color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-navy text-navy-fg hover:bg-navy/90",
			crimson: "bg-crimson text-paper-2 hover:bg-crimson/90",
			outline: "bg-transparent text-ink shadow-[0_0_0_1px_var(--line)] hover:bg-paper",
			ghost: "bg-transparent text-ink-soft hover:bg-ink/5 hover:text-ink",
			soft: "bg-navy/8 text-navy hover:bg-navy/12 dark:bg-navy/10 dark:text-navy"
		},
		size: {
			default: "h-11 rounded-md px-4 text-[15px]",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-md px-5 text-base",
			icon: "size-10 rounded-md",
			pill: "h-10 rounded-full px-4 text-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function CommandSearch() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const nav = useNavigate();
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setOpen((v) => !v);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const results = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		if (query.length < 2) return {
			sections: [],
			facts: []
		};
		const sections = [];
		HANDBOOK.chapters.forEach((c) => c.sections.forEach((s, si) => {
			if (s.title.toLowerCase().includes(query)) {
				sections.push({
					ch: c.num,
					si,
					title: s.title,
					hit: s.title
				});
				return;
			}
			for (const b of s.blocks) {
				const i = b.x.toLowerCase().indexOf(query);
				if (i >= 0) {
					sections.push({
						ch: c.num,
						si,
						title: s.title,
						hit: b.x.slice(Math.max(0, i - 40), i + query.length + 60)
					});
					break;
				}
			}
		}));
		const facts = [];
		FACTS.forEach((f, i) => {
			if (f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)) facts.push({
				i,
				q: f.q,
				topic: TOPICS[f.t].name
			});
		});
		return {
			sections: sections.slice(0, 8),
			facts: facts.slice(0, 8)
		};
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			size: "sm",
			className: "hidden h-9 w-52 justify-between px-3 text-muted md:inline-flex",
			onClick: () => setOpen(true),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5" }), "Search"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
				className: "text-[10px] tracking-wide text-muted",
				children: "⌘K"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: "md:hidden",
			"aria-label": "Search handbook",
			onClick: () => setOpen(true),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "overflow-hidden p-0",
				title: "Search",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e, {
					className: "bg-transparent",
					shouldFilter: false,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-line px-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
							value: q,
							onValueChange: setQ,
							placeholder: "Search the handbook or questions…",
							className: "h-12 w-full bg-transparent text-base outline-none placeholder:text-muted"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
						className: "max-h-80 overflow-auto p-2",
						children: q.trim().length < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 py-8 text-center text-sm text-muted",
							children: "Type at least two letters. Jump to a chapter, section, or fact."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							results.sections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
								heading: "Handbook",
								className: "px-1 py-1 text-[11px] font-semibold tracking-wider text-muted uppercase",
								children: results.sections.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
									value: `sec-${r.ch}-${r.si}-${r.hit.slice(0, 24)}`,
									onSelect: () => {
										setOpen(false);
										setQ("");
										nav({
											to: "/read/$chapterId/$sectionId",
											params: {
												chapterId: String(r.ch),
												sectionId: String(r.si)
											}
										});
									},
									className: "mt-1 cursor-pointer rounded-md px-3 py-2 text-sm data-[selected=true]:bg-navy/8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[11px] font-semibold tracking-wide text-crimson uppercase",
										children: [
											"Ch ",
											r.ch,
											" · ",
											r.title
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "line-clamp-2 text-ink-soft",
										children: [
											"…",
											r.hit,
											"…"
										]
									})]
								}, `${r.ch}-${r.si}-${r.hit.slice(0, 12)}`))
							}),
							results.facts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
								heading: "Questions",
								className: "mt-2 px-1 py-1 text-[11px] font-semibold tracking-wider text-muted uppercase",
								children: results.facts.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
									value: `fact-${r.i}`,
									onSelect: () => {
										setOpen(false);
										setQ("");
										useStudy.getState().setActiveSession(focusCardSession(r.i));
										nav({ to: "/cards" });
									},
									className: "mt-1 cursor-pointer rounded-md px-3 py-2 text-sm data-[selected=true]:bg-navy/8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-semibold tracking-wide text-muted uppercase",
										children: r.topic
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-ink",
										children: r.q
									})]
								}, r.i))
							}),
							results.sections.length === 0 && results.facts.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "px-3 py-8 text-center text-sm text-muted",
								children: [
									"No matches for “",
									q,
									"”."
								]
							})
						] })
					})]
				})
			})
		})
	] });
}
function ThemeToggle() {
	const theme = useStudy((s) => s.theme);
	const setTheme = useStudy((s) => s.setTheme);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative size-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: theme === "dark" ? "absolute inset-0 size-4 scale-100 opacity-100" : "absolute inset-0 size-4 scale-[0.25] opacity-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: theme === "dark" ? "absolute inset-0 size-4 scale-[0.25] opacity-0" : "absolute inset-0 size-4 scale-100 opacity-100" })]
		})
	});
}
var NAV = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/read",
		label: "Read",
		icon: BookOpen
	},
	{
		to: "/cards",
		label: "Cards",
		icon: Layers
	},
	{
		to: "/test",
		label: "Test",
		icon: ClipboardCheck
	},
	{
		to: "/progress",
		label: "Progress",
		icon: ChartNoAxesColumn
	}
];
function AuthSlot() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-8 animate-pulse rounded-full bg-ink/10" });
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedOut, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/login",
		className: "text-sm font-medium text-muted hover:text-ink",
		children: "Sign in"
	}) });
}
function Crest({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-7", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "7",
				className: "fill-navy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 15.2h24v1.6H4z",
				className: "fill-paper-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M15.2 4h1.6v24h-1.6z",
				className: "fill-paper-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 15.7h24v.6H4z",
				className: "fill-crimson"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M15.7 4h.6v24h-.6z",
				className: "fill-crimson"
			})
		]
	});
}
function isActive(pathname, to) {
	return to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
}
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const cards = useStudy((s) => s.cards);
	const [due, setDue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setDue(dueCards().length);
	}, [cards]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-paper-2 focus:px-3 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed top-0 bottom-0 left-0 z-20 hidden w-56 flex-col border-r border-line bg-paper-2 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5 px-5 pt-6 pb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-[15px] font-semibold tracking-tight",
								children: "Life in the UK"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] tracking-wide text-muted uppercase",
								children: "Study handbook"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-1 flex-col gap-0.5 px-3",
						"aria-label": "Main",
						children: NAV.map((item) => {
							const active = isActive(pathname, item.to);
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("relative flex h-11 items-center gap-3 rounded-md px-3 text-[15px] font-medium transition-[background-color,color] duration-150", active ? "bg-navy/8 text-navy" : "text-ink-soft hover:bg-ink/4 hover:text-ink"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4",
										strokeWidth: 1.75
									}),
									item.label,
									item.to === "/cards" && due > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto grid min-w-5 place-items-center rounded-full bg-crimson px-1.5 text-[10px] font-bold text-paper-2",
										children: due
									})
								]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-line px-4 py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-line bg-paper/85 px-3 backdrop-blur-md md:ml-56 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-semibold",
						children: "Life in the UK"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSearch, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:ml-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					id: "main",
					className: "mx-auto w-full max-w-3xl px-4 pt-6 pb-28 md:px-8 md:pt-9 md:pb-16",
					children
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed right-0 bottom-0 left-0 z-30 flex border-t border-line bg-paper-2/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden",
				"aria-label": "Main",
				children: NAV.map((item) => {
					const active = isActive(pathname, item.to);
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: cn("relative flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium tracking-wide uppercase", active ? "text-crimson" : "text-muted"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-[18px]",
								strokeWidth: 1.75
							}),
							item.label,
							item.to === "/cards" && due > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-1.5 right-[calc(50%-18px)] grid min-w-4 place-items-center rounded-full bg-crimson px-1 text-[9px] font-bold text-paper-2",
								children: due
							})
						]
					}, item.to);
				})
			})
		]
	});
}
var styles_default = "/assets/styles-DYcSDR-Z.css";
var APP_NAME = "Life in the UK";
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Study the official Life in the UK handbook. Flashcards, mock tests, and a full reader — built for the citizenship test."
			},
			{
				name: "apple-mobile-web-app-title",
				content: APP_NAME
			},
			{
				name: "theme-color",
				content: "#12263f"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: APP_NAME
			},
			...[]
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){try{var r=localStorage.getItem("liuk-study-v2");if(!r)return;var s=JSON.parse(r);var t=s.state&&s.state.theme;if(t==="dark")document.documentElement.classList.add("dark");}catch(e){}})();` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "system",
				position: "top-center",
				toastOptions: { className: "!bg-navy !text-navy-fg !border-0 !rounded-full !px-4" }
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$9 = () => import("./routes-cODpcUiy.mjs");
var Route$10 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./cards-C6W9WgRg.mjs");
var Route$9 = createFileRoute("/cards")({
	validateSearch: (raw) => ({
		chapter: raw.chapter === void 0 || raw.chapter === "" ? void 0 : Number(raw.chapter),
		start: raw.start === true || raw.start === 1 || raw.start === "1" || raw.start === "true" ? true : void 0,
		fact: raw.fact === void 0 || raw.fact === "" ? void 0 : Number(raw.fact)
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./login-ICsj2ox8.mjs");
var Route$8 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./progress-YxLqhTn5.mjs");
var Route$7 = createFileRoute("/progress")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./read-ASRh93Vj.mjs");
var Route$6 = createFileRoute("/read")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./test-DpyDvWe5.mjs");
var Route$5 = createFileRoute("/test")({
	validateSearch: (raw) => {
		const modeRaw = String(raw.mode ?? "");
		const mode = modeRaw === "timed" || modeRaw === "practice" || modeRaw === "weak" || modeRaw === "quick" ? modeRaw : void 0;
		return {
			chapter: raw.chapter === void 0 || raw.chapter === "" ? void 0 : Number(raw.chapter),
			mode
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./read.index-DLDdPeTA.mjs");
var Route$4 = createFileRoute("/read/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./read._chapterId-CW7Ibw0N.mjs");
var Route$3 = createFileRoute("/read/$chapterId")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var generateRandomString = createRandomStringGenerator("a-z", "0-9", "A-Z", "-_");
async function signJWT(payload, secret, expiresIn = 3600) {
	return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1e3) + expiresIn).sign(new TextEncoder().encode(secret));
}
async function verifyJWT(token, secret) {
	try {
		return (await jwtVerify(token, new TextEncoder().encode(secret))).payload;
	} catch {
		return null;
	}
}
var info = new Uint8Array([
	66,
	101,
	116,
	116,
	101,
	114,
	65,
	117,
	116,
	104,
	46,
	106,
	115,
	32,
	71,
	101,
	110,
	101,
	114,
	97,
	116,
	101,
	100,
	32,
	69,
	110,
	99,
	114,
	121,
	112,
	116,
	105,
	111,
	110,
	32,
	75,
	101,
	121
]);
var now = () => Date.now() / 1e3 | 0;
var alg = "dir";
var enc = "A256CBC-HS512";
function deriveEncryptionSecret(secret, salt) {
	return hkdf(sha256, new TextEncoder().encode(secret), new TextEncoder().encode(salt), info, 64);
}
function getCurrentSecret(secret) {
	if (typeof secret === "string") return secret;
	const value = secret.keys.get(secret.currentVersion);
	if (!value) throw new Error(`Secret version ${secret.currentVersion} not found in keys`);
	return value;
}
function getAllSecrets(secret) {
	if (typeof secret === "string") return [{
		version: 0,
		value: secret
	}];
	const result = [];
	for (const [version, value] of secret.keys) result.push({
		version,
		value
	});
	if (secret.legacySecret && !result.some((s) => s.value === secret.legacySecret)) result.push({
		version: -1,
		value: secret.legacySecret
	});
	return result;
}
async function symmetricEncodeJWT(payload, secret, salt, expiresIn = 3600) {
	const encryptionSecret = deriveEncryptionSecret(getCurrentSecret(secret), salt);
	const thumbprint = await calculateJwkThumbprint({
		kty: "oct",
		k: encode(encryptionSecret)
	}, "sha256");
	return await new EncryptJWT(payload).setProtectedHeader({
		alg,
		enc,
		kid: thumbprint
	}).setIssuedAt().setExpirationTime(now() + expiresIn).setJti(crypto.randomUUID()).encrypt(encryptionSecret);
}
var jwtDecryptOpts = {
	clockTolerance: 15,
	keyManagementAlgorithms: [alg],
	contentEncryptionAlgorithms: [enc, "A256GCM"]
};
async function symmetricDecodeJWT(token, secret, salt) {
	if (!token) return null;
	let hasKid = false;
	try {
		hasKid = decodeProtectedHeader(token).kid !== void 0;
	} catch {
		return null;
	}
	try {
		const secrets = getAllSecrets(secret);
		const { payload } = await jwtDecrypt(token, async (protectedHeader) => {
			const kid = protectedHeader.kid;
			if (kid !== void 0) {
				for (const s of secrets) {
					const encryptionSecret = deriveEncryptionSecret(s.value, salt);
					if (kid === await calculateJwkThumbprint({
						kty: "oct",
						k: encode(encryptionSecret)
					}, "sha256")) return encryptionSecret;
				}
				throw new Error("no matching decryption secret");
			}
			if (secrets.length === 1) return deriveEncryptionSecret(secrets[0].value, salt);
			return deriveEncryptionSecret(secrets[0].value, salt);
		}, jwtDecryptOpts);
		return payload;
	} catch {
		if (hasKid) return null;
		const secrets = getAllSecrets(secret);
		if (secrets.length <= 1) return null;
		for (let i = 1; i < secrets.length; i++) try {
			const s = secrets[i];
			const { payload } = await jwtDecrypt(token, deriveEncryptionSecret(s.value, salt), jwtDecryptOpts);
			return payload;
		} catch {
			continue;
		}
		return null;
	}
}
/**
* `@better-auth/utils/password` uses the "node" export condition in package.json
* to automatically pick the right implementation:
*   - Node.js / Bun / Deno → `node:crypto scrypt` (libuv thread pool, non-blocking)
*   - Unsupported runtimes → `@noble/hashes scrypt` (pure JS fallback)
*/
var hashPassword$1 = hashPassword;
var verifyPassword$1$1 = async ({ hash, password }) => {
	return verifyPassword(hash, password);
};
var ENVELOPE_PREFIX = "$ba$";
function parseEnvelope(data) {
	if (!data.startsWith(ENVELOPE_PREFIX)) return null;
	const firstSep = 4;
	const secondSep = data.indexOf("$", firstSep);
	if (secondSep === -1) return null;
	const version = parseInt(data.slice(firstSep, secondSep), 10);
	if (!Number.isInteger(version) || version < 0) return null;
	return {
		version,
		ciphertext: data.slice(secondSep + 1)
	};
}
function formatEnvelope(version, ciphertext) {
	return `${ENVELOPE_PREFIX}${version}$${ciphertext}`;
}
async function rawEncrypt(secret, data) {
	const keyAsBytes = await createHash("SHA-256").digest(secret);
	const dataAsBytes = utf8ToBytes(data);
	return bytesToHex(managedNonce(xchacha20poly1305)(new Uint8Array(keyAsBytes)).encrypt(dataAsBytes));
}
async function rawDecrypt(secret, hex) {
	const keyAsBytes = await createHash("SHA-256").digest(secret);
	const dataAsBytes = hexToBytes(hex);
	const chacha = managedNonce(xchacha20poly1305)(new Uint8Array(keyAsBytes));
	return new TextDecoder().decode(chacha.decrypt(dataAsBytes));
}
var symmetricEncrypt = async ({ key, data }) => {
	if (typeof key === "string") return rawEncrypt(key, data);
	const secret = key.keys.get(key.currentVersion);
	if (!secret) throw new Error(`Secret version ${key.currentVersion} not found in keys`);
	const ciphertext = await rawEncrypt(secret, data);
	return formatEnvelope(key.currentVersion, ciphertext);
};
var symmetricDecrypt = async ({ key, data }) => {
	if (typeof key === "string") return rawDecrypt(key, data);
	const envelope = parseEnvelope(data);
	if (envelope) {
		const secret = key.keys.get(envelope.version);
		if (!secret) throw new Error(`Secret version ${envelope.version} not found in keys (key may have been retired)`);
		return rawDecrypt(secret, envelope.ciphertext);
	}
	if (key.legacySecret) return rawDecrypt(key.legacySecret, data);
	throw new Error("Cannot decrypt legacy bare-hex payload: no legacy secret available. Set BETTER_AUTH_SECRET for backwards compatibility.");
};
function hasServerSessionStore(options) {
	return !!options.database || !!options.secondaryStorage;
}
function hasServerAccountStore(options) {
	return !!options.database;
}
function shouldBindAccountCookieToSessionUser(options) {
	return hasServerAccountStore(options);
}
var cache = /* @__PURE__ */ new WeakMap();
function getFields(options, modelName, mode) {
	const cacheKey = `${modelName}:${mode}`;
	if (!cache.has(options)) cache.set(options, /* @__PURE__ */ new Map());
	const tableCache = cache.get(options);
	if (tableCache.has(cacheKey)) return tableCache.get(cacheKey);
	const coreSchema = mode === "output" ? getAuthTables(options)[modelName]?.fields ?? {} : {};
	const additionalFields = modelName === "user" || modelName === "session" || modelName === "account" ? options[modelName]?.additionalFields : void 0;
	let schema = {
		...coreSchema,
		...additionalFields ?? {}
	};
	for (const plugin of options.plugins || []) if (plugin.schema && plugin.schema[modelName]) schema = {
		...schema,
		...plugin.schema[modelName].fields
	};
	tableCache.set(cacheKey, schema);
	return schema;
}
function parseUserOutput(options, user) {
	return filterOutputFields(user, getFields(options, "user", "output"));
}
/**
* Builds a synthetic user object that matches the shape of a real user
* returned from the database. This ensures enumeration protection works
* correctly by making synthetic and real user responses indistinguishable.
*
* The function iterates over the user output schema and:
* - Includes all fields that should be returned (returned !== false)
* - Uses provided values when available
* - Sets optional fields to null when no value is provided
* - Applies default values where defined
* - Always includes the 'id' field (not part of schema but always present)
*/
function buildSyntheticUserOutput(options, data) {
	const schema = getFields(options, "user", "output");
	const result = {};
	for (const key in schema) {
		const fieldAttr = schema[key];
		if (fieldAttr.returned === false) continue;
		if (key in data && data[key] !== void 0) result[key] = data[key];
		else if (fieldAttr.defaultValue !== void 0) result[key] = typeof fieldAttr.defaultValue === "function" ? fieldAttr.defaultValue() : fieldAttr.defaultValue;
		else if (!fieldAttr.required) result[key] = null;
	}
	if ("id" in data) result.id = data.id;
	return result;
}
function parseSessionOutput(options, session) {
	return filterOutputFields(session, getFields(options, "session", "output"));
}
function parseAccountOutput(options, account) {
	const { accessToken: _accessToken, refreshToken: _refreshToken, idToken: _idToken, accessTokenExpiresAt: _accessTokenExpiresAt, refreshTokenExpiresAt: _refreshTokenExpiresAt, password: _password, ...rest } = filterOutputFields(account, getFields(options, "account", "output"));
	return rest;
}
function parseInputData(data, schema) {
	const action = schema.action || "create";
	const fields = schema.fields;
	const parsedData = Object.create(null);
	for (const key in fields) {
		if (key in data) {
			if (fields[key].input === false) {
				if (fields[key].defaultValue !== void 0) {
					if (action !== "update") {
						parsedData[key] = fields[key].defaultValue;
						continue;
					}
				}
				if (data[key]) throw APIError.from("BAD_REQUEST", {
					...BASE_ERROR_CODES.FIELD_NOT_ALLOWED,
					message: `${key} is not allowed to be set`
				});
				continue;
			}
			if (fields[key].validator?.input && data[key] !== void 0) {
				const result = fields[key].validator.input["~standard"].validate(data[key]);
				if (result instanceof Promise) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.ASYNC_VALIDATION_NOT_SUPPORTED);
				if ("issues" in result && result.issues) throw APIError.from("BAD_REQUEST", {
					...BASE_ERROR_CODES.VALIDATION_ERROR,
					message: result.issues[0]?.message || "Validation Error"
				});
				parsedData[key] = result.value;
				continue;
			}
			if (fields[key].transform?.input && data[key] !== void 0) {
				parsedData[key] = fields[key].transform?.input(data[key]);
				continue;
			}
			parsedData[key] = data[key];
			continue;
		}
		if (fields[key].defaultValue !== void 0 && action === "create") {
			if (typeof fields[key].defaultValue === "function") {
				parsedData[key] = fields[key].defaultValue();
				continue;
			}
			parsedData[key] = fields[key].defaultValue;
			continue;
		}
		if (fields[key].required && action === "create") throw APIError.from("BAD_REQUEST", {
			...BASE_ERROR_CODES.MISSING_FIELD,
			message: `${key} is required`
		});
	}
	return parsedData;
}
function parseUserInput(options, user = {}, action) {
	return parseInputData(user, {
		fields: getFields(options, "user", "input"),
		action
	});
}
function parseAdditionalUserInputFromProviderProfile(options, profile = {}, action) {
	const schema = getFields(options, "user", "input");
	const allowedProfileFields = Object.create(null);
	for (const key of Object.keys(profile)) {
		if (schema[key]?.input === false) continue;
		allowedProfileFields[key] = profile[key];
	}
	return parseInputData(allowedProfileFields, {
		fields: schema,
		action
	});
}
function parseSessionInput(options, session, action) {
	return parseInputData(session, {
		fields: getFields(options, "session", "input"),
		action
	});
}
function getSessionDefaultFields(options) {
	const fields = getFields(options, "session", "input");
	const defaults = {};
	for (const key in fields) if (fields[key].defaultValue !== void 0) defaults[key] = typeof fields[key].defaultValue === "function" ? fields[key].defaultValue() : fields[key].defaultValue;
	return defaults;
}
var getDate = (span, unit = "ms") => {
	return new Date(Date.now() + (unit === "sec" ? span * 1e3 : span));
};
function isPromise(obj) {
	return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}
var SEC = 1e3;
var MIN = SEC * 60;
var HOUR = MIN * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365.25;
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mo|years?|yrs?|y)(?: (ago|from now))?$/i;
function parse(value) {
	const match = REGEX.exec(value);
	if (!match || match[4] && match[1]) throw new TypeError(`Invalid time string format: "${value}". Use formats like "7d", "30m", "1 hour", etc.`);
	const n = parseFloat(match[2]);
	const unit = match[3].toLowerCase();
	let result;
	switch (unit) {
		case "years":
		case "year":
		case "yrs":
		case "yr":
		case "y":
			result = n * YEAR;
			break;
		case "months":
		case "month":
		case "mo":
			result = n * MONTH;
			break;
		case "weeks":
		case "week":
		case "w":
			result = n * WEEK;
			break;
		case "days":
		case "day":
		case "d":
			result = n * DAY;
			break;
		case "hours":
		case "hour":
		case "hrs":
		case "hr":
		case "h":
			result = n * HOUR;
			break;
		case "minutes":
		case "minute":
		case "mins":
		case "min":
		case "m":
			result = n * MIN;
			break;
		case "seconds":
		case "second":
		case "secs":
		case "sec":
		case "s":
			result = n * SEC;
			break;
		default: throw new TypeError(`Unknown time unit: "${unit}"`);
	}
	if (match[1] === "-" || match[4] === "ago") return -result;
	return result;
}
/**
* Parse a time string and return the value in seconds.
*
* @param value - A time string like "7d", "30m", "1 hour", "2 hours ago"
* @returns The parsed value in seconds (rounded)
* @throws TypeError if the string format is invalid
*
* @example
* sec("1d")          // 86400
* sec("2 hours")     // 7200
* sec("-30s")        // -30
* sec("2 hours ago") // -7200
*/
function sec(value) {
	return Math.round(parse(value) / 1e3);
}
/**
* Per-cookie byte ceiling.
* Safari's ~4093 floor is the lowest among browsers.
* Kept a little under it for attributes added after sizing.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-6.1
* @see https://github.com/dotnet/aspnetcore/blob/aa5493528640932601bb82ef3295e4d8ca7e11c5/src/Shared/ChunkingCookieManager/ChunkingCookieManager.cs#L40
*/
var MAX_COOKIE_SIZE = 4050;
/**
* Max chunks per cookie.
* A larger value does not belong in a cookie.
*/
var MAX_COOKIE_CHUNKS = 100;
/**
* Largest value that keeps the serialized cookie within {@link MAX_COOKIE_SIZE},
* measured with the real `serializeCookie` writer so it stays in sync with the
* wire. Non-positive when the name and attributes alone overflow.
*/
function getMaxCookieValueSize(name, options) {
	return MAX_COOKIE_SIZE - serializeCookie(name, "", { ...options }).length;
}
/**
* Read all existing chunks from cookies
*/
function readExistingChunks(cookieName, ctx) {
	const chunks = {};
	const cookies = parseCookies(ctx.headers?.get("cookie") || "");
	for (const [name, value] of cookies) if (name.startsWith(cookieName)) chunks[name] = value;
	return chunks;
}
/**
* Split a cookie value into chunks if needed
*/
function chunkCookie(storeName, cookie, chunks, logger) {
	const chunkSize = getMaxCookieValueSize(`${cookie.name}.99`, cookie.attributes);
	const chunkCount = chunkSize > 0 ? Math.ceil(cookie.value.length / chunkSize) : Infinity;
	if (chunkCount <= 1) {
		chunks[cookie.name] = cookie.value;
		return [cookie];
	}
	if (chunkCount > MAX_COOKIE_CHUNKS) {
		logger.warn(`${storeName} cookie is too large to store even after chunking, so the cache was skipped. Reduce the cached data or use a database session.`);
		return [];
	}
	const cookies = [];
	for (let i = 0; i < chunkCount; i++) {
		const name = `${cookie.name}.${i}`;
		const start = i * chunkSize;
		const value = cookie.value.substring(start, start + chunkSize);
		cookies.push({
			...cookie,
			name,
			value
		});
		chunks[name] = value;
	}
	logger.debug(`CHUNKING_${storeName.toUpperCase()}_COOKIE`, {
		message: `${storeName} cookie exceeds the ${MAX_COOKIE_SIZE} byte limit and was split into ${chunkCount} chunks.`,
		valueSize: cookie.value.length,
		chunkCount,
		chunkSizes: cookies.map((c) => c.value.length)
	});
	return cookies;
}
/**
* Get all cookies that should be cleaned (removed)
*/
function getCleanCookies(chunks, cookieOptions) {
	const cleanedChunks = {};
	for (const name in chunks) cleanedChunks[name] = {
		name,
		value: "",
		attributes: {
			...cookieOptions,
			maxAge: 0
		}
	};
	return cleanedChunks;
}
/**
* Store that splits a cookie into numbered chunks when its serialized form
* would exceed the per-cookie byte limit, expiring stale chunks as needed.
*
* @see https://github.com/nextauthjs/next-auth/blob/27b2519b84b8eb9cf053775dea29d577d2aa0098/packages/next-auth/src/core/lib/cookie.ts
*/
var storeFactory = (storeName) => (cookieName, cookieOptions, ctx) => {
	const chunks = readExistingChunks(cookieName, ctx);
	const logger = ctx.context.logger;
	const expireExistingChunks = () => {
		const expired = getCleanCookies(chunks, cookieOptions);
		for (const name in chunks) delete chunks[name];
		return expired;
	};
	return {
		chunk(value, options) {
			const cookies = expireExistingChunks();
			const chunked = chunkCookie(storeName, {
				name: cookieName,
				value,
				attributes: {
					...cookieOptions,
					...options
				}
			}, chunks, logger);
			for (const chunk of chunked) cookies[chunk.name] = chunk;
			return Object.values(cookies);
		},
		clean() {
			return Object.values(expireExistingChunks());
		},
		setCookies(cookies) {
			for (const cookie of cookies) ctx.setCookie(cookie.name, cookie.value, cookie.attributes);
		}
	};
};
var createSessionStore = storeFactory("Session");
var createAccountStore = storeFactory("Account");
function getChunkedCookie(ctx, cookieName) {
	const value = ctx.getCookie(cookieName);
	if (value) return value;
	const chunks = [];
	const cookieHeader = ctx.headers?.get("cookie");
	if (!cookieHeader) return null;
	for (const [name, val] of parseCookies(cookieHeader)) if (name.startsWith(cookieName + ".")) {
		const indexStr = name.split(".").at(-1);
		const index = parseInt(indexStr || "0", 10);
		if (!isNaN(index)) chunks.push({
			index,
			value: val
		});
	}
	if (chunks.length > 0) {
		chunks.sort((a, b) => a.index - b.index);
		return chunks.map((c) => c.value).join("");
	}
	return null;
}
async function setAccountCookie(c, accountData) {
	const accountDataCookie = c.context.authCookies.accountData;
	const options = {
		maxAge: 300,
		...accountDataCookie.attributes
	};
	const data = await symmetricEncodeJWT(accountData, c.context.secretConfig, "better-auth-account", options.maxAge);
	const accountStore = createAccountStore(accountDataCookie.name, options, c);
	accountStore.setCookies(accountStore.chunk(data, options));
}
async function getAccountCookie(c) {
	const accountCookie = getChunkedCookie(c, c.context.authCookies.accountData.name);
	if (accountCookie) {
		const accountData = safeJSONParse(await symmetricDecodeJWT(accountCookie, c.context.secretConfig, "better-auth-account"));
		if (accountData) return accountData;
	}
	return null;
}
var getSessionQuerySchema = optional(object({
	/**
	* If cookie cache is enabled, it will disable the cache
	* and fetch the session from the database
	*/
	disableCookieCache: boolean$1().meta({ description: "Disable cookie cache and fetch session from database" }).optional(),
	disableRefresh: boolean$1().meta({ description: "Disable session refresh. Useful for checking session status, without updating the session" }).optional()
}));
function createCookieGetter(options) {
	const baseURLString = typeof options.baseURL === "string" ? options.baseURL : void 0;
	const dynamicProtocol = typeof options.baseURL === "object" && options.baseURL !== null ? options.baseURL.protocol : void 0;
	const secureCookiePrefix = (options.advanced?.useSecureCookies !== void 0 ? options.advanced?.useSecureCookies : dynamicProtocol === "https" ? true : dynamicProtocol === "http" ? false : baseURLString ? baseURLString.startsWith("https://") : isProduction) ? SECURE_COOKIE_PREFIX : "";
	const crossSubdomainEnabled = !!options.advanced?.crossSubDomainCookies?.enabled;
	const domain = crossSubdomainEnabled ? options.advanced?.crossSubDomainCookies?.domain || (baseURLString ? new URL(baseURLString).hostname : void 0) : void 0;
	if (crossSubdomainEnabled && !domain && !isDynamicBaseURLConfig(options.baseURL)) throw new BetterAuthError("baseURL is required when crossSubdomainCookies are enabled.");
	function createCookie(cookieName, overrideAttributes = {}) {
		const prefix = options.advanced?.cookiePrefix || "better-auth";
		const name = options.advanced?.cookies?.[cookieName]?.name || `${prefix}.${cookieName}`;
		const attributes = options.advanced?.cookies?.[cookieName]?.attributes ?? {};
		return {
			name: `${secureCookiePrefix}${name}`,
			attributes: {
				secure: !!secureCookiePrefix,
				sameSite: "lax",
				path: "/",
				httpOnly: true,
				...crossSubdomainEnabled ? { domain } : {},
				...options.advanced?.defaultCookieAttributes,
				...overrideAttributes,
				...attributes
			}
		};
	}
	return createCookie;
}
function getCookies(options) {
	const createCookie = createCookieGetter(options);
	const sessionToken = createCookie("session_token", { maxAge: options.session?.expiresIn || sec("7d") });
	const sessionData = createCookie("session_data", { maxAge: options.session?.cookieCache?.maxAge || 300 });
	const accountData = createCookie("account_data", { maxAge: options.session?.cookieCache?.maxAge || 300 });
	const dontRememberToken = createCookie("dont_remember");
	return {
		sessionToken: {
			name: sessionToken.name,
			attributes: sessionToken.attributes
		},
		/**
		* This cookie is used to store the session data in the cookie
		* This is useful for when you want to cache the session in the cookie
		*/
		sessionData: {
			name: sessionData.name,
			attributes: sessionData.attributes
		},
		dontRememberToken: {
			name: dontRememberToken.name,
			attributes: dontRememberToken.attributes
		},
		accountData: {
			name: accountData.name,
			attributes: accountData.attributes
		}
	};
}
async function setCookieCache(ctx, session, dontRememberMe) {
	if (!ctx.context.options.session?.cookieCache?.enabled) return;
	const filteredSession = filterOutputFields(session.session, ctx.context.options.session?.additionalFields);
	const filteredUser = parseUserOutput(ctx.context.options, session.user);
	const versionConfig = ctx.context.options.session?.cookieCache?.version;
	let version = "1";
	if (versionConfig) {
		if (typeof versionConfig === "string") version = versionConfig;
		else if (typeof versionConfig === "function") {
			const result = versionConfig(session.session, session.user);
			version = isPromise(result) ? await result : result;
		}
	}
	const sessionData = {
		session: filteredSession,
		user: filteredUser,
		updatedAt: Date.now(),
		version
	};
	const options = {
		...ctx.context.authCookies.sessionData.attributes,
		maxAge: dontRememberMe ? void 0 : ctx.context.authCookies.sessionData.attributes.maxAge
	};
	const expiresAtDate = getDate(options.maxAge || 60, "sec").getTime();
	const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
	let data;
	if (strategy === "jwe") data = await symmetricEncodeJWT(sessionData, ctx.context.secretConfig, "better-auth-session", options.maxAge || 300);
	else if (strategy === "jwt") data = await signJWT(sessionData, ctx.context.secret, options.maxAge || 300);
	else data = base64Url.encode(JSON.stringify({
		session: sessionData,
		expiresAt: expiresAtDate,
		signature: await createHMAC("SHA-256", "base64urlnopad").sign(ctx.context.secret, JSON.stringify({
			...sessionData,
			expiresAt: expiresAtDate
		}))
	}), { padding: false });
	const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, options, ctx);
	sessionStore.setCookies(sessionStore.chunk(data, options));
	if (ctx.context.options.account?.storeAccountCookie && !hasPendingSetCookie(ctx, ctx.context.authCookies.accountData.name)) {
		const accountData = await getAccountCookie(ctx);
		if (accountData) if (!shouldBindAccountCookieToSessionUser(ctx.context.options) || accountData.userId === session.user.id) await setAccountCookie(ctx, accountData);
		else {
			expireCookie(ctx, ctx.context.authCookies.accountData);
			const accountStore = createAccountStore(ctx.context.authCookies.accountData.name, ctx.context.authCookies.accountData.attributes, ctx);
			accountStore.setCookies(accountStore.clean());
		}
	}
}
async function setSessionCookie(ctx, session, dontRememberMe, overrides) {
	const dontRememberMeCookie = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
	dontRememberMe = dontRememberMe !== void 0 ? dontRememberMe : !!dontRememberMeCookie;
	const options = ctx.context.authCookies.sessionToken.attributes;
	const maxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
	await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
		...options,
		maxAge,
		...overrides
	});
	if (dontRememberMe) await ctx.setSignedCookie(ctx.context.authCookies.dontRememberToken.name, "true", ctx.context.secret, ctx.context.authCookies.dontRememberToken.attributes);
	await setCookieCache(ctx, session, dontRememberMe);
	ctx.context.setNewSession(session);
}
/**
* Remove any prior `Set-Cookie` entries on the current response whose cookie
* name matches `cookieName` or any chunked variant (`${cookieName}.0`, etc.).
*
* Prevents a valid cookie value from leaking on the wire when the same cookie
* is set and then expired within a single request (e.g. `/sign-in/email`
* writes credential session cookies and the 2FA after-hook expires them).
* Browsers honor the expiring entry, but anything reading the raw response
* headers — proxy/LB logs, server-side SDK consumers, observability tools —
* sees the earlier valid value and could replay it (bypassing the 2FA gate
* when the cookie cache is enabled).
*
* Scrubs both the local middleware scope's `responseHeaders` and the outer
* endpoint scope's `ctx.context.responseHeaders`, because plugin after-hooks
* run in a fresh local scope while accumulated response headers live on the
* outer one. `scoped.context` is required by {@link GenericEndpointContext}
* but unit-test mocks pass a minimal object via `as any`, so we use optional
* chaining defensively. The `Set` collapses the case where both scopes
* reference the same `Headers`.
*/
function removeSetCookieEntries(ctx, cookieName) {
	const scoped = ctx;
	const targets = /* @__PURE__ */ new Set();
	if (scoped.responseHeaders) targets.add(scoped.responseHeaders);
	if (scoped.context?.responseHeaders) targets.add(scoped.context.responseHeaders);
	const exact = `${cookieName}=`;
	const chunk = `${cookieName}.`;
	for (const headers of targets) {
		const existing = typeof headers.getSetCookie === "function" ? headers.getSetCookie() : splitSetCookieHeader(headers.get("set-cookie") || "");
		if (!existing.length) continue;
		const survivors = existing.filter((entry) => !entry.startsWith(exact) && !entry.startsWith(chunk));
		if (survivors.length === existing.length) continue;
		headers.delete("set-cookie");
		for (const entry of survivors) headers.append("set-cookie", entry);
	}
}
/**
* Whether the response already has a pending `Set-Cookie` for `cookieName`
* or a chunked variant.
*/
function hasPendingSetCookie(ctx, cookieName) {
	const scoped = ctx;
	const targets = /* @__PURE__ */ new Set();
	if (scoped.responseHeaders) targets.add(scoped.responseHeaders);
	if (scoped.context?.responseHeaders) targets.add(scoped.context.responseHeaders);
	const exact = `${cookieName}=`;
	const chunk = `${cookieName}.`;
	for (const headers of targets) if ((typeof headers.getSetCookie === "function" ? headers.getSetCookie() : splitSetCookieHeader(headers.get("set-cookie") || "")).some((entry) => entry.startsWith(exact) || entry.startsWith(chunk))) return true;
	return false;
}
/**
* Expires a cookie by setting `maxAge: 0` while preserving its attributes
*/
function expireCookie(ctx, cookie) {
	removeSetCookieEntries(ctx, cookie.name);
	ctx.setCookie(cookie.name, "", {
		...cookie.attributes,
		maxAge: 0
	});
}
function deleteSessionCookie(ctx, skipDontRememberMe) {
	expireCookie(ctx, ctx.context.authCookies.sessionToken);
	expireCookie(ctx, ctx.context.authCookies.sessionData);
	if (ctx.context.options.account?.storeAccountCookie) {
		expireCookie(ctx, ctx.context.authCookies.accountData);
		const accountStore = createAccountStore(ctx.context.authCookies.accountData.name, ctx.context.authCookies.accountData.attributes, ctx);
		const cleanCookies = accountStore.clean();
		accountStore.setCookies(cleanCookies);
	}
	if (ctx.context.oauthConfig.storeStateStrategy === "cookie") expireCookie(ctx, ctx.context.createAuthCookie("oauth_state"));
	const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, ctx.context.authCookies.sessionData.attributes, ctx);
	const cleanCookies = sessionStore.clean();
	sessionStore.setCookies(cleanCookies);
	if (!skipDontRememberMe) expireCookie(ctx, ctx.context.authCookies.dontRememberToken);
}
var stateDataSchema = looseObject({
	callbackURL: string(),
	codeVerifier: string(),
	errorURL: string().optional(),
	newUserURL: string().optional(),
	expiresAt: number(),
	/**
	* CSRF nonce returned to the OAuth provider. When using cookie state storage,
	* this must match the callback `state` query parameter.
	*/
	oauthState: string().optional(),
	link: object({
		email: string(),
		userId: string$1()
	}).optional(),
	requestSignUp: boolean().optional()
});
new Set(Object.keys(stateDataSchema.shape));
var StateError = class extends BetterAuthError {
	code;
	details;
	/**
	* The per-flow `errorCallbackURL` recovered from the parsed state, when the
	* failure happened after the state was successfully parsed (for example a
	* nonce or state-cookie mismatch). It was origin-validated at sign-in, so
	* the callback can safely redirect there instead of the default error page.
	* Absent when the state could not be parsed at all.
	*/
	errorURL;
	constructor(message, options) {
		super(message, options);
		this.code = options.code;
		this.details = options.details;
		this.errorURL = options.errorURL;
	}
};
async function generateGenericState(c, stateData, settings) {
	const state = generateRandomString(32);
	if (c.context.oauthConfig.storeStateStrategy === "cookie") {
		const payload = {
			...stateData,
			oauthState: state
		};
		const encryptedData = await symmetricEncrypt({
			key: c.context.secretConfig,
			data: JSON.stringify(payload)
		});
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "oauth_state", { maxAge: 600 });
		c.setCookie(stateCookie.name, encryptedData, stateCookie.attributes);
		return {
			state,
			codeVerifier: stateData.codeVerifier
		};
	}
	const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "state", { maxAge: 300 });
	await c.setSignedCookie(stateCookie.name, state, c.context.secret, stateCookie.attributes);
	const expiresAt = /* @__PURE__ */ new Date();
	expiresAt.setMinutes(expiresAt.getMinutes() + 10);
	if (!await c.context.internalAdapter.createVerificationValue({
		value: JSON.stringify({
			...stateData,
			oauthState: state
		}),
		identifier: state,
		expiresAt
	})) throw new StateError("Unable to create verification. Make sure the database adapter is properly working and there is a verification table in the database", { code: "state_generation_error" });
	return {
		state,
		codeVerifier: stateData.codeVerifier
	};
}
async function parseGenericState(c, state, settings) {
	if (!state) throw new StateError("State not found in OAuth callback", { code: "state_not_found" });
	const storeStateStrategy = c.context.oauthConfig.storeStateStrategy;
	let parsedData;
	if (storeStateStrategy === "cookie") {
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "oauth_state");
		const encryptedData = c.getCookie(stateCookie.name);
		if (!encryptedData) throw new StateError("State mismatch: auth state cookie not found", {
			code: "state_mismatch",
			details: { state }
		});
		try {
			const decryptedData = await symmetricDecrypt({
				key: c.context.secretConfig,
				data: encryptedData
			});
			parsedData = stateDataSchema.parse(JSON.parse(decryptedData));
		} catch (error) {
			throw new StateError("State invalid: Failed to decrypt or parse auth state", {
				code: "state_invalid",
				details: { state },
				cause: error
			});
		}
		if (!parsedData.oauthState || parsedData.oauthState !== state) throw new StateError("State mismatch: OAuth state parameter does not match stored state", {
			code: "state_security_mismatch",
			details: { state },
			errorURL: parsedData.errorURL
		});
		expireCookie(c, stateCookie);
	} else {
		const data = await c.context.internalAdapter.findVerificationValue(state);
		if (!data) throw new StateError("State mismatch: verification not found", {
			code: "state_mismatch",
			details: { state }
		});
		parsedData = stateDataSchema.parse(JSON.parse(data.value));
		if (parsedData.oauthState !== void 0 && parsedData.oauthState !== state) throw new StateError("State mismatch: OAuth state parameter does not match stored state", {
			code: "state_security_mismatch",
			details: { state },
			errorURL: parsedData.errorURL
		});
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "state");
		const stateCookieValue = await c.getSignedCookie(stateCookie.name, c.context.secret);
		if (!(settings?.skipStateCookieCheck ?? c.context.oauthConfig.skipStateCookieCheck) && (!stateCookieValue || stateCookieValue !== state)) throw new StateError("State mismatch: State not persisted correctly", {
			code: "state_security_mismatch",
			details: { state },
			errorURL: parsedData.errorURL
		});
		expireCookie(c, stateCookie);
		await c.context.internalAdapter.deleteVerificationByIdentifier(state);
	}
	if (parsedData.expiresAt < Date.now()) throw new StateError("Invalid state: request expired", {
		code: "state_mismatch",
		details: { expiresAt: parsedData.expiresAt },
		errorURL: parsedData.errorURL
	});
	return parsedData;
}
var HANDLING_DOCS_URL = "https://www.better-auth.com/docs/concepts/oauth#handling-providers-without-email";
/**
* Redirect the user to the OAuth error page with a machine-readable `error`
* code (and optional `error_description`).
*
* Every OAuth callback path routes its failures through this helper so the
* query parameter name, the `?`/`&` separator, and URL encoding are decided in
* one place. The error page reads the `error` query parameter, so callers must
* never hand-build the redirect with a different parameter name.
*/
function redirectOnError(ctx, errorURL, error, description) {
	const params = new URLSearchParams({ error });
	if (description) params.set("error_description", description);
	const sep = errorURL.includes("?") ? "&" : "?";
	throw ctx.redirect(`${errorURL}${sep}${params.toString()}`);
}
/**
* Build the logger message shown when an OAuth provider does not return an
* email address. Kept in one place so every rejection site points users at
* the same workaround docs.
*/
function missingEmailLogMessage(providerId, options) {
	return `${options?.source === "generic" ? `Generic OAuth provider "${providerId}"` : `Provider "${providerId}"`} did not return an email${options?.source === "id_token" ? " in the id token" : ""}. Either request the provider's email scope, or synthesize one via \`mapProfileToUser\`. See ${HANDLING_DOCS_URL}`;
}
var { get: getOAuthState, set: setOAuthState } = defineRequestState(() => null);
async function generateState(c, link, additionalData) {
	const callbackURL = c.body?.callbackURL || c.context.options.baseURL;
	if (!callbackURL) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CALLBACK_URL_REQUIRED);
	const codeVerifier = generateRandomString(128);
	const stateData = {
		...additionalData ? additionalData : {},
		callbackURL,
		codeVerifier,
		errorURL: c.body?.errorCallbackURL,
		newUserURL: c.body?.newUserCallbackURL,
		link,
		expiresAt: Date.now() + 6e5,
		requestSignUp: c.body?.requestSignUp
	};
	await setOAuthState(stateData);
	try {
		return generateGenericState(c, stateData);
	} catch (error) {
		c.context.logger.error("Failed to create verification", error);
		throw new APIError("INTERNAL_SERVER_ERROR", {
			message: "Unable to create verification",
			cause: error
		});
	}
}
async function parseState(c) {
	const state = c.query.state || c.body?.state;
	const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
	let parsedData;
	try {
		parsedData = await parseGenericState(c, state);
	} catch (error) {
		c.context.logger.error("Failed to parse state", error);
		let code = "internal_server_error";
		let redirectErrorURL = errorURL;
		if (error instanceof StateError) {
			code = error.code === "state_security_mismatch" ? "state_mismatch" : error.code;
			redirectErrorURL = error.errorURL ?? errorURL;
		}
		redirectOnError(c, redirectErrorURL, code);
	}
	if (!parsedData.errorURL) parsedData.errorURL = errorURL;
	if (parsedData) await setOAuthState(parsedData);
	return parsedData;
}
var HIDE_METADATA = { scope: "server" };
/**
* Matches the given url against an origin or origin pattern
* See "options.trustedOrigins" for details of supported patterns
*
* @param url The url to test
* @param pattern The origin pattern
* @param [settings] Specify supported pattern matching settings
* @returns {boolean} true if the URL matches the origin pattern, false otherwise.
*/
var matchesOriginPattern = (url, pattern, settings) => {
	if (url.startsWith("/")) {
		if (settings?.allowRelativePaths) return url.startsWith("/") && /^\/(?!\/|\\|%2f|%5c)[\w\-.\+/@]*(?:\?[\w\-.\+/=&%@]*)?$/.test(url);
		return false;
	}
	if (pattern.includes("*") || pattern.includes("?")) {
		if (pattern.includes("://")) return wildcardMatch(pattern)(getOrigin(url) || url);
		const host = getHost(url);
		if (!host) return false;
		return wildcardMatch(pattern)(host);
	}
	const protocol = getProtocol(url);
	return protocol === "http:" || protocol === "https:" || !protocol ? pattern === getOrigin(url) : url.startsWith(pattern);
};
/**
* Checks if CSRF should be skipped for backward compatibility.
* Previously, disableOriginCheck also disabled CSRF checks.
* This maintains that behavior when disableCSRFCheck isn't explicitly set.
* Only triggers for skipOriginCheck === true, not for path arrays.
*/
function shouldSkipCSRFForBackwardCompat(ctx) {
	return ctx.context.skipOriginCheck === true && ctx.context.options.advanced?.disableCSRFCheck === void 0;
}
/**
* Checks if the origin check should be skipped for the current request.
* Handles both boolean (skip all) and array (skip specific paths) configurations.
*/
function shouldSkipOriginCheck(ctx) {
	const skipOriginCheck = ctx.context.skipOriginCheck;
	if (skipOriginCheck === true) return true;
	if (Array.isArray(skipOriginCheck) && ctx.request) try {
		const basePath = new URL(ctx.context.baseURL).pathname;
		const currentPath = normalizePathname(ctx.request.url, basePath);
		return skipOriginCheck.some((skipPath) => {
			const normalizedSkipPath = skipPath.replace(/\/+$/, "");
			return currentPath === normalizedSkipPath || currentPath.startsWith(`${normalizedSkipPath}/`);
		});
	} catch {}
	return false;
}
/**
* Logs deprecation warning for users relying on coupled behavior.
* Only logs if user explicitly set disableOriginCheck (not test environment default).
*/
var logBackwardCompatWarning = deprecate(function logBackwardCompatWarning() {}, "disableOriginCheck: true currently also disables CSRF checks. In a future version, disableOriginCheck will ONLY disable URL validation. To keep CSRF disabled, add disableCSRFCheck: true to your config.");
/**
* A middleware to validate callbackURL and origin against trustedOrigins.
* Also handles CSRF protection using Fetch Metadata for first-login scenarios.
*/
var originCheckMiddleware = createAuthMiddleware(async (ctx) => {
	if (ctx.request?.method === "GET" || ctx.request?.method === "OPTIONS" || ctx.request?.method === "HEAD" || !ctx.request) return;
	await validateOrigin(ctx);
	if (shouldSkipOriginCheck(ctx)) return;
	const { body, query } = ctx;
	const callbackURL = body?.callbackURL || query?.callbackURL;
	const redirectURL = body?.redirectTo;
	const errorCallbackURL = body?.errorCallbackURL;
	const newUserCallbackURL = body?.newUserCallbackURL;
	const validateURL = (url, label) => {
		if (!url) return;
		if (typeof url !== "string") throw APIError.fromStatus("BAD_REQUEST", { message: `Invalid ${label}: expected a string` });
		if (!ctx.context.isTrustedOrigin(url, { allowRelativePaths: label !== "origin" })) {
			ctx.context.logger.error(`Invalid ${label}: ${url}`);
			ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${ctx.context.trustedOrigins}`);
			if (label === "origin") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
			if (label === "callbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_CALLBACK_URL);
			if (label === "redirectURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_REDIRECT_URL);
			if (label === "errorCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ERROR_CALLBACK_URL);
			if (label === "newUserCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_NEW_USER_CALLBACK_URL);
			throw APIError.fromStatus("FORBIDDEN", { message: `Invalid ${label}` });
		}
	};
	callbackURL && validateURL(callbackURL, "callbackURL");
	redirectURL && validateURL(redirectURL, "redirectURL");
	errorCallbackURL && validateURL(errorCallbackURL, "errorCallbackURL");
	newUserCallbackURL && validateURL(newUserCallbackURL, "newUserCallbackURL");
});
var originCheck = (getValue) => createAuthMiddleware(async (ctx) => {
	if (!ctx.request) return;
	if (shouldSkipOriginCheck(ctx)) return;
	const callbackURL = getValue(ctx);
	const validateURL = (url, label) => {
		if (!url) return;
		if (!ctx.context.isTrustedOrigin(url, { allowRelativePaths: label !== "origin" })) {
			ctx.context.logger.error(`Invalid ${label}: ${url}`);
			ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${ctx.context.trustedOrigins}`);
			if (label === "origin") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
			if (label === "callbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_CALLBACK_URL);
			if (label === "redirectURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_REDIRECT_URL);
			if (label === "errorCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ERROR_CALLBACK_URL);
			if (label === "newUserCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_NEW_USER_CALLBACK_URL);
			throw APIError.fromStatus("FORBIDDEN", { message: `Invalid ${label}` });
		}
	};
	const callbacks = Array.isArray(callbackURL) ? callbackURL : [callbackURL];
	for (const url of callbacks) validateURL(url, "callbackURL");
});
/**
* Validates origin header against trusted origins.
* @param ctx - The endpoint context
* @param forceValidate - If true, always validate origin regardless of cookies/skip flags
*/
async function validateOrigin(ctx, forceValidate = false) {
	const headers = ctx.request?.headers;
	if (!headers || !ctx.request) return;
	const originHeader = headers.get("origin") || headers.get("referer") || "";
	const useCookies = headers.has("cookie");
	if (ctx.context.skipCSRFCheck) return;
	if (shouldSkipCSRFForBackwardCompat(ctx)) {
		ctx.context.options.advanced?.disableOriginCheck === true && logBackwardCompatWarning();
		return;
	}
	if (shouldSkipOriginCheck(ctx)) return;
	if (!(forceValidate || useCookies)) return;
	if (!originHeader || originHeader === "null") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.MISSING_OR_NULL_ORIGIN);
	const trustedOrigins = Array.isArray(ctx.context.options.trustedOrigins) ? ctx.context.trustedOrigins : [...ctx.context.trustedOrigins, ...(await ctx.context.options.trustedOrigins?.(ctx.request))?.filter((v) => Boolean(v)) || []];
	if (!trustedOrigins.some((origin) => matchesOriginPattern(originHeader, origin))) {
		ctx.context.logger.error(`Invalid origin: ${originHeader}`);
		ctx.context.logger.info(`If it's a valid URL, please add ${originHeader} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${trustedOrigins}`);
		throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
	}
}
/**
* Middleware for CSRF protection using Fetch Metadata headers.
* This prevents cross-site navigation login attacks while supporting progressive enhancement.
*/
var formCsrfMiddleware = createAuthMiddleware(async (ctx) => {
	if (!ctx.request) return;
	await validateFormCsrf(ctx);
});
/**
* Validates CSRF protection for first-login scenarios using Fetch Metadata headers.
* This prevents cross-site form submission attacks while supporting progressive enhancement.
*/
async function validateFormCsrf(ctx) {
	const req = ctx.request;
	if (!req) return;
	if (ctx.context.skipCSRFCheck) return;
	if (shouldSkipCSRFForBackwardCompat(ctx)) return;
	const headers = req.headers;
	if (headers.has("cookie")) return await validateOrigin(ctx);
	const site = headers.get("Sec-Fetch-Site");
	const mode = headers.get("Sec-Fetch-Mode");
	const dest = headers.get("Sec-Fetch-Dest");
	if (Boolean(site && site.trim() || mode && mode.trim() || dest && dest.trim())) {
		if (site === "cross-site" && mode === "navigate") {
			ctx.context.logger.error("Blocked cross-site navigation login attempt (CSRF protection)", {
				secFetchSite: site,
				secFetchMode: mode,
				secFetchDest: dest
			});
			throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.CROSS_SITE_NAVIGATION_LOGIN_BLOCKED);
		}
		return await validateOrigin(ctx, true);
	}
	if (headers.get("origin") || headers.get("referer")) return await validateOrigin(ctx, true);
}
var memory = /* @__PURE__ */ new Map();
var MEMORY_STORE_MAX_ENTRIES = 1e5;
function pruneMemoryStore() {
	const now = Date.now();
	for (const [key, entry] of memory) if (now >= entry.expiresAt) memory.delete(key);
	if (memory.size <= MEMORY_STORE_MAX_ENTRIES) return;
	const overflow = memory.size - MEMORY_STORE_MAX_ENTRIES;
	let removed = 0;
	for (const key of memory.keys()) {
		memory.delete(key);
		if (++removed >= overflow) break;
	}
}
/**
* Decide an atomic rate-limit step against an in-memory `RateLimit` snapshot
* for the rolling `window` (seconds) and `max`. Shared by the memory backend
* (read-decide-write is atomic under single-threaded JS) and as the fallback
* for storages lacking an atomic primitive.
*/
function decideConsume(data, rule, now) {
	const windowInMs = rule.window * 1e3;
	if (!data) return {
		next: {
			key: "",
			count: 1,
			lastRequest: now
		},
		update: false,
		allowed: true,
		retryAfter: null
	};
	if (now - data.lastRequest > windowInMs) return {
		next: {
			...data,
			count: 1,
			lastRequest: now
		},
		update: true,
		allowed: true,
		retryAfter: null
	};
	if (data.count >= rule.max) return {
		next: data,
		update: true,
		allowed: false,
		retryAfter: getRetryAfter(data.lastRequest, rule.window)
	};
	return {
		next: {
			...data,
			count: data.count + 1,
			lastRequest: now
		},
		update: true,
		allowed: true,
		retryAfter: null
	};
}
function rateLimitResponse(retryAfter) {
	return new Response(JSON.stringify({ message: "Too many requests. Please try again later." }), {
		status: 429,
		statusText: "Too Many Requests",
		headers: { "X-Retry-After": retryAfter.toString() }
	});
}
function getRetryAfter(lastRequest, window) {
	const now = Date.now();
	const windowInMs = window * 1e3;
	return Math.ceil((lastRequest + windowInMs - now) / 1e3);
}
function createDatabaseStorageWrapper(ctx) {
	const model = "rateLimit";
	const db = ctx.adapter;
	const readRow = async (key) => {
		const data = (await db.findMany({
			model,
			where: [{
				field: "key",
				value: key
			}]
		}))[0];
		if (typeof data?.lastRequest === "bigint") data.lastRequest = Number(data.lastRequest);
		return data;
	};
	const consume = async (key, rule) => {
		const windowInMs = rule.window * 1e3;
		const data = await readRow(key);
		const now = Date.now();
		if (!data) try {
			await db.create({
				model,
				data: {
					key,
					count: 1,
					lastRequest: now
				}
			});
			return {
				allowed: true,
				retryAfter: null
			};
		} catch (error) {
			if (!await readRow(key)) throw error;
			return consume(key, rule);
		}
		if (now - data.lastRequest > windowInMs) {
			if (await db.incrementOne({
				model,
				where: [{
					field: "key",
					value: key
				}, {
					field: "lastRequest",
					operator: "lte",
					value: data.lastRequest
				}],
				increment: {},
				set: {
					count: 1,
					lastRequest: now
				}
			})) {
				await deleteExpiredRows(now);
				return {
					allowed: true,
					retryAfter: null
				};
			}
			return consume(key, rule);
		}
		const windowStart = now - windowInMs;
		if (await db.incrementOne({
			model,
			where: [
				{
					field: "key",
					value: key
				},
				{
					field: "lastRequest",
					operator: "gt",
					value: windowStart
				},
				{
					field: "count",
					operator: "lt",
					value: rule.max
				}
			],
			increment: { count: 1 },
			set: { lastRequest: now }
		})) return {
			allowed: true,
			retryAfter: null
		};
		const fresh = await readRow(key);
		if (!fresh) return consume(key, rule);
		if (now - fresh.lastRequest > windowInMs) return consume(key, rule);
		return {
			allowed: false,
			retryAfter: getRetryAfter(fresh.lastRequest, rule.window)
		};
	};
	const deleteExpiredRows = async (now) => {
		const cutoff = now - Math.max(ctx.rateLimit.window, ...getDefaultSpecialRules().map((r) => r.window)) * 1e3;
		await ctx.runInBackgroundOrAwait(db.deleteMany({
			model,
			where: [{
				field: "lastRequest",
				operator: "lt",
				value: cutoff
			}]
		}).then(() => void 0).catch((e) => ctx.logger.error("Error pruning rate limit rows", e)));
	};
	return {
		get: readRow,
		set: async (key, value, _update) => {
			try {
				if (_update) await db.updateMany({
					model,
					where: [{
						field: "key",
						value: key
					}],
					update: {
						count: value.count,
						lastRequest: value.lastRequest
					}
				});
				else await db.create({
					model,
					data: {
						key,
						count: value.count,
						lastRequest: value.lastRequest
					}
				});
			} catch (e) {
				ctx.logger.error("Error setting rate limit", e);
			}
		},
		consume
	};
}
function getRateLimitStorage(ctx, rateLimitSettings) {
	if (ctx.options.rateLimit?.customStorage) return ctx.options.rateLimit.customStorage;
	const storage = ctx.rateLimit.storage;
	if (storage === "secondary-storage") {
		const ttlFor = (window) => window ?? ctx.options.rateLimit?.window ?? 10;
		return {
			get: async (key) => {
				const data = await ctx.options.secondaryStorage?.get(key);
				return data ? safeJSONParse(data) : null;
			},
			set: async (key, value, _update) => {
				await ctx.options.secondaryStorage?.set?.(key, JSON.stringify(value), ttlFor(rateLimitSettings.window));
			},
			consume: ctx.options.secondaryStorage?.increment ? async (key, rule) => {
				if (await ctx.options.secondaryStorage.increment(key, ttlFor(rule.window)) <= rule.max) return {
					allowed: true,
					retryAfter: null
				};
				return {
					allowed: false,
					retryAfter: rule.window
				};
			} : void 0
		};
	} else if (storage === "memory") {
		const ttlFor = (window) => window ?? ctx.options.rateLimit?.window ?? 10;
		return {
			async get(key) {
				const entry = memory.get(key);
				if (!entry) return null;
				if (Date.now() >= entry.expiresAt) {
					memory.delete(key);
					return null;
				}
				return entry.data;
			},
			async set(key, value, _update) {
				const expiresAt = Date.now() + ttlFor(rateLimitSettings.window) * 1e3;
				memory.set(key, {
					data: value,
					expiresAt
				});
			},
			async consume(key, rule) {
				pruneMemoryStore();
				const now = Date.now();
				const entry = memory.get(key);
				const decision = decideConsume(entry && now < entry.expiresAt ? entry.data : void 0, rule, now);
				if (decision.allowed) memory.set(key, {
					data: {
						...decision.next,
						key
					},
					expiresAt: now + ttlFor(rule.window) * 1e3
				});
				return {
					allowed: decision.allowed,
					retryAfter: decision.retryAfter
				};
			}
		};
	}
	return createDatabaseStorageWrapper(ctx);
}
var ipWarningLogged = false;
var NO_TRUSTED_IP_KEY = "no-trusted-ip";
async function resolveRateLimitConfig(req, ctx) {
	const basePath = new URL(ctx.baseURL).pathname;
	const path = normalizePathname(req.url, basePath);
	let currentWindow = ctx.rateLimit.window;
	let currentMax = ctx.rateLimit.max;
	const ip = getIp(req, ctx.options);
	if (!ip && ctx.options.advanced?.ipAddress?.disableIpTracking) return null;
	if (!ip && !ipWarningLogged) {
		ctx.logger.warn("Rate limiting could not determine a client IP and is falling back to a single shared per-path bucket. Ensure your runtime forwards a trusted client IP header, then set `advanced.ipAddress.ipAddressHeaders` or `advanced.ipAddress.trustedProxies` so the address can be resolved.");
		ipWarningLogged = true;
	}
	const key = createRateLimitKey(ip ?? NO_TRUSTED_IP_KEY, path);
	const specialRule = getDefaultSpecialRules().find((rule) => rule.pathMatcher(path));
	if (specialRule) {
		currentWindow = specialRule.window;
		currentMax = specialRule.max;
	}
	for (const plugin of ctx.options.plugins || []) if (plugin.rateLimit) {
		const matchedRule = plugin.rateLimit.find((rule) => rule.pathMatcher(path));
		if (matchedRule) {
			currentWindow = matchedRule.window;
			currentMax = matchedRule.max;
			break;
		}
	}
	if (ctx.rateLimit.customRules) {
		const _path = Object.keys(ctx.rateLimit.customRules).find((p) => {
			if (p.includes("*")) return wildcardMatch(p)(path);
			return p === path;
		});
		if (_path) {
			const customRule = ctx.rateLimit.customRules[_path];
			const resolved = typeof customRule === "function" ? await customRule(req, {
				window: currentWindow,
				max: currentMax
			}) : customRule;
			if (resolved) {
				currentWindow = resolved.window;
				currentMax = resolved.max;
			}
			if (resolved === false) return null;
		}
	}
	return {
		key,
		currentWindow,
		currentMax
	};
}
var legacyFallbackWarningLogged = false;
/**
* Decides the rate limit for the request in a single atomic step. The whole
* check-and-increment happens here in the request phase; there is no separate
* response-phase write-back, so concurrent requests cannot all pass a stale
* read before any increment lands.
*/
async function onRequestRateLimit(req, ctx) {
	if (!ctx.rateLimit.enabled) return;
	const config = await resolveRateLimitConfig(req, ctx);
	if (!config) return;
	const { key, currentWindow, currentMax } = config;
	const storage = getRateLimitStorage(ctx, { window: currentWindow });
	const rule = {
		window: currentWindow,
		max: currentMax
	};
	if (storage.consume) {
		const { allowed, retryAfter } = await storage.consume(key, rule);
		if (!allowed) return rateLimitResponse(retryAfter ?? currentWindow);
		return;
	}
	return legacyConsume(ctx, storage, key, rule);
}
/**
* Non-atomic check-then-increment for storages that do not implement `consume`
* (custom storages, or secondary storages without `increment`). Under
* concurrency this is best-effort: simultaneous requests can each pass the
* check before either write lands.
*
* FIXME(rate-limit-consume-required): remove on `next` once `consume` is the
* sole required member of the storage contract.
*/
async function legacyConsume(ctx, storage, key, rule) {
	if (!legacyFallbackWarningLogged) {
		ctx.logger.warn("Rate limiting is best-effort: the configured storage has no atomic `consume`, so concurrent requests may bypass the limit. Provide a storage that implements `consume` for strict enforcement.");
		legacyFallbackWarningLogged = true;
	}
	const decision = decideConsume(await storage.get(key), rule, Date.now());
	if (!decision.allowed) return rateLimitResponse(decision.retryAfter ?? rule.window);
	await storage.set(key, {
		...decision.next,
		key
	}, decision.update);
}
function getDefaultSpecialRules() {
	return [{
		pathMatcher(path) {
			return path.startsWith("/sign-in") || path.startsWith("/sign-up") || path.startsWith("/change-password") || path.startsWith("/change-email");
		},
		window: 10,
		max: 3
	}, {
		pathMatcher(path) {
			return path === "/request-password-reset" || path === "/send-verification-email" || path.startsWith("/forget-password") || path === "/email-otp/send-verification-otp" || path === "/email-otp/request-password-reset";
		},
		window: 60,
		max: 3
	}];
}
/**
* State for skipping session refresh
*
* In some cases, such as when using server-side rendering (SSR) or when dealing with
* certain types of requests, it may be necessary to skip session refresh to prevent
* potential inconsistencies between the session data in the database and the session
* data stored in cookies.
*/
var { get: getShouldSkipSessionRefresh, set: setShouldSkipSessionRefresh } = defineRequestState(() => false);
var getSession = () => createAuthEndpoint("/get-session", {
	method: ["GET", "POST"],
	operationId: "getSession",
	query: getSessionQuerySchema,
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "getSession",
		description: "Get the current session",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: ["object", "null"],
				properties: {
					session: { $ref: "#/components/schemas/Session" },
					user: { $ref: "#/components/schemas/User" }
				},
				required: ["session", "user"]
			} } }
		} }
	} }
}, async (ctx) => {
	ctx.setHeader("cache-control", "no-store");
	ctx.setHeader("pragma", "no-cache");
	const deferSessionRefresh = ctx.context.options.session?.deferSessionRefresh;
	const isPostRequest = ctx.method === "POST";
	if (isPostRequest && !deferSessionRefresh) throw APIError.from("METHOD_NOT_ALLOWED", BASE_ERROR_CODES.METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED);
	try {
		const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
		if (!sessionCookieToken) return null;
		const sessionDataCookie = getChunkedCookie(ctx, ctx.context.authCookies.sessionData.name);
		let sessionDataPayload = null;
		if (sessionDataCookie) {
			const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
			if (strategy === "jwe") {
				const payload = await symmetricDecodeJWT(sessionDataCookie, ctx.context.secretConfig, "better-auth-session");
				if (payload && payload.session && payload.user) sessionDataPayload = {
					session: {
						session: payload.session,
						user: payload.user,
						updatedAt: payload.updatedAt,
						version: payload.version
					},
					expiresAt: payload.exp ? payload.exp * 1e3 : Date.now()
				};
				else expireCookie(ctx, ctx.context.authCookies.sessionData);
			} else if (strategy === "jwt") {
				const payload = await verifyJWT(sessionDataCookie, ctx.context.secret);
				if (payload && payload.session && payload.user) sessionDataPayload = {
					session: {
						session: payload.session,
						user: payload.user,
						updatedAt: payload.updatedAt,
						version: payload.version
					},
					expiresAt: payload.exp ? payload.exp * 1e3 : Date.now()
				};
				else expireCookie(ctx, ctx.context.authCookies.sessionData);
			} else {
				const parsed = safeJSONParse(binary.decode(base64Url.decode(sessionDataCookie)));
				if (parsed) if (await createHMAC("SHA-256", "base64urlnopad").verify(ctx.context.secret, JSON.stringify({
					...parsed.session,
					expiresAt: parsed.expiresAt
				}), parsed.signature)) sessionDataPayload = parsed;
				else expireCookie(ctx, ctx.context.authCookies.sessionData);
			}
		}
		const dontRememberMe = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
		/**
		* If session data is present in the cookie, check if it should be used or refreshed
		*/
		if (sessionDataPayload?.session && ctx.context.options.session?.cookieCache?.enabled && !ctx.query?.disableCookieCache) {
			const session = sessionDataPayload.session;
			const versionConfig = ctx.context.options.session?.cookieCache?.version;
			let expectedVersion = "1";
			if (versionConfig) {
				if (typeof versionConfig === "string") expectedVersion = versionConfig;
				else if (typeof versionConfig === "function") {
					const result = versionConfig(session.session, session.user);
					expectedVersion = result instanceof Promise ? await result : result;
				}
			}
			if ((session.version || "1") !== expectedVersion) expireCookie(ctx, ctx.context.authCookies.sessionData);
			else {
				const cachedSessionExpiresAt = new Date(session.session.expiresAt);
				if (sessionDataPayload.expiresAt < Date.now() || cachedSessionExpiresAt < /* @__PURE__ */ new Date()) expireCookie(ctx, ctx.context.authCookies.sessionData);
				else {
					const cookieRefreshCache = ctx.context.sessionConfig.cookieRefreshCache;
					if (cookieRefreshCache === false) {
						ctx.context.session = session;
						const parsedSession = parseSessionOutput(ctx.context.options, {
							...session.session,
							expiresAt: new Date(session.session.expiresAt),
							createdAt: new Date(session.session.createdAt),
							updatedAt: new Date(session.session.updatedAt)
						});
						const parsedUser = parseUserOutput(ctx.context.options, {
							...session.user,
							createdAt: new Date(session.user.createdAt),
							updatedAt: new Date(session.user.updatedAt)
						});
						return ctx.json({
							session: parsedSession,
							user: parsedUser
						});
					}
					const timeUntilExpiry = sessionDataPayload.expiresAt - Date.now();
					const updateAge = cookieRefreshCache.updateAge * 1e3;
					const shouldSkipSessionRefresh = await getShouldSkipSessionRefresh();
					if (timeUntilExpiry < updateAge && !shouldSkipSessionRefresh) {
						const refreshedSession = {
							session: { ...session.session },
							user: session.user,
							updatedAt: Date.now()
						};
						await setCookieCache(ctx, refreshedSession, false);
						const sessionTokenOptions = ctx.context.authCookies.sessionToken.attributes;
						const sessionTokenMaxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
						await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
							...sessionTokenOptions,
							maxAge: sessionTokenMaxAge
						});
						const parsedRefreshedSession = parseSessionOutput(ctx.context.options, {
							...refreshedSession.session,
							expiresAt: new Date(refreshedSession.session.expiresAt),
							createdAt: new Date(refreshedSession.session.createdAt),
							updatedAt: new Date(refreshedSession.session.updatedAt)
						});
						const parsedRefreshedUser = parseUserOutput(ctx.context.options, {
							...refreshedSession.user,
							createdAt: new Date(refreshedSession.user.createdAt),
							updatedAt: new Date(refreshedSession.user.updatedAt)
						});
						ctx.context.session = {
							session: parsedRefreshedSession,
							user: parsedRefreshedUser
						};
						return ctx.json({
							session: parsedRefreshedSession,
							user: parsedRefreshedUser
						});
					}
					const parsedSession = parseSessionOutput(ctx.context.options, {
						...session.session,
						expiresAt: new Date(session.session.expiresAt),
						createdAt: new Date(session.session.createdAt),
						updatedAt: new Date(session.session.updatedAt)
					});
					const parsedUser = parseUserOutput(ctx.context.options, {
						...session.user,
						createdAt: new Date(session.user.createdAt),
						updatedAt: new Date(session.user.updatedAt)
					});
					ctx.context.session = {
						session: parsedSession,
						user: parsedUser
					};
					return ctx.json({
						session: parsedSession,
						user: parsedUser
					});
				}
			}
		}
		const session = await ctx.context.internalAdapter.findSession(sessionCookieToken);
		ctx.context.session = session;
		if (!session || session.session.expiresAt < /* @__PURE__ */ new Date()) {
			deleteSessionCookie(ctx);
			if (session) {
				/**
				* if session expired clean up the session
				* Only delete on POST when deferSessionRefresh is enabled
				*/
				if (!deferSessionRefresh || isPostRequest) await ctx.context.internalAdapter.deleteSession(session.session.token);
			}
			return ctx.json(null);
		}
		/**
		* We don't need to update the session if the user doesn't want to be remembered
		* or if the session refresh is disabled
		*/
		if (dontRememberMe || ctx.query?.disableRefresh) {
			const parsedSession = parseSessionOutput(ctx.context.options, session.session);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedSession,
				user: parsedUser
			});
		}
		const expiresIn = ctx.context.sessionConfig.expiresIn;
		const updateAge = ctx.context.sessionConfig.updateAge;
		const shouldBeUpdated = session.session.expiresAt.valueOf() - expiresIn * 1e3 + updateAge * 1e3 <= Date.now();
		const disableRefresh = ctx.query?.disableRefresh || ctx.context.options.session?.disableSessionRefresh;
		const shouldSkipSessionRefresh = await getShouldSkipSessionRefresh();
		const needsRefresh = shouldBeUpdated && !disableRefresh && !shouldSkipSessionRefresh;
		/**
		* When deferSessionRefresh is enabled and this is a GET request,
		* return the session without performing writes, but include needsRefresh flag
		*/
		if (deferSessionRefresh && !isPostRequest) {
			await setCookieCache(ctx, session, !!dontRememberMe);
			const parsedSession = parseSessionOutput(ctx.context.options, session.session);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedSession,
				user: parsedUser,
				needsRefresh
			});
		}
		if (needsRefresh) {
			const updatedSession = await ctx.context.internalAdapter.updateSession(session.session.token, {
				expiresAt: getDate(ctx.context.sessionConfig.expiresIn, "sec"),
				updatedAt: /* @__PURE__ */ new Date()
			});
			if (!updatedSession) {
				/**
				* Handle case where session update fails (e.g., concurrent deletion)
				*/
				deleteSessionCookie(ctx);
				throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
			}
			const maxAge = ctx.context.sessionConfig.expiresIn;
			await setSessionCookie(ctx, {
				session: updatedSession,
				user: session.user
			}, false, { maxAge });
			const parsedUpdatedSession = parseSessionOutput(ctx.context.options, updatedSession);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedUpdatedSession,
				user: parsedUser
			});
		}
		await setCookieCache(ctx, session, !!dontRememberMe);
		const parsedSession = parseSessionOutput(ctx.context.options, session.session);
		const parsedUser = parseUserOutput(ctx.context.options, session.user);
		return ctx.json({
			session: parsedSession,
			user: parsedUser
		});
	} catch (error) {
		if (isAPIError(error)) throw error;
		ctx.context.logger.error("INTERNAL_SERVER_ERROR", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
	}
});
/**
* Whether the deployment keeps sessions in a durable server-side store
* (a database or secondary storage) rather than only in the signed cookie.
*
* Sensitive operations use this to decide whether the cookie cache is merely an
* optimization that must be bypassed for an authoritative read (`true`), or the
* only place the session lives and therefore the authority itself (`false`, for
* stateless / DB-less deployments). Pass the result as `disableCookieCache` so a
* revoked-but-cached session cannot authorize a sensitive action.
*/
var isStateful = (ctx) => hasServerSessionStore(ctx.context.options);
var getSessionFromCtx = async (ctx, config) => {
	if (ctx.context.session) return ctx.context.session;
	const session = await getSession()({
		...ctx,
		method: "GET",
		asResponse: false,
		headers: ctx.headers,
		returnHeaders: true,
		returnStatus: false,
		query: {
			...config,
			...ctx.query,
			disableCookieCache: config?.disableCookieCache || ctx.query?.disableCookieCache,
			disableRefresh: config?.disableRefresh || ctx.query?.disableRefresh
		}
	}).catch(() => {
		return null;
	});
	if (!session) {
		ctx.context.session = null;
		return null;
	}
	if (session.headers) session.headers.forEach((value, key) => {
		const lowerKey = key.toLowerCase();
		if (lowerKey === "cache-control" || lowerKey === "pragma") return;
		if (lowerKey === "set-cookie") ctx.responseHeaders.append(key, value);
		else ctx.responseHeaders.set(key, value);
	});
	ctx.context.session = session.response;
	return session.response;
};
/**
* Reads the session from the source that can authorize sensitive work.
*
* Stateful deployments must re-read the server-side session store because an
* earlier hook may have populated `ctx.context.session` from cookie cache.
* Stateless deployments keep the signed cookie as the session record.
*/
var getAuthoritativeSessionFromCtx = async (ctx) => {
	if (!isStateful(ctx)) return getSessionFromCtx(ctx);
	ctx.context.session = null;
	return getSessionFromCtx(ctx, { disableCookieCache: true });
};
/**
* The middleware forces the endpoint to require a valid session.
*/
var sessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
/**
* This middleware forces the endpoint to require a valid authoritative session.
* This should be used for sensitive operations like password changes, account deletion, etc.
*/
var sensitiveSessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getAuthoritativeSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session && (ctx.request || ctx.headers)) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
/**
* This middleware forces the endpoint to require a valid session,
* as well as making sure the session is fresh before proceeding.
*
* Session freshness check will be skipped if the session config's freshAge
* is set to 0
*/
var freshSessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	if (ctx.context.sessionConfig.freshAge !== 0) {
		const createdAt = new Date(session.session.createdAt).getTime();
		const freshAge = ctx.context.sessionConfig.freshAge * 1e3;
		if (Date.now() - createdAt >= freshAge) throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.SESSION_NOT_FRESH);
	}
	return { session };
});
/**
* user active sessions list
*/
var listSessions = () => createAuthEndpoint("/list-sessions", {
	method: "GET",
	operationId: "listUserSessions",
	use: [freshSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "listUserSessions",
		description: "List all active sessions for the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "array",
				items: { $ref: "#/components/schemas/Session" }
			} } }
		} }
	} }
}, async (ctx) => {
	try {
		const activeSessions = (await ctx.context.internalAdapter.listSessions(ctx.context.session.user.id, { onlyActiveSessions: true })).filter((session) => {
			return session.expiresAt > /* @__PURE__ */ new Date();
		});
		return ctx.json(activeSessions.map((session) => parseSessionOutput(ctx.context.options, session)));
	} catch (e) {
		ctx.context.logger.error(e);
		throw ctx.error("INTERNAL_SERVER_ERROR");
	}
});
/**
* revoke a single session
*/
var revokeSession = createAuthEndpoint("/revoke-session", {
	method: "POST",
	body: object({ token: string().meta({ description: "The token to revoke" }) }),
	use: [sensitiveSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		description: "Revoke a single session",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: { token: {
				type: "string",
				description: "The token to revoke"
			} },
			required: ["token"]
		} } } },
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if the session was revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	const token = ctx.body.token;
	if ((await ctx.context.internalAdapter.findSession(token))?.session.userId === ctx.context.session.user.id) try {
		await ctx.context.internalAdapter.deleteSession(token);
	} catch (error) {
		ctx.context.logger.error(error && typeof error === "object" && "name" in error ? error.name : "", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", {
			message: "Internal Server Error",
			code: "INTERNAL_SERVER_ERROR"
		});
	}
	return ctx.json({ status: true });
});
/**
* revoke all user sessions
*/
var revokeSessions = createAuthEndpoint("/revoke-sessions", {
	method: "POST",
	use: [sensitiveSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		description: "Revoke all sessions for the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if all sessions were revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	try {
		await ctx.context.internalAdapter.deleteUserSessions(ctx.context.session.user.id);
	} catch (error) {
		ctx.context.logger.error(error && typeof error === "object" && "name" in error ? error.name : "", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", {
			message: "Internal Server Error",
			code: "INTERNAL_SERVER_ERROR"
		});
	}
	return ctx.json({ status: true });
});
var revokeOtherSessions = createAuthEndpoint("/revoke-other-sessions", {
	method: "POST",
	requireHeaders: true,
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		description: "Revoke all other sessions for the user except the current one",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if all other sessions were revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!session.user) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	const otherSessions = (await ctx.context.internalAdapter.listSessions(session.user.id)).filter((session) => {
		return session.expiresAt > /* @__PURE__ */ new Date();
	}).filter((session) => session.token !== ctx.context.session.session.token);
	await Promise.all(otherSessions.map((session) => ctx.context.internalAdapter.deleteSession(session.token)));
	return ctx.json({ status: true });
});
var defaultKeyHasher = async (identifier) => {
	const hash = await createHash("SHA-256").digest(new TextEncoder().encode(identifier));
	return base64Url.encode(new Uint8Array(hash), { padding: false });
};
async function processIdentifier(identifier, option) {
	if (!option || option === "plain") return identifier;
	if (option === "hashed") return defaultKeyHasher(identifier);
	if (typeof option === "object" && "hash" in option) return option.hash(identifier);
	return identifier;
}
function getStorageOption(identifier, config) {
	if (!config) return;
	if (typeof config === "object" && "default" in config) {
		if (config.overrides) {
			for (const [prefix, option] of Object.entries(config.overrides)) if (identifier.startsWith(prefix)) return option;
		}
		return config.default;
	}
	return config;
}
function getWithHooks(adapter, ctx) {
	const hooksEntries = ctx.hooks;
	async function createWithHooks(data, model, customCreateFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let actualData = data;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.create?.before;
			if (toRun) {
				const result = await withSpan(`db create.before ${model}`, {
					[ATTR_HOOK_TYPE]: "create.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(actualData, context));
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		let created = null;
		if (!customCreateFn || customCreateFn.executeMainFn) created = await (await getCurrentAdapter(adapter)).create({
			model,
			data: actualData,
			forceAllowId: true
		});
		if (customCreateFn?.fn) created = await customCreateFn.fn(created ?? actualData);
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.create?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db create.after ${model}`, {
					[ATTR_HOOK_TYPE]: "create.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(created, context));
			});
		}
		return created;
	}
	async function updateWithHooks(data, where, model, customUpdateFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let actualData = data;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.before;
			if (toRun) {
				const result = await withSpan(`db update.before ${model}`, {
					[ATTR_HOOK_TYPE]: "update.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(data, context));
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
		const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await getCurrentAdapter(adapter)).update({
			model,
			update: actualData,
			where
		}) : customUpdated;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db update.after ${model}`, {
					[ATTR_HOOK_TYPE]: "update.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(updated, context));
			});
		}
		return updated;
	}
	async function updateManyWithHooks(data, where, model, customUpdateFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let actualData = data;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.before;
			if (toRun) {
				const result = await withSpan(`db updateMany.before ${model}`, {
					[ATTR_HOOK_TYPE]: "updateMany.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(data, context));
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
		const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await getCurrentAdapter(adapter)).updateMany({
			model,
			update: actualData,
			where
		}) : customUpdated;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db updateMany.after ${model}`, {
					[ATTR_HOOK_TYPE]: "updateMany.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(updated, context));
			});
		}
		return updated;
	}
	async function deleteWithHooks(where, model, customDeleteFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let entityToDelete = null;
		try {
			entityToDelete = (await (await getCurrentAdapter(adapter)).findMany({
				model,
				where,
				limit: 1
			}))[0] || null;
		} catch {}
		if (entityToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.before;
			if (toRun) {
				if (await withSpan(`db delete.before ${model}`, {
					["better_auth.hook.type"]: "delete.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					["better_auth.context"]: source
				}, () => toRun(entityToDelete, context)) === false) return null;
			}
		}
		const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
		const deleted = (!customDeleteFn || customDeleteFn.executeMainFn) && entityToDelete ? await (await getCurrentAdapter(adapter)).delete({
			model,
			where
		}) : customDeleted;
		if (entityToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db delete.after ${model}`, {
					[ATTR_HOOK_TYPE]: "delete.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(entityToDelete, context));
			});
		}
		return deleted;
	}
	async function deleteManyWithHooks(where, model, customDeleteFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let entitiesToDelete = [];
		try {
			entitiesToDelete = await (await getCurrentAdapter(adapter)).findMany({
				model,
				where
			});
		} catch {}
		for (const entity of entitiesToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.before;
			if (toRun) {
				if (await withSpan(`db delete.before ${model}`, {
					["better_auth.hook.type"]: "delete.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					["better_auth.context"]: source
				}, () => toRun(entity, context)) === false) return null;
			}
		}
		const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
		const deleted = !customDeleteFn || customDeleteFn.executeMainFn ? await (await getCurrentAdapter(adapter)).deleteMany({
			model,
			where
		}) : customDeleted;
		for (const entity of entitiesToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db delete.after ${model}`, {
					[ATTR_HOOK_TYPE]: "delete.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(entity, context));
			});
		}
		return deleted;
	}
	/**
	* Wraps an atomic consume operation in the plugin `delete.before` and
	* `delete.after` hook lifecycle. The caller supplies a `consumeFn` that
	* performs the actual single-row delete-and-return (typically the
	* adapter's `consumeOne`). The first concurrent caller wins, subsequent
	* racers resolve to `null` without firing `delete.after` hooks.
	*
	* `preSnapshot` lets the caller hand in a row it already fetched so
	* `delete.before` hooks don't trigger a second read. Without it, the
	* helper falls back to a best-effort `findMany` against `hookWhere`.
	* The snapshot only feeds `delete.before`; the `consumeFn` return value
	* is the race gate.
	*
	* Returning `false` from a `delete.before` hook aborts the consume and
	* the helper resolves to `null` (no `consumeFn` call, no after hooks).
	*/
	async function consumeOneWithHooks(model, hookWhere, consumeFn, preSnapshot) {
		const context = await getCurrentAuthContext().catch(() => null);
		const beforeHooks = hooksEntries.flatMap(({ source, hooks }) => {
			const fn = hooks[model]?.delete?.before;
			return fn ? [{
				source,
				fn
			}] : [];
		});
		let snapshot = preSnapshot ?? null;
		if (beforeHooks.length) {
			if (!snapshot) try {
				snapshot = (await (await getCurrentAdapter(adapter)).findMany({
					model,
					where: hookWhere,
					limit: 1
				}))[0] || null;
			} catch {}
			if (snapshot) {
				for (const { source, fn } of beforeHooks) if (await withSpan(`db delete.before ${model}`, {
					["better_auth.hook.type"]: "delete.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					["better_auth.context"]: source
				}, () => fn(snapshot, context)) === false) return null;
			}
		}
		const consumed = await consumeFn();
		if (!consumed) return null;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db delete.after ${model}`, {
					[ATTR_HOOK_TYPE]: "delete.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(consumed, context));
			});
		}
		return consumed;
	}
	return {
		createWithHooks,
		updateWithHooks,
		updateManyWithHooks,
		deleteWithHooks,
		deleteManyWithHooks,
		consumeOneWithHooks
	};
}
function getTTLSeconds(expiresAt, now = Date.now()) {
	const expiresMs = typeof expiresAt === "number" ? expiresAt : expiresAt.getTime();
	return Math.max(Math.floor((expiresMs - now) / 1e3), 0);
}
var createInternalAdapter = (adapter, ctx) => {
	const logger = ctx.logger;
	const options = ctx.options;
	const secondaryStorage = options.secondaryStorage;
	const databaseStoresSessions = !secondaryStorage || options.session?.storeSessionInDatabase === true;
	const preservesDatabaseSessions = secondaryStorage !== void 0 && options.session?.preserveSessionInDatabase === true;
	const verificationConsumeLocks = /* @__PURE__ */ new Map();
	let warnedNonAtomicConsume = false;
	const sessionExpiration = options.session?.expiresIn || 604800;
	const { createWithHooks, updateWithHooks, updateManyWithHooks, deleteWithHooks, deleteManyWithHooks, consumeOneWithHooks } = getWithHooks(adapter, ctx);
	async function refreshUserSessions(user) {
		if (!secondaryStorage) return;
		const listRaw = await secondaryStorage.get(`active-sessions-${user.id}`);
		if (!listRaw) return;
		const now = Date.now();
		const validSessions = (safeJSONParse(listRaw) || []).filter((s) => s.expiresAt > now);
		await Promise.all(validSessions.map(async ({ token }) => {
			const cached = await secondaryStorage.get(token);
			if (!cached) return;
			const parsed = safeJSONParse(cached);
			if (!parsed) return;
			const sessionTTL = getTTLSeconds(parsed.session.expiresAt, now);
			await secondaryStorage.set(token, JSON.stringify({
				session: parsed.session,
				user
			}), Math.floor(sessionTTL));
		}));
	}
	async function withVerificationConsumeLock(key, fn) {
		const previous = verificationConsumeLocks.get(key) ?? Promise.resolve();
		let release;
		const current = new Promise((resolve) => {
			release = resolve;
		});
		const next = previous.catch(() => {}).then(() => current);
		verificationConsumeLocks.set(key, next);
		await previous.catch(() => {});
		try {
			return await fn();
		} finally {
			release();
			if (verificationConsumeLocks.get(key) === next) verificationConsumeLocks.delete(key);
		}
	}
	const deleteSecondaryStorageSessions = async (userId) => {
		if (!secondaryStorage) return;
		const activeSession = await secondaryStorage.get(`active-sessions-${userId}`);
		const sessions = activeSession ? safeJSONParse(activeSession) : [];
		if (!sessions) return;
		for (const session of sessions) await secondaryStorage.delete(session.token);
		await secondaryStorage.delete(`active-sessions-${userId}`);
	};
	const deleteDatabaseSessions = async (userId) => {
		await deleteManyWithHooks([{
			field: "userId",
			value: userId
		}], "session", void 0);
	};
	return {
		createOAuthUser: async (user, account) => {
			return runWithTransaction(adapter, async () => {
				const createdUser = await createWithHooks({
					createdAt: /* @__PURE__ */ new Date(),
					updatedAt: /* @__PURE__ */ new Date(),
					...user,
					email: user.email?.toLowerCase()
				}, "user", void 0);
				return {
					user: createdUser,
					account: await createWithHooks({
						...account,
						userId: createdUser.id,
						createdAt: /* @__PURE__ */ new Date(),
						updatedAt: /* @__PURE__ */ new Date()
					}, "account", void 0)
				};
			});
		},
		createUser: async (user) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...user,
				email: user.email?.toLowerCase()
			}, "user", void 0);
		},
		createAccount: async (account) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...account
			}, "account", void 0);
		},
		listSessions: async (userId, options) => {
			if (secondaryStorage) {
				const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
				if (!currentList) return [];
				const list = safeJSONParse(currentList) || [];
				const now = Date.now();
				const seenTokens = /* @__PURE__ */ new Set();
				const sessions = [];
				for (const { token, expiresAt } of list) {
					if (expiresAt <= now || seenTokens.has(token)) continue;
					seenTokens.add(token);
					const data = await secondaryStorage.get(token);
					if (!data) continue;
					try {
						const parsed = typeof data === "string" ? JSON.parse(data) : data;
						if (!parsed?.session) continue;
						sessions.push(parseSessionOutput(ctx.options, {
							...parsed.session,
							expiresAt: new Date(parsed.session.expiresAt)
						}));
					} catch {
						continue;
					}
				}
				return sessions;
			}
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "session",
				where: [{
					field: "userId",
					value: userId
				}, ...options?.onlyActiveSessions ? [{
					field: "expiresAt",
					value: /* @__PURE__ */ new Date(),
					operator: "gt"
				}] : []]
			});
		},
		listUsers: async (limit, offset, sortBy, where) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "user",
				limit,
				offset,
				sortBy,
				where
			});
		},
		countTotalUsers: async (where) => {
			const total = await (await getCurrentAdapter(adapter)).count({
				model: "user",
				where
			});
			if (typeof total === "string") return parseInt(total);
			return total;
		},
		deleteUser: async (userId) => {
			await deleteSecondaryStorageSessions(userId);
			if (databaseStoresSessions) await deleteDatabaseSessions(userId);
			await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "account", void 0);
			await deleteWithHooks([{
				field: "id",
				value: userId
			}], "user", void 0);
		},
		createSession: async (userId, dontRememberMe, override, overrideAll) => {
			const headers = await (async () => {
				const ctx = await getCurrentAuthContext().catch(() => null);
				return ctx?.headers || ctx?.request?.headers;
			})();
			const storeInDb = options.session?.storeSessionInDatabase;
			const { id: _, ...rest } = override || {};
			let sessionId;
			if (secondaryStorage && !storeInDb) {
				const generatedId = ctx.generateId({ model: "session" });
				sessionId = generatedId !== false ? generatedId : generateId();
			}
			const defaultAdditionalFields = getSessionDefaultFields(options);
			const data = {
				...sessionId ? { id: sessionId } : {},
				ipAddress: headers ? getIp(headers, options) || "" : "",
				userAgent: headers?.get("user-agent") || "",
				...rest,
				/**
				* If the user doesn't want to be remembered
				* set the session to expire in 1 day.
				* The cookie will be set to expire at the end of the session
				*/
				expiresAt: dontRememberMe ? getDate(86400, "sec") : getDate(sessionExpiration, "sec"),
				userId,
				token: generateId(32),
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...defaultAdditionalFields,
				...overrideAll ? rest : {}
			};
			return await createWithHooks(data, "session", secondaryStorage ? {
				fn: async (sessionData) => {
					/**
					* store the session token for the user
					* so we can retrieve it later for listing sessions
					*/
					const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
					let list = [];
					const now = Date.now();
					if (currentList) {
						list = safeJSONParse(currentList) || [];
						list = list.filter((session) => session.expiresAt > now && session.token !== data.token);
					}
					const sorted = [...list, {
						token: data.token,
						expiresAt: data.expiresAt.getTime()
					}].sort((a, b) => a.expiresAt - b.expiresAt);
					const furthestSessionTTL = getTTLSeconds(sorted.at(-1)?.expiresAt ?? data.expiresAt.getTime(), now);
					if (furthestSessionTTL > 0) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(sorted), furthestSessionTTL);
					const user = await (await getCurrentAdapter(adapter)).findOne({
						model: "user",
						where: [{
							field: "id",
							value: userId
						}]
					});
					const sessionTTL = getTTLSeconds(data.expiresAt, now);
					if (sessionTTL > 0) await secondaryStorage.set(data.token, JSON.stringify({
						session: sessionData,
						user
					}), sessionTTL);
					return sessionData;
				},
				executeMainFn: storeInDb
			} : void 0);
		},
		findSession: async (token) => {
			if (secondaryStorage) {
				const sessionStringified = await secondaryStorage.get(token);
				if (!sessionStringified && (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase)) return null;
				if (sessionStringified) {
					const s = safeJSONParse(sessionStringified);
					if (!s) return null;
					return {
						session: parseSessionOutput(ctx.options, {
							...s.session,
							expiresAt: new Date(s.session.expiresAt),
							createdAt: new Date(s.session.createdAt),
							updatedAt: new Date(s.session.updatedAt)
						}),
						user: parseUserOutput(ctx.options, {
							...s.user,
							createdAt: new Date(s.user.createdAt),
							updatedAt: new Date(s.user.updatedAt)
						})
					};
				}
			}
			const result = await (await getCurrentAdapter(adapter)).findOne({
				model: "session",
				where: [{
					value: token,
					field: "token"
				}],
				join: { user: true }
			});
			if (!result) return null;
			const { user, ...session } = result;
			if (!user) return null;
			return {
				session: parseSessionOutput(ctx.options, session),
				user: parseUserOutput(ctx.options, user)
			};
		},
		findSessions: async (sessionTokens, options) => {
			if (secondaryStorage) {
				const sessions = [];
				for (const sessionToken of sessionTokens) {
					const sessionStringified = await secondaryStorage.get(sessionToken);
					if (sessionStringified) try {
						const s = typeof sessionStringified === "string" ? JSON.parse(sessionStringified) : sessionStringified;
						if (!s) continue;
						const expiresAt = new Date(s.session.expiresAt);
						if (options?.onlyActiveSessions && expiresAt <= /* @__PURE__ */ new Date()) continue;
						const session = {
							session: {
								...s.session,
								expiresAt: new Date(s.session.expiresAt)
							},
							user: {
								...s.user,
								createdAt: new Date(s.user.createdAt),
								updatedAt: new Date(s.user.updatedAt)
							}
						};
						sessions.push(session);
					} catch {
						continue;
					}
				}
				return sessions;
			}
			const sessions = await (await getCurrentAdapter(adapter)).findMany({
				model: "session",
				where: [{
					field: "token",
					value: sessionTokens,
					operator: "in"
				}, ...options?.onlyActiveSessions ? [{
					field: "expiresAt",
					value: /* @__PURE__ */ new Date(),
					operator: "gt"
				}] : []],
				join: { user: true }
			});
			if (!sessions.length) return [];
			if (sessions.some((session) => !session.user)) return [];
			return sessions.map((_session) => {
				const { user, ...session } = _session;
				return {
					session,
					user
				};
			});
		},
		updateSession: async (sessionToken, session) => {
			return await updateWithHooks(session, [{
				field: "token",
				value: sessionToken
			}], "session", secondaryStorage ? {
				async fn(data) {
					const currentSession = await secondaryStorage.get(sessionToken);
					if (!currentSession) return null;
					const parsedSession = safeJSONParse(currentSession);
					if (!parsedSession) return null;
					const mergedSession = {
						...parsedSession.session,
						...data,
						expiresAt: new Date(data.expiresAt ?? parsedSession.session.expiresAt),
						createdAt: new Date(parsedSession.session.createdAt),
						updatedAt: new Date(data.updatedAt ?? parsedSession.session.updatedAt)
					};
					const updatedSession = parseSessionOutput(ctx.options, mergedSession);
					const now = Date.now();
					const expiresMs = new Date(updatedSession.expiresAt).getTime();
					const sessionTTL = getTTLSeconds(expiresMs, now);
					if (sessionTTL > 0) {
						await secondaryStorage.set(sessionToken, JSON.stringify({
							session: updatedSession,
							user: parsedSession.user
						}), sessionTTL);
						const listKey = `active-sessions-${updatedSession.userId}`;
						const listRaw = await secondaryStorage.get(listKey);
						const sorted = (listRaw ? safeJSONParse(listRaw) || [] : []).filter((s) => s.token !== sessionToken && s.expiresAt > now).concat([{
							token: sessionToken,
							expiresAt: expiresMs
						}]).sort((a, b) => a.expiresAt - b.expiresAt);
						const furthestSessionExp = sorted.at(-1)?.expiresAt;
						if (furthestSessionExp && furthestSessionExp > now) await secondaryStorage.set(listKey, JSON.stringify(sorted), getTTLSeconds(furthestSessionExp, now));
						else await secondaryStorage.delete(listKey);
					}
					return updatedSession;
				},
				executeMainFn: options.session?.storeSessionInDatabase
			} : void 0);
		},
		deleteSession: async (token) => {
			if (secondaryStorage) {
				const data = await secondaryStorage.get(token);
				if (data) {
					const { session } = safeJSONParse(data) ?? {};
					if (!session) {
						logger.error("Session not found in secondary storage");
						return;
					}
					const userId = session.userId;
					const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
					if (currentList) {
						const list = safeJSONParse(currentList) || [];
						const now = Date.now();
						const filtered = list.filter((session) => session.expiresAt > now && session.token !== token);
						const furthestSessionExp = filtered.sort((a, b) => a.expiresAt - b.expiresAt).at(-1)?.expiresAt;
						if (filtered.length > 0 && furthestSessionExp && furthestSessionExp > Date.now()) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(filtered), getTTLSeconds(furthestSessionExp, now));
						else await secondaryStorage.delete(`active-sessions-${userId}`);
					} else logger.error("Active sessions list not found in secondary storage");
				}
				await secondaryStorage.delete(token);
			}
			if (databaseStoresSessions && !preservesDatabaseSessions) await deleteWithHooks([{
				field: "token",
				value: token
			}], "session", void 0);
		},
		deleteAccounts: async (userId) => {
			await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "account", void 0);
		},
		/**
		* Delete an account by its primary key.
		*
		* @param id - The account row's primary key (the `id` column, not the `accountId` column).
		*/
		deleteAccount: async (id) => {
			await deleteWithHooks([{
				field: "id",
				value: id
			}], "account", void 0);
		},
		deleteUserSessions: async (userId) => {
			await deleteSecondaryStorageSessions(userId);
			if (databaseStoresSessions && !preservesDatabaseSessions) await deleteDatabaseSessions(userId);
		},
		deleteSessions: async (sessionTokens) => {
			if (secondaryStorage) {
				for (const sessionToken of sessionTokens) if (await secondaryStorage.get(sessionToken)) await secondaryStorage.delete(sessionToken);
			}
			if (databaseStoresSessions && !preservesDatabaseSessions) await deleteManyWithHooks([{
				field: "token",
				value: sessionTokens,
				operator: "in"
			}], "session", void 0);
		},
		findOAuthUser: async (email, accountId, providerId) => {
			const account = await (await getCurrentAdapter(adapter)).findOne({
				model: "account",
				where: [{
					value: accountId,
					field: "accountId"
				}, {
					value: providerId,
					field: "providerId"
				}],
				join: { user: true }
			});
			if (account) if (account.user) return {
				user: account.user,
				linkedAccount: account,
				accounts: [account]
			};
			else {
				const user = await (await getCurrentAdapter(adapter)).findOne({
					model: "user",
					where: [{
						value: email.toLowerCase(),
						field: "email"
					}]
				});
				if (user) return {
					user,
					linkedAccount: account,
					accounts: [account]
				};
				return null;
			}
			else {
				const user = await (await getCurrentAdapter(adapter)).findOne({
					model: "user",
					where: [{
						value: email.toLowerCase(),
						field: "email"
					}]
				});
				if (user) return {
					user,
					linkedAccount: null,
					accounts: await (await getCurrentAdapter(adapter)).findMany({
						model: "account",
						where: [{
							value: user.id,
							field: "userId"
						}]
					}) || []
				};
				else return null;
			}
		},
		findUserByEmail: async (email, options) => {
			const result = await (await getCurrentAdapter(adapter)).findOne({
				model: "user",
				where: [{
					value: email.toLowerCase(),
					field: "email"
				}],
				join: { ...options?.includeAccounts ? { account: true } : {} }
			});
			if (!result) return null;
			const { account: accounts, ...user } = result;
			return {
				user,
				accounts: accounts ?? []
			};
		},
		findUserById: async (userId) => {
			if (!userId) return null;
			return await (await getCurrentAdapter(adapter)).findOne({
				model: "user",
				where: [{
					field: "id",
					value: userId
				}]
			});
		},
		linkAccount: async (account) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...account
			}, "account", void 0);
		},
		updateUser: async (userId, data) => {
			const user = await updateWithHooks({
				...data,
				...data.email ? { email: data.email.toLowerCase() } : {}
			}, [{
				field: "id",
				value: userId
			}], "user", void 0);
			await refreshUserSessions(user);
			return user;
		},
		updateUserByEmail: async (email, data) => {
			const user = await updateWithHooks({
				...data,
				...data.email ? { email: data.email.toLowerCase() } : {}
			}, [{
				field: "email",
				value: email.toLowerCase()
			}], "user", void 0);
			await refreshUserSessions(user);
			return user;
		},
		updatePassword: async (userId, password) => {
			await updateManyWithHooks({ password }, [{
				field: "userId",
				value: userId
			}, {
				field: "providerId",
				value: "credential"
			}], "account", void 0);
		},
		findAccounts: async (userId) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "account",
				where: [{
					field: "userId",
					value: userId
				}]
			});
		},
		findAccountByProviderId: async (accountId, providerId) => {
			return await (await getCurrentAdapter(adapter)).findOne({
				model: "account",
				where: [{
					field: "accountId",
					value: accountId
				}, {
					field: "providerId",
					value: providerId
				}]
			});
		},
		findAccountByUserId: async (userId) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "account",
				where: [{
					field: "userId",
					value: userId
				}]
			});
		},
		updateAccount: async (id, data) => {
			return await updateWithHooks(data, [{
				field: "id",
				value: id
			}], "account", void 0);
		},
		createVerificationValue: async (data) => {
			const storageOption = getStorageOption(data.identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(data.identifier, storageOption);
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...data,
				identifier: storedIdentifier
			}, "verification", secondaryStorage ? {
				async fn(verificationData) {
					const ttl = getTTLSeconds(verificationData.expiresAt);
					if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify(verificationData), ttl);
					return verificationData;
				},
				executeMainFn: options.verification?.storeInDatabase
			} : void 0);
		},
		findVerificationValue: async (identifier) => {
			const storageOption = getStorageOption(identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(identifier, storageOption);
			if (secondaryStorage) {
				const cached = await secondaryStorage.get(`verification:${storedIdentifier}`);
				if (cached) {
					const parsed = safeJSONParse(cached);
					if (parsed) return parsed;
				}
				if (storageOption && storageOption !== "plain") {
					const plainCached = await secondaryStorage.get(`verification:${identifier}`);
					if (plainCached) {
						const parsed = safeJSONParse(plainCached);
						if (parsed) return parsed;
					}
				}
				if (!options.verification?.storeInDatabase) return null;
			}
			const currentAdapter = await getCurrentAdapter(adapter);
			async function findByIdentifier(id) {
				return currentAdapter.findMany({
					model: "verification",
					where: [{
						field: "identifier",
						value: id
					}],
					sortBy: {
						field: "createdAt",
						direction: "desc"
					},
					limit: 1
				});
			}
			let verification = await findByIdentifier(storedIdentifier);
			if (!verification.length && storageOption && storageOption !== "plain") verification = await findByIdentifier(identifier);
			if (!options.verification?.disableCleanup) await deleteManyWithHooks([{
				field: "expiresAt",
				value: /* @__PURE__ */ new Date(),
				operator: "lt"
			}], "verification", void 0);
			return verification[0] || null;
		},
		deleteVerificationByIdentifier: async (identifier) => {
			const storedIdentifier = await processIdentifier(identifier, getStorageOption(identifier, options.verification?.storeIdentifier));
			if (secondaryStorage) await secondaryStorage.delete(`verification:${storedIdentifier}`);
			if (!secondaryStorage || options.verification?.storeInDatabase) await deleteWithHooks([{
				field: "identifier",
				value: storedIdentifier
			}], "verification", void 0);
		},
		/**
		* Atomically consume a single-use verification row by `identifier` and
		* return it. The first concurrent caller receives the latest row for the
		* identifier; every other caller racing against it receives `null`.
		*
		* Race-safe replacement for the `findVerificationValue` then
		* `deleteVerificationByIdentifier` pair. Callers MUST gate any state
		* change (issue session, mint token, change password) on a non-null
		* return value, because consuming one row invalidates the whole
		* identifier and stale rows cannot be replayed.
		*
		* Rows past their `expiresAt` are treated as already invalid: the row
		* is still deleted (so it cannot be replayed later) but `null` is
		* returned. Callers do not need their own `expiresAt` gate.
		*
		* The secondary-storage-only path (`storeInDatabase: false`) is atomic
		* only when the configured storage implements `getAndDelete`; otherwise
		* it falls back to an in-process lock around `get` then `delete` and
		* warns once, since that fallback cannot coordinate across processes.
		*
		* FIXME(consume-atomic): make `SecondaryStorage.getAndDelete` required
		* in the next breaking release, or require database-backed verification
		* storage for security-sensitive consume paths, so the non-atomic
		* fallback can be removed entirely.
		*/
		consumeVerificationValue: async (identifier) => {
			const storageOption = getStorageOption(identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(identifier, storageOption);
			const identifiersToTry = storageOption && storageOption !== "plain" ? [storedIdentifier, identifier] : [storedIdentifier];
			const hydrateCachedVerification = (raw) => {
				if (!raw) return null;
				const candidate = typeof raw === "string" ? safeJSONParse(raw) : typeof raw === "object" ? raw : null;
				if (!candidate) return null;
				const expiresAt = new Date(candidate.expiresAt);
				if (!Number.isFinite(expiresAt.getTime())) return null;
				return {
					...candidate,
					expiresAt
				};
			};
			let consumed = null;
			if (secondaryStorage && !options.verification?.storeInDatabase) {
				const consumeCacheKey = async (key) => {
					if (secondaryStorage.getAndDelete) return hydrateCachedVerification(await secondaryStorage.getAndDelete(key));
					if (!warnedNonAtomicConsume) {
						warnedNonAtomicConsume = true;
						logger.warn("Secondary storage does not implement `getAndDelete`, so single-use verification values cannot be consumed atomically across processes. Implement `getAndDelete` or use database-backed verification storage to guarantee single use.");
					}
					return withVerificationConsumeLock(key, async () => {
						const raw = await secondaryStorage.get(key);
						const parsed = hydrateCachedVerification(raw);
						if (!parsed) return null;
						await secondaryStorage.delete(key);
						return parsed;
					});
				};
				for (const stored of identifiersToTry) {
					const cached = await consumeCacheKey(`verification:${stored}`);
					if (!cached) continue;
					await Promise.all(identifiersToTry.filter((candidate) => candidate !== stored).map((candidate) => secondaryStorage.delete(`verification:${candidate}`)));
					consumed = cached;
					break;
				}
			} else {
				const consumeByIdentifier = async (id) => withVerificationConsumeLock(`verification:${id}`, () => runWithTransaction(adapter, async () => {
					const txAdapter = await getCurrentAdapter(adapter);
					const where = [{
						field: "identifier",
						value: id
					}];
					const latest = (await txAdapter.findMany({
						model: "verification",
						where,
						sortBy: {
							field: "createdAt",
							direction: "desc"
						},
						limit: 1
					}))[0] ?? null;
					if (!latest) return null;
					return consumeOneWithHooks("verification", [{
						field: "id",
						value: latest.id
					}], async () => {
						const row = await txAdapter.consumeOne({
							model: "verification",
							where: [{
								field: "id",
								value: latest.id
							}]
						});
						if (!row) return null;
						await txAdapter.deleteMany({
							model: "verification",
							where
						});
						return row;
					}, latest);
				}));
				for (const stored of identifiersToTry) {
					consumed = await consumeByIdentifier(stored);
					if (consumed) break;
				}
				if (consumed && secondaryStorage) await Promise.all(identifiersToTry.map((stored) => secondaryStorage.delete(`verification:${stored}`)));
			}
			if (!consumed || consumed.expiresAt < /* @__PURE__ */ new Date()) return null;
			return consumed;
		},
		/**
		* First-writer-wins create keyed by a deterministic primary key derived
		* from `identifier`. Returns `true` when this caller created the row and
		* `false` when a row for the same identifier already existed.
		*
		* The dual of `consumeVerificationValue`: where consume races to delete a
		* marker exactly once, reserve races to create a marker exactly once. Use
		* it for replay tombstones (a SAML assertion id, a JWT `jti`) where the
		* first caller wins and every later caller must observe that the marker is
		* already taken.
		*
		* The `verification.identifier` column is non-unique, so uniqueness comes
		* from a deterministic primary key (`SHA-256` of `reserve:<identifier>`).
		* The database path is atomic: the primary key turns the INSERT into the
		* first-writer-wins gate, and a duplicate is detected portably by
		* re-reading the row rather than matching adapter-specific errors. The
		* secondary-storage-only path has no primary key to enforce uniqueness, so
		* it is best-effort under concurrency.
		*
		* The atomic guarantee requires the configured adapter to reject a
		* duplicate primary key on insert, which every real database enforces. The
		* in-memory adapter does not enforce primary-key uniqueness, so reservation
		* is best-effort there (it is intended for development and tests).
		*/
		reserveVerificationValue: async (data) => {
			const reservationId = base64Url.encode(new Uint8Array(await createHash("SHA-256").digest(new TextEncoder().encode("reserve:" + data.identifier))), { padding: false });
			const storageOption = getStorageOption(data.identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(data.identifier, storageOption);
			if (secondaryStorage && !options.verification?.storeInDatabase) {
				const cacheKey = `verification:${storedIdentifier}`;
				if (await secondaryStorage.get(cacheKey)) return false;
				await secondaryStorage.set(cacheKey, JSON.stringify({
					id: reservationId,
					identifier: storedIdentifier,
					value: data.value,
					expiresAt: data.expiresAt
				}), getTTLSeconds(data.expiresAt));
				return true;
			}
			try {
				await adapter.create({
					model: "verification",
					data: {
						id: reservationId,
						identifier: storedIdentifier,
						value: data.value,
						expiresAt: data.expiresAt,
						createdAt: /* @__PURE__ */ new Date(),
						updatedAt: /* @__PURE__ */ new Date()
					},
					forceAllowId: true
				});
			} catch (error) {
				if (await adapter.findOne({
					model: "verification",
					where: [{
						field: "id",
						value: reservationId
					}]
				})) return false;
				throw error;
			}
			if (secondaryStorage) {
				const ttl = getTTLSeconds(data.expiresAt);
				if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify({
					id: reservationId,
					identifier: storedIdentifier,
					value: data.value,
					expiresAt: data.expiresAt
				}), ttl);
			}
			return true;
		},
		updateVerificationByIdentifier: async (identifier, data) => {
			const storedIdentifier = await processIdentifier(identifier, getStorageOption(identifier, options.verification?.storeIdentifier));
			if (secondaryStorage) {
				const cached = await secondaryStorage.get(`verification:${storedIdentifier}`);
				if (cached) {
					const parsed = safeJSONParse(cached);
					if (parsed) {
						const updated = {
							...parsed,
							...data
						};
						const expiresAt = updated.expiresAt ?? parsed.expiresAt;
						const ttl = getTTLSeconds(expiresAt instanceof Date ? expiresAt : new Date(expiresAt));
						if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify(updated), ttl);
						if (!options.verification?.storeInDatabase) return updated;
					}
				}
			}
			if (!secondaryStorage || options.verification?.storeInDatabase) return await updateWithHooks(data, [{
				field: "identifier",
				value: storedIdentifier
			}], "verification", void 0);
			return data;
		},
		refreshUserSessions
	};
};
async function runPluginInit(context) {
	let options = context.options;
	const plugins = options.plugins || [];
	const pluginTrustedOrigins = [];
	const dbHooks = [];
	for (const plugin of plugins) if (plugin.init) {
		const initPromise = plugin.init(context);
		let result;
		if (isPromise(initPromise)) result = await initPromise;
		else result = initPromise;
		if (typeof result === "object") {
			if (result.options) {
				const { databaseHooks, trustedOrigins, ...restOpts } = result.options;
				if (databaseHooks) dbHooks.push({
					source: `plugin:${plugin.id}`,
					hooks: databaseHooks
				});
				if (trustedOrigins) pluginTrustedOrigins.push(trustedOrigins);
				options = defu(options, restOpts);
			}
			if (result.context) Object.assign(context, result.context);
		}
	}
	if (pluginTrustedOrigins.length > 0) {
		const allSources = [...options.trustedOrigins ? [options.trustedOrigins] : [], ...pluginTrustedOrigins];
		const staticOrigins = allSources.filter(Array.isArray).flat();
		const dynamicOrigins = allSources.filter((s) => typeof s === "function");
		if (dynamicOrigins.length > 0) options.trustedOrigins = async (request) => {
			const resolved = await Promise.all(dynamicOrigins.map((fn) => fn(request)));
			return [...staticOrigins, ...resolved.flat()].filter((v) => typeof v === "string" && v !== "");
		};
		else options.trustedOrigins = staticOrigins;
	}
	if (options.databaseHooks) dbHooks.push({
		source: "user",
		hooks: options.databaseHooks
	});
	context.internalAdapter = createInternalAdapter(context.adapter, {
		options,
		logger: context.logger,
		hooks: dbHooks,
		generateId: context.generateId
	});
	context.options = options;
}
function getInternalPlugins(options) {
	const plugins = [];
	if (options.advanced?.crossSubDomainCookies?.enabled) {}
	return plugins;
}
async function getTrustedOrigins(options, request) {
	const trustedOrigins = [];
	if (isDynamicBaseURLConfig(options.baseURL)) {
		const allowedHosts = options.baseURL.allowedHosts;
		const proto = options.baseURL.protocol;
		for (const host of allowedHosts) if (!host.includes("://")) {
			if (!proto || proto === "https" || proto === "auto") trustedOrigins.push(`https://${host}`);
			if (proto === "http" || proto === "auto" || isLoopbackHost(host)) trustedOrigins.push(`http://${host}`);
		} else trustedOrigins.push(host);
		if (options.baseURL.fallback) try {
			trustedOrigins.push(new URL(options.baseURL.fallback).origin);
		} catch {}
	} else {
		const baseURL = getBaseURL(typeof options.baseURL === "string" ? options.baseURL : void 0, options.basePath, request);
		if (baseURL) trustedOrigins.push(new URL(baseURL).origin);
	}
	if (options.trustedOrigins) {
		if (Array.isArray(options.trustedOrigins)) trustedOrigins.push(...options.trustedOrigins);
		if (typeof options.trustedOrigins === "function") {
			const validOrigins = await options.trustedOrigins(request);
			trustedOrigins.push(...validOrigins);
		}
	}
	const envTrustedOrigins = env.BETTER_AUTH_TRUSTED_ORIGINS;
	if (envTrustedOrigins) trustedOrigins.push(...envTrustedOrigins.split(","));
	return trustedOrigins.filter((v) => Boolean(v));
}
/**
* Picks a `Request`-like or `Headers` value from a direct `auth.api` call.
* Headers are only accepted when they carry a host: without one, host
* resolution would fall back to `null` and the caller should use `fallback`
* or pass a `Request` instead.
*/
function pickSource(input) {
	if (isRequestLike(input?.request)) return input.request;
	if (!input?.headers) return void 0;
	const headers = input.headers instanceof Headers ? input.headers : new Headers(input.headers);
	if (!headers.has("host") && !headers.has("x-forwarded-host")) return;
	return headers;
}
/**
* Returns the effective `trustedProxyHeaders` value for dynamic `baseURL`
* resolution. When the user hasn't set `advanced.trustedProxyHeaders`,
* proxy headers (`x-forwarded-host` / `x-forwarded-proto`) are trusted by
* default so deployments behind a reverse proxy work without extra config.
*/
function resolveDynamicTrustedProxyHeaders(options) {
	return options.advanced?.trustedProxyHeaders ?? true;
}
/**
* Per-request clone with `baseURL`, `trustedOrigins`, `trustedProviders`
* and cookies rehydrated for the resolved host. Throws `BetterAuthError`
* when the URL cannot be resolved; callers on the direct-API path convert
* this to `APIError`.
*/
async function resolveRequestContext(ctx, source, trustedProxyHeaders) {
	const dynamicBaseURLConfig = ctx.options.baseURL;
	const baseURL = resolveBaseURL(dynamicBaseURLConfig, ctx.options.basePath || "/api/auth", source, void 0, trustedProxyHeaders);
	if (!baseURL) throw new BetterAuthError("Could not resolve base URL from request. Check your allowedHosts config.");
	const resolved = Object.create(Object.getPrototypeOf(ctx), Object.getOwnPropertyDescriptors(ctx));
	resolved.baseURL = baseURL;
	resolved.options = {
		...ctx.options,
		baseURL: getOrigin(baseURL) || void 0
	};
	const trustedOriginOptions = {
		...resolved.options,
		baseURL: dynamicBaseURLConfig
	};
	const needsRequest = typeof ctx.options.trustedOrigins === "function" || typeof ctx.options.account?.accountLinking?.trustedProviders === "function";
	let callbackRequest;
	if (needsRequest) if (isRequestLike(source)) callbackRequest = source;
	else if (source) callbackRequest = new Request(baseURL, { headers: source });
	else callbackRequest = void 0;
	else callbackRequest = void 0;
	resolved.trustedOrigins = await getTrustedOrigins(trustedOriginOptions, callbackRequest);
	resolved.trustedProviders = await getTrustedProviders(resolved.options, callbackRequest);
	if (ctx.options.advanced?.crossSubDomainCookies?.enabled) {
		resolved.authCookies = getCookies(resolved.options);
		resolved.createAuthCookie = createCookieGetter(resolved.options);
	}
	return resolved;
}
async function getAwaitableValue(arr, item) {
	if (!arr) return void 0;
	for (const val of arr) {
		const value = typeof val === "function" ? await val() : val;
		if (value[item.field ?? "id"] === item.value) return value;
	}
}
async function getTrustedProviders(options, request) {
	const trustedProviders = options.account?.accountLinking?.trustedProviders;
	if (!trustedProviders) return [];
	if (Array.isArray(trustedProviders)) return trustedProviders.filter((v) => Boolean(v));
	return (await trustedProviders(request) ?? []).filter((v) => Boolean(v));
}
/**
* Check if a string looks like encrypted data
*/
function isLikelyEncrypted(token) {
	if (token.startsWith("$ba$")) return true;
	return token.length % 2 === 0 && /^[0-9a-f]+$/i.test(token);
}
function decryptOAuthToken(token, ctx) {
	if (!token) return token;
	if (ctx.options.account?.encryptOAuthTokens) {
		if (!isLikelyEncrypted(token)) return token;
		return symmetricDecrypt({
			key: ctx.secretConfig,
			data: token
		});
	}
	return token;
}
function setTokenUtil(token, ctx) {
	if (ctx.options.account?.encryptOAuthTokens && token) return symmetricEncrypt({
		key: ctx.secretConfig,
		data: token
	});
	return token;
}
function safeCloneRequest(request) {
	if (!request) return;
	try {
		return request.clone();
	} catch {
		return new Request(request.url, {
			cache: request.cache,
			credentials: request.credentials,
			headers: request.headers,
			integrity: request.integrity,
			keepalive: request.keepalive,
			method: request.method,
			mode: request.mode,
			redirect: request.redirect,
			referrer: request.referrer,
			referrerPolicy: request.referrerPolicy,
			signal: request.signal
		});
	}
}
async function createEmailVerificationToken(secret, email, updateTo, expiresIn = 3600, extraPayload) {
	return await signJWT({
		email: email.toLowerCase(),
		updateTo: updateTo?.toLowerCase(),
		...extraPayload
	}, secret, expiresIn);
}
/**
* A function to send a verification email to the user
*/
async function sendVerificationEmailFn(ctx, user) {
	if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.VERIFICATION_EMAIL_NOT_ENABLED);
	}
	const token = await createEmailVerificationToken(ctx.context.secret, user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
	const callbackURL = ctx.body.callbackURL ? encodeURIComponent(ctx.body.callbackURL) : encodeURIComponent("/");
	const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
	await ctx.context.options.emailVerification.sendVerificationEmail({
		user,
		url,
		token
	}, ctx.request);
}
var sendVerificationEmail = createAuthEndpoint("/send-verification-email", {
	method: "POST",
	operationId: "sendVerificationEmail",
	cloneRequest: true,
	body: object({
		email: email().meta({ description: "The email to send the verification email to" }),
		callbackURL: string().meta({ description: "The URL to use for email verification callback" }).optional()
	}),
	metadata: { openapi: {
		operationId: "sendVerificationEmail",
		description: "Send a verification email to the user",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: {
				email: {
					type: "string",
					description: "The email to send the verification email to",
					example: "user@example.com"
				},
				callbackURL: {
					type: "string",
					description: "The URL to use for email verification callback",
					example: "https://example.com/callback",
					nullable: true
				}
			},
			required: ["email"]
		} } } },
		responses: {
			"200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { status: {
						type: "boolean",
						description: "Indicates if the email was sent successfully",
						example: true
					} }
				} } }
			},
			"400": {
				description: "Bad Request",
				content: { "application/json": { schema: {
					type: "object",
					properties: { message: {
						type: "string",
						description: "Error message",
						example: "Verification email isn't enabled"
					} }
				} } }
			}
		}
	} }
}, async (ctx) => {
	if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.VERIFICATION_EMAIL_NOT_ENABLED);
	}
	const { email } = ctx.body;
	const session = await getSessionFromCtx(ctx);
	if (!session) {
		/**
		* Enforce a constant-time floor so an attacker cannot distinguish
		* "email not found / already verified" (fast local JWT sign) from
		* "email found and unverified" (slow external email-send) by
		* comparing response times.
		*/
		const MINIMUM_MS = 500;
		const start = Date.now();
		const user = await ctx.context.internalAdapter.findUserByEmail(email);
		let error;
		if (!user || user.user.emailVerified) await createEmailVerificationToken(ctx.context.secret, email, void 0, ctx.context.options.emailVerification?.expiresIn);
		else try {
			await sendVerificationEmailFn(ctx, user.user);
		} catch (e) {
			error = e;
		}
		const remaining = MINIMUM_MS - (Date.now() - start);
		if (remaining > 0) await new Promise((resolve) => setTimeout(resolve, remaining));
		if (error) throw error;
		return ctx.json({ status: true });
	}
	if (session?.user.email.toLowerCase() !== email.toLowerCase()) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_MISMATCH);
	if (session?.user.emailVerified) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_ALREADY_VERIFIED);
	await sendVerificationEmailFn(ctx, session.user);
	return ctx.json({ status: true });
});
var verifyEmail = createAuthEndpoint("/verify-email", {
	method: "GET",
	operationId: "verifyEmail",
	query: object({
		token: string().meta({ description: "The token to verify the email" }),
		callbackURL: string().meta({ description: "The URL to redirect to after email verification" }).optional()
	}),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		description: "Verify the email of the user",
		parameters: [{
			name: "token",
			in: "query",
			description: "The token to verify the email",
			required: true,
			schema: { type: "string" }
		}, {
			name: "callbackURL",
			in: "query",
			description: "The URL to redirect to after email verification",
			required: false,
			schema: { type: "string" }
		}],
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						$ref: "#/components/schemas/User"
					},
					status: {
						type: "boolean",
						description: "Indicates if the email was verified successfully"
					}
				},
				required: ["user", "status"]
			} } }
		} }
	} }
}, async (ctx) => {
	function redirectOnError(error) {
		if (ctx.query.callbackURL) {
			if (ctx.query.callbackURL.includes("?")) throw ctx.redirect(`${ctx.query.callbackURL}&error=${error.code}`);
			throw ctx.redirect(`${ctx.query.callbackURL}?error=${error.code}`);
		}
		throw APIError.from("UNAUTHORIZED", error);
	}
	const { token } = ctx.query;
	let jwt;
	try {
		jwt = await jwtVerify(token, new TextEncoder().encode(ctx.context.secret), { algorithms: ["HS256"] });
	} catch (e) {
		if (e instanceof JWTExpired) return redirectOnError(BASE_ERROR_CODES.TOKEN_EXPIRED);
		return redirectOnError(BASE_ERROR_CODES.INVALID_TOKEN);
	}
	const parsed = object({
		email: email(),
		updateTo: string().optional(),
		requestType: string().optional()
	}).parse(jwt.payload);
	const user = await ctx.context.internalAdapter.findUserByEmail(parsed.email);
	if (!user) return redirectOnError(BASE_ERROR_CODES.USER_NOT_FOUND);
	if (parsed.updateTo) {
		const session = await getSessionFromCtx(ctx);
		if (session && session.user.email !== parsed.email) return redirectOnError(BASE_ERROR_CODES.INVALID_USER);
		switch (parsed.requestType) {
			/**
			* User clicks confirmation -> sends verification to new email
			*/
			case "change-email-confirmation": {
				const newToken = await createEmailVerificationToken(ctx.context.secret, parsed.email, parsed.updateTo, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-verification" });
				const updateCallbackURL = ctx.query.callbackURL ? encodeURIComponent(ctx.query.callbackURL) : encodeURIComponent("/");
				const url = `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`;
				if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
					user: {
						...user.user,
						email: parsed.updateTo
					},
					url,
					token: newToken
				}, safeCloneRequest(ctx.request)));
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({ status: true });
			}
			/**
			* User clicks verification -> updates email
			*/
			case "change-email-verification": {
				let activeSession = session;
				if (!activeSession) {
					const newSession = await ctx.context.internalAdapter.createSession(user.user.id);
					if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
					activeSession = {
						session: newSession,
						user: user.user
					};
				}
				const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
					email: parsed.updateTo,
					emailVerified: true
				});
				if (ctx.context.options.emailVerification?.afterEmailVerification) await ctx.context.options.emailVerification.afterEmailVerification(updatedUser, ctx.request);
				await setSessionCookie(ctx, {
					session: activeSession.session,
					user: {
						...activeSession.user,
						email: parsed.updateTo,
						emailVerified: true
					}
				});
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({
					status: true,
					user: parseUserOutput(ctx.context.options, updatedUser)
				});
			}
			/**
			* Legacy flow
			*
			* - skips two-step verification
			* - updates email immediately
			*/
			default: {
				let activeSession = session;
				if (!activeSession) {
					const newSession = await ctx.context.internalAdapter.createSession(user.user.id);
					if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
					activeSession = {
						session: newSession,
						user: user.user
					};
				}
				const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
					email: parsed.updateTo,
					emailVerified: false
				});
				const newToken = await createEmailVerificationToken(ctx.context.secret, parsed.updateTo);
				const updateCallbackURL = ctx.query.callbackURL ? encodeURIComponent(ctx.query.callbackURL) : encodeURIComponent("/");
				if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
					user: updatedUser,
					url: `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`,
					token: newToken
				}, safeCloneRequest(ctx.request)));
				await setSessionCookie(ctx, {
					session: activeSession.session,
					user: {
						...activeSession.user,
						email: parsed.updateTo,
						emailVerified: false
					}
				});
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({
					status: true,
					user: parseUserOutput(ctx.context.options, updatedUser)
				});
			}
		}
	}
	if (user.user.emailVerified) {
		if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
		return ctx.json({
			status: true,
			user: null
		});
	}
	if (ctx.context.options.emailVerification?.beforeEmailVerification) await ctx.context.options.emailVerification.beforeEmailVerification(user.user, ctx.request);
	const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, { emailVerified: true });
	if (ctx.context.options.emailVerification?.afterEmailVerification) await ctx.context.options.emailVerification.afterEmailVerification(updatedUser, ctx.request);
	if (ctx.context.options.emailVerification?.autoSignInAfterVerification) {
		const currentSession = await getSessionFromCtx(ctx);
		if (!currentSession || currentSession.user.email !== parsed.email) {
			const session = await ctx.context.internalAdapter.createSession(user.user.id);
			if (!session) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
			await setSessionCookie(ctx, {
				session,
				user: {
					...user.user,
					emailVerified: true
				}
			});
		} else await setSessionCookie(ctx, {
			session: currentSession.session,
			user: {
				...currentSession.user,
				emailVerified: true
			}
		});
	}
	if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
	return ctx.json({
		status: true,
		user: null
	});
});
async function handleOAuthUserInfo(c, opts) {
	const { userInfo, account, callbackURL, disableSignUp, overrideUserInfo } = opts;
	const dbUser = await c.context.internalAdapter.findOAuthUser(userInfo.email.toLowerCase(), account.accountId, account.providerId).catch((e) => {
		c.context.logger.error("Better auth was unable to query your database.\nError: ", e);
		redirectOnError(c, c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`, "internal_server_error");
	});
	let user = dbUser?.user;
	const isRegister = !user;
	if (dbUser) {
		const linkedAccount = dbUser.linkedAccount ?? dbUser.accounts.find((acc) => acc.providerId === account.providerId && acc.accountId === account.accountId);
		if (!linkedAccount) {
			const accountLinking = c.context.options.account?.accountLinking;
			const isTrustedProvider = opts.isTrustedProvider || opts.trustProviderByName !== false && c.context.trustedProviders.includes(account.providerId);
			const requireLocalEmailVerified = accountLinking?.requireLocalEmailVerified ?? true;
			if (!isTrustedProvider && !userInfo.emailVerified || requireLocalEmailVerified && !dbUser.user.emailVerified || accountLinking?.enabled === false || accountLinking?.disableImplicitLinking === true) {
				if (isDevelopment()) c.context.logger.warn(`User already exist but account isn't linked to ${account.providerId}. To read more about how account linking works in Better Auth see https://www.better-auth.com/docs/concepts/users-accounts#account-linking.`);
				return {
					error: "account not linked",
					data: null
				};
			}
			try {
				await c.context.internalAdapter.linkAccount({
					providerId: account.providerId,
					accountId: userInfo.id.toString(),
					userId: dbUser.user.id,
					accessToken: await setTokenUtil(account.accessToken, c.context),
					refreshToken: await setTokenUtil(account.refreshToken, c.context),
					idToken: account.idToken,
					accessTokenExpiresAt: account.accessTokenExpiresAt,
					refreshTokenExpiresAt: account.refreshTokenExpiresAt,
					scope: account.scope
				});
			} catch (e) {
				c.context.logger.error("Unable to link account", e);
				return {
					error: "unable to link account",
					data: null
				};
			}
			if (userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, { emailVerified: true });
			user = await applyUpdateUserInfoOnLink(c, dbUser.user.id, userInfo) ?? user;
		} else {
			const freshTokens = c.context.options.account?.updateAccountOnSignIn !== false ? Object.fromEntries(Object.entries({
				idToken: account.idToken,
				accessToken: await setTokenUtil(account.accessToken, c.context),
				refreshToken: await setTokenUtil(account.refreshToken, c.context),
				accessTokenExpiresAt: account.accessTokenExpiresAt,
				refreshTokenExpiresAt: account.refreshTokenExpiresAt,
				scope: account.scope
			}).filter(([_, value]) => value !== void 0)) : {};
			if (c.context.options.account?.storeAccountCookie) await setAccountCookie(c, {
				...linkedAccount,
				...freshTokens
			});
			if (Object.keys(freshTokens).length > 0) await c.context.internalAdapter.updateAccount(linkedAccount.id, freshTokens);
			if (userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, { emailVerified: true });
		}
		if (overrideUserInfo) {
			const { id: _id, email: _email, emailVerified: _emailVerified, name, image, ...providerProfile } = userInfo;
			const additionalUserFields = parseAdditionalUserInputFromProviderProfile(c.context.options, providerProfile, "update");
			user = await c.context.internalAdapter.updateUser(dbUser.user.id, {
				name,
				image,
				...additionalUserFields,
				email: userInfo.email.toLowerCase(),
				emailVerified: userInfo.email.toLowerCase() === dbUser.user.email ? dbUser.user.emailVerified || userInfo.emailVerified : userInfo.emailVerified
			});
		}
	} else {
		if (disableSignUp) return {
			error: "signup disabled",
			data: null,
			isRegister: false
		};
		try {
			const { id: _id, email: _email, emailVerified: _emailVerified, name, image, ...providerProfile } = userInfo;
			const additionalUserFields = parseAdditionalUserInputFromProviderProfile(c.context.options, providerProfile, "create");
			const accountData = {
				accessToken: await setTokenUtil(account.accessToken, c.context),
				refreshToken: await setTokenUtil(account.refreshToken, c.context),
				idToken: account.idToken,
				accessTokenExpiresAt: account.accessTokenExpiresAt,
				refreshTokenExpiresAt: account.refreshTokenExpiresAt,
				scope: account.scope,
				providerId: account.providerId,
				accountId: userInfo.id.toString()
			};
			const { user: createdUser, account: createdAccount } = await c.context.internalAdapter.createOAuthUser({
				name,
				image,
				...additionalUserFields,
				email: userInfo.email.toLowerCase(),
				emailVerified: userInfo.emailVerified
			}, accountData);
			user = createdUser;
			if (c.context.options.account?.storeAccountCookie) await setAccountCookie(c, createdAccount);
			if (!userInfo.emailVerified && user && c.context.options.emailVerification?.sendOnSignUp && c.context.options.emailVerification?.sendVerificationEmail) {
				const token = await createEmailVerificationToken(c.context.secret, user.email, void 0, c.context.options.emailVerification?.expiresIn);
				const url = `${c.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(callbackURL || "/")}`;
				await c.context.runInBackgroundOrAwait(c.context.options.emailVerification.sendVerificationEmail({
					user,
					url,
					token
				}, c.request));
			}
		} catch (e) {
			c.context.logger.error(e);
			if (isAPIError(e)) return {
				error: e.message,
				data: null,
				isRegister: false
			};
			return {
				error: "unable to create user",
				data: null,
				isRegister: false
			};
		}
	}
	if (!user) return {
		error: "unable to create user",
		data: null,
		isRegister: false
	};
	const session = await c.context.internalAdapter.createSession(user.id);
	if (!session) return {
		error: "unable to create session",
		data: null,
		isRegister: false
	};
	return {
		data: {
			session,
			user
		},
		error: null,
		isRegister
	};
}
/**
* Apply the `account.accountLinking.updateUserInfoOnLink` policy: when enabled,
* copy the freshly linked provider's profile onto the local user, matching the
* field set persisted on sign-up. The local `email` and `emailVerified` are
* never changed, so a link can't rebind the account's identity, and
* `updateUser` drops `undefined` fields, so a provider that omits one leaves
* the existing column intact.
*
* Returns the updated user so a caller that issues a session can seed the
* cookie cache with the fresh row. Returns `undefined` when the policy is
* disabled or the update fails: a failed profile sync must not abort the link.
*/
async function applyUpdateUserInfoOnLink(c, userId, userInfo) {
	if (c.context.options.account?.accountLinking?.updateUserInfoOnLink !== true) return;
	try {
		const { id: _id, email: _email, emailVerified: _emailVerified, name, image, ...providerProfile } = userInfo;
		const additionalUserFields = parseAdditionalUserInputFromProviderProfile(c.context.options, providerProfile, "update");
		return await c.context.internalAdapter.updateUser(userId, {
			name,
			image,
			...additionalUserFields
		});
	} catch (e) {
		c.context.logger.warn("Could not update user info on account link", e);
		return;
	}
}
var listUserAccounts = createAuthEndpoint("/list-accounts", {
	method: "GET",
	use: [sessionMiddleware],
	metadata: { openapi: {
		operationId: "listUserAccounts",
		description: "List all accounts linked to the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "array",
				items: {
					type: "object",
					properties: {
						id: { type: "string" },
						providerId: { type: "string" },
						createdAt: {
							type: "string",
							format: "date-time"
						},
						updatedAt: {
							type: "string",
							format: "date-time"
						},
						accountId: { type: "string" },
						userId: { type: "string" },
						scopes: {
							type: "array",
							items: { type: "string" }
						}
					},
					required: [
						"id",
						"providerId",
						"createdAt",
						"updatedAt",
						"accountId",
						"userId",
						"scopes"
					]
				}
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	const accounts = await c.context.internalAdapter.findAccounts(session.user.id);
	return c.json(accounts.map((a) => {
		const { scope, ...parsed } = parseAccountOutput(c.context.options, a);
		return {
			...parsed,
			scopes: scope?.split(",") || []
		};
	}));
});
var linkSocialAccount = createAuthEndpoint("/link-social", {
	method: "POST",
	requireHeaders: true,
	body: object({
		/**
		* Callback URL to redirect to after the user has signed in.
		*/
		callbackURL: string().meta({ description: "The URL to redirect to after the user has signed in" }).optional(),
		/**
		* OAuth2 provider to use
		*/
		provider: SocialProviderListEnum,
		/**
		* ID Token for direct authentication without redirect
		*/
		idToken: object({
			token: string(),
			nonce: string().optional(),
			accessToken: string().optional(),
			refreshToken: string().optional(),
			scopes: array(string()).optional()
		}).optional(),
		/**
		* Whether to allow sign up for new users
		*/
		requestSignUp: boolean().optional(),
		/**
		* Additional scopes to request when linking the account.
		* This is useful for requesting additional permissions when
		* linking a social account compared to the initial authentication.
		*/
		scopes: array(string()).meta({ description: "Additional scopes to request from the provider" }).optional(),
		/**
		* The URL to redirect to if there is an error during the link process.
		*/
		errorCallbackURL: string().meta({ description: "The URL to redirect to if there is an error during the link process" }).optional(),
		/**
		* Disable automatic redirection to the provider
		*
		* This is useful if you want to handle the redirection
		* yourself like in a popup or a different tab.
		*/
		disableRedirect: boolean().meta({ description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself" }).optional(),
		/**
		* Any additional data to pass through the oauth flow.
		*/
		additionalData: record(string(), any()).optional()
	}),
	use: [sessionMiddleware],
	metadata: { openapi: {
		description: "Link a social account to the user",
		operationId: "linkSocialAccount",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					url: {
						type: "string",
						description: "The authorization URL to redirect the user to"
					},
					redirect: {
						type: "boolean",
						description: "Indicates if the user should be redirected to the authorization URL"
					},
					status: { type: "boolean" }
				},
				required: ["redirect"]
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.body.provider });
	if (!provider) {
		c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", { provider: c.body.provider });
		throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	}
	if (c.body.idToken) {
		if (!provider.verifyIdToken) {
			c.context.logger.error("Provider does not support id token verification", { provider: c.body.provider });
			throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED);
		}
		const { token, nonce } = c.body.idToken;
		if (!await provider.verifyIdToken(token, nonce, c)) {
			c.context.logger.warn("Invalid id token", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_TOKEN);
		}
		const linkingUserInfo = await provider.getUserInfo({
			idToken: token,
			accessToken: c.body.idToken.accessToken,
			refreshToken: c.body.idToken.refreshToken
		});
		if (!linkingUserInfo || !linkingUserInfo?.user) {
			c.context.logger.error("Failed to get user info", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
		}
		const linkingUserId = String(linkingUserInfo.user.id);
		if (!linkingUserInfo.user.email) {
			c.context.logger.error(missingEmailLogMessage(c.body.provider, { source: "id_token" }), { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND);
		}
		if ((await c.context.internalAdapter.findAccounts(session.user.id)).find((a) => a.providerId === provider.id && a.accountId === linkingUserId)) return c.json({
			url: "",
			status: true,
			redirect: false
		});
		if (!c.context.trustedProviders.includes(provider.id) && !linkingUserInfo.user.emailVerified || c.context.options.account?.accountLinking?.enabled === false) throw APIError.from("UNAUTHORIZED", {
			message: "Account not linked - linking not allowed",
			code: "LINKING_NOT_ALLOWED"
		});
		if (linkingUserInfo.user.email?.toLowerCase() !== session.user.email.toLowerCase() && c.context.options.account?.accountLinking?.allowDifferentEmails !== true) throw APIError.from("UNAUTHORIZED", {
			message: "Account not linked - different emails not allowed",
			code: "LINKING_DIFFERENT_EMAILS_NOT_ALLOWED"
		});
		try {
			await c.context.internalAdapter.createAccount({
				userId: session.user.id,
				providerId: provider.id,
				accountId: linkingUserId,
				accessToken: c.body.idToken.accessToken,
				idToken: token,
				refreshToken: c.body.idToken.refreshToken,
				scope: c.body.idToken.scopes?.join(",")
			});
		} catch (_e) {
			throw APIError.from("EXPECTATION_FAILED", {
				message: "Account not linked - unable to create account",
				code: "LINKING_FAILED"
			});
		}
		await applyUpdateUserInfoOnLink(c, session.user.id, linkingUserInfo.user);
		return c.json({
			url: "",
			status: true,
			redirect: false
		});
	}
	const state = await generateState(c, {
		userId: session.user.id,
		email: session.user.email
	}, c.body.additionalData);
	const url = await provider.createAuthorizationURL({
		state: state.state,
		codeVerifier: state.codeVerifier,
		redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
		scopes: c.body.scopes
	});
	if (!c.body.disableRedirect) c.setHeader("Location", url.toString());
	return c.json({
		url: url.toString(),
		redirect: !c.body.disableRedirect
	});
});
var unlinkAccount = createAuthEndpoint("/unlink-account", {
	method: "POST",
	body: object({
		providerId: string(),
		accountId: string().optional()
	}),
	use: [freshSessionMiddleware],
	metadata: { openapi: {
		description: "Unlink an account",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const { providerId, accountId } = ctx.body;
	const accounts = await ctx.context.internalAdapter.findAccounts(ctx.context.session.user.id);
	if (accounts.length === 1 && !ctx.context.options.account?.accountLinking?.allowUnlinkingAll) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_UNLINK_LAST_ACCOUNT);
	const accountExist = accounts.find((account) => accountId ? account.accountId === accountId && account.providerId === providerId : account.providerId === providerId);
	if (!accountExist) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	await ctx.context.internalAdapter.deleteAccount(accountExist.id);
	return ctx.json({ status: true });
});
/**
* Resolves the user id an account-token operation should act on.
*
* A caller reaching the server over HTTP (a request or session headers are
* present) must have a valid session, and that session's user always wins.
* A trusted server-side `auth.api` caller with no session may instead name a
* `userId` directly. Throws `UNAUTHORIZED` when an HTTP caller is
* unauthenticated, and `USER_ID_OR_SESSION_REQUIRED` when neither a session
* nor a `userId` is available.
*
* When a durable store is authoritative, bypasses the cookie cache: these
* routes mint or refresh provider access tokens, so a server-side session
* revocation must take effect immediately rather than waiting for the cached
* cookie to expire. DB-less deployments keep the session in the cookie itself,
* so the cache is left in place for them.
*/
async function resolveUserId(ctx, userId) {
	const session = await getSessionFromCtx(ctx, { disableCookieCache: isStateful(ctx) });
	if (!session && (ctx.request || ctx.headers)) throw ctx.error("UNAUTHORIZED");
	const resolvedUserId = session?.user?.id || userId;
	if (!resolvedUserId) throw APIError.from("BAD_REQUEST", {
		message: "Either userId or session is required",
		code: "USER_ID_OR_SESSION_REQUIRED"
	});
	return resolvedUserId;
}
function matchesAccountSelection(ctx, account, { resolvedUserId, providerId, accountId }) {
	return (!shouldBindAccountCookieToSessionUser(ctx.context.options) || account.userId === resolvedUserId) && (!providerId || providerId === account.providerId) && (!accountId || account.accountId === accountId);
}
/**
* Fetches a currently-valid access token for a user's provider account,
* refreshing and persisting it when it is within five seconds of expiry.
* Shared by the `/get-access-token` endpoint and `/account-info` so both
* resolve and refresh tokens through one path.
*/
async function getValidAccessToken(ctx, { resolvedUserId, providerId, accountId, account: resolvedAccount }) {
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${providerId} is not supported.`,
		code: "PROVIDER_NOT_SUPPORTED"
	});
	let account = resolvedAccount;
	if (!account) {
		const accountData = await getAccountCookie(ctx);
		if (accountData && matchesAccountSelection(ctx, accountData, {
			resolvedUserId,
			providerId,
			accountId
		})) account = accountData;
		else account = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).find((acc) => accountId ? acc.accountId === accountId && acc.providerId === providerId : acc.providerId === providerId);
	}
	if (!account) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	try {
		let newTokens = null;
		const accessTokenExpired = account.accessTokenExpiresAt && new Date(account.accessTokenExpiresAt).getTime() - Date.now() < 5e3;
		if (account.refreshToken && accessTokenExpired && provider.refreshAccessToken) {
			const refreshToken = await decryptOAuthToken(account.refreshToken, ctx.context);
			newTokens = await provider.refreshAccessToken(refreshToken);
			const updatedData = {
				accessToken: await setTokenUtil(newTokens?.accessToken, ctx.context),
				accessTokenExpiresAt: newTokens?.accessTokenExpiresAt,
				refreshToken: newTokens?.refreshToken ? await setTokenUtil(newTokens.refreshToken, ctx.context) : account.refreshToken,
				refreshTokenExpiresAt: newTokens?.refreshTokenExpiresAt ?? account.refreshTokenExpiresAt,
				idToken: newTokens?.idToken || account.idToken
			};
			let updatedAccount = null;
			if (account.id) updatedAccount = await ctx.context.internalAdapter.updateAccount(account.id, updatedData);
			if (ctx.context.options.account?.storeAccountCookie) await setAccountCookie(ctx, {
				...account,
				...updatedAccount ?? updatedData
			});
		}
		const accessTokenExpiresAt = (() => {
			if (newTokens?.accessTokenExpiresAt) {
				if (typeof newTokens.accessTokenExpiresAt === "string") return new Date(newTokens.accessTokenExpiresAt);
				return newTokens.accessTokenExpiresAt;
			}
			if (account.accessTokenExpiresAt) {
				if (typeof account.accessTokenExpiresAt === "string") return new Date(account.accessTokenExpiresAt);
				return account.accessTokenExpiresAt;
			}
		})();
		return {
			accessToken: newTokens?.accessToken ?? await decryptOAuthToken(account.accessToken ?? "", ctx.context),
			accessTokenExpiresAt,
			scopes: account.scope?.split(",") ?? [],
			idToken: newTokens?.idToken ?? account.idToken ?? void 0
		};
	} catch (_error) {
		throw APIError.from("BAD_REQUEST", {
			message: "Failed to get a valid access token",
			code: "FAILED_TO_GET_ACCESS_TOKEN"
		});
	}
}
var getAccessToken = createAuthEndpoint("/get-access-token", {
	method: "POST",
	body: object({
		providerId: string().meta({ description: "The provider ID for the OAuth provider" }),
		accountId: string().meta({ description: "The account ID associated with the refresh token" }).optional(),
		userId: string().meta({ description: "The user ID associated with the account" }).optional()
	}),
	metadata: { openapi: {
		description: "Get a valid access token, doing a refresh if needed",
		responses: {
			200: {
				description: "A Valid access token",
				content: { "application/json": { schema: {
					type: "object",
					properties: {
						tokenType: { type: "string" },
						idToken: { type: "string" },
						accessToken: { type: "string" },
						accessTokenExpiresAt: {
							type: "string",
							format: "date-time"
						}
					}
				} } }
			},
			400: { description: "Invalid refresh token or provider configuration" }
		}
	} }
}, async (ctx) => {
	const { providerId, accountId, userId } = ctx.body || {};
	const tokens = await getValidAccessToken(ctx, {
		resolvedUserId: await resolveUserId(ctx, userId),
		providerId,
		accountId
	});
	return ctx.json(tokens);
});
var refreshToken = createAuthEndpoint("/refresh-token", {
	method: "POST",
	body: object({
		providerId: string().meta({ description: "The provider ID for the OAuth provider" }),
		accountId: string().meta({ description: "The account ID associated with the refresh token" }).optional(),
		userId: string().meta({ description: "The user ID associated with the account" }).optional()
	}),
	metadata: { openapi: {
		description: "Refresh the access token using a refresh token",
		responses: {
			200: {
				description: "Access token refreshed successfully",
				content: { "application/json": { schema: {
					type: "object",
					properties: {
						tokenType: { type: "string" },
						idToken: { type: "string" },
						accessToken: { type: "string" },
						refreshToken: { type: "string" },
						accessTokenExpiresAt: {
							type: "string",
							format: "date-time"
						},
						refreshTokenExpiresAt: {
							type: "string",
							format: "date-time"
						}
					}
				} } }
			},
			400: { description: "Invalid refresh token or provider configuration" }
		}
	} }
}, async (ctx) => {
	const { providerId, accountId, userId } = ctx.body;
	const resolvedUserId = await resolveUserId(ctx, userId);
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${providerId} is not supported.`,
		code: "PROVIDER_NOT_SUPPORTED"
	});
	if (!provider.refreshAccessToken) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${providerId} does not support token refreshing.`,
		code: "TOKEN_REFRESH_NOT_SUPPORTED"
	});
	let account = void 0;
	const accountData = await getAccountCookie(ctx);
	const usedAccountCookie = !!accountData && matchesAccountSelection(ctx, accountData, {
		resolvedUserId,
		providerId,
		accountId
	});
	if (usedAccountCookie) account = accountData;
	else account = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).find((acc) => accountId ? acc.accountId === accountId && acc.providerId === providerId : acc.providerId === providerId);
	if (!account) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	const refreshToken = account.refreshToken ?? void 0;
	if (!refreshToken) throw APIError.from("BAD_REQUEST", {
		message: "Refresh token not found",
		code: "REFRESH_TOKEN_NOT_FOUND"
	});
	try {
		const decryptedRefreshToken = await decryptOAuthToken(refreshToken, ctx.context);
		const tokens = await provider.refreshAccessToken(decryptedRefreshToken);
		const resolvedRefreshToken = tokens.refreshToken ? await setTokenUtil(tokens.refreshToken, ctx.context) : refreshToken;
		const resolvedRefreshTokenExpiresAt = tokens.refreshTokenExpiresAt ?? account.refreshTokenExpiresAt;
		if (account.id) {
			const updateData = {
				...account || {},
				accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
				refreshToken: resolvedRefreshToken,
				accessTokenExpiresAt: tokens.accessTokenExpiresAt,
				refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
				scope: tokens.scopes?.join(",") || account.scope,
				idToken: tokens.idToken || account.idToken
			};
			await ctx.context.internalAdapter.updateAccount(account.id, updateData);
		}
		if (usedAccountCookie && ctx.context.options.account?.storeAccountCookie) await setAccountCookie(ctx, {
			...accountData,
			accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
			refreshToken: resolvedRefreshToken,
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
			scope: tokens.scopes?.join(",") || accountData.scope,
			idToken: tokens.idToken || accountData.idToken
		});
		return ctx.json({
			accessToken: tokens.accessToken,
			refreshToken: tokens.refreshToken ?? decryptedRefreshToken,
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
			scope: tokens.scopes?.join(",") || account.scope,
			idToken: tokens.idToken || account.idToken,
			providerId: account.providerId,
			accountId: account.accountId
		});
	} catch (_error) {
		throw APIError.from("BAD_REQUEST", {
			message: "Failed to refresh access token",
			code: "FAILED_TO_REFRESH_ACCESS_TOKEN"
		});
	}
});
var accountInfo = createAuthEndpoint("/account-info", {
	method: "GET",
	metadata: { openapi: {
		description: "Get the account info provided by the provider",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						properties: {
							id: { type: "string" },
							name: { type: "string" },
							email: { type: "string" },
							image: { type: "string" },
							emailVerified: { type: "boolean" }
						},
						required: ["id", "emailVerified"]
					},
					data: {
						type: "object",
						properties: {},
						additionalProperties: true
					}
				},
				required: ["user", "data"],
				additionalProperties: false
			} } }
		} }
	} },
	query: optional(object({
		accountId: string().meta({ description: "The provider given account id for which to get the account info" }).optional(),
		providerId: string().meta({ description: "The provider ID to disambiguate provider-issued account IDs" }).optional(),
		userId: string().meta({ description: "The user ID associated with the account" }).optional()
	}))
}, async (ctx) => {
	const { accountId: providedAccountId, providerId: providedProviderId, userId } = ctx.query || {};
	const resolvedUserId = await resolveUserId(ctx, userId);
	let account = void 0;
	if (!providedAccountId) {
		if (ctx.context.options.account?.storeAccountCookie) {
			const accountData = await getAccountCookie(ctx);
			if (accountData && matchesAccountSelection(ctx, accountData, {
				resolvedUserId,
				providerId: providedProviderId
			})) account = accountData;
		}
	} else {
		const matchingAccounts = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).filter((acc) => acc.accountId === providedAccountId && (!providedProviderId || acc.providerId === providedProviderId));
		if (matchingAccounts.length > 1) throw APIError.from("BAD_REQUEST", {
			message: "Multiple accounts share this account ID. Pass a providerId to disambiguate.",
			code: "AMBIGUOUS_ACCOUNT"
		});
		account = matchingAccounts[0];
	}
	if (!account || !matchesAccountSelection(ctx, account, { resolvedUserId })) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: account.providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: "Account is not associated with a configured social provider.",
		code: "PROVIDER_NOT_CONFIGURED"
	});
	const tokens = await getValidAccessToken(ctx, {
		resolvedUserId,
		providerId: account.providerId,
		accountId: account.accountId,
		account
	});
	if (!tokens.accessToken) throw APIError.from("BAD_REQUEST", {
		message: "Access token not found",
		code: "ACCESS_TOKEN_NOT_FOUND"
	});
	const info = await provider.getUserInfo({
		...tokens,
		accessToken: tokens.accessToken
	});
	return ctx.json(info);
});
var schema = object({
	code: string().optional(),
	error: string().optional(),
	device_id: string().optional(),
	error_description: string().optional(),
	state: string().optional(),
	user: string().optional()
});
var callbackOAuth = createAuthEndpoint("/callback/:id", {
	method: ["GET", "POST"],
	operationId: "handleOAuthCallback",
	body: schema.optional(),
	query: schema.optional(),
	metadata: {
		...HIDE_METADATA,
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"]
	}
}, async (c) => {
	let queryOrBody;
	const defaultErrorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
	if (c.method === "POST") {
		const postData = c.body ? schema.parse(c.body) : {};
		const queryData = c.query ? schema.parse(c.query) : {};
		const mergedData = schema.parse({
			...postData,
			...queryData
		});
		const params = new URLSearchParams();
		for (const [key, value] of Object.entries(mergedData)) if (value !== void 0 && value !== null) params.set(key, String(value));
		const redirectURL = `${c.context.baseURL}/callback/${c.params.id}?${params.toString()}`;
		throw c.redirect(redirectURL);
	}
	try {
		if (c.method === "GET") queryOrBody = schema.parse(c.query);
		else if (c.method === "POST") queryOrBody = schema.parse(c.body);
		else throw new Error("Unsupported method");
	} catch (e) {
		c.context.logger.error("INVALID_CALLBACK_REQUEST", e);
		redirectOnError(c, defaultErrorURL, "invalid_callback_request");
	}
	const { code, error, error_description, device_id, user: userData } = queryOrBody;
	const { codeVerifier, callbackURL, link, errorURL, newUserURL, requestSignUp } = await parseState(c);
	const resolvedErrorURL = errorURL ?? defaultErrorURL;
	if (error) redirectOnError(c, resolvedErrorURL, error, error_description);
	if (!code) {
		c.context.logger.warn("Code not found");
		redirectOnError(c, resolvedErrorURL, "no_code");
	}
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.params.id });
	if (!provider) {
		c.context.logger.warn("OAuth provider not found", { providerId: c.params.id });
		redirectOnError(c, resolvedErrorURL, "oauth_provider_not_found");
	}
	let tokens;
	try {
		tokens = await provider.validateAuthorizationCode({
			code,
			codeVerifier,
			deviceId: device_id,
			redirectURI: `${c.context.baseURL}/callback/${provider.id}`
		});
	} catch (e) {
		c.context.logger.error("", e);
		redirectOnError(c, resolvedErrorURL, "invalid_code");
	}
	if (!tokens) redirectOnError(c, resolvedErrorURL, "invalid_code");
	const parsedUserData = userData ? safeJSONParse(userData) : null;
	const userInfo = await provider.getUserInfo({
		...tokens,
		/**
		* The user object from the provider
		* This is only available for some providers like Apple
		*/
		user: parsedUserData ?? void 0
	}).then((res) => res?.user);
	if (!userInfo || userInfo.id === void 0 || userInfo.id === null || userInfo.id === "") {
		c.context.logger.error("Unable to get user info");
		redirectOnError(c, resolvedErrorURL, "unable_to_get_user_info");
	}
	const providerAccountId = String(userInfo.id);
	if (!callbackURL) {
		c.context.logger.error("No callback URL found");
		redirectOnError(c, resolvedErrorURL, "no_callback_url");
	}
	if (link) {
		if (!c.context.trustedProviders.includes(provider.id) && !userInfo.emailVerified || c.context.options.account?.accountLinking?.enabled === false) {
			c.context.logger.error("Unable to link account - untrusted provider");
			redirectOnError(c, resolvedErrorURL, "unable_to_link_account");
		}
		if (userInfo.email?.toLowerCase() !== link.email.toLowerCase() && c.context.options.account?.accountLinking?.allowDifferentEmails !== true) redirectOnError(c, resolvedErrorURL, "email_doesn't_match");
		const existingAccount = await c.context.internalAdapter.findAccountByProviderId(providerAccountId, provider.id);
		if (existingAccount) {
			if (existingAccount.userId.toString() !== link.userId.toString()) redirectOnError(c, resolvedErrorURL, "account_already_linked_to_different_user");
			const updateData = Object.fromEntries(Object.entries({
				accessToken: await setTokenUtil(tokens.accessToken, c.context),
				refreshToken: await setTokenUtil(tokens.refreshToken, c.context),
				idToken: tokens.idToken,
				accessTokenExpiresAt: tokens.accessTokenExpiresAt,
				refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
				scope: tokens.scopes?.join(",")
			}).filter(([_, value]) => value !== void 0));
			await c.context.internalAdapter.updateAccount(existingAccount.id, updateData);
		} else if (!await c.context.internalAdapter.createAccount({
			userId: link.userId,
			providerId: provider.id,
			accountId: providerAccountId,
			...tokens,
			accessToken: await setTokenUtil(tokens.accessToken, c.context),
			refreshToken: await setTokenUtil(tokens.refreshToken, c.context),
			scope: tokens.scopes?.join(",")
		})) redirectOnError(c, resolvedErrorURL, "unable_to_link_account");
		await applyUpdateUserInfoOnLink(c, link.userId, userInfo);
		let toRedirectTo;
		try {
			toRedirectTo = callbackURL.toString();
		} catch {
			toRedirectTo = callbackURL;
		}
		throw c.redirect(toRedirectTo);
	}
	if (!userInfo.email) {
		c.context.logger.error(missingEmailLogMessage(provider.id));
		redirectOnError(c, resolvedErrorURL, "email_not_found");
	}
	const accountData = {
		providerId: provider.id,
		accountId: providerAccountId,
		...tokens,
		scope: tokens.scopes?.join(",")
	};
	let result;
	try {
		result = await handleOAuthUserInfo(c, {
			userInfo: {
				...userInfo,
				id: providerAccountId,
				email: userInfo.email,
				name: userInfo.name || ""
			},
			account: accountData,
			callbackURL,
			disableSignUp: provider.disableImplicitSignUp && !requestSignUp || provider.options?.disableSignUp,
			overrideUserInfo: provider.options?.overrideUserInfoOnSignIn
		});
	} catch (e) {
		if (isAPIError(e) && e.body?.code) redirectOnError(c, resolvedErrorURL, e.body.code, e.body.message);
		throw e;
	}
	if (result.error) {
		c.context.logger.error(result.error.split(" ").join("_"));
		redirectOnError(c, resolvedErrorURL, result.error.split(" ").join("_"));
	}
	const { session, user } = result.data;
	await setSessionCookie(c, {
		session,
		user
	});
	let toRedirectTo;
	try {
		toRedirectTo = (result.isRegister ? newUserURL || callbackURL : callbackURL).toString();
	} catch {
		toRedirectTo = result.isRegister ? newUserURL || callbackURL : callbackURL;
	}
	throw c.redirect(toRedirectTo);
});
function sanitize(input) {
	return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/&(?!amp;|lt;|gt;|quot;|#39;|#x[0-9a-fA-F]+;|#[0-9]+;)/g, "&amp;");
}
var html = (options, code = "Unknown", description = null) => {
	const custom = options.onAPIError?.customizeDefaultErrorPage;
	return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Error</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-family: ${custom?.font?.defaultFamily || "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"};
        background: ${custom?.colors?.background || "var(--background)"};
        color: var(--foreground);
        margin: 0;
      }
      :root,
      :host {
        --spacing: 0.25rem;
        --container-md: 28rem;
        --text-sm: ${custom?.size?.textSm || "0.875rem"};
        --text-sm--line-height: calc(1.25 / 0.875);
        --text-2xl: ${custom?.size?.text2xl || "1.5rem"};
        --text-2xl--line-height: calc(2 / 1.5);
        --text-4xl: ${custom?.size?.text4xl || "2.25rem"};
        --text-4xl--line-height: calc(2.5 / 2.25);
        --text-6xl: ${custom?.size?.text6xl || "3rem"};
        --text-6xl--line-height: 1;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        --default-transition-duration: 150ms;
        --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        --radius: ${custom?.size?.radiusSm || "0.625rem"};
        --default-mono-font-family: ${custom?.font?.monoFamily || "var(--font-geist-mono)"};
        --primary: ${custom?.colors?.primary || "black"};
        --primary-foreground: ${custom?.colors?.primaryForeground || "white"};
        --background: ${custom?.colors?.background || "white"};
        --foreground: ${custom?.colors?.foreground || "oklch(0.271 0 0)"};
        --border: ${custom?.colors?.border || "oklch(0.89 0 0)"};
        --destructive: ${custom?.colors?.destructive || "oklch(0.55 0.15 25.723)"};
        --muted-foreground: ${custom?.colors?.mutedForeground || "oklch(0.545 0 0)"};
        --corner-border: ${custom?.colors?.cornerBorder || "#404040"};
      }

      button, .btn {
        cursor: pointer;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        transition: all var(--default-transition-duration)
          var(--default-transition-timing-function);
      }
      button:hover, .btn:hover {
        opacity: 0.8;
      }

      @media (prefers-color-scheme: dark) {
        :root,
        :host {
          --primary: ${custom?.colors?.primary || "white"};
          --primary-foreground: ${custom?.colors?.primaryForeground || "black"};
          --background: ${custom?.colors?.background || "oklch(0.15 0 0)"};
          --foreground: ${custom?.colors?.foreground || "oklch(0.98 0 0)"};
          --border: ${custom?.colors?.border || "oklch(0.27 0 0)"};
          --destructive: ${custom?.colors?.destructive || "oklch(0.65 0.15 25.723)"};
          --muted-foreground: ${custom?.colors?.mutedForeground || "oklch(0.65 0 0)"};
          --corner-border: ${custom?.colors?.cornerBorder || "#a0a0a0"};
        }
      }
      @media (max-width: 640px) {
        :root, :host {
          --text-6xl: 2.5rem;
          --text-2xl: 1.25rem;
          --text-sm: 0.8125rem;
        }
      }
      @media (max-width: 480px) {
        :root, :host {
          --text-6xl: 2rem;
          --text-2xl: 1.125rem;
        }
      }
    </style>
  </head>
  <body style="width: 100vw; min-height: 100vh; overflow-x: hidden; overflow-y: auto;">
    <div
        style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 1rem;
        "
        >
${custom?.disableBackgroundGrid ? "" : `
      <div
        style="
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, ${custom?.colors?.gridColor || "var(--border)"} 1px, transparent 1px),
            linear-gradient(to bottom, ${custom?.colors?.gridColor || "var(--border)"} 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.6;
          pointer-events: none;
          width: 100vw;
          height: 100vh;
        "
      ></div>
      <div
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${custom?.colors?.background || "var(--background)"};
          mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          -webkit-mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          pointer-events: none;
        "
      ></div>
`}

<div
  style="
    position: relative;
    z-index: 10;
    border: 2px solid var(--border);
    background: ${custom?.colors?.cardBackground || "var(--background)"};
    padding: 1.5rem;
    max-width: 42rem;
    width: 100%;
  "
>
    ${custom?.disableCornerDecorations ? "" : `
        <!-- Corner decorations -->
        <div
          style="
            position: absolute;
            top: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            top: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>
  
        <div
          style="
            position: absolute;
            bottom: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            bottom: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>`}

        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div style="margin-bottom: 1.5rem;">
            <div
              style="
                display: inline-block;
                border: 2px solid ${custom?.disableTitleBorder ? "transparent" : custom?.colors?.titleBorder || "var(--destructive)"};
                padding: 0.375rem 1rem;
              "
            >
              <h1
                style="
                  font-size: var(--text-6xl);
                  font-weight: var(--font-weight-semibold);
                  color: ${custom?.colors?.titleColor || "var(--foreground)"};
                  letter-spacing: -0.02em;
                  margin: 0;
                "
              >
                ERROR
              </h1>
            </div>
            <div
              style="
                height: 2px;
                background-color: var(--border);
                width: calc(100% + 3rem);
                margin-left: -1.5rem;
                margin-top: 1.5rem;
              "
            ></div>
          </div>

          <h2
            style="
              font-size: var(--text-2xl);
              font-weight: var(--font-weight-semibold);
              color: var(--foreground);
              margin: 0 0 1rem;
            "
          >
            Something went wrong
          </h2>

          <div
            style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                border: 2px solid var(--border);
                background-color: var(--muted);
                padding: 0.375rem 0.75rem;
                margin: 0 0 1rem;
                flex-wrap: wrap;
                justify-content: center;
            "
            >
            <span
                style="
                font-size: 0.75rem;
                color: var(--muted-foreground);
                font-weight: var(--font-weight-semibold);
                "
            >
                CODE:
            </span>
            <span
                style="
                font-size: var(--text-sm);
                font-family: var(--default-mono-font-family, monospace);
                color: var(--foreground);
                word-break: break-all;
                "
            >
                ${sanitize(code)}
            </span>
            </div>

          <p
            style="
              color: var(--muted-foreground);
              max-width: 28rem;
              margin: 0 auto;
              font-size: var(--text-sm);
              line-height: 1.5;
              text-wrap: pretty;
            "
          >
            ${!description ? `We encountered an unexpected error. Please try again or return to the home page. If you're a developer, you can find <a href='https://better-auth.com/docs/reference/errors/${encodeURIComponent(code)}' target='_blank' rel="noopener noreferrer" style='color: var(--foreground); text-decoration: underline;'>more information about the error</a>.` : description}
          </p>
        </div>

        <div
          style="
            display: flex;
            gap: 0.75rem;
            margin-top: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
          "
        >
          <a
            href="/"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: var(--primary);
                color: var(--primary-foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Go Home
            </div>
          </a>
          <a
            href="https://better-auth.com/docs/reference/errors/${encodeURIComponent(code)}?askai=${encodeURIComponent(`What does the error code ${code} mean?`)}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: transparent;
                color: var(--foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Ask AI
            </div>
          </a>
        </div>
      </div>
    </div>
  </body>
</html>`;
};
var error = createAuthEndpoint("/error", {
	method: "GET",
	metadata: {
		...HIDE_METADATA,
		openapi: {
			description: "Displays an error page",
			responses: { "200": {
				description: "Success",
				content: { "text/html": { schema: {
					type: "string",
					description: "The HTML content of the error page"
				} } }
			} }
		}
	}
}, async (c) => {
	const url = new URL(c.request?.url || "");
	const unsanitizedCode = url.searchParams.get("error") || "UNKNOWN";
	const unsanitizedDescription = url.searchParams.get("error_description") || null;
	const safeCode = /^[\'A-Za-z0-9_-]+$/.test(unsanitizedCode || "") ? unsanitizedCode : "UNKNOWN";
	const safeDescription = unsanitizedDescription ? sanitize(unsanitizedDescription) : null;
	const queryParams = new URLSearchParams();
	queryParams.set("error", safeCode);
	if (unsanitizedDescription) queryParams.set("error_description", unsanitizedDescription);
	const options = c.context.options;
	const errorURL = options.onAPIError?.errorURL;
	if (errorURL) return new Response(null, {
		status: 302,
		headers: { Location: `${errorURL}${errorURL.includes("?") ? "&" : "?"}${queryParams.toString()}` }
	});
	if (isProduction && !options.onAPIError?.customizeDefaultErrorPage) return new Response(null, {
		status: 302,
		headers: { Location: `/?${queryParams.toString()}` }
	});
	return new Response(html(c.context.options, safeCode, safeDescription), { headers: { "Content-Type": "text/html" } });
});
var ok = createAuthEndpoint("/ok", {
	method: "GET",
	metadata: {
		...HIDE_METADATA,
		openapi: {
			description: "Check if the API is working",
			responses: { "200": {
				description: "API is working",
				content: { "application/json": { schema: {
					type: "object",
					properties: { ok: {
						type: "boolean",
						description: "Indicates if the API is working"
					} },
					required: ["ok"]
				} } }
			} }
		}
	}
}, async (ctx) => {
	return ctx.json({ ok: true });
});
async function validatePassword(ctx, data) {
	const credentialAccount = (await ctx.context.internalAdapter.findAccounts(data.userId))?.find((account) => account.providerId === "credential");
	const currentPassword = credentialAccount?.password;
	if (!credentialAccount || !currentPassword) return false;
	return await ctx.context.password.verify({
		hash: currentPassword,
		password: data.password
	});
}
async function checkPassword(userId, c) {
	const credentialAccount = (await c.context.internalAdapter.findAccounts(userId))?.find((account) => account.providerId === "credential");
	const currentPassword = credentialAccount?.password;
	const password = c.body.password;
	if (!credentialAccount || !currentPassword || !password) {
		if (password) await c.context.password.hash(password);
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	}
	if (!await c.context.password.verify({
		hash: currentPassword,
		password
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	return true;
}
function redirectError(ctx, callbackURL, query) {
	const url = callbackURL ? new URL(callbackURL, ctx.baseURL) : new URL(`${ctx.baseURL}/error`);
	if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
	return url.href;
}
function redirectCallback(ctx, callbackURL, query) {
	const url = new URL(callbackURL, ctx.baseURL);
	if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
	return url.href;
}
var requestPasswordReset = createAuthEndpoint("/request-password-reset", {
	method: "POST",
	body: object({
		/**
		* The email address of the user to send a password reset email to.
		*/
		email: email().meta({ description: "The email address of the user to send a password reset email to" }),
		/**
		* The URL to redirect the user to reset their password.
		* If the token isn't valid or expired, it'll be redirected with a query parameter `?
		* error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?
		* token=VALID_TOKEN
		*/
		redirectTo: string().meta({ description: "The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN" }).optional()
	}),
	metadata: { openapi: {
		operationId: "requestPasswordReset",
		description: "Send a password reset email to the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					status: { type: "boolean" },
					message: { type: "string" }
				}
			} } }
		} }
	} },
	use: [originCheck((ctx) => ctx.body.redirectTo)]
}, async (ctx) => {
	if (!ctx.context.options.emailAndPassword?.sendResetPassword) {
		ctx.context.logger.error("Reset password isn't enabled.Please pass an emailAndPassword.sendResetPassword function in your auth config!");
		throw APIError.from("BAD_REQUEST", {
			message: "Reset password isn't enabled",
			code: "RESET_PASSWORD_DISABLED"
		});
	}
	const { email, redirectTo } = ctx.body;
	const user = await ctx.context.internalAdapter.findUserByEmail(email, { includeAccounts: true });
	if (!user) {
		/**
		* We simulate the verification token generation and the database lookup
		* to mitigate timing attacks.
		*/
		generateId(24);
		await ctx.context.internalAdapter.findVerificationValue("dummy-verification-token");
		ctx.context.logger.warn("Reset Password: User not found");
		return ctx.json({
			status: true,
			message: "If this email exists in our system, check your email for the reset link"
		});
	}
	const expiresAt = getDate(ctx.context.options.emailAndPassword.resetPasswordTokenExpiresIn || 3600, "sec");
	const verificationToken = generateId(24);
	await ctx.context.internalAdapter.createVerificationValue({
		value: user.user.id,
		identifier: `reset-password:${verificationToken}`,
		expiresAt
	});
	const callbackURL = redirectTo ? encodeURIComponent(redirectTo) : "";
	const url = `${ctx.context.baseURL}/reset-password/${verificationToken}?callbackURL=${callbackURL}`;
	await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailAndPassword.sendResetPassword({
		user: user.user,
		url,
		token: verificationToken
	}, ctx.request));
	return ctx.json({
		status: true,
		message: "If this email exists in our system, check your email for the reset link"
	});
});
var requestPasswordResetCallback = createAuthEndpoint("/reset-password/:token", {
	method: "GET",
	operationId: "resetPasswordCallback",
	query: object({ callbackURL: string().meta({ description: "The URL to redirect the user to reset their password" }) }),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		operationId: "resetPasswordCallback",
		description: "Redirects the user to the callback URL with the token",
		parameters: [{
			name: "token",
			in: "path",
			required: true,
			description: "The token to reset the password",
			schema: { type: "string" }
		}, {
			name: "callbackURL",
			in: "query",
			required: true,
			description: "The URL to redirect the user to reset their password",
			schema: { type: "string" }
		}],
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { token: { type: "string" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const { token } = ctx.params;
	const { callbackURL } = ctx.query;
	if (!token || !callbackURL) throw ctx.redirect(redirectError(ctx.context, callbackURL, { error: "INVALID_TOKEN" }));
	const verification = await ctx.context.internalAdapter.findVerificationValue(`reset-password:${token}`);
	if (!verification || verification.expiresAt < /* @__PURE__ */ new Date()) throw ctx.redirect(redirectError(ctx.context, callbackURL, { error: "INVALID_TOKEN" }));
	throw ctx.redirect(redirectCallback(ctx.context, callbackURL, { token }));
});
var resetPassword = createAuthEndpoint("/reset-password", {
	method: "POST",
	operationId: "resetPassword",
	query: object({ token: string().optional() }).optional(),
	body: object({
		newPassword: string().meta({ description: "The new password to set" }),
		token: string().meta({ description: "The token to reset the password" }).optional()
	}),
	metadata: { openapi: {
		operationId: "resetPassword",
		description: "Reset the password for a user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const token = ctx.body.token || ctx.query?.token;
	if (!token) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_TOKEN);
	const { newPassword } = ctx.body;
	const minLength = ctx.context.password?.config.minPasswordLength;
	const maxLength = ctx.context.password?.config.maxPasswordLength;
	if (newPassword.length < minLength) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
	if (newPassword.length > maxLength) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
	const id = `reset-password:${token}`;
	const verification = await ctx.context.internalAdapter.consumeVerificationValue(id);
	if (!verification) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_TOKEN);
	const userId = verification.value;
	const hashedPassword = await ctx.context.password.hash(newPassword);
	if (!(await ctx.context.internalAdapter.findAccounts(userId)).find((ac) => ac.providerId === "credential")) await ctx.context.internalAdapter.createAccount({
		userId,
		providerId: "credential",
		password: hashedPassword,
		accountId: userId
	});
	else await ctx.context.internalAdapter.updatePassword(userId, hashedPassword);
	if (ctx.context.options.emailAndPassword?.onPasswordReset) {
		const user = await ctx.context.internalAdapter.findUserById(userId);
		if (user) await ctx.context.options.emailAndPassword.onPasswordReset({ user }, ctx.request);
	}
	if (ctx.context.options.emailAndPassword?.revokeSessionsOnPasswordReset) await ctx.context.internalAdapter.deleteUserSessions(userId);
	return ctx.json({ status: true });
});
var verifyPassword$1 = createAuthEndpoint("/verify-password", {
	method: "POST",
	body: object({ 
	/**
	* The password to verify
	*/
password: string().meta({ description: "The password to verify" }) }),
	metadata: {
		scope: "server",
		openapi: {
			operationId: "verifyPassword",
			description: "Verify the current user's password",
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { status: { type: "boolean" } }
				} } }
			} }
		}
	},
	use: [sensitiveSessionMiddleware]
}, async (ctx) => {
	const { password } = ctx.body;
	const session = ctx.context.session;
	if (!await validatePassword(ctx, {
		password,
		userId: session.user.id
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	return ctx.json({ status: true });
});
var socialSignInBodySchema = object({
	/**
	* Callback URL to redirect to after the user
	* has signed in.
	*/
	callbackURL: string().meta({ description: "Callback URL to redirect to after the user has signed in" }).optional(),
	/**
	* callback url to redirect if the user is newly registered.
	*
	* useful if you have different routes for existing users and new users
	*/
	newUserCallbackURL: string().optional(),
	/**
	* Callback url to redirect to if an error happens
	*
	* If it's initiated from the client sdk this defaults to
	* the current url.
	*/
	errorCallbackURL: string().meta({ description: "Callback URL to redirect to if an error happens" }).optional(),
	/**
	* OAuth2 provider to use`
	*/
	provider: SocialProviderListEnum,
	/**
	* Disable automatic redirection to the provider
	*
	* This is useful if you want to handle the redirection
	* yourself like in a popup or a different tab.
	*/
	disableRedirect: boolean().meta({ description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself" }).optional(),
	/**
	* ID token from the provider
	*
	* This is used to sign in the user
	* if the user is already signed in with the
	* provider in the frontend.
	*
	* Only applicable if the provider supports
	* it. Currently only `apple` and `google` is
	* supported out of the box.
	*/
	idToken: optional(object({
		/**
		* ID token from the provider
		*/
		token: string().meta({ description: "ID token from the provider" }),
		/**
		* The nonce used to generate the token
		*/
		nonce: string().meta({ description: "Nonce used to generate the token" }).optional(),
		/**
		* Access token from the provider
		*/
		accessToken: string().meta({ description: "Access token from the provider" }).optional(),
		/**
		* Refresh token from the provider
		*/
		refreshToken: string().meta({ description: "Refresh token from the provider" }).optional(),
		/**
		* Expiry date of the token
		*/
		expiresAt: number().meta({ description: "Expiry date of the token" }).optional(),
		/**
		* The user object from the provider.
		* This is only available for some providers like Apple.
		*/
		user: object({
			name: object({
				firstName: string().optional(),
				lastName: string().optional()
			}).optional(),
			email: string().optional()
		}).meta({ description: "The user object from the provider. Only available for some providers like Apple." }).optional()
	})),
	scopes: array(string()).meta({ description: "Array of scopes to request from the provider. This will override the default scopes passed." }).optional(),
	/**
	* Explicitly request sign-up
	*
	* Should be used to allow sign up when
	* disableImplicitSignUp for this provider is
	* true
	*/
	requestSignUp: boolean().meta({ description: "Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider" }).optional(),
	/**
	* The login hint to use for the authorization code request
	*/
	loginHint: string().meta({ description: "The login hint to use for the authorization code request" }).optional(),
	/**
	* Additional data to be passed through the OAuth flow
	*/
	additionalData: record(string(), any()).optional().meta({ description: "Additional data to be passed through the OAuth flow" })
});
var signInSocial = () => createAuthEndpoint("/sign-in/social", {
	method: "POST",
	operationId: "socialSignIn",
	body: socialSignInBodySchema,
	metadata: {
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			description: "Sign in with a social provider",
			operationId: "socialSignIn",
			responses: { "200": {
				description: "Success - Returns session details (idToken branch) or an authorize URL (redirect branch)",
				content: { "application/json": { schema: {
					type: "object",
					description: "Returns session details when idToken is provided, or an authorize URL otherwise",
					properties: {
						token: { type: "string" },
						user: {
							type: "object",
							$ref: "#/components/schemas/User"
						},
						url: { type: "string" },
						redirect: { type: "boolean" }
					},
					required: ["redirect"]
				} } }
			} }
		}
	}
}, async (c) => {
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.body.provider });
	if (!provider) {
		c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", { provider: c.body.provider });
		throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	}
	if (c.body.idToken) {
		if (!provider.verifyIdToken) {
			c.context.logger.error("Provider does not support id token verification", { provider: c.body.provider });
			throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED);
		}
		const { token, nonce } = c.body.idToken;
		if (!await provider.verifyIdToken(token, nonce, c)) {
			c.context.logger.warn("Invalid id token", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_TOKEN);
		}
		const userInfo = await provider.getUserInfo({
			idToken: token,
			accessToken: c.body.idToken.accessToken,
			refreshToken: c.body.idToken.refreshToken,
			user: c.body.idToken.user
		});
		if (!userInfo || !userInfo?.user) {
			c.context.logger.error("Failed to get user info", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
		}
		if (!userInfo.user.email) {
			c.context.logger.error(missingEmailLogMessage(c.body.provider, { source: "id_token" }), { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND);
		}
		const data = await handleOAuthUserInfo(c, {
			userInfo: {
				...userInfo.user,
				email: userInfo.user.email,
				id: String(userInfo.user.id),
				name: userInfo.user.name || "",
				image: userInfo.user.image,
				emailVerified: userInfo.user.emailVerified || false
			},
			account: {
				providerId: provider.id,
				accountId: String(userInfo.user.id),
				accessToken: c.body.idToken.accessToken
			},
			callbackURL: c.body.callbackURL,
			disableSignUp: provider.disableImplicitSignUp && !c.body.requestSignUp || provider.disableSignUp
		});
		if (data.error) throw APIError.from("UNAUTHORIZED", {
			message: data.error,
			code: "OAUTH_LINK_ERROR"
		});
		await setSessionCookie(c, data.data);
		return c.json({
			redirect: false,
			token: data.data.session.token,
			url: void 0,
			user: parseUserOutput(c.context.options, data.data.user)
		});
	}
	const { codeVerifier, state } = await generateState(c, void 0, c.body.additionalData);
	const url = await provider.createAuthorizationURL({
		state,
		codeVerifier,
		redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
		scopes: c.body.scopes,
		loginHint: c.body.loginHint
	});
	if (!c.body.disableRedirect) c.setHeader("Location", url.toString());
	return c.json({
		url: url.toString(),
		redirect: !c.body.disableRedirect
	});
});
var signInEmail = () => createAuthEndpoint("/sign-in/email", {
	method: "POST",
	operationId: "signInEmail",
	use: [formCsrfMiddleware],
	cloneRequest: true,
	body: object({
		/**
		* Email of the user
		*/
		email: string().meta({ description: "Email of the user" }),
		/**
		* Password of the user
		*/
		password: string().meta({ description: "Password of the user" }),
		/**
		* Callback URL to use as a redirect for email
		* verification and for possible redirects
		*/
		callbackURL: string().meta({ description: "Callback URL to use as a redirect for email verification" }).optional(),
		/**
		* If this is false, the session will not be remembered
		* @default true
		*/
		rememberMe: boolean().meta({ description: "If this is false, the session will not be remembered. Default is `true`." }).default(true).optional()
	}),
	metadata: {
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			operationId: "signInEmail",
			description: "Sign in with email and password",
			responses: { "200": {
				description: "Success - Returns either session details or redirect URL",
				content: { "application/json": { schema: {
					type: "object",
					description: "Session response when idToken is provided",
					properties: {
						redirect: {
							type: "boolean",
							enum: [false]
						},
						token: {
							type: "string",
							description: "Session token"
						},
						url: {
							type: "string",
							nullable: true
						},
						user: {
							type: "object",
							$ref: "#/components/schemas/User"
						}
					},
					required: [
						"redirect",
						"token",
						"user"
					]
				} } }
			} }
		}
	}
}, async (ctx) => {
	if (!ctx.context.options?.emailAndPassword?.enabled) {
		ctx.context.logger.error("Email and password is not enabled. Make sure to enable it in the options on you `auth.ts` file. Check `https://better-auth.com/docs/authentication/email-password` for more!");
		throw APIError.from("BAD_REQUEST", {
			code: "EMAIL_PASSWORD_DISABLED",
			message: "Email and password is not enabled"
		});
	}
	const { email: email$1, password } = ctx.body;
	if (!email().safeParse(email$1).success) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_EMAIL);
	const user = await ctx.context.internalAdapter.findUserByEmail(email$1, { includeAccounts: true });
	if (!user) {
		await ctx.context.password.hash(password);
		ctx.context.logger.warn("User not found");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	const credentialAccount = user.accounts.find((a) => a.providerId === "credential");
	if (!credentialAccount) {
		await ctx.context.password.hash(password);
		ctx.context.logger.warn("Credential account not found");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	const currentPassword = credentialAccount?.password;
	if (!currentPassword) {
		await ctx.context.password.hash(password);
		ctx.context.logger.warn("Password not found");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	if (!await ctx.context.password.verify({
		hash: currentPassword,
		password
	})) {
		ctx.context.logger.warn("Invalid password");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	if (ctx.context.options?.emailAndPassword?.requireEmailVerification && !user.user.emailVerified) {
		if (!ctx.context.options?.emailVerification?.sendVerificationEmail) throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
		if (ctx.context.options?.emailVerification?.sendOnSignIn) {
			const token = await createEmailVerificationToken(ctx.context.secret, user.user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
			const callbackURL = ctx.body.callbackURL ? encodeURIComponent(ctx.body.callbackURL) : encodeURIComponent("/");
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
			await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
				user: user.user,
				url,
				token
			}, safeCloneRequest(ctx.request)));
		}
		throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
	}
	const session = await ctx.context.internalAdapter.createSession(user.user.id, ctx.body.rememberMe === false);
	if (!session) {
		ctx.context.logger.error("Failed to create session");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
	}
	await setSessionCookie(ctx, {
		session,
		user: user.user
	}, ctx.body.rememberMe === false);
	if (ctx.body.callbackURL) ctx.setHeader("Location", ctx.body.callbackURL);
	return ctx.json({
		redirect: !!ctx.body.callbackURL,
		token: session.token,
		url: ctx.body.callbackURL,
		user: parseUserOutput(ctx.context.options, user.user)
	});
});
var signOut = createAuthEndpoint("/sign-out", {
	method: "POST",
	operationId: "signOut",
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "signOut",
		description: "Sign out the current user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { success: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
	if (sessionCookieToken) try {
		await ctx.context.internalAdapter.deleteSession(sessionCookieToken);
	} catch (e) {
		ctx.context.logger.error("Failed to delete session from database", e);
	}
	deleteSessionCookie(ctx);
	return ctx.json({ success: true });
});
var signUpEmailBodySchema = object({
	name: string(),
	email: email(),
	password: string().nonempty(),
	image: string().optional(),
	callbackURL: string().optional(),
	rememberMe: boolean().optional()
}).and(record(string(), any()));
var signUpEmail = () => createAuthEndpoint("/sign-up/email", {
	method: "POST",
	operationId: "signUpWithEmailAndPassword",
	use: [formCsrfMiddleware],
	body: signUpEmailBodySchema,
	cloneRequest: true,
	metadata: {
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			operationId: "signUpWithEmailAndPassword",
			description: "Sign up a user using email and password",
			requestBody: { content: { "application/json": { schema: {
				type: "object",
				properties: {
					name: {
						type: "string",
						description: "The name of the user"
					},
					email: {
						type: "string",
						description: "The email of the user"
					},
					password: {
						type: "string",
						description: "The password of the user"
					},
					image: {
						type: "string",
						description: "The profile image URL of the user"
					},
					callbackURL: {
						type: "string",
						description: "The URL to use for email verification callback"
					},
					rememberMe: {
						type: "boolean",
						description: "If this is false, the session will not be remembered. Default is `true`."
					}
				},
				required: [
					"name",
					"email",
					"password"
				]
			} } } },
			responses: {
				"200": {
					description: "Successfully created user",
					content: { "application/json": { schema: {
						type: "object",
						properties: {
							token: {
								type: "string",
								nullable: true,
								description: "Authentication token for the session"
							},
							user: {
								type: "object",
								properties: {
									id: {
										type: "string",
										description: "The unique identifier of the user"
									},
									email: {
										type: "string",
										format: "email",
										description: "The email address of the user"
									},
									name: {
										type: "string",
										description: "The name of the user"
									},
									image: {
										type: "string",
										format: "uri",
										nullable: true,
										description: "The profile image URL of the user"
									},
									emailVerified: {
										type: "boolean",
										description: "Whether the email has been verified"
									},
									createdAt: {
										type: "string",
										format: "date-time",
										description: "When the user was created"
									},
									updatedAt: {
										type: "string",
										format: "date-time",
										description: "When the user was last updated"
									}
								},
								required: [
									"id",
									"email",
									"name",
									"emailVerified",
									"createdAt",
									"updatedAt"
								]
							}
						},
						required: ["user"]
					} } }
				},
				"422": {
					description: "Unprocessable Entity. User already exists or failed to create user.",
					content: { "application/json": { schema: {
						type: "object",
						properties: { message: { type: "string" } }
					} } }
				}
			}
		}
	}
}, async (ctx) => {
	return runWithTransaction(ctx.context.adapter, async () => {
		if (!ctx.context.options.emailAndPassword?.enabled || ctx.context.options.emailAndPassword?.disableSignUp) throw APIError.from("BAD_REQUEST", {
			message: "Email and password sign up is not enabled",
			code: "EMAIL_PASSWORD_SIGN_UP_DISABLED"
		});
		const body = ctx.body;
		const { name, email: email$2, password, image, callbackURL: _callbackURL, rememberMe, ...rest } = body;
		if (!email().safeParse(email$2).success) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_EMAIL);
		if (!password || typeof password !== "string") throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
		const minPasswordLength = ctx.context.password.config.minPasswordLength;
		if (password.length < minPasswordLength) {
			ctx.context.logger.warn("Password is too short");
			throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
		}
		const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
		if (password.length > maxPasswordLength) {
			ctx.context.logger.warn("Password is too long");
			throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
		}
		const shouldReturnGenericDuplicateResponse = ctx.context.options.emailAndPassword.requireEmailVerification || ctx.context.options.emailAndPassword.autoSignIn === false;
		const shouldSkipAutoSignIn = ctx.context.options.emailAndPassword.autoSignIn === false || shouldReturnGenericDuplicateResponse;
		const additionalUserFields = parseUserInput(ctx.context.options, rest, "create");
		const normalizedEmail = email$2.toLowerCase();
		const dbUser = await ctx.context.internalAdapter.findUserByEmail(normalizedEmail);
		if (dbUser?.user) {
			ctx.context.logger.info(`Sign-up attempt for existing email: ${email$2}`);
			if (shouldReturnGenericDuplicateResponse) {
				/**
				* Hash the password to reduce timing differences
				* between existing and non-existing emails.
				*/
				await ctx.context.password.hash(password);
				if (ctx.context.options.emailAndPassword?.onExistingUserSignUp) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailAndPassword.onExistingUserSignUp({ user: dbUser.user }, safeCloneRequest(ctx.request)));
				const now = /* @__PURE__ */ new Date();
				const generatedId = ctx.context.generateId({ model: "user" }) || generateId();
				const coreFields = {
					name,
					email: normalizedEmail,
					emailVerified: false,
					image: image ?? null,
					createdAt: now,
					updatedAt: now
				};
				const customSyntheticUser = ctx.context.options.emailAndPassword?.customSyntheticUser;
				let syntheticUser;
				if (customSyntheticUser) {
					const additionalFieldKeys = Object.keys(ctx.context.options.user?.additionalFields ?? {});
					const additionalFields = {};
					for (const key of additionalFieldKeys) if (key in additionalUserFields) additionalFields[key] = additionalUserFields[key];
					const customResult = customSyntheticUser({
						coreFields,
						additionalFields,
						id: generatedId
					});
					syntheticUser = buildSyntheticUserOutput(ctx.context.options, customResult);
				} else syntheticUser = buildSyntheticUserOutput(ctx.context.options, {
					...coreFields,
					...additionalUserFields,
					id: generatedId
				});
				return ctx.json({
					token: null,
					user: parseUserOutput(ctx.context.options, syntheticUser)
				});
			}
			throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL);
		}
		/**
		* Hash the password
		*
		* This is done prior to creating the user
		* to ensure that any plugin that
		* may break the hashing should break
		* before the user is created.
		*/
		const hash = await ctx.context.password.hash(password);
		let createdUser;
		try {
			createdUser = await ctx.context.internalAdapter.createUser({
				email: normalizedEmail,
				name,
				image,
				...additionalUserFields,
				emailVerified: false
			});
			if (!createdUser) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		} catch (e) {
			if (isDevelopment()) ctx.context.logger.error("Failed to create user", e);
			if (isAPIError(e)) throw e;
			ctx.context.logger?.error("Failed to create user", e);
			throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		}
		if (!createdUser) throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		await ctx.context.internalAdapter.linkAccount({
			userId: createdUser.id,
			providerId: "credential",
			accountId: createdUser.id,
			password: hash
		});
		if (ctx.context.options.emailVerification?.sendOnSignUp ?? ctx.context.options.emailAndPassword.requireEmailVerification) {
			const token = await createEmailVerificationToken(ctx.context.secret, createdUser.email, void 0, ctx.context.options.emailVerification?.expiresIn);
			const callbackURL = body.callbackURL ? encodeURIComponent(body.callbackURL) : encodeURIComponent("/");
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
			if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
				user: createdUser,
				url,
				token
			}, safeCloneRequest(ctx.request)));
		}
		if (shouldSkipAutoSignIn) return ctx.json({
			token: null,
			user: parseUserOutput(ctx.context.options, createdUser)
		});
		const session = await ctx.context.internalAdapter.createSession(createdUser.id, rememberMe === false);
		if (!session) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
		await setSessionCookie(ctx, {
			session,
			user: createdUser
		}, rememberMe === false);
		return ctx.json({
			token: session.token,
			user: parseUserOutput(ctx.context.options, createdUser)
		});
	});
});
var updateSessionBodySchema = record(string().meta({ description: "Field name must be a string" }), any());
var updateSession = () => createAuthEndpoint("/update-session", {
	method: "POST",
	operationId: "updateSession",
	body: updateSessionBodySchema,
	use: [sessionMiddleware],
	metadata: {
		$Infer: { body: {} },
		openapi: {
			operationId: "updateSession",
			description: "Update the current session",
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { session: {
						type: "object",
						$ref: "#/components/schemas/Session"
					} }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const body = ctx.body;
	if (typeof body !== "object" || Array.isArray(body)) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.BODY_MUST_BE_AN_OBJECT);
	const session = ctx.context.session;
	const additionalFields = parseSessionInput(ctx.context.options, body, "update");
	if (Object.keys(additionalFields).length === 0) throw APIError.fromStatus("BAD_REQUEST", { message: "No fields to update" });
	const updatedSession = await ctx.context.internalAdapter.updateSession(session.session.token, {
		...additionalFields,
		updatedAt: /* @__PURE__ */ new Date()
	});
	if (!updatedSession && isStateful(ctx)) {
		deleteSessionCookie(ctx);
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
	}
	const newSession = updatedSession ?? {
		...session.session,
		...additionalFields,
		updatedAt: /* @__PURE__ */ new Date()
	};
	await setSessionCookie(ctx, {
		session: newSession,
		user: session.user
	});
	return ctx.json({ session: parseSessionOutput(ctx.context.options, newSession) });
});
var updateUserBodySchema = record(string().meta({ description: "Field name must be a string" }), any());
var updateUser = () => createAuthEndpoint("/update-user", {
	method: "POST",
	operationId: "updateUser",
	body: updateUserBodySchema,
	use: [sessionMiddleware],
	metadata: {
		$Infer: { body: {} },
		openapi: {
			operationId: "updateUser",
			description: "Update the current user",
			requestBody: { content: { "application/json": { schema: {
				type: "object",
				properties: {
					name: {
						type: "string",
						description: "The name of the user"
					},
					image: {
						type: "string",
						description: "The image of the user",
						nullable: true
					}
				}
			} } } },
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { user: {
						type: "object",
						$ref: "#/components/schemas/User"
					} }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const body = ctx.body;
	if (typeof body !== "object" || Array.isArray(body)) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.BODY_MUST_BE_AN_OBJECT);
	if (body.email) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_CAN_NOT_BE_UPDATED);
	const { name, image, ...rest } = body;
	const session = ctx.context.session;
	const additionalFields = parseUserInput(ctx.context.options, rest, "update");
	if (image === void 0 && name === void 0 && Object.keys(additionalFields).length === 0) throw APIError.fromStatus("BAD_REQUEST", { message: "No fields to update" });
	const updatedUser = await ctx.context.internalAdapter.updateUser(session.user.id, {
		name,
		image,
		...additionalFields
	}) ?? {
		...session.user,
		...name !== void 0 && { name },
		...image !== void 0 && { image },
		...additionalFields
	};
	/**
	* Update the session cookie with the new user data
	*/
	await setSessionCookie(ctx, {
		session: session.session,
		user: updatedUser
	});
	return ctx.json({ status: true });
});
var changePassword = createAuthEndpoint("/change-password", {
	method: "POST",
	operationId: "changePassword",
	body: object({
		/**
		* The new password to set
		*/
		newPassword: string().meta({ description: "The new password to set" }),
		/**
		* The current password of the user
		*/
		currentPassword: string().meta({ description: "The current password is required" }),
		/**
		* revoke all sessions that are not the
		* current one logged in by the user
		*/
		revokeOtherSessions: boolean().meta({ description: "Must be a boolean value" }).optional()
	}),
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		operationId: "changePassword",
		description: "Change the password of the user",
		responses: { "200": {
			description: "Password successfully changed",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					token: {
						type: "string",
						nullable: true,
						description: "New session token if other sessions were revoked"
					},
					user: {
						type: "object",
						properties: {
							id: {
								type: "string",
								description: "The unique identifier of the user"
							},
							email: {
								type: "string",
								format: "email",
								description: "The email address of the user"
							},
							name: {
								type: "string",
								description: "The name of the user"
							},
							image: {
								type: "string",
								format: "uri",
								nullable: true,
								description: "The profile image URL of the user"
							},
							emailVerified: {
								type: "boolean",
								description: "Whether the email has been verified"
							},
							createdAt: {
								type: "string",
								format: "date-time",
								description: "When the user was created"
							},
							updatedAt: {
								type: "string",
								format: "date-time",
								description: "When the user was last updated"
							}
						},
						required: [
							"id",
							"email",
							"name",
							"emailVerified",
							"createdAt",
							"updatedAt"
						]
					}
				},
				required: ["user"]
			} } }
		} }
	} }
}, async (ctx) => {
	const { newPassword, currentPassword, revokeOtherSessions } = ctx.body;
	const session = ctx.context.session;
	const minPasswordLength = ctx.context.password.config.minPasswordLength;
	if (newPassword.length < minPasswordLength) {
		ctx.context.logger.warn("Password is too short");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
	}
	const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
	if (newPassword.length > maxPasswordLength) {
		ctx.context.logger.warn("Password is too long");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
	}
	const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account) => account.providerId === "credential" && account.password);
	if (!account || !account.password) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND);
	const passwordHash = await ctx.context.password.hash(newPassword);
	if (!await ctx.context.password.verify({
		hash: account.password,
		password: currentPassword
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	await ctx.context.internalAdapter.updateAccount(account.id, { password: passwordHash });
	let token = null;
	if (revokeOtherSessions) {
		await ctx.context.internalAdapter.deleteUserSessions(session.user.id);
		const newSession = await ctx.context.internalAdapter.createSession(session.user.id);
		if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
		await setSessionCookie(ctx, {
			session: newSession,
			user: session.user
		});
		token = newSession.token;
	}
	return ctx.json({
		token,
		user: parseUserOutput(ctx.context.options, session.user)
	});
});
var setPassword = createAuthEndpoint.serverOnly({
	method: "POST",
	body: object({ 
	/**
	* The new password to set
	*/
newPassword: string().meta({ description: "The new password to set is required" }) }),
	use: [sensitiveSessionMiddleware]
}, async (ctx) => {
	const { newPassword } = ctx.body;
	const session = ctx.context.session;
	const minPasswordLength = ctx.context.password.config.minPasswordLength;
	if (newPassword.length < minPasswordLength) {
		ctx.context.logger.warn("Password is too short");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
	}
	const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
	if (newPassword.length > maxPasswordLength) {
		ctx.context.logger.warn("Password is too long");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
	}
	const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account) => account.providerId === "credential" && account.password);
	const passwordHash = await ctx.context.password.hash(newPassword);
	if (!account) {
		await ctx.context.internalAdapter.linkAccount({
			userId: session.user.id,
			providerId: "credential",
			accountId: session.user.id,
			password: passwordHash
		});
		return ctx.json({ status: true });
	}
	throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_ALREADY_SET);
});
var deleteUser = createAuthEndpoint("/delete-user", {
	method: "POST",
	use: [sensitiveSessionMiddleware],
	body: object({
		/**
		* The callback URL to redirect to after the user is deleted
		* this is only used on delete user callback
		*/
		callbackURL: string().meta({ description: "The callback URL to redirect to after the user is deleted" }).optional(),
		/**
		* The password of the user. If the password isn't provided, session freshness
		* will be checked.
		*/
		password: string().meta({ description: "The password of the user is required to delete the user" }).optional(),
		/**
		* The token to delete the user. If the token is provided, the user will be deleted
		*/
		token: string().meta({ description: "The token to delete the user is required" }).optional()
	}),
	metadata: { openapi: {
		operationId: "deleteUser",
		description: "Delete the user",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: {
				callbackURL: {
					type: "string",
					description: "The callback URL to redirect to after the user is deleted"
				},
				password: {
					type: "string",
					description: "The user's password. Required if session is not fresh"
				},
				token: {
					type: "string",
					description: "The deletion verification token"
				}
			}
		} } } },
		responses: { "200": {
			description: "User deletion processed successfully",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Indicates if the operation was successful"
					},
					message: {
						type: "string",
						enum: ["User deleted", "Verification email sent"],
						description: "Status message of the deletion process"
					}
				},
				required: ["success", "message"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.deleteUser?.enabled) {
		ctx.context.logger.error("Delete user is disabled. Enable it in the options");
		throw APIError.fromStatus("NOT_FOUND");
	}
	const session = ctx.context.session;
	if (ctx.body.password) {
		const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account) => account.providerId === "credential" && account.password);
		if (!account || !account.password) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND);
		if (!await ctx.context.password.verify({
			hash: account.password,
			password: ctx.body.password
		})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	}
	if (ctx.body.token) {
		await deleteUserCallback({
			...ctx,
			query: { token: ctx.body.token }
		});
		return ctx.json({
			success: true,
			message: "User deleted"
		});
	}
	if (ctx.context.options.user.deleteUser?.sendDeleteAccountVerification) {
		const token = generateRandomString(32, "0-9", "a-z");
		await ctx.context.internalAdapter.createVerificationValue({
			value: session.user.id,
			identifier: `delete-account-${token}`,
			expiresAt: new Date(Date.now() + (ctx.context.options.user.deleteUser?.deleteTokenExpiresIn || 86400) * 1e3)
		});
		const url = `${ctx.context.baseURL}/delete-user/callback?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
		await ctx.context.runInBackgroundOrAwait(ctx.context.options.user.deleteUser.sendDeleteAccountVerification({
			user: session.user,
			url,
			token
		}, ctx.request));
		return ctx.json({
			success: true,
			message: "Verification email sent"
		});
	}
	if (!ctx.body.password && ctx.context.sessionConfig.freshAge !== 0) {
		const createdAt = new Date(session.session.createdAt).getTime();
		const freshAge = ctx.context.sessionConfig.freshAge * 1e3;
		if (Date.now() - createdAt >= freshAge) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.SESSION_EXPIRED);
	}
	const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
	if (beforeDelete) await beforeDelete(session.user, ctx.request);
	await ctx.context.internalAdapter.deleteUser(session.user.id);
	await ctx.context.internalAdapter.deleteUserSessions(session.user.id);
	deleteSessionCookie(ctx);
	const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
	if (afterDelete) await afterDelete(session.user, ctx.request);
	return ctx.json({
		success: true,
		message: "User deleted"
	});
});
var deleteUserCallback = createAuthEndpoint("/delete-user/callback", {
	method: "GET",
	query: object({
		token: string().meta({ description: "The token to verify the deletion request" }),
		callbackURL: string().meta({ description: "The URL to redirect to after deletion" }).optional()
	}),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		description: "Callback to complete user deletion with verification token",
		responses: { "200": {
			description: "User successfully deleted",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Indicates if the deletion was successful"
					},
					message: {
						type: "string",
						enum: ["User deleted"],
						description: "Confirmation message"
					}
				},
				required: ["success", "message"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.deleteUser?.enabled) {
		ctx.context.logger.error("Delete user is disabled. Enable it in the options");
		throw APIError.from("NOT_FOUND", {
			message: "Not found",
			code: "NOT_FOUND"
		});
	}
	const session = await getSessionFromCtx(ctx, { disableCookieCache: isStateful(ctx) });
	if (!session) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
	const token = await ctx.context.internalAdapter.consumeVerificationValue(`delete-account-${ctx.query.token}`);
	if (!token || token.value !== session.user.id) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.INVALID_TOKEN);
	const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
	if (beforeDelete) await beforeDelete(session.user, ctx.request);
	await ctx.context.internalAdapter.deleteUser(session.user.id);
	await ctx.context.internalAdapter.deleteUserSessions(session.user.id);
	await ctx.context.internalAdapter.deleteAccounts(session.user.id);
	deleteSessionCookie(ctx);
	const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
	if (afterDelete) await afterDelete(session.user, ctx.request);
	if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL || "/");
	return ctx.json({
		success: true,
		message: "User deleted"
	});
});
var changeEmail = createAuthEndpoint("/change-email", {
	method: "POST",
	body: object({
		newEmail: email().meta({ description: "The new email address to set must be a valid email address" }),
		callbackURL: string().meta({ description: "The URL to redirect to after email verification" }).optional()
	}),
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		operationId: "changeEmail",
		responses: { "200": {
			description: "Email change request processed successfully",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						$ref: "#/components/schemas/User"
					},
					status: {
						type: "boolean",
						description: "Indicates if the request was successful"
					},
					message: {
						type: "string",
						enum: ["Email updated", "Verification email sent"],
						description: "Status message of the email change process",
						nullable: true
					}
				},
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.changeEmail?.enabled) {
		ctx.context.logger.error("Change email is disabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CHANGE_EMAIL_DISABLED);
	}
	const newEmail = ctx.body.newEmail.toLowerCase();
	if (newEmail === ctx.context.session.user.email) {
		ctx.context.logger.warn("Email is the same");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Email is the same" });
	}
	/**
	* Early config check: ensure at least one email-change flow is
	* available for the current session state. Without this, an
	* existing-email lookup would return 200 while a non-existing
	* email would later throw 400, leaking email existence.
	*/
	const canUpdateWithoutVerification = ctx.context.session.user.emailVerified !== true && ctx.context.options.user.changeEmail.updateEmailWithoutVerification;
	const canSendVerification = ctx.context.options.emailVerification?.sendVerificationEmail;
	const canSendConfirmation = canSendVerification && ctx.context.session.user.emailVerified && ctx.context.options.user.changeEmail.sendChangeEmailConfirmation;
	if (!canUpdateWithoutVerification && !canSendConfirmation && !canSendVerification) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Verification email isn't enabled" });
	}
	if (await ctx.context.internalAdapter.findUserByEmail(newEmail)) {
		await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn);
		ctx.context.logger.info("Change email attempt for existing email");
		return ctx.json({ status: true });
	}
	/**
	* If the email is not verified, we can update the email if the option is enabled
	*/
	if (canUpdateWithoutVerification) {
		await ctx.context.internalAdapter.updateUserByEmail(ctx.context.session.user.email, { email: newEmail });
		await setSessionCookie(ctx, {
			session: ctx.context.session.session,
			user: {
				...ctx.context.session.user,
				email: newEmail
			}
		});
		if (canSendVerification) {
			const token = await createEmailVerificationToken(ctx.context.secret, newEmail, void 0, ctx.context.options.emailVerification?.expiresIn);
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
			await ctx.context.runInBackgroundOrAwait(canSendVerification({
				user: {
					...ctx.context.session.user,
					email: newEmail
				},
				url,
				token
			}, ctx.request));
		}
		return ctx.json({ status: true });
	}
	/**
	* If the email is verified, we need to send a verification email
	*/
	if (canSendConfirmation) {
		const token = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-confirmation" });
		const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
		await ctx.context.runInBackgroundOrAwait(canSendConfirmation({
			user: ctx.context.session.user,
			newEmail,
			url,
			token
		}, ctx.request));
		return ctx.json({ status: true });
	}
	if (!canSendVerification) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Verification email isn't enabled" });
	}
	const token = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-verification" });
	const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
	await ctx.context.runInBackgroundOrAwait(canSendVerification({
		user: {
			...ctx.context.session.user,
			email: newEmail
		},
		url,
		token
	}, ctx.request));
	return ctx.json({ status: true });
});
var defuReplaceArrays = createDefu((obj, key, value) => {
	if (Array.isArray(obj[key]) && Array.isArray(value)) {
		obj[key] = value;
		return true;
	}
});
var hooksSourceWeakMap = /* @__PURE__ */ new WeakMap();
/**
* Resolves the operation id used for spans, preferring an explicit
* `operationId`, then the OpenAPI one, then the caller's `fallback` (the
* `auth.api.*` map key), and finally the route path.
*/
function getOperationId(endpoint, fallback) {
	const opts = endpoint.options;
	return opts?.operationId ?? opts?.metadata?.openapi?.operationId ?? fallback ?? endpoint.path ?? "/:virtual";
}
/**
* Merge a set of response headers onto the dispatch's accumulator, appending
* `set-cookie` (multiple cookies are legal) and replacing everything else.
*/
function mergeResponseHeaders(context, headers) {
	if (!headers) return;
	headers.forEach((value, key) => {
		if (!context.responseHeaders) context.responseHeaders = new Headers({ [key]: value });
		else if (key.toLowerCase() === "set-cookie") context.responseHeaders.append(key, value);
		else context.responseHeaders.set(key, value);
	});
}
/**
* Combine the two header sources an `APIError` can carry into one set:
* - `kAPIErrorHeaderSymbol`: `ctx.responseHeaders` accumulated via
*   `c.setCookie` / `c.setHeader` before the throw.
* - `e.headers`: explicit headers on the error (e.g. `location` from
*   `c.redirect`).
*
* `c.redirect()` reuses `ctx.responseHeaders` as `e.headers`, so when both
* point at the same object iterating each would duplicate every `set-cookie`;
* the identity check skips that copy. Explicit error headers override
* accumulated ones, while cookies from both accumulate.
*/
function mergeAPIErrorHeaders(error) {
	const ctxHeaders = error[kAPIErrorHeaderSymbol];
	const errHeaders = error.headers && error.headers !== ctxHeaders ? new Headers(error.headers) : null;
	if (!ctxHeaders && !errHeaders) return null;
	const headers = new Headers();
	ctxHeaders?.forEach((value, key) => {
		headers.append(key, value);
	});
	errHeaders?.forEach((value, key) => {
		if (key.toLowerCase() === "set-cookie") headers.append(key, value);
		else headers.set(key, value);
	});
	return headers;
}
async function runBeforeHooks(context, hooks, endpoint, operationId) {
	let modifiedContext = {};
	for (const hook of hooks) {
		let matched = false;
		try {
			matched = hook.matcher(context);
		} catch (error) {
			const hookSource = hooksSourceWeakMap.get(hook.handler) ?? "unknown";
			context.context.logger.error(`An error occurred during ${hookSource} hook matcher execution:`, error);
			throw new APIError("INTERNAL_SERVER_ERROR", { message: "An error occurred during hook matcher execution. Check the logs for more details." });
		}
		if (!matched) continue;
		const hookSource = hooksSourceWeakMap.get(hook.handler) ?? "unknown";
		const route = endpoint.path ?? "/:virtual";
		const result = await withSpan(`hook before ${route} ${hookSource}`, {
			[ATTR_HOOK_TYPE]: "before",
			[import_src.ATTR_HTTP_ROUTE]: route,
			[ATTR_CONTEXT]: hookSource,
			[ATTR_OPERATION_ID]: operationId
		}, () => hook.handler({
			...context,
			returnHeaders: true
		})).catch((e) => {
			if (isAPIError(e) && shouldPublishLog(context.context.logger.level, "debug")) e.stack = e.errorStack;
			throw e;
		});
		mergeResponseHeaders(context.context, result?.headers);
		const hookReturn = result?.response;
		if (hookReturn && typeof hookReturn === "object") {
			if ("context" in hookReturn && typeof hookReturn.context === "object") {
				const { headers, ...rest } = hookReturn.context;
				if (headers instanceof Headers) if (modifiedContext.headers) headers.forEach((value, key) => {
					modifiedContext.headers?.set(key, value);
				});
				else modifiedContext.headers = headers;
				modifiedContext = defuReplaceArrays(rest, modifiedContext);
				continue;
			}
			return hookReturn;
		}
	}
	return { context: modifiedContext };
}
async function runAfterHooks(context, hooks, endpoint, operationId) {
	for (const hook of hooks) {
		if (!hook.matcher(context)) continue;
		const hookSource = hooksSourceWeakMap.get(hook.handler) ?? "unknown";
		const route = endpoint.path ?? "/:virtual";
		const result = await withSpan(`hook after ${route} ${hookSource}`, {
			[ATTR_HOOK_TYPE]: "after",
			[import_src.ATTR_HTTP_ROUTE]: route,
			[ATTR_CONTEXT]: hookSource,
			[ATTR_OPERATION_ID]: operationId
		}, () => hook.handler(context)).catch((e) => {
			if (isAPIError(e)) {
				if (shouldPublishLog(context.context.logger.level, "debug")) e.stack = e.errorStack;
				return {
					response: e,
					headers: mergeAPIErrorHeaders(e)
				};
			}
			throw e;
		});
		mergeResponseHeaders(context.context, result.headers);
		if (result.response !== void 0) context.context.returned = result.response;
	}
	return {
		response: context.context.returned,
		headers: context.context.responseHeaders
	};
}
function getHooks(authContext) {
	const plugins = authContext.options.plugins || [];
	const beforeHooks = [];
	const afterHooks = [];
	const beforeHookHandler = authContext.options.hooks?.before;
	if (beforeHookHandler) {
		hooksSourceWeakMap.set(beforeHookHandler, "user");
		beforeHooks.push({
			matcher: () => true,
			handler: beforeHookHandler
		});
	}
	const afterHookHandler = authContext.options.hooks?.after;
	if (afterHookHandler) {
		hooksSourceWeakMap.set(afterHookHandler, "user");
		afterHooks.push({
			matcher: () => true,
			handler: afterHookHandler
		});
	}
	const pluginBeforeHooks = plugins.flatMap((plugin) => (plugin.hooks?.before ?? []).map((h) => {
		hooksSourceWeakMap.set(h.handler, `plugin:${plugin.id}`);
		return h;
	}));
	const pluginAfterHooks = plugins.flatMap((plugin) => (plugin.hooks?.after ?? []).map((h) => {
		hooksSourceWeakMap.set(h.handler, `plugin:${plugin.id}`);
		return h;
	}));
	if (pluginBeforeHooks.length) beforeHooks.push(...pluginBeforeHooks);
	if (pluginAfterHooks.length) afterHooks.push(...pluginAfterHooks);
	return {
		beforeHooks,
		afterHooks
	};
}
/**
* Run a single endpoint through the configured `hooks.before` / `hooks.after`
* pipeline, normalizing the response, headers, and `APIError`s the same way a
* router or `auth.api.*` dispatch does.
*
* This is the canonical hook runner. The HTTP router and `auth.api.*` reach it
* through {@link toAuthEndpoints}. Plugins call it directly when they need to
* re-enter the pipeline on purpose, such as resuming `/oauth2/authorize` after
* a fresh sign-in. Calling an endpoint as a plain function deliberately skips
* hooks; `dispatchAuthEndpoint` is the supported way to opt back in.
*
* @param endpoint The endpoint to dispatch.
* @param input Input context whose `context` is an already-resolved `AuthContext`.
*/
async function dispatchAuthEndpoint(endpoint, input) {
	const operationId = input.operationId ?? getOperationId(endpoint);
	const route = endpoint.path ?? "/:virtual";
	const endpointMethod = endpoint.options?.method;
	const defaultMethod = Array.isArray(endpointMethod) ? endpointMethod[0] : endpointMethod;
	const methodName = input.method ?? input.request?.method ?? defaultMethod ?? "?";
	const shouldReturnResponse = input.asResponse ?? isRequestLike(input.request);
	let internalContext = {
		...input,
		context: {
			...input.context,
			returned: void 0,
			responseHeaders: void 0,
			session: input.context.session ?? null
		},
		path: endpoint.path,
		headers: input.headers ? new Headers(input.headers) : void 0
	};
	return withSpan(`${methodName} ${route}`, {
		[import_src.ATTR_HTTP_ROUTE]: route,
		[ATTR_OPERATION_ID]: operationId
	}, async () => runWithEndpointContext(internalContext, async () => {
		const { beforeHooks, afterHooks } = getHooks(internalContext.context);
		const before = await runBeforeHooks(internalContext, beforeHooks, endpoint, operationId);
		if ("context" in before && before.context && typeof before.context === "object") {
			const { headers, ...rest } = before.context;
			if (headers) {
				if (!internalContext.headers) internalContext.headers = new Headers();
				const requestHeaders = internalContext.headers;
				headers.forEach((value, key) => {
					requestHeaders.set(key, value);
				});
			}
			internalContext = defuReplaceArrays(rest, internalContext);
		} else if (before) {
			const responseHeaders = internalContext.context.responseHeaders;
			return shouldReturnResponse ? toResponse(before, { headers: responseHeaders }) : input.returnHeaders ? {
				headers: responseHeaders,
				response: before
			} : before;
		}
		internalContext.asResponse = false;
		internalContext.returnHeaders = true;
		internalContext.returnStatus = true;
		const result = await runWithEndpointContext(internalContext, () => withSpan(`handler ${route}`, {
			[import_src.ATTR_HTTP_ROUTE]: route,
			[ATTR_OPERATION_ID]: operationId
		}, () => endpoint(internalContext))).catch((e) => {
			if (isAPIError(e)) return {
				response: e,
				status: e.statusCode,
				headers: mergeAPIErrorHeaders(e)
			};
			throw e;
		});
		if (result instanceof Response) return result;
		internalContext.context.returned = result.response;
		internalContext.context.responseHeaders = result.headers ?? void 0;
		const after = await runAfterHooks(internalContext, afterHooks, endpoint, operationId);
		if (after.response !== void 0) result.response = after.response;
		result.headers = after.headers ?? result.headers;
		if (isAPIError(result.response) && shouldPublishLog(internalContext.context.logger.level, "debug")) result.response.stack = result.response.errorStack;
		if (isAPIError(result.response) && !shouldReturnResponse) {
			if (result.headers) Object.defineProperty(result.response, kAPIErrorHeaderSymbol, {
				enumerable: false,
				configurable: true,
				writable: false,
				value: result.headers
			});
			throw result.response;
		}
		return shouldReturnResponse ? toResponse(result.response, {
			headers: result.headers ?? void 0,
			status: result.status
		}) : input.returnHeaders ? input.returnStatus ? {
			headers: result.headers,
			response: result.response,
			status: result.status
		} : {
			headers: result.headers,
			response: result.response
		} : input.returnStatus ? {
			response: result.response,
			status: result.status
		} : result.response;
	}));
}
/**
* Resolves the per-call `AuthContext` for endpoints with a dynamic `baseURL`.
*
* - `rawCtx.baseURL` already set: HTTP handler rehydrated upstream; return as-is.
* - Direct `auth.api` call with a source or a configured `fallback`: resolve here.
* - Neither: throw `APIError` with a helpful message. Leaving `baseURL = ""`
*   would let plugins build `new URL("")` and crash cryptically downstream.
*/
async function resolveDynamicContext(rawCtx, input) {
	if (rawCtx.baseURL) return rawCtx;
	const source = pickSource(input);
	const config = rawCtx.options.baseURL;
	const hasFallback = isDynamicBaseURLConfig(config) && Boolean(config.fallback);
	if (source === void 0 && !hasFallback) throw new APIError("INTERNAL_SERVER_ERROR", { message: "Dynamic baseURL could not be resolved for this direct auth.api call. Pass `headers: request.headers` (or `request`) to the call, or add `fallback` to your baseURL config." });
	try {
		return await resolveRequestContext(rawCtx, source, resolveDynamicTrustedProxyHeaders(rawCtx.options));
	} catch (err) {
		if (err instanceof BetterAuthError) throw new APIError("INTERNAL_SERVER_ERROR", { message: err.message });
		throw err;
	}
}
/**
* Wraps each raw endpoint so a router or `auth.api.*` call runs it through the
* configured hook pipeline. Per-call work that is specific to this entry point
* (dynamic `baseURL` resolution, request-state initialization) happens here;
* the hook pipeline itself lives in {@link dispatchAuthEndpoint}.
*/
function toAuthEndpoints(endpoints, ctx) {
	const api = {};
	for (const [key, endpoint] of Object.entries(endpoints)) {
		api[key] = async (context) => {
			const operationId = getOperationId(endpoint, key);
			const run = async () => {
				const rawContext = await ctx;
				const authContext = isDynamicBaseURLConfig(rawContext.options.baseURL) ? await resolveDynamicContext(rawContext, context) : rawContext;
				return dispatchAuthEndpoint(endpoint, {
					...context,
					context: authContext,
					operationId,
					asResponse: context?.asResponse ?? isRequestLike(context?.request)
				});
			};
			if (await hasRequestState()) return run();
			return runWithRequestState(/* @__PURE__ */ new WeakMap(), run);
		};
		api[key].path = endpoint.path;
		api[key].options = endpoint.options;
	}
	return api;
}
function checkEndpointConflicts(options, logger) {
	const endpointRegistry = /* @__PURE__ */ new Map();
	options.plugins?.forEach((plugin) => {
		if (plugin.endpoints) {
			for (const [key, endpoint] of Object.entries(plugin.endpoints)) if (endpoint && "path" in endpoint && typeof endpoint.path === "string") {
				const path = endpoint.path;
				let methods = [];
				if (endpoint.options && "method" in endpoint.options) {
					if (Array.isArray(endpoint.options.method)) methods = endpoint.options.method;
					else if (typeof endpoint.options.method === "string") methods = [endpoint.options.method];
				}
				if (methods.length === 0) methods = ["*"];
				if (!endpointRegistry.has(path)) endpointRegistry.set(path, []);
				endpointRegistry.get(path).push({
					pluginId: plugin.id,
					endpointKey: key,
					methods
				});
			}
		}
	});
	const conflicts = [];
	for (const [path, entries] of endpointRegistry.entries()) if (entries.length > 1) {
		const methodMap = /* @__PURE__ */ new Map();
		let hasConflict = false;
		for (const entry of entries) for (const method of entry.methods) {
			if (!methodMap.has(method)) methodMap.set(method, []);
			methodMap.get(method).push(entry.pluginId);
			if (methodMap.get(method).length > 1) hasConflict = true;
			if (method === "*" && entries.length > 1) hasConflict = true;
			else if (method !== "*" && methodMap.has("*")) hasConflict = true;
		}
		if (hasConflict) {
			const uniquePlugins = [...new Set(entries.map((e) => e.pluginId))];
			const conflictingMethods = [];
			for (const [method, plugins] of methodMap.entries()) if (plugins.length > 1 || method === "*" && entries.length > 1 || method !== "*" && methodMap.has("*")) conflictingMethods.push(method);
			conflicts.push({
				path,
				plugins: uniquePlugins,
				conflictingMethods
			});
		}
	}
	if (conflicts.length > 0) {
		const conflictMessages = conflicts.map((conflict) => `  - "${conflict.path}" [${conflict.conflictingMethods.join(", ")}] used by plugins: ${conflict.plugins.join(", ")}`).join("\n");
		logger.error(`Endpoint path conflicts detected! Multiple plugins are trying to use the same endpoint paths with conflicting HTTP methods:
${conflictMessages}

To resolve this, you can:
	1. Use only one of the conflicting plugins
	2. Configure the plugins to use different paths (if supported)
	3. Ensure plugins use different HTTP methods for the same path
`);
	}
}
function getEndpoints(ctx, options) {
	const pluginEndpoints = options.plugins?.reduce((acc, plugin) => {
		return {
			...acc,
			...plugin.endpoints
		};
	}, {}) ?? {};
	const middlewares = options.plugins?.map((plugin) => plugin.middlewares?.map((m) => {
		const middleware = (async (context) => {
			const authContext = await ctx;
			return withSpan(`middleware ${m.path} ${plugin.id}`, {
				["better_auth.hook.type"]: "middleware",
				[import_src.ATTR_HTTP_ROUTE]: m.path,
				["better_auth.context"]: `plugin:${plugin.id}`
			}, () => m.middleware({
				...context,
				context: {
					...authContext,
					...context.context
				}
			}));
		});
		middleware.options = m.middleware.options;
		return {
			path: m.path,
			middleware
		};
	})).filter((plugin) => plugin !== void 0).flat() || [];
	return {
		api: toAuthEndpoints({
			signInSocial: signInSocial(),
			callbackOAuth,
			getSession: getSession(),
			signOut,
			signUpEmail: signUpEmail(),
			signInEmail: signInEmail(),
			resetPassword,
			verifyPassword: verifyPassword$1,
			verifyEmail,
			sendVerificationEmail,
			changeEmail,
			changePassword,
			setPassword,
			updateSession: updateSession(),
			updateUser: updateUser(),
			deleteUser,
			requestPasswordReset,
			requestPasswordResetCallback,
			listSessions: listSessions(),
			revokeSession,
			revokeSessions,
			revokeOtherSessions,
			linkSocialAccount,
			listUserAccounts,
			deleteUserCallback,
			unlinkAccount,
			refreshToken,
			getAccessToken,
			accountInfo,
			...pluginEndpoints,
			ok,
			error
		}, ctx),
		middlewares
	};
}
var router = (ctx, options) => {
	const { api, middlewares } = getEndpoints(ctx, options);
	const basePath = new URL(ctx.baseURL).pathname;
	return createRouter$1(api, {
		routerContext: ctx,
		openapi: { disabled: true },
		basePath,
		routerMiddleware: [{
			path: "/**",
			middleware: originCheckMiddleware
		}, ...middlewares],
		allowedMediaTypes: ["application/json"],
		skipTrailingSlashes: options.advanced?.skipTrailingSlashes ?? false,
		async onRequest(req) {
			const disabledPaths = ctx.options.disabledPaths || [];
			const normalizedPath = normalizePathname(req.url, basePath);
			if (disabledPaths.includes(normalizedPath)) return new Response("Not Found", { status: 404 });
			let currentRequest = req;
			const rateLimitResponse = await onRequestRateLimit(currentRequest, ctx);
			if (rateLimitResponse) return rateLimitResponse;
			for (const plugin of ctx.options.plugins || []) if (plugin.onRequest) {
				const response = await withSpan(`onRequest ${plugin.id}`, {
					[ATTR_HOOK_TYPE]: "onRequest",
					[ATTR_CONTEXT]: `plugin:${plugin.id}`
				}, () => plugin.onRequest(currentRequest, ctx));
				if (response && "response" in response) return response.response;
				if (response && "request" in response) currentRequest = response.request;
			}
			return currentRequest;
		},
		async onResponse(res, req) {
			for (const plugin of ctx.options.plugins || []) if (plugin.onResponse) {
				const response = await withSpan(`onResponse ${plugin.id}`, {
					[ATTR_HOOK_TYPE]: "onResponse",
					[ATTR_CONTEXT]: `plugin:${plugin.id}`,
					[import_src.ATTR_HTTP_RESPONSE_STATUS_CODE]: res.status
				}, () => plugin.onResponse(res, ctx));
				if (response) return response.response;
			}
			return res;
		},
		onError(e) {
			if (isAPIError(e) && e.status === "FOUND") return;
			if (options.onAPIError?.throw) throw e;
			if (options.onAPIError?.onError) {
				options.onAPIError.onError(e, ctx);
				return;
			}
			const optLogLevel = options.logger?.level;
			const log = optLogLevel === "error" || optLogLevel === "warn" || optLogLevel === "debug" ? logger : void 0;
			if (options.logger?.disabled !== true) {
				if (e && typeof e === "object" && "message" in e && typeof e.message === "string") {
					if (e.message.includes("no column") || e.message.includes("column") || e.message.includes("relation") || e.message.includes("table") || e.message.includes("does not exist")) {
						ctx.logger?.error(e.message);
						return;
					}
				}
				if (isAPIError(e)) {
					if (e.status === "INTERNAL_SERVER_ERROR") ctx.logger.error(e.status, e);
					log?.error(e.message);
				} else ctx.logger?.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
			}
		}
	});
};
async function getBaseAdapter(options, handleDirectDatabase) {
	let adapter;
	if (!options.database) {
		const tables = getAuthTables(options);
		const memoryDB = Object.keys(tables).reduce((acc, key) => {
			acc[key] = [];
			return acc;
		}, {});
		const { memoryAdapter } = await import("../_libs/better-auth__memory-adapter.mjs").then((n) => n.t);
		adapter = memoryAdapter(memoryDB)(options);
	} else if (typeof options.database === "function") adapter = options.database(options);
	else adapter = await handleDirectDatabase(options);
	if (!adapter.transaction) {
		logger.warn("Adapter does not correctly implement transaction function, patching it automatically. Please update your adapter implementation.");
		adapter.transaction = async (cb) => {
			return cb(adapter);
		};
	}
	return adapter;
}
async function getAdapter(options) {
	return getBaseAdapter(options, async (opts) => {
		const { createKyselyAdapter } = await import("./kysely-adapter-Cj_QZw5p.mjs");
		const { kysely, databaseType, transaction } = await createKyselyAdapter(opts);
		if (!kysely) throw new BetterAuthError("Failed to initialize database adapter");
		const { kyselyAdapter } = await import("./kysely-adapter-Cj_QZw5p.mjs");
		return kyselyAdapter(kysely, {
			type: databaseType || "sqlite",
			debugLogs: opts.database && "debugLogs" in opts.database ? opts.database.debugLogs : false,
			transaction
		})(opts);
	});
}
function getSchema(config) {
	const tables = getAuthTables(config);
	const schema = {};
	for (const key in tables) {
		const table = tables[key];
		const fields = table.fields;
		const actualFields = {};
		Object.entries(fields).forEach(([key, field]) => {
			actualFields[field.fieldName || key] = field;
			if (field.references) {
				const refTable = tables[field.references.model];
				if (refTable) actualFields[field.fieldName || key].references = {
					...field.references,
					model: refTable.modelName,
					field: field.references.field
				};
			}
		});
		if (schema[table.modelName]) {
			schema[table.modelName].fields = {
				...schema[table.modelName].fields,
				...actualFields
			};
			if (table.disableMigrations) schema[table.modelName].disableMigrations = true;
			continue;
		}
		schema[table.modelName] = {
			fields: actualFields,
			order: table.order || Infinity,
			disableMigrations: table.disableMigrations
		};
	}
	return schema;
}
var map = {
	postgres: {
		string: [
			"character varying",
			"varchar",
			"text",
			"uuid"
		],
		number: [
			"int4",
			"integer",
			"bigint",
			"smallint",
			"numeric",
			"real",
			"double precision"
		],
		boolean: ["bool", "boolean"],
		date: [
			"timestamptz",
			"timestamp",
			"date"
		],
		json: ["json", "jsonb"]
	},
	mysql: {
		string: [
			"varchar",
			"text",
			"uuid"
		],
		number: [
			"integer",
			"int",
			"bigint",
			"smallint",
			"decimal",
			"float",
			"double"
		],
		boolean: ["boolean", "tinyint"],
		date: [
			"timestamp",
			"datetime",
			"date"
		],
		json: ["json"]
	},
	sqlite: {
		string: ["TEXT"],
		number: [
			"INTEGER",
			"REAL",
			"BIGINT"
		],
		boolean: ["INTEGER", "BOOLEAN"],
		date: ["DATE", "INTEGER"],
		json: ["TEXT"]
	},
	mssql: {
		string: [
			"varchar",
			"nvarchar",
			"uniqueidentifier"
		],
		number: [
			"int",
			"bigint",
			"smallint",
			"decimal",
			"float",
			"double"
		],
		boolean: ["bit", "smallint"],
		date: [
			"datetime2",
			"date",
			"datetime"
		],
		json: ["varchar", "nvarchar"]
	}
};
function matchType(columnDataType, fieldType, dbType) {
	function normalize(type) {
		return type.toLowerCase().split("(")[0].trim();
	}
	if (fieldType === "string[]" || fieldType === "number[]") return columnDataType.toLowerCase().includes("json");
	const types = map[dbType];
	return (Array.isArray(fieldType) ? types["string"].map((t) => t.toLowerCase()) : types[fieldType].map((t) => t.toLowerCase())).includes(normalize(columnDataType));
}
/**
* Get the current PostgreSQL schema (search_path) for the database connection
* Returns the first schema in the search_path, defaulting to 'public' if not found
*/
async function getPostgresSchema(db) {
	try {
		const result = await sql`SHOW search_path`.execute(db);
		const searchPath = result.rows[0]?.search_path ?? result.rows[0]?.searchPath;
		if (searchPath) return searchPath.split(",").map((s) => s.trim()).map((s) => s.replace(/^["']|["']$/g, "")).filter((s) => !s.startsWith("$") && !s.startsWith("\\$"))[0] || "public";
	} catch {}
	return "public";
}
async function getMigrations(config) {
	const betterAuthSchema = getSchema(config);
	const logger = createLogger(config.logger);
	let { kysely: db, databaseType: dbType } = await createKyselyAdapter(config);
	if (!dbType) {
		logger.warn("Could not determine database type, defaulting to sqlite. Please provide a type in the database options to avoid this.");
		dbType = "sqlite";
	}
	if (!db) {
		logger.error("Only kysely adapter is supported for migrations. You can use `generate` command to generate the schema, if you're using a different adapter.");
		process.exit(1);
	}
	let currentSchema = "public";
	if (dbType === "postgres") {
		currentSchema = await getPostgresSchema(db);
		logger.debug(`PostgreSQL migration: Using schema '${currentSchema}' (from search_path)`);
		try {
			const schemaCheck = await sql`
				SELECT schema_name
				FROM information_schema.schemata
				WHERE schema_name = ${currentSchema}
			`.execute(db);
			if (!(schemaCheck.rows[0]?.schema_name ?? schemaCheck.rows[0]?.schemaName)) logger.warn(`Schema '${currentSchema}' does not exist. Tables will be inspected from available schemas. Consider creating the schema first or checking your database configuration.`);
		} catch (error) {
			logger.debug(`Could not verify schema existence: ${error instanceof Error ? error.message : String(error)}`);
		}
	}
	const allTableMetadata = await db.introspection.getTables();
	let tableMetadata = allTableMetadata;
	if (dbType === "postgres") try {
		const tablesInSchema = await sql`
				SELECT table_name
				FROM information_schema.tables
				WHERE table_schema = ${currentSchema}
				AND table_type = 'BASE TABLE'
			`.execute(db);
		const tableNamesInSchema = new Set(tablesInSchema.rows.map((row) => row.table_name ?? row.tableName));
		tableMetadata = allTableMetadata.filter((table) => table.schema === currentSchema && tableNamesInSchema.has(table.name));
		logger.debug(`Found ${tableMetadata.length} table(s) in schema '${currentSchema}': ${tableMetadata.map((t) => t.name).join(", ") || "(none)"}`);
	} catch (error) {
		logger.warn(`Could not filter tables by schema. Using all discovered tables. Error: ${error instanceof Error ? error.message : String(error)}`);
	}
	const toBeCreated = [];
	const toBeAdded = [];
	for (const [key, value] of Object.entries(betterAuthSchema)) {
		if (value.disableMigrations) continue;
		const table = tableMetadata.find((t) => t.name === key);
		if (!table) {
			const tIndex = toBeCreated.findIndex((t) => t.table === key);
			const tableData = {
				table: key,
				fields: value.fields,
				order: value.order || Infinity
			};
			const insertIndex = toBeCreated.findIndex((t) => (t.order || Infinity) > tableData.order);
			if (insertIndex === -1) if (tIndex === -1) toBeCreated.push(tableData);
			else toBeCreated[tIndex].fields = {
				...toBeCreated[tIndex].fields,
				...value.fields
			};
			else toBeCreated.splice(insertIndex, 0, tableData);
			continue;
		}
		const toBeAddedFields = {};
		for (const [fieldName, field] of Object.entries(value.fields)) {
			const column = table.columns.find((c) => c.name === fieldName);
			if (!column) {
				toBeAddedFields[fieldName] = field;
				continue;
			}
			if (matchType(column.dataType, field.type, dbType)) continue;
			else logger.warn(`Field ${fieldName} in table ${key} has a different type in the database. Expected ${field.type} but got ${column.dataType}.`);
		}
		if (Object.keys(toBeAddedFields).length > 0) toBeAdded.push({
			table: key,
			fields: toBeAddedFields,
			order: value.order || Infinity
		});
	}
	const migrations = [];
	const useUUIDs = config.advanced?.database?.generateId === "uuid";
	const useNumberId = config.advanced?.database?.generateId === "serial";
	function getType(field, fieldName) {
		const type = field.type;
		const provider = dbType || "sqlite";
		const typeMap = {
			string: {
				sqlite: "text",
				postgres: "text",
				mysql: field.unique ? "varchar(255)" : field.references ? "varchar(36)" : field.sortable ? "varchar(255)" : field.index ? "varchar(255)" : "text",
				mssql: field.unique || field.sortable ? "varchar(255)" : field.references ? "varchar(36)" : "varchar(8000)"
			},
			boolean: {
				sqlite: "integer",
				postgres: "boolean",
				mysql: "boolean",
				mssql: "smallint"
			},
			number: {
				sqlite: field.bigint ? "bigint" : "integer",
				postgres: field.bigint ? "bigint" : "integer",
				mysql: field.bigint ? "bigint" : "integer",
				mssql: field.bigint ? "bigint" : "integer"
			},
			date: {
				sqlite: "date",
				postgres: "timestamptz",
				mysql: "timestamp(3)",
				mssql: sql`datetime2(3)`
			},
			json: {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			},
			id: {
				postgres: useNumberId ? sql`integer GENERATED BY DEFAULT AS IDENTITY` : useUUIDs ? "uuid" : "text",
				mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				sqlite: useNumberId ? "integer" : "text"
			},
			foreignKeyId: {
				postgres: useNumberId ? "integer" : useUUIDs ? "uuid" : "text",
				mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				sqlite: useNumberId ? "integer" : "text"
			},
			"string[]": {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			},
			"number[]": {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			}
		};
		if (fieldName === "id" || field.references?.field === "id") {
			if (fieldName === "id") return typeMap.id[provider];
			return typeMap.foreignKeyId[provider];
		}
		if (Array.isArray(type)) return "text";
		if (!(type in typeMap)) throw new Error(`Unsupported field type '${String(type)}' for field '${fieldName}'. Allowed types are: string, number, boolean, date, string[], number[]. If you need to store structured data, store it as a JSON string (type: "string") or split it into primitive fields. See https://better-auth.com/docs/advanced/schema#additional-fields`);
		return typeMap[type][provider];
	}
	const getModelName = initGetModelName({
		schema: getAuthTables(config),
		usePlural: false
	});
	const getFieldName = initGetFieldName({
		schema: getAuthTables(config),
		usePlural: false
	});
	function getReferencePath(model, field) {
		try {
			return `${getModelName(model)}.${getFieldName({
				model,
				field
			})}`;
		} catch {
			return `${model}.${field}`;
		}
	}
	const deferredIndexes = [];
	if (toBeAdded.length) for (const table of toBeAdded) for (const [fieldName, field] of Object.entries(table.fields)) {
		const type = getType(field, fieldName);
		const builder = db.schema.alterTable(table.table);
		if (field.index) {
			const indexName = `${table.table}_${fieldName}_${field.unique ? "uidx" : "idx"}`;
			const indexBuilder = db.schema.createIndex(indexName).on(table.table).columns([fieldName]);
			deferredIndexes.push(field.unique ? indexBuilder.unique() : indexBuilder);
		}
		const built = builder.addColumn(fieldName, type, (col) => {
			col = field.required !== false ? col.notNull() : col;
			if (field.references) col = col.references(getReferencePath(field.references.model, field.references.field)).onDelete(field.references.onDelete || "cascade");
			if (field.unique) col = col.unique();
			if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(sql`CURRENT_TIMESTAMP(3)`);
			else col = col.defaultTo(sql`CURRENT_TIMESTAMP`);
			return col;
		});
		migrations.push(built);
	}
	if (toBeCreated.length) for (const table of toBeCreated) {
		const idType = getType({ type: useNumberId ? "number" : "string" }, "id");
		let dbT = db.schema.createTable(table.table).addColumn("id", idType, (col) => {
			if (useNumberId) {
				if (dbType === "postgres") return col.primaryKey().notNull();
				else if (dbType === "sqlite") return col.primaryKey().notNull();
				else if (dbType === "mssql") return col.identity().primaryKey().notNull();
				return col.autoIncrement().primaryKey().notNull();
			}
			if (useUUIDs) {
				if (dbType === "postgres") return col.primaryKey().defaultTo(sql`pg_catalog.gen_random_uuid()`).notNull();
				return col.primaryKey().notNull();
			}
			return col.primaryKey().notNull();
		});
		for (const [fieldName, field] of Object.entries(table.fields)) {
			const type = getType(field, fieldName);
			dbT = dbT.addColumn(fieldName, type, (col) => {
				col = field.required !== false ? col.notNull() : col;
				if (field.references) col = col.references(getReferencePath(field.references.model, field.references.field)).onDelete(field.references.onDelete || "cascade");
				if (field.unique) col = col.unique();
				if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(sql`CURRENT_TIMESTAMP(3)`);
				else col = col.defaultTo(sql`CURRENT_TIMESTAMP`);
				return col;
			});
			if (field.index && !field.unique) {
				const builder = db.schema.createIndex(`${table.table}_${fieldName}_idx`).on(table.table).columns([fieldName]);
				deferredIndexes.push(builder);
			}
		}
		migrations.push(dbT);
	}
	for (const index of deferredIndexes) migrations.push(index);
	async function runMigrations() {
		for (const migration of migrations) await migration.execute();
	}
	async function compileMigrations() {
		return migrations.map((m) => m.compile().sql).join(";\n\n") + ";";
	}
	return {
		toBeCreated,
		toBeAdded,
		runMigrations,
		compileMigrations
	};
}
var DEFAULT_SECRET = "better-auth-secret-12345678901234567890";
/**
* Estimates the entropy of a string in bits.
* This is a simple approximation that helps detect low-entropy secrets.
*/
function estimateEntropy$1(str) {
	const unique = new Set(str).size;
	if (unique === 0) return 0;
	return Math.log2(Math.pow(unique, str.length));
}
function parseSecretsEnv(envValue) {
	if (!envValue) return null;
	return envValue.split(",").map((entry) => {
		entry = entry.trim();
		const colonIdx = entry.indexOf(":");
		if (colonIdx === -1) throw new BetterAuthError(`Invalid BETTER_AUTH_SECRETS entry: "${entry}". Expected format: "<version>:<secret>"`);
		const version = parseInt(entry.slice(0, colonIdx), 10);
		if (!Number.isInteger(version) || version < 0) throw new BetterAuthError(`Invalid version in BETTER_AUTH_SECRETS: "${entry.slice(0, colonIdx)}". Version must be a non-negative integer.`);
		const value = entry.slice(colonIdx + 1).trim();
		if (!value) throw new BetterAuthError(`Empty secret value for version ${version} in BETTER_AUTH_SECRETS.`);
		return {
			version,
			value
		};
	});
}
function validateSecretsArray(secrets, logger) {
	if (secrets.length === 0) throw new BetterAuthError("`secrets` array must contain at least one entry.");
	const seen = /* @__PURE__ */ new Set();
	for (const s of secrets) {
		const version = parseInt(String(s.version), 10);
		if (!Number.isInteger(version) || version < 0 || String(version) !== String(s.version).trim()) throw new BetterAuthError(`Invalid version ${s.version} in \`secrets\`. Version must be a non-negative integer.`);
		if (!s.value) throw new BetterAuthError(`Empty secret value for version ${version} in \`secrets\`.`);
		if (seen.has(version)) throw new BetterAuthError(`Duplicate version ${version} in \`secrets\`. Each version must be unique.`);
		seen.add(version);
	}
	const current = secrets[0];
	if (current.value.length < 32) logger.warn(`[better-auth] Warning: the current secret (version ${current.version}) should be at least 32 characters long for adequate security.`);
	if (estimateEntropy$1(current.value) < 120) logger.warn("[better-auth] Warning: the current secret appears low-entropy. Use a randomly generated secret for production.");
}
function buildSecretConfig(secrets, legacySecret) {
	const keys = /* @__PURE__ */ new Map();
	for (const s of secrets) keys.set(parseInt(String(s.version), 10), s.value);
	return {
		keys,
		currentVersion: parseInt(String(secrets[0].version), 10),
		legacySecret: legacySecret && legacySecret !== "better-auth-secret-12345678901234567890" ? legacySecret : void 0
	};
}
/**
* Estimates the entropy of a string in bits.
* This is a simple approximation that helps detect low-entropy secrets.
*/
function estimateEntropy(str) {
	const unique = new Set(str).size;
	if (unique === 0) return 0;
	return Math.log2(Math.pow(unique, str.length));
}
/**
* Validates that the secret meets minimum security requirements.
* Throws BetterAuthError if the secret is invalid.
* Skips validation for DEFAULT_SECRET in test environments only.
* Only throws for DEFAULT_SECRET in production environment.
*/
function validateSecret(secret, logger) {
	const isDefaultSecret = secret === DEFAULT_SECRET;
	if (isTest()) return;
	if (isDefaultSecret && isProduction) throw new BetterAuthError("You are using the default secret. Please set `BETTER_AUTH_SECRET` in your environment variables or pass `secret` in your auth config.");
	if (!secret) throw new BetterAuthError("BETTER_AUTH_SECRET is missing. Set it in your environment or pass `secret` to betterAuth({ secret }).");
	if (secret.length < 32) logger.warn(`[better-auth] Warning: your BETTER_AUTH_SECRET should be at least 32 characters long for adequate security. Generate one with \`npx auth secret\` or \`openssl rand -base64 32\`.`);
	if (estimateEntropy(secret) < 120) logger.warn("[better-auth] Warning: your BETTER_AUTH_SECRET appears low-entropy. Use a randomly generated secret for production.");
}
async function createAuthContext(adapter, options, getDatabaseType) {
	const isStateful = hasServerSessionStore(options);
	if (!isStateful) options = defu(options, { session: { cookieCache: {
		enabled: true,
		strategy: "jwe",
		refreshCache: true,
		maxAge: options.session?.expiresIn || 604800
	} } });
	if (!options.database) options = defu(options, { account: { storeAccountCookie: true } });
	const plugins = options.plugins || [];
	const internalPlugins = getInternalPlugins(options);
	const logger = createLogger(options.logger);
	const isDynamicConfig = isDynamicBaseURLConfig(options.baseURL);
	if (isDynamicBaseURLConfig(options.baseURL)) {
		const { allowedHosts } = options.baseURL;
		if (!allowedHosts || allowedHosts.length === 0) throw new BetterAuthError("baseURL.allowedHosts cannot be empty. Provide at least one allowed host pattern (e.g., [\"myapp.com\", \"*.vercel.app\"]).");
	}
	const baseURL = isDynamicConfig ? void 0 : getBaseURL(typeof options.baseURL === "string" ? options.baseURL : void 0, options.basePath);
	if (!baseURL && !isDynamicConfig) logger.warn(`[better-auth] Base URL is not set. Set the baseURL option or BETTER_AUTH_URL env, or use a dynamic baseURL with allowedHosts for multi-host setups. Without it the origin is derived from the incoming request, and callbacks and redirects may not work correctly.`);
	if (adapter.id === "memory" && options.advanced?.database?.generateId === false) logger.error(`[better-auth] Misconfiguration detected.
You are using the memory DB with generateId: false.
This will cause no id to be generated for any model.
Most of the features of Better Auth will not work correctly.`);
	const secretsArray = options.secrets ?? parseSecretsEnv(env.BETTER_AUTH_SECRETS);
	const legacySecret = options.secret || env.BETTER_AUTH_SECRET || env.AUTH_SECRET || "";
	let secret;
	let secretConfig;
	if (secretsArray) {
		validateSecretsArray(secretsArray, logger);
		secret = secretsArray[0].value;
		secretConfig = buildSecretConfig(secretsArray, legacySecret);
	} else {
		secret = legacySecret || "better-auth-secret-12345678901234567890";
		validateSecret(secret, logger);
		secretConfig = secret;
	}
	options = {
		...options,
		secret,
		baseURL: isDynamicConfig ? options.baseURL : baseURL ? new URL(baseURL).origin : "",
		basePath: options.basePath || "/api/auth",
		plugins: plugins.concat(internalPlugins)
	};
	checkEndpointConflicts(options, logger);
	const trustedProxies = options.advanced?.ipAddress?.trustedProxies;
	if (trustedProxies && trustedProxies.length > 0) {
		const invalid = findInvalidTrustedProxies(trustedProxies);
		if (invalid.length > 0) logger.warn(`Ignoring invalid \`advanced.ipAddress.trustedProxies\` entries: ${invalid.join(", ")}. Each entry must be an IP address or CIDR range.`);
	}
	const cookies = getCookies(options);
	const tables = getAuthTables(options);
	const providers = (await Promise.all(Object.entries(options.socialProviders || {}).map(async ([key, originalConfig]) => {
		const config = typeof originalConfig === "function" ? await originalConfig() : originalConfig;
		if (config == null) return null;
		if (config.enabled === false) return null;
		if (!config.clientId) logger.warn(`Social provider ${key} is missing clientId or clientSecret`);
		const provider = socialProviders[key](config);
		provider.disableImplicitSignUp = config.disableImplicitSignUp;
		return provider;
	}))).filter((x) => x !== null);
	const generateIdFunc = ({ model, size }) => {
		if (typeof options.advanced?.generateId === "function") return options.advanced.generateId({
			model,
			size
		});
		const dbGenerateId = options?.advanced?.database?.generateId;
		if (typeof dbGenerateId === "function") return dbGenerateId({
			model,
			size
		});
		if (dbGenerateId === "uuid") return crypto.randomUUID();
		if (dbGenerateId === "serial" || dbGenerateId === false) return false;
		return generateId(size);
	};
	const { publish } = await createTelemetry(options, {
		adapter: adapter.id,
		database: typeof options.database === "function" ? "adapter" : getDatabaseType(options.database)
	});
	const pluginIds = new Set(options.plugins.map((p) => p.id));
	const getPluginFn = (id) => options.plugins.find((p) => p.id === id) ?? null;
	const hasPluginFn = (id) => pluginIds.has(id);
	const trustedOrigins = await getTrustedOrigins(options);
	const trustedProviders = await getTrustedProviders(options);
	const ctx = {
		appName: options.appName || "Better Auth",
		baseURL: baseURL || "",
		version: getBetterAuthVersion(),
		socialProviders: providers,
		options,
		oauthConfig: {
			storeStateStrategy: options.account?.storeStateStrategy || (isStateful ? "database" : "cookie"),
			skipStateCookieCheck: !!options.account?.skipStateCookieCheck
		},
		tables,
		trustedOrigins,
		trustedProviders,
		isTrustedOrigin(url, settings) {
			return this.trustedOrigins.some((origin) => matchesOriginPattern(url, origin, settings));
		},
		sessionConfig: {
			updateAge: options.session?.updateAge !== void 0 ? options.session.updateAge : 86400,
			expiresIn: options.session?.expiresIn || 604800,
			freshAge: options.session?.freshAge === void 0 ? 86400 : options.session.freshAge,
			cookieRefreshCache: (() => {
				const refreshCache = options.session?.cookieCache?.refreshCache;
				const maxAge = options.session?.cookieCache?.maxAge || 300;
				if (isStateful && refreshCache) {
					logger.warn("[better-auth] `session.cookieCache.refreshCache` is enabled while `database` or `secondaryStorage` is configured. `refreshCache` is meant for stateless (DB-less) setups. Disabling `refreshCache` — remove it from your config to silence this warning.");
					return false;
				}
				if (refreshCache === false || refreshCache === void 0) return false;
				if (refreshCache === true) return {
					enabled: true,
					updateAge: Math.floor(maxAge * .2)
				};
				return {
					enabled: true,
					updateAge: refreshCache.updateAge !== void 0 ? refreshCache.updateAge : Math.floor(maxAge * .2)
				};
			})()
		},
		secret,
		secretConfig,
		rateLimit: {
			...options.rateLimit,
			enabled: options.rateLimit?.enabled ?? isProduction,
			window: options.rateLimit?.window || 10,
			max: options.rateLimit?.max || 100,
			storage: options.rateLimit?.storage || (options.secondaryStorage ? "secondary-storage" : "memory")
		},
		authCookies: cookies,
		logger,
		generateId: generateIdFunc,
		session: null,
		secondaryStorage: options.secondaryStorage,
		password: {
			hash: options.emailAndPassword?.password?.hash || hashPassword$1,
			verify: options.emailAndPassword?.password?.verify || verifyPassword$1$1,
			config: {
				minPasswordLength: options.emailAndPassword?.minPasswordLength || 8,
				maxPasswordLength: options.emailAndPassword?.maxPasswordLength || 128
			},
			checkPassword
		},
		setNewSession(session) {
			this.newSession = session;
		},
		newSession: null,
		adapter,
		internalAdapter: createInternalAdapter(adapter, {
			options,
			logger,
			hooks: options.databaseHooks ? [{
				source: "user",
				hooks: options.databaseHooks
			}] : [],
			generateId: generateIdFunc
		}),
		createAuthCookie: createCookieGetter(options),
		async runMigrations() {
			throw new BetterAuthError("runMigrations will be set by the specific init implementation");
		},
		publishTelemetry: publish,
		skipCSRFCheck: !!options.advanced?.disableCSRFCheck,
		skipOriginCheck: options.advanced?.disableOriginCheck !== void 0 ? options.advanced.disableOriginCheck : isTest() ? true : false,
		runInBackground: options.advanced?.backgroundTasks?.handler ?? ((p) => {
			p.catch(() => {});
		}),
		async runInBackgroundOrAwait(promise) {
			try {
				if (options.advanced?.backgroundTasks?.handler) {
					if (promise instanceof Promise) options.advanced.backgroundTasks.handler(promise.catch((e) => {
						logger.error("Failed to run background task:", e);
					}));
				} else await promise;
			} catch (e) {
				logger.error("Failed to run background task:", e);
			}
		},
		getPlugin: getPluginFn,
		hasPlugin: hasPluginFn
	};
	const initOrPromise = runPluginInit(ctx);
	if (isPromise(initOrPromise)) await initOrPromise;
	return ctx;
}
var init = async (options) => {
	const adapter = await getAdapter(options);
	const getDatabaseType = (database) => getKyselyDatabaseType(database) || "unknown";
	const ctx = await createAuthContext(adapter, options, getDatabaseType);
	ctx.runMigrations = async function() {
		if (!options.database || "updateMany" in options.database) throw new BetterAuthError("Database is not provided or it's an adapter. Migrations are only supported with a database instance.");
		const { runMigrations } = await getMigrations(options);
		await runMigrations();
	};
	return ctx;
};
var createBetterAuth = (options, initFn) => {
	const authContext = initFn(options);
	const { api } = getEndpoints(authContext, options);
	return {
		handler: async (request) => {
			const ctx = await authContext;
			const basePath = ctx.options.basePath || "/api/auth";
			let handlerCtx;
			if (isDynamicBaseURLConfig(options.baseURL)) handlerCtx = await resolveRequestContext(ctx, request, resolveDynamicTrustedProxyHeaders(ctx.options));
			else {
				handlerCtx = Object.create(Object.getPrototypeOf(ctx), Object.getOwnPropertyDescriptors(ctx));
				let trustOptions = ctx.options;
				if (!ctx.options.baseURL) {
					const baseURL = getBaseURL(void 0, basePath, request, void 0, ctx.options.advanced?.trustedProxyHeaders);
					if (!baseURL) throw new BetterAuthError("Could not get base URL from request. Please provide a valid base URL.");
					handlerCtx.baseURL = baseURL;
					handlerCtx.options = {
						...ctx.options,
						baseURL: getOrigin(baseURL) || void 0
					};
					trustOptions = handlerCtx.options;
				}
				handlerCtx.trustedOrigins = await getTrustedOrigins(trustOptions, request);
				handlerCtx.trustedProviders = await getTrustedProviders(trustOptions, request);
			}
			const { handler } = router(handlerCtx, options);
			return runWithAdapter(handlerCtx.adapter, () => handler(request));
		},
		api,
		options,
		$context: authContext,
		$ERROR_CODES: {
			...options.plugins?.reduce((acc, plugin) => {
				if (plugin.$ERROR_CODES) return {
					...acc,
					...plugin.$ERROR_CODES
				};
				return acc;
			}, {}),
			...BASE_ERROR_CODES
		}
	};
};
/**
* Better Auth initializer for full mode (with Kysely)
*
* @example
* ```ts
* import { betterAuth } from "better-auth";
*
* const auth = betterAuth({
* 	database: new PostgresDialect({ connection: process.env.DATABASE_URL }),
* });
* ```
*
* For minimal mode (without Kysely), import from `better-auth/minimal` instead
* @example
* ```ts
* import { betterAuth } from "better-auth/minimal";
*
* const auth = betterAuth({
*	  database: drizzleAdapter(db, { provider: "pg" }),
* });
*/
var betterAuth = (options) => {
	return createBetterAuth(options, init);
};
var BEARER_SCHEME = "bearer ";
function tryDecode(str) {
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}
/**
* Converts bearer token to session cookie
*/
var bearer = (options) => {
	return {
		id: "bearer",
		version: PACKAGE_VERSION,
		hooks: {
			before: [{
				matcher(context) {
					return Boolean(context.request?.headers.get("authorization") || context.headers?.get("authorization"));
				},
				handler: createAuthMiddleware(async (c) => {
					const authHeader = c.request?.headers.get("authorization") || c.headers?.get("Authorization");
					if (!authHeader) return;
					if (authHeader.slice(0, 7).toLowerCase() !== BEARER_SCHEME) return;
					const token = authHeader.slice(7).trim();
					if (!token) return;
					let decodedToken;
					if (token.includes(".")) decodedToken = token.includes("%") ? tryDecode(token) : token;
					else {
						if (options?.requireSignature) return;
						decodedToken = tryDecode((await serializeSignedCookie("", token, c.context.secret)).replace("=", ""));
					}
					try {
						if (!await createHMAC("SHA-256", "base64urlnopad").verify(c.context.secret, decodedToken.split(".")[0], decodedToken.split(".")[1])) return;
					} catch {
						return;
					}
					const existingHeaders = c.request?.headers || c.headers;
					const headers = new Headers({ ...Object.fromEntries(existingHeaders?.entries()) });
					setRequestCookie(headers, c.context.authCookies.sessionToken.name, decodedToken);
					return { context: { headers } };
				})
			}],
			after: [{
				matcher(context) {
					return true;
				},
				handler: createAuthMiddleware(async (ctx) => {
					const setCookie = ctx.context.responseHeaders?.get("set-cookie");
					if (!setCookie) return;
					const parsedCookies = parseSetCookieHeader(setCookie);
					const cookieName = ctx.context.authCookies.sessionToken.name;
					const sessionCookie = parsedCookies.get(cookieName);
					if (!sessionCookie || !sessionCookie.value || sessionCookie["max-age"] === 0) return;
					const token = sessionCookie.value;
					const exposedHeaders = ctx.context.responseHeaders?.get("access-control-expose-headers") || "";
					const headersSet = new Set(exposedHeaders.split(",").map((header) => header.trim()).filter(Boolean));
					headersSet.add("set-auth-token");
					ctx.setHeader("set-auth-token", token);
					ctx.setHeader("Access-Control-Expose-Headers", Array.from(headersSet).join(", "));
				})
			}]
		},
		options
	};
};
function isNonEmptyOAuthId$1(id) {
	return id !== void 0 && id !== null && id !== "";
}
var signInWithOAuth2BodySchema = object({
	providerId: string().meta({ description: "The provider ID for the OAuth provider" }),
	callbackURL: string().meta({ description: "The URL to redirect to after sign in" }).optional(),
	errorCallbackURL: string().meta({ description: "The URL to redirect to if an error occurs" }).optional(),
	newUserCallbackURL: string().meta({ description: "The URL to redirect to after login if the user is new. Eg: \"/welcome\"" }).optional(),
	disableRedirect: boolean().meta({ description: "Disable redirect" }).optional(),
	scopes: array(string()).meta({ description: "Scopes to be passed to the provider authorization request." }).optional(),
	requestSignUp: boolean().meta({ description: "Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider. Eg: false" }).optional(),
	/**
	* Any additional data to pass through the oauth flow.
	*/
	additionalData: record(string(), any()).optional()
});
/**
* ### Endpoint
*
* POST `/sign-in/oauth2`
*
* ### API Methods
*
* **server:**
* `auth.api.signInWithOAuth2`
*
* **client:**
* `authClient.signIn.oauth2`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/sign-in#api-method-sign-in-oauth2)
*/
var signInWithOAuth2 = (options) => createAuthEndpoint("/sign-in/oauth2", {
	method: "POST",
	body: signInWithOAuth2BodySchema,
	metadata: { openapi: {
		description: "Sign in with OAuth2",
		responses: { 200: {
			description: "Sign in with OAuth2",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					url: { type: "string" },
					redirect: { type: "boolean" }
				}
			} } }
		} }
	} }
}, async (ctx) => {
	const { providerId } = ctx.body;
	const config = options.config.find((c) => c.providerId === providerId);
	if (!config) throw APIError.fromStatus("BAD_REQUEST", { message: `${GENERIC_OAUTH_ERROR_CODES.PROVIDER_CONFIG_NOT_FOUND} ${providerId}` });
	const { discoveryUrl, authorizationUrl, tokenUrl, clientId, clientSecret, scopes, redirectURI, responseType, pkce, prompt, accessType, authorizationUrlParams, responseMode } = config;
	let finalAuthUrl = authorizationUrl;
	let finalTokenUrl = tokenUrl;
	if (discoveryUrl) {
		const discovery = await betterFetch(discoveryUrl, {
			method: "GET",
			headers: config.discoveryHeaders,
			onError(context) {
				ctx.context.logger.error(context.error.message, context.error, { discoveryUrl });
			}
		});
		if (discovery.data) {
			finalAuthUrl = discovery.data.authorization_endpoint;
			finalTokenUrl = discovery.data.token_endpoint;
		}
	}
	if (!finalAuthUrl || !finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
	if (authorizationUrlParams) {
		const withAdditionalParams = new URL(finalAuthUrl);
		for (const [paramName, paramValue] of Object.entries(authorizationUrlParams)) withAdditionalParams.searchParams.set(paramName, paramValue);
		finalAuthUrl = withAdditionalParams.toString();
	}
	const additionalParams = typeof authorizationUrlParams === "function" ? authorizationUrlParams(ctx) : authorizationUrlParams;
	const { state, codeVerifier } = await generateState(ctx, void 0, ctx.body.additionalData);
	const authUrl = await createAuthorizationURL({
		id: providerId,
		options: {
			clientId,
			clientSecret,
			redirectURI
		},
		authorizationEndpoint: finalAuthUrl,
		state,
		codeVerifier: pkce ? codeVerifier : void 0,
		scopes: ctx.body.scopes ? [...ctx.body.scopes, ...scopes || []] : scopes || [],
		redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerId}`,
		prompt,
		accessType,
		responseType,
		responseMode,
		additionalParams
	});
	return ctx.json({
		url: authUrl.toString(),
		redirect: !ctx.body.disableRedirect
	});
});
var OAuth2CallbackQuerySchema = object({
	code: string().meta({ description: "The OAuth2 code" }).optional(),
	error: string().meta({ description: "The error message, if any" }).optional(),
	error_description: string().meta({ description: "The error description, if any" }).optional(),
	state: string().meta({ description: "The state parameter from the OAuth2 request" }).optional(),
	iss: string().meta({ description: "The issuer identifier" }).optional()
});
var oAuth2Callback = (options) => createAuthEndpoint("/oauth2/callback/:providerId", {
	method: "GET",
	query: OAuth2CallbackQuerySchema,
	metadata: {
		...HIDE_METADATA,
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		openapi: {
			description: "OAuth2 callback",
			responses: { 200: {
				description: "OAuth2 callback",
				content: { "application/json": { schema: {
					type: "object",
					properties: { url: { type: "string" } }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const defaultErrorURL = ctx.context.options.onAPIError?.errorURL || `${ctx.context.baseURL}/error`;
	if (ctx.query.error || !ctx.query.code) redirectOnError(ctx, defaultErrorURL, ctx.query.error || "oAuth_code_missing", ctx.query.error_description || void 0);
	const providerId = ctx.params?.providerId;
	if (!providerId) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.PROVIDER_ID_REQUIRED);
	const providerConfig = options.config.find((p) => p.providerId === providerId);
	if (!providerConfig) throw APIError.fromStatus("BAD_REQUEST", { message: `${GENERIC_OAUTH_ERROR_CODES.PROVIDER_CONFIG_NOT_FOUND} ${providerId}` });
	let tokens = void 0;
	const { callbackURL, codeVerifier, errorURL, requestSignUp, newUserURL, link } = await parseState(ctx);
	const code = ctx.query.code;
	const resolvedErrorURL = errorURL || defaultErrorURL;
	let finalTokenUrl = providerConfig.tokenUrl;
	let finalUserInfoUrl = providerConfig.userInfoUrl;
	let expectedIssuer = providerConfig.issuer;
	if (providerConfig.discoveryUrl) {
		const discovery = await betterFetch(providerConfig.discoveryUrl, {
			method: "GET",
			headers: providerConfig.discoveryHeaders
		});
		if (discovery.data) {
			finalTokenUrl = discovery.data.token_endpoint;
			finalUserInfoUrl = discovery.data.userinfo_endpoint;
			if (!expectedIssuer && discovery.data.issuer) expectedIssuer = discovery.data.issuer;
		}
	}
	if (expectedIssuer) {
		if (ctx.query.iss) {
			if (ctx.query.iss !== expectedIssuer) {
				ctx.context.logger.error("OAuth issuer mismatch", {
					expected: expectedIssuer,
					received: ctx.query.iss
				});
				redirectOnError(ctx, resolvedErrorURL, "issuer_mismatch");
			}
		} else if (providerConfig.requireIssuerValidation) {
			ctx.context.logger.error("OAuth issuer parameter missing", { expected: expectedIssuer });
			redirectOnError(ctx, resolvedErrorURL, "issuer_missing");
		}
	}
	try {
		if (providerConfig.getToken) tokens = await providerConfig.getToken({
			code,
			redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerConfig.providerId}`,
			codeVerifier: providerConfig.pkce ? codeVerifier : void 0
		});
		else {
			if (!finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIG);
			const additionalParams = typeof providerConfig.tokenUrlParams === "function" ? providerConfig.tokenUrlParams(ctx) : providerConfig.tokenUrlParams;
			tokens = await validateAuthorizationCode({
				headers: providerConfig.authorizationHeaders,
				code,
				codeVerifier: providerConfig.pkce ? codeVerifier : void 0,
				redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerConfig.providerId}`,
				options: {
					clientId: providerConfig.clientId,
					clientSecret: providerConfig.clientSecret,
					redirectURI: providerConfig.redirectURI
				},
				tokenEndpoint: finalTokenUrl,
				authentication: providerConfig.authentication,
				additionalParams
			});
		}
		tokens = applyDefaultAccessTokenExpiry(tokens, providerConfig.accessTokenExpiresIn);
	} catch (e) {
		ctx.context.logger.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
		redirectOnError(ctx, resolvedErrorURL, "oauth_code_verification_failed");
	}
	if (!tokens) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIG);
	const userInfo = await (async function handleUserInfo() {
		const userInfo = providerConfig.getUserInfo ? await providerConfig.getUserInfo(tokens) : await getUserInfo(tokens, finalUserInfoUrl);
		if (!userInfo) redirectOnError(ctx, resolvedErrorURL, "user_info_is_missing");
		const mapUser = providerConfig.mapProfileToUser ? await providerConfig.mapProfileToUser(userInfo) : userInfo;
		const email = mapUser.email ? mapUser.email.toLowerCase() : userInfo.email?.toLowerCase();
		if (!email) {
			ctx.context.logger.error(missingEmailLogMessage(providerConfig.providerId, { source: "generic" }), userInfo);
			redirectOnError(ctx, resolvedErrorURL, "email_is_missing");
		}
		const rawId = isNonEmptyOAuthId$1(mapUser.id) ? mapUser.id : isNonEmptyOAuthId$1(userInfo.id) ? userInfo.id : isNonEmptyOAuthId$1(userInfo.sub) ? userInfo.sub : void 0;
		const id = rawId !== void 0 ? String(rawId) : "";
		if (!id) {
			ctx.context.logger.error("Provider did not return an account id (e.g. `sub`). Unable to sign in.", userInfo);
			redirectOnError(ctx, resolvedErrorURL, "id_is_missing");
		}
		const name = mapUser.name ? mapUser.name : userInfo.name;
		if (!name) {
			ctx.context.logger.error("Unable to get user info", userInfo);
			redirectOnError(ctx, resolvedErrorURL, "name_is_missing");
		}
		return {
			...userInfo,
			...mapUser,
			email,
			id,
			name
		};
	})();
	if (link) {
		if (ctx.context.options.account?.accountLinking?.allowDifferentEmails !== true && link.email.toLowerCase() !== userInfo.email.toLowerCase()) redirectOnError(ctx, resolvedErrorURL, "email_doesn't_match");
		const existingAccount = await ctx.context.internalAdapter.findAccountByProviderId(String(userInfo.id), providerConfig.providerId);
		if (existingAccount) {
			if (existingAccount.userId !== link.userId) redirectOnError(ctx, resolvedErrorURL, "account_already_linked_to_different_user");
			const updateData = Object.fromEntries(Object.entries({
				accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
				idToken: tokens.idToken,
				refreshToken: await setTokenUtil(tokens.refreshToken, ctx.context),
				accessTokenExpiresAt: tokens.accessTokenExpiresAt,
				refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
				scope: tokens.scopes?.join(",")
			}).filter(([_, value]) => value !== void 0));
			await ctx.context.internalAdapter.updateAccount(existingAccount.id, updateData);
		} else if (!await ctx.context.internalAdapter.createAccount({
			userId: link.userId,
			providerId: providerConfig.providerId,
			accountId: userInfo.id,
			accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
			scope: tokens.scopes?.join(","),
			refreshToken: await setTokenUtil(tokens.refreshToken, ctx.context),
			idToken: tokens.idToken
		})) redirectOnError(ctx, resolvedErrorURL, "unable_to_link_account");
		await applyUpdateUserInfoOnLink(ctx, link.userId, userInfo);
		let toRedirectTo;
		try {
			toRedirectTo = callbackURL.toString();
		} catch {
			toRedirectTo = callbackURL;
		}
		throw ctx.redirect(toRedirectTo);
	}
	let result;
	try {
		result = await handleOAuthUserInfo(ctx, {
			userInfo,
			account: {
				providerId: providerConfig.providerId,
				accountId: userInfo.id,
				...tokens,
				scope: tokens.scopes?.join(",")
			},
			callbackURL,
			disableSignUp: providerConfig.disableImplicitSignUp && !requestSignUp || providerConfig.disableSignUp,
			overrideUserInfo: providerConfig.overrideUserInfo
		});
	} catch (e) {
		if (isAPIError(e) && e.body?.code) redirectOnError(ctx, resolvedErrorURL, e.body.code, e.body.message);
		throw e;
	}
	if (result.error) redirectOnError(ctx, resolvedErrorURL, result.error.split(" ").join("_"));
	const { session, user } = result.data;
	await setSessionCookie(ctx, {
		session,
		user
	});
	let toRedirectTo;
	try {
		toRedirectTo = (result.isRegister ? newUserURL || callbackURL : callbackURL).toString();
	} catch {
		toRedirectTo = result.isRegister ? newUserURL || callbackURL : callbackURL;
	}
	throw ctx.redirect(toRedirectTo);
});
var OAuth2LinkAccountBodySchema = object({
	providerId: string(),
	/**
	* Callback URL to redirect to after the user has signed in.
	*/
	callbackURL: string(),
	/**
	* Additional scopes to request when linking the account.
	* This is useful for requesting additional permissions when
	* linking a social account compared to the initial authentication.
	*/
	scopes: array(string()).meta({ description: "Additional scopes to request when linking the account" }).optional(),
	/**
	* The URL to redirect to if there is an error during the link process.
	*/
	errorCallbackURL: string().meta({ description: "The URL to redirect to if there is an error during the link process" }).optional()
});
/**
* ### Endpoint
*
* POST `/oauth2/link`
*
* ### API Methods
*
* **server:**
* `auth.api.oAuth2LinkAccount`
*
* **client:**
* `authClient.oauth2.link`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/generic-oauth#api-method-oauth2-link)
*/
var oAuth2LinkAccount = (options) => createAuthEndpoint("/oauth2/link", {
	method: "POST",
	body: OAuth2LinkAccountBodySchema,
	use: [sessionMiddleware],
	metadata: { openapi: {
		description: "Link an OAuth2 account to the current user session",
		responses: { "200": {
			description: "Authorization URL generated successfully for linking an OAuth2 account",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					url: {
						type: "string",
						format: "uri",
						description: "The authorization URL to redirect the user to for linking the OAuth2 account"
					},
					redirect: {
						type: "boolean",
						description: "Indicates that the client should redirect to the provided URL",
						enum: [true]
					}
				},
				required: ["url", "redirect"]
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	if (!session) throw APIError.from("UNAUTHORIZED", GENERIC_OAUTH_ERROR_CODES.SESSION_REQUIRED);
	const provider = options.config.find((p) => p.providerId === c.body.providerId);
	if (!provider) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	const { providerId, clientId, clientSecret, redirectURI, authorizationUrl, discoveryUrl, pkce, scopes, prompt, accessType, authorizationUrlParams } = provider;
	let finalAuthUrl = authorizationUrl;
	if (!finalAuthUrl) {
		if (!discoveryUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
		const discovery = await betterFetch(discoveryUrl, {
			method: "GET",
			headers: provider.discoveryHeaders,
			onError(context) {
				c.context.logger.error(context.error.message, context.error, { discoveryUrl });
			}
		});
		if (discovery.data) finalAuthUrl = discovery.data.authorization_endpoint;
	}
	if (!finalAuthUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
	const state = await generateState(c, {
		userId: session.user.id,
		email: session.user.email
	}, void 0);
	const additionalParams = typeof authorizationUrlParams === "function" ? authorizationUrlParams(c) : authorizationUrlParams;
	const url = await createAuthorizationURL({
		id: providerId,
		options: {
			clientId,
			clientSecret,
			redirectURI: redirectURI || `${c.context.baseURL}/oauth2/callback/${providerId}`
		},
		authorizationEndpoint: finalAuthUrl,
		state: state.state,
		codeVerifier: pkce ? state.codeVerifier : void 0,
		scopes: c.body.scopes || scopes || [],
		redirectURI: redirectURI || `${c.context.baseURL}/oauth2/callback/${providerId}`,
		prompt,
		accessType,
		additionalParams
	});
	return c.json({
		url: url.toString(),
		redirect: true
	});
});
async function getUserInfo(tokens, finalUserInfoUrl) {
	if (tokens.idToken) {
		const decoded = decodeJwt(tokens.idToken);
		if (decoded) {
			if (decoded.sub && decoded.email) return {
				id: decoded.sub,
				emailVerified: decoded.email_verified,
				image: decoded.picture,
				...decoded
			};
		}
	}
	if (!finalUserInfoUrl) return null;
	const profile = (await betterFetch(finalUserInfoUrl, {
		method: "GET",
		headers: { Authorization: `Bearer ${tokens.accessToken}` }
	})).data;
	if (!profile) return null;
	const { id: profileId, ...profileFields } = profile;
	const subjectId = isNonEmptyOAuthId$1(profileId) ? profileId : isNonEmptyOAuthId$1(profile.sub) ? profile.sub : void 0;
	return {
		...profileFields,
		...subjectId !== void 0 ? { id: subjectId } : {},
		email: profile?.email,
		emailVerified: profile?.email_verified ?? false,
		image: profile?.picture,
		name: profile?.name
	};
}
function isNonEmptyOAuthId(id) {
	return id !== void 0 && id !== null && id !== "";
}
/**
* A generic OAuth plugin that can be used to add OAuth support to any provider
*/
var genericOAuth = (options) => {
	const seenIds = /* @__PURE__ */ new Set();
	const nonUniqueIds = /* @__PURE__ */ new Set();
	for (const config of options.config) {
		const id = config.providerId;
		if (seenIds.has(id)) nonUniqueIds.add(id);
		seenIds.add(id);
	}
	if (nonUniqueIds.size > 0) console.warn(`Duplicate provider IDs found: ${Array.from(nonUniqueIds).join(", ")}`);
	return {
		id: "generic-oauth",
		version: PACKAGE_VERSION,
		init: (ctx) => {
			return { context: { socialProviders: options.config.map((c) => {
				let finalUserInfoUrl = c.userInfoUrl;
				return {
					id: c.providerId,
					name: c.providerId,
					async createAuthorizationURL(data) {
						let finalAuthUrl = c.authorizationUrl;
						if (!finalAuthUrl && c.discoveryUrl) {
							const discovery = await betterFetch(c.discoveryUrl, {
								method: "GET",
								headers: c.discoveryHeaders
							});
							if (discovery.data) {
								finalAuthUrl = discovery.data.authorization_endpoint;
								finalUserInfoUrl = finalUserInfoUrl ?? discovery.data.userinfo_endpoint;
							}
						}
						if (!finalAuthUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
						return createAuthorizationURL({
							id: c.providerId,
							options: {
								clientId: c.clientId,
								clientSecret: c.clientSecret,
								redirectURI: c.redirectURI
							},
							authorizationEndpoint: finalAuthUrl,
							state: data.state,
							codeVerifier: c.pkce ? data.codeVerifier : void 0,
							scopes: c.scopes || [],
							redirectURI: `${ctx.baseURL}/oauth2/callback/${c.providerId}`
						});
					},
					async validateAuthorizationCode(data) {
						if (c.getToken) return applyDefaultAccessTokenExpiry(await c.getToken(data), c.accessTokenExpiresIn);
						let finalTokenUrl = c.tokenUrl;
						if (c.discoveryUrl) {
							const discovery = await betterFetch(c.discoveryUrl, {
								method: "GET",
								headers: c.discoveryHeaders
							});
							if (discovery.data) {
								finalTokenUrl = discovery.data.token_endpoint;
								finalUserInfoUrl = discovery.data.userinfo_endpoint;
							}
						}
						if (!finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.TOKEN_URL_NOT_FOUND);
						return applyDefaultAccessTokenExpiry(await validateAuthorizationCode({
							headers: c.authorizationHeaders,
							code: data.code,
							codeVerifier: data.codeVerifier,
							redirectURI: data.redirectURI,
							options: {
								clientId: c.clientId,
								clientSecret: c.clientSecret,
								redirectURI: c.redirectURI
							},
							tokenEndpoint: finalTokenUrl,
							authentication: c.authentication
						}), c.accessTokenExpiresIn);
					},
					async refreshAccessToken(refreshToken) {
						let finalTokenUrl = c.tokenUrl;
						if (c.discoveryUrl) {
							const discovery = await betterFetch(c.discoveryUrl, {
								method: "GET",
								headers: c.discoveryHeaders
							});
							if (discovery.data) finalTokenUrl = discovery.data.token_endpoint;
						}
						if (!finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.TOKEN_URL_NOT_FOUND);
						return applyDefaultAccessTokenExpiry(await refreshAccessToken({
							refreshToken,
							options: {
								clientId: c.clientId,
								clientSecret: c.clientSecret
							},
							authentication: c.authentication,
							tokenEndpoint: finalTokenUrl
						}), c.accessTokenExpiresIn);
					},
					async getUserInfo(tokens) {
						const userInfo = c.getUserInfo ? await c.getUserInfo(tokens) : await getUserInfo(tokens, finalUserInfoUrl);
						if (!userInfo) return null;
						const userMap = await c.mapProfileToUser?.(userInfo);
						const rawId = isNonEmptyOAuthId(userMap?.id) ? userMap.id : isNonEmptyOAuthId(userInfo.id) ? userInfo.id : isNonEmptyOAuthId(userInfo.sub) ? userInfo.sub : void 0;
						if (rawId === void 0) return null;
						return {
							user: {
								email: userInfo?.email,
								emailVerified: userInfo?.emailVerified,
								image: userInfo?.image,
								name: userInfo?.name,
								...userMap,
								id: String(rawId)
							},
							data: userInfo
						};
					},
					options: { overrideUserInfoOnSignIn: c.overrideUserInfo }
				};
			}).concat(ctx.socialProviders) } };
		},
		endpoints: {
			signInWithOAuth2: signInWithOAuth2(options),
			oAuth2Callback: oAuth2Callback(options),
			oAuth2LinkAccount: oAuth2LinkAccount(options)
		},
		options,
		$ERROR_CODES: GENERIC_OAUTH_ERROR_CODES
	};
};
/**
* Warns when a cookie integration plugin is not effectively last.
*
* A plugin is considered misordered when there is at least one other plugin
* after it in the `plugins` array that declares `hooks.after`, since those
* hooks can set cookies that this integration will not see.
*/
function warnIfCookiePluginNotLast(ctx, pluginId) {
	const plugins = ctx.options.plugins || [];
	if (plugins.length === 0) return;
	const index = plugins.findIndex((p) => p.id === pluginId);
	if (index === -1) return;
	if (!plugins.slice(index + 1).some((p) => p.hooks && Array.isArray(p.hooks.after) && p.hooks.after.length > 0)) return;
	ctx.logger.warn(`[better-auth] Cookie integration plugin "${pluginId}" should be placed last in the plugins array. Plugins with \`hooks.after\` running after it may set cookies that are not forwarded to the framework cookie store. Move your cookie integration plugin to the end of the \`plugins\` array to avoid missing \`Set-Cookie\` headers.`);
}
/**
* TanStack Start cookie plugin for React.
*
* This plugin automatically handles cookie setting for TanStack Start with React.
* It uses `@tanstack/react-start-server` to set cookies.
*
* For Solid.js, use `better-auth/tanstack-start/solid` instead.
*
* @example
* ```ts
* import { tanstackStartCookies } from "better-auth/tanstack-start";
*
* const auth = betterAuth({
*   plugins: [tanstackStartCookies()],
* });
* ```
*/
var tanstackStartCookies = () => {
	let hasWarned = false;
	return {
		id: "tanstack-start-cookies",
		version: PACKAGE_VERSION,
		hooks: { after: [{
			matcher(ctx) {
				return true;
			},
			handler: createAuthMiddleware(async (ctx) => {
				if (!hasWarned) {
					warnIfCookiePluginNotLast(ctx.context, "tanstack-start-cookies");
					hasWarned = true;
				}
				const returned = ctx.context.responseHeaders;
				if ("_flag" in ctx && ctx._flag === "router") return;
				if (returned instanceof Headers) {
					const setCookies = returned?.get("set-cookie");
					if (!setCookies) return;
					const parsed = parseSetCookieHeader(setCookies);
					const { setCookie } = await import("./ssr.mjs").then((n) => n.n).then((n) => n.t);
					parsed.forEach((value, key) => {
						if (!key) return;
						try {
							setCookie(key, value.value, toCookieOptions(value));
						} catch {}
					});
					return;
				}
			})
		}] }
	};
};
var _0001_auth_default = "-- Better Auth schema (identity + sessions for \"Sign in with Grok\").\n--\n-- Generated by the Better Auth CLI for its Postgres adapter — DO NOT EDIT by\n-- hand. `@/lib/auth/server` runs Better Auth against these tables when\n-- DATABASE_URL is set. The columns are camelCase and MUST stay double-quoted so\n-- Postgres preserves the case Better Auth queries by.\n--\n-- Migrations in this folder are the single source of truth for your schema. They\n-- apply to Neon during the Vercel build (`npm run build`) and to the local\n-- PGLite fallback automatically on startup, so dev matches production. Applied\n-- files are recorded by name in `_migrations` and NEVER run again.\n--\n-- Put YOUR app's schema in NEW ordered files (0002_*.sql, 0003_*.sql, …), never\n-- in this one. For app tables, prefer snake_case and give per-user tables a\n-- `user_id TEXT NOT NULL` column (TEXT, not UUID — the preview dev user id is\n-- the string 'dev-user'), then scope every query to the authenticated user\n-- server-side (see the `neon` + `auth` skills and src/lib/auth/verify.server.ts).\n\ncreate table if not exists \"user\" (\n  \"id\" text not null primary key,\n  \"name\" text not null,\n  \"email\" text not null unique,\n  \"emailVerified\" boolean not null,\n  \"image\" text,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz default CURRENT_TIMESTAMP not null\n);\n\ncreate table if not exists \"session\" (\n  \"id\" text not null primary key,\n  \"expiresAt\" timestamptz not null,\n  \"token\" text not null unique,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz not null,\n  \"ipAddress\" text,\n  \"userAgent\" text,\n  \"userId\" text not null references \"user\" (\"id\") on delete cascade\n);\n\ncreate table if not exists \"account\" (\n  \"id\" text not null primary key,\n  \"accountId\" text not null,\n  \"providerId\" text not null,\n  \"userId\" text not null references \"user\" (\"id\") on delete cascade,\n  \"accessToken\" text,\n  \"refreshToken\" text,\n  \"idToken\" text,\n  \"accessTokenExpiresAt\" timestamptz,\n  \"refreshTokenExpiresAt\" timestamptz,\n  \"scope\" text,\n  \"password\" text,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz not null\n);\n\ncreate table if not exists \"verification\" (\n  \"id\" text not null primary key,\n  \"identifier\" text not null,\n  \"value\" text not null,\n  \"expiresAt\" timestamptz not null,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz default CURRENT_TIMESTAMP not null\n);\n\ncreate index if not exists \"session_userId_idx\" on \"session\" (\"userId\");\ncreate index if not exists \"account_userId_idx\" on \"account\" (\"userId\");\ncreate index if not exists \"verification_identifier_idx\" on \"verification\" (\"identifier\");\n";
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl$1 = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl$1 ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.n);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl$1 });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0001_auth.sql": _0001_auth_default });
		const doneRows = await pg.query("select name from _migrations");
		const done = new Set(doneRows.rows.map((r) => r.name));
		for (const [path, text] of Object.entries(migrations).sort(([a], [b]) => a.localeCompare(b))) {
			const name = path.split("/").pop();
			if (done.has(name)) continue;
			await pg.transaction(async (tx) => {
				await tx.exec(text);
				await tx.query("insert into _migrations (name) values ($1)", [name]);
			});
		}
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* The shared PGLite instance (preview only), with `migrations/*.sql` applied.
* Lets Better Auth persist to the SAME embedded DB as app data in preview (via a
* Kysely dialect). Throws when `DATABASE_URL` is set (that path uses Neon).
*/
async function getPglite() {
	if (dbSource !== "pglite") throw new Error("getPglite() is only available on the PGLite fallback (no DATABASE_URL)");
	await getSql();
	const pg = await globalRef.__pgliteInstance__;
	if (!pg) throw new Error("PGLite instance failed to initialize");
	return pg;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
/** Factory used by `auth/server.ts`: `pgliteDialect(() => getPglite())`. */
function pgliteDialect(getClient) {
	return {
		createAdapter: () => new PostgresAdapter(),
		createDriver: () => new LazyPGliteDriver(getClient),
		createQueryCompiler: () => new PostgresQueryCompiler(),
		createIntrospector: (db) => new PostgresIntrospector(db)
	};
}
var LazyPGliteDriver = class {
	getClient;
	client;
	connection;
	queue = [];
	constructor(getClient) {
		this.getClient = getClient;
	}
	async init() {
		this.client = await this.getClient();
	}
	async acquireConnection() {
		if (this.client === void 0) this.client = await this.getClient();
		if (this.connection !== void 0) return new Promise((resolve) => {
			this.queue.push(resolve);
		});
		this.connection = new PGliteConnection(this.client);
		return this.connection;
	}
	async releaseConnection(connection) {
		if (connection !== this.connection) throw new Error("Invalid connection");
		const next = this.queue.shift();
		if (next === void 0) {
			this.connection = void 0;
			return;
		}
		next(this.connection);
	}
	async beginTransaction(conn, settings) {
		const c = conn;
		if (settings.isolationLevel) await c.executeQuery(CompiledQuery.raw(`start transaction isolation level ${settings.isolationLevel}`));
		else await c.executeQuery(CompiledQuery.raw("begin"));
	}
	async commitTransaction(conn) {
		await conn.executeQuery(CompiledQuery.raw("commit"));
	}
	async rollbackTransaction(conn) {
		await conn.executeQuery(CompiledQuery.raw("rollback"));
	}
	async destroy() {
		this.client = void 0;
		this.connection = void 0;
		this.queue = [];
	}
};
var PGliteConnection = class {
	client;
	constructor(client) {
		this.client = client;
	}
	async executeQuery(compiledQuery) {
		const result = await this.client.query(compiledQuery.sql, [...compiledQuery.parameters]);
		if (result.affectedRows) return {
			numAffectedRows: BigInt(result.affectedRows),
			rows: result.rows
		};
		return { rows: result.rows };
	}
	async *streamQuery(compiledQuery, chunkSize) {
		if (!Number.isInteger(chunkSize) || chunkSize <= 0) throw new Error("chunkSize must be a positive integer");
		const result = await this.client.query(compiledQuery.sql, [...compiledQuery.parameters]);
		for (let i = 0; i < result.rows.length; i += chunkSize) yield { rows: result.rows.slice(i, i + chunkSize) };
	}
};
/**
* Host patterns whose callbacks the preview client accepts. Better Auth derives
* the live preview's real origin from the request host and validates it against
* this list (wildcard-matched), so the OAuth `redirect_uri` becomes the concrete
* `https://<preview-host>/api/auth/oauth2/callback/...` the broker allows.
*/
var PREVIEW_ALLOWED_HOSTS = ["*.grok-sandbox.com"];
/**
* Self-hosted Better Auth for THIS app (server-only).
*
* Pre-wired for live preview + deploy — do not rewrite this file. To enable
* local email/password, flip the flag in `./email-password` only (see auth skill).
*
* The app runs its own Better Auth at `/api/auth/*`, so the session cookie stays
* on this app's own origin. Sign-in federates to the shared **Grok auth broker**
* (`GROK_AUTH_ISSUER`) via the `genericOAuth` plugin — the broker brokers the
* upstream sign-in methods (Google, X, …) and holds their shared secrets; this
* app only holds its own client id/secret and names the upstream it wants via
* each provider's `idp` hint.
*
* Tri-mode:
*   - Deployed: the deployer injects a per-app `GROK_AUTH_*` + `BETTER_AUTH_URL`
*     + `DATABASE_URL`, so real federated auth is persisted in Postgres.
*   - Sandbox live preview: no injection -> falls back to the shared **preview
*     client** (`./preview`) and derives the preview's `https://*.grok-sandbox.com`
*     origin from the request, so real sign-in works (no demo users). Sessions
*     and identities persist in the embedded PGLite DB (same DB as app data);
*     the process restart wipes both. Live-preview iframe clients use a bearer
*     token (partitioned cookies) — see `client.ts`.
*   - Explicitly off (`VITE_AUTH_ENABLED=false`): no providers; per-user server
*     functions fall back to a dev user (see `verify.server.ts`).
*
* NEVER import this from client code — it pulls in `pg` + the preview secret +
* server-only Better Auth internals. The client uses `@/lib/auth/client`;
* components read the user via `@/lib/auth/use-current-user`; server functions get
* a verified id via `@/lib/auth/middleware`.
*/
ensureDbReady();
/**
* Preview secret must outlive module reloads: PGLite (and its session rows) is
* stored on `globalThis`, so an HMR re-eval of this file must NOT mint a new
* signing secret or every existing session becomes invalid mid-dev. Process
* restart clears both the secret and PGLite together.
*/
var globalAuthRef = globalThis;
function previewAuthSecret() {
	globalAuthRef.__grokAuthPreviewSecret__ ??= randomBytes(32).toString("hex");
	return globalAuthRef.__grokAuthPreviewSecret__;
}
/** Read an env var, treating empty/whitespace as unset. */
var env$1 = (key) => {
	const value = process.env[key]?.trim();
	return value ? value : void 0;
};
var authDisabled = env$1("VITE_AUTH_ENABLED") === "false";
var grokIssuer = env$1("GROK_AUTH_ISSUER") ?? "https://auth.grok.me";
var grokClientId = env$1("GROK_AUTH_CLIENT_ID") ?? "grok_preview";
var grokClientSecret = env$1("GROK_AUTH_CLIENT_SECRET") ?? "8bcdb7fc5a33874ad933ca568918d5790388a0795e44c4d1dea691f801b17ec5";
/** True when federated sign-in is active (real auth is enforced). */
var authConfigured = !authDisabled && Boolean(grokClientId && grokClientSecret);
var explicitBaseURL = env$1("BETTER_AUTH_URL");
var previewAllowedHosts = [...PREVIEW_ALLOWED_HOSTS];
var LOCAL_DEV_ORIGINS = [
	"http://localhost:8080",
	"http://127.0.0.1:8080",
	"http://[::1]:8080"
];
var baseURL = explicitBaseURL ?? {
	allowedHosts: [
		...previewAllowedHosts,
		"localhost",
		"127.0.0.1",
		"[::1]"
	],
	protocol: "auto",
	fallback: "http://localhost:8080"
};
var trustedOrigins = explicitBaseURL ? [explicitBaseURL, ...LOCAL_DEV_ORIGINS] : [
	...previewAllowedHosts,
	...previewAllowedHosts.flatMap((host) => [`https://${host}`, `http://${host}`]),
	...LOCAL_DEV_ORIGINS
];
var databaseUrl = env$1("DATABASE_URL");
var issuerBase = grokIssuer.replace(/\/+$/, "");
var grokAuthorizationUrl = `${issuerBase}/api/auth/oauth2/authorize`;
var grokTokenUrl = `${issuerBase}/api/auth/oauth2/token`;
var grokUserInfoUrl = `${issuerBase}/api/auth/oauth2/userinfo`;
var database = databaseUrl ? new Pool({ connectionString: databaseUrl }) : {
	dialect: pgliteDialect(() => getPglite()),
	type: "postgres"
};
/** Session token cookie name — also read by the live-preview popup completion page. */
var SESSION_TOKEN_COOKIE = "__Host-grok-auth.session_token";
var grokOAuthPlugin = authConfigured ? genericOAuth({ config: GROK_PROVIDERS.map(({ providerId, idp }) => ({
	providerId,
	clientId: grokClientId,
	clientSecret: grokClientSecret,
	authorizationUrl: grokAuthorizationUrl,
	tokenUrl: grokTokenUrl,
	userInfoUrl: grokUserInfoUrl,
	scopes: [
		"openid",
		"profile",
		"email"
	],
	authorizationUrlParams: {
		idp,
		prompt: "login"
	}
})) }) : null;
var auth = betterAuth({
	baseURL,
	secret: env$1("BETTER_AUTH_SECRET") ?? previewAuthSecret(),
	database,
	trustedOrigins,
	account: {
		encryptOAuthTokens: true,
		accountLinking: {
			enabled: true,
			trustedProviders: GROK_PROVIDERS.map((p) => p.providerId),
			requireLocalEmailVerified: false
		}
	},
	session: { cookieCache: {
		enabled: true,
		maxAge: 300
	} },
	advanced: {
		useSecureCookies: false,
		defaultCookieAttributes: {
			secure: true,
			sameSite: "lax",
			path: "/"
		},
		cookies: {
			session_token: { name: SESSION_TOKEN_COOKIE },
			session_data: { name: "__Host-grok-auth.session_data" },
			account_data: { name: "__Host-grok-auth.account_data" },
			dont_remember: { name: "__Host-grok-auth.dont_remember" }
		}
	},
	plugins: [
		...grokOAuthPlugin ? [grokOAuthPlugin] : [],
		bearer(),
		tanstackStartCookies()
	]
});
var Route$2 = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var $$splitComponentImporter$1 = () => import("./read._chapterId.index-BwfMLBiq.mjs");
var Route$1 = createFileRoute("/read/$chapterId/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./read._chapterId._sectionId-C6XjSO3z.mjs");
var Route = createFileRoute("/read/$chapterId/$sectionId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var CardsRoute = Route$9.update({
	id: "/cards",
	path: "/cards",
	getParentRoute: () => Route$11
});
var LoginRoute = Route$8.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$11
});
var ProgressRoute = Route$7.update({
	id: "/progress",
	path: "/progress",
	getParentRoute: () => Route$11
});
var ReadRoute = Route$6.update({
	id: "/read",
	path: "/read",
	getParentRoute: () => Route$11
});
var TestRoute = Route$5.update({
	id: "/test",
	path: "/test",
	getParentRoute: () => Route$11
});
var ReadIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => ReadRoute
});
var ReadChapterIdRoute = Route$3.update({
	id: "/$chapterId",
	path: "/$chapterId",
	getParentRoute: () => ReadRoute
});
var ApiAuthSplatRoute = Route$2.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$11
});
var ReadChapterIdIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => ReadChapterIdRoute
});
var ReadChapterIdRouteChildren = {
	ReadChapterIdSectionIdRoute: Route.update({
		id: "/$sectionId",
		path: "/$sectionId",
		getParentRoute: () => ReadChapterIdRoute
	}),
	ReadChapterIdIndexRoute
};
var ReadRouteChildren = {
	ReadChapterIdRoute: ReadChapterIdRoute._addFileChildren(ReadChapterIdRouteChildren),
	ReadIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	CardsRoute,
	LoginRoute,
	ProgressRoute,
	ReadRoute: ReadRoute._addFileChildren(ReadRouteChildren),
	TestRoute,
	ApiAuthSplatRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
//#endregion
export { getChapter as A, shuffle as B, ROMAN as C, chapterFacts as D, TOPIC_IDS as E, dayKey as F, escapeHtml as I, fmtDateTime as L, signIn as M, GROK_PROVIDERS as N, chapterReadMinutes as O, cn as P, fmtWhen as R, HANDBOOK as S, TOPICS as T, todayStudied as _, Route$9 as a, weakTopicIds as b, chapterUnlocked as c, masteredCount as d, newCards as f, startCardSession as g, seenCount as h, Route$5 as i, topicFacts as j, checkItems as k, dueCards as l, readinessScore as m, Route as n, Button as o, nextReviewTs as p, Route$1 as r, cardId as s, router_exports as t, focusCardSession as u, topicMastery as v, TESTABLE_CHAPTERS as w, FACTS as x, useStudy as y, highlightDates as z };
