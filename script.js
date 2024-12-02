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
        // const LatinName = document.getElementById("latinName");
        const Facts = document.getElementById("facts");
        const Circumference = document.getElementById("circumference");
        const DistanceToSun = document.getElementById("distanceToSun");
        const MaxTemp = document.getElementById("maxTemp");
        const MinTemp = document.getElementById("minTemp");
        const Moons = document.getElementById("moons");
        const ownLaps = document.getElementById("ownLaps");
        const sunLaps = document.getElementById("sunLaps");
        const btnStyle = document.getElementById('planetBtn');
        

        

        function searchPlanet() {

            const planetName = document.getElementById('planetName').value.toLowerCase();
            const planetBox = document.querySelector('.planetBox');

            if (planetName === 'merkurius') {
                Name.textContent = `${data.bodies[1].name} | ${data.bodies[1].latinName}`;
                Facts.textContent = data.bodies[1].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[1].circumference}`
                DistanceToSun.textContent = `Distans från solen: ${data.bodies[1].distance} km`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[1].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[1].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[1].moons.length}`
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${data.bodies[1].rotation}`
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${data.bodies[1].orbitalPeriod}`

                btnStyle.style.backgroundImage = 'linear-gradient(to bottom right, gray, lightgray, gray)';
                btnStyle.style.boxShadow = 'none';
                btnStyle.style.color = 'white';
                

                planetBox.style.display = 'flex';
                
            }

            else if (planetName === 'venus') {
                Name.textContent = `${data.bodies[2].name} | ${data.bodies[2].latinName}`;
                Facts.textContent = data.bodies[2].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[2].circumference}`
                DistanceToSun.textContent = `Distans från solen: ${data.bodies[2].distance} km`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[2].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[2].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[2].moons.length}`
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${data.bodies[2].rotation}`
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${data.bodies[2].orbitalPeriod}`

                btnStyle.style.backgroundImage = 'linear-gradient(to bottom right, blue, green, blue)'
                btnStyle.style.boxShadow = 'none'
                btnStyle.style.color = 'white'

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'jorden') {
                Name.textContent = `${data.bodies[3].name} | ${data.bodies[3].latinName}`;
                Facts.textContent = data.bodies[3].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[3].circumference}`
                DistanceToSun.textContent = `Distans från solen: ${data.bodies[3].distance} km`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[3].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[3].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[3].moons.length}`
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${data.bodies[3].rotation}`
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${data.bodies[3].orbitalPeriod}`

                btnStyle.style.backgroundImage = 'linear-gradient(to bottom right, blue, green, blue)'
                btnStyle.style.boxShadow = 'none'
                btnStyle.style.color = 'white'

                
                btnStyle.style.backgroundImage = 'linear-gradient(to bottom right, blue, green, blue)'
                btnStyle.style.boxShadow = 'none'
                btnStyle.style.color = 'white'

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'mars') {
                Name.textContent = `${data.bodies[4].name} | ${data.bodies[4].latinName}`;
                Facts.textContent = data.bodies[4].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[4].circumference}`
                DistanceToSun.textContent = `Distans från solen: ${data.bodies[4].distance} km`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[4].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[4].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[4].moons.length}`
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${data.bodies[4].rotation}`
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${data.bodies[4].orbitalPeriod}`

                btnStyle.style.backgroundImage = 'linear-gradient(to bottom right, blue, green, blue)'
                btnStyle.style.boxShadow = 'none'
                btnStyle.style.color = 'white'

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'jupiter') {
                Name.textContent = `${data.bodies[5].name} | ${data.bodies[5].latinName}`;
                Facts.textContent = data.bodies[5].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[5].circumference}`
                DistanceToSun.textContent = `Distans från solen: ${data.bodies[5].distance} km`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[5].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[5].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[5].moons.length}`
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${data.bodies[5].rotation}`
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${data.bodies[5].orbitalPeriod}`

                btnStyle.style.backgroundImage = 'linear-gradient(to bottom right, blue, green, blue)'
                btnStyle.style.boxShadow = 'none'
                btnStyle.style.color = 'white'

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'saturnus') {
                Name.textContent = `${data.bodies[6].name} | ${data.bodies[6].latinName}`;
                Facts.textContent = data.bodies[6].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[6].circumference}`
                DistanceToSun.textContent = `Distans från solen: ${data.bodies[6].distance} km`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[6].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[6].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[6].moons.length}`
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${data.bodies[6].rotation}`
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${data.bodies[6].orbitalPeriod}`

                btnStyle.style.backgroundImage = 'linear-gradient(to bottom right, blue, green, blue)'
                btnStyle.style.boxShadow = 'none'
                btnStyle.style.color = 'white'

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'uranus') {
                Name.textContent = `${data.bodies[7].name} | ${data.bodies[7].latinName}`;
                Facts.textContent = data.bodies[7].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[7].circumference}`
                DistanceToSun.textContent = `Distans från solen: ${data.bodies[7].distance} km`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[7].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[7].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[7].moons.length}`
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${data.bodies[6].rotation}`
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${data.bodies[7].orbitalPeriod}`

                btnStyle.style.backgroundImage = 'linear-gradient(to bottom right, blue, green, blue)'
                btnStyle.style.boxShadow = 'none'
                btnStyle.style.color = 'white'

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'neptunus') {
                Name.textContent = `${data.bodies[8].name} | ${data.bodies[8].latinName}`;
                Facts.textContent = data.bodies[8].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[8].circumference}`
                DistanceToSun.textContent = `Distans från solen: ${data.bodies[8].distance} km`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[8].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[8].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[8].moons.length}`
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${data.bodies[8].rotation}`
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${data.bodies[8].orbitalPeriod}`

                btnStyle.style.backgroundImage = 'linear-gradient(to bottom right, blue, green, blue)'
                btnStyle.style.boxShadow = 'none'
                btnStyle.style.color = 'white'

                planetBox.style.display = 'flex';
            }

            else if (planetName === 'solen') {
                Name.textContent = `${data.bodies[0].name} | ${data.bodies[0].latinName}`;
                Facts.textContent = data.bodies[0].desc;
                Circumference.textContent = `Omkrets: ${data.bodies[0].circumference}`
                DistanceToSun.textContent = `Distans från solen: ${data.bodies[0].distance} km`
                MaxTemp.textContent = `Maxtemperatur: ${data.bodies[0].temp.day}`
                MinTemp.textContent = `Minimitemperatur: ${data.bodies[0].temp.night}`
                Moons.textContent = `Antal månar: ${data.bodies[0].moons.length}`
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${data.bodies[0].rotation}`
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${data.bodies[0].orbitalPeriod}`

                planetBox.style.display = 'flex';
            }

            else if (planetName === ''){
                alert('Du måste skriva in något!');
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


