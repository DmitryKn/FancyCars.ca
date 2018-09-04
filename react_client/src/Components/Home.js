import React, { Component } from 'react';
import Car from './Car.js';
import axios from 'axios';

class Home extends Component {
  state = {
    cars:[]
  }

  //getting data from cars.json
  componentDidMount() {
    axios.get('http://localhost:5000/cars')
    .then(response => {this.setState({cars: response.data })})
    .catch(err => {console.log(err)})
  }

  sortByName = () => {
    var res = this.state.cars.sort(function(a, b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
    })
    this.setState({
      cars: res
    })
  }
  sortByAvailability = () => {
    var res = this.state.cars.sort(function(a, b){
    if(a.available < b.available) return -1;
    if(a.available > b.available) return 1;
    return 0;
    })
    this.setState({
      cars: res
    })
  }

  render() {
    var list = this.state.cars.map(car => {
        return(
          <Car
            key={car.id}
            number={car.id}
            img={car.img}
            name={car.name}
            make={car.make}
            model={car.model}
            year={car.year}
            available={car.available}
          />
        )
    })
    return (
      <div>
        <div id="content">
          <div className="special">
            <img src="images/Aug-Promotion-web.png" alt=""/>
          </div>

          <div className="btn-group-sorting">
            <button className="myButtonGr" onClick={this.sortByName}>Sort by: name</button>
            <button className="myButtonGr" onClick={this.sortByAvailability}>Sort by: availability</button>
          </div>

          <div className="car-list">
            {list}
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
