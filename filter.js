var numberArray=[1,2,3,4,5,6,7,8,9,10];
console.log("Numberarray: ",numberArray);
// var filteredNumberArray=numberArray.filter(function(value){
//     return value>5;

// });
// console.log("filterdarray is: ",filteredNumberArray);
function Newfilter(value){
    return value>5;
}
var filteredNumberArray=numberArray.filter(Newfilter);
console.log("filterdarray is: ",filteredNumberArray);
var shopingList1=[
    "milk","donus","cookies","choclate","peaneaut butter","pepto bismol"
];
console.log(shopingList1);
var search1="donus";
function containFilter(value){
    return value.indexOf(search1) !==-1;
}
var searchedShopping=shopingList1.filter(containFilter);
console.log("searched shopping list : ",searchedShopping);