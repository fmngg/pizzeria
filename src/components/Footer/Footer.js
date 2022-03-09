import React from "react";

import styles from './Footer.module.scss'

function Footer() {
    return(
        <div className={styles.footer}>
        <ul>
          <li className={styles.heading}>О нас</li>
          <li>Domino's Pizza Belarus</li>
          <li>Работа в Domino's</li>
        </ul>
        <ul>
          <li className={styles.heading}>Пиццерия</li>
          <li>Карта доставки</li>
          <li>Условия доставки</li>
        </ul>
        <ul>
          <li className={styles.heading}>Новости</li>
          <li>Акции</li>
          <li>Новости</li>
        </ul>
        <ul>
          <li className={styles.heading}>Обратная связь</li>
          <li>Оставить отзыв</li>
          <li>Контактные данные</li>
        </ul>
      </div>
    );
}

export default Footer;