import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const JobList = lazy(() => import("../Pages/JobList"));
const JobDetailed = lazy(() => import("../Pages/JobDetailed"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Routes>
        <Route path="/Job-Alert/" element={<JobList />} />
        <Route path="/Job-Alert/:id" element={<JobDetailed />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
