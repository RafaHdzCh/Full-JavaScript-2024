
//SELECTING ELEMENTS
/*
//console.log(document.documentElement);
//console.log(document.head);
//console.log(document.body);

const sectionOne = document.getElementById("section--1");
console.log(sectionOne);

const allSections = document.querySelectorAll(".section");
console.log(allSections);

const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

const allButtonClasses = document.getElementsByClassName("btn");
console.log(allButtonClasses);
*/

// Creating and inserting elements
/*
// .insertAdjacentHTML

//header.prepend(newMessage);
//header.append(newMessage.cloneNode(true));
//header.before(newMessage);
//header.after(newMessage);

//console.log(getComputedStyle(cookiesMessage).height);

//document.documentElement.style.setProperty("--color-primary", "blue");

const logo = document.querySelector(".nav__logo");

logo.setAttribute("designer", "Naranja");
console.log(logo.getAttribute("designer"));
console.log(logo.getAttribute("alt"));
console.log(logo.getAttribute("src")); //Relative
console.log(logo.src);                 //Absolute
console.log(logo.getAttribute("id"));

const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

console.log(logo.dataset.versionNumber);

*/

//Classes
/*

const logo = document.querySelector(".nav__logo");
logo.classList.add("class");
logo.classList.remove("class");
logo.classList.toggle("class");
logo.classList.contains("class");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function(event)
{
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(event.target.getBoundingClientRect());
    console.log("Current scroll (X/Y)", window.scrollX, window.scrollY);
    console.log("Height/Width viewport: " + document.documentElement.clientHeight + " , " + document.documentElement.clientWidth)

    //Scrolling
    window.scrollTo(s1coords.left + window.scrollX, 
                    s1coords.top  + window.scrollY);
    window.scrollTo(
        {
            left:   s1coords.left + window.scrollX, 
            top: s1coords.top  + window.scrollY,
            behavior: "smooth",
        });

    section1.scrollIntoView({behavior: "smooth"});
});

const h1 = document.querySelector("h1");
function alertH1(event) 
{ 
    alert("AlertH1.");
    h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);

//OVERRIDES EVENT
//h1.onmouseenter =  event => { alert("OnMouseEnter.") };

*/

//EVENT BUBBLING
/*
const RandomInt = (min, max) => Math.floor(Math.random() * (max-min + 1) + min);
const RandomColor = () =>  `rgb(${RandomInt(0,255)},${RandomInt(0,255)},${RandomInt(0,255)})`;

document.querySelector(".nav__link").addEventListener("click", function(e)
{
    this.style.backgroundColor = RandomColor();
    console.log(
        `LINK
        Target: ${e.target} 
        CurrentTarget: ${e.currentTarget}
        Is the same as "this": ${e.currentTarget === this};
        `)
    //e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function(e)
{
    this.style.backgroundColor = RandomColor();
    console.log(
        `CONTAINER 
        Target: ${e.target} 
        CurrentTarget: ${e.currentTarget}
        Is the same as "this": ${e.currentTarget === this};
        `)
});

document.querySelector(".nav").addEventListener("click", function(e)
{
    this.style.backgroundColor = RandomColor();
    console.log(
        `NAV
        Target: ${e.target} 
        CurrentTarget: ${e.currentTarget}
        Is the same as "this": ${e.currentTarget === this};
        `)
});
*/


//DOM TARVERSING
/*
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

h1.closest(".header").style.background = "var(--gradient-primary)";
h1.closest("h1").style.background = "var(--gradient-primary)";
*/


//TABBED COMPONENT


//Intersection Observer API
/*
const obsOptions = 
{
    root: null,
    threshold: [0, 1, 0.2],

};
function ObserverCallback(entries, observer)
{
    //Will get called each time the target element(section1)
    //is intersecting the threshold and root that we defined

    entries.forEach(entry => { console.log(entry); });
}
const observer = new IntersectionObserver(ObserverCallback, obsOptions);

//
observer.observe(section1);
*/





