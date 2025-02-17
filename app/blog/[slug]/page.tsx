import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { getPostBySlug } from "@/lib/mdx"
import { formatDate } from "@/lib/utils"
import { MDXRemote } from "next-mdx-remote/rsc"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-4">
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-muted-foreground">{formatDate(post.date)}</p>
      </div>
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}