import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  name?: string;
  className?: string;
}

const Tag: React.FC<Props> = ({ link = "#", name, className = "" }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease-in-out duration-200",
        className
      )}
    >
      {name}
    </Link>
  );
};
export default Tag;
