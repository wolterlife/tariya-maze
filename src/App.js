import {Route, Routes} from "react-router-dom";
import HomePage from "./features/Home/HomePage";
import NewsPage from "./features/News/NewsPage";
import DiscountsPage from "./features/Discounts/DiscountsPage";
import MenuPage from "./features/Menu/MenuPage";
import RegistrationPage from './features/Registration/RegistrationPage';
import ReservPage from "./features/Reserv/ReservPage";
import DeliveryPage from "./features/Delivery/DeliveryPage";
import SelectPage from "./features/Select/SelectPage";
import ProfilePage from './features/Profile/ProfilePage';
import SettingsPage from './features/Settings/SettingsPage';
import CartPage from "./features/Cart/CartPage";
import AdminPage from './features/Admin/AdminPage';
import NotFoundPage from './features/NotFound/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='*' element={<NotFoundPage/>}/>
        <Route exact path='/news' element={<NewsPage/>}/>
        <Route exact path='/menu' element={<MenuPage/>}/>
        <Route exact path='/discounts' element={<DiscountsPage/>}/>
        <Route exact path='/registration' element={<RegistrationPage/>}/>
        <Route exact path='/reserv' element={<ReservPage/>}/>
        <Route exact path='/delivery' element={<DeliveryPage/>}/>
        <Route exact path='/select' element={<SelectPage/>}/>
        <Route exact path='/profile' element={<ProfilePage/>}/>
        <Route exact path='/settings' element={<SettingsPage/>}/>
        <Route exact path='/cart' element={<CartPage/>}/>
        <Route exact path='/admin' element={<AdminPage/>}/>
      </Routes>
    </>
  );
}

export default App;
