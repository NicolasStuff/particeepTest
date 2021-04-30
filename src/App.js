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
import Select from 'react-select'
import Posts from './comps/Posts';
import Pagination from './comps/Pagination';
import axios from 'axios';

import posts from'./reducers/posts-reducer' //Import du reducer

import { Provider } from 'react-redux';	//Import du Provider
import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({posts}));

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    console.log('movies$', movies$)
    movies$.then(
      result => setPosts(result),
    )
  }, [])

  console.log('posts', posts)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log('indexOfFirstPost', indexOfFirstPost)
  console.log('indexOfFirstPost', indexOfFirstPost)
  console.log('currentPosts', currentPosts)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  const options = [
    { value: 4, label: '4' },
    { value: 8, label: '8' },
    { value: 12, label: '12' }
  ]

  return (
    <Provider store={store}>

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

          {/* CARD AND PAGINATION */}
          <div className='container mt-5'>
            <Posts posts={currentPosts} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </Provider>
  );
}



export default App;