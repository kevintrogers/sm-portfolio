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
        heading: 'Experience',
        jobs: [
            {logo: '', dates: '2014-Present', company: 'Citrus City Technology', position: 'Web Developer'},
            {logo: '', dates: '2015-2016', company: 'Spicy Monkey Media', position: 'Programmer'},
            {logo: '', dates: '2011-2014', company: 'Planet Herbs, Inc.', position: 'Sales Support Technician'}
            ]
    }
    
});