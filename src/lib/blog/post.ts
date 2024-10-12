import { readFileSync } from 'fs';

export class Post {
  private readonly content: string;
  private readonly slug: string;

  constructor(path: string) {
    this.content = readFileSync(path, 'utf8');
    const lastPartOfPath = path.split('\\').at(-1);
    if (!lastPartOfPath) {
      throw new Error(`Invalid path for the post: ${path}`);
    }

    this.slug = lastPartOfPath.replace('.mdx', '');
  }

  public getSlug(): string {
    return this.slug;
  }

  public getContent(): string {
    return this.content;
  }
}
