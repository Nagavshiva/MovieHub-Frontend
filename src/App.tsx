import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { MovieProvider } from "./context/MovieProvider";

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;