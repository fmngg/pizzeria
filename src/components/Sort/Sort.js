import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Sort.module.scss'

const Sort = React.memo(function Sort({items, sortTitle, activeSortItem, onClickSortItem}) {

  const [visible, setVisible] = React.useState(false)
  const sortRef = React.useRef()

  const toggleVisible = () => {
    setVisible(!visible)
  }

  const onSelectItem = (type) => {
    onClickSortItem(type)
    setVisible(false)
  }

  const clickHandle = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef.current))
    {
      setVisible(false)
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', clickHandle)
  }, [])

    return(
      <div ref={sortRef} className={styles.sort}>
            <div className={styles.sort__label}>
              <svg
                onClick={toggleVisible}
                className={visible ? [styles.rotated] : ''}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
                />
              </svg>
              <b>{sortTitle}</b>
              <span onClick={toggleVisible}>{items && items.find(obj => obj.type === activeSortItem).title}</span>
            </div>
            {visible && <div className={styles.sort__menu}>
              <ul>
                {items && items.map((obj) => (<li
                    className={classNames({
                      [styles.active] : activeSortItem === obj.type,
                    })}
                    onClick={() => onSelectItem(obj)}
                    key = {obj.type}>{obj.title}</li>
                    ))}
              </ul>
            </div>}
          </div>
    );
})

Sort.propTypes = {
  activeSortItem: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

Sort.defaultProps = {
  activeSortItem: 'popular',
  items: []
}

export default Sort;