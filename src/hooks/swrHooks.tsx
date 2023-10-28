import useSWR from "swr";
import { oneAuthAPI } from "../api/twoStepAPI";

export const useLoginUsersData = (_id: string) => {
  const { data: myID, isLoading } = useSWR(`/api/${_id}/one`, () => oneAuthAPI(_id));
  return { myID, isLoading };
};
