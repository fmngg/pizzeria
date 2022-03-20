import React from "react";

import Sort from "../components/Sort/Sort";
import Carousel from "../components/Carousel/Carousel";
import Categories from "../components/Categories/Categories";
import Pizza from "../components/Pizza/Pizza";
import Loading from "../components/Pizza/Loading";

import {useDispatch, useSelector} from 'react-redux'
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from '../redux/actions/pizzas'


const categoriesNames = [
    {id: 0, title:'Все'},
    {id: 1, title:'Мясные'},
    {id: 2, title:'Вегитарианские'},
    {id: 3, title:'Детские'},
    {id: 4, title:'Комбо'},
    ]
  
const sortNames = [
      {id: 0, title:'популярности', type:'popular', order: 'desc'},
      {id: 1, title:'цене', type:'price', order: 'asc'},
      {id: 2, title:'алфавиту', type:'name', order: 'asc'},
    ]

function Home() {
  const items = useSelector(({pizzas}) => pizzas.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({filters}) => filters)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory  = React.useCallback(id => {
    dispatch(setCategory(id))
  }, [])

  const onSelectSortItem  = React.useCallback(type => {
    dispatch(setSortBy(type))
  }, [])
  
  return(
      <div className="content">
      <Carousel />
      <div className="content__top">
        <Categories 
        activeCategory={category}
        items={categoriesNames}
        onClickCategory={onSelectCategory}/>
        <Sort
        sortTitle='Сортировать по:' 
        items={sortNames}
        activeSortItem={sortBy.type}
        onClickSortItem={onSelectSortItem}
        />
      </div>
      <div className="content__title">
        <h1>Пицца</h1>
      </div>
      <div className="content__items">
        {isLoaded ?
            items.map((obj) => (
            <Pizza 
            key={obj.id}
            id={obj.id}
            name={obj.name}
            price={obj.price}
            types={obj.types}
            sizes={obj.sizes}
            category={obj.category}
            imageUrl={obj.imageUrl}
            isLoading={true}
            />
          ))
          :
          Array(12).fill(0).map((_, index) => <Loading key={index}/>)
        }
      </div>
    </div>
  );
}

export default Home;