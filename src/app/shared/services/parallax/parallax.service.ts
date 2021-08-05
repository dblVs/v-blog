import { animationFrameScheduler, fromEvent, Observable } from 'rxjs';
import { map, observeOn } from 'rxjs/operators';

export interface Point {
  x: number;
  y: number;
}

export const parallax: Observable<Point> = fromEvent(document, 'mousemove').pipe(
  observeOn(animationFrameScheduler),
  map((event: Event) => {
    const {
      view: { innerHeight: windowHeight, innerWidth: windowWidth },
      clientX: x,
      clientY: y,
    } = event as any;

    return {
      x: normalizeExponentiallyAsPercent((windowWidth / 2 - x) / windowWidth),
      y: normalizeExponentiallyAsPercent((windowHeight / 2 - y) / windowHeight),
    };
  }),
);

function normalizeExponentiallyAsPercent(percentage: number) {
  return (percentage * 2) ** 2 * (percentage < 0 ? -1 : 1);
}
