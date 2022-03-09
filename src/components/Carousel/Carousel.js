import React from "react"; 
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import styles from './Carousel.module.scss'

function Carousel() {

    const carouselItems = [
        {'id': 0, 'src':'/img/carousel/1.png'},
        {'id': 1, 'src':'/img/carousel/2.png'},
        {'id': 2, 'src':'/img/carousel/3.png'},
        {'id': 3, 'src':'/img/carousel/4.png'},
        {'id': 4, 'src':'/img/carousel/5.png'},
    ]

    const PX = 950
    const [offset, setOffset] = React.useState(-PX)

    const leftClickHanlder = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PX
            console.log(newOffset, currentOffset)
            if (currentOffset == 0) {
                return (-PX * (carouselItems.length - 1))
            }
            else {
                return Math.min(newOffset, 0)
            }
        })
    }

    const rightClickHanlder = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PX
            const maxOffset = -(PX * (carouselItems.length - 1))
            console.log(newOffset, maxOffset, currentOffset)
            if (currentOffset == maxOffset) {
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
                                <img src={obj.src} alt="carouselImage"/>
                            </div>
                        ))}
                    </div>
                </div>
                <FaChevronRight className={styles.arrow} onClick={rightClickHanlder}/>
            </div>
        </div>
    );
}

export default Carousel;