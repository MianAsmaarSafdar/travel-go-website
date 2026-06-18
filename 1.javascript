document.addEventListener("DOMContentLoaded", function () {

    AOS.init({ duration: 1000, once: true });

    // Logic to Link Quick Links with Nav Bar Options
    document.querySelectorAll('.q-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all nav links
            document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
            
            // Get the ID of the navbar link we want to activate
            const navId = this.getAttribute('data-nav');
            const targetNav = document.getElementById(navId);
            
            if (targetNav) {
                targetNav.classList.add('active');
            }
        });
    });

    // Optional: Change active nav on scroll
    window.addEventListener('scroll', () => {
        let current = "";
        const sections = document.querySelectorAll('section, body, footer');
        // Logic to detect which section is in view...
    });

    // Select ALL explore buttons
    const exploreButtons = document.querySelectorAll(".explore-btn");

    exploreButtons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            let card = btn.closest(".country-card");
            let countryName = card.querySelector("h3").innerText.toLowerCase();

            let title = "";
            let content = "";

            // JAPAN
            if (countryName.includes("japan")) {
                title = "Japan Tour Package 🇯🇵";

                content = `
                <p><b>Duration:</b> 7 Days / 6 Nights</p>
                <p><b>Cities:</b> Tokyo, Kyoto, Osaka</p>

                <h4>Facilities:</h4>
                <ul>
                    <li>4-Star Hotel Stay</li>
                    <li>Bullet Train Experience 🚄</li>
                    <li>Daily Breakfast & Dinner</li>
                    <li>City Tour Guide</li>
                    <li>Airport Pickup & Drop</li>
                </ul>

                <h4>Price:</h4>
                <p>Other Agencies: <b>$2000</b></p>
                <p style="color:red;">Discount: 30% OFF</p>
                <h3 style="color:green;">Our Price: $1400</h3>
                `;
            }

            // ITALY
            else if (countryName.includes("italy")) {
                title = "Italy Tour Package 🇮🇹";

                content = `
                <p><b>Duration:</b> 6 Days / 5 Nights</p>
                <p><b>Cities:</b> Rome, Venice, Florence</p>

                <h4>Facilities:</h4>
                <ul>
                    <li>Luxury Hotel Stay</li>
                    <li>Colosseum & Vatican Tour</li>
                    <li>Breakfast Included</li>
                    <li>Private Transport</li>
                    <li>Professional Guide</li>
                </ul>

                <h4>Price:</h4>
                <p>Other Agencies: <b>$1800</b></p>
                <p style="color:red;">Discount: 25% OFF</p>
                <h3 style="color:green;">Our Price: $1350</h3>
                `;
            }

            // THAILAND
            else if (countryName.includes("thailand")) {
                title = "Thailand Tour Package 🇹🇭";

                content = `
                <p><b>Duration:</b> 5 Days / 4 Nights</p>
                <p><b>Cities:</b> Bangkok, Phuket, Chiang Mai</p>

                <h4>Facilities:</h4>
                <ul>
                    <li>Beach Resort Stay 🏝️</li>
                    <li>Island Hopping Tour</li>
                    <li>Breakfast + Dinner</li>
                    <li>Airport Transfer</li>
                    <li>Night Market Visit</li>
                </ul>

                <h4>Price:</h4>
                <p>Other Agencies: <b>$1200</b></p>
                <p style="color:red;">Discount: 20% OFF</p>
                <h3 style="color:green;">Our Price: $960</h3>
                `;
            }

            showModal(title, content);
        });
    });

});


// Create Modal (popup)
function showModal(title, content) {

    // Remove old modal
    let old = document.getElementById("travelModal");
    if (old) old.remove();

    let modal = document.createElement("div");

    modal.id = "travelModal";

    modal.innerHTML = `
    <div style="
        position:fixed;
        top:0; left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.7);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:9999;
    ">
        <div style="
            background:white;
            width:90%;
            max-width:600px;
            border-radius:15px;
            padding:25px;
            max-height:80vh;
            overflow-y:auto;
            animation:fadeIn 0.3s ease;
        ">
            <h2 style="margin-bottom:15px;">${title}</h2>
            ${content}

            <button onclick="closeModal()" style="
                margin-top:20px;
                padding:10px 20px;
                background:#0d6efd;
                color:white;
                border:none;
                border-radius:8px;
                cursor:pointer;
            ">Close</button>
        </div>
    </div>
    `;

    document.body.appendChild(modal);
}


// Close Modal
function closeModal() {
    let modal = document.getElementById("travelModal");
    if (modal) modal.remove();
}

// ===== BOOKING SYSTEM (NEW - ADD BELOW OLD CODE) =====

document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll(".destination-btn");

    bookButtons.forEach(btn => {
        btn.addEventListener("click", function () {

            let title = btn.innerText;

            showBookingForm(title);
        });
    });

});

function showBookingForm(title) {

    removeBookingModal();

    let modal = document.createElement("div");

    modal.id = "bookingModal";

    modal.innerHTML = `
    <div style="
        position:fixed;
        top:0; left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.7);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:9999;
    ">
        <div style="
            background:white;
            width:90%;
            max-width:500px;
            border-radius:15px;
            padding:25px;
        ">
            <h2>${title}</h2>

            <input type="text" id="name" placeholder="Your Name" style="width:100%; padding:10px; margin:10px 0;">
            <input type="email" id="email" placeholder="Your Email" style="width:100%; padding:10px; margin:10px 0;">
            <input type="number" id="persons" placeholder="Persons" style="width:100%; padding:10px; margin:10px 0;">

            <button onclick="confirmBooking()" style="
                width:100%;
                padding:12px;
                background:#0d6efd;
                color:white;
                border:none;
                border-radius:8px;
            ">Confirm Booking</button>

            <button onclick="closeBooking()" style="
                width:100%;
                margin-top:10px;
                padding:10px;
                background:gray;
                color:white;
                border:none;
                border-radius:8px;
            ">Cancel</button>
        </div>
    </div>
    `;

    document.body.appendChild(modal);
}


// CONFIRM BOOKING
function confirmBooking() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let persons = document.getElementById("persons").value;

    if (!name || !email || !persons) {
        alert("Fill all fields!");
        return;
    }

    removeBookingModal();

    let success = document.createElement("div");

    success.innerHTML = `
    <div style="
        position:fixed;
        top:0; left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.7);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:9999;
    ">
        <div style="
            background:white;
            padding:30px;
            border-radius:15px;
            text-align:center;
        ">
            <h2 style="color:green;">✅ Booking Confirmed</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Persons:</b> ${persons}</p>

            <button onclick="closeBooking()" style="
                margin-top:15px;
                padding:10px 20px;
                background:#0d6efd;
                color:white;
                border:none;
                border-radius:8px;
            ">Close</button>
        </div>
    </div>
    `;

    document.body.appendChild(success);
}


// CLOSE
function closeBooking() {
    removeBookingModal();
}


// REMOVE MODAL
function removeBookingModal() {
    let modal = document.getElementById("bookingModal");
    if (modal) modal.remove();

    document.querySelectorAll("body > div").forEach(div => {
        if (div.innerHTML.includes("Booking Confirmed")) {
            div.remove();
        }
    });
}