declare module NProgress {
  function start();
  function done();
  function configure(option: any);
}

interface PlayerOption {
  el?: string;
  url?: string;
  id?: string;
  width?: number | string;
  height?: number | string;
  fluid?: boolean;
  definitionActive?: "click" | "hover";
}

declare class Player {
  constructor(option?: PlayerOption);
  src: string;
  play(): void;
  pause(): void;
  stop(): void;
  start(url: string): void;
  emit(event: string, data: any): void;
}

type request_params = {
  baseURL?: string;
  params?: {
    [key: string]: any;
  };
};

// type CreateOptions<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
// // 使用

// export type G_RequestOptions = CreateOptions<request_params & UniApp.RequestOptions, "url">;
export type G_RequestOptions = request_params & UniApp.RequestOptions;
