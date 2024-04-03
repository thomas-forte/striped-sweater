import axios from "axios";
import { GhPrs } from "./leedle.types";
import { formatTimeAgo } from "../common/formatTime";

const leedleClient = axios.create({
  baseURL: "http://silent.but.deadly.farts/api",
});

export const getAssignedPullRequests = async (): Promise<GhPrs> => {
  const response = (await leedleClient.get("gh-assigned")).data;

  if (response.pull_requests && Array.isArray(response.pull_requests)) {
    response.pull_requests.forEach((element: any) => {
      element.updated_at = formatTimeAgo(new Date(element.updated_at));
    });
  }

  return response;
};
