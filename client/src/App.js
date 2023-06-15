
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routers/router';

function App() {
  const router=createBrowserRouter(ROUTES)
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
