var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];
var itemlist = [];
var html = `<table style="margin-top:90px;border-collapse: collapse;
width: 40%;
border: 1px solid #ddd;
font-size: 18px;
width: 40%;
border: 1px solid #ddd;
font-size: 18px;" id="mytab"><tr><th>ID</th>
    <th>Name</th>
    <th>Brand</th>
    <th>Operating System</th>
    <th>Remove</th></tr>`;
var brand =
  new Set(); /*creating a new set because we want unique values with set function */
var os =
  new Set(); /*creating a new set because we want unique values with set function */

display = () => {
    var row =""
  products.forEach((element) => {
    row += `<tr><td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.brand}</td>
        <td>${element.os}</td>
        <td class="rem" style="text-decoration:underline" id=${element.id}>X</td>
        
        
        
        </tr>`;
    brand.add(element.brand);
    os.add(element.os);
  });
  $("#output").html(html+row + "</table>");
  let b_item = `<option value="">-Select Brand-</option>`;
  let o_item = `  <option value="">-Select os-</option>`;
  brand.forEach((element) => {
    b_item += `<option>${element}</option>`;
  });
  os.forEach((element) => {
    o_item += `<option>${element}</option>`;
  });
  $("#brand").html(b_item);
  $("#osb").html(o_item);
};

$(document).ready(function () {
  display();
  $(".rem").click(function () {
    var id = this.id;
    $(`#${id}`).parents("tr").hide();
  });
  $("#myinput").on("keyup", function () {
    search();
  });
  $("#brand").on("change",function(){
      sortitems();

  })
  $("#osb").on("change",function(){
      sortitems()
  })
});
function search() {
  var value = $("#myinput").val().toLowerCase();
  $("#mytab tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    console.log("gfhtgfh");
  });
}
function sortitems() {
  var brand = $("#brand").val();
  var os = $("#osb").val();
  var flag = 0;
  if (brand != "" && os != "") {
    itemlist = [];
    products.forEach((element) => {
      if (element.os == os && element.brand == brand) {
        itemlist.push(element);
        display1();
        flag = 1;
      }
    });
    if (flag == 0) {
      itemlist = [];
      display1();
    }
  } else if (os != "" && brand == "") {
    itemlist = [];
    products.forEach((element) => {
      if (element.os == os) {
        itemlist.push(element);
        display1();
      }
    });
  } else if (brand != "" && os == "") {
    itemlist = [];
    products.forEach((element) => {
      if (element.brand == brand) {
        itemlist.push(element);
        display1();
      }
    });
  } else {
    itemlist = [];
    display1();
  }
}
function display1() {
  var html1 = "";
  itemlist.forEach((element) => {
    html1 += `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.brand}</td>
        <td>${element.os}</td>
        <td class="rem" style="text-decoration:underline" id=${element.id}>X</td>
        </tr>`;
  });
  $("#output").empty();
  $("#output").html(html + html1 + "</table>");
}
