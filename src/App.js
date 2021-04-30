import './App.css';
import headerImg from './img/headerImg.png'
import logo from './logos/Spirit.png';
import ArrowWhite from './logos/arrowRightWhite.png'
import FavoriteWhite from './logos/FavoriteWhite.png'
import Pass from './logos/pass.png'
import heartBlue from './logos/heartBlue.png'
import heartRed from './logos/heartRed.png';
import movies$ from './comps/movies.js'
import { useState, useEffect } from 'react';
import * as V from 'victory';
import { VictoryPie } from 'victory';


function Item(props) {
  return <li>{props.value}</li>;
}

function App() {

  const [dataMovies, setDataMovies] = useState([])
  useEffect(() => {
    console.log('movies$', movies$)
    movies$.then(
      result => setDataMovies(result)
    )
  }, [])

  console.log('dataMovies', dataMovies)
  return (

    // SIDE BAR

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

      {/* HEADER IMAGE */}

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

      <div >

      </div>

        {/* CARDS */}
        <ul className='Cards'>
          {dataMovies.map(function (item) {
            return (
              <div key={item.id} >
                <div className='ImageCard'>
                  <img className='Image' src={item.image}></img>
                  <button className='dislikeButton'>
                    <img src={Pass} className='pass' ></img>
                  </button>
                  <button className='likeButton'>
                    <img src={heartBlue} className='pass' ></img>
                  </button>
                </div>

                <div className='bodyFlex'>
                  <div className='bodyColumn'>
                    <text className='titleMovie'>{item.title}</text>
                    <text className='category'>{item.category}</text>
                  </div>
                  <svg viewBox="-30 45 120 120"  >
                    <VictoryPie
                      colorScale={["green", "grey"]}
                      standalone={false}
                      width={120} height={120}
                      data={[
                        { x: ' ', y: item.likes }, { x: ' ', y: item.dislikes },
                      ]}
                      innerRadius={3}
                      style={{
                        labels: { fontSize: 20, fill: "white" },
                      }}
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;