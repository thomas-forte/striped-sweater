export interface Link {
  id: number;
  name: string;
  description: string;
  href: string;
}

export interface Group {
  id: number;
  name: string;
}

interface PullRequest {
  number: number;
  title: string;
  author: string;
  repo: string;
  url: string;
  isDraft: boolean;
  updated_at: string;
  isRead: boolean;
}

export interface GhPrs {
  count: number;
  pull_requests: PullRequest[];
}

export interface GhCommits {
  total_commits: number;
}
