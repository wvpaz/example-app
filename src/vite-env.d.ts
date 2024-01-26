/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_USER_NAME: string
    readonly VITE_APP_USER_SURNAME: string
    readonly VITE_APP_USER_AGE: number
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }