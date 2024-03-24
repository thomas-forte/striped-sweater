import axios from "axios";
import { DashboardGroup } from "./api.types";
import { stub } from "./stub.data";

export const baseURL = "http://localhost:8000/api";

export const getDashboard = async (): Promise<DashboardGroup[]> => {
  return [...stub];
};

const weatherClient = axios.create({
  baseURL: "https://wttr.in",
});

export type Weather = {
  current_condition?: { temp_F?: number; weatherDesc?: { value: string }[] }[];
};
export const getWeather = async (): Promise<Weather> => {
  return (await weatherClient.get("Cleveland?format=j1")).data;
};
