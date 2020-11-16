// const name = ['Ak', 'drake']

// name.push('Rattan')

// // console.log(name)

// let bank = 250

// bank = 100
// // console.log(bank)

// function repeater(fn) {
//     fn()
//     fn()
//     fn()
// }

// function sayHello() {
//     console.log('hello')
// }

// repeater(sayHello)

const videos = ["pranking someboy", "how to java", "html tutorial", 'hh', 'asda'];

//map
// const newVideos = video.map(function (video) {
//   return video.toUpperCase();
// });

// console.log(newVideos);

//find
// const searchTutorial = videos.find(function(video){
//   return video.includes('java')
// })

// console.log(searchTutorial)

const shortSearch = videos.filter(function(video){
  return video.length > 6
})

console.log(shortSearch)

//some and every