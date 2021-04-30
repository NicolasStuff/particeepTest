import Ocean8 from '../img/affiche-ocean-8.jpeg'
import MidnightSun from '../img/midnightsun.jpeg'
import inde from '../img/lesindestructibles.jpeg'
import sans from '../img/sansunbruit.jpeg'
import creed from '../img/creed2.jpeg'
import pulp from '../img/pulp.jpeg'
import seven from '../img/seven.jpeg'
import ince from '../img/inception.jpeg'
import gone from '../img/gonegirl.jpeg'

const movies = [
    {
      id: '0',
      image: Ocean8,
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
    }, {
      id: '1',
      image: MidnightSun,
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '2',
      image: inde,
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '3',
      image: sans,
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '4',
      image: creed,
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '5',
      image: pulp,
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '6',
      image: pulp,
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '7',
      image: seven,
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '8',
      image: ince,
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      image: gone,
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
  ]

  let moviess;
  export default moviess = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
