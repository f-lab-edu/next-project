declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_TMDB_BASE_URL: string;
    readonly NEXT_PUBLIC_TMDB_TOKEN: string;
    readonly NEXT_PUBLIC_TMDB_RESOURCE_BASE_URL: string;
    readonly NEXT_PUBLIC_BASE_URL: string;
  }
}
