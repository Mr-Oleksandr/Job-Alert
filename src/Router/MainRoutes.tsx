import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const JobList = lazy(() => import("../Pages/JobList"));
const JobDetailed = lazy(() => import("../Pages/JobDetailed"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Routes>
        <Route path="/home" element={<JobList />} />
        <Route path="/:id" element={<JobDetailed />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
