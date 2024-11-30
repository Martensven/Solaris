const apiUrl = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
const apiKeyUrl = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys';



// 1. Hämta API-nyckeln med POST
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


        const Name = document.getElementById("name");
        const LatinName = document.getElementById("latinName");
        const Facts = document.getElementById("facts");
        const Circumference = document.getElementById("circumference");
        const DistanceToSun = document.getElementById("distanceToSun");
        const MaxTemp = document.getElementById("maxTemp");
        const MinTemp = document.getElementById("minTemp");
        const Moons = document.getElementById("moons");

        

        function searchPlanet() {

            const planetName = document.getElementById('planetName').value.toLowerCase();
            const planetBox = document.querySelector('.planetBox');

            if (planetName === 'merkurius') {
                Name.textContent = data.bodies[1].name;
                LatinName.textContent = data.bodies[1].latinName;
                Facts.textContent = data.bodies[1].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[1].circumference}`
                DistanceToSun.textContent = `Distans från solen i KM: ${data.bodies[1].distance}`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[1].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[1].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[1].moons.length}`

                planetBox.style.display = 'flex';
                
            }

            else if (planetName === 'venus') {
                Name.textContent = data.bodies[2].name;
                LatinName.textContent = data.bodies[2].latinName;
                Facts.textContent = data.bodies[2].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[2].circumference}`
                DistanceToSun.textContent = `Distans från solen i KM: ${data.bodies[2].distance}`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[2].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[2].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[2].moons.length}`

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'jorden') {
                Name.textContent = data.bodies[3].name;
                LatinName.textContent = data.bodies[3].latinName;
                Facts.textContent = data.bodies[3].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[3].circumference}`
                DistanceToSun.textContent = `Distans från solen i KM: ${data.bodies[3].distance}`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[3].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[3].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[3].moons.length}`

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'mars') {
                Name.textContent = data.bodies[4].name; 4
                LatinName.textContent = data.bodies[4].latinName;
                Facts.textContent = data.bodies[4].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[4].circumference}`
                DistanceToSun.textContent = `Distans från solen i KM: ${data.bodies[4].distance}`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[4].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[4].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[4].moons.length}`

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'jupiter') {
                Name.textContent = data.bodies[5].name;
                LatinName.textContent = data.bodies[5].latinName;
                Facts.textContent = data.bodies[5].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[5].circumference}`
                DistanceToSun.textContent = `Distans från solen i KM: ${data.bodies[5].distance}`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[5].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[5].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[5].moons.length}`

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'saturnus') {
                Name.textContent = data.bodies[6].name;
                LatinName.textContent = data.bodies[6].latinName;
                Facts.textContent = data.bodies[6].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[6].circumference}`
                DistanceToSun.textContent = `Distans från solen i KM: ${data.bodies[6].distance}`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[6].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[6].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[6].moons.length}`

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'uranus') {
                Name.textContent = data.bodies[7].name;
                LatinName.textContent = data.bodies[7].latinName;
                Facts.textContent = data.bodies[7].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[7].circumference}`
                DistanceToSun.textContent = `Distans från solen i KM: ${data.bodies[7].distance}`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[7].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[7].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[7].moons.length}`

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'neptunus') {
                Name.textContent = data.bodies[8].name;
                LatinName.textContent = data.bodies[8].latinName;
                Facts.textContent = data.bodies[8].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[8].circumference}`
                DistanceToSun.textContent = `Distans från solen i KM: ${data.bodies[8].distance}`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[8].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[8].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[8].moons.length}`

                planetBox.style.display = 'flex';
            }
            else {
                alert('Planeten hittades inte, har du stavat rätt?');
            }




        };

        const planetBtn = document.getElementById("planetBtn");
        planetBtn.addEventListener("click", searchPlanet);

    })
    .catch(error => {
        // 5. Hantera fel
        console.error('Error:', error);
    });


