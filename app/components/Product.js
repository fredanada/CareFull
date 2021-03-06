import React, { Component } from 'react';
import Reviews from './Reviews'
import Footer from './Footer'

//export default ({ products }) => (
export default class Product extends Component {

  componentDidMount() {
    console.log("IN PRODUCT COMPONENT ABOUT TO mount ")
    //this.props.onLoadSingleProduct(); //passes the currentProduct to the props

  }
  render() {
    //console.log("this.props.currentProduct ",this.props.currentProduct )
    //console.log("CHECK PASSING his.props.reviews ", this.props.reviews )
    return (
      <div>
      <div className='container container-fluid'>

        <div className='col-md-7'>
        {/*<h2>Product Details</h2>*/}

        <h2>{this.props.currentProduct &&this.props.currentProduct.name}</h2>

        <img className='single-product' src={this.props.currentProduct.photo}>
        </img>

          <Reviews reviews={this.props.reviews} productId= {this.props.currentProduct.id}/>
        </div>
        <div className='product-details col-md-5'>

          <div>
            <h4>What's Inside? </h4>
            <p>{this.props.currentProduct &&this.props.currentProduct.description}</p>
            <p>Price: ${this.props.currentProduct && this.props.currentProduct.price}</p>
            <p>
              <button className = 'btn btn-success product-add-to-cart' onClick={ () => this.props.postItemToCart(this.props.currentProduct) }>
                Add To Cart
              </button>
            </p>
          </div>
        </div>
      </div>
        <Footer />
      </div>
    )
  }
}
