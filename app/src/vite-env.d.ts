/// <reference types="vite/client" />

interface ImportMetaEnv  {
    readonly baseURL: String
    readonly apiBaseURL: String
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}