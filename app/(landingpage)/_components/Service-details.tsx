import { Badge } from '@/components/ui/badge';
import { soria } from '@/lib/fonts';
import { details, detailsItem } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import reactStringReplace from 'react-string-replace';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function ServiceDetails() {
  return (
    <section
      id="servicesDetails"
      className="bg-primary-foreground py-12"
    >
      <div className="container mx-auto delay-300 duration-1000 animate-in fade-in slide-in-from-bottom-7">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge className="text-zinc-50">Services Details</Badge>
          <h2
            className={cn(
              soria.className,
              'text-3xl font-extrabold tracking-wide sm:text-5xl'
            )}
          >
            {reactStringReplace(
              details.heading,
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
        </div>
        <div className="mx-auto mt-10 grid items-start gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {detailsItem.map((detail, i) => (
            <Card
              key={i}
              className="min-h-[220px]"
            >
              <CardHeader className="text-lg font-bold items-center">
                {detail.title}
              </CardHeader>
              <CardContent className="text-sm items-center">
                {detail.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
