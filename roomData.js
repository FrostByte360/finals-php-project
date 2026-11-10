// roomData.js

const STORAGE_KEY = "boardingHouseRooms";

// Initial sample records
const initialRooms = [
  {
    room_number: "101",
    room_type: "Shared",
    current_boarders: 1,
    max_boarders: 2,
    monthly_rent: 2500,
  },
  {
    room_number: "102",
    room_type: "Shared",
    current_boarders: 2,
    max_boarders: 2,
    monthly_rent: 2500,
  },
  {
    room_number: "103",
    room_type: "Solo",
    current_boarders: 0,
    max_boarders: 1,
    monthly_rent: 3500,
  },
  {
    room_number: "104",
    room_type: "Shared",
    current_boarders: 3,
    max_boarders: 4,
    monthly_rent: 2000,
  },
  {
    room_number: "105",
    room_type: "Solo",
    current_boarders: 1,
    max_boarders: 1,
    monthly_rent: 3500,
  },
  {
    room_number: "106",
    room_type: "Shared",
    current_boarders: 0,
    max_boarders: 3,
    monthly_rent: 2000,
  },
];

// Initialize localStorage if no records exist
function initializeRooms() {
  if (localStorage.getItem(STORAGE_KEY) === null) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialRooms));
  }
}

// Retrieve all room records
function getRooms() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

// Save updated room records
function saveRooms(rooms) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rooms));
}

// Calculate dashboard statistics
function getRoomStatistics() {
  const rooms = getRooms();

  const totalRooms = rooms.length;

  const totalBoarders = rooms.reduce(
    (total, room) => total + Number(room.current_boarders),
    0,
  );

  const occupiedRooms = rooms.filter(
    (room) => Number(room.current_boarders) >= Number(room.max_boarders),
  ).length;

  const availableRooms = totalRooms - occupiedRooms;

  const occupancyRate = totalRooms > 0 ? (occupiedRooms / totalRooms) * 100 : 0;

  return {
    totalRooms,
    totalBoarders,
    occupiedRooms,
    availableRooms,
    occupancyRate: occupancyRate.toFixed(1),
  };
}

// Initialize the sample data
initializeRooms();
