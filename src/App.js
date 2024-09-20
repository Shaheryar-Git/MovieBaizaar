import logo from './logo.svg';
import './App.css';
import { AuthRoutes } from './Modules/Auth/routes';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(AuthRoutes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
