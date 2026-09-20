import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { SystemStatusPage } from "./pages/SystemStatusPage.js";

describe("SystemStatusPage Component", () => {
  it("renders page header and walking skeleton badges", () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <SystemStatusPage />
      </QueryClientProvider>
    );

    expect(screen.getAllByText(/3D Asset Store/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Slice 0 • Walking Skeleton/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Web/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend Fastify API/i)).toBeInTheDocument();
    expect(screen.getByText(/PostgreSQL 18/i)).toBeInTheDocument();
  });
});
