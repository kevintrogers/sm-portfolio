var socialLinks = new Vue({
  el: '#social-links',
  data: {

      social: [
      
        {
            title:'Github',
            icon: "<i class='fa fa-github-alt' aria-hidden='true'></i>",
            link:'https://github.com/kevintrogers'
        },
        {
            title:'Code Pen',
            icon: "<i class='fa fa-codepen' aria-hidden='true'></i>",
            link:'https://codepen.io/MonkeyMaker/'
        },
        {
            title:'Faceboo',
            icon: "<i class='fa fa-facebook' aria-hidden='true'></i>",
            link:'https://www.facebook.com/spicymonkeymedia'
        },
        {
            title:'Twitter',
            icon: "<i class='fa fa-twitter' aria-hidden='true'></i>",
            link:'https://twitter.com/spicymonkymedia'
        },
        {
            title:'Linkedin',
            icon: "<i class='fa fa-linkedin' aria-hidden='true'></i>",
            link:'https://www.linkedin.com/profile/view?id=AAIAAAmBUKoBdbOrqAwzQRxcyyy6wp_9xl90TVk&trk=nav_responsive_tab_profile'
        }
          
      ]
  }
});

var projects = new Vue({
  el: '#projects',
  data: {
    projects: [ 

        {
            title:'Team First Basketball',
            link:'http://teamfirstbasketball.com/',
            screenshot:'img/team-first-screenshot.PNG',

        },
        {
            title:'Pomodoro Clock',
            link:'http://codepen.io/MonkeyMaker/full/bVVQZg',
            screenshot:'img/pomodoro-screenshot.PNG',

        },
                {
            title:'Local Weather App',
            link:'http://codepen.io/MonkeyMaker/full/EVyNxJ',
            screenshot:'img/local-weather-app-screenshot.png',

        },
                {
            title:'Quote Machine',
            link:'http://codepen.io/MonkeyMaker/full/pjbzBX',
            screenshot:'img/quotemachine.PNG',
        },
                        {
            title:'Wikipedia Viewer',
            link:'http://codepen.io/MonkeyMaker/full/bpZvzr',
            screenshot:'img/wikipedia.png',
        }
          
        ]
  }
});

var contact = new Vue({
    el: '#contact',
    data: {
      telephoneCheck: false,
      emailCheck: false,
    }
})

