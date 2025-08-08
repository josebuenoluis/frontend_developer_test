import React from 'react'
import { Link } from "react-router-dom";
function ProductCard({product, addToCart}) {
  const listInStock = [1,2,4,6,7,8,10,11,12]; // List fake of products in stock
  const available = listInStock.includes(product.id);
  return (
    <div className="card text-center h-100" key={product.id}>
        <img
            className="card-img-top p-3"
            src={product.image}
            alt="Card"
            height={300}
        />
        <div className="card-body">
            <h5 className="card-title">
            {product.title.substring(0, 12)}...
            </h5>
            <p className="card-text">
            {product.description.substring(0, 90)}...
            </p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item lead">$ {product.price}</li>
            {/* <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li> */}
        </ul>
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
            <select name="" defaultValue="" className="form-select text-center mb-2 col-10" id="">
            <option value="">Variant...</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            </select>
            <div className="btn-container">
            <Link
                to={"/product/" + product.id}
                className="btn btn-dark m-1"
            >
                Buy Now
            </Link>
            <button
                className="btn btn-dark m-1"
                onClick={() => listInStock.includes(product.id) && addToCart(product)}
                disabled={!available}
            >
                {available ? "Add to Cart" : "Out of Stock"}
            </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard