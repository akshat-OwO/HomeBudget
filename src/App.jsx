import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// library imports
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// layouts
import Main, { mainLoader } from "./layouts/Main";

// actions
import { logoutAction } from "./actions/logout";

// routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import ExpensesPage, { expensesLoader } from "./pages/ExpensesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
