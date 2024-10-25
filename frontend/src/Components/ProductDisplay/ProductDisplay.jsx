import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Asssets/star_icon.png";
import star_dull_icon from "../Asssets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product = {} } = props;
    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = () => {
        try {
            addToCart(product.id);
        } catch (error) {
            console.log('Error adding product to cart:', error);
        }
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image || ''} alt="" />
                    <img src={product.image || ''} alt="" />
                    <img src={product.image || ''} alt="" />
                    <img src={product.image || ''} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image || ''} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name || 'Product Name'}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price || '0.00'}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price || '0.00'}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, round neckline and short sleeves
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
