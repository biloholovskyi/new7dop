import React from 'react';

import Block from '../styledComponents/Block';
import Price from '../styledComponents/Price';
import Wrapper from '../styledComponents/Wrapper';

const Bestsellers = ({bestsellers}) => {
  const arr = bestsellers.map(item => {
    const {name, url, price} = item;
    return (
      <Block>
        <h4>{name}</h4>
        <img src={url} alt={name}/>
        <Price>{price}</Price>
      </Block>
    )
  });
  return (
    <Wrapper>
      {arr}
    </Wrapper>
  )
}

export default Bestsellers;
