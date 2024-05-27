import React from 'react'
import './buy.css'
import './bookcard.css'
import { Link } from 'react-router-dom'

const BookCard = (props) => {
    return (
        <>
            <div className="book-card">
                <div className="book-image">
                    <img
                        src={props.image}
                        alt=""
                        useMap="#image_map"
                        style={{
                            width: '200px',
                            height: '200px',
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
                    <p>Price : {props.price}</p>
                    {/* <p>Condition</p> */}
                </div>
                <Link to={`/books/sample`}>View Details</Link><br/><br/>
            </div>
        </>
    )
}

export const Booklist = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Set in the summer of 1922, The Great Gatsby by F. Scott Fitzgerald revolves around the enigmatic Jay Gatsby and his infatuation with the alluring Daisy Buchanan. The story unfolds in the fictional towns of West Egg and East Egg on Long Island, depicting the opulent yet morally bankrupt lives of the wealthy elite during the Jazz Age. Gatsby's lavish parties serve as a facade to his deeply rooted desire to reclaim his lost love, Daisy, who is married to the affluent but morally corrupt Tom Buchanan. Through vivid imagery and intricate character dynamics, Fitzgerald explores themes of love, wealth, and the pursuit of the American Dream. The tragic narrative culminates in a poignant examination of the consequences of obsession and the fleeting nature of happiness.",
        genre: "Fiction, Classic",
        image: "/Images/111.jpg",
        price: "Rs 200",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "Harper Lee's To Kill a Mockingbird is a timeless coming-of-age novel set in the racially charged atmosphere of 1930s Alabama. Narrated by Scout Finch, the story follows her father, Atticus Finch, a principled lawyer tasked with defending a black man, Tom Robinson, accused of raping a white woman. Through Scout's innocent eyes, Lee masterfully explores themes of racial injustice, moral growth, and empathy. The novel paints a vivid portrait of Southern society, grappling with prejudice and societal norms. As Scout and her brother, Jem, navigate their childhood alongside their mysterious neighbor, Boo Radley, they confront the harsh realities of discrimination and the importance of compassion. To Kill a Mockingbird stands as a poignant reminder of the power of empathy and the enduring struggle for justice.",
        genre: "Fiction, Classic, Coming-of-age",
        image: "/Images/222.jpg",
        price: "Rs 500",
    },
    {
        title: "1984: The Mystery ",
        author: "George Orwell",
        description: "George Orwell's 1984: The Mystery  is a chilling dystopian masterpiece set in a totalitarian society ruled by the omnipresent Party led by the enigmatic figure of Big Brother. Winston Smith, an ordinary citizen, rebels against the Party's oppressive regime by engaging in forbidden acts of independent thought and expression. As he embarks on a clandestine affair with Julia, he becomes increasingly disillusioned with the Party's manipulation and surveillance. Orwell's prophetic vision of a surveillance state, thought control, and historical revisionism remains eerily relevant in today's digital age. Through Winston's harrowing journey, Orwell explores themes of power, truth, and the erosion of individual freedom. 1984: The Mystery  serves as a stark warning against the dangers of totalitarianism and the importance of preserving liberty and truth in society.",
        genre: "Fiction, Dystopian",
        image: "/Images/333.jpg",
        price: "Rs 300",
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Set in the summer of 1922, The Great Gatsby by F. Scott Fitzgerald revolves around the enigmatic Jay Gatsby and his infatuation with the alluring Daisy Buchanan. The story unfolds in the fictional towns of West Egg and East Egg on Long Island, depicting the opulent yet morally bankrupt lives of the wealthy elite during the Jazz Age. Gatsby's lavish parties serve as a facade to his deeply rooted desire to reclaim his lost love, Daisy, who is married to the affluent but morally corrupt Tom Buchanan. Through vivid imagery and intricate character dynamics, Fitzgerald explores themes of love, wealth, and the pursuit of the American Dream. The tragic narrative culminates in a poignant examination of the consequences of obsession and the fleeting nature of happiness.",
        genre: "Fiction, Classic",
        image: "/Images/111.jpg",
        price: "Rs 200",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "Harper Lee's To Kill a Mockingbird is a timeless coming-of-age novel set in the racially charged atmosphere of 1930s Alabama. Narrated by Scout Finch, the story follows her father, Atticus Finch, a principled lawyer tasked with defending a black man, Tom Robinson, accused of raping a white woman. Through Scout's innocent eyes, Lee masterfully explores themes of racial injustice, moral growth, and empathy. The novel paints a vivid portrait of Southern society, grappling with prejudice and societal norms. As Scout and her brother, Jem, navigate their childhood alongside their mysterious neighbor, Boo Radley, they confront the harsh realities of discrimination and the importance of compassion. To Kill a Mockingbird stands as a poignant reminder of the power of empathy and the enduring struggle for justice.",
        genre: "Fiction, Classic, Coming-of-age",
        image: "/Images/222.jpg",
        price: "Rs 500",
    },
    {
        title: "1984: The Mystery ",
        author: "George Orwell",
        description: "George Orwell's 1984: The Mystery  is a chilling dystopian masterpiece set in a totalitarian society ruled by the omnipresent Party led by the enigmatic figure of Big Brother. Winston Smith, an ordinary citizen, rebels against the Party's oppressive regime by engaging in forbidden acts of independent thought and expression. As he embarks on a clandestine affair with Julia, he becomes increasingly disillusioned with the Party's manipulation and surveillance. Orwell's prophetic vision of a surveillance state, thought control, and historical revisionism remains eerily relevant in today's digital age. Through Winston's harrowing journey, Orwell explores themes of power, truth, and the erosion of individual freedom. 1984: The Mystery  serves as a stark warning against the dangers of totalitarianism and the importance of preserving liberty and truth in society.",
        genre: "Fiction, Dystopian",
        image: "/Images/333.jpg",
        price: "Rs 300",
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Set in the summer of 1922, The Great Gatsby by F. Scott Fitzgerald revolves around the enigmatic Jay Gatsby and his infatuation with the alluring Daisy Buchanan. The story unfolds in the fictional towns of West Egg and East Egg on Long Island, depicting the opulent yet morally bankrupt lives of the wealthy elite during the Jazz Age. Gatsby's lavish parties serve as a facade to his deeply rooted desire to reclaim his lost love, Daisy, who is married to the affluent but morally corrupt Tom Buchanan. Through vivid imagery and intricate character dynamics, Fitzgerald explores themes of love, wealth, and the pursuit of the American Dream. The tragic narrative culminates in a poignant examination of the consequences of obsession and the fleeting nature of happiness.",
        genre: "Fiction, Classic",
        image: "/Images/111.jpg",
        price: "Rs 200",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "Harper Lee's To Kill a Mockingbird is a timeless coming-of-age novel set in the racially charged atmosphere of 1930s Alabama. Narrated by Scout Finch, the story follows her father, Atticus Finch, a principled lawyer tasked with defending a black man, Tom Robinson, accused of raping a white woman. Through Scout's innocent eyes, Lee masterfully explores themes of racial injustice, moral growth, and empathy. The novel paints a vivid portrait of Southern society, grappling with prejudice and societal norms. As Scout and her brother, Jem, navigate their childhood alongside their mysterious neighbor, Boo Radley, they confront the harsh realities of discrimination and the importance of compassion. To Kill a Mockingbird stands as a poignant reminder of the power of empathy and the enduring struggle for justice.",
        genre: "Fiction, Classic, Coming-of-age",
        image: "/Images/222.jpg",
        price: "Rs 500",
    },
    {
        title: "1984: The Mystery ",
        author: "George Orwell",
        description: "George Orwell's 1984: The Mystery  is a chilling dystopian masterpiece set in a totalitarian society ruled by the omnipresent Party led by the enigmatic figure of Big Brother. Winston Smith, an ordinary citizen, rebels against the Party's oppressive regime by engaging in forbidden acts of independent thought and expression. As he embarks on a clandestine affair with Julia, he becomes increasingly disillusioned with the Party's manipulation and surveillance. Orwell's prophetic vision of a surveillance state, thought control, and historical revisionism remains eerily relevant in today's digital age. Through Winston's harrowing journey, Orwell explores themes of power, truth, and the erosion of individual freedom. 1984: The Mystery  serves as a stark warning against the dangers of totalitarianism and the importance of preserving liberty and truth in society.",
        genre: "Fiction, Dystopian",
        image: "/Images/333.jpg",
        price: "Rs 300",
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Set in the summer of 1922, The Great Gatsby by F. Scott Fitzgerald revolves around the enigmatic Jay Gatsby and his infatuation with the alluring Daisy Buchanan. The story unfolds in the fictional towns of West Egg and East Egg on Long Island, depicting the opulent yet morally bankrupt lives of the wealthy elite during the Jazz Age. Gatsby's lavish parties serve as a facade to his deeply rooted desire to reclaim his lost love, Daisy, who is married to the affluent but morally corrupt Tom Buchanan. Through vivid imagery and intricate character dynamics, Fitzgerald explores themes of love, wealth, and the pursuit of the American Dream. The tragic narrative culminates in a poignant examination of the consequences of obsession and the fleeting nature of happiness.",
        genre: "Fiction, Classic",
        image: "/Images/111.jpg",
        price: "Rs 200",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "Harper Lee's To Kill a Mockingbird is a timeless coming-of-age novel set in the racially charged atmosphere of 1930s Alabama. Narrated by Scout Finch, the story follows her father, Atticus Finch, a principled lawyer tasked with defending a black man, Tom Robinson, accused of raping a white woman. Through Scout's innocent eyes, Lee masterfully explores themes of racial injustice, moral growth, and empathy. The novel paints a vivid portrait of Southern society, grappling with prejudice and societal norms. As Scout and her brother, Jem, navigate their childhood alongside their mysterious neighbor, Boo Radley, they confront the harsh realities of discrimination and the importance of compassion. To Kill a Mockingbird stands as a poignant reminder of the power of empathy and the enduring struggle for justice.",
        genre: "Fiction, Classic, Coming-of-age",
        image: "/Images/222.jpg",
        price: "Rs 500",
    },
    {
        title: "1984: The Mystery ",
        author: "George Orwell",
        description: "George Orwell's 1984: The Mystery  is a chilling dystopian masterpiece set in a totalitarian society ruled by the omnipresent Party led by the enigmatic figure of Big Brother. Winston Smith, an ordinary citizen, rebels against the Party's oppressive regime by engaging in forbidden acts of independent thought and expression. As he embarks on a clandestine affair with Julia, he becomes increasingly disillusioned with the Party's manipulation and surveillance. Orwell's prophetic vision of a surveillance state, thought control, and historical revisionism remains eerily relevant in today's digital age. Through Winston's harrowing journey, Orwell explores themes of power, truth, and the erosion of individual freedom. 1984: The Mystery  serves as a stark warning against the dangers of totalitarianism and the importance of preserving liberty and truth in society.",
        genre: "Fiction, Dystopian",
        image: "/Images/333.jpg",
        price: "Rs 300",
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Set in the summer of 1922, The Great Gatsby by F. Scott Fitzgerald revolves around the enigmatic Jay Gatsby and his infatuation with the alluring Daisy Buchanan. The story unfolds in the fictional towns of West Egg and East Egg on Long Island, depicting the opulent yet morally bankrupt lives of the wealthy elite during the Jazz Age. Gatsby's lavish parties serve as a facade to his deeply rooted desire to reclaim his lost love, Daisy, who is married to the affluent but morally corrupt Tom Buchanan. Through vivid imagery and intricate character dynamics, Fitzgerald explores themes of love, wealth, and the pursuit of the American Dream. The tragic narrative culminates in a poignant examination of the consequences of obsession and the fleeting nature of happiness.",
        genre: "Fiction, Classic",
        image: "/Images/111.jpg",
        price: "Rs 200",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "Harper Lee's To Kill a Mockingbird is a timeless coming-of-age novel set in the racially charged atmosphere of 1930s Alabama. Narrated by Scout Finch, the story follows her father, Atticus Finch, a principled lawyer tasked with defending a black man, Tom Robinson, accused of raping a white woman. Through Scout's innocent eyes, Lee masterfully explores themes of racial injustice, moral growth, and empathy. The novel paints a vivid portrait of Southern society, grappling with prejudice and societal norms. As Scout and her brother, Jem, navigate their childhood alongside their mysterious neighbor, Boo Radley, they confront the harsh realities of discrimination and the importance of compassion. To Kill a Mockingbird stands as a poignant reminder of the power of empathy and the enduring struggle for justice.",
        genre: "Fiction, Classic, Coming-of-age",
        image: "/Images/222.jpg",
        price: "Rs 500",
    },
    {
        title: "1984: The Mystery ",
        author: "George Orwell",
        description: "George Orwell's 1984: The Mystery  is a chilling dystopian masterpiece set in a totalitarian society ruled by the omnipresent Party led by the enigmatic figure of Big Brother. Winston Smith, an ordinary citizen, rebels against the Party's oppressive regime by engaging in forbidden acts of independent thought and expression. As he embarks on a clandestine affair with Julia, he becomes increasingly disillusioned with the Party's manipulation and surveillance. Orwell's prophetic vision of a surveillance state, thought control, and historical revisionism remains eerily relevant in today's digital age. Through Winston's harrowing journey, Orwell explores themes of power, truth, and the erosion of individual freedom. 1984: The Mystery  serves as a stark warning against the dangers of totalitarianism and the importance of preserving liberty and truth in society.",
        genre: "Fiction, Dystopian",
        image: "/Images/333.jpg",
        price: "Rs 300",
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Set in the summer of 1922, The Great Gatsby by F. Scott Fitzgerald revolves around the enigmatic Jay Gatsby and his infatuation with the alluring Daisy Buchanan. The story unfolds in the fictional towns of West Egg and East Egg on Long Island, depicting the opulent yet morally bankrupt lives of the wealthy elite during the Jazz Age. Gatsby's lavish parties serve as a facade to his deeply rooted desire to reclaim his lost love, Daisy, who is married to the affluent but morally corrupt Tom Buchanan. Through vivid imagery and intricate character dynamics, Fitzgerald explores themes of love, wealth, and the pursuit of the American Dream. The tragic narrative culminates in a poignant examination of the consequences of obsession and the fleeting nature of happiness.",
        genre: "Fiction, Classic",
        image: "/Images/111.jpg",
        price: "Rs 200",
    },



    // Rest of the objects with "image" key added similarly
];

const BuyExchange = () => {

    

    return (
        <>
            <div className="book-container">
                <div className="headingbook">
                    <h1>Select your Book </h1>
                </div>
                <div className="bookcard-container">
                    {Booklist.map((book, index) => (
                        <BookCard
                            key={index}
                            image={book.image}
                            name={book.title}
                            author={book.author}
                            price={book.price}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default BuyExchange