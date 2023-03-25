import { useContext } from "react";
import { ShareContext } from "./contextProvider";

const useShare = () => {
  return useContext(ShareContext);
};

export default useShare;
