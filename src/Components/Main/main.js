import { Link } from "react-router-dom";
import './main.css'
const Main=()=>{
    return(
        <div className="main-container">
            <div className="left">
                <div className="c1">
                    <p>There is only thing that could replace a Book. The Next Book.</p>
                </div>
                <div className="c2">
                    <h1>
                        Discover, Find, Share <br />Your Books
                    </h1>
                </div>
                <div className="c3">
                    <ul>
                        <li>From Fictional to Education we got you covered</li>
                        <li>All Genres availabel</li>
                    </ul>
                </div>
                <div className="c4">

                    <Link to="/buy">Browse Books</Link>
                    <Link to="/form">Donate Book</Link>
                
                </div>
            </div>
            <div className="right">
            <img
                src="/Images/book1.png"
                alt=""
                useMap="#image_map"
                style={{
                    width: '80%',
                    height:'80%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    // height:"30px",
                }}
              />
            </div>
            
        </div>
    )
}
export default Main;