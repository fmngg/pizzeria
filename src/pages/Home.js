import React from "react";
import Sort from "../components/Sort/Sort";
import Carousel from "../components/Carousel/Carousel";
import Categories from "../components/Categories/Categories";
import Pizza from "../components/Pizza/Pizza";
import {useDispatch, useSelector} from 'react-redux'
import { setCategory } from "../redux/actions/filters";


const categoriesNames = [
    {'id': 0, 'title':'Все'},
    {'id': 1, 'title':'Мясные'},
    {'id': 2, 'title':'Вегитарианские'},
    {'id': 3, 'title':'Гриль'},
    {'id': 4, 'title':'Острые'},
    ]
  
const sortNames = [
      {'id': 0, 'title':'популярности', 'type':'popular'},
      {'id': 1, 'title':'цене', 'type':'price'},
      {'id': 2, 'title':'алфавиту', 'type':'alphabet'},
    ]

function Home() {
  const items = useSelector(({pizzas}) => pizzas.items)
  const dispatch = useDispatch()

  const onSelectCategory  = React.useCallback(id => {
    dispatch(setCategory(id))
  }, [])
  
  return(
      <div className="content">
      <Carousel />
      <div className="content__top">
        <Categories 
        items={categoriesNames}
        onClickItem={onSelectCategory}/>
        <Sort
        sortTitle='Сортировать по:' 
        items={sortNames}/>
      </div>
      <div className="content__title">
        <h1>Пицца</h1>
      </div>
      <div className="content__items">
        {items.length !== 0 ?
            items.map((obj) => (
            <Pizza 
            key={obj.id}
            id={obj.id}
            name={obj.name}
            price={obj.price}
            types={obj.types}
            sizes={obj.sizes}
            imageUrl={obj.imageUrl}
            />
          ))
          :
          <div className="no_items">
            Товары не найдены :(
          </div>
        }
      </div>
    </div>
  );
}

export default Home;