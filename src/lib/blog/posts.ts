import { readdirSync } from 'fs';
import { join } from 'path';
import { Post } from './post';

export class Posts {
  private readonly postsPath = join(process.cwd(), 'src', 'posts');

  private readonly posts: Post[];

  constructor() {
    const postSlugs = readdirSync(this.postsPath);
    this.posts = postSlugs.map((post) => new Post(this.postsPath, post));
  }

  public getSlugs(): { slug: string }[] {
    return this.posts.map((post) => ({ slug: post.getSlug() }));
  }

  public forSlug(slug: string): Post | null {
    return this.posts.find((post) => post.getSlug() === slug) ?? null;
  }
}
