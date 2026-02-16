// ========================
// BUSINESS LOGIC
// ========================

function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.id = Place.assignId();
}

Place.currentId = 0;

Place.assignId = function () {
  Place.currentId += 1;
  return Place.currentId;
};

Place.prototype.getSummary = function () {
  return `${this.location} (${this.timeOfYear})`;
};

Place.prototype.getDetails = function () {
  return `
Location: ${this.location}
Time of Year: ${this.timeOfYear}
Landmarks: ${this.landmarks.join(", ")}
Notes: ${this.notes}
  `;
};

Place.prototype.addLandmark = function (landmark) {
  this.landmarks.push(landmark);
};

// Storage Object

function PlaceBook() {
  this.places = {};
}

PlaceBook.prototype.addPlace = function (place) {
  this.places[place.id] = place;
};

PlaceBook.prototype.findPlace = function (id) {
  return this.places[id] || false;
};

PlaceBook.prototype.deletePlace = function (id) {
  if (this.places[id] !== undefined) {
    delete this.places[id];
    return true;
  }
  return false;
};

// ========================
// UI LOGIC
// ========================

const book = new PlaceBook();

function displayPlaces() {
  const list = document.getElementById("placesList");
  list.innerHTML = "";

  Object.values(book.places).forEach(place => {
    const li = document.createElement("li");
    li.textContent = place.getSummary();

    li.addEventListener("click", function () {
      document.getElementById("placeDetails").innerText = place.getDetails();
    });

    list.appendChild(li);
  });
}

document.getElementById("placeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const location = document.getElementById("location").value;
  const landmarks = document.getElementById("landmarks").value
                      .split(",")
                      .map(l => l.trim())
                      .filter(l => l !== "");
  const timeOfYear = document.getElementById("timeOfYear").value;
  const notes = document.getElementById("notes").value;

  const newPlace = new Place(location, landmarks, timeOfYear, notes);

  book.addPlace(newPlace);

  displayPlaces();
  this.reset();
});
