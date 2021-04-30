
import React from 'react';
import * as V from 'victory';
import { VictoryPie } from 'victory';
import Pass from '../logos/pass.png'
import heartBlue from '../logos/heartBlue.png'
import heartRed from '../logos/heartRed.png';
import '../App.css';

const Posts = ({ posts }) => {

    return (
        // <ul className='list-group mb-4'>
        //   {posts.map(post => (
        //     <li key={post.id} className='list-group-item'>
        //       {post.title}
        //     </li>
        //   ))}
        // </ul>
        <ul className='Cards'>
            {posts.map(item => (

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
            
            ))}
        </ul>
    );
};

export default Posts;