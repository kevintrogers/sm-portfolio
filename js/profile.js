var summary = new Vue({
  el: '#summary',
  data: {
    heading: 'Summary',
    summary: 'This is a summary of me.',
    
  }
});
var experience = new Vue({
    el: '#experience',
    data: {
        heading: 'Work History',
        active: false,
        jobs: [
            {logo: '', dates: '2014-Present', company: 'Citrus City Technology', position: 'Web Developer', 
                details: [
                    {
                        
                    }
                    ]
            },
            {logo: '', dates: '2015-2016', company: 'Spicy Monkey Media', position: 'Programmer', active: false,
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
            
        }
    }
});
var education = new Vue({
    el: '#education',
    data: {
        heading: 'Education',
        
    }
    
});