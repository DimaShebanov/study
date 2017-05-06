document.addEventListener("DOMContentLoaded", start());

var popup;
var hider;


function start()
{
    popup = document.getElementById("popupMenu");
    hider = document.getElementById("hider");
}

function showPopup()
{
    popup.setAttribute("class", "popup-menu js-popup-menu_visible");
    hider.setAttribute("class", "js-content-hider_visible");
}

function hidePopup()
{

    popup.setAttribute("class", "popup-menu js-popup-menu_hiding");
    hider.setAttribute("class", "js-content-hider_hiding");
    setTimeout(function ()
    {
        popup.setAttribute("class", "popup-menu js-popup-menu_unvisible");
        hider.setAttribute("class", "js-content-hider_unvisible");
    }, 1000);
}

function addBlocks()
{
    let blocksContainer = document.getElementById("blocksContainer");
    let blocksCount = document.getElementsByClassName("block-container__item").length;
    for (let i = 0; i < 3; i++)
    {
        if(blocksCount >= 35)
        {
            break;
        }
        let newBlock = document.createElement("div");
        newBlock.innerHTML = ++blocksCount;
        newBlock.setAttribute("class", "block-container__item");
        blocksContainer.appendChild(newBlock);

    }
}