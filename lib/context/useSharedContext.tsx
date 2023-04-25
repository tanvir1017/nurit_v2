import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../fetcher";

const useSharedContext = () => {
  const [routerPath, setRouterPath] = useState<string>("/");
  const { data, error, isLoading, mutate } = useSWR(
    "/api/auth/check-cookie",
    fetcher
  );

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    const prevPath = storage.getItem("prevPath");
    const currPath = storage.getItem("currentPath");
    if (prevPath === currPath || prevPath === null) {
      setRouterPath("/");
    } else {
      setRouterPath(prevPath as string);
    }
  }, []);

  return {
    data,
    error,
    isLoading,
    mutate,
    routerPath,
  };
};

export default useSharedContext;
