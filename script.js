const apiUrl = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
const apiKeyUrl = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys';



// 1. Hämta API-nyckeln med POST
//använd fetch för att hämta data fån APIet (https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys) med metoden POST

fetch(apiKeyUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Viktigt att inkludera rätt content-type
    }
})
    
    .then(response => {
        if (!response.ok) {
            throw new Error('API-key not found');
        }
        return response.json(); // Returnera JSON-data från svaret
    })
    .then(data => {
        // 2. Spara nyckeln från svaret
        const apiKey = data.key; // Anpassa efter nyckelns struktur i API-svaret
        console.log('Fetched API Key:', apiKey);

        // 3. Använd nyckeln för att göra GET-begäran
        return fetch(apiUrl, {
            method: 'GET',
            headers: { 'x-zocom': apiKey }
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('API data not found');
        }
        return response.json(); // Returnera JSON-data från svaret
    })
    .then(data => {
        // 4. Hantera och visa API-data
        console.log('API Data:', data);

        //Nedan variabler används för att identifiera vilka element som data ska skjutas in i.
        const Name = document.getElementById("name");
        const Facts = document.getElementById("facts");
        const Circumference = document.getElementById("circumference");
        const DistanceToSun = document.getElementById("distanceToSun");
        const MaxTemp = document.getElementById("maxTemp");
        const MinTemp = document.getElementById("minTemp");
        const Moons = document.getElementById("moons");
        const ownLaps = document.getElementById("ownLaps");
        const sunLaps = document.getElementById("sunLaps");

        //startar funktion 
        function searchPlanet() {
            const planetName = document.getElementById('planetName').value.toLowerCase();
            const planetBox = document.querySelector('.planetBox');
            const seachBar = document.querySelector('nav');
        
            // Iterera över data.bodies för att hitta planeten
            const planet = data.bodies.find(body => body.name.toLowerCase() === planetName);
        
            if (planet) {
                // Uppdatera faktarutan med information baserat på vilken planet som skrivits in.
                Name.textContent = `${planet.name} | ${planet.latinName}`;
                Facts.textContent = planet.desc;
                Circumference.textContent = `Omkrets: ${planet.circumference}`;
                DistanceToSun.textContent = `Distans från solen: ${planet.distance} km`;
                MaxTemp.textContent = `Maxtemperatur: ${planet.temp.day}`;
                MinTemp.textContent = `Minimitemperatur: ${planet.temp.night}`;
                Moons.textContent = `Antal månar: ${planet.moons.length}`;
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${planet.rotation}`;
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${planet.orbitalPeriod}`;
        
                seachBar.style.display = 'none';
                planetBox.style.display = 'flex';

            } else {
                // Om planeten inte hittas, visa ett felmeddelande
                alert('Planeten hittades inte. Kontrollera stavningen och försök igen.');
            }
        };

        
        function closeInfo() {
            const planetBox = document.querySelector('.planetBox');
            const seachBar = document.querySelector('nav');
            planetBox.style.display = 'none'
            seachBar.style.display = 'flex';
        }

        const planetBtn = document.getElementById('planetBtn');
        const closeBtn = document.getElementById('closeBtn');

        planetBtn.addEventListener('click', searchPlanet);
        closeBtn.addEventListener('click', closeInfo);


    })
    .catch(error => {
        // 5. Hantera fel
        console.error('Error:', error);
    });


