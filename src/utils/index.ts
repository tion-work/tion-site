import { Post } from "contentlayer/generated";
import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames: string[]) =>
  classNames.filter(Boolean).join(" ");

export const sortPosts = (posts: Post[]) => {
  return posts
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
