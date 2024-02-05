import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { soria } from '@/lib/fonts';
import { strategy, strategyItem } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import reactStringReplace from 'react-string-replace';

export default function Strategy() {
    return (
        <section className="bg-primary-foreground py-12">
            <div className="container mx-auto delay-300 duration-1000 animate-in fade-in slide-in-from-bottom-7">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <Badge className="text-zinc-50">Strategy</Badge>
                    <h2
                        className={cn(
                            soria.className,
                            'text-3xl font-extrabold tracking-wide sm:text-5xl'
                        )}
                    >
                        {reactStringReplace(
                            strategy.heading,
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
                        This is our Strategy 🚀🚀
                    </p>
                </div>
                <div className="mx-auto mt-10 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {strategyItem.map((strategy, i) => (
                        <Card
                            key={i}
                            className="min-h-[180px]"
                        >
                            <CardHeader className="text-xl font-bold">
                                {strategy.title}
                            </CardHeader>
                            <CardContent className="text-sm">
                                {strategy.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
