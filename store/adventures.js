document.addEventListener("alpine:init", () => {
  Alpine.store("adventures", {
    name: "Scuba Diving",

    adventure_adults_local: 5000,

    adventure_children_local: 2000,

    adventure_adults_foreign: 10000,
    
    adventure_children_foreign: 5000,

    guide: [
      {
        type: "Adult",
        price: 1000,
      },
      {
        type: "Child",
        price: 500,
      },
    ],
  });
});