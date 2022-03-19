import React from "react"; 
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import styles from './Carousel.module.scss'


const Carousel = React.memo(function Carousel() {

    const carouselItems = [
        {'id': 0, 'src':'/img/carousel/1.png', 'heading':'KIDS КОМБО!', 'text':'Заказывайте на самовывоз пиццу Карбонара или Чеддерони среднего размера и сок Rich 0,3л. или Бонаква 0,5л на выбор за 17.99 руб!'},
        {'id': 1, 'src':'/img/carousel/2.png', 'heading':"АРИФМЕТИКА от Domino's Pizza: 2+1", 'text':'С понедельника по четверг купите 2 большие пиццы и получите стандартную всего за 0,01 р.!'},
        {'id': 2, 'src':'/img/carousel/3.png', 'heading':'СЕМЕЙНОЕ ПРЕДЛОЖЕНИЕ ЗА 27,49', 'text':'Пицца из категории ЛЮБИМЫЕ большого размера + байтсы + напиток на выбор (1 л) - всего за 27,49 с ДОСТАВКОЙ!'},
        {'id': 3, 'src':'/img/carousel/4.png', 'heading':'ЛЮКС комбо за 33,49!', 'text':'Комплекс с доставкой по суперцене 33,49: пицца категории ЛЮБИМЫЕ большого размера с сырным бортом/ HOT DOG бортом + сладкие роллы + НАПИТОК 1 л на выбор!'},
        {'id': 4, 'src':'/img/carousel/5.png', 'heading':'10 ПИЦЦ ПО ЦЕНЕ 140,99', 'text':'В любой день недели заказывайте 10 пицц среднего размера из представленного ассортимента пицц на классике/ тонком тесте со скидкой до 128 руб. по СУПЕРЦЕНЕ - 140,99!'},
    ]

    const PX = 420
    const [offset, setOffset] = React.useState(0)

    const leftClickHanlder = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PX
            console.log(newOffset, currentOffset)
            if (currentOffset === 0) {
                return (-PX * (carouselItems.length - 3))
            }
            else {
                return Math.min(newOffset, 0)
            }
        })
    }

    const rightClickHanlder = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PX
            const maxOffset = -(PX * (carouselItems.length - 3))
            console.log(newOffset, maxOffset, currentOffset)
            if (currentOffset === maxOffset) {
                return 0
            }
            else {
                return Math.max(newOffset, maxOffset)
            }
        })
    }

    return(
        <div className={styles.carousel}>
            <h1>Акции</h1>
            <div className={styles.mainContainer}>
                <FaChevronLeft className={styles.arrow} onClick={leftClickHanlder}/>
                <div className={styles.window}>
                    <div className={styles.itemsContainer}
                    style={{transform: `translateX(${offset}px)`}}
                    >
                        {carouselItems && carouselItems.map((obj) => (
                            <div 
                            className={styles.item}
                            key={obj.id}>
                                <div className={styles.itemLeft}>
                                    <img src={obj.src} alt="carouselImage"/>
                                </div>
                                <div className={styles.itemRight}>
                                    <h3>{obj.heading}</h3>
                                    <p>{obj.text}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <FaChevronRight className={styles.arrow} onClick={rightClickHanlder}/>
            </div>
        </div>
    );
})

export default Carousel;