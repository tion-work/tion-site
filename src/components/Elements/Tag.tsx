import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  name: string;
}

const Tag: React.FC<Props> = ({ link = "#", name }) => {
  return (
    <>
      <Link
        href={link}
        className={cx(
          "inline-block py-3 px-10 bg-black text-white rounded-full capitalize font-semibold border-2 border-solid border-white hover:scale-105 transition-all ease-in-out duration-200"
        )}
      >
        {name}
      </Link>
    </>
  );
};
export default Tag;
