import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getRandomWords } from "@/lib/utils";
import { useState } from "react";

export default function PlayGamePage() {
  const formSchema = z.object({
    words: z.coerce.number(),
    difficulty: z.enum(["easy", "medium", "hard"]),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      words: 40,
      difficulty: "easy",
    },
  });

  const [finalWords, setFinalWords] = useState("");
  const [correctChars, setCorrectChars] = useState(0);
  const [totalTyped, setTotalTyped] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  function handleTyping(inputChar: string, expectedChar: string) {
    setTotalTyped((prev) => prev + 1);

    if (inputChar === expectedChar) {
      setCorrectChars((prev) => prev + 1);
    }
  }

  const minutes = (60 - timeLeft) / 60;

  function calculateResults() {
    const minutes = (60 - timeLeft) / 60;

    const wpm = Math.round(correctChars / 5 / minutes);
    const accuracy = Math.round((correctChars / totalTyped) * 100);

    return { wpm, accuracy };
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const randomWords = getRandomWords(values.words, values.difficulty);
    setFinalWords(randomWords.join(" "));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="text-center space-y-2 w-sm">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
          Game Page
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="words"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4">
                  <FormLabel className="w-fit">Words</FormLabel>

                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                      defaultValue={field.value?.toString()}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select words" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="40">40</SelectItem>
                        <SelectItem value="60">60</SelectItem>
                        <SelectItem value="80">80</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="difficulty"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4">
                  <FormLabel className="whitespace-nowrap">
                    Difficulty
                  </FormLabel>
                  <FormControl className="flex-1">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Play
            </Button>
          </form>
        </Form>
        {finalWords && <div>{finalWords}</div>}
      </div>
    </div>
  );
}
