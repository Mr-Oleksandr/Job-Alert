import API from "../API";
import { IJob } from "../types/job";

export const ServicesJobs = {
  getJobs: async (): Promise<IJob[]> => {
    try {
      const { data } = await API.get("ZM1r0eic3XEy/data");
      return data;
    } catch (e) {
      throw e;
    }
  },
};
