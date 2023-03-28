import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const useSharedContext = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/auth/check-cookie",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useSharedContext;
