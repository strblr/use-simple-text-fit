import { DependencyList } from "react";
interface Options {
    min?: number;
    max?: number;
}
export declare function useTextFit<T extends HTMLElement>({ min, max }?: Options, deps?: DependencyList): readonly [import("react").RefObject<T>, () => undefined];
export declare function fitText<T extends HTMLElement>(el: T, min: number, max: number): void;
export {};
