import './App.css';
import headerImg from './img/headerImg.png'
import logo from './logos/Spirit.png';
import ArrowWhite from './logos/arrowRightWhite.png'
import FavoriteWhite from './logos/FavoriteWhite.png'
import movies$ from './comps/movies.js'
import { useState, useEffect } from 'react'



function Item(props) {
  return <li>{props.value}</li>;
}

function App() {

  const [dataMovies, setDataMovies] = useState([])

  useEffect(() => {

    console.log('movies$', movies$)
    movies$.then(result => setDataMovies(result))
    // setDataMovies(movies$)
  }, [])

  console.log('dataMovies',dataMovies)
  return (
    <div className="App">
      <div className='bodyFlex'>
        <div className='SideBar'>
          <img src={logo} className='logoImg'></img>
          <text className='CategoryTitle'>CATEGORY</text>
          <div className='CategoryComps'>
            <text className='CategoryContent'>Comedy</text>
            <text className='CategoryContentSelected'>Animation</text>
            <text className='CategoryContentSelected'>Thriller</text>
            <text className='CategoryContent'>Drame</text>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='divHeaderImg'>
        <div className='divHeaderImg'>
          <img src={headerImg} className='imageHeader'></img>
          <div className='WatchNowComp'>
            <text className='WatchNowText'>Regarder maintenant </text>
            <img className='ArrowWhite' src={ArrowWhite}></img>
          </div>
          <div className='WatchNowFav'>
            <img className='FavoriteWhite' src={FavoriteWhite}></img>
          </div>
        </div>
        {/* {items.map((item) => <Item key={item.key} value={item} />)} */}
        <ul>
          {dataMovies.map(function (item) {
            return (
              <div key={item.id}>
                <img src={item.image}></img>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;