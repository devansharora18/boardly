import { createBrowserRouter as createRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Report } from "./pages/Report";
import Navbar from "./components/Navbar";
import { BottomBar } from "./components/BottomBar";
import { Evaluation } from "./pages/Evaluation";

const Router = createRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div className="min-h-[91vh] bg-rose-50">
          <Home />
          <BottomBar />
        </div>
      </>
    ),
  },
  {
    path: "/report",
    element: (
      <>
        <Navbar />
        <div className="min-h-[91vh] bg-rose-50">
          <Report />
          <BottomBar />
        </div>
      </>
    ),
  },
	{
		path: "/eval/:subject",
		element: (
			<>
				<Navbar />
				<div className="min-h-[91vh] bg-rose-50">
					< Evaluation/>
					<BottomBar />
				</div>
			</>
		),
	}
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
