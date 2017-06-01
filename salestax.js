var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
//TaxRates need to be applied as

//company Sales Data is an array of objects
//I need to loop through this array


var companySalesData = [ //NO
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
    //need to get sum of sales
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

//sum function
function sum(arr){
  var total = 0;
  for (i = 0; i < arr.length; i++){
    total = total + arr[i]
  }
  return total;
}
///
var sum = 0;
if (companySalesData.name['Telus']) {
  sum +=
}






///
var companies = {};
for (var companyIndex = 0; companyIndex < companySalesData.length; companyIndex++) {
  //variable company is the sales data
  var company = companySalesData[companyIndex];
  //variable province gives me the value of key(province)
  var province = company.province;
  //variable taxRate gives me the object[0] in the array salesTaxRates
  var taxRate = salesTaxRates[province];

  companies[company.name] = {totalSales: 0, totalTaxes: 0}; // hint #1: do we always want to create a new object??

var BC = salesTaxRates.BC;
console.log("salesBC is ", BC);
  // totalSales[company] = {}

var totalSales = sum(company.sales);
companies[company.name].totalSales = totalSales; // hint #2: set it or add to it?

//   var sumSales = 0;
// // console.log(company);
// // determines sales for the companySalesData[0] aka Telus BC

//     var sale = sales[companyIndex];
//     sumSales += sale
    // .reduce(function(acc, val) {
    // return (acc + val);
    // console.log(function(acc, val));

};

console.log(companies);
    // var sumofall = sumSales[sumSales.length - [1]];


//   var totalTaxes = sumSales * taxRate;
// }

// var results = calculateSalesTax(companySalesData, salesTaxRates);

// console.log(results);


// function calculateSalesTax(salesData, taxRates) {

  // salesTaxRates.BC
  // salesTaxRates['BC']
  // var prov = 'BC'
  // salesTaxRates[prov]

  // This `i` is supposed to be part of a loop


/* Expected Results:
 {
   Telus: {
     totalSales: 1300
     totalTaxes: 144
   },
   Bombardier: {
     totalSales: 800,
     totalTaxes: 40
   }
 }
 */