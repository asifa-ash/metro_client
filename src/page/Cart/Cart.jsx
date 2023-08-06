import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <Nav />
      <div className="CartBox">
        <div className="cartHolder">
          <p className="shoppingText">Shopping Cart</p>
          <hr className="CartHr" />
          <div className="cartsOne">
            <div className="CartImg">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="cartDis">
              <p>adakfjksjsjvsjvjdnfjdnjsnsndjsndjd</p>
              <h5>Rs:124</h5>
              <p>in stock</p>
              <div className="cartButtons">
                <select id="fruit" name="Qty">
                  <option value="apple">1</option>
                  <option value="orange">2</option>
                  <option value="banana">3</option>
                  <option value="banana">4</option>
                  <option value="banana">5</option>
                  <option value="banana">6</option>
                  <option value="banana">7</option>
                  <option value="banana">8</option>
                  
                  <option value="banana">9</option>
                  <option value="banana">10+</option>

                </select>
                <button>Delete</button>
               
                <button>Save For Later</button>
                <button>Share</button>
              </div>
            </div>
          </div>
         
          <p>SubTotal:150</p>
          <hr className="CartHr_2"/>

        </div>
       
      </div>
    </div>
  );
};

export default Cart;
