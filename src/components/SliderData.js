import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import list1 from '../listing1.jpg';
import list2 from '../listing2.jpg';
import list3 from '../listing3.jpg';
import list4 from '../listing4.jpg';

class SliderData extends Component {
 render() {
  return (
   <div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={list1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Indian Snacks</h1>
      <br/>
      <p>Yum Yum Palakaram...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={list2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Indian Sweets</h1>
      <br/>
      <p>Mittai Innipu!!!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={list3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Indian Spices</h1>
      <br/>
      <p>Garam Kaaram...</p>
    </Carousel.Caption>
  </Carousel.Item>
 <Carousel.Item>
    <img
      className="d-block w-100"
      src={list4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Indian Millets</h1><br/>
      <p>Thoda Thaaniyangal </p>
    </Carousel.Caption>
  </Carousel.Item>
 </Carousel>
   </div>
  );
 }
}

export default SliderData;
