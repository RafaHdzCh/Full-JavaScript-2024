'use strict';

//#region Query Variables

const allSections = document.querySelectorAll(".section");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnLeftSlide = document.querySelector(".slider__btn--left");
const btnRightSlide = document.querySelector(".slider__btn--right");
const cookiesMessage = document.createElement("div"); //Creates a DOM element
const dotContainer = document.querySelector(".dots");
const h1 = document.querySelector("h1");
const header = document.querySelector(".header");
const imgTargets = document.querySelectorAll("img[data-src]");
const modal = document.querySelector('.modal');
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const operationsTabs = document.querySelectorAll(".operations__tab");
const overlay = document.querySelector('.overlay');
const section1 = document.querySelector("#section--1");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const tabsContent = document.querySelectorAll(".operations__content");
const tabsContainer = document.querySelector(".operations__tab-container"); 

//#endregion



//#region RegularVariables

const initialCoords = section1.getBoundingClientRect();
const navHeight = nav.getBoundingClientRect().height;

const headerObserverOptions = 
{
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
}
const headerObserver = new IntersectionObserver(StickNav, headerObserverOptions);

const sectionObserverOptions =
{
  root: null,
  threshold: 0.15,
}
const sectionObserver = new IntersectionObserver(RevealSection, sectionObserverOptions);

const imgObserverOptions =
{
  root: null,
  threshold: 0,
}
const imgObserver = new IntersectionObserver(LoadImage, imgObserverOptions)

let currentSlide = 0;
const totalAmountOfSlides = slides.length;
//#endregion



//#region Functions

function CloseModal()
{
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function OpenModal(_event)
{
  _event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function SetSmoothScroll(_event) 
{
  _event.preventDefault();
  if(_event.target.classList.contains("nav__link"))
  {
    const targetElement = document.querySelector(_event.target.getAttribute("href"));
    if (targetElement) 
    {
      targetElement.scrollIntoView({behavior: "smooth"});
    }
  }
}

function CreateCookiesBar()
{
  cookiesMessage.classList.add("cookie-message");
  cookiesMessage.innerHTML = `We use cookies for improved functionality and analytics. 
                          <button class="btn btn--close-cookie"> 
                              Got it! 
                          </button>`;
  header.prepend(cookiesMessage);
  document.querySelector(".btn--close-cookie")
          .addEventListener("click", () => cookiesMessage.remove());
  
  cookiesMessage.style.setProperty("height", (Number.parseFloat(getComputedStyle(cookiesMessage).height,10) + 15 + "px"));
  cookiesMessage.style.setProperty("background", "#37383d");
  
}

function UpdateOperationsTab(_event)
{
  _event.preventDefault();
  //Get tab bttn
  const clicked = _event.target.closest(".operations__tab");
  
  if(!clicked) return;
  
  //Deactivate previous tabs
  tabsContent.forEach(tabC => tabC.classList.remove("operations__content--active"));
  operationsTabs.forEach(tab => tab.classList.remove("operations__tab--active"));

  //Activate tab
  clicked.classList.add("operations__tab--active");
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
}

function FadeAnimationOnNavLinks(_event, _opacity)
{
  _event.preventDefault();
  if(_event.target.classList.contains("nav__link"))
  {
    const link = _event.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    siblings.forEach(sibling => 
    {
      if(sibling !== link)
      {
        sibling.style.opacity = _opacity;
      }
    })
  }
}

function StickNav(_entries)
{
    const [entry] = _entries;
    if(!entry.isIntersecting)
    {
        if(nav.classList.contains("sticky")) return;
        nav.classList.add("sticky");
    }
    else
    {
        if(!nav.classList.contains("sticky")) return;
        nav.classList.remove("sticky");
    }
}

function RevealSection(_entries, _observer)
{
  const [entry] = _entries;  

  if(!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  _observer.unobserve(entry.target);
}

function LoadImage(_entries, _observer)
{
  const [entry] = _entries;

  if(!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function()
  {
    entry.target.classList.remove("lazy-img");
  });
}

function GoToSlide(_slide)
{
  slides.forEach((slide, _index) => slide.style.transform = `translateX(${100 * (_index-_slide)}%)`);
}

function CalculateNextSlide()
{
  currentSlide = currentSlide === totalAmountOfSlides-1 ? 0 : currentSlide+1;
  GoToSlide(currentSlide);
  ActivateDot(currentSlide);
}

function CalculatePreviousSlide()
{
  currentSlide = currentSlide === 0 ? totalAmountOfSlides-1 : currentSlide-1;
  GoToSlide(currentSlide);
  ActivateDot(currentSlide);
}

function AddObservers()
{
  headerObserver.observe(header);
  allSections.forEach(function(section)
  {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });
  imgTargets.forEach(img => imgObserver.observe(img));
}

function CreateDots()
{
  slides.forEach(function(slide,index)
  {
    const dotHTML = `<button class = "dots__dot" data-slide="${index}"> </button>`;
    dotContainer.insertAdjacentHTML("beforeend", dotHTML);
  });
}

function ActivateDot(_slide)
{
  document.querySelectorAll(".dots__dot")
          .forEach(dot => dot.classList
          .remove("dots__dot--active"));

          document.querySelector(`.dots__dot[data-slide="${_slide}"]`).classList.add("dots__dot--active");
}

function StartPage()
{
  CreateCookiesBar();
  CreateDots();
  GoToSlide(0);
  ActivateDot(0);
  AddObservers();
}
//#endregion



//#region EventListener

btnRightSlide.addEventListener("click", CalculateNextSlide);
btnLeftSlide.addEventListener("click", CalculatePreviousSlide);
btnCloseModal.addEventListener('click', CloseModal);
btnsOpenModal.forEach(button => button.addEventListener('click', OpenModal));

overlay.addEventListener('click', CloseModal);

navLinks.addEventListener("click", SetSmoothScroll);
nav.addEventListener("mouseout", function(e) { FadeAnimationOnNavLinks(e,1) });
nav.addEventListener("mouseover", function(e) { FadeAnimationOnNavLinks(e,0.5) });

tabsContainer.addEventListener("click", UpdateOperationsTab);

document.addEventListener('keydown', function (event) 
{
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) 
  {
    CloseModal();
  }
});
document.addEventListener("keydown", function(event)
{
  if(event.key === "ArrowLeft")
  {
    CalculatePreviousSlide();
  }
});
document.addEventListener("keydown", function(event)
{
  if(event.key === "ArrowRight")
  {
    CalculateNextSlide()
  }
});
document.addEventListener("DOMContentLoaded", function(event){
  console.log("HTML parsed and COM tree built!");
});

dotContainer.addEventListener("click", function(event)
{
  if(event.target.classList.contains("dots__dot"))
  {
    const slide = event.target.dataset.slide;
    GoToSlide(slide);
    ActivateDot(slide);
  }
});

window.addEventListener("load", function(event) 
{
  console.log("Page fully loaded.");
});

//#endregion



//#region ExecutionZone

StartPage();

//h1.firstElementChild.style.color = "white";
//h1.lastElementChild.style.color = "white";

//#endregion