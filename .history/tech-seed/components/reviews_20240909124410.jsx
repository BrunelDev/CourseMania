import React from "react";
import Testimonial from "@/components/testimonal";
export default function Reviews() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <Testimonial />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Testimonial />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Testimonial />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Testimonial />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Testimonial />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Testimonial />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Testimonial />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
