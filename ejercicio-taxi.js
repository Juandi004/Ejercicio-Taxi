'use strict'

let vehicle={
    brand: "Toyota",
    model: "Camry",
    color: "White",
    licensePlate: "ABC-123",
    year: 2009,
    isEnable: false,
}

function validarTaxi(vehicle){
    let currentYear=2023;
    let isUsefull=currentYear-vehicle.year;
    if(isUsefull<10){
        alert(Boolean(true));
    }else{
        alert(Boolean(false));
    }
}
validarTaxi(vehicle);