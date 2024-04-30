import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  name?: string;
  active: boolean;
  className?: string;
}

const Category: React.FC<Props> = ({
  link = "#",
  name,
  active,
  className = "",
}) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full border-2 border-solid border-black dark:border-white hover:scale-105 transition-all ease duration-200 m-2",
        className,
        active
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "bg-white text-black dark:bg-black dark:text-white"
      )}
    >
      #{name}
    </Link>
  );
};
export default Category;
