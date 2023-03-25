import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const useSharedContext = () => {
  const { data, error, isLoading } = useSWR("/api/auth/login", fetcher);

  // if (error) return "An error has occurred.";
  // if (isLoading) return "Loading...";
  return {
    data,
    error,
    isLoading,
  };
};

export default useSharedContext;
