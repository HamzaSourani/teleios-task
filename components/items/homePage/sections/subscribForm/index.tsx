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
const SubscribeForm = () => {
  const { toast } = useToast();
  const defaultValues: Z.infer<typeof formSchema> = {
    name: "",
    email: "",
    watchParty: false,
    familyFun: false,
    newRaceModes: false,
    privateEvents: false,
    receiveInfo: false,
    receiveNews: false,
  };
  const formSchema = Z.object({
    email: Z.string({ required_error: "this field is required" }).email({
      message: "please enter valid email",
    }),
    name: Z.string({ required_error: "this field is required" }).min(5, {
      message: "please enter at least five characters",
    }),
    watchParty: Z.boolean(),
    familyFun: Z.boolean(),
    newRaceModes: Z.boolean(),
    privateEvents: Z.boolean(),
    receiveInfo: Z.boolean(),
    receiveNews: Z.boolean(),
  });
  const form = useForm<Z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const fakeApi = (params: { userName: string }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
          resolve(params);
        } else {
          reject();
        }
      }, 1000);
    });

  const handleSendUserEmail = async (values: Z.infer<typeof formSchema>) => {
    try {
      const res = await fakeApi({ userName: values.name });

      form.reset();
      toast({
        description: (
          <div className="flex items-center gap-2">
            <p> `Thanks you for your subscription ${res.userName}`</p>
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
    <div className="bg-secondary/10 min-h-[60vh]   ">
      <Container className=" flex gap-4 flex-col items-center py-20">
        <p className="section-header !text-white">Be the first to know.</p>
        <p>
          Early access to bookings, exciting Teleios events, Grand Prix watch
          parties, and new releases.
        </p>

        <Form {...form}>
          <form
            className="flex flex-col gap-8"
            onSubmit={form.handleSubmit(handleSendUserEmail)}
          >
            <div className="grid   grid-cols-1 justify-center  gap-4  md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-72">
                    <FormLabel>{"User name"}</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder={"Enter your name"} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-72">
                    <FormLabel>{"Email"}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder={"Enter your email"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p>What are you interested in?</p>
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="watchParty"
                render={({ field }) => (
                  <FormItem className="flex  items-center gap-2  ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">Watch Parties </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="privateEvents"
                render={({ field }) => (
                  <FormItem className="flex  items-center gap-2  ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">Private Events </FormLabel>
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="newRaceModes"
                render={({ field }) => (
                  <FormItem className="flex  items-center gap-2  ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">New Race Modes </FormLabel>
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="familyFun"
                render={({ field }) => (
                  <FormItem className="flex  items-center gap-2  ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">Family Fun </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="receiveInfo"
              render={({ field }) => (
                <FormItem className="flex  items-center gap-2  ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="!mt-0">
                    I want to receive the latest information from Teleios
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="receiveNews"
              render={({ field }) => (
                <FormItem className="flex  items-center gap-2  ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="!mt-0">
                    I want to receive the latest information from Teleios
                    including relevant news, surveys, offers, and exclusive
                    competitions{" "}
                  </FormLabel>
                </FormItem>
              )}
            />{" "}
            <div className=" self-start">
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                size={"sm"}
              >
                {form.formState.isSubmitting ? (
                  <LoaderCircleIcon className="mr-1 animate-spin fill-secondary " />
                ) : (
                  <SendHorizonalIcon className="mr-1 fill-secondary" />
                )}
                {"submit"}
              </Button>
            </div>
          </form>
        </Form>
      </Container>
    </div>
  );
};

export default SubscribeForm;
