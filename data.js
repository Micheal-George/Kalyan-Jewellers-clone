var shopData = [
  { 
    image_url:
      "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c012928_1_3.jpg?v=1646647233",
    name: "EDELWEISS MIRACLE PLATE DIAMOND RING",
    price: "28603",
    metal:"18K Yellow Gold 2.96 Grams",
    stone:"7 Diamond (0.07 Ct VVS EF)",
    offprice: "22250",
    category: "Rings",
  },
  
 
  {
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c004016_1_1.jpg?v=1646647185",
      name: "DEEPALI DIAMOND ENGAGEMENT RING",
      price: "31436",
      metal:"14K Yellow Gold 2.17 Grams",
    stone:"1 Diamond (0.21 Ct I2 GH)",
      offprice: "23368",
      category: "ring",
    },
    {
        image_url:
          "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c015983_1.jpeg?v=1646647236",
        name: "ROSS DIAMOND RING",
        price: "24436",
        metal:"18K White Gold 2.35 Grams",
    stone:"9 Diamond (0.108 Ct I2 GH)",
        offprice: "17746",
        category: "ring",
    },
    {
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/white_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c005493_1.jpg?v=1646647185",
      name: "MARYANN SOLITAIRE DIAMOND RING",
      price: "286192",
      metal:"18K Yellow Gold 2.96 Grams",
    stone:"3 Diamond (0.21 Ct I2 GH)",
      offprice: "110746",
      category: "ring",
    },
    {
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c013134_1.jpg?v=1646647377",
      name: "ASTEROIDS MIRACLE PLATE DIAMOND EARRINGS",
      price: "33327",
      metal:"14K Yellow Gold 2.17 Grams",
    stone:"7 Diamond (0.07 Ct VVS EF)",
      offprice: "27250",
      category: "earRing",
    },
    
    {
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/l/c/lce0022_1_1.jpeg?v=1646647697",
      name: "FUSCIA DIAMOND EARRINGS",
      price: "30327",
      metal:"18K Yellow Gold 2.96 Grams",
    stone:"2 Diamond (0.21 Ct I2 GH)",
      offprice: "23250",
      category: "earRing",
    },
    {
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c016318_1.jpeg?v=1646647378",
      name: "HAKINI DIAMOND MANGALSUTRA PENDANT",
      price: "19527",
      metal:"14K Yellow Gold 2.17 Grams",
    stone:"2 Diamond (0.21 Ct I2 GH)",
      offprice: "16421",
      category: "necklace",
    },
    
    {
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/rose_gold_default/310x310/040ec09b1e35df139433887a97daa66f/l/c/lcn0290_1.jpg?v=1646647510",
      name: "ZENAIDA DIAMOND NECKLACE",
      price: "39794",
      metal:"18K White Gold 2.35 Grams",
    stone:"1 Diamond (0.21 Ct I2 GH)",
      offprice: "31904",
      category: "necklace",
    },

    {
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/k/c/kc01388_1.jpeg?v=1646647311",
      name: "ASTEROIDS MIRACLE PLATE DIAMOND EARRINGS",
      price: "33327",
      metal:"14K Yellow Gold 2.17 Grams",
    stone:"5 Diamond (0.07 Ct VVS EF)",
      offprice: "27250",
      category: "braclet",
    },
    {
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/rose_gold_default/310x310/040ec09b1e35df139433887a97daa66f/l/c/lcb0245_1.jpeg?v=1646647379",
      name: "ARIANE DIAMOND BRACELET",
      price: "15527",
      metal:"18K Yellow Gold 2.96 Grams",
    stone:"8 Diamond (0.21 Ct I2 GH)",
      offprice: "12021",
      category: "braclet",
    },
    
    {
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/c/0/c018292_1.jpeg?v=1646647310",
      name: "DAYANARA DIAMOND KADA",
      price: "33412",
      metal:"14K Yellow Gold 2.17 Grams",
    stone:"7 Diamond (0.21 Ct I2 GH)",
      offprice: "21238",
      category: "braclet",
    },

    {
      image_url:
        "https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/310x310/040ec09b1e35df139433887a97daa66f/l/c/lcd0022_1.jpeg?v=1646647666",
      name: "LILAS DIAMOND KADA",
      price: "37812",
      metal:"18K Yellow Gold 2.96 Grams",
    stone:"9 Diamond (0.21 Ct I2 GH)",
      offprice: "26896",
      category: "braclet",
    },
];

var cartData = JSON.parse(localStorage.getItem("cart")) || [];



// sorting
window.addEventListener("load", function () {
  displayData(cartData);
});

function handlePriceSort() {
  var selected = document.querySelector("#sortPrice").value;
  console.log(selected);
  if (selected == "htl") {
    shopData.sort(function (a, b) {
      return b.price - a.price;
    });
    displayData(cartData);
  }

  if (selected == "lth") {
    shopData.sort(function (a, b) {
      return a.price - b.price;
    });
    displayData(cartData);
  }
}

function handleProductSort() {
  var selected = document.querySelector("#sortProduct").value;
  // filter will return array whenever it satifies the given condn

  var filteredList = shopData.filter(function (elem) {
    return elem.category == selected;
 
  });

 
  document.querySelector("#contain").innerHTML =""
  filteredList.map(function (elem) {
      var box = document.createElement("div");
       box.setAttribute("id","boxitem")
      var img = document.createElement("img");
      img.src = elem.image_url;
    
    
      var name = document.createElement("p");
      name.textContent = elem.name;
      name.style.paddingLeft="10px";
      name.style.margin="-8px 0px"
    
    
      var price = document.createElement("p");
      price.innerText =" ₹ "+ elem.price;
      price.style.paddingLeft="10px";
     
    
      var offerPrice = document.createElement("p");
      offerPrice.innerText = "Offer Price ₹ " +elem.offprice;
      offerPrice.style.color="red";
      offerPrice.style.paddingLeft="10px";
      offerPrice.style.margin="-8px 0px 0px 0px"
    
     var btn=document.createElement("button");
    
     btn.innerText="Add cart";
     btn.setAttribute("class","btnCart")
     btn.style.color="teal";
     btn.style.borderColor="none"
    
     btn.addEventListener("click",function(){
       addToCart(elem,btn)
     })
    
    
     
     
      box.append(img, name, price,offerPrice,btn);
    
      document.querySelector("#contain").append(box);
    });
    
    function addToCart(elem,btn) {
      console.log(elem);
      cartData.push(elem);
      localStorage.setItem("cart", JSON.stringify(cartData));
      btn.innerText="Added To Cart";
      btn.style.backgroundColor="green";
      btn.style.color="white";
    }
}

function handleNameSort() {
  //console.log('inside name sort')
  var selected = document.querySelector("#sortNames").value;
  console.log(selected);

  if (selected == "ascending") {
    shopData.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });

    console.log(shopData);
    displayData(cartData);

    // localStorage.setItem("jobApplications", JSON.stringify(appliedJobs));
    // window.location.reload();
  }

  if (selected == "descending") {
    shopData.sort(function (a, b) {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
    console.log(shopData);
    displayData(cartData);

    // localStorage.setItem("jobApplications", JSON.stringify(appliedJobs));
    // window.location.reload();
  }
}

function displayData(cartData) {
  document.querySelector("#contain").innerHTML = "";
  shopData.map(function (elem) {
      var box = document.createElement("div");
       box.setAttribute("id","boxitem")
      var img = document.createElement("img");
      img.src = elem.image_url;
    
    
      var name = document.createElement("p");
      name.textContent = elem.name;
      name.style.paddingLeft="10px";
      name.style.margin="-8px 0px"
    
    
      var price = document.createElement("p");
      price.innerText =" ₹ "+ elem.price;
      price.style.paddingLeft="10px";
     
    
      var offerPrice = document.createElement("p");
      offerPrice.innerText = "Offer Price ₹ " +elem.offprice;
      offerPrice.style.color="red";
      offerPrice.style.paddingLeft="10px";
      offerPrice.style.margin="-8px 0px 0px 0px"
    
     var btn=document.createElement("button");
    
     btn.innerText="Add cart";
     btn.setAttribute("class","btnCart")
     btn.style.color="teal";
     btn.style.borderColor="none"
    
     btn.addEventListener("click",function(){
       addToCart(elem,btn)
     })
    
    
     
     
      box.append(img, name, price,offerPrice,btn);
    
      document.querySelector("#contain").append(box);
    });
    
    function addToCart(elem,btn) {
      console.log(elem);
      cartData.push(elem);
      localStorage.setItem("cart", JSON.stringify(cartData));
      btn.innerText="Added To Cart";
      btn.style.backgroundColor="green";
      btn.style.color="white";
    }

  }
