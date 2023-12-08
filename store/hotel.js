document.addEventListener("alpine:init", () => {
  Alpine.store("hotel", {
    name: "Heritance Kandalama",
    cover: "https://www.heritancehotels.com/kandalama/wp-content/uploads/sites/18/2022/05/Header-1.jpg",
    location: "Dambulla",
    description: "Heritance Kandalama is an architectural masterpiece by Geoffrey Bawa, built overlooking the eighth wonder of the world - the rock fortress of Sigiriya. The hotel sits at the heart of the cultural triangle of Sri Lanka, close to five UNESCO World Heritage Sites.",
    rating: 5,
    facilities: [
        "Spa", 
        "Gym", 
        "Pool", 
        "Free Wifi", 
        "Free Parking", 
        "Restaurant",
        "Bar",
        "Airport Shuttle",
        "Family Rooms"        
    ],
  });
});