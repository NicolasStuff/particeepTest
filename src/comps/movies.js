const movies = [
    {
      id: '1',
      image: '../img/affiche-ocean-8.jpeg',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      image: '../img/midnightsun.jpeg',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      image: '../img/lesindestructibles.jpeg',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      image: '../img/sansunbruit.jpeg',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      image: '../img/creed.jpeg',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      image: '../img/pulp.jpeg',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      image: '../img/pulp.jpeg',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      image: '../img/seven.jpeg',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      image: '../img/inception.jpeg',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      image: '../img/gonegirl.jpeg',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
  ]

  let moviess;
  export default moviess = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
