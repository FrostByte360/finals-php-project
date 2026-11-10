<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Room Management</title>

    <link rel="stylesheet" href="styleDashboard.css">
    <link rel="stylesheet" href="styleRoomManagement.css">

    <script src="room_management.js" defer></script>
</head>
<body>

<!-- ========================================
     STRICTLY DO NOT TOUCH THE CODE BELOW
======================================== -->

<div class="header">
    <div class="logo-container">
        <div>
            <img class="logo" src="assets/talisay.png" alt="Talisay Logo">
        </div>

        <div class="talisay-text">
            <h1>TALISAY CITY</h1>
            <p>Boarding House Inquiry System</p>
        </div>
    </div>

    <div class="header-text">
        <p>Owner Workspace</p>
    </div>

    <div class="logo-container-profile">
        <div class="header-profile">
            <img class="logo-profile" src="assets/user.png">
        </div>
    </div>
</div>

<!-- ========================================
     STRICTLY DO NOT TOUCH THE CODE ABOVE
======================================== -->


<!-- PAGE NAVIGATION -->
 <div class="first-container">
    <div class="random-rectangle"></div>
    <div class="first-container-text">
        <h1>Welcome, User!</h1>
        <br>
        <p>Here's an overview of your boarding house.</p>
    </div>
</div>

<div class="button-container">
    <a href="admin_dashboard.php" class="custom-button">
        Dashboard
    </a>

    <a href="room_management.php" class="custom-button active">
        Room Management
    </a>
</div>


<!-- ROOM DIRECTORY -->

<div class="room-directory">

    <div class="directory-header">

        <div>
            <h2>Room Directory</h2>
            <p>Manage and monitor your boarding house rooms.</p>
        </div>

        <button type="button" id="addRoomBtn" class="add-room-btn">
            + Add Room
        </button>

    </div>


    <!-- SEARCH AND FILTER -->

    <div class="directory-controls">

        <div class="search-container">
            <input
                type="search"
                id="searchRoom"
                placeholder="Search Room Number..."
            >
        </div>

        <div class="filter-container">

            <select id="statusFilter">
                <option value="all">All Status</option>
                <option value="Available">Available</option>
                <option value="Occupied">Occupied</option>
            </select>

        </div>

    </div>


    <!-- ROOM TABLE -->

    <div class="table-container">

        <table class="room-table">

            <thead>
                <tr>
                    <th>Room Number</th>
                    <th>Room Type</th>
                    <th>Boarders</th>
                    <th>Monthly Rent</th>
                    <th>Occupancy Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody id="roomTableBody">
                <!-- JavaScript generates the room records here -->
            </tbody>

        </table>

        <div id="emptyMessage" hidden>
            No rooms found.
        </div>

    </div>


    <!-- PAGINATION -->

    <div class="pagination-container">

        <p id="pageInformation">Showing 0 rooms</p>

        <div id="paginationButtons" class="pagination-buttons">
            <!-- JavaScript generates pagination buttons here -->
        </div>

    </div>

</div>


<!-- ADD / EDIT ROOM MODAL -->

<div class="modal-overlay" id="roomModal" hidden>

    <div class="room-modal">

        <div class="modal-header">

            <h2 id="modalTitle">Add New Room</h2>

            <button type="button" id="closeModalBtn">
                &times;
            </button>

        </div>


        <form id="roomForm">

            <input type="hidden" id="roomId">

            <div class="modal-form-group">

                <label for="roomNumber">Room Number</label>

                <input
                    type="text"
                    id="roomNumber"
                    placeholder="Example: 101"
                    required
                >

            </div>


            <div class="modal-form-group">

                <label for="roomType">Room Type</label>

                <select id="roomType" required>
                    <option value="">Select Room Type</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Shared">Shared</option>
                </select>

            </div>


            <div class="modal-form-group">

                <label for="roomCapacity">Maximum Capacity</label>

                <input
                    type="number"
                    id="roomCapacity"
                    min="1"
                    placeholder="Enter room capacity"
                    required
                >

            </div>


            <div class="modal-form-group">

                <label for="roomBoarders">Current Boarders</label>

                <input
                    type="number"
                    id="roomBoarders"
                    min="0"
                    value="0"
                    required
                >

            </div>


            <div class="modal-form-group">

                <label for="monthlyRent">Monthly Rent (₱)</label>

                <input
                    type="number"
                    id="monthlyRent"
                    min="0"
                    step="0.01"
                    placeholder="Enter monthly rent"
                    required
                >

            </div>


            <div class="modal-actions">

                <button type="button" id="cancelRoomBtn">
                    Cancel
                </button>

                <button type="submit" id="saveRoomBtn">
                    Save Room
                </button>

                <button type="button" id="deleteRoomBtn" hidden>
                    Delete Room
                </button>

            </div>

        </form>

    </div>

</div>

</body>
</html>