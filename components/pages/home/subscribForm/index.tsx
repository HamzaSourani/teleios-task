"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Z from "zod";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import {
  SendHorizonalIcon,
  LoaderCircleIcon,
  CircleCheckBigIcon,
} from "lucide-react";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CarouselContainer from "@/components/ui/carouselContainer";
const SubscribeForm = () => {
  const { toast } = useToast();
  const defaultValues: Z.infer<typeof formSchema> = {
    email: "",
  };
  const formSchema = Z.object({
    email: Z.string({ required_error: "this field is required" }).email({
      message: "please enter valid email",
    }),
  });
  const form = useForm<Z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const fakeApi = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
          resolve({});
        } else {
          reject();
        }
      }, 1000);
    });
  console.log(form.formState.errors.email?.message);
  const handleSendUserEmail = async (values: Z.infer<typeof formSchema>) => {
    try {
      const res = await fakeApi();

      form.reset();
      toast({
        description: (
          <div className="flex items-center gap-2">
            <p> `Thanks you for your subscription `</p>
            <CircleCheckBigIcon className="text-primary" />
          </div>
        ),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Oops!,something went wrong,please try again",
      });
    }
  };
  return (
    <section>
      <Container title="faq's">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
          <p className="section-header">
            sign up to our news letter
            <span className="block">to receive a 10% coupon</span>
          </p>
          <p className="content-text">
            join our community of codemad champion & migration experts
          </p>

          <form className="" onSubmit={form.handleSubmit(handleSendUserEmail)}>
            <div className="  -skew-x-[35deg] rounded-br-lg rounded-tl-lg  bg-card ">
              <div className="flex skew-x-[35deg] justify-center ">
                <input
                  className="h-10 w-full  bg-transparent px-4 placeholder:text-sm focus:outline-none"
                  placeholder="enter your email address"
                  type="email"
                  {...form.register("email")}
                />

                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting && (
                    <LoaderCircleIcon className="mr-1 animate-spin fill-secondary " />
                  )}
                  {"submit"}
                </Button>
              </div>
            </div>
            {form.formState.errors.email && (
              <p className="content-text text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SubscribeForm;
