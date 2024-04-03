import { useEffect, useState } from "react";
import {
  CalendarIcon,
  EyeIcon,
  EyeSlashIcon,
  GlobeAltIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { useLeedle } from "../context/LeedleContext";
import { GhPrs } from "../api/leedle.types";
import { getAssignedPullRequests } from "../api/leedle.api";

import { Page } from "../tommystrap/page/Page";
import { Section } from "../tommystrap/section/Section";

export const GithubDash = () => {
  const leedle = useLeedle();
  const [assignedPrs, setAssignedPrs] = useState<GhPrs | null>(null);

  useEffect(() => {
    getAssignedPullRequests().then((r) => setAssignedPrs(r));
  }, []);

  return (
    <Page name="Github Dash">
      <Section
        title={leedle?.serverEnabled ? "servers on" : "servers off"}
      ></Section>
      <Section title={`Pr's Assigned (${assignedPrs?.count ?? "-"})`}>
        <div className="divide-y divide-solid">
          {assignedPrs &&
            assignedPrs.pull_requests.map((pr, i) => (
              <div key={i} className="flex justify-between items-center py-3">
                <a className="" href={pr.url} target="blank">
                  {pr.title} (#{pr.number})
                </a>
                <div className="flex items-center gap-2">
                  <span className="h-8 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    <GlobeAltIcon className="mr-1 h-4 w-4 flex-shrink-0" />
                    {pr.repo}
                  </span>
                  <span className="h-8 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    <UserIcon className="mr-1 h-4 w-4 flex-shrink-0" />
                    {pr.author}
                  </span>
                  {pr.isDraft && (
                    <span className="h-8 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      <SparklesIcon className="mr-1 h-4 w-4 flex-shrink-0" />
                      draft
                    </span>
                  )}
                  <span className="h-8 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    <CalendarIcon className="mr-1 h-4 w-4 flex-shrink-0" />
                    {pr.updated_at}
                  </span>
                  <span className="h-8 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    {pr.isRead ? (
                      <>
                        <EyeIcon className="mr-1 h-4 w-4 flex-shrink-0" />
                        Viewed
                      </>
                    ) : (
                      <>
                        <EyeSlashIcon className="mr-1 h-4 w-4 flex-shrink-0" />
                        New
                      </>
                    )}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </Section>
    </Page>
  );
};
