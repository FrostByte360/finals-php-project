// ========================================
// SAMPLE ROOM RECORDS
// ========================================

let rooms = [
  {
    id: 1,
    roomNumber: "101",
    roomType: "Single",
    capacity: 1,
    boarders: 1,
    rent: 3500,
  },

  {
    id: 2,
    roomNumber: "102",
    roomType: "Double",
    capacity: 2,
    boarders: 0,
    rent: 5000,
  },

  {
    id: 3,
    roomNumber: "103",
    roomType: "Single",
    capacity: 1,
    boarders: 0,
    rent: 3500,
  },

  {
    id: 4,
    roomNumber: "104",
    roomType: "Shared",
    capacity: 4,
    boarders: 3,
    rent: 2500,
  },

  {
    id: 5,
    roomNumber: "105",
    roomType: "Double",
    capacity: 2,
    boarders: 2,
    rent: 5000,
  },

  {
    id: 6,
    roomNumber: "106",
    roomType: "Single",
    capacity: 1,
    boarders: 0,
    rent: 3500,
  },

  {
    id: 7,
    roomNumber: "107",
    roomType: "Shared",
    capacity: 4,
    boarders: 1,
    rent: 2500,
  },
];

// ========================================
// ELEMENT REFERENCES
// ========================================

const tableBody = document.getElementById("roomTableBody");

const searchInput = document.getElementById("searchRoom");

const statusFilter = document.getElementById("statusFilter");

const pageInformation = document.getElementById("pageInformation");

const paginationButtons = document.getElementById("paginationButtons");

const emptyMessage = document.getElementById("emptyMessage");

const roomModal = document.getElementById("roomModal");

const roomForm = document.getElementById("roomForm");

const modalTitle = document.getElementById("modalTitle");

const addRoomBtn = document.getElementById("addRoomBtn");

const closeModalBtn = document.getElementById("closeModalBtn");

const cancelRoomBtn = document.getElementById("cancelRoomBtn");

const deleteRoomBtn = document.getElementById("deleteRoomBtn");

// ========================================
// PAGINATION SETTINGS
// ========================================

const roomsPerPage = 6;

let currentPage = 1;

// ========================================
// ROOM STATUS
// ========================================

function getRoomStatus(room) {
  return room.boarders > 0 ? "Occupied" : "Available";
}

// ========================================
// HTML ESCAPING
// ========================================

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

// ========================================
// DISPLAY ROOM RECORDS
// ========================================

function displayRooms() {
  const searchValue = searchInput.value.trim().toLowerCase();

  const selectedStatus = statusFilter.value;

  // SEARCH ROOMS

  let filteredRooms = rooms.filter((room) => {
    return room.roomNumber.toLowerCase().includes(searchValue);
  });

  // FILTER STATUS

  if (selectedStatus !== "all") {
    filteredRooms = filteredRooms.filter((room) => {
      return getRoomStatus(room) === selectedStatus;
    });
  }

  // PAGINATION CALCULATIONS

  const totalRooms = filteredRooms.length;

  const totalPages = Math.ceil(totalRooms / roomsPerPage);

  currentPage = Math.min(currentPage, Math.max(totalPages, 1));

  const startIndex = (currentPage - 1) * roomsPerPage;

  const endIndex = startIndex + roomsPerPage;

  const displayedRooms = filteredRooms.slice(startIndex, endIndex);

  // CLEAR TABLE

  tableBody.innerHTML = "";

  // EMPTY RESULT

  if (totalRooms === 0) {
    emptyMessage.hidden = false;
  } else {
    emptyMessage.hidden = true;
  }

  // GENERATE TABLE ROWS

  displayedRooms.forEach((room) => {
    const status = getRoomStatus(room);

    const statusClass = status.toLowerCase();

    const row = document.createElement("tr");

    row.innerHTML = `

            <td>${escapeHTML(room.roomNumber)}</td>

            <td>${escapeHTML(room.roomType)}</td>

            <td>${room.boarders} / ${room.capacity}</td>

            <td>₱${Number(room.rent).toLocaleString("en-PH", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}</td>

            <td>
                <span class="status ${statusClass}">
                    ${status}
                </span>
            </td>

            <td>
                <button
                    type="button"
                    class="manage-btn"
                    data-room-id="${room.id}">
                    Manage
                </button>
            </td>

        `;

    tableBody.appendChild(row);
  });

  // UPDATE PAGE INFORMATION

  pageInformation.textContent =
    totalRooms === 0
      ? "Showing 0 rooms"
      : `Showing ${startIndex + 1}-${Math.min(endIndex, totalRooms)} of ${totalRooms} rooms`;

  // GENERATE PAGINATION

  displayPagination(totalPages);
}

// ========================================
// GENERATE PAGINATION BUTTONS
// ========================================

function displayPagination(totalPages) {
  paginationButtons.innerHTML = "";

  // Hide pagination if only one page exists.

  if (totalPages <= 1) {
    return;
  }

  // PREVIOUS BUTTON

  const previousButton = document.createElement("button");

  previousButton.textContent = "‹";

  previousButton.className = "page-btn";

  previousButton.disabled = currentPage === 1;

  previousButton.addEventListener("click", () => {
    currentPage--;

    displayRooms();
  });

  paginationButtons.appendChild(previousButton);

  // NUMBERED BUTTONS

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");

    pageButton.textContent = i;

    pageButton.className = "page-btn";

    if (i === currentPage) {
      pageButton.classList.add("active");
    }

    pageButton.addEventListener("click", () => {
      currentPage = i;

      displayRooms();
    });

    paginationButtons.appendChild(pageButton);
  }

  // NEXT BUTTON

  const nextButton = document.createElement("button");

  nextButton.textContent = "›";

  nextButton.className = "page-btn";

  nextButton.disabled = currentPage === totalPages;

  nextButton.addEventListener("click", () => {
    currentPage++;

    displayRooms();
  });

  paginationButtons.appendChild(nextButton);
}

// ========================================
// OPEN ADD ROOM MODAL
// ========================================

function openAddModal() {
  roomForm.reset();

  document.getElementById("roomId").value = "";

  modalTitle.textContent = "Add New Room";

  deleteRoomBtn.hidden = true;

  roomModal.hidden = false;
}

// ========================================
// OPEN EDIT ROOM MODAL
// ========================================

function openEditModal(roomId) {
  const room = rooms.find((room) => room.id === roomId);

  if (!room) return;

  document.getElementById("roomId").value = room.id;

  document.getElementById("roomNumber").value = room.roomNumber;

  document.getElementById("roomType").value = room.roomType;

  document.getElementById("roomCapacity").value = room.capacity;

  document.getElementById("roomBoarders").value = room.boarders;

  document.getElementById("monthlyRent").value = room.rent;

  modalTitle.textContent = "Manage Room";

  deleteRoomBtn.hidden = false;

  roomModal.hidden = false;
}

// ========================================
// CLOSE MODAL
// ========================================

function closeModal() {
  roomModal.hidden = true;

  roomForm.reset();
}

// ========================================
// ADD / UPDATE ROOM
// ========================================

roomForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const roomId = document.getElementById("roomId").value;

  const roomNumber = document.getElementById("roomNumber").value.trim();

  const roomType = document.getElementById("roomType").value;

  const capacity = Number(document.getElementById("roomCapacity").value);

  const boarders = Number(document.getElementById("roomBoarders").value);

  const rent = Number(document.getElementById("monthlyRent").value);

  // VALIDATION

  if (
    !roomNumber ||
    !roomType ||
    capacity < 1 ||
    boarders < 0 ||
    boarders > capacity ||
    rent < 0
  ) {
    alert("Please provide valid room information.");

    return;
  }

  // CHECK DUPLICATE ROOM NUMBERS

  const duplicateRoom = rooms.some((room) => {
    return (
      room.roomNumber.toLowerCase() === roomNumber.toLowerCase() &&
      String(room.id) !== roomId
    );
  });

  if (duplicateRoom) {
    alert("This room number already exists.");

    return;
  }

  // UPDATE EXISTING ROOM

  if (roomId) {
    const roomIndex = rooms.findIndex((room) => {
      return room.id === Number(roomId);
    });

    if (roomIndex !== -1) {
      rooms[roomIndex] = {
        ...rooms[roomIndex],
        roomNumber,
        roomType,
        capacity,
        boarders,
        rent,
      };
    }

    alert("Room information updated successfully.");
  }

  // ADD NEW ROOM
  else {
    const newRoom = {
      id: Date.now(),

      roomNumber,
      roomType,
      capacity,
      boarders,
      rent,
    };

    rooms.push(newRoom);

    alert("New room added successfully.");
  }

  closeModal();

  currentPage = 1;

  displayRooms();
});

// ========================================
// DELETE ROOM
// ========================================

deleteRoomBtn.addEventListener("click", function () {
  const roomId = Number(document.getElementById("roomId").value);

  const confirmation = confirm("Are you sure you want to delete this room?");

  if (!confirmation) return;

  rooms = rooms.filter((room) => room.id !== roomId);

  alert("Room deleted successfully.");

  closeModal();

  displayRooms();
});

// ========================================
// EVENT LISTENERS
// ========================================

addRoomBtn.addEventListener("click", openAddModal);

closeModalBtn.addEventListener("click", closeModal);

cancelRoomBtn.addEventListener("click", closeModal);

searchInput.addEventListener("input", () => {
  currentPage = 1;

  displayRooms();
});

statusFilter.addEventListener("change", () => {
  currentPage = 1;

  displayRooms();
});

// MANAGE BUTTON EVENT DELEGATION

tableBody.addEventListener("click", function (event) {
  const button = event.target.closest(".manage-btn");

  if (!button) return;

  const roomId = Number(button.dataset.roomId);

  openEditModal(roomId);
});

// CLOSE MODAL WHEN CLICKING OUTSIDE IT

roomModal.addEventListener("click", function (event) {
  if (event.target === roomModal) {
    closeModal();
  }
});

// ========================================
// INITIALIZE DIRECTORY
// ========================================

displayRooms();
