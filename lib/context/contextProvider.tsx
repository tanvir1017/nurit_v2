import { createContext, ReactNode } from "react";
import useSharedContext from "./useSharedContext";

export interface ShareContextType {
  allContext: {
    data: object; //{}
    error: string;
    isLoading: boolean;
  };
}

export const ShareContext = createContext<ShareContextType | null>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const allContext = useSharedContext();
  console.log(allContext);
  return (
    <ShareContext.Provider value={{ allContext }}>
      {children}
    </ShareContext.Provider>
  );
};

export default ContextProvider;
