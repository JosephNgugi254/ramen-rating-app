const ramenData = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Shoyu", image: "./images/shoyu.jpg", rating: "8/10", comment: "Savory!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Naruto", image: "./images/naruto.jpg", rating: "10/10", comment: "Tasty!" },
    { id: 3, name: "Miso Nirvana", restaurant: "Nirvana", image: "./images/nirvana.jpg", rating: "9/10", comment: "Rich flavor!" },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Gyukotsu", image: "./images/gyukotsu.jpg", rating: "7/10", comment: "Beefy!" },
    { id: 5, name: "Kojiro Ramen", restaurant: "Kojiro", image: "./images/kojiro.jpg", rating: "8.5/10", comment: "Spicy kick!" }
];

// Display all ramens in the menu
function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; // Clear existing content
    ramenData.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = `${ramen.name}-image`;
        img.id = ramen.id;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

// Handle clicking a ramen image
function handleClick(ramen) {
    const displayImg = document.querySelector(".display-area img");
    const details = document.querySelector(".ramen-details");
    const ratingComment = document.getElementById("rating-and-comment");

    // Update display area
    displayImg.src = ramen.image;
    details.innerHTML = `
        <h1>${ramen.name}</h1>
        <h2>${ramen.restaurant}</h2>
    `;

    // Update rating and comment
    ratingComment.innerHTML = `
        <h2>Rating:</h2>
        <p>${ramen.rating}</p>
        <h2>Comment:</h2>
        <p>${ramen.comment}</p>
    `;
}

// Handle form submission
function addSubmitListener() {
    const form = document.getElementById("ramen-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload

        // Get form values
        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const image = document.getElementById("image").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        // Create new ramen object
        const newRamen = {
            id: ramenData.length + 1, // Simple ID increment
            name,
            restaurant,
            image,
            rating,
            comment
        };

        // Add to data array
        ramenData.push(newRamen);

        // Add new image to menu
        const ramenMenu = document.getElementById("ramen-menu");
        const img = document.createElement("img");
        img.src = image;
        img.alt = `${name}-image`;
        img.id = newRamen.id;
        img.addEventListener("click", () => handleClick(newRamen));
        ramenMenu.appendChild(img);

        // Reset form
        form.reset();
    });
}

// Initialize the app
function main() {
    displayRamens();
    addSubmitListener();
}

// Run main when DOM is fully loaded
document.addEventListener("DOMContentLoaded", main);