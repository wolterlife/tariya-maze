import '../../normalize.css';
import NavBar from "../../components/NavBar/NavBar";
import NewsThisWeek from "../../components/NewsThisWeek/NewsThisWeek";
import Footer from "../../components/Footer/Footer";

function NewsPage() {
  return (
    <>
      <NavBar />
      <NewsThisWeek />
      <Footer />
    </>
  );
}

export default NewsPage;
