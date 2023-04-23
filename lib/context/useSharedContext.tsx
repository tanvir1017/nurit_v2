import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = async (url: RequestInfo | URL) => {
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (e: any) {
    throw new Error(e);
  }
};
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
