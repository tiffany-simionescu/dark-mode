// STRETCH SOLUTION - Gathering Information from API
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MainContent = styled.h1`
  margin-top: 20px;
`;

const Price = () => {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      )
      .then(res => {
        console.log(res.data.bitcoin.usd);
        setPriceData(res.data.bitcoin.usd)})
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <MainContent>The Current Price for a Bitcoin is ${priceData}</MainContent>
    </div>
  );
}

export default Price;