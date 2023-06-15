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
  /*---------------------------------------------------------*/
  function displayCars() {
    const carStore = JSON.parse(localStorage.getItem("carStore"));
  
    const tableBody = document.getElementById("carTableBody");
    tableBody.innerHTML = "";
  
    carStore.forEach((car, index) => {
        
      const row = document.createElement("tr");
  
      const brandCell = document.createElement("td");
      brandCell.textContent = car.brand;
      row.appendChild(brandCell);
  
      const modelCell = document.createElement("td");
      modelCell.textContent = car.model;
      row.appendChild(modelCell);
  
      const yearCell = document.createElement("td");
      yearCell.textContent = car.year;
      row.appendChild(yearCell);
  
      const colorCell = document.createElement("td");
      colorCell.textContent = car.color;
      row.appendChild(colorCell);
  
      const deleteCell = document.createElement("td");
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.addEventListener("click", deleteCar.bind(null, index));
      deleteCell.appendChild(deleteBtn);
  
      row.appendChild(deleteCell);
  
      tableBody.appendChild(row);
    });
  }
  /*----------------------------------*/
  function deleteCar(index) {
    const carStore = JSON.parse(localStorage.getItem("carStore"));
    carStore.splice(index, 1);
  
    localStorage.setItem("carStore", JSON.stringify(carStore));
  
    displayCars();
  }
  