import './bookpage.css'
import React, { useState, useEffect } from 'react';
const BookPage=(props)=>{
    const [inputValue, setInputValue] = useState('');
    const [array, setArray] = useState(["Nice Book"]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleAddToArray = async() => {
        const encodedText = encodeURIComponent(inputValue);
        const url = `https://community-purgomalum.p.rapidapi.com/json?text=${encodedText}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6902534ef2mshc0c3b2c74103692p1346ebjsn5bfc3fe122a8',
                'X-RapidAPI-Host': 'community-purgomalum.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.result);
            setArray(prevArray => [...prevArray, result.result]);
        } catch (error) {
            console.error(error);
        }
       
        setInputValue("");
};
    return(
        <>
        <div className="desc-container">
        <div className="book-image">
                    <img
                        src={props.image}
                        alt=""
                        useMap="#image_map"
                        style={{
                            width: '400px',
                            height: '500px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            // height:"30px",
                        }}
                    />
                </div>
                <div className="book-details">
                    <h1>{props.name}</h1>
                    <p>Author : {props.author}</p>
                    <p className='description'>Description : {props.description}</p>
                    <p>Price : {props.price}</p>
                    {/* <p>Condition</p> */}
                </div>
        </div>
        <div className='reviews'>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleAddToArray}>Submit</button>
        </div>
        <div className="reviews2">
            {array.map((item, index) => (
                <div key={index}>
                    Review  #{index + 1}: {item}
                    </div>
            ))}
        </div>
        

        </>

    )
}
export  default BookPage