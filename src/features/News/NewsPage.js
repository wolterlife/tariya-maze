import '../../normalize.css';
import NavBar from "../../components/NavBar/NavBar";
import NewsThisWeek from "../../components/NewsThisWeek/NewsThisWeek";
import Footer from "../../components/Footer/Footer";
import NewsAll from "../../components/NewsAll/NewsAll";

function NewsPage() {
  return (
    <>
      <NavBar />
      <NewsThisWeek />
      <NewsAll />
      <Footer />
    </>
  );
}

export default NewsPage;
