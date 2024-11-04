import { error } from "@sveltejs/kit";
import type { MarkdownPost, Post } from "$lib/types";

const posts = import.meta.glob("/src/posts/*.md");

export async function load({ params }: any) {
  const slug = params.slug;
  const postPath = `/src/posts/${slug}.md`;

  try {
    const post = (await import(/* @vite-ignore */ postPath)) as MarkdownPost;

    if (!post) {
      throw error(404, `Could not find ${slug}`);
    }

    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch (e) {
    console.error("Error loading post:", e);
    throw error(404, `Could not find ${slug}`);
  }
}
