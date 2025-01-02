import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { WorkspacesSchema, type Workspaces } from "../index.d.ts";

const fetchWorkspaces = async (): Promise<Workspaces> => {
  const response = await ky
    .get(
      "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json",
    )
    .json();
  console.log("Response:", response); // Debugging
  try {
    return WorkspacesSchema.parse(response);
  } catch (error) {
    console.error("Zod Validation Error:", error);
    console.log("Response Data:", response);
    throw error; // Rethrow to be caught by React Query
  }
};

export const useWorkspaces = () => {
  return useQuery<Workspaces, Error>({
    queryKey: ["workspaces"],
    queryFn: fetchWorkspaces,
    staleTime: 5 * 60 * 1000,
  });
};
