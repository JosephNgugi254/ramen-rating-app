const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Shoyu", image: "./images/shoyu.jpg", rating: "8/10", comment: "Savory!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Naruto", image: "./images/naruto.jpg", rating: "10/10", comment: "Tasty!" },
    { id: 3, name: "Miso Nirvana", restaurant: "Nirvana", image: "./images/nirvana.jpg", rating: "9/10", comment: "Rich flavor!" },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Gyukotsu", image: "./images/gyukotsu.jpg", rating: "7/10", comment: "Beefy!" },
    { id: 5, name: "Kojiro Ramen", restaurant: "Kojiro", image: "./images/kojiro.jpg", rating: "8.5/10", comment: "Spicy kick!" }
];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; 
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = `${ramen.name}-image`;
        img.id = ramen.id;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    const displayImg = document.querySelector(".display-area img");
    const ramenDetails = document.querySelector(".ramen-details");
    const ratingComment = document.getElementById("rating-and-comment");

    displayImg.src = ramen.image;
    ramenDetails.innerHTML = `
        <h1>${ramen.name}</h1>
        <h2>${ramen.restaurant}</h2>
    `;
   
    let formattedRating;
    if (ramen.rating.includes("/10")) {
        formattedRating = ramen.rating;
    } else {
        formattedRating = `${ramen.rating}/10`;
    }

    ratingComment.innerHTML = `
        <h2>Rating:</h2>
        <p>${formattedRating}</p>
        <h2>Comment:</h2>
        <p>${ramen.comment}</p>
    `;
}


function addSubmitListener() {
    const form = document.getElementById("ramen-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const image = document.getElementById("image").value;
        let rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        if (!rating.includes("/10")) {
            rating = `${rating}/10`;
        }

        const newRamen = {
            id: ramens.length + 1,
            name,
            restaurant,
            image,
            rating,
            comment
        };

        ramens.push(newRamen);

        const ramenMenu = document.getElementById("ramen-menu");
        const img = document.createElement("img");
        img.src = image;
        img.alt = `${name}-image`;
        img.id = newRamen.id;
        img.addEventListener("click", () => handleClick(newRamen));
        ramenMenu.appendChild(img);

        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);