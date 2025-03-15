"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/ui/testimonialCard";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
  companyName: z.string().min(2).max(255),
  phonenumber: z.string().min(10).max(12),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container w-full mb-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-2 rounded-3xl overflow-hidden bg-[#F3EEE4] text-black py-8">
          <CardContent>
            <Form {...form}>
              <h2 className="text-3xl md:text-3xl font-bold mb-10 md:pt-2">
                Let&apos;s build something great together.
              </h2>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="First name"
                            {...field}
                            className="border-b border-black/50 bg-transparent text-black placeholder:text-black placeholder:font-semibold placeholder:text-xs focus-visible:border-black"
                          />
                        </FormControl>
                        <FormMessage className="text-black/90" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Last name"
                            {...field}
                            className="border-b border-black/50 bg-transparent text-black placeholder:text-black placeholder:font-semibold placeholder:text-xs focus-visible:border-black"
                          />
                        </FormControl>
                        <FormMessage className="text-black/90" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Company Name (optional)"
                          {...field}
                          className="border-b border-black/50 bg-transparent text-black placeholder:text-black placeholder:font-semibold placeholder:text-xs focus-visible:border-black"
                        />
                      </FormControl>
                      <FormMessage className="text-black/90" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Work email address"
                            {...field}
                            className="border-b border-black/50 bg-transparent text-black placeholder:text-black placeholder:font-semibold placeholder:text-xs focus-visible:border-black"
                          />
                        </FormControl>
                        <FormMessage className="text-black/90" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phonenumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Phone Number"
                            {...field}
                            className="border-b border-black/50 bg-transparent text-black placeholder:text-black placeholder:text-xs placeholder:font-semibold focus-visible:border-black"
                          />
                        </FormControl>
                        <FormMessage className="text-black/90" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your project (optional)"
                          className="resize-none border-b border-black/50 bg-transparent text-black  placeholder:text-black placeholder:font-semibold focus-visible:border-black scrollbar-hide"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-black/90" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Button className="w-[75%] bg-white font-semibold text-orange-500 hover:bg-orange-400/90 hover:text-black px-10 rounded-md">
                    Send request
                  </Button>
                  <p className="text-xs text-black/80">
                    By sending this form, You confirm that You have read and accepted the Privacy Policy.
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>

        </Card>

        <Card className="col-span-1 rounded-3xl overflow-hidden bg-zinc-100 px-4">
          <TestimonialCard />
        </Card>
      </div>
    </section>
  );
};
