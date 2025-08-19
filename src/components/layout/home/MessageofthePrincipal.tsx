'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { TestimonialCard } from './TestimonialCard'
import { GoDot, GoDotFill } from 'react-icons/go'
import Autoplay from 'embla-carousel-autoplay'

function MessageofthePrincipal() {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }
        console.log(api)

        setCount(api.scrollSnapList().length)

        setCurrent(api.selectedScrollSnap() + 1)


        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
        console.log(count)
        console.log(current)
    }, [api, count, current])

    // const dotStyle = (num: number) => {
    //     return `size-3 ${num === current ? 'text-black size-4 ml-2' : 'text-success ml-2'}`
    // }

     const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

    return (
        <div className='px-[5%]  relative' style={{ backgroundImage: "url('hero-bg.svg')" }}>
            <Carousel plugins={[plugin.current]} opts={{ loop: true }} setApi={setApi} className="w-full max-w-screen-2xl mx-auto overflow-hidden pt-10 pb-20 relative z-20">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/1 lg:basis-2/3">
                            <div className="p-1">
                                <TestimonialCard />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
                <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 py-2 flex items-center justify-center text-muted-foreground ">
                {
                    Array.from({ length: count }).map((_, i) =>
                        i === current ? 
                        <GoDotFill key={i} className='text-success size-4 ml-2' /> : <GoDot key={i} className='text-success size-5 ml-2'  />

                    )
                }
            </div>
            </Carousel>
            
        </div>
    )
}

export default MessageofthePrincipal

