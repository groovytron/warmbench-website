import 'jquery/dist/jquery.js';
import 'materialize-css/dist/js/materialize.js';
// import Instafeed from 'instafeed.js';
// import configuration from './config';

// window.onload = () => {
//     var feed = new Instafeed({
//         get: 'tagged',
//         tagName: 'warmbench',
//         accessToken: configuration.instagram_token
//     });
//     feed.run();
// };

function updateBannerImage() {
  var bannerImg = document.getElementById('banner-logo');
  if (screen.width < 500) {
    bannerImg.src = '/images/warm_bench_white-logo-mobile.png';
  } else {
    bannerImg.src = '/images/warm_bench_white-logo-1920x400.png';
  }
}

window.onload = event => {
  updateBannerImage();
};

window.onresize = event => {
  updateBannerImage();
};
