function calculateTotal() {
  var quantity = document.getElementById("ticketQuantity").value;
  var totalPrice = quantity * 100;
  document.getElementById("totalPrice").textContent = totalPrice;
}

function purchaseTickets() {
  var quantity = document.getElementById("ticketQuantity").value;
  var email = document.getElementById("email").value;

  if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  var totalPrice = quantity * 100;

  var congratsPageUrl = "grattis.html";
  window.location.href = congratsPageUrl + "?totalPrice=" + totalPrice + "&email=" + encodeURIComponent(email);
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* För att skapa detta scriptet använde vi oss av våran kunskap + Chat GPT */
