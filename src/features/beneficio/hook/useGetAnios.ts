import { useQuery } from "@tanstack/react-query";
import { AnioService } from "../services/anioService";
import { AnioModel } from "../interfaces/anioModel";
import { AxiosError } from "axios";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}

async function fetchAnios(): Promise<readonly AnioModel[]> {
  return await AnioService.getAnios();
}

export function useGetAnios() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchAnios,
    staleTime: 10000,
    retry: 3,
  });
}
