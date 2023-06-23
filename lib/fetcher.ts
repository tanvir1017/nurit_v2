export const fetcher = async (url: RequestInfo | URL) => {
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (e) {
    throw new Error(`error found ${e}`);
  }
};
