let products = {
    data: [
      {
        productName: "PEUGEOT 207 CABRIOLET",
        category: "Peugeot",
        price: "8900",
        image: "images/peugeot 207.PNG",
      },
      {
        productName: "RENAULT MEGANE CABRIOLET",
        category: "Renault",
        price: "5100",
        image: "images/megane.PNG",
      },
      {
        productName: "VOLKSWAGEN PASSAT VR5",
        category: "Volkswagen",
        price: "2900",
        image: "images/passat.PNG",
      },
      {
        productName: "AUDI A4",
        category: "Audi",
        price: "8000",
        image: "images/audi a4.PNG",
      },
      {
        productName: "FIAT 500",
        category: "Fiat",
        price: "7100",
        image: "images/fiat 500.PNG",
      },
      {
        productName: "TOYOTA COROLLA CROSS HYBRID",
        category: "Toyota",
        price: "9400",
        image: "images/corolla cross.png",
      },
      {
        productName: "FORD FOCUS",
        category: "Ford",
        price: "3200",
        image: "images/focus.jpg",
      },
      {
        productName: "CHEVROLET TRACKER",
        category: "Chevrolet",
        price: "9600",
        image: "images/tracker.jpeg",
      },



      



      {
        productName: "PEUGEOT 207 CABRIOLET",
        category: "Peugeot",
        price: "8900",
        image: "images/peugeot 207.PNG",
      },
      {
        productName: "RENAULT MEGANE CABRIOLET",
        category: "Renault",
        price: "5100",
        image: "images/megane.PNG",
      },
      {
        productName: "VOLKSWAGEN PASSAT VR5",
        category: "Volkswagen",
        price: "2900",
        image: "images/passat.PNG",
      },
      {
        productName: "AUDI A4",
        category: "Audi",
        price: "8000",
        image: "images/audi a4.PNG",
      },
      {
        productName: "FIAT 500",
        category: "Fiat",
        price: "7100",
        image: "images/fiat 500.PNG",
      },
      {
        productName: "TOYOTA COROLLA CROSS HYBRID",
        category: "Toyota",
        price: "9400",
        image: "images/corolla cross.png",
      },
      {
        productName: "FORD FOCUS",
        category: "Ford",
        price: "3200",
        image: "images/focus.jpg",
      },
      {
        productName: "CHEVROLET TRACKER",
        category: "Chevrolet",
        price: "9600",
        image: "images/tracker.jpeg",
      },
      {
        productName: "PEUGEOT 207 CABRIOLET",
        category: "Peugeot",
        price: "8900",
        image: "images/peugeot 207.PNG",
      },
      {
        productName: "RENAULT MEGANE CABRIOLET",
        category: "Renault",
        price: "5100",
        image: "images/megane.PNG",
      },
      {
        productName: "VOLKSWAGEN PASSAT VR5",
        category: "Volkswagen",
        price: "2900",
        image: "images/passat.PNG",
      },
      {
        productName: "AUDI A4",
        category: "Audi",
        price: "8000",
        image: "images/audi a4.PNG",
      },
      {
        productName: "FIAT 500",
        category: "Fiat",
        price: "7100",
        image: "images/fiat 500.PNG",
      },
      {
        productName: "TOYOTA COROLLA CROSS HYBRID",
        category: "Toyota",
        price: "9400",
        image: "images/corolla cross.png",
      },
      {
        productName: "FORD FOCUS",
        category: "Ford",
        price: "3200",
        image: "images/focus.jpg",
      },
      {
        productName: "CHEVROLET TRACKER",
        category: "Chevrolet",
        price: "9600",
        image: "images/tracker.jpeg",
      },
      {
        productName: "PEUGEOT 207 CABRIOLET",
        category: "Peugeot",
        price: "8900",
        image: "images/peugeot 207.PNG",
      },
      {
        productName: "RENAULT MEGANE CABRIOLET",
        category: "Renault",
        price: "5100",
        image: "images/megane.PNG",
      },
      {
        productName: "VOLKSWAGEN PASSAT VR5",
        category: "Volkswagen",
        price: "2900",
        image: "images/passat.PNG",
      },
      {
        productName: "AUDI A4",
        category: "Audi",
        price: "8000",
        image: "images/audi a4.PNG",
      },
      {
        productName: "FIAT 500",
        category: "Fiat",
        price: "7100",
        image: "images/fiat 500.PNG",
      },
      {
        productName: "TOYOTA COROLLA CROSS HYBRID",
        category: "Toyota",
        price: "9400",
        image: "images/corolla cross.png",
      },
      {
        productName: "FORD FOCUS",
        category: "Ford",
        price: "3200",
        image: "images/focus.jpg",
      },
      {
        productName: "CHEVROLET TRACKER",
        category: "Chevrolet",
        price: "9600",
        image: "images/tracker.jpeg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "€" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };

  const backToTopButton = document.getElementById("back-to-top-button");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  // Para hacer una animación de desplazamiento suave, utiliza un setInterval y el método window.scrollTo()
  const scrollToTop = setInterval(() => {
    // Obtiene la posición actual del desplazamiento
    const y = window.pageYOffset;
    if (y > 0) {
      // Desplaza la ventana hacia arriba
      window.scroll(0, y - 20);
    } else {
      // Una vez que llegues arriba, elimina el intervalo
      clearInterval(scrollToTop);
    }
  }, 4);
});
