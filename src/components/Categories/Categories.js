import React from "react";
import PropTypes from 'prop-types';

import styles from './Categories.module.scss'

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory}) {
    return(
    <div className={styles.categories}>
        <ul>
            {
                items && items.map((obj) => (<li
                    className={activeCategory === obj.id ? [styles.active] : ''}
                    onClick={() => onClickCategory(obj.id)}
                    key = {obj.id}>{obj.title}</li>))
            }
        </ul>
    </div>);
})

Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

Categories.defaultProps = {
    activeCategory: 0,
    items: []
}

export default Categories;