/// <reference types="vite/client" />

interface ImportMetaEnv  {
    readonly VITE_REACT_APP_baseURL: String
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}