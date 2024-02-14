function calculateTotal() {
    var quantity = document.getElementById("ticketQuantity").value;
    var totalPrice = quantity * 100; 
    document.getElementById("totalPrice").textContent = totalPrice;
  }
  
  function purchaseTickets() {
    var quantity = document.getElementById("ticketQuantity").value;
    var totalPrice = quantity * 100; 
  
    var congratsPageUrl = "grattis.html"; 
  window.location.href = congratsPageUrl + "?totalPrice=" + totalPrice;
  }