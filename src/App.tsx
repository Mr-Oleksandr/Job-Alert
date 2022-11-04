import React from "react";
import { JobsProvider } from "./context/jobsContext";
import MainRoutes from "./Router/MainRoutes";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <JobsProvider>
        <MainRoutes />
      </JobsProvider>
    </ErrorBoundary>
  );
};

export default App;
