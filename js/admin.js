$(document).ready(function(){
  data();
  $("#addproduct").click(function(){
  	console.log('caling')
  	$("#productform").append(
      '<form class="form mt-3">' +
  		'<div class="p-3">' +
  		'<div>' +
  		'<label class="form-label">Product Name</label>' +
  		'<input type="text" id="pname" class="form-control" placeholder="enter your product name">' +
  		'</div>' +
  		'<div>' + 
  		'<label class="form-label mt-2">Product Prize</label>' +
  		'<input type="text" id="pprize" class="form-control" placeholder="enter prize of product">' +
  		'</div>' +
  		'<div>' +
  		'<label class="form-label mt-2">Product Category</label>' +
  		'<input type="text" id="pcategory" class="form-control" placeholder="enter category of your product">' +
  		'</div>' +
  		'<div>' +
  		'<button id="add" onclick="product()" class="btn btn-secondary form-control mt-2">Add</button>' +
      '</div>' +
      '</div>' +
  		'</form>' 
    );
  });
});

function product(){
  let Productname = document.getElementById('pname');
  let Productprize = document.getElementById('pprize');
  let Productcategory = document.getElementById('pcategory');
  
  console.log(Productname);
  console.log(Productprize);
  console.log(Productcategory);
  localStorage.setItem('pname', Productname.value);
  localStorage.setItem('pprize', Productprize.value);
  localStorage.setItem('pcategory', Productcategory.value); 
};

function data(){
  let Productname =localStorage.getItem('pname');
  let Productprize =localStorage.getItem('pprize');
  let Productcategory =localStorage.getItem('pcategory');
  document.getElementById('name').innerHTML = Productname;
  document.getElementById('prize').innerHTML = Productprize;
  document.getElementById('category').innerHTML = Productcategory;

};
