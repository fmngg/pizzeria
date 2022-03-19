import React from "react";

import styles from './Categories.module.scss'

const Categories = React.memo(function Categories({items, onClickItem}) {

    const [activeItem, setActiveItem] = React.useState(0)

    const onSelectItem = (id) => {
        setActiveItem(id);
        onClickItem(id)
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
)

export default Categories;