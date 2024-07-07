/// <reference types="vite/client" />

interface ImportMetaEnv  {
    readonly baseURL: String
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}