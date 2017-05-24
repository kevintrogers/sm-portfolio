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
        jobs: [
            {logo: '', dates: '2014-Present', company: 'Citrus City Technology', position: 'Web Developer',
                details: [
                    {
                        
                    }
                    ]
            },
            {logo: '', dates: '2015-2016', company: 'Spicy Monkey Media', position: 'Programmer',
                details: [
                    {
                        
                    }
                    ]
            },
            {logo: '', dates: '2011-2014', company: 'Planet Herbs, Inc.', position: 'Sales Support Technician',
                details: [
                    {
                        
                    }
                    ]
            }
            ]
    }
});
var education = new Vue({
    el: '#education',
    data: {
        heading: 'Education',
        
    }
    
});