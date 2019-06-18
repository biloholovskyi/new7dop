import React from 'react';
import styled from 'styled-components';

import Block from '../styledComponents/Block';
import Price from '../styledComponents/Price';
import Wrapper from '../styledComponents/Wrapper';

const CoffeeWrapper = styled(Wrapper)`
  flex-wrap: wrap;
`;

const CoffeeBlock = styled(Block)`
  max-width: 33.33333%;
`;

const Country = styled.div`
  text-align: center;
  font-weight: normal;
  margin: 10px 0;
`;

const Description = styled(Country)`
  text-align: left;
  padding: 0 5px;
`;

const Coffee = ({coffee}) => {
  const arr = coffee.map(item => {
    const {name, url, price, country, description} = item;
    return (
      <CoffeeBlock>
        <h4>{name}</h4>
        <Country>{country}</Country>
        <img src={url} alt={name}/>
        <Price>{price}</Price>
        <Description>{description}</Description>
      </CoffeeBlock>
    )
  });
  return (
    <CoffeeWrapper>
      {arr}
    </CoffeeWrapper>
  )
}

export default Coffee;
