import { StyledMain } from '@/app/page.styles';
import { Posts } from '@/lib/blog/posts';
import { Center } from '@mantine/core';
import { Metadata, ResolvingMetadata } from 'next';
import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc';
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
      <MDXRemote source={post.getContent()} components={{ Center: (props) => <Center {...props} />, StyledMain: (props) => <StyledMain {...props} />}} options={{ parseFrontmatter: true }}  />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const posts = new Posts();

  return posts.getSlugs();
}

export async function generateMetadata(
  { params }: Params,
  /* eslint-disable-next-line */
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const post = new Posts().forSlug(params.slug);
  if (!post) {
    return notFound();
  }

  const { frontmatter } = await compileMDX<{ title: string }>({
    source: post.getContent(),
    options: { parseFrontmatter: true },
  })

  return {
    title: frontmatter.title
  }
}
