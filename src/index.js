import "./main.scss";

document.addEventListener("DOMContentLoaded", () => {
   document
       .getElementById("rating-form")
       .addEventListener("submit", handleFrom);

});

const handleFrom = (e) => {
    e.preventDefault();
    const ratingForm = e.target;
    const userRating = ratingForm['rating'].value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            rating: userRating,
        })
    })
        .then((data) => {
            document.getElementById('page').classList.add('success');
            document.getElementById('user-rating').textContent = userRating;
        })

        .catch((e) => {
            console.log(e);
        })
};
