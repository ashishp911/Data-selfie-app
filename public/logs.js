getData();
async function getData(){
    const response = await fetch('/api');
    const data = await response.json();
    for (item of data){

        const root = document.createElement('p');
        const name = document.createElement('div');
        name.setAttribute("id", "logsname");
        const geo = document.createElement('div');
        geo.setAttribute("id", "geo");
        const date = document.createElement('div');
        date.setAttribute("id", "date");
        const dateString = new Date(item.timestamp).toLocaleString();
        const br = document.createElement("br");
        const image = document.createElement('img');
        

        
        name.textContent = `Name : ${item.username}`;
        geo.textContent = `Latitude : ${item.lat}, Longitude : ${item.lon}`;
        date.textContent = dateString;
        image.src = item.image64;
        image.alt = "Ashish making faces.";

        root.append(name, geo, date, image, br);
        document.body.append(root);
    }
    console.log(data);
}