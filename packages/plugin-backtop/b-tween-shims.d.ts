declare module 'b-tween' {
  interface BTWeenType {
    from?: {
      scrollTop?: number;
    };
    to?: {
      scrollTop?: number;
    },
    duration?: number;
    delay?: number;
    easing?: string;
    onStart?: (info?: Record<string, string | number>) => void;
    onUpdate?: (info?: Record<string, string | number>) => void;
    onFinish?: (info?: Record<string, string | number>) => void;
    startTime?: number;
    started?: boolean;
    finished?: boolean;
    update?: () => void;
    start?: () => void;
    stop?: () => void;
  };

  export default class BTween {
    constructor(options?: BTWeenType): BTween;
    start(): void;
  }
}
