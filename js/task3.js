
const shoes = [
  {
    shoeName: "Shoe 1",
    shoePrice: 2350,
    starRating: 5.0,
    deliveryTime: new Date("14 Jan 2022"),
    shoeImg: "shoe-4.png",
  },
  {
    shoeName: "shoe 2",
    shoePrice: 1550,
    starRating: 4.0,
    deliveryTime: new Date("15 Jan 2022"),
    shoeImg: "shoe-5.png",
  },
  {
    shoeName: "shoe 3",
    shoePrice: 1550,
    starRating: 3.0,
    deliveryTime: new Date("25 Jan 2022"),
    shoeImg: "shoe-6.png",
  },
  {
    shoeName: "shoe 4",
    shoePrice: 3550,
    starRating: 5.0,
    deliveryTime: new Date("10 Jan 2022"),
    shoeImg: "shoe-6.png",
  },
  {
    shoeName: "shoe 5",
    shoePrice: 1300,
    starRating: 2.0,
    deliveryTime: new Date("24 Jan 2022"),
    shoeImg: "shoe-5.png",
  },
  {
    shoeName: "shoe 6",
    shoePrice: 3050,
    starRating: 5.0,
    deliveryTime: new Date("20 Jan 2022"),
    shoeImg: "shoe-4.png",
  },
  {
    shoeName: "shoe 7",
    shoePrice: 1590,
    starRating: 1.0,
    deliveryTime: new Date("20 Jan 2022"),
    shoeImg: "shoe-5.png",
  },
  {
    shoeName: "shoe 8",
    shoePrice: 1300,
    starRating: 3.0,
    deliveryTime: new Date("11 Jan 2022"),
    shoeImg: "shoe-6.png",
  },
  {
    shoeName: "shoe 9",
    shoePrice: 1000,
    starRating: 2.0,
    deliveryTime: new Date("18 Jan 2022"),
    shoeImg: "shoe-4.png",
  },
];

const cardGenerator = (element) => {
  return `
  <div class="card m-3 mx-4" style="width: 16rem;">
  <img src="pics/${
    element.shoeImg
  }" class="card-img-top" alt="shoe image" height="250px">
  
  <div class="card-body">

      <div class="d-flex justify-content-between align-items-center">           
          <h5 class="card-title fw-bolder">${element.shoeName}</h5>
          <span id="star" class="d-flex justify-content-center align-items-center rounded p-1 px-2">
              <img src="pics/star1.png" alt="star image" class="mx-1" height="17"> <span id="star-rating" class="fw-bold">${
                element.starRating
              }</span>
          </span>
      </div>
    
      <h4 class="fs-1 fw-bold">&#8377;${element.shoePrice}</h4>
    <p class="card-text">Delivery by: ${element.deliveryTime.toDateString()}</p>
  </div>

</div>`;
};
const currentDate = new Date();
const root = document.getElementById("root");
const alpha = document.getElementById("alphabet");
const price = document.getElementById("price");
const ranks = document.getElementsByClassName("drop1");



Array.from(ranks).forEach((element) => {
  element.addEventListener("click", (e) => {
    root.innerHTML = "";
    let i = 0;
    const targetRank = parseInt(e.target.innerHTML.split("")[0]);

    shoes.forEach((element) => {
      if (parseInt(element.starRating) == targetRank) {
        root.innerHTML += cardGenerator(element);
        i += 1;
      }
    });

    cardCount.innerHTML = i;
  });
});


shoes.forEach((element) => {
  root.innerHTML += cardGenerator(element);
});
const cardCount = document.getElementById("totalCount");

price.addEventListener("click", () => {
  console.log("click on price");
  root.innerHTML = "";
  const priceSort = (first, second) => {
    if (parseInt(first.shoePrice) > parseInt(second.shoePrice)) {
      return -1;
    } else if (parseInt(first.shoePrice) < parseInt(second.shoePrice)) {
      return 1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  shoes.sort(priceSort).forEach((element) => {
    root.innerHTML += cardGenerator(element);
  });
});
const delivery = document.getElementById("delivery");
delivery.addEventListener("click", () => {
  root.innerHTML = "";

  const deliveryTimeSort = (first, second) => {
    if (first.deliveryTime - currentDate > second.deliveryTime - currentDate) {
      return 1;
    } else if (
      first.deliveryTime - currentDate <
      second.deliveryTime - currentDate
    ) {
      return -1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  shoes.sort(deliveryTimeSort).forEach((element) => {
    root.innerHTML += cardGenerator(element);
  });
});
