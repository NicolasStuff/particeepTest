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

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  useEffect(() => {
    // console.log('movies$', movies$)
    movies$.then(
      result => setPosts(result),
    )
  }, [])


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log('indexOfFirstPost', indexOfFirstPost);
  console.log('indexOfLastPost', indexOfLastPost);
  console.log('currentPosts', currentPosts);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  let post = posts;
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(3, 1,);
  // replaces 1 element at index 4
  console.log(months);

  const deleteItem = (index) => {

    console.log('index', index)
    // console.log('post AVANT LE DELETE', post);
    post = post.splice(index, 1)

    // console.log('POST DANS LE DELETE', post)
    setPosts(posts.filter(object => object.id != index))
    // setPosts(posts.splice(item.id, 1));
  }

  const addLikeItem = (index) => {

    // to complete

  }

  const options = [
    { value: 4, label: '4' },
    { value: 8, label: '8' },
    { value: 12, label: '12' }
  ]

  return (
    // <Provider store={store}>

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
          <ul className='Cards'>
            {currentPosts.map((item, index) => (

              <div key={item.id} >
                <div className='ImageCard'>
                  <img className='Image' src={item.image}></img>
                  <button className='dislikeButton' onClick={() => deleteItem(index)}>
                    <img src={Pass} className='pass' ></img>
                  </button>
                  <button className='likeButton' onClick={() => addLikeItem(item)}>
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
            ))}
          </ul>
          {/* <Posts posts={currentPosts} /> */}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
    // </Provider>
  );
}

export default App;