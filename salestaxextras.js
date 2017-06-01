
// var salesTaxRates = {
//   AB: 0.05,
//   BC: 0.12,
//   SK: 0.10
// };
//loops through salesTaxRates
// for (var province in salesTaxRates) {
//   // gives me the value of the key index value for each province
//   var rates = salesTaxRates[province];
//   // prints the pair values for each province
//   console.log(province, rates);
// }
// var company =
// salesTaxRates[]


// for (var i=0; i<companySalesData.length; i++)
//   for (var name in companySalesData[i]) {
//       console.log("Item name: "+name);
//       console.log("Source: "+result[i][name].sourceUuid);
//       console.log("Target: "+result[i][name].targetUuid);
//   }

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
//variable BC fetches my tax value for BC
var BC = salesTaxRates.BC;
console.log("salesBC is ", BC);

// var companySalesData = [
//   {
//     name: "Telus",
//     province: "BC",
//     sales: [100, 200, 400]
//   },
//   {
//     name: "Bombardier",
//     province: "AB",
//     sales: [80, 20, 10, 100, 90, 500]
//   },
//   {
//     name: "Telus",
//     province: "SK",
//     sales: [500, 100]
//   }
// ];

// function calculateSalesTax(salesData, taxRates) {

//   // salesTaxRates.BC
//   // salesTaxRates['BC']
//   // var prov = 'BC'
//   // salesTaxRates[prov]

//   // This `i` is supposed to be part of a loop
//   var i = 0;
//   var company = companySalesData[i];
//   var province = company.province;
//   console.log("province is " + province);
//   var taxRate = salesTaxRates[province];
//   var sales = company.sales;
//   var sumSales = 0;
//   for (var salesIndex = 0; salesIndex < sales.length; salesIndex++) {
//     var sale = sales[salesIndex];
//     sumSales += sale;
//   }
//   var totalTaxes = sumSales * taxRate;
// }

// var results = calculateSalesTax(companySalesData, salesTaxRates);

// console.log(results);

// var companySalesData = [
//   {
//     name: "Telus",
//     province: "BC",   [0]
//     sales: [ 100, 200, 400 ]
//   },
//   {
//     name: "Bombardier",
//     province: "AB",
//     sales: [ 80, 20, 10, 100, 90, 500 ]  [1]
//   },
//   {
//     name: "Telus",
//     province: "SK",   [2]
//     sales: [ 500, 100 ]
//   }
// ];

// /* Expected Results:
//  {
//    Telus: {
//      totalSales: 1300
//      totalTaxes: 144
//    },
//    Bombardier: {
//      totalSales: 800,
//      totalTaxes: 40
//    }
//  }
//  */





// // // function calculateSalesTax(salesData, taxRates) {
// //   // for (var pairs in companySalesData) {
// //   //   var value = companySalesData[pairs];
// //   //   console.log("companySalesData" + pairs + "value is" + value);
// //   }
// // // }

// // var results = calculateSalesTax(companySalesData, salesTaxRates);
