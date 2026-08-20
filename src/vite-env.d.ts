/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_HOSTNAME?: string;
  readonly VITE_AUTH_ENABLED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
