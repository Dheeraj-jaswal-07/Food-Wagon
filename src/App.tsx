import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Daily from "./Page/Daily";
import Deals from "./Page/Deals";
import Featured from "./Page/Featured";
import Food from "./Page/Food";
import Hero from "./Page/Hero";
import Mobile from "./Page/Mobile";
import Order from "./Page/Order";
import Popular from "./Page/Popular";
import Search from "./Page/Search";
import Work from "./Page/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Food />
      <Work />  
      <Popular />
      <Featured />
      <Search />
      <Daily />
      <Mobile />
      <Deals />
      <Order />
      <Footer />
    </>
  );
}

export default App;
