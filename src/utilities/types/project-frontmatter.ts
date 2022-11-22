export interface ProjectFrontmatter {
  draft?: boolean;
  title: string;
  description: string;
  pubDate: string;
  launchDate?: string;
  icon: string;
  coverPhoto: string;
  visitURL?: string;
  repoURL?: string;
  featured?: boolean;
  screenshots: string[];
}
