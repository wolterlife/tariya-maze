import {Route, Routes} from "react-router-dom";
import HomePage from "./features/Home/HomePage";
import NewsPage from "./features/News/NewsPage";
import DiscountsPage from "./features/Discounts/DiscountsPage";
import MenuPage from "./features/Menu/MenuPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/discounts' element={<DiscountsPage/>}/>
      </Routes>
    </>
  );
}

export default App;