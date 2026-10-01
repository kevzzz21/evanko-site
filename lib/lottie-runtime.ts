/** Share the player and animation downloads; Lottie mutates each instance's data. */
export type LottieAnimation = {
  play(): void;
  pause(): void;
  destroy(): void;
  goToAndStop(frame: number, isFrame: boolean): void;
  addEventListener(name: string, callback: () => void): void;
  isLoaded?: boolean;
};

type AnimationData = Record<string, unknown>;
type LottiePlayer = {
  loadAnimation(options: {
    container: HTMLElement;
    renderer: 'svg' | 'canvas';
    loop: boolean;
    autoplay: boolean;
    animationData: AnimationData;
    rendererSettings?: { dpr: number };
  }): LottieAnimation;
};

declare global {
  interface Window { lottie?: LottiePlayer }
}

let playerPromise: Promise<LottiePlayer> | undefined;
const dataCache = new Map<string, Promise<AnimationData>>();

export function loadLottie(): Promise<LottiePlayer> {
  if (window.lottie) return Promise.resolve(window.lottie);
  if (playerPromise) return playerPromise;
  playerPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-ff-lottie]');
    const script = existing ?? document.createElement('script');
    script.addEventListener('load', () => {
      if (window.lottie) resolve(window.lottie);
      else reject(new Error('Animation player unavailable'));
    }, { once: true });
    script.addEventListener('error', () => {
      playerPromise = undefined;
      if (!existing) script.remove();
      reject(new Error('Animation player failed to load'));
    }, { once: true });
    if (!existing) {
      script.src = '/flashfluent-assets/lottie/lottie.min.js';
      script.dataset.ffLottie = 'true';
      script.async = true;
      document.head.appendChild(script);
    }
  });
  return playerPromise;
}

export async function loadAnimationData(path: string): Promise<AnimationData> {
  let pending = dataCache.get(path);
  if (!pending) {
    pending = fetch(`/flashfluent-assets/lottie/${path}`).then(response => {
      if (!response.ok) throw new Error('Animation data failed to load');
      return response.json() as Promise<AnimationData>;
    });
    dataCache.set(path, pending);
    pending.catch(() => dataCache.delete(path));
  }
  return structuredClone(await pending);
}

/** Give the initial content two paint opportunities before optional animation work. */
export function afterPaintIdle(callback: () => void): () => void {
  let cancelled = false;
  let frame = 0;
  let idle: number | undefined;
  let timer: number | undefined;
  frame = requestAnimationFrame(() => {
    frame = requestAnimationFrame(() => {
      if (cancelled) return;
      if (typeof window.requestIdleCallback === 'function') {
        idle = window.requestIdleCallback(() => { if (!cancelled) callback(); }, { timeout: 1500 });
      } else {
        timer = window.setTimeout(() => { if (!cancelled) callback(); }, 100);
      }
    });
  });
  return () => {
    cancelled = true;
    cancelAnimationFrame(frame);
    if (idle !== undefined) window.cancelIdleCallback(idle);
    if (timer !== undefined) window.clearTimeout(timer);
  };
}
