import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from"axios";

const Orders = () => {

  const [allOrders,setAllOrders]=useState([]);
    useEffect(()=>{
      axios.get("https://zerodha-clone-hq1y.onrender.com/allorders",{withCredentials:true}).
      then((res)=>{
        setAllOrders(res.data);
        console.log(res.data);
      })
  
    },[])

  return (
    <>
    {allOrders.length===0&&<div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
}
    <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.Price</th>
            <th>Mode</th>
          </tr>
          {allOrders.map((stock,index)=>{
            return(
              <tr>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
                
              </tr>
            )

          })}

        </table>
        </div>
    </>
  );
};

export default Orders;
