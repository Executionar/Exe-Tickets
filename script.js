document.getElementById("buyBtn").addEventListener("click", () => {
  let fare = document.getElementById("fare").value;

  // Ask for fare if empty
  if (!fare) {
    fare = prompt("Enter Fare for this bus (₹):");
    if (!fare || isNaN(fare)) {
      alert("Invalid fare entered.");
      return;
    }
    document.getElementById("fare").value = fare;
  }

  fare = parseFloat(fare);
  const discountedFare = (fare * 0.9).toFixed(2); // 10% discount

  const ticket = {
    id: Date.now(),
    number: document.getElementById("busNumber").value,
    plate: document.getElementById("plateNumber").value,
    color: document.getElementById("busColor").value,
    fare: fare.toFixed(2),
    price: discountedFare,
    route: document.getElementById("startStop").value + " → " + document.getElementById("endStop").value,
    time: new Date().toLocaleString('en-IN', {
      day: '2-digit', month: 'short', year: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: true
    }),
    ticketID: "T" + Date.now().toString(36)
  };

  const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
  tickets.push(ticket);
  localStorage.setItem("tickets", JSON.stringify(tickets));

  window.open("ticket.html?id=" + ticket.id, "_blank");
});