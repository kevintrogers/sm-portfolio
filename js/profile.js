$(function(){
    
var nav = new Vue({
    el: '.navigation',
    data: {
        links: [
        {url: '#summary',
        linkText: 'Summary'
        },
        {url: '#experience',
        linkText: 'Experience'
        },
        {url: '#education',
        linkText: 'Education'
        },
        {url: '#projects',
        linkText: 'Projects'
        },
        {url: '#contact',
        linkText: 'contact'
        }
    ]
        
    }
});
    
var directory = new Vue({
  el: '#directory',
  data: {
    heading: 'Code Repositories',
    links: [
        {url: 'https://codepen.io/MonkeyMaker/',
        icon: 'fa fa-codepen'
        },
        {url: 'https://github.com/kevintrogers',
        icon: "fa fa-github"
        }
  ]
        
        
    
  }
});

var summary = new Vue({
  el: '#summary',
  data: {
    heading: 'Summary',
    summary: 'This is a summary of me.',
    
  }
});
/*
Make a container for profile pic.
*/
var experience = new Vue({
    el: '#experience',
    data: {
        heading: 'Work History',
        jobs: [
            {logo: '', dates: '2014-Present', company: 'Citrus City Technology', position: 'Web Developer', active: false,
                details: [
                     'I did this.',  'I did that.'
                        
                    
                    ]
            },
            {logo: '/img/Greatlike.png', dates: '2015-2016', company: 'GreatLike Media', position: 'Programmer', active: false,
                details: [
                    {
                        
                    }
                    ]
            },
            {logo:'/img/wellness-nations-logo.png', dates: '2011-2014', company: 'Planet Herbs, Inc.', position: 'Sales Support Technician', active: false,
                details: [
                    {
                        
                    }]
            }]
    },
    methods: {
        activate: function () {
            var jobDetails = $('#job-details li');
            
            jobDetails.addClass('show');
        }
    }
});
var education = new Vue({
    el: '#education',
    data: {
        heading: 'Education',
        schools: [
            {logo: '/img/glendale-community-college-california.png', school: 'Glendale Community College', major: 'Computer Science'
                
            },
                        {logo: '/../img/willamette-university.jpg', school: 'Willamette University', major: 'Philosophy'
                
            },
                        {logo: 'img/university-of-phoenix.jpg', school: 'University of Phoenix', major: 'Education'
                
            }]
        
    }
    
});
});