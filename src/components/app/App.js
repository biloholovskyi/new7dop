import React, {Component} from 'react';
import styled from 'styled-components';

import Serv from '../../services/serv';
import Bestsellers from '../bestsellers/Bestsellers';
import Coffee from "../coffee/Coffee";

const AppWrapper = styled.div`
  width: 100%;
`;

export default class App extends Component {
  Serv = new Serv();
  state = {
    bestsellers: [],
    coffee: [],
    goods: []
  }

  componentDidMount() {
    this.updateBestsellers();
    this.updateCoffee();
    this.updateGoods();
  }

  updateBestsellers() {
    this.Serv.getAllBestsellers()
      .then(this.onBestsellersLoaded)
  }

  updateCoffee() {
    this.Serv.getAllCoffee()
      .then(this.onCoffeeLoaded)
  }

  updateGoods() {
    this.Serv.getAllGoods()
      .then(this.onGoodsLoaded)
  }

  onBestsellersLoaded = (bestsellers) => {
    this.setState({
      bestsellers: bestsellers
    })
  }

  onCoffeeLoaded = (coffee) => {
    this.setState({
      coffee: coffee
    })
  }

  onGoodsLoaded = (goods) => {
    this.setState({
      goods: goods
    })
  }

  render() {
    return (
      <AppWrapper>
        <Bestsellers bestsellers={this.state.bestsellers}/>
        <Coffee coffee={this.state.coffee}/>
        <Bestsellers bestsellers={this.state.goods}/>
      </AppWrapper>
    )
  }
}