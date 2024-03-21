import { DashboardGroup, DashboardLink } from "../api/api.types";
import { Link } from "./Link";
import { Section } from "../tommystrap/section/Section";

export interface GroupProps {
  group: DashboardGroup;
  searchFilter?: string;
}

export const Group = ({ group, searchFilter }: GroupProps) => {
  const linkFilter = (searchFilter: string) => {
    return (link: DashboardLink) =>
      link.text.toLowerCase().includes(searchFilter) ||
      link.description.toLowerCase().includes(searchFilter);
  };

  const list = searchFilter
    ? group.links.filter(linkFilter(searchFilter))
    : group.links;

  if (list.length) {
    return (
      <Section title={group.text}>
        {list.map((link) => (
          <Link key={link.text} link={link} />
        ))}
      </Section>
    );
  } else {
    return <></>;
  }
};
