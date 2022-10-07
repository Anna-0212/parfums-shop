import { useState } from 'react';
import { data } from './data';
import './App.css';
import image from "./shopping-cart.png";

function App() {
  const [parfums, setParfums] = useState(data);

const [showText, setShowText] = useState(false);

const removeParfum = (id) => {
  console.log(id)
  let newParfums = parfums.filter((parfum) => 
  parfum.id !== id);
  console.log(newParfums)
  setParfums(newParfums)
}

const showTextClick = (item) => {
  item.showMore = !item.showMore
  setShowText(!showText)
}

  return (
    <div>
      <div className="container">
        <h1>Parfum's butik </h1>
      </div>
      <div className="container shop-cart">
        <img className="shopping-cart"src={image} alt="shopping-cart" />
      <h2> {parfums.length}  </h2>
        {/* <h2> {parfums.length} items in your basket </h2> */}
      </div>
      {parfums.map(item => {
        const {id, name, image, description, price} = item;
      
        return(
        <div key = {id}>
      <div className="container">
        <h3>{id}. {name}</h3>
      </div>
      <div className="container">
        <img src={image} alt="parfum" width="300px" />
      </div>

      <div className="container">
        <p>{showText ? description : description.substring(0, 200) + "..."} <button onClick = {() => showTextClick(item)} className="btnShow"> {showText ? "Show less" : "Show more"}</button> </p>
      </div>
      
      <div className="container">
        <p className="price"> {price} </p>
      </div>

      <div className="container">
        <button onClick = {() => removeParfum(id)}> REMOVE</button>
      </div>

      </div>
        )
})}

<div className='container'>
  <button onClick = {() => setParfums([])}  className="btn"> delete all</button>
</div>

    </div>
  )
}

export default App;
