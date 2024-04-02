import '../../normalize.css';
import NavBar from "../../components/NavBar/NavBar";
import ImgLargeButtons from "../../components/ImgLargeButtons/ImgLargeButtons";
import AboutUs from "../../components/AboutUs/AboutUs";
import History from "../../components/History/History";
import Awards from "../../components/Awards/Awards";
import ImgInLine from "../../components/ImgInLine/ImgInLine";
import Footer from "../../components/Footer/Footer";
import Reviews from "../../components/Reviews/Reviews";
import PopUpProfile from "../../components/PopUpProfile/PopUpProfile";
import {useSelector} from "react-redux";

function HomePage() {
  const {isPopUpProfileVisible} = useSelector(state => state.common)
  return (
    <>
      <NavBar/>
      {isPopUpProfileVisible && <PopUpProfile/>}
      <ImgLargeButtons/>
      <AboutUs/>
      <History/>
      <Awards/>
      <ImgInLine/>
      <Reviews/>
      <Footer/>
    </>
  );
}

export default HomePage;
