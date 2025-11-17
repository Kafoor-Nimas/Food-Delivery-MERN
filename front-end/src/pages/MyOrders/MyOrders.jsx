import React, { useContext, useState } from "react";
import "./MyOrder.css";
import { StoreContext } from "../../context/StoreContext";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);
  return <div>MyOrders</div>;
};

export default MyOrders;
