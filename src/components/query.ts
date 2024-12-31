import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { WorkspacesSchema, type Workspaces } from "../index";

const fetchWorkspaces = async (): Promise<Workspaces> => {
  const response = await ky
    .get(
      "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json",
    )
    .json();

  return WorkspacesSchema.parse(response);
};

export const useWorkspaces = () => {
  return useQuery<Workspaces, Error>({
    queryKey: ["workspaces"],
    queryFn: fetchWorkspaces,
    staleTime: 5 * 60 * 1000,
  });
};
