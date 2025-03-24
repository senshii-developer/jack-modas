import { notification } from "./notification.js"

const IMAGES_BASE_PATH = "public/images"
const BRANDS = ["aurora", "eloa", "monique", "samanta"]
const BRAND_COLOR_QUANTITIES = {
    aurora: [
        ["flag-green", 4],
        ["marine-blue", 4]
    ],

    eloa: [
        ["Marron-caramel", 6],
        ["Off-white-caramel", 7]
    ],

    monique: [
        ["floral-green", 5]
    ],

    samanta: [
        ["black", 7],
        ["orange", 4]
    ]
}

const firstImage = document.querySelector(".card-image-container")
const cardImageContainers = document.querySelectorAll(".card-image-container")

const inputs = document.querySelectorAll("input[type=\"checkbox\"]")

const getDressImage = (brand, color, option) => {
    return IMAGES_BASE_PATH.concat("/dress", "/", brand, "/", color, String(option), ".jpg")
}

let slideShowInterval;

cardImageContainers.forEach((cardImage) => {
    const interval = 1; // in seconds

    const brand = cardImage.getAttribute("id");
    const card = cardImage.parentNode;
    const inputs = card.querySelectorAll("input[type=\"radio\"]");
    const slideShowButton = card.querySelector(".slide-show");
    const addToCartButton = card.querySelector(".add-to-cart")

    slideShowButton.addEventListener("click", () => {
        let count = 1;

        const inputSelected = card.querySelector("input:checked");
        const brandColor = inputSelected.value; 
        const brandColorQty = BRAND_COLOR_QUANTITIES[brand].find(([color]) => brandColor === color)[1]

        slideShowInterval = setInterval(() => {
            count++;

            if (count === brandColorQty) {
                clearInterval(slideShowInterval);
            }

            cardImage.style.backgroundImage = `url(${getDressImage(brand, brandColor, count)})`
        }, interval * 1000);
    });
   
    inputs.forEach((input) => {
        input.addEventListener("change", () => {
            if (slideShowInterval) {
                clearInterval(slideShowInterval);
            }

            const isChecked = input.checked;
            delayTimer = 0;

            if (isChecked) {
                const brandColor = input.value
                cardImage.style.backgroundImage = `url(${getDressImage(brand, brandColor, 1)})`
            }
        });
    });
    
    addToCartButton.addEventListener("click", () => {
        const dressPrice = card.querySelector(".card-price").textContent
        const inputSelected = card.querySelector("input:checked");
        const brandColor = inputSelected.value
        const dressName = card.querySelector(".card-name").textContent
        console.log(dressPrice,brandColor,dressName)

        const messageContainer = document.createElement("div")
        messageContainer.className = "message-container"
        
        const nameItem = document.createElement("span")
        nameItem.textContent=(dressName)
        nameItem.className = "name-item"
        
        const colorItem = document.createElement("div")
        const dress = inputSelected.parentNode.getAttribute("style");
        colorItem.style = dress
        colorItem.className = "color-item"

        // document.querySelector(`.color[for="${brandColor}"]`)
        
        const messageItem = document.createElement("span")
        messageItem.textContent="Adicionado ao carrinho!"
        messageItem.className = "message-item"
        
        const priceItem = document.createElement("span")
        priceItem.textContent = (dressPrice)
        priceItem.className = "price-item"
        
        messageContainer.append(messageItem,nameItem,priceItem,colorItem) 
        notification.add(messageContainer)
    })
});

