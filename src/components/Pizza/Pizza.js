import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from "./Pizza.module.scss"

function Pizza({id, imageUrl, name, price, types, sizes, category}) {

    const availableTypes  = [
        {'id':0, 'title':'тонкое'},
        {'id':1, 'title':'традиционное'},
    ]
    
    const availableSizes = [
        {'id':26, 'title':'26 см.'},
        {'id':30, 'title':'30 см.'},
        {'id':40, 'title':'40 см.'},
    ]

    const [activeType, setActiveType] = React.useState(types[0])
    const [activeSize, setActiveSize] = React.useState(sizes[0])

    const onSelectType = (id) => {
        setActiveType(id)
    }

    const onSelectSize = (id) => {
        setActiveSize(id)
    }

    return(
            <div 
            className={styles.pizzaBlock}
            key={id}>
            <img
            className={styles.pizzaBlock__image}
            src={imageUrl}
            alt="Pizza"
            />
            <h4 className={styles.pizzaBlock__title}>{name}</h4>
            <div className={styles.pizzaBlock__selector}>
            <ul>
                {availableTypes && availableTypes.map((obj) => (
                    <li 
                    className={classNames({
                        [styles.active] : activeType === obj.id,
                        [styles.disabled] : !types.includes(obj.id),
                    })}
                    key={obj.id}
                    onClick={() => onSelectType(obj.id)}
                    >{obj.title}</li>
                ))}
            </ul>
            <ul>
                {availableSizes && availableSizes.map((obj) => (
                    <li
                    className={classNames({
                        [styles.active] : activeSize === obj.id,
                        [styles.disabled] : !sizes.includes(obj.id),
                    })}                    
                    key={obj.id}
                    onClick={() => onSelectSize(obj.id)}
                    >{obj.title}</li>
                ))}
            </ul>
            </div>
            <div className={styles.pizzaBlock__bottom}>
            <div className={styles.pizzaBlock__price}>от {price} р.</div>
            <div className={styles.button}>
                <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                />
                </svg>
                <span>Добавить</span>
                <i>2</i>
            </div>
            </div>
        </div>
    );
}

Pizza.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
}

Pizza.defaultProps = {
    imageUrl: 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg',
    name: 'Пицца',
    price: 0,
    types: [],
    sizes: [],
    category: 0
}

export default Pizza; 