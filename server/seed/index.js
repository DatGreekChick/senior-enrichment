'use strict';

const teachers = [
  {
    name: 'Vesemir',
    email: 'vesemir@io.com',
    image: 'url(https://static.giantbomb.com/uploads/original/8/88352/2747713-vesemirwitcher3.jpg)',
    languagesKnown: ['C', 'C++', 'Java'],
  },
  {
    name: 'Geralt of Rivia',
    email: 'geralt@io.com',
    image: 'url(https://static.comicvine.com/uploads/original/11123/111235159/5402943-sin+t%C3%ADtulo-1.jpg)',
  },
  {
    name: 'Letho of Gulet',
    email: 'letho@io.com',
    image: 'url(https://lh3.googleusercontent.com/-SNc3BFGIoXQ/VqGUzVUM1oI/AAAAAAAAAG0/P4UO4X0Rpl0/w800-h800/Letho%2Bof%2Bgulet.jpg)',
    languagesKnown: ['C#'],
  },
  {
    name: 'Gaetan',
    email: 'gaetan@io.com',
    image: 'url(http://static.tvtropes.org/pmwiki/pub/images/gaetan_tw3.png)',
    languagesKnown: ['Ruby'],
  }
];

const students = [
  {
    name: 'Ciri the Ashen One',
    email: 'ciri@io.com',
    image: 'url(https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ciri.jpg)',
  },
  {
    name: 'Lambert',
    email: 'lambert@io.com',
    image: 'url(https://vignette.wikia.nocookie.net/non-aliencreatures/images/4/4f/Lambert_%28The_Witcher%29.png/revision/latest?cb=20170414170748)',
  },
  {
    name: 'Eskel',
    email: 'eskel@io.com',
    image: 'url(https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/eskel.jpg)',
  },
  {
    name: 'Letho of Gulet',
    email: 'letho@io.com',
    image: 'url(https://lh3.googleusercontent.com/-SNc3BFGIoXQ/VqGUzVUM1oI/AAAAAAAAAG0/P4UO4X0Rpl0/w800-h800/Letho%2Bof%2Bgulet.jpg)',
  },
  {
    name: 'Gaetan',
    email: 'gaetan@io.com',
    image: 'url(http://static.tvtropes.org/pmwiki/pub/images/gaetan_tw3.png)',
  }
];

const campuses = [
  {
    name: 'School of the Wolf',
    image: 'url(https://vignette.wikia.nocookie.net/witcher/images/4/4b/Wolf_School_medallion.png/revision/latest?cb=20151008164535)',
    city: 'Kaer Morhen',
    location: 'Kaedwen'
  },
  {
    name: 'School of the Cat',
    image: 'url(https://vignette.wikia.nocookie.net/witcher/images/d/db/The_witcher_cat_school_medallion.png/revision/latest/scale-to-width-down/220?cb=20150926081211)',
    city: 'Oreton Village',
    location: 'Velen'
  },
  {
    name: 'School of the Viper',
    image: 'url(https://vignette.wikia.nocookie.net/witcher/images/e/e3/Tw2_trailer_schooloftheviper.png/revision/latest/scale-to-width-down/120?cb=20160416054726)',
    city: 'Korath Desert',
    location: 'Empire of Nilfgaard'
  }
];

module.exports = { teachers, students, campuses };