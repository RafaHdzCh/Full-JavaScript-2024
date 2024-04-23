'use strict';

const queryModal = document.querySelector(".modal");
const queryOverlay = document.querySelector(".overlay");
const queryCloseModalButton = document.querySelector(".close-modal");
const queryShowModalButtons = document.querySelectorAll(".show-modal");

document.addEventListener("keydown", OnKeyDown);
queryOverlay.addEventListener("click",CloseModal);
queryCloseModalButton.addEventListener("click",CloseModal);

for(let i = 0; i <queryShowModalButtons.length; i++)
{
    queryShowModalButtons[i].addEventListener("click", ShowModal);
}

function ShowModal()
{
    //console.log("click show");
    queryModal.classList.remove("hidden");
    queryOverlay.classList.remove("hidden");
}

function CloseModal()
{
    //console.log("click close");
    queryModal.classList.add("hidden");
    queryOverlay.classList.add("hidden");
}

function OnKeyDown(_keyPressed)
{
    if(_keyPressed.key === "Escape")
    {
        if(!queryModal.classList.contains("hidden"))
        {
            CloseModal();
        }
    }
}

