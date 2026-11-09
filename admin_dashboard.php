<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styleDashboard.css">
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
        <p>Owner Workspace</p>
        </div>
        <!-- <div class="header-notifs">
            <img id="notif" src="assets/notif.png">
        </div> -->
        <div class="logo-container-profile">
            <div class="header-profile">
            <img class="logo-profile" src="assets/user.png">
        </div>
        </div>
    </div>

<!-- ======================================== STRICTLY DO NOT TOUCH THE CODE BELOW THIS LINE ======================================== -->

<div class="first-container">
    <div class="random-rectangle"></div>
    <div class="first-container-text">
        <h1>Welcome, User!</h1>
        <br>
        <p>Here's an overview of your boarding house.</p>
    </div>
</div>

<div class="button-container">
    <a href="admin_dashboard.php" class="custom-button">Dashboard</a>
    <a href="room_management.php" class="custom-button">Room Management</a>
</div>

<div class="second-container">
    <div class="property-detail">
        <div class="property-image-container"></div>
        <div class="text-container">
            <p>Property Details</p>
            <p id="nameBH">Name of Boarding House</p>

            <div class="text-container-inner">
                <img src="assets/locationpin.png">
                <p>Talisay City, Negros Occidental</p>
            </div>
            <div class="text-container-inner">
                <img src="assets/phone.png">
                <p>Phone Number of Boarding House</p>
            </div>
            <div><hr></div>
            <div class="text-container-inner">
                <p>Description of Boarding House</p>
            </div>
        </div>
    </div>

    <div class="second-property-detail">

            <div class="text-container">
                <div class="text-container-inner">
                    <img src="assets/gallery.png">
                    <p id="nameBH">Gallery</p>
                </div>
            </div>

            <div class="another-image-container">
                    <div class="property-image-container"></div><div class="property-image-container"></div><div class="property-image-container"></div><div class="property-image-container"></div>
            </div>

            <div class="text-container"><hr></div>

            <div class="text-container">
                <p>A glimpse of your boarding house.</p>
            </div>
    </div>
</div>

<div class="final-container">
    <div class="final-container-left">
        <div class="up-box-first">
            <div class="gmap-box">
                <img src="assets/google-maps.png" id="gmap">
            </div>
            <div class="gmap-text">
                <p id="nameBH">Property Location</p>
                <p>Talisay City, Negros Occidental</p>
                <div class="hr"><hr></div>
                <a href="https://maps.google.com" target="_blank">Open in Google Maps</a>
            </div>
        </div>
        <!-- <div class="up-box-second">sdgas</div> -->
    </div>
    <div class="final-container-right">
        <div class="up-box-third">
            <p id="nameBH">Boarding House Statistics</p>
            <div class="divide-boxes">
                <div class="boxes">
                    <p class="curcial-number" id="number-size">67</p>
                    <p>Total Number of Boarders</p>
                </div>
                <div class="boxes">
                    <p class="curcial-number" id="number-size">67</p>
                    <p>Rooms Occupied</p>
                </div>
                <div class="boxes">
                    <p class="curcial-number" id="number-size">67</p>
                    <p>Available Rooms</p>
                </div>
                <div class="boxes">
                    <p class="curcial-number" id="number-size">67</p>
                    <p>Room Occupancy</p>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>