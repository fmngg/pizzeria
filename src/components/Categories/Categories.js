import React from "react";

import styles from './Categories.module.scss'

function Categories({items}) {

    const [activeItem, setActiveItem] = React.useState(0)

    const onSelectItem = (id) => {
        setActiveItem(id);
    }

    return(
    <div className={styles.categories}>
        <ul>
            {
                items && items.map((obj) => (<li
                    className={activeItem === obj.id ? [styles.active] : ''}
                    onClick={() => onSelectItem(obj.id)}
                    key = {obj.id}>{obj.title}</li>))
            }
        </ul>
    </div>);
}

export default Categories;