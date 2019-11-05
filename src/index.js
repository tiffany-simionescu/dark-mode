import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Price from "./components/Price";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Route path="/price" component={Price} />
      <Route path="/charts" render={() => {
        return <Charts coinData={coinData} />
      }} />
      {/* <Charts coinData={coinData} /> */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>, rootElement);
