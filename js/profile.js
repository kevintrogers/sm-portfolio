$(function(){
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
            {logo: '', dates: '2015-2016', company: 'GreatLike Media', position: 'Programmer', active: false,
                details: [
                    {
                        
                    }
                    ]
            },
            {logo: '', dates: '2011-2014', company: 'Planet Herbs, Inc.', position: 'Sales Support Technician', active: false,
                details: [
                    {
                        
                    }
                    ]
            }
            ]
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
        
    }
    
});
});