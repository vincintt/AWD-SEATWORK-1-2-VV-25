document.addEventListener("DOMContentLoaded", () => {
    const cars = [
        { id: 1, name: "Toyota Corolla", image: "https://i.imgur.com/u3rWidp.jpg", available: true, price: 50 },
        { id: 2, name: "Honda Civic", image: "https://i.imgur.com/oEzDdQb.jpg", available: true, price: 60 },
        { id: 3, name: "Ford Mustang", image: "https://i.imgur.com/Kg3eUHz.jpg", available: true, price: 70 },
        { id: 4, name: "Chevrolet Camaro", image: "https://i.imgur.com/AhF7xQr.jpg", available: true, price: 80 },
        { id: 5, name: "Tesla Model 3", image: "https://i.imgur.com/OWIYV7a.jpg", available: true, price: 90 },
        { id: 6, name: "BMW 3 Series", image: "https://i.imgur.com/mODjrNb.jpg", available: true, price: 100 },
        { id: 7, name: "Mercedes C-Class", image: "https://i.imgur.com/i4Ne5UM.jpg", available: true, price: 110 },
        { id: 8, name: "Audi A4", image: "https://i.imgur.com/QG36ANt.jpg", available: true, price: 120 },
        { id: 9, name: "Lexus IS", image: "https://i.imgur.com/TxNmzef.jpg", available: true, price: 130 },
        { id: 10, name: "Nissan Altima", image: "https://i.imgur.com/zSY8uQ2.jpg", available: true, price: 140 }
    ];

    const carList = document.getElementById("carList");

    function renderCars() {
        carList.innerHTML = "";
        cars.forEach(car => {
            const carDiv = document.createElement("div");
            carDiv.classList.add("car");
            carDiv.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <h3>${car.name}</h3>
                <p>Price: $${car.price}/day</p>
                <p>Status: <strong>${car.available ? "Available" : "Rented"}</strong></p>
                <button class="rent-btn" onclick="rentCar(${car.id})" ${car.available ? "" : "disabled"}>Rent</button>
                <button class="return-btn" onclick="returnCar(${car.id})" ${car.available ? "disabled" : ""}>Return</button>
            `;
            carList.appendChild(carDiv);
        });
    }

    window.rentCar = function(id) {
        const car = cars.find(c => c.id === id);
        if (car) {
            if (car.available) {
                car.available = false;
                renderCars();
            } else {
                alert(`${car.name} is already rented.`);
            }
        }
    };

    window.returnCar = function(id) {
        const car = cars.find(c => c.id === id);
        if (car && !car.available) {
            car.available = true;
            renderCars();
        }
    };

    renderCars();
});
