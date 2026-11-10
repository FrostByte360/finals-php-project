
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>

    <link rel="stylesheet" href="styleUserDashboard.css">
    <script src="userDashboard.js" defer></script>
</head>
<body>

    <!-- ======================================== STRICTLY DO NOT TOUCH THE CODE BELOW THIS LINE ======================================== -->

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
            <p>User Dashboard</p>
        </div>

        <div class="logo-container-profile">
            <div class="header-profile">
                <img class="logo-profile" src="assets/user.png">
            </div>
        </div>
    </div>

    <!-- ======================================== STRICTLY DO NOT TOUCH THE CODE ABOVE THIS LINE ======================================== -->

    <div class="first-container">
        <div class="random-rectangle"></div>

        <div class="first-container-text">
            <h1>Welcome, User!</h1>
            <br>
            <p>Here's an overview of each registered boarding house in Talisay City.</p>
        </div>
    </div>

    <div class="button-container">
        <a href="user_dashboard.php" class="custom-button active-button">
            Dashboard
        </a>

        <a href="favorites.php" class="custom-button">
            Favorites
        </a>

        <a href="#" class="custom-button">
            Messages
        </a>
    </div>

    <!-- BOARDING HOUSE DIRECTORY -->

    <div class="room-directory">

        <div class="directory-header">
            <div>
                <h2>Find Your Boarding House</h2>
                <p>Discover registered boarding houses in Talisay City.</p>
            </div>
        </div>

        <!-- SEARCH BAR -->

        <div class="directory-controls">

            <div class="search-container">
                <input
                    type="search"
                    id="searchRoom"
                    placeholder="Search boarding houses by name or location..."
                >
            </div>

        </div>

        <!-- BOARDING HOUSE CARDS -->

        <div id="boardingHouseContainer" class="boarding-house-container">
        </div>

    </div>

    <!-- MORE INFORMATION MODAL -->

    <div id="propertyModal" class="modal-overlay">

        <div class="modal-content">

            <button class="close-modal" id="closeModal">&times;</button>

            <div id="modalInformation">
                <!-- Information will be inserted through JavaScript -->
            </div>

        </div>

    </div>

</body>
</html>
