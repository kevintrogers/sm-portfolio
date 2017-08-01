

  var projects = new Vue({
  el: '#projects',
  data: {
    projects: [ 

        {
            title:'Black Gold Golf',
            link:'http://blackgoldgolf.com/',
            screenshot:'img/black-gold-screenshot.png',
            description:'Website for Back Gold Golf that I helped build at GreatLike Media',
            technology:'Word Press, HTML, CSS, Photoshop, Bootstrap, FTP'
            
        },
        {
            title:'Team First Basketball',
            link:'http://teamfirstbasketball.com/',
            screenshot:'img/team-first-screenshot.PNG',
            description:'Menu using CSS Animations that simulates a bounce pass.',
            technology:'AngularJS, HTML, CSS, Javascript, JQuery, Bootstrap, FTP, Git'
        },
        {
            title:'Pomodoro Clock',
            link:'http://codepen.io/MonkeyMaker/full/bVVQZg',
            screenshot:'img/pomodoro-screenshot.PNG',
            description:'A clock that helps utilize the pomodoro method, featuring a plaid theme and knockout text.',
            technology:'HTML, Javscript, JQuery, Bootstrap, CSS'
        },
                {
            title:'Local Weather App',
            link:'http://codepen.io/MonkeyMaker/full/EVyNxJ',
            screenshot:'img/local-weather-app-screenshot.png',
            description:'This app tells you the weather conditions in you favorite zip code.',
            technology: 'Material Design, HTML, CSS, Javascript, JQuery, Weather Underground API'
        },
                {
            title:'Quote Machine',
            link:'http://codepen.io/MonkeyMaker/full/pjbzBX',
            screenshot:'img/quotemachine.PNG',
            description:'See random quotes from famous folks.',
            technology:'HTML, CSS, Javascript, JQuery, Bootstrap'
        },
                        {
            title:'Wikipedia Viewer',
            link:'http://codepen.io/MonkeyMaker/full/bpZvzr',
            screenshot:'img/wikipedia.png',
            description:'A fun project using the Wikipedia API.',
            technology:'HTML, CSS, SCSS, Javascript, JQuery, Materialize'
        }
          
        ]
  }
})