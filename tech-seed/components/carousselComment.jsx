import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="ml[500px]">
        {Array.from({ length: 3}).map((_, index) => (
          <CarouselItem key={index +1} className="md:basis-1/2 lg:basis-1/3  ">
            <div className="p-1  ">
              <Card className="w-[400px] h-[300px] justify-between -mt-3 ">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                  <div className="">
                    <img src="image 1.png" alt="" />
                    <div  className="ml-36 -mt-20 w-32">
                    <h1 className="text-lg font-bold">Titre de la videoo</h1>
                    <span className="flex flex-row">
                      5.0
                      <img src="start.png" alt="" />
                      <img src="start.png" alt="" />
                      <img src="start.png" alt="" />
                      <img src="start.png" alt="" />
                      <img src="start.png" alt="" />
                    </span>
                    <br />
                    <br />
                    <div className="-ml-40 w-56">Coucou comment vas Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. 
                      Laudantium quae eligendi cupiditate rerum asperiores
                    </div>
                    </div>
                   
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
