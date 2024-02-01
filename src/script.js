function toggleActive(clickedCard) {
  // Remove 'active' class from all cards
  var cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.classList.remove("active");
  });

  // Add 'active' class to the clicked card
  clickedCard.classList.add("active");
}
