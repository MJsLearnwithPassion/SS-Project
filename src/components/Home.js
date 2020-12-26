import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import logo from '../logo.png';
import SliderData  from '../components/SliderData';

class Home extends Component {
 render() {
  return (
   <div>
   <NavBar />
   <SliderData />
   </div>
  );
 }
}

export default Home;
