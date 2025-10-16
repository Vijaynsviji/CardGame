import './App.css';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
import Newgame from './components/NewGame/Newgame';
import { store } from './components/store/store';
import { Provider } from 'react-redux';
import GameScreen from './components/GameScreen/GameScreen';

// ✅ Layout should return valid JSX (with closing braces in the right place)
function Layout() {
  return (
    <Provider store={store}>
      <div className="flex md:flex-row flex-col">
        <TopBar />
        <SideBar />
          <Outlet />
      
      </div>
    </Provider>
  );
}

// ✅ App defines router properly with "element" not "Component"
function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/Newgame', element: <Newgame /> },
        { path: '*', element: <Home /> },
        {path:'/game/:id',element:<GameScreen/>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
