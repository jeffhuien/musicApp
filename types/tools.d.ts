//顶部进度插件
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
//西瓜视频插件
declare class Player {
  constructor(option?: PlayerOption);
  src: string;
  play(): void;
  pause(): void;
  stop(): void;
  start(url: string): void;
  emit(event: string, data: any): void;
}

// declare module "ColorThief" {}
//   export function getColor(sourceImage: HTMLImageElement, quality?: number): { r: number; g: number; b: number };
//   export function getPalette(sourceImage: HTMLImageElement, colorCount?: number, quality?: number): [[number, number, number], [number, number, number]];
// }

declare module "ColorThief" {
  // declare class ColorThief {
  // constructor();
  function getColor(sourceImage: HTMLImageElement, quality?: number): { r: number; g: number; b: number };
  function getPalette(sourceImage: HTMLImageElement, colorCount?: number, quality?: number): [[number, number, number], [number, number, number]];
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
declare type G_RequestOptions = request_params & UniApp.RequestOptions;
