angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Spicy Monkey Media';
    vm.pages = [
        {
            title:'Home',
            abbr:'H',
            link:'#home'
        },
        {
            title:'About',
            abbr:'A',
            link:'#about',
        },
        {
            title:'Portfolio',
            abbr:'P',
            link:'#portfolio'
        },
        {
            title:'Contact',
            abbr:'C',
            link:'#contact'
        }
        ];
vm.social_media = [
        {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers'
        },
        {
            title:'Linkedin',
            link:'https://www.linkedin.com/profile/view?id=AAIAAAmBUKoBdbOrqAwzQRxcyyy6wp_9xl90TVk&trk=nav_responsive_tab_profile'
        },
        {
            title:'Github',
            link:'https://github.com/kevintrogers'
        },
        {
            title:'FreeCodeCamp',
            link:'http://freecodecamp.com/kevintrogers'
        }
        ];
vm.projects = [
        {
            title:'United Utopia',
            link:'https://unitedutopia.xyz/',
            screenshot:'/img/unitedutopia.png',
            description:'An E-commerce site for a unique jewelry company.',
            technology:'PHP, Word Press, HTML, CSS, SCSS, Javascript, WooCommerce, Materialize, Gimp, Inkscape, Git'
        },
        {
            title:'Black Gold Golf',
            link:'http://blackgoldgolf.com/',
            screenshot:'img/black-gold-screenshot.png',
            description:'Website for Back Gold Golf that I helped build at GreatLike Media',
            technology:'Word Press, HTML, CSS, Photoshop, Bootstrap, FTP'
            
        },
        {
            title:'Just B Kause',
            link:'https://justbkause.org',
            screenshot:'/img/just-b-kause-screenshot.png',
            description:'A website for an Orange County Charity, Just B Kause.',
            technology:'PHP, Word Press, HTML, CSS, Javascript, JQuery, Bootstrap, Gimp, FTP, Git'
        },
        {
            title:'SID - LA Chapter',
            link:'http://sidla-spicymonkey.rhcloud.com/',
            screenshot:'img/la-sid-screenshot.png',
            description:'A re-creation of Society for Information Display\'s Los Angeles Chapter\'s site',
            technology:'Word Press, HTML, CSS, Bootstrap, FTP, Git'
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
            description:'Discover the weather conditions in your favorite zip code using the Weather Underground API.',
            technology: 'Materialize, HTML, CSS, Javascript, JQuery, API'
        },
                {
            title:'Quote Machine',
            link:'http://codepen.io/MonkeyMaker/full/pjbzBX',
            screenshot:'img/quotemachine.PNG',
            description:'See random quotes from famous folks.',
            technology:'HTML, CSS, Javascript, JQuery, Bootstrap'
        }, {
            title:'Wikipedia Viewer',
            link:'http://codepen.io/MonkeyMaker/pen/bpZvzr',
            screenshot:'img/wikipedia.png',
            description:'A project utilizing the Wikipedia API and Material Design.',
            technology:'HTML, CSS, SCSS, Javascript, JQuery, Materialize, API'
        }

          
        ];

});