import { readFileSync } from 'fs';
import { join } from 'path';

export class Post {
  private readonly content: string;
  private readonly slug: string;

  constructor(postsPath: string, post: string) {
    if (!post.endsWith('.mdx')) {
      throw new Error('Invalid post extension');
    }

    this.content = readFileSync(join(postsPath, post), 'utf8');
    this.slug = post.replace('.mdx', '')
  }

  public getSlug(): string {
    return this.slug;
  }

  public getContent(): string {
    return this.content;
  }
}
