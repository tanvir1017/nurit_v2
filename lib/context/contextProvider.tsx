import { ReactNode, createContext } from "react";
import useSharedContext from "./useSharedContext";

interface ShareContextType {
  allContext: {
    data: object;
    error: string;
    isLoading: boolean;
  };
}

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
