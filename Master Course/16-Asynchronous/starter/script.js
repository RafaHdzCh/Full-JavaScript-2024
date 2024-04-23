'use strict';

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//Callback functions
/*

function GetCountryAndNeighbour(_country)
{
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${_country}`);
    request.send();
    
    request.addEventListener("load", function()
    {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        RenderCountry(data);
        const neighbours = data.borders;
        if (!neighbours) return;

        neighbours.forEach(neighbour => 
        {
            let requestNeighbour = new XMLHttpRequest();
            requestNeighbour.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
            requestNeighbour.send();
            requestNeighbour.addEventListener('load', function () 
            {
                const [data2] = JSON.parse(this.responseText);
                RenderCountry(data2, 'neighbour');
            });
        });
    });
};

function RenderCountry(_data,_className = '')
{
    const languages = Object.values(_data.languages);
    const currencies = Object.values(_data.currencies);
    const HTML = 
    `
    <article class="${_className}">
        <img class="country__img" src= "${_data.flags.svg}">
        <div class="country__data">
            <h3 class="country__name"> ${_data.name.official}</h3>
            <h4 class="country__region">${_data.region}</h4>
            <p class="country__row"><span>👫</span>${(_data.population/1000000).toFixed(1)} million</p>         
            <p class="country__row"><span>🗣️</span>${languages[0]}</p>
            <p class="country__row"><span>💰</span>${currencies[0].name}</p>
        </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", HTML);
    countriesContainer.style.opacity = 1;
}

GetCountryAndNeighbour("mexico");
GetCountryAndNeighbour("usa"); 
GetCountryAndNeighbour("japan");

*/



//Promises
/*
function RenderError(_error)
{
    countriesContainer.insertAdjacentText("beforeend", `Something went wrong... ${_error.message}`);
}

function GetJSON(_urL, _errorMessage = "Something went wrong...")
{
    return fetch(`${_urL}`)
    .then(response =>
    {
        //console.log(response);
        if(!response.ok)
        {
            throw new Error(`${_errorMessage} (${response.status})`);
        }
        return response.json();
    }) //return new promise
}

function GetCountryData(_country)
{
    GetJSON(`https://restcountries.com/v3.1/name/${_country}`, "Country not found.")
    .then(_data => 
    {
        RenderCountry(_data[0]);
        const neighbours = _data[0].borders;

        if(!neighbours) return;
        
        const neighbourPromises = neighbours.map(neighbour => 
        {
            return GetJSON(`https://restcountries.com/v3.1/name/${neighbour}`, "Country not found.");
        });
        return Promise.all(neighbourPromises);
    })
    .then(neighbourDataArray => 
    {
        if(!neighbourDataArray) return;
        
        neighbourDataArray.forEach(neighbourData => RenderCountry(...neighbourData, "neighbour"));
    })
    .catch(error => RenderError(error))
    .finally(() => countriesContainer.style.opacity = 1);
}

function RenderCountry(_data,_className = '')
{
    if (!_data) {
        //console.error('Data is null or undefined.');
        return;
    }
    //console.log(_data);
    
    const { name, region, population, languages, currencies, flags } = _data || {};
    const language = languages ? Object.values(languages)[0] : '';
    const currency = currencies ? Object.values(currencies)[0]?.name : '';
    const flagUrl = flags && flags.svg ? flags.svg : '';

    const HTML =
        `
    <article class="${_className}">
        <img class="country__img" src="${flagUrl}" alt="${name ? name.official : ''}">
        <div class="country__data">
            <h3 class="country__name">${name ? name.official : 'CountryName'}</h3>
            <h4 class="country__region">${region || 'Region'}</h4>
            <p class="country__row"><span>👫</span>${(population / 1000000).toFixed(1)} million</p>         
            <p class="country__row"><span>🗣️</span>${language || 'Language'}</p>
            <p class="country__row"><span>💰</span>${currency || 'Currency'}</p>
        </div>
    </article>
    `;

    // Insertar el HTML en el contenedor de países
    countriesContainer.insertAdjacentHTML('beforeend', HTML);
}

btn.addEventListener("click", () => GetCountryData("mexico"));

*/



//Challenge 1
/*
console.log("Start");
function WhereAmI(lat, lng)
{
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
    .then(response => 
    {
        if(!response.ok) throw new Error(`Problem with GeoCoding ${response.status}`)
        return response.json()
    })
    .then(data =>
    {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.countryName}`);
    })
    .catch(error => console.error(error.message));
}

WhereAmI(51.50354,-0.12768);
console.log("End");

*/



//Execution order
/*

//1
console.log("Start");

//4
setTimeout(() => console.log("0 sec timer"),0);

//3
Promise.resolve("Resolve promise 1").then(response => console.log(response));

//2
console.log("End");
*/



//Building a simple promise
/*
const lotteryPromise = new Promise(function(resolve, reject)
{
    console.log("Lottery going on...")
    setTimeout(function() 
    {
        if(Math.random() >= 0.5)
        {
            resolve("You win!");
        }
        else
        {
            reject(new Error("You lose!"));
        }
    }, 2000)
})

lotteryPromise.then(result => console.log(result))
              .catch(error => console.error(error));
*/



//Promisifyng
/*
function Wait(seconds)
{
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
Wait(1)
    .then(() => Wait(1)
    .then(() => Wait(1)
    .then(() => Wait(1)
    .then(() => console.log("I waited for 3 seconds.")))))

//Wait(2).then(() => console.log("I waited for 2 seconds"));

Promise.resolve("ABC").then(x => console.log(x));
Promise.reject("ABC").catch(x => console.error(x));
*/



//Promisifying the GeoLocation API
/*

console.log("Getting position");

function GetPosition()
{
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
}


function WhereAmI()
{
    GetPosition().then(pos => 
    {
        const lat = pos.coords.lat;
        const lng = pos.coords.lng;
        return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
    })
    .then(response => 
    {
        if(!response.ok) throw new Error(`Problem with GeoCoding ${response.status}`)
        return response.json()
    })
    .then(data =>
    {
        console.log(`You are in ${data.city}, ${data.countryName}`);
    })
    .catch(error => console.error(error.message));
}
btn.addEventListener("click", WhereAmI);

*/



//Challenge 2
/*
const imgContainer = document.querySelector(".images");

function Wait(seconds)
{
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

function CreateImage(imgPath)
{
    return new Promise(function (resolve, reject)
    {
        const img = document.createElement("img");
        img.src = imgPath;
        img.addEventListener("load", function()
        {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener("error", function()
        {
            reject(new Error("Image not found"));
        })
    });
}

let currentImg;

CreateImage("img/img-1.jpg").then(img => 
{
    currentImg = img;
    console.log("Image loaded.")
    return Wait(2);
})
.then(() => 
{
    currentImg.style.display = "none";
    return CreateImage("img/img-2.jpg")
})
.then(img => 
{
    currentImg = img;
    console.log("Image loaded.")
    return Wait(2);
})
.then(() => 
{
    currentImg.style.display = "none";
})
.catch(error => console.log(error));

*/



//Async - Await

/*
async function WhereAmI(lat,lng)
{
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
    const countryData = await response.json();
    console.log(countryData);
}
//navigator.geolocation.getCurrentPosition(response => console.log(response));
WhereAmI(20.6507439,-103.3934002);
console.log("First");
*/



//Error Handling: Try and Catch
/*
async function WhereAmI() 
{
    try 
    {
        const position = await new Promise((resolve, reject) => 
        {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
       
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
        
        console.log(response.ok)
        
        const countryData = await response.json();
        
    } 
    catch (error) 
    {
        alert(`Cannot access to your current position: ${error}`);
    }
}
btn.addEventListener("click", WhereAmI);
*/



//Returning values from async functions
/*
async function WhereAmI() {
    return new Promise((resolve, reject) => 
    {
        navigator.geolocation.getCurrentPosition(async res => 
        {
            const lat = res.coords.latitude;
            const lng = res.coords.longitude;
            const _response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
            const countryData = await _response.json();
            resolve(countryData.countryName);
        }, error => 
        { 
            reject(error); 
        });
    });
}

WhereAmI()
    .then(country => console.log(`2. ${country}`))
    .catch(error => console.error(`2. ${error.message}`))
    .finally(() => console.log("3. Process completed."));

console.log("1. Will get location")
*/



//Challenge 3
const imgContainer = document.querySelector(".images");

function Wait(seconds)
{
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

function CreateImage(imgPath)
{
    return new Promise(function (resolve, reject)
    {
        const img = document.createElement("img");
        img.src = imgPath;
        img.addEventListener("load", function()
        {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener("error", function()
        {
            reject(new Error("Image not found"));
        })
    });
}

async function LoadNPause()
{
    try
    {
        //Load image 1
        let img = await CreateImage("img/img-1.jpg");
        console.log("Img 1 loaded")
        await Wait(2);
        img.style.display = "none";
        //Load image 2
        img = await CreateImage("img/img-2.jpg");
        console.log("Img 2 loaded")
        await Wait(2);
        img.style.display = "none";
    }
    catch(error)
    {
        console.log(error);
    }
    finally
    {
        console.log("Processed finished successfully.")
    }
}
//LoadNPause()

async function LoadAll(imgArray)
{
    try
    {
        const imgs = imgArray.map(async img => await CreateImage(img));
        console.log(imgs);

        const imgsPromise = await Promise.all(imgs);
        console.log(imgsPromise);
        imgsPromise.forEach(img => img.classList.add("parallel"));
    }
    catch(error)
    {
        console.log(error);
    }
}

LoadAll(["img/img-1.jpg","img/img-2.jpg","img/img-3.jpg"])