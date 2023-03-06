

for(i=1; i<=localStorage.length; i++){
  let obj = JSON.parse(localStorage.getItem(i));
      pName = obj.name;
      pPrize = obj.prize;
      pCategory = obj.category;
      let userData ='<div><label> Product Name : <span id="name">'+pName+'</span> </label><br><label> Product Prize : <span id="prize">'+pPrize+'</span> </label><br> <label> Product Category : <span id="category">'+pCategory+'</span> </label><br></div>'
      $("#dataAdd").append(userData);
}

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
function product(){
  i = localStorage.length + 1;
  let pName = document.getElementById('pname').value;
  let pPrize = document.getElementById('pprize').value;
  let pCategory = document.getElementById('pcategory').value;
  const data = { name: pName, prize: pPrize, category: pCategory};
  localStorage.setItem(i,JSON.stringify(data));
};


