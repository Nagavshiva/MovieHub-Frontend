import type { ReactNode } from "react";
import { useReducer } from "react";
import { MovieContext, movieReducer, initialMovieState } from "./MovieContext";

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [state, dispatch] = useReducer(movieReducer, initialMovieState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
