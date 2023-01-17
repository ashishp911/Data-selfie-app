function setup(){

    // Image capturing
    noCanvas();
    const video = createCapture(VIDEO);
    video.size(320,240);

    // check if geolocation is available
    async function success(pos){
        // console.log(pos.coords.latitude);
        // console.log(pos.coords.longitude);
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const username = document.getElementById('name').value;
        document.getElementById('lat').textContent = lat
        document.getElementById('lon').textContent = lon
        video.loadPixels();
        const image64 = video.canvas.toDataURL();
         
        // setting up fetch
        const data = {username, lat, lon, image64};
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            // sending data as JSON string
            body: JSON.stringify(data), 
        };
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json)
    }
        
    document.getElementById('geolocate').addEventListener('click', async event => {
        if ('geolocation' in navigator){
            console.log('geolocation available');
            navigator.geolocation.getCurrentPosition(success);
        }
        else{
            console.log('geolocation not available');
        }
    });

    // async function getMyMap(){
    //     // Leaflet js code below
    //     navigator.geolocation.getCurrentPosition((position) => {
    //     let lati = position.coords.latitude;
    //     let long = position.coords.longitude;
    //     const map = L.map('map').setView([0,0], 2);
    //     const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    //     const tilesURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    //     const tiles = L.tileLayer(tilesURL, {attribution});
    //     tiles.addTo(map);
    //     const marker = L.marker([lati, long]).addTo(map);   
    //     });
    // };
    
    // document.getElementById('getMap').addEventListener('click', async event => {
    //     await getMyMap();
    // });

}