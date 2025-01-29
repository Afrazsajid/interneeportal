"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CosCombobox } from "./ui/combobox";
import { getInternships } from "@/sanity/lib/getInternShips/getInternShips";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  internshipref: z.string().min(1, { message: "Please select a framework." }),
});



interface FormData {
  name: string;
  email: string;
  internshipref: string;
}

interface ApplyFormProps {
  internshiprefData: { value: string; label: string }[];
}

export function ApplyForm({ internshiprefData }: ApplyFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      internshipref: "",
    },
  });

  function onSubmit(values: FormData) {
    console.log("Submitted Data:", values);
    form.reset();
  }

  return( <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
  <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
    Internship Application Form
  </h1>
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Full Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your full name"
                {...field}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Email Address</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="Enter your email"
                {...field}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="internshipref"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Preferred InternShip</FormLabel>
            <FormControl>
              <CosCombobox items={internshiprefData} value={field.value} onChange={field.onChange} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      <Button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Submit Application
      </Button>
    </form>
  </Form>
</div>
);
}
