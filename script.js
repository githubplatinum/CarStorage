function storeCar(e) {
    e.preventDefault();

    const car = {
      brand: document.getElementById("name").value,
      model: document.getElementById("brand").value,
      year: document.getElementById("year").value,
      color: document.getElementById("color").value,
    };
  
    let carStore = localStorage.getItem("carStore");
    if (carStore) {
      carStore = JSON.parse(carStore);
    } else {
      carStore = [];
    }
  
    carStore.push(car);
  
    localStorage.setItem("carStore", JSON.stringify(carStore));
  
    displayCars();
  }
  
/*-----------------*/ 




  function displayCars() {
    const carStore = JSON.parse(localStorage.getItem("carStore"));
  
    const carListElement = document.getElementById("carList");
    carListElement.innerHTML = "";
  
    carStore.forEach((car, index) => {
     
        const listItem = document.createElement("li");


      listItem.textContent = `${car.brand} ${car.model} ${car.year} ${car.color}`;



      listItem.classList.add("car-item");
      

      // delete Button
      const deleteBtn = document.createElement("button");
 
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.addEventListener("click", deleteCar.bind(null, index));
      listItem.appendChild(deleteBtn);
            
    
      carListElement.appendChild(listItem);


    });
  }
  

  function deleteCar(index) {

    const carStore  = JSON.parse(localStorage.getItem("carStore"));
    carStore.splice(index, 1);

    localStorage.setItem("carStore", JSON.stringify(carStore));

    displayCars();
  }