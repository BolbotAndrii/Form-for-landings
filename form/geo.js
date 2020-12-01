fetch('https://get.geojs.io/v1/ip/country.json')
.then(res => res.json())
.then((data) => {
    window.lang = data.country.toLowerCase();
}).catch(err => console.error(err));