import React,{useState} from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
//
import { useContext } from "react";
import axios from "axios";
const BuyActionWindow = ({ uid }) => {

  const [stockQty, setStockQty] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isOpen, setIsOpen] = useState(true);

  //
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleCancelClick = () => {
    //
    closeBuyWindow();
  //  GeneralContext.closeBuyWindow(); 
  setIsOpen(true); 
    
  };


  const onClickBuy=()=>{
    axios.post("http://localhost:3002/addorders",
      {
         name: uid,
     qty: stockQty,
     price:stockPrice,
     mode:"buy"
      },{withCredentials:true}
    )
    closeBuyWindow();
    setIsOpen(false);
  }
  const onClickSell=()=>{
    axios.post("http://localhost:3002/addorders",
      {
         name: uid,
     qty: stockQty,
     price:stockPrice,
     mode:"sell"
      },
      {withCredentials:true}
    )
    closeBuyWindow();
    setIsOpen(false);
  }


  return (
    <div  id="buy-window" className={`buy-window ${isOpen ? "show" : ""}`} draggable="true" >
      <div className="regular-order " >
        <h3 style={{textAlign:"center"}}>{uid}</h3>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e)=>{setStockQty(e.target.value)}}
              value={stockQty}
            
            />
          </fieldset>
          <fieldset>
            <legend>Price.</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e)=>{setStockPrice(e.target.value)}}
              value={stockPrice}
              
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={onClickBuy}  >
            Buy
          </Link>
          <Link className="btn btn-red" onClick={onClickSell}  >
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}  >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
