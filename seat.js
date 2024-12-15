document.addEventListener("DOMContentLoaded", function () {
    const rows = 6;
    const seatsPerRow = 10;
    const seatingGrid = document.getElementById("seating-grid");
    const confirmButton = document.getElementById("confirm-seats");
    const payButton = document.getElementById("pay-now");
    const confirmationMessage = document.getElementById("confirmation-message");
    for (let i = 0; i < rows * seatsPerRow; i++) {
      const seat = document.createElement("div");
      seat.classList.add("seat");
      seat.dataset.seatNumber = i + 1;
      seat.addEventListener("click", toggleSeatSelection);
      seatingGrid.appendChild(seat);
    }
    function toggleSeatSelection() {
      if (!this.classList.contains("booked")) {
        this.classList.toggle("selected");
      }
    }
    confirmButton.addEventListener("click", function () {
      const selectedSeats = document.querySelectorAll(".seat.selected");
      if (selectedSeats.length === 0) {
        confirmationMessage.textContent = "No seats selected. Please select seats to book.";
        confirmationMessage.style.color = "#e74c3c";
        return;
      }
      const seatNumbers = Array.from(selectedSeats).map(seat => seat.dataset.seatNumber);
      confirmationMessage.textContent = `Seats ${seatNumbers.join(", ")} have been booked successfully!`;
      confirmationMessage.style.color = "#2ecc71";
      selectedSeats.forEach(seat => {
        seat.classList.remove("selected");
        seat.classList.add("booked");
        seat.removeEventListener("click", toggleSeatSelection);
      });
      payButton.style.display = "inline-block";
    });
    payButton.addEventListener("click", function () {
      confirmationMessage.textContent = "Payment processed successfully! Enjoy your movie.";
      confirmationMessage.style.color = "#2ecc71";
    });
  });
  