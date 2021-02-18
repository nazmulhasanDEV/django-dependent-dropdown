const owner_id = document.getElementById("owner_id");
const car_id   = document.getElementById("car_id");
const car_model_id = document.getElementById("car_model_id");

let car_data_by_owner;
let createOption_car;
let create_carModel_option;
let selectedeCars;
let createOption_carModel;
/* starts eventlistener function */
owner_id.addEventListener('change', function(){

car_id.innerHTML = '<option>---Choose Car---</option>';

// starts ajax method
$.ajax({

url: '',
type: 'get',
data: {
   owner_name: this.value
},
success: function(response){
car_data_by_owner = response.car_by_owners,
// map function starts
car_data_by_owner.map(item=>{
createOption_car = document.createElement('option');
createOption_car.textContent = item.name;
createOption_car.value = item.id;
car_id.appendChild(createOption_car);
})// map function ends

},

});
// ends ajax method


});
/* ends event listener function*/


// car-id and model eventlistern starts

car_id.addEventListener('change', function(){

car_model_id.innerHTML = "<option>--Choose Car Model--</option>";
// ajax method starts
//selected_car
$.ajax({

url: '',
type: 'get',
data: {
selected_car: this.value
},
success: function(response){
selectedeCars = response.car_by_model;
console.log(selectedeCars);
selectedeCars.map(items=>{
createOption_carModel = document.createElement('option');
createOption_carModel.textContent = items.mode_name;
createOption_carModel.value = items.id;
car_model_id.appendChild(createOption_carModel);
});

}

});

// ajax method ends

});

// car-id eventListener ends









