export interface DashboardLink {
  id: number;
  text: string;
  description: string;
  icon?: string;
  href: string;
}

export interface DashboardGroup {
  id: number;
  text: string;
  icon?: string;
  links: DashboardLink[];
}
