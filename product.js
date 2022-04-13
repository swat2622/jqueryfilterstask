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
var html=`<table><tr><th>ID</th>
    <th>Name</th>
    <th>Brand</th>
    <th>Operating System</th>
    <th>Remove</th></tr>`;

display=()=>{
   products.forEach((element)=>{
        html+= `<tr><td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.brand}</td>
        <td>${element.os}</td>
        <td class="rem" style="text-decoration:underline" id=${element.id}>X</td>
        
        
        
        </tr>`


    });$("#output").append(html+"</table>")
}


$(document).ready(function(){
    display();
    $(".rem").click(function(){
        var id=this.id
        $(`#${id}`).parents("tr").hide() 
    })
})