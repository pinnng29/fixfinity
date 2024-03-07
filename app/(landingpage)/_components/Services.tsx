import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { soria } from '@/lib/fonts';
import { services } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import reactStringReplace from 'react-string-replace';
import { serviceItem } from './Services-item';

export default function Services() {
  return (
    <section
      id="services"
      className="bg-primary-foreground py-12"
    >
      <div className="container mx-auto delay-300 duration-1000 animate-in fade-in slide-in-from-bottom-7">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2
            className={cn(
              soria.className,
              'text-3xl font-extrabold tracking-wide sm:text-5xl'
            )}
          >
            {reactStringReplace(
              services.heading,
              /\*\*(.*)\*\*/g,
              (match, i) => (
                <span
                  key={i}
                  className="word-animation"
                >
                  {match}
                </span>
              )
            )}
          </h2>

          <div className="mx-auto">
            <Carousel className="w-full max-w-md">
              <CarouselContent className="-ml-1">
                {serviceItem.map((service, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-3 lg:p-1 md:p-4">
                      <p
                        className={cn(
                          soria.className,
                          ' text-3xl lg:text-xl md:text-lg sm:text-2xl tracking-wide capitalize'
                        )}
                      >
                        {service.title}
                      </p>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span>{service.label}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className=''/>
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}