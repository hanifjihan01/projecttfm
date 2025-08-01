import { PropsWithChildren } from 'react';

export function CarouselItem({ children }: PropsWithChildren) {
  return <div className="keen-slider__slide">{children}</div>;
}
