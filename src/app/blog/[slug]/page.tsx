import { Posts } from '@/lib/blog/posts';
import { Button } from '@mantine/core';
import console from 'console';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

type Params = {
  params: {
    slug: string;
  };
};

export default function Post({ params }: Params) {
  const post = new Posts().forSlug(params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <Suspense fallback={<>Loading...</>}>
      <MDXRemote source={post.getContent()} components={{ h1: (props) => <Button>{props.children}</Button> }} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const posts = new Posts();

  console.log(posts);

  return posts.getSlugs();
}
