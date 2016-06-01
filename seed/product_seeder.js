var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
      new Product({
        imagePath:'https://images-na.ssl-images-amazon.com/images/I/51g6GKymFKL.jpg',
        title:'assissan\'s creed',
        description:'The one and only assissan video game.',
        price:50
      }),
      new Product({
        imagePath:'http://imgc.allpostersimages.com/images/P-473-488-90/70/7031/9MQW100Z/posters/watch-dogs-aiden-video-game-poster.jpg',
        title:'watch dogs',
        description:'Awesome video game!!!',
        price:60
      }),
      new Product({
        imagePath:'http://img11.deviantart.net/a61b/i/2008/218/8/e/far_cry_2_wallpaper_by_nzxt_txzn.jpg',
        title:'Far Cry',
        description:'what a video game.',
        price:49
      }),
      new Product({
        imagePath:'http://imgc.allpostersimages.com/images/P-473-488-90/86/8630/IP9M300Z/posters/call-of-duty-black-ops-zombie-video-game-poster.jpg',
        title:'call of duty',
        description:'what a wonderful video game.',
        price:70
      }),
      new Product({
        imagePath:'http://www.studentsoftheworld.info/sites/games/img/33224_the_incredible_hulk_video_game_poster_sega%5B1%5D.jpg',
        title:'The Hulk',
        description:'The one and only Hulk.',
        price:100
      }),
];

var done=0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err,result){
        done++;
        if (done === products.length) {
           exit();
        }
  });
}

function exit(){
mongoose.disconnect();
}
