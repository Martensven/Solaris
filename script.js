//Vi deklarerar API-länkarna som variabler för att koden ska se mindre kladdig ut längre ner i koden när vi använder länkarna.
const apiUrl = 'https://i4kif2xfk7.execute-api.eu-north-1.amazonaws.com/bodies'; 
const apiKeyUrl = 'https://i4kif2xfk7.execute-api.eu-north-1.amazonaws.com/keys';


//använd fetch för att hämta data fån APIet 
fetch(apiKeyUrl, { 
    method: 'POST', //Vi använder POST-metoden
    headers: {
        'Content-Type': 'application/json', //Vi specificerar content-typ. Koden funkar utan detta, men den fungerar som en fail-safe.
    }
})
    
    .then(response => { //Sen tar vi svaret
        if (!response.ok) { //Om vi får en felkod
            throw new Error('API-key not found'); //Så skapar vi ett felmeddelande
        }
        return response.json(); //Vi avslutar funktionen med return och får tillbaka datat som vi efterfrågat i .json-format. 
    })
    .then(data => { //Sen tar vi datan
        const apiKey = data.key; // Vi sparar datat (API-nyckeln) i en variabel
        console.log('Fetched API Key:', apiKey); //Vi loggar ut nyckeln i consolen för att se så att det funkar.

        return fetch(apiUrl, { //Vi avslutar funktionen med return och startar en ny fetch för att hämta mer data
            method: 'GET', //Vi använder GET-metoden för att hämta data
            headers: { 'x-zocom': apiKey } //Vi använder den tidigare hämtade API-nyckeln för att få åtkomst till efterfrågad data
        })
    })
    .then(response => { //Sen tar vi svaret
        if (!response.ok) { //Om vi får en felkod
            throw new Error('API data not found'); //Så skapar vi ett felmeddelande
        }
        return response.json(); //Vi avslutar funktionen med return och får tillbaka datat som vi efterfrågat i .json-format.
    })
    .then(data => { //Sen tar vi datan
        console.log('API Data:', data); //Vi loggar ut det i consolen för att se så att allt funkar som det ska.

        //Nedan variabler används för att identifiera vilka element som data ska skjutas in i. Vi hämtar dessa med hälp av id.
        const Name = document.getElementById("name"); 
        const Facts = document.getElementById("facts");
        const Circumference = document.getElementById("circumference");
        const DistanceToSun = document.getElementById("distanceToSun");
        const MaxTemp = document.getElementById("maxTemp");
        const MinTemp = document.getElementById("minTemp");
        const Moons = document.getElementById("moons");
        const ownLaps = document.getElementById("ownLaps");
        const sunLaps = document.getElementById("sunLaps");

        function searchPlanet() { //Startar funktion searchPlanet
            const planetName = document.getElementById('planetName').value.toLowerCase(); //Vi skapar en variabel med värdet från text-inputfältet som alltid omvandlas till små bokstäver
            const planetBox = document.querySelector('.planetBox'); //Vi skapar en variabel som vi kan använda för att styra containern som kommer att innehålla all planet-data.
            const seachBar = document.querySelector('nav'); //Vi skapar en variabel som i kan använda för att styra containern som kommer att innehålla text-inputfält och sök-knappen.
        
            // Iterera över data.bodies för att hitta planeten
            const planet = data.bodies.find(body => body.name.toLowerCase() === planetName); //Vi skapar en variabel som går igenom arrayn för att matcha det med värdet i variabeln planetName
        
            if (planet) { //om planet uppfylls, så fortsätter den med nedan kod, annars går den vidare till rad 71.
                //nedan kod ändrar textinnehållet på element med hjälp av sökvägarna i APIet. 
                Name.textContent = `${planet.name} | ${planet.latinName}`;
                Facts.textContent = planet.desc;
                Circumference.textContent = `Omkrets: ${planet.circumference}`;
                DistanceToSun.textContent = `Distans från solen: ${planet.distance} km`;
                MaxTemp.textContent = `Maxtemperatur: ${planet.temp.day}`;
                MinTemp.textContent = `Minimitemperatur: ${planet.temp.night}`;
                Moons.textContent = `Antal månar: ${planet.moons.length}`;
                ownLaps.textContent = `Antal jorddygn att rotera runt sin egen axel: ${planet.rotation}`;
                sunLaps.textContent = `Antal jorddygn att rotera runt solen: ${planet.orbitalPeriod}`;

                //Vi använder style-metoden för att ändra synligheten hos nedan element
                seachBar.style.display = 'none'; 
                planetBox.style.display = 'flex';

            } else { //Om planeten inte hittas, visa nedan felmeddelande som ett alert
                alert('Planeten hittades inte. Kontrollera stavningen och försök igen.');
            }
        };

        function closeInfo() { //Vi skapar en funktion för att kunna stänga faktarutan som kommer fram efter att man sökt på en planet.
            const planetBox = document.querySelector('.planetBox'); //Vi hämtar faktarutan som en variabel
            const seachBar = document.querySelector('nav'); //Vi hämtar nav-elementet
            planetBox.style.display = 'none' //Vi döljer faktarutan
            seachBar.style.display = 'flex'; //Vi visar nav-elementet
        }

        const planetBtn = document.getElementById('planetBtn'); //Vi deklarerar en variabel som hämtar knappen som vi använder för att söka efter planeter
        const closeBtn = document.getElementById('closeBtn'); //Vi deklarerar en variabel som hämtar knappen som vi använder för att dölja faktarutan

        planetBtn.addEventListener('click', searchPlanet); //Vi lägger till en eventlistener och ber knappen köra funktionen 'searchPlanet' när den klickas
        closeBtn.addEventListener('click', closeInfo); //Vi lägger till en eventlistener och ber knappen köra funktionen 'closeInfo' när den klickas


    })
    .catch(error => { //Om något i koden ovar blir fel, så fångar den upp det error och kör nedan kod.
        console.error('Error:', error); //Skriver ut ett felmeddelande som ett console-error
    });


