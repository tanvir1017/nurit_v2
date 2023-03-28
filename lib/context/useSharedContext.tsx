import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const useSharedContext = () => {
  const { data, error, isLoading } = useSWR("/api/auth/check-cookie", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export default useSharedContext;
