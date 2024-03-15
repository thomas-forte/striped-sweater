import axios from "axios";
import { DashboardGroup } from "./api.types";

export const baseURL = "http://localhost:8000/api";

const client = axios.create({
  baseURL,
});

export const getDashboard = async (): Promise<DashboardGroup[]> =>
  (await client.get("dashboard/")).data;
