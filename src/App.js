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
// TODO: Перенести popUp профиль в навбар
// TODO: Адаптив слазит в футере
// TODO: Футер некоторые ссылки не в самом верху из-за этого не кликабельны
// TODO: Поиск функционал
// TODO: Картинки не должны быть кликабельны
// TODO: Ховеры
// TODO: Акции текст сползп
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/discounts' element={<DiscountsPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/reserv' element={<ReservPage/>}/>
        <Route path='/delivery' element={<DeliveryPage/>}/>
        <Route path='/select' element={<SelectPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>

      </Routes>
    </>
  );
}

export default App;
