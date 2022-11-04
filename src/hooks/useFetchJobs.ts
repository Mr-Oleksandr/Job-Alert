import { useEffect, useState } from "react";
import { IJob } from "../types/job";
import { ServicesJobs } from "../Services/ServicesJobs";

export type TApiResponse = {
  currentJobs: Array<IJob>;
  jobs: Array<IJob>;
  jobsPerPages: number;
  error: any;
  loading: boolean;
  pagination: (page: number) => void;
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
};
export const useFetchJobs = (): TApiResponse => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobsPerPages] = useState<number>(10);

  const lastJobIndex = currentPage * jobsPerPages; //20
  const firstJobIndex = lastJobIndex - jobsPerPages; //10
  const currentJobs = jobs.slice(firstJobIndex, lastJobIndex);

  const pagination = (page: number) => {
    setCurrentPage(page);
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const nextPage = () => {
    if (jobs.length / jobsPerPages !== currentPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const getJobs = async () => {
    setLoading(true);
    try {
      const response = await ServicesJobs.getJobs();
      setJobs(response);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getJobs();
  }, []);

  return {
    pagination,
    prevPage,
    nextPage,
    jobs,
    jobsPerPages,
    currentJobs,
    loading,
    error,
    currentPage,
  };
};
