import "./App.css";
import headerImg from "./img/headerImg.png";
import logo from "./logos/LOGO.png";
import ArrowWhite from "./logos/arrowRightWhite.png";
import FavoriteWhite from "./logos/FavoriteWhite.png";
import Pass from "./logos/pass.png";
import heartBlue from "./logos/heartBlue.png";
import heartRed from "./logos/heartRed.png";
import movies$ from "./comps/movies.js";
import { useState, useEffect } from "react";
import * as V from "victory";
import { VictoryPie } from "victory";
import Select from "react-select";
import Posts from "./comps/Posts";
import Pagination from "./comps/Pagination";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState({ value: 4 });

  console.log("postsPerPage", postsPerPage);

  let temps = [];
  let tempCategory = [];
  useEffect(() => {
    // console.log('movies$', movies$)
    movies$.then((result) => {
      // console.log('result', result)
      setPosts(result);
      for (var i = 0; i < result.length; i++) {
        temps.push(result[i].category);
        // console.log('temps', temps)
      }
      setCategory([...new Set(temps)]);
    });
  }, []);

  const handleFilter = (itemCategory) => {
    movies$.then((result) => {
      // console.log('result', result);
      for (var i = 0; i < result.length; i++) {
        if (result[i].category == itemCategory) {
          tempCategory.push(result[i]);
        }
      }
      // console.log('tempCategory', tempCategory);
      setPosts(tempCategory);
    });
  };

  console.log("category", category);

  const indexOfLastPost = currentPage * postsPerPage.value;
  const indexOfFirstPost = indexOfLastPost - postsPerPage.value;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log("indexOfFirstPost", indexOfFirstPost);
  console.log("indexOfLastPost", indexOfLastPost);
  console.log("currentPosts", currentPosts);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let post = posts;

  const deleteItem = (index) => {
    // console.log('index', index)
    // console.log('post AVANT LE DELETE', post);
    post = post.splice(index, 1);

    // console.log('POST DANS LE DELETE', post)
    setPosts(posts.filter((object) => object.id != index));
  };

  const addLikeItem = (index) => {};
  const options = [
    { value: 4, label: "4 éléments sur la page" },
    { value: 8, label: "8 éléments sur la page" },
    { value: 12, label: "12 éléments sur la page" },
  ];

  return (
    // <Provider store={store}>

    // SIDE BAR

    <main className="colorMain">
      <div className="flexContent">
        <div className="bodyFlex">
          <div className="SideBar">
            <img src={logo} className="logoImg"></img>
            <text className="CategoryTitle">CATEGORY</text>
            {category.map((item, index) => (
              <div className="CategoryComps" key={index}>
                <button
                  className="CategoryContent"
                  onClick={() => handleFilter(item)}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
          <div></div>
        </div>

        {/* HEADER IMAGE */}

        <div className="marginLeft">
          <div className="divHeaderImg">
            {/* <img src={headerImg} className='imageHeader'></img> */}
          </div>

          {/* CARD AND PAGINATION */}
          <div>
            <div className="Cards">
              {currentPosts.map((item, index) => (
                <div key={item.id}>
                  <div className="ImageCard">
                    <img className="Image" src={item.image}></img>
                    <button
                      className="dislikeButton"
                      onClick={() => deleteItem(index)}
                    >
                      <img src={Pass} className="pass"></img>
                    </button>
                    <button
                      className="likeButton"
                      onClick={() => addLikeItem(item)}
                    >
                      <img src={heartBlue} className="pass"></img>
                    </button>
                  </div>

                  <div className="bodyFlex">
                    <div className="bodyColumn">
                      <text className="titleMovie">{item.title}</text>
                      <text className="category">{item.category}</text>
                    </div>
                    <svg width="120" height="120">
                      <VictoryPie
                        colorScale={["green", "grey"]}
                        standalone={false}
                        width={120}
                        height={120}
                        data={[
                          { x: " ", y: item.likes },
                          { x: " ", y: item.dislikes },
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
            </div>
            {/* <Posts posts={currentPosts} /> */}
            <div className="bodyFlex">
              <Pagination
                postsPerPage={postsPerPage.value}
                totalPosts={posts.length}
                paginate={paginate}
              />

              <Select
                options={options}
                className="selection"
                onChange={setPostsPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    // </Provider>
  );
}

export default App;
