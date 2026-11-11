<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="styleSignUp.css">
    <script src="signup.js" defer></script>
</head>
<body>
    <div class="main-container">
        <div class="image-container-bg">
            <div class="left-box">
        <div class="first-inner-lbox">
            <img src="assets/talisay.png" alt="Logo" class="talisay">
        <div class="inner-filbox">
            <h1>TALISAY CITY</h1>
        <p><i>Boarding House Inquiry System</i></p>
        </div>
        </div>
        <div class="second-inner-lbox">
            <h2>Find your</h2>
            <h3>perfect stay.</h3>
            <p><i>Your home away from home starts here.</i></p>
            <p id="lmao"><i>Sponsored by Julian's Canton.</i></p>
        </div>
    </div>
        </div>

    <div class="right-container">
        <div class="right-image-box">
            <img src="assets/locate.png" alt="locate" class="locate">
            <p class="header-p">Create An Account</p>
            <p class="header2">Find your home or manage your boarding house.</p>
        </div>

<form action="process_signup.php" method="POST">

    <!-- ACCOUNT TYPE -->
    <p>I am a...</p>

    <div class="selection-box-center">
        <div class="selection-cards">

            <label class="select-card-left">
                <input type="radio"
                       name="account_type"
                       value="boarder"
                       class="hidden-radio"
                       checked>

                <div class="card-content">
                    <p><b>Boarder</b></p>
                </div>
            </label>

            <label class="select-card-right">
                <input type="radio"
                       name="account_type"
                       value="landlord"
                       class="hidden-radio">

                <div class="card-content">
                    <p><b>Landlady/Landlord</b></p>
                </div>
            </label>

        </div>
    </div>

    <!-- COMMON INFORMATION -->
    <div class="inner-form-box">

        <label class="form-labels">Full Name</label>
        <input type="text" name="full_name"
               placeholder="Enter Your Full Name"
               class="input-fields" required>

        <label class="form-labels">Birthdate</label>
        <input type="date" name="birthdate"
               class="input-fields" required>

        <label class="form-labels">Contact Number</label>
        <input type="tel" name="contact_number"
               placeholder="Enter Contact Number"
               class="input-fields" required>

        <label class="form-labels">Email Address</label>
        <input type="email" name="email"
               placeholder="Enter your Email Address"
               class="input-fields" required>

        <label class="form-labels">Password</label>
        <input type="password" name="password"
               placeholder="Create Password"
               class="input-fields" required>

        <label class="form-labels">Confirm Password</label>
        <input type="password" name="confirm_password"
               placeholder="Re-enter Your Password"
               class="input-fields" required>

    </div>

    <!-- LANDLORD-ONLY INFORMATION -->
    <div class="landlord-fields" id="landlordFields" hidden>

        <hr>

        <h3>Property Registration Information</h3>

        <label class="form-labels">Mayor's Permit Number</label>
        <input type="text" name="mayor_permit"
               class="input-fields">

        <label class="form-labels">Business Permit Number</label>
        <input type="text" name="business_permit"
               class="input-fields">

        <label class="form-labels">Location of Property</label>
        <input type="text" name="property_location"
               class="input-fields">

    </div>

    <div class="terms-of-service">
        <p>
            By creating an account, you agree to our
            <br>
            <a href="terms_of_service.html">Terms of Service</a>
            and
            <a href="privacy_policy.html">Privacy Policy</a>
        </p>
    </div>

    <div class="button-center">
        <input type="submit" value="Create Account">
    </div>

</form>



        <div class="third-box">
            Already have an account?
            <a href="index.php"> Login.</a>
        </div>
    </div>
</body>
</html>