import { ShareContextType } from "@/util/types/types";
import { createContext, ReactNode } from "react";
import useSharedContext from "./useSharedContext";

export const ShareContext = createContext<ShareContextType | null>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const allContext = useSharedContext();
  return (
    <ShareContext.Provider value={{ allContext }}>
      {children}
    </ShareContext.Provider>
  );
};

export default ContextProvider;
