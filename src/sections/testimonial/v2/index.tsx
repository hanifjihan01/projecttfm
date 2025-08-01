'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import {
  TestimonialCard,
  TestimonialCardProps,
} from 'src/components/cards/testimonial/v2';
import { testimonialSectionData } from '@/data/testimonial-section/v2';
import { CarouselItem } from '@/src/components/carousel/sub-components/item';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export interface TestimonialSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  subtitle3?: string;
  cards: TestimonialCardProps[];
}

export function TestimonialSection() {
  const { sectionHeading, cards } = testimonialSectionData;

  const [, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.2, spacing: 30 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 30 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slides: { perView: 1, spacing: 30 },
  });

  return (
    <section className="section-padding-primary relative overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="mb-10 flex justify-center text-center md:mb-[3.75rem]">
          <div className="max-w-[680px]">
            <SectionHeading {...sectionHeading} />
            {sectionHeading.subtitle3 && (
              <span className="mb-[.625rem] block font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md">
                {sectionHeading.subtitle3}
              </span>
            )}
          </div>
        </div>

        {/* Carousel + Buttons */}
        <div className="relative">
          {/* Carousel */}
          <div ref={sliderRef} className="keen-slider">
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                <TestimonialCard {...card} />
              </CarouselItem>
            ))}
          </div>

          {/* Navigation Buttons */}
          {cards.length > 3 && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-[-1rem] top-[60%] z-10 rounded-full bg-white p-2 shadow-md transition hover:bg-gray-100"
                aria-label="Previous"
              >
                <ArrowLeft size={24} />
              </button>

              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-[-1rem] top-[60%] z-10 rounded-full bg-white p-2 shadow-md transition hover:bg-gray-100"
                aria-label="Next"
              >
                <ArrowRight size={24} />
              </button>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
