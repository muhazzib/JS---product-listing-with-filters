const shoes = [
  {
    id: 1,
    brand: "Nike",
    name: "Air Max Plus",
    category: "Sneakers",
    price: 190.0,
    inStock: true,
    color: "black",
    imageUrl:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e12155a5-466a-4d3a-ac6c-4e3e03aeea4b/NIKE+V5+RNR+RIPSTOP.png",
    productUrl: "https://www.nike.com/t/air-max-plus-mens-shoes-x9G2xF",
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Campus 00s Sneakers",
    category: "Casual",
    price: 110.0,
    inStock: true,
    color: "black",
    imageUrl:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e12155a5-466a-4d3a-ac6c-4e3e03aeea4b/NIKE+V5+RNR+RIPSTOP.png",
    productUrl: "https://www.adidas.com/us/campus-00s-shoes/HQ8708.html",
  },
  {
    id: 3,
    brand: "Vans",
    name: "Old Skool Shoe",
    category: "Skate",
    price: 75.0,
    inStock: true,
    color: "red",
    imageUrl:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e12155a5-466a-4d3a-ac6c-4e3e03aeea4b/NIKE+V5+RNR+RIPSTOP.png",
    productUrl:
      "https://www.vans.com/en-us/p/shoes/icons/old-skool-5205/old-skool-canvas-shoe-VN000D3HBKA",
  },
  {
    id: 4,
    brand: "New Balance",
    name: "574 Core",
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    color: "blue",
    imageUrl:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e12155a5-466a-4d3a-ac6c-4e3e03aeea4b/NIKE+V5+RNR+RIPSTOP.png",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
];

const showRow = document.getElementById("show-rows");

const renderShoes = (shoesToShow) => {
  showRow.innerHTML = "";

  shoesToShow.forEach((shoe) => {
    const shoeHTML = `<div class="col-md-3 col-12">
                    <div class="card" style="width: 18rem;">
                        <img src=${shoe.imageUrl}
                            class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${shoe.name}</h5>
                            <p class="card-text">${shoe.brand}</p>
                            <p class="card-text">$${shoe.price}</p>
                            <p class="card-text" style='color:${shoe.color}'>Color: ${shoe.color}</p>
                        </div>
                    </div>
                </div>`;
    showRow.innerHTML += shoeHTML;
  });
};

const filter = {
  brand: "",
  color: "",
};

const filterShoes = (event) => {
  filter[event.target.name] = event.target.value;
  console.log(filter.color)
  const filteredShoes = shoes.filter((shoe) => {
    const brand = filter.brand === "" || shoe.brand === filter.brand;
    const color = filter.color === ""  || shoe.color === filter.color;

    return brand && color;
  });

  renderShoes(filteredShoes);
};

renderShoes(shoes);
