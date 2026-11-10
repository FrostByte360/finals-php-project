// dashboardStatistics.js

function updateDashboardStatistics() {
  const statistics = getRoomStatistics();

  document.getElementById("totalBoarders").textContent =
    statistics.totalBoarders;

  document.getElementById("occupiedRooms").textContent =
    statistics.occupiedRooms;

  document.getElementById("availableRooms").textContent =
    statistics.availableRooms;

  document.getElementById("occupancyRate").textContent =
    statistics.occupancyRate + "%";
}

// Display statistics when the page loads
updateDashboardStatistics();

// Automatically refresh if another page or tab modifies the room data
window.addEventListener("storage", function (event) {
  if (event.key === "boardingHouseRooms") {
    updateDashboardStatistics();
  }
});
