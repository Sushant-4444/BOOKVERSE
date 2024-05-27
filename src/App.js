import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Form from './Components/Page2/form';

import Main from './Components/Main/main';
import BuyExchange from './Components/BuyExchange/buy';
import BookPage from './Components/BookPage/bookpage';
import {
  HashRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import ReviewsSection from './Components/page 4/ReviewSection';
function App() {
  return (
    <>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/" element={<Main />} />
        <Route path="/buy" element={<BuyExchange />} />
        <Route path="/books/sample" element={<BookPage image="/Images/111.jpg" price="Rs 200" name="The Great Gatsby" author="F. Scott Fitzgerald" description="Set in the summer of 1922, The Great Gatsby by F. Scott Fitzgerald revolves around the enigmatic Jay Gatsby and his infatuation with the alluring Daisy Buchanan. The story unfolds in the fictional towns of West Egg and East Egg on Long Island, depicting the opulent yet morally bankrupt lives of the wealthy elite during the Jazz Age. Gatsby's lavish parties serve as a facade to his deeply rooted desire to reclaim his lost love, Daisy, who is married to the affluent but morally corrupt Tom Buchanan. Through vivid imagery and intricate character dynamics, Fitzgerald explores themes of love, wealth, and the pursuit of the American Dream. The tragic narrative culminates in a poignant examination of the consequences of obsession and the fleeting nature of happiness." genre="Fiction, Classic"/>} />
        <Route path="/review" element={<ReviewsSection/>}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
