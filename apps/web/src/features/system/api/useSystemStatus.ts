import { useQuery } from "@tanstack/react-query";
import { createApiClient } from "@3dasset/api-client";

const client = createApiClient(
  import.meta.env.VITE_API_URL || "http://localhost:4000"
);

export function useSystemHealth() {
  return useQuery({
    queryKey: ["system-health"],
    queryFn: () => client.getHealth(),
    refetchInterval: 10000,
    retry: 1,
  });
}

export function useSystemReadiness() {
  return useQuery({
    queryKey: ["system-readiness"],
    queryFn: () => client.getReadiness(),
    refetchInterval: 10000,
    retry: 1,
  });
}
