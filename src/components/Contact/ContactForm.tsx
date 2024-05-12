"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  mobileNumber: string;
  projectDetails: string;
}

export default function ContactForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-500 
        focus:border-gray-500 bg-transparent"
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="your@email"
        {...register("email", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-500 
        focus:border-gray-500 bg-transparent"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register("mobileNumber", {
          minLength: 6,
          maxLength: 12,
        })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-500 
        focus:border-gray-500 bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea
        placeholder="My project is about..."
        rows={3}
        {...register("projectDetails", {})}
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray-500 
        focus:border-gray-500 bg-transparent"
      />
      <input
        type="submit"
        value="send request"
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-black dark:border-white rounded cursor-pointer"
      />
    </form>
  );
}
