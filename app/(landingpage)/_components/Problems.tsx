import { Badge } from "@/components/ui/badge";
import { soria } from "@/lib/fonts";
import { problems, problemsItem } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import reactStringReplace from "react-string-replace";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';




export default function Problems() {
  return (
      <section className="bg-primary-foreground py-12">
          <div className="container mx-auto delay-300 duration-1000 animate-in fade-in slide-in-from-bottom-7">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <Badge className="text-zinc-50">Problems</Badge>
                  <h2
                      className={cn(
                          soria.className,
                          'text-3xl font-extrabold tracking-wide sm:text-5xl'
                      )}
                  >
                      {reactStringReplace(
                          problems.heading,
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
                  <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed">
                    This is your problems🚀🚀
                  </p>
              </div>
              <div className="mx-auto mt-10 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {problemsItem.map((problem, i) => (
                  <Card key={i}
                  className="min-h-[180px]">
                    <CardHeader className="text-xl font-bold">
                      {problem.title}
                    </CardHeader>
                    <CardContent className="text-sm">
                      {problem.description}
                    </CardContent>
                  </Card>
                ))}
              </div>
          </div>
      </section>
  );
}