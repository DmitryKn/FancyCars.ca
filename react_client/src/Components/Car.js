import React, { Component } from 'react';

class Car extends Component {

  render() {
      const {img, name, make, model, year, available} = this.props
      if(available === "In Dealership"){
        return(
          <div className="item">
            <img className="item-img" src={img} alt="" />
            <div className="item-body">
              <div className="item-text">
                <h4 className="item-title"><strong>{name}</strong></h4>
                <p><strong>Model:</strong> {model}</p>
                <p><strong>Make:</strong> {make}</p>
                <p><strong>Year:</strong> {year}</p>
                <p><strong>Available:</strong> {available} </p>
                <p className="item-desc"><strong>Description:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="btn-group">
                <a href="/" className="myButton">Preview</a>
                <a href="/" className="myButton">Buy</a>
              </div>
            </div>
          </div>
        )
      } else {
        return(
          <div className="item">
            <img className="item-img" src={img} alt="" />
            <div className="item-body">
              <div className="item-text">
                <h4 className="item-title"><strong>{name}</strong></h4>
                <p><strong>Model:</strong> {model}</p>
                <p><strong>Make:</strong> {make}</p>
                <p><strong>Year:</strong> {year}</p>
                <p><strong>Available:</strong> {available} </p>
                <p className="item-desc"><strong>Description:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="btn-group">
                <a href="/" className="myButton">Preview</a>
              </div>
            </div>
          </div>
        )
      }

  }
}

export default Car;
