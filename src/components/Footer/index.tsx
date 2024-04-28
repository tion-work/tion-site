"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";

interface IFormInput {
  email: string;
  password: string;
}

const Footer = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <footer className="mt-16 rounded-2xl bg-black m-10 flex flex-col items-center text-white">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[384px] flex items-stretch bg-white p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, max: 75 })}
          className="w-full bg-transparent text-black focus:border-black focus:ring-0 border-0 border-b mr-2 pb-1 pl-0"
        />

        <input
          type="submit"
          className="bg-black text-white cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>

      <div className="flex items-center mt-8">
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <GithubIcon className="hover:scale-125 transition-all ease-in-out duration-200 fill-white" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <DribbbleIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
        </a>
      </div>

      <div className="w-full mt-24 relative font-medium border-solid border-white py-6 px-8 flex flex-row items-center justify-between">
        <span className="text-center">
          &copy;2024 CodeBucks. All rights reserved.
        </span>
        <Link href={"/sitemap.xml"} className="text-center underline">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a
            href="https://devdreaming.com"
            target="_blank"
            className="underline"
          >
            CodeBucks
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
