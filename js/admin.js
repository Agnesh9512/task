
$(document).ready(function(){
  $("#addproduct").click(function(){
  	console.log('caling')
  	$("#productdata").html(
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


