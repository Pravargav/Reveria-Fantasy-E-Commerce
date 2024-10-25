import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Asssets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product = {} } = props;
    const { category = 'Category', name = 'Product' } = product;

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt='arrow icon'/> SHOP <img src={arrow_icon} alt='arrow icon'/> {category} <img src={arrow_icon} alt='arrow icon'/>{name}
        </div>
    );
}

export default Breadcrum;
