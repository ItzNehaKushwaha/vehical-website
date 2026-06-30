// =============================================
//   VOYANEX — script.js
// =============================================

// -----------------------------------------------
// DATA — Services, Vehicles, Routes, Reviews
// -----------------------------------------------
const SERVICES = [
  { name: "Cab Booking",         slug: "cab",       desc: "Book comfortable cabs for local and outstation travel.",            icon: "🚕", count: 45 },
  { name: "Bus Booking",         slug: "bus",       desc: "Spacious buses for group travel and corporate trips.",              icon: "🚌", count: 28 },
  { name: "Wedding Vehicles",    slug: "wedding",   desc: "Luxury and decorated vehicles for your special day.",              icon: "💍", count: 15 },
  { name: "Corporate Transport", slug: "corporate", desc: "Professional transport solutions for businesses.",                 icon: "💼", count: 22 },
  { name: "Airport Transfer",    slug: "airport",   desc: "Reliable airport transfers with flight tracking.",                 icon: "✈️", count: 30 },
  { name: "School & College",    slug: "school",    desc: "Safe and supervised transport for educational trips.",             icon: "🎓", count: 18 },
  { name: "Religious Tours",     slug: "religious", desc: "Comfortable coaches for pilgrimages and spiritual journeys.",      icon: "🛕", count: 12 },
  { name: "Group Tours",         slug: "group",     desc: "Curated group travel packages across India.",                     icon: "👥", count: 20 },
  { name: "Outstation Booking",  slug: "outstation",desc: "One-way and round-trip outstation cab booking.",                  icon: "🗺️", count: 40 },
  { name: "Hourly Rental",       slug: "hourly",    desc: "Hire a cab by the hour for your convenience.",                    icon: "⏰", count: 35 },
  { name: "Driver Hiring",       slug: "driver",    desc: "Hire a professional driver for your own vehicle.",                icon: "👤", count: 60 },
];

const VEHICLES = [
  { id: 1, name: "Swift Dzire",            category: "sedan",         service: "cab",       seats: 4,  bags: 2,  ac: true,  fuel: "CNG",     price: 299,  km: 12, rating: 4.7, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600" },
  { id: 2, name: "Toyota Innova Crysta",   category: "suv",           service: "cab",       seats: 7,  bags: 4,  ac: true,  fuel: "Diesel",  price: 499,  km: 18, rating: 4.8, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600" },
  { id: 3, name: "Maruti Ertiga",          category: "suv",           service: "cab",       seats: 6,  bags: 3,  ac: true,  fuel: "CNG",     price: 399,  km: 15, rating: 4.6, img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600" },
  { id: 4, name: "Mercedes E-Class",       category: "luxury sedan",  service: "corporate", seats: 4,  bags: 3,  ac: true,  fuel: "Petrol",  price: 1499, km: 45, rating: 4.9, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600" },
  { id: 5, name: "Toyota Camry",           category: "luxury sedan",  service: "corporate", seats: 4,  bags: 2,  ac: true,  fuel: "Hybrid",  price: 999,  km: 35, rating: 4.8, img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600" },
  { id: 6, name: "Honda City",             category: "sedan",         service: "airport",   seats: 4,  bags: 2,  ac: true,  fuel: "Petrol",  price: 349,  km: 13, rating: 4.6, img: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600" },
  { id: 7, name: "Maruti Alto/WagonR",     category: "hatchback",     service: "hourly",    seats: 4,  bags: 1,  ac: true,  fuel: "CNG",     price: 199,  km:  9, rating: 4.4, img: "https://images.unsplash.com/photo-1617470702892-6f65b020f267?w=600" },
  { id: 8, name: "BMW 5 Series",           category: "luxury sedan",  service: "wedding",   seats: 4,  bags: 2,  ac: true,  fuel: "Petrol",  price: 1999, km: 55, rating: 5.0, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600" },
  { id: 9, name: "Tempo Traveller 12-Seat",category: "tempo traveller",service: "group",    seats: 12, bags: 8,  ac: true,  fuel: "Diesel",  price: 799,  km: 22, rating: 4.5, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600" },
  { id:10, name: "Volvo Bus 45-Seater",    category: "volvo bus",     service: "religious", seats: 45, bags: 30, ac: true,  fuel: "Diesel",  price: 2499, km: 45, rating: 4.7, img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600" },
  { id:11, name: "Vintage Rolls Royce",    category: "vintage car",   service: "wedding",   seats: 4,  bags: 1,  ac: false, fuel: "Petrol",  price: 4999, km: 80, rating: 5.0, img: "https://images.unsplash.com/photo-1469037784699-75dcff7798c1?w=600" },
];

const ROUTES = [
  { from: "Mumbai",    to: "Pune",        dist: 148, time: "2h 30m", price: 1299, img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600" },
  { from: "Delhi",     to: "Agra",        dist: 233, time: "3h 30m", price: 1799, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600" },
  { from: "Bangalore", to: "Mysore",      dist: 145, time: "2h 45m", price: 1199, img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f11?w=600" },
  { from: "Chennai",   to: "Pondicherry", dist: 150, time: "2h 30m", price: 1299, img: "https://images.unsplash.com/photo-1590123715937-df34eb76efbc?w=600" },
  { from: "Mumbai",    to: "Goa",         dist: 585, time: "9h 00m", price: 3999, img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600" },
  { from: "Delhi",     to: "Jaipur",      dist: 280, time: "4h 00m", price: 1999, img: "https://images.unsplash.com/photo-1477587458883-47145ed31572?w=600" },
];

const REVIEWS = [
  { name: "Rahul Sharma",   initial: "RS", service: "airport",   rating: 5, text: "Excellent service! The driver was very professional and the car was spotless. Reached airport on time despite traffic. Highly recommend Voyanex!" },
  { name: "Priya Patel",    initial: "PP", service: "outstation", rating: 5, text: "Booked Innova Crysta for a family trip to Jaipur. Comfortable ride, driver knew all the routes well. Will definitely book again." },
  { name: "Amit Verma",     initial: "AV", service: "corporate",  rating: 4, text: "Great corporate transport solution. Punctual, professional drivers. The booking process is seamless and the app is very user-friendly." },
  { name: "Sneha Reddy",    initial: "SR", service: "wedding",    rating: 5, text: "Used Voyanex for our wedding and it was absolutely perfect. The vintage car was beautifully decorated. Made our special day even more memorable!" },
  { name: "Karan Mehta",    initial: "KM", service: "cab",        rating: 5, text: "Best cab service in the city! Clean cars, polite drivers, and the fare calculator is very transparent. No hidden charges at all." },
  { name: "Anjali Singh",   initial: "AS", service: "school",     rating: 4, text: "Arranged school trip transportation for 50 kids. Very safe and reliable. The drivers were patient and the buses were well-maintained." },
];

// -----------------------------------------------
// SELECTED STATE
// -----------------------------------------------
let selectedVehicleId = null;

// -----------------------------------------------
// RENDER SERVICES
// -----------------------------------------------
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = SERVICES.slice(0, 8).map(s => `
    <div class="service-card fade-up">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <span class="vehicle-count">${s.count} Vehicles</span>
    </div>
  `).join("");
  observeFadeUp();
}

// -----------------------------------------------
// RENDER VEHICLES (homepage — show 6)
// -----------------------------------------------
function renderVehicles() {
  const grid = document.getElementById("vehiclesGrid");
  if (!grid) return;
  grid.innerHTML = VEHICLES.slice(0, 6).map(v => buildVehicleCard(v)).join("");
  observeFadeUp();
}

function buildVehicleCard(v) {
  const stars = buildStars(v.rating);
  return `
    <div class="vehicle-card fade-up">
      <div class="vehicle-img">
        <img src="${v.img}" alt="${v.name}" loading="lazy" />
        <div class="vehicle-badges">
          <span class="tag">${v.category}</span>
          <span class="tag blue-tag">${v.service}</span>
        </div>
      </div>
      <div class="vehicle-body">
        <div class="vehicle-name-row">
          <span class="vehicle-name">${v.name}</span>
          <span class="star-badge"><span class="star">★</span> ${v.rating}</span>
        </div>
        <div class="vehicle-specs">
          <div class="spec-item"><span class="spec-icon">👥</span> ${v.seats} Seats</div>
          <div class="spec-item"><span class="spec-icon">💼</span> ${v.bags} Bags</div>
          <div class="spec-item"><span class="spec-icon">❄️</span> ${v.ac ? "A/C" : "Non-A/C"}</div>
          <div class="spec-item"><span class="spec-icon">⛽</span> ${v.fuel}</div>
        </div>
      </div>
      <div class="vehicle-footer">
        <div>
          <div class="price-label">Starting from</div>
          <div class="price-value">₹${v.price}<span style="font-size:0.75rem;font-weight:400;color:#64748b">/base</span></div>
        </div>
        <button class="btn btn-blue" onclick="scrollToBook(${v.id})">Book</button>
      </div>
    </div>
  `;
}

function buildStars(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= Math.round(rating) ? "star-filled" : "star-empty"}">★</span>`;
  }
  return html;
}

// -----------------------------------------------
// RENDER ROUTES
// -----------------------------------------------
function renderRoutes() {
  const grid = document.getElementById("routesGrid");
  if (!grid) return;
  grid.innerHTML = ROUTES.map(r => `
    <div class="route-card fade-up">
      <div class="route-img">
        <img src="${r.img}" alt="${r.from} to ${r.to}" loading="lazy" />
        <div class="route-overlay">
          <div class="route-cities">
            <span>${r.from}</span>
            <span style="opacity:.7">⇄</span>
            <span>${r.to}</span>
          </div>
        </div>
      </div>
      <div class="route-body">
        <div class="route-meta">
          <span>🧭 ${r.dist} km</span>
          <span>⏱ ${r.time}</span>
        </div>
        <div class="route-footer">
          <div>
            <div style="font-size:.75rem;color:#64748b;font-weight:600;">Starting from</div>
            <div style="font-size:1.5rem;font-weight:800;color:#1E3A8A;">₹${r.price.toLocaleString()}</div>
          </div>
          <button class="btn btn-blue" onclick="prefillRoute('${r.from}','${r.to}')">Book Route</button>
        </div>
      </div>
    </div>
  `).join("");
  observeFadeUp();
}

// -----------------------------------------------
// RENDER REVIEWS
// -----------------------------------------------
function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;
  grid.innerHTML = REVIEWS.map(r => `
    <div class="review-card fade-up">
      <div class="quote-icon">&#10077;</div>
      <div class="stars">${buildStars(r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="reviewer">
        <div class="avatar">${r.initial}</div>
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="reviewer-meta">${r.service} &bull; Verified Customer</div>
        </div>
      </div>
    </div>
  `).join("");
  observeFadeUp();
}

// -----------------------------------------------
// RENDER VEHICLE SELECTION IN BOOKING STEP 2
// -----------------------------------------------
function renderVehicleSelection() {
  const grid = document.getElementById("vehicleSelectGrid");
  if (!grid) return;
  grid.innerHTML = VEHICLES.map(v => `
    <div class="v-select-card ${selectedVehicleId === v.id ? "selected" : ""}"
         id="vcard-${v.id}"
         onclick="selectVehicle(${v.id})">
      <img src="${v.img}" alt="${v.name}" loading="lazy" />
      <div class="v-select-name">${v.name}</div>
      <div class="v-select-cat">${v.category}</div>
      <div class="v-select-row">
        <span>👥 ${v.seats} seats</span>
        <span class="v-select-price">₹${v.price} base</span>
      </div>
    </div>
  `).join("");
}

function selectVehicle(id) {
  selectedVehicleId = id;
  document.querySelectorAll(".v-select-card").forEach(el => el.classList.remove("selected"));
  const card = document.getElementById("vcard-" + id);
  if (card) card.classList.add("selected");
}

// -----------------------------------------------
// BOOKING MULTI-STEP LOGIC
// -----------------------------------------------
let currentStep = 1;

function goToStep(n) {
  if (n === 2 && !validateStep1()) return;
  if (n === 3 && !validateStep2()) return;

  // Hide all step contents
  ["step1", "step2", "step3", "stepSuccess"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  // Show target step
  const target = document.getElementById("step" + n);
  if (target) target.classList.remove("hidden");

  // Update step indicators
  for (let i = 1; i <= 3; i++) {
    const ind = document.getElementById("step" + i + "-indicator");
    if (!ind) continue;
    ind.classList.remove("active", "done");
    if (i < n) ind.classList.add("done");
    else if (i === n) ind.classList.add("active");
  }

  // Update step lines
  const lines = document.querySelectorAll(".step-line");
  lines.forEach((line, idx) => {
    line.classList.toggle("done", idx + 1 < n);
  });

  currentStep = n;

  // Populate step 2 vehicles
  if (n === 2) renderVehicleSelection();

  // Populate step 3 fare summary
  if (n === 3) renderFareSummary();

  // Scroll to booking section
  document.getElementById("book").scrollIntoView({ behavior: "smooth" });
}

function validateStep1() {
  const pickup = document.getElementById("pickup").value.trim();
  const drop   = document.getElementById("drop").value.trim();
  const date   = document.getElementById("date").value;
  const time   = document.getElementById("time").value;

  if (!pickup || !drop || !date || !time) {
    alert("Please fill in all trip details: Pickup, Drop, Date and Time.");
    return false;
  }
  return true;
}

function validateStep2() {
  if (!selectedVehicleId) {
    alert("Please select a vehicle to continue.");
    return false;
  }
  return true;
}

function renderFareSummary() {
  const summary = document.getElementById("fareSummary");
  if (!summary) return;

  const vehicle = VEHICLES.find(v => v.id === selectedVehicleId);
  if (!vehicle) return;

  const pickup     = document.getElementById("pickup").value;
  const drop       = document.getElementById("drop").value;
  const dateVal    = document.getElementById("date").value;
  const timeVal    = document.getElementById("time").value;
  const passengers = document.getElementById("passengers").value;

  const distKm       = Math.floor(Math.random() * 80) + 20;  // mock distance
  const basePrice    = vehicle.price;
  const distCharge   = distKm * vehicle.km;
  const toll         = distKm > 60 ? 200 : 0;
  const total        = basePrice + distCharge + toll;

  summary.innerHTML = `
    <div style="margin-bottom:1rem;">
      <div style="font-weight:700;font-size:1rem;margin-bottom:.5rem;border-bottom:1px solid var(--border);padding-bottom:.5rem;">Trip Summary</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem;font-size:.88rem;margin-bottom:1rem;">
        <div><span style="color:var(--muted);display:block;">From</span><strong>${pickup}</strong></div>
        <div><span style="color:var(--muted);display:block;">To</span><strong>${drop}</strong></div>
        <div><span style="color:var(--muted);display:block;">Date &amp; Time</span><strong>${dateVal} at ${timeVal}</strong></div>
        <div><span style="color:var(--muted);display:block;">Passengers</span><strong>${passengers}</strong></div>
        <div><span style="color:var(--muted);display:block;">Vehicle</span><strong>${vehicle.name}</strong></div>
        <div><span style="color:var(--muted);display:block;">Distance (est.)</span><strong>${distKm} km</strong></div>
      </div>
      <div style="font-weight:700;font-size:1rem;margin-bottom:.5rem;border-bottom:1px solid var(--border);padding-bottom:.5rem;">Fare Breakdown</div>
    </div>
    <div class="fare-row"><span>Base Price</span><span>₹${basePrice.toLocaleString()}</span></div>
    <div class="fare-row"><span>Distance Charge (${distKm} km × ₹${vehicle.km})</span><span>₹${distCharge.toLocaleString()}</span></div>
    <div class="fare-row"><span>Toll &amp; Taxes</span><span>₹${toll}</span></div>
    <div class="fare-row total"><span>Total Amount</span><span class="price">₹${total.toLocaleString()}</span></div>
  `;
}

function confirmBooking() {
  const name  = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const email = document.getElementById("custEmail").value.trim();

  if (!name || !phone || !email) {
    alert("Please fill in your name, phone number and email address.");
    return;
  }

  // Hide step 3, show success
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("stepSuccess").classList.remove("hidden");

  // Update step indicators to all done
  for (let i = 1; i <= 3; i++) {
    const ind = document.getElementById("step" + i + "-indicator");
    if (ind) { ind.classList.remove("active"); ind.classList.add("done"); }
  }

  // Generate booking reference
  const ref = "VNX" + Math.random().toString(36).substring(2, 9).toUpperCase();
  document.getElementById("bookingRef").textContent = ref;
}

function resetForm() {
  selectedVehicleId = null;
  document.getElementById("pickup").value       = "";
  document.getElementById("drop").value         = "";
  document.getElementById("date").value         = "";
  document.getElementById("time").value         = "";
  document.getElementById("custName").value     = "";
  document.getElementById("custPhone").value    = "";
  document.getElementById("custEmail").value    = "";
  document.getElementById("serviceType").value  = "";
  document.getElementById("passengers").value   = "1";

  document.getElementById("stepSuccess").classList.add("hidden");
  document.getElementById("step1").classList.remove("hidden");

  for (let i = 1; i <= 3; i++) {
    const ind = document.getElementById("step" + i + "-indicator");
    if (ind) {
      ind.classList.remove("active", "done");
      if (i === 1) ind.classList.add("active");
    }
  }
  document.querySelectorAll(".step-line").forEach(l => l.classList.remove("done"));
  currentStep = 1;
}

// -----------------------------------------------
// PREFILL ROUTE INTO BOOKING FORM
// -----------------------------------------------
function prefillRoute(from, to) {
  document.getElementById("pickup").value = from;
  document.getElementById("drop").value   = to;
  document.getElementById("book").scrollIntoView({ behavior: "smooth" });
}

// -----------------------------------------------
// SCROLL TO BOOK WITH VEHICLE PRE-SELECT
// -----------------------------------------------
function scrollToBook(vehicleId) {
  selectedVehicleId = vehicleId;
  document.getElementById("book").scrollIntoView({ behavior: "smooth" });
}

// -----------------------------------------------
// STATS COUNTER ANIMATION
// -----------------------------------------------
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    let current  = 0;
    const step   = Math.ceil(target / 60);
    const timer  = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        counter.textContent = current.toLocaleString();
      }
    }, 25);
  });
}

// -----------------------------------------------
// NAVBAR: SCROLL CLASS + MOBILE MENU
// -----------------------------------------------
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function toggleMenu() {
  const links = document.getElementById("navLinks");
  links.classList.toggle("open");
}

// Close mobile menu when a link is clicked
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("open");
    });
  });
});

// -----------------------------------------------
// INTERSECTION OBSERVER — fade-up animations
// -----------------------------------------------
function observeFadeUp() {
  const items = document.querySelectorAll(".fade-up:not(.observed)");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => {
    el.classList.add("observed");
    observer.observe(el);
  });
}

// Stats section observer (trigger counter animation once)
function observeStats() {
  const statsSection = document.querySelector(".stats-section");
  if (!statsSection) return;
  let triggered = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(statsSection);
}

// -----------------------------------------------
// INIT — Run when DOM is ready
// -----------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderVehicles();
  renderRoutes();
  renderReviews();
  observeStats();
});
