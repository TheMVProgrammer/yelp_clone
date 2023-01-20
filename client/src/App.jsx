import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { RestaurantsContextProvider } from './context/RestaurantsContext';

function App() {
  return (
    <RestaurantsContextProvider>
      <BrowserRouter>
        <div className="App container">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/restaurants/:id/update" element={<UpdatePage/>} />
            <Route exact path="//restaurants/:id" element={<RestaurantDetailPage/>} />
          </Routes>
        </div>
      </BrowserRouter>    
    </RestaurantsContextProvider>
  );
}

export default App;
