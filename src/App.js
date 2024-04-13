import './App.css';
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu/Nav'
function App() {
  return (
    <div className="App">
    <div class=" w-auto d-flex content-center p-2 justify-between bg-white ">
          <div>   <h1 className="font-bold  text-black"> logo</h1></div>
      
            <div class="p-1 d-flex mx-auto justify-center content-center">
              <Menu/>
        </div>

        </div>
       <Outlet />
    </div>
  );
}

export default App;
