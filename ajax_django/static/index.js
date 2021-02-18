/*$(document).ready(function(){

var csrf = $("input[name='csrfmiddlewaretoken']").val();

   $("#btn_get").click(function(){

       $.ajax({
         url:'',
         type:'get',
         data: {
         button_txt: $(this).text()
         },
         success: function(response){
         $("#btn_get").text(response.dataa)
         $("#list").append("<li>"+response.dataa+'</li>')
         },
         error: function(response){
         $("#btn_get").text("error")
         }

       });

   });



   $("#list").on('click', 'li', function(){

       $.ajax({
         url:'',
         type:'post',
         data: {
         txt: $(this).text(),
         csrfmiddlewaretoken: csrf
         },
         success: function(response){
         $("#right_list").append("<li>"+response.res+'</li>')
         },
         error: function(response){
         $("#btn_get").text("error")
         }

       });

   });


});*/



var country = document.getElementById('country');
var cn = document.getElementById('hello');
var sn = document.getElementById('state_names');

var state_tag = document.getElementById('state');
var createOptions, country_data;
country.addEventListener('change', function(){

//cn.innerHTML = this.value;

//ajax starts

state_tag.innerHTML = '';

$.ajax({
         url:'',
         type:'get',
         data: {
         val: this.value
         },
         success: function(response){
         cn.innerHTML = response.data,
         sn.innerHTML = response.state_name,
         country_data = response.state_name,
         console.log(country_data),
         country_data.map(item=>{
         createOptions = document.createElement('option')
         createOptions.textContent = item.name
         state_tag.appendChild(createOptions)
         })
         },

       });
//ajax ends


});








//$.ajax({
//         url:'',
//         type:'get',
//         data: {
//         val: this.value
//         },
//         success: function(response){
//         cn.innerHTML = response.data,
//         sn.innerHTML = response.state_name,
//         console.log(response.state_name)
//         },
//
//       });
