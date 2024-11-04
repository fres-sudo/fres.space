import type { ComponentType } from "svelte";

export type Categories = {
  text: string;
  color: string;
};

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Categories[];
  published: boolean;
  image: string;
};

export type MarkdownPost = {
  metadata: Post;
  default: ComponentType;
};

export type MarkdownPostMetadataAndSlug = {
  slug: string;
  metadata: MarkdownPost["metadata"];
};
