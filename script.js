function purchase(item) {
    alert("Thank you for your interest in " + item + "! We’ll contact you soon.");
}

function searchCards() {
    let input = document.getElementById("searchBar");
    if (!input) return;
    let filter = input.value.toLowerCase();
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();
        if (text.includes(filter)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

