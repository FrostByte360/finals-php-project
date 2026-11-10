/* ========================================
   SAMPLE BOARDING HOUSE DATA
======================================== */

const boardingHouses = [
  {
    id: 1,
    name: "Julian's Boarding House",
    location: "Zone 1, Talisay City, Negros Occidental",
    description:
      "A comfortable boarding house suitable for students and working individuals.",
    roomTypes: "Solo and Shared Rooms",
    monthlyRent: "₱2,500 - ₱4,000",
    contact: "09123456789",
    owner: "Julian Santos",
  },

  {
    id: 2,
    name: "Casa de Maria",
    location: "Zone 2, Talisay City, Negros Occidental",
    description:
      "A peaceful and accessible boarding house located near commercial establishments.",
    roomTypes: "Solo Rooms",
    monthlyRent: "₱3,000 - ₱5,000",
    contact: "09987654321",
    owner: "Maria Cruz",
  },

  {
    id: 3,
    name: "Greenwood Dormitory",
    location: "Zone 4, Talisay City, Negros Occidental",
    description:
      "An affordable dormitory offering shared accommodations for students.",
    roomTypes: "Shared Rooms",
    monthlyRent: "₱1,800 - ₱2,500",
    contact: "09111222333",
    owner: "Pedro Garcia",
  },
];

/* ========================================
   FAVORITES STORAGE
======================================== */

const FAVORITES_KEY = "favoriteBoardingHouses";

function getFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
}

function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  let favorites = getFavorites();

  if (favorites.includes(id)) {
    favorites = favorites.filter((favoriteID) => favoriteID !== id);
  } else {
    favorites.push(id);
  }

  saveFavorites(favorites);

  displayBoardingHouses();
}

/* ========================================
   DISPLAY BOARDING HOUSE CARDS
======================================== */

const container = document.getElementById("boardingHouseContainer");

const searchInput = document.getElementById("searchRoom");

const currentPage = window.location.pathname.split("/").pop();

const isFavoritesPage = currentPage === "favorites.php";

function displayBoardingHouses(searchTerm = "") {
  container.innerHTML = "";

  let displayedHouses = boardingHouses;

  // FAVORITES PAGE FILTER

  if (isFavoritesPage) {
    const favorites = getFavorites();

    displayedHouses = displayedHouses.filter((house) =>
      favorites.includes(house.id),
    );
  }

  // SEARCH FILTER

  displayedHouses = displayedHouses.filter((house) => {
    const searchText = searchTerm.toLowerCase();

    return (
      house.name.toLowerCase().includes(searchText) ||
      house.location.toLowerCase().includes(searchText)
    );
  });

  // EMPTY RESULT

  if (displayedHouses.length === 0) {
    container.innerHTML = `
            <div class="empty-message">
                <h3>No Boarding Houses Found</h3>
                <p>
                    ${
                      isFavoritesPage
                        ? "You haven't added any boarding houses to your favorites yet."
                        : "Try searching with another boarding house name or location."
                    }
                </p>
            </div>
        `;

    return;
  }

  // GENERATE CARDS

  displayedHouses.forEach((house) => {
    const favorite = isFavorite(house.id);

    const card = document.createElement("div");

    card.classList.add("boarding-house-card");

    card.innerHTML = `

            <div class="boarding-house-details">

                <h3>${house.name}</h3>

                <p class="property-location">
                    <span>Location:</span> ${house.location}
                </p>

            </div>

            <div class="boarding-house-actions">

                <button
                    class="more-information-button"
                    data-action="information"
                    data-id="${house.id}"
                >
                    More Information
                </button>

                <button
                    class="favorite-button ${favorite ? "favorited" : ""}"
                    data-action="favorite"
                    data-id="${house.id}"
                >
                    ${favorite ? "Remove Favorite" : "Add to Favorites"}
                </button>

            </div>

        `;

    container.appendChild(card);
  });
}

/* ========================================
   SEARCH FUNCTIONALITY
======================================== */

if (searchInput) {
  searchInput.addEventListener("input", function () {
    displayBoardingHouses(this.value);
  });
}

/* ========================================
   CARD BUTTON EVENTS
======================================== */

container.addEventListener("click", function (event) {
  const button = event.target.closest("button");

  if (!button) return;

  const id = Number(button.dataset.id);

  const action = button.dataset.action;

  if (action === "information") {
    showPropertyInformation(id);
  }

  if (action === "favorite") {
    toggleFavorite(id);
  }
});

/* ========================================
   PROPERTY INFORMATION MODAL
======================================== */

const modal = document.getElementById("propertyModal");

const modalInformation = document.getElementById("modalInformation");

const closeModal = document.getElementById("closeModal");

function showPropertyInformation(id) {
  const house = boardingHouses.find((property) => property.id === id);

  if (!house) return;

  modalInformation.innerHTML = `

        <h2>${house.name}</h2>

        <div class="modal-details">

            <p>
                <strong>Location:</strong>
                ${house.location}
            </p>

            <p>
                <strong>Description:</strong>
                ${house.description}
            </p>

            <p>
                <strong>Room Types:</strong>
                ${house.roomTypes}
            </p>

            <p>
                <strong>Monthly Rent:</strong>
                ${house.monthlyRent}
            </p>

            <p>
                <strong>Property Owner:</strong>
                ${house.owner}
            </p>

            <p>
                <strong>Contact Number:</strong>
                ${house.contact}
            </p>

        </div>

        <button
            class="modal-favorite-button"
            onclick="toggleFavorite(${house.id})"
        >
            ${
              isFavorite(house.id)
                ? "Remove from Favorites"
                : "Add to Favorites"
            }
        </button>

    `;

  modal.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

closeModal.addEventListener("click", hideModal);

// Close modal when clicking outside the content

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    hideModal();
  }
});

// Close modal using Escape key

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hideModal();
  }
});

/* ========================================
   INITIALIZE PAGE
======================================== */

displayBoardingHouses();
