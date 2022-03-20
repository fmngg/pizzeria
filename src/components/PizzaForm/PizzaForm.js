import React from "react";

import styles from "./PizzaForm.module.scss"

function PizzaForm() {
    return(
        <div className={styles.pizzaFormShadow}>
            <div className={styles.pizzaForm}>
                <img src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg" />
                <div className={styles.pizzaForm__right}>
                    <h4>Цыпленок барбекю</h4>
                    <h5>Состав:</h5>
                    <p>Сыр моцарелла, Шампиньоны, Телятина, Соус Бургер, Лук, Огурцы</p>
                    <h5>Пищевая ценность на 100г продукта:</h5>
                    <p> Жиры - 14,8 г
                        Белки - 9,8 г
                        Углеводы - 17,3 г
                        Энергетическая ценность - 241,7 ккал.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PizzaForm; 