import { createContext } from "react";
import type { MovieDataType } from "../assets/data";
import { moviesData } from "../assets/data";

// state type
interface MovieState {
  movies: MovieDataType[];
}

// action type
interface MovieAction {
  type: "TOGGLE_BOOKMARK";
  id: string;
}

// reducer
const movieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "TOGGLE_BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.id
            ? { ...movie, isBookmarked: !movie.isBookmarked }
            : movie
        ),
      };
    default:
      return state;
  }
};

// initial state
const initialMovieState: MovieState = {
  movies: moviesData,
};

// context type
interface MovieContextType {
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}

// create context
export const MovieContext = createContext<MovieContextType>({
  state: initialMovieState,
  dispatch: () => {},
});

export { movieReducer, initialMovieState };
