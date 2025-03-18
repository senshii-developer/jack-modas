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

cardImageContainers.forEach((cardImage, index) => {
    let delay = 1500;
    let delayTimer = 0;
    const inputs = cardImage.parentNode.querySelectorAll("input[type=\"radio\"]")
    console.log([...inputs])

    inputs.forEach((input) => {
        input.addEventListener("change", () => {
            const isChecked = input.checked;
            delayTimer = 0;

            if (isChecked) {
                const brand = cardImage.getAttribute("id");
                const brandColor = input.value
                const brandColorQty = BRAND_COLOR_QUANTITIES[brand].find(([color]) => brandColor === color)[1]

                console.log(brandColorQty);

                for (let count = 1; count <= brandColorQty; count++) {
                    
                    setTimeout(() => {
                        cardImage.style.backgroundImage = `url(${getDressImage(brand, brandColor, count)})`
                    }, delayTimer)
                    delayTimer += delay;
                }

            }
        })
    })


})



// rotatingImage()



// const inputs = cardImage.parentNode.querySelectorAll("input")
// console.log([...inputs])
// const brandColor = document.querySelector(`div:has(>#${brand}) input:checked`).value