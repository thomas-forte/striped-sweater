import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { isLeedleInReach } from "../api/leedle.api";

type Leedle = { serverEnabled: boolean };

type LeedleDispatch = {
  type: "enable_server" | "disable_server";
};

const LeedleContext = createContext<Leedle | null>(null);

const LeedleDispatchContext = createContext<Dispatch<LeedleDispatch> | null>(
  null,
);

export const useLeedle = () => useContext(LeedleContext);

export const useLeedleDispatch = () => useContext(LeedleDispatchContext);

export const LeedleProvider = ({ children }: PropsWithChildren) => {
  const [leedle, dispatch] = useReducer(leedleReducer, {
    serverEnabled: false,
  });

  useEffect(() => {
    isLeedleInReach().then((isLeedly) => {
      if (isLeedly) {
        dispatch({ type: "enable_server" });
      } else {
        dispatch({ type: "disable_server" });
      }
    });
  }, []);

  return (
    <LeedleContext.Provider value={leedle}>
      <LeedleDispatchContext.Provider value={dispatch}>
        {children}
      </LeedleDispatchContext.Provider>
    </LeedleContext.Provider>
  );
};

function leedleReducer(state: Leedle, action: LeedleDispatch) {
  switch (action.type) {
    case "enable_server": {
      return {
        ...state,
        serverEnabled: true,
      };
    }
    case "disable_server": {
      return {
        ...state,
        serverEnabled: false,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
