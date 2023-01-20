import './App.css';
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/restaurants/:id/update" element={<UpdatePage/>} />
          <Route exact path="//restaurants/:id" element={<RestaurantDetailPage/>} />
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
