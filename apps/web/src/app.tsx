import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SystemStatusPage } from "./features/system/index.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SystemStatusPage />
    </QueryClientProvider>
  );
};
