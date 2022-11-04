import React, { createContext, FC, useMemo } from "react";
import { TApiResponse, useFetchJobs } from "../hooks/useFetchJobs";

interface JobsProviderProps {
  children: React.ReactNode;
}

const defaultValue = {
  currentJobs: [],
  jobs: [],
  jobsPerPages: 1,
  loading: false,
  error: null,
  pagination: () => {},
  currentPage: 0,
  prevPage: () => {},
  nextPage: () => {},
};
export const JobsContext = createContext<TApiResponse>(defaultValue);

export const JobsProvider: FC<JobsProviderProps> = ({ children }) => {
  const {
    currentPage,
    jobs,
    pagination,
    currentJobs,
    loading,
    error,
    jobsPerPages,
    prevPage,
    nextPage,
  }: TApiResponse = useFetchJobs();
  const contextValue = useMemo(
    () => ({
      currentPage,
      jobs,
      pagination,
      currentJobs,
      loading,
      error,
      jobsPerPages,
      prevPage,
      nextPage,
    }),
    [
      currentPage,
      jobs,
      pagination,
      currentJobs,
      loading,
      error,
      jobsPerPages,
      prevPage,
      nextPage,
    ],
  );
  return (
    <JobsContext.Provider value={contextValue}>{children}</JobsContext.Provider>
  );
};
