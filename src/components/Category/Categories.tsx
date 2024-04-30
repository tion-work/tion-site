import { slug } from "github-slugger";
import React from "react";
import Category from "../Elements/Category";

interface Props {
  categories: string[];
  currentSlug: string;
}

const Categories: React.FC<Props> = ({ categories, currentSlug }) => {
  return (
    <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-black dark:text-white border-b-2 border-solid border-black dark:border-white py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
