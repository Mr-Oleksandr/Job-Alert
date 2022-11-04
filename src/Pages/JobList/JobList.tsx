import React, { FC, useContext } from "react";
import JobListItem from "../../Components/JobListItem";
import { ContainerList } from "./styled";
import { TApiResponse } from "../../hooks/useFetchJobs";
import { JobsContext } from "../../context/jobsContext";
import Paginator from "../../Components/Paginator";
import { Loader } from "../../Components/Loader/Loader";
import ErrorIndicator from "../../Components/ErrorBoundary/ErrorIndicator";

const JobList: FC = () => {
  const {
    jobs,
    pagination,
    currentJobs,
    currentPage,
    loading,
    error,
    jobsPerPages,
    prevPage,
    nextPage,
  }: TApiResponse = useContext<TApiResponse>(JobsContext);

  if (loading && !error) {
    return <Loader />;
  }
  if (error) {
    return <ErrorIndicator />;
  }
  return (
    <ContainerList>
      {currentJobs.map((item) => (
        <JobListItem key={item.id} {...item} />
      ))}
      <Paginator
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        pagination={pagination}
        jobsPerPages={jobsPerPages}
        total={jobs.length}
      />
    </ContainerList>
  );
};

export default JobList;
