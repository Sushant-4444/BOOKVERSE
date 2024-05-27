import React from 'react'
import "./form.css"
export default function Form() {
  return (
      
      
      
      <div className="container">
        <form action="">
            <div className="Genere">
      <label for="Genre">Select your Book Genre</label>
        <select id="Genre" name="Genre">
            <option value="Thriller">Thriller</option>
            <option value="Sad">Sad</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
        </select>
        </div>
        <div className="BookName">
        <label htmlFor="Book Name">Select your book Name</label>
        <input type="text" name="Book Name" id="BookName" />
        </div>
        <div className="author">
        <label htmlFor="Author">Do you want to donate your books ?  </label>
        <input type="radio" id="option1" name="option" checked/>
        <label htmlFor="option1">Yes</label><br/>
        <input type="radio" id="option2" name="option"/>
        <label htmlFor="option2">No</label>
        </div>
        <div className="price">
        <label htmlFor="Price">Price</label>
        <input type="text" name="Price" id="Price" />
        </div>
        <div className="submit">
        <input type="submit" value="Upload" id='submit' />
        </div>
      </form>
    </div>
  )
}