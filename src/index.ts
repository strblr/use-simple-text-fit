import { DependencyList, useCallback, useEffect, useRef } from "react";

interface Options {
  min?: number;
  max?: number;
}

export function useTextFit<T extends HTMLElement>(
  { min = 1, max = 100 }: Options = {},
  deps: DependencyList = []
) {
  const ref = useRef<T>(null);
  const fit = useCallback(
    () => void (ref.current && fitText(ref.current, min, max)),
    [min, max]
  );
  useEffect(fit, [fit, ...deps]);
  return [ref, fit] as const;
}

export function fitText<T extends HTMLElement>(
  el: T,
  min: number,
  max: number
) {
  const height = el.clientHeight;
  const isFit = () => el.scrollHeight - 1 <= height;

  let low = min;
  let high = max;
  let mid: number;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    el.style.fontSize = `${mid}px`;
    if (isFit()) low = mid + 1;
    else high = mid - 1;
  }

  mid = Math.min(low, high);
  mid = Math.max(mid, min);
  mid = Math.min(mid, max);
  el.style.fontSize = `${mid}px`;
}
