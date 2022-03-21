// (function(){
//     'use strict'
//     angular.module('myfirstapp',[])
//     .controller('MyFirstController',function($scope){
//         $scope.name="my page";
//         $scope.sayhello=function(){
//             return "hello";

//         };
//     });
//     })();
// var student={
//     name:"",
//     type:"student"
// };
// document.addEventListener('DOMContentLoaded',contentLoaded);
// function contentLoaded(event){
//     document.getElementById('name').addEventListener("keyup",keyUp);
// }
// function keyUp(event){
//     calculateNumericOutput();
// }
// function calculateNumericOutput()
// {
//     console.log("i am good key");
//     student.name=document.getElementById('name').value;
//     console.log(student.name);
//     var totalNameValue=0;
//     for(var i=0;i<student.name.length;i++){
//         totalNameValue+=student.name.charCodeAt(i);
//         console.log(i);
//     }
//     var output="total numeric value of person name is" + totalNameValue;
//     document.getElementById('output').innerText=output;

// }
// (function(){
//     angular.module('NameCalculator',[])
//     .controller('NameCalculatorController',function($scope){
//         $scope.name="";
//         $scope.totalvalue=0;
//         $scope.displayNumeric=function(){
//             var totalNameValue=calculateNumericforString($scope.name)//get the total value
//             $scope.totalvalue=totalNameValue;
//             console.log($scope);
//         };
//         function calculateNumericforString(string){
//             var totalStringValue=0;
//             for(var i=0;i<string.length;i++){
//                 totalStringValue+=string.charCodeAt(i);
//             }
//             return totalStringValue;
//         };
//     });

// })();
// (function(){
//     angular.module('DIApp',[])
//     .controller('DIController',['$scope','$filter',Dicontroller]);
//     Dicontroller.$inject=['$scope','$filter'];
//     function Dicontroller($scope, $filter){
//         $scope.name="sjfuiauia";
//         $scope.upper=function(){
//             var Upcase=$filter('uppercase');
//             $scope.name=Upcase($scope.name);
//         };
//     }
//     function Annonteme(Name,job,blah){
//         return "blah!";
//     }
//     console.log(Annonteme);

// })();
// (function(){
//     angular.module('MsgApp',[])
//     .controller('MsgController',MsgController)
//     .filter('loves',LovesFilter)
//     .filter('truth',TruthFilter);
//     MsgController.$inject=['$scope','$filter','lovesFilter'];
//     function MsgController($scope,$filter,lovesFilter){
//         $scope.name="ishuihs";
//         $scope.stateofbeing="hungry";
//         $scope.Cookiecost=.45;
//         $scope.saymessage=function(){
//             var msg="i m going to eat very good food";
//             var output=$filter('uppercase')(msg);
//             return msg;
//         };
//         $scope.feedyakov=function(){
//             $scope.stateofbeing="fed";
//         }
//         $scope.LoveMsg=function(){
//             var msg="i m going to eat very good food";
//             msg=lovesFilter(msg);
//             return msg;


//         }
        
//     }
//     function LovesFilter(){
//         return function(input){
//             input=input || " ";
//             input=input.replace("going","Prabath");
//             return input;
//         };
//     }
//     function TruthFilter(){
//         return function(input,target,replace){
//             input=input || " ";
//             input=input.replace(target,replace);
//             return input;

//         };
//     }

// })();
// (function(){
//     angular.module('counterApp',[])
//     .controller('CounterController',Countercontroller);
//     Countercontroller.inject=['$scope','$timeout'];
//     function Countercontroller($scope,$timeout){
//         $scope.onceCounter=0;
//         $scope.counter=0;
//         $scope.name="sdcijsadnhuj";

//         $scope.ShowNumberOfWatchers=function(){
//             console.log("# no of watchers",$scope.$$watchersCount);
//         };
//         $scope.countOnce = function(){
//             $scope.onceCounter=1;
//         }
//         // $scope.counter1=function(){
//         //     setTimeout(function () {
//         //         $scope.counter++;
//         //         console.log('counter incremented');
//         //         $scope.$digest();

                
//         //     }, 2000);
            
//         // }
//         // $scope.counter1=function(){
//         //     setTimeout(function () {
//         //         $scope.$apply(function(){
//         //             $scope.counter++;
//         //             console.log('counter incremented');

//         //         });
               
           

                
//         //     }, 2000);
//         $scope.counter1=function(){
//             $timeout(function () {
//                 $scope.counter++;
//                 console.log("counter is incremented");

//                 },2000);
               
           

                
           
      
            
//         }
//         $scope.$watch(function(){
//             console.log("Digest Function is fired");
//         });
        // $scope.$watch('onceCounter',function(newValue,oldValue){
        //     console.log("oldValue: ",oldValue);
        //     console.log("new value: ",newValue);

        // });
        // $scope.$watch('counter',function(newValue,oldValue){
        //     console.log("counteroldValue: ",oldValue);
        //     console.log("counternew value: ",newValue);

        // });
//     }

// })();
// (function(){
//     angular.module('Binddingapp',[])
//     .controller('Bindingcontroller',BindingController)
//     BindingController.inject=['$scope']
//     function BindingController($scope){
//         $scope.firstname="DACHEPALLY";
//         // $scope.fullname="";
//         $scope.ShowNumberofwatchers=function(){
//             console.log('# of watchers: ',$scope.$$watchersCount);
//         };
//         $scope.Fullname=function(){
//             $scope.fullname=$scope.firstname+" "+"SaiPrabath";
//         };
//         $scope.logfirstname=function(){
//             console.log("First name is: ",$scope.firstname);
//         };
//         $scope.logFullNmae=function(){
//             console.log("Fulla Name: ",$scope.fullname);
//         };

//     }
// })();
// (function(){
//     'use strict'
//     var shopingList1=[
//         "milk","donus","cookies","choclate","peaneaut butter","pepto bismol"
//     ];
//     var shoppingList2=[
//         {
//             name:"milk",
//             quantity:"2"
//         },
//         {
//             name:"donus",
//             quantity:"200"
//         },
//         {
//             name:"cookies",
//             quantity:"10"
//         },
//         {
//             name:"choclate",
//             quantity:"20"
//         },
//         {
//             name:"peaneaut butter",
//             quantity:"50"
//         },
//         {
//             name:"pepto bismol",
//             quantity:"2"
//         }
//     ];
//     angular.module('ShoppingListApp',[])
//     .controller('ShopiingListController',ShopingListController)
//     ShopingListController.inject=['$scope']
//     function ShopingListController($scope){
//         $scope.shopingList1=shopingList1;
//         $scope.shoppingList2=shoppingList2;
//         $scope.new1=function(){
//             var newItem={
//                 name:$scope.ItemName,
//                 quantity:$scope.ItemQuantity
//             };
//             $scope.shoppingList2.push(newItem);
//         };
//     }
// })();
// (function(){
//     'use strict'
//     angular.module('controllerASAPP',[])
    // .controller('controller1',parentcontroller)
    // .controller('controller2',childcontroller)
    // .controller('parentcontroller2',parentcontroller2)
    // .controller('childcontroller2',childcontroller2)
    // parentcontroller.$inject=["$scope"];
    // function parentcontroller($scope){
    //     $scope.parentvalue=1;
    //     $scope.pc=this;
    //     $scope.pc.parentvalue=1;

    // }
    // childcontroller.inject=["$scope"];
    // function childcontroller($scope){
    //     console.log("$scope.parentvalue: ",$scope.parentvalue);
    //     console.log("child $scope ",$scope);
    //     $scope.parentvalue=5;
    //     console.log("$scope.parentvalue: ",$scope.parentvalue);
    //     console.log($scope);
    //     $scope.pc.parentvalue=5;
    //     console.log("$scope.pc.parentvalue: ",$scope.pc.parentvalue)
    //     console.log($scope)
    // }
//     parentcontroller2.$inject=['$scope']
//     function parentcontroller2($scope){
//         var parent=this;
//         parent.value=1;
//     }
//     childcontroller2.$inject=['$scope']
//     function childcontroller2($scope){
//         var child=this;
//         child.value=5;
//         console.log("childcontroller $scope: ",$scope)
//     }


// })();
// (function () {
//     'use strict';
    
//     angular.module('ShoppingListApp', [])
//     .controller('ShoppingListAddController', ShoppingListAddController)
//     .controller('ShoppingListShowController', ShoppingListShowController)
//     .service('ShoppingListService', ShoppingListService);
    
//     ShoppingListAddController.$inject = ['ShoppingListService'];
//     function ShoppingListAddController(ShoppingListService) {
//       var itemAdder = this;
    
//       itemAdder.itemName = "";
//       itemAdder.itemQuantity = "";
    
//       itemAdder.addItem = function () {
//         ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
//       }
//     }
    
    
//     ShoppingListShowController.$inject = ['ShoppingListService'];
//     function ShoppingListShowController(ShoppingListService) {
//       var showList = this;
    
//       showList.items = ShoppingListService.getItems();
    
//       showList.removeItem = function (itemIndex) {
//         ShoppingListService.removeItem(itemIndex);
//       };
//     }
    
    
//     function ShoppingListService() {
//       var service = this;
    
//       // List of shopping items
//       var items = [];
    
//       service.addItem = function (itemName, quantity) {
//         var item = {
//           name: itemName,
//           quantity: quantity
//         };
//         items.push(item);
//       };
    
//       service.removeItem = function (itemIdex) {
//         items.splice(itemIdex, 1);
//       };
    
//       service.getItems = function () {
//         return items;
//       };
//     }
    
//     })();
// (function () {
//     'use strict';
    
//     angular.module('ControllerAsApp', [])
//     .controller('ShoppingListController1', ShoppingListController1)
//     .controller('ShoppingListController2', ShoppingListController2)
//     .factory('ShoppingListFactory', ShoppingListFactory);
    
//     // LIST #1 - controller
//     ShoppingListController1.$inject = ['ShoppingListFactory'];
//     function ShoppingListController1(ShoppingListFactory) {
//       var list1 = this;
    
//       // Use factory to create new shopping list service
//       var shoppingList = ShoppingListFactory();
    
//       list1.items = shoppingList.getItems();
    
//       list1.itemName = "";
//       list1.itemQuantity = "";
    
//       list1.addItem = function () {
//         shoppingList.addItem(list1.itemName, list1.itemQuantity);
//       }
    
//       list1.removeItem = function (itemIndex) {
//         shoppingList.removeItem(itemIndex);
//       };
//     }
    
    
//     // LIST #2 - controller
//     ShoppingListController2.$inject = ['ShoppingListFactory'];
//     function ShoppingListController2(ShoppingListFactory) {
//       var list2 = this;
    
//       // Use factory to create new shopping list service
//       var shoppingList = ShoppingListFactory(3); 
//       list2.items = shoppingList.getItems();
    
//       list2.itemName = "";
//       list2.itemQuantity = "";
    
//       list2.addItem = function () {
//         try {
//           shoppingList.addItem(list2.itemName, list2.itemQuantity);
//         } catch (error) {
//           list2.errorMessage = error.message;
//         }
    
//       }
    
//       list2.removeItem = function (itemIndex) {
//         shoppingList.removeItem(itemIndex);
//       };
//     }
    
    
//     // If not specified, maxItems assumed unlimited
//     function ShoppingListService(maxItems) {
//       var service = this;
    
//       // List of shopping items
//       var items = [];
    
//       service.addItem = function (itemName, quantity) {
//         if ((maxItems === undefined) ||
//             (maxItems !== undefined) && (items.length < maxItems)) {
//           var item = {
//             name: itemName,
//             quantity: quantity
//           };
//           items.push(item);
//         }
//         else {
//           throw new Error("Max items (" + maxItems + ") reached.");
//         }
//       };
    
//       service.removeItem = function (itemIndex) {
//         items.splice(itemIndex, 1);
//       };
    
//       service.getItems = function () {
//         return items;
//       };
//     }
    
    
//     function ShoppingListFactory() {
//       var factory = function (maxItems) {
//         return new ShoppingListService(maxItems);
//       };
    
//       return factory;
//     }
    
//     })();
// (function () {
//     'use strict';
    
//     angular.module('ShoppingListApp', [])
//     .controller('ShoppingListController', ShoppingListController)
//     .provider('ShoppingListService', ShoppingListServiceProvider)
//     .config(Config);
    
//     Config.$inject = ['ShoppingListServiceProvider'];
//     function Config(ShoppingListServiceProvider) {
//       // Save Yaakov from himself
//       ShoppingListServiceProvider.defaults.maxItems = 2;
//     }
    
    
//     ShoppingListController.$inject = ['ShoppingListService'];
//     function ShoppingListController(ShoppingListService) {
//       var list = this;
    
//       list.items = ShoppingListService.getItems();
    
//       list.itemName = "";
//       list.itemQuantity = "";
    
//       list.addItem = function () {
//         try {
//           ShoppingListService.addItem(list.itemName, list.itemQuantity);
//         } catch (error) {
//           list.errorMessage = error.message;
//         }
//       };
    
//       list.removeItem = function (itemIndex) {
//         ShoppingListService.removeItem(itemIndex);
//       };
//     }
    
    
//     // If not specified, maxItems assumed unlimited
//     function ShoppingListService(maxItems) {
//       var service = this;
    
//       // List of shopping items
//       var items = [];
    
//       service.addItem = function (itemName, quantity) {
//         if ((maxItems === undefined) ||
//             (maxItems !== undefined) && (items.length < maxItems)) {
//           var item = {
//             name: itemName,
//             quantity: quantity
//           };
//           items.push(item);
//         }
//         else {
//           throw new Error("Max items (" + maxItems + ") reached.");
//         }
//       };
    
//       service.removeItem = function (itemIndex) {
//         items.splice(itemIndex, 1);
//       };
    
//       service.getItems = function () {
//         return items;
//       };
//     }
    
    
//     function ShoppingListServiceProvider() {
//       var provider = this;
    
//       provider.defaults = {
//         maxItems: 10
//       };
    
//       provider.$get = function () {
//         var shoppingList = new ShoppingListService(provider.defaults.maxItems);
    
//         return shoppingList;
//       };
//     }
    
//     })();
// (function () {
//     'use strict';
    
//     angular.module('ShoppingListApp', [])
//     .controller('ShoppingListController', ShoppingListController)
//     .provider('ShoppingList', ShoppingListProvider)
//     .config(Config);
    
//     Config.$inject = ['ShoppingListProvider'];
//     function Config(ShoppingListProvider) {
//       ShoppingListProvider.defaults.maxItems = 5;
//     }
    
//     ShoppingListController.$inject = ['ShoppingList'];
//     function ShoppingListController(ShoppingList) {
//       var list = this;
    
//       list.items = ShoppingList.getItems();
    
//       list.itemName = "";
//       list.itemQuantity = "";
    
//       list.addItem = function () {
//         try {
//           ShoppingList.addItem(list.itemName, list.itemQuantity);
//         } catch (error) {
//           list.errorMessage = error.message;
//         }
//       }
    
//       list.removeItem = function (itemIndex) {
//         ShoppingList.removeItem(itemIndex);
//       };
//     }
    
    
    // If not specified, maxItems assumed unlimited
    // function ShoppingListService(maxItems) {
    //   var service = this;
    
      // List of shopping items
    //   var items = [];
    
    //   service.addItem = function (itemName, quantity) {
    //     if ((maxItems === undefined) ||
    //         (maxItems !== undefined) && (items.length < maxItems)) {
    //       var item = {
    //         name: itemName,
    //         quantity: quantity
    //       };
    //       items.push(item);
    //     }
    //     else {
    //       throw new Error("Max items (" + maxItems + ") reached.");
    //     }
    //   };
    
    //   service.removeItem = function (itemIndex) {
    //     items.splice(itemIndex, 1);
    //   };
    
    //   service.getItems = function () {
    //     return items;
    //   };
    // }
    
    
    // function ShoppingListProvider() {
    //   var provider = this;
    
    //   provider.defaults = {
    //     maxItems: 100
    //   };
    
    //   provider.$get = function () {
    //     var shoppingList = new ShoppingListService(provider.defaults.maxItems);
    
    //     return shoppingList;
    //   };
    // }
    
    // })();
    // (function () {
    //     'use strict';
        
    //     angular.module('ShoppingListPromiseApp', [])
    //     .controller('ShoppingListController', ShoppingListController)
    //     .service('ShoppingListService', ShoppingListService)
    //     .service('WeightLossFilterService', WeightLossFilterService);
        
        // ShoppingListController.$inject = ['ShoppingListService'];
        // function ShoppingListController(ShoppingListService) {
        //   var list = this;
        
        //   list.items = ShoppingListService.getItems();
        
        //   list.itemName = "";
        //   list.itemQuantity = "";
        
        //   list.addItem = function () {
        //     ShoppingListService.addItem(list.itemName, list.itemQuantity);
        //   }
        
        //   list.removeItem = function (itemIndex) {
        //     ShoppingListService.removeItem(itemIndex);
        //   };
        // }
        
        
        // ShoppingListService.$inject = ['$q', 'WeightLossFilterService']
        // function ShoppingListService($q, WeightLossFilterService) {
        //   var service = this;
        
          // List of shopping items
        //   var items = [];
        
          // service.addItem = function (name, quantity) {
          //   var promise = WeightLossFilterService.checkName(name);
          //
          //   promise.then(function (response) {
          //     var nextPromise = WeightLossFilterService.checkQuantity(quantity);
          //
          //     nextPromise.then(function (result) {
          //       var item = {
          //         name: name,
          //         quantity: quantity
          //       };
          //       items.push(item);
          //     }, function (errorResponse) {
          //       console.log(errorResponse.message);
          //     });
          //   }, function (errorResponse) {
          //     console.log(errorResponse.message);
          //   });
          // };
        
        
          // service.addItem = function (name, quantity) {
          //   var promise = WeightLossFilterService.checkName(name);
          //
          //   promise
          //   .then(function (response) {
          //     return WeightLossFilterService.checkQuantity(quantity);
          //   })
          //   .then(function (response) {
          //     var item = {
          //       name: name,
          //       quantity: quantity
          //     };
          //     items.push(item);
          //   })
          //   .catch(function (errorResponse) {
          //     console.log(errorResponse.message);
          //   });
          // };
        
        
        //   service.addItem = function (name, quantity) {
        //     var namePromise = WeightLossFilterService.checkName(name);
        //     var quantityPromise = WeightLossFilterService.checkQuantity(quantity);
        
        //     $q.all([namePromise, quantityPromise]).
        //     then(function (response) {
        //       var item = {
        //         name: name,
        //         quantity: quantity
        //       };
        //       items.push(item);
        //     })
        //     .catch(function (errorResponse) {
        //       console.log(errorResponse.message);
        //     });
        //   };
        
        //   service.removeItem = function (itemIndex) {
        //     items.splice(itemIndex, 1);
        //   };
        
        //   service.getItems = function () {
        //     return items;
        //   };
        // }
        
        
        // WeightLossFilterService.$inject = ['$q', '$timeout']
        // function WeightLossFilterService($q, $timeout) {
        //   var service = this;
        
        //   service.checkName = function (name) {
        //     var deferred = $q.defer();
        
        //     var result = {
        //       message: ""
        //     };
        
        //     $timeout(function () {
        //       // Check for cookies
        //       if (name.toLowerCase().indexOf('cookie') === -1) {
        //         deferred.resolve(result)
        //       }
        //       else {
        //         result.message = "Stay away from cookies, Yaakov!";
        //         deferred.reject(result);
        //       }
        //     }, 3000);
        
        //     return deferred.promise;
        //   };
        
        
        //   service.checkQuantity = function (quantity) {
        //     var deferred = $q.defer();
        //     var result = {
        //       message: ""
        //     };
        
        //     $timeout(function () {
        //       // Check for too many boxes
        //       if (quantity < 6) {
        //         deferred.resolve(result);
        //       }
        //       else {
        //         result.message = "That's too much, Yaakov!";
        //         deferred.reject(result);
        //       }
        //     }, 1000);
        
        //     return deferred.promise;
        //   };
        // }
        
        // })();
        // (function () {
        //     'use strict';
            
        //     angular.module('MenuCategoriesApp', [])
        //     .controller('MenuCategoriesController', MenuCategoriesController)
        //     .service('MenuCategoriesService', MenuCategoriesService)
        //     .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");
            
            
        //     MenuCategoriesController.$inject = ['MenuCategoriesService'];
        //     function MenuCategoriesController(MenuCategoriesService) {
        //       var menu = this;
            
        //       var promise = MenuCategoriesService.getMenuCategories();
            
        //       promise.then(function (response) {
        //         menu.categories = response.data;
        //       })
        //       .catch(function (error) {
        //         console.log("Something went terribly wrong.");
        //       });
            
        //       menu.logMenuItems = function (shortName) {
        //         var promise = MenuCategoriesService.getMenuForCategory(shortName);
            
        //         promise.then(function (response) {
        //           console.log(response.data);
        //         })
        //         .catch(function (error) {
        //           console.log(error);
        //         })
        //       };
            
        //     }
            
            
        //     MenuCategoriesService.$inject = ['$http', 'ApiBasePath']
        //     function MenuCategoriesService($http, ApiBasePath) {
        //       var service = this;
            
        //       service.getMenuCategories = function () {
        //         var response = $http({
        //           method: "GET",
        //           url: (ApiBasePath + "/categories.json")
        //         });
            
        //         return response;
        //       };
            
            
        //       service.getMenuForCategory = function (shortName) {
        //         var response = $http({
        //           method: "GET",
        //           url: (ApiBasePath + "/menu_items.json"),
        //           params: {
        //             category: shortName
        //           }
        //         });
            
        //         return response;
        //       };
            
        //     }
            
        //     })();
        // (function () {
        //     'use strict';
            
        //     angular.module('ShoppingListDirectiveApp', [])
        //     .controller('ShoppingListController1', ShoppingListController1)
        //     .controller('ShoppingListController2', ShoppingListController2)
        //     .factory('ShoppingListFactory', ShoppingListFactory)
        //     .directive('listItemDescription', ListItemDescription)
        //     .directive('listItem', ListItem);
            
            
        //     function ListItem() {
        //       var ddo = {
        //         templateUrl: 'listItem.html'
        //       };
            
        //       return ddo;
        //     }
            
            
        //     function ListItemDescription() {
        //       var ddo = {
        //         template: '{{ item.quantity }} of {{ item.name }}'
        //       };
            
        //       return ddo;
        //     }
            
            
        //     // LIST #1 - controller
        //     ShoppingListController1.$inject = ['ShoppingListFactory'];
        //     function ShoppingListController1(ShoppingListFactory) {
        //       var list = this;
            
        //       // Use factory to create new shopping list service
        //       var shoppingList = ShoppingListFactory();
            
        //       list.items = shoppingList.getItems();
            
        //       list.itemName = "";
        //       list.itemQuantity = "";
            
        //       list.addItem = function () {
        //         shoppingList.addItem(list.itemName, list.itemQuantity);
        //       }
            
        //       list.removeItem = function (itemIndex) {
        //         shoppingList.removeItem(itemIndex);
        //       };
        //     }
            
            
            // LIST #2 - controller
            // ShoppingListController2.$inject = ['ShoppingListFactory'];
            // function ShoppingListController2(ShoppingListFactory) {
            //   var list = this;
            
            //   // Use factory to create new shopping list service
            //   var shoppingList = ShoppingListFactory(3);
            
            //   list.items = shoppingList.getItems();
            
            //   list.itemName = "";
            //   list.itemQuantity = "";
            
            //   list.addItem = function () {
            //     try {
            //       shoppingList.addItem(list.itemName, list.itemQuantity);
            //     } catch (error) {
            //       list.errorMessage = error.message;
            //     }
            
            //   }
            
            //   list.removeItem = function (itemIndex) {
            //     shoppingList.removeItem(itemIndex);
            //   };
            // }
            
            
            // // If not specified, maxItems assumed unlimited
            // function ShoppingListService(maxItems) {
            //   var service = this;
            
            //   // List of shopping items
            //   var items = [];
            
            //   service.addItem = function (itemName, quantity) {
            //     if ((maxItems === undefined) ||
            //         (maxItems !== undefined) && (items.length < maxItems)) {
            //       var item = {
            //         name: itemName,
            //         quantity: quantity
            //       };
            //       items.push(item);
            //     }
            //     else {
            //       throw new Error("Max items (" + maxItems + ") reached.");
            //     }
            //   };
            
            //   service.removeItem = function (itemIndex) {
            //     items.splice(itemIndex, 1);
            //   };
            
            //   service.getItems = function () {
            //     return items;
            //   };
            // }
            
            
            // function ShoppingListFactory() {
            //   var factory = function (maxItems) {
            //     return new ShoppingListService(maxItems);
            //   };
            
            //   return factory;
            // }
            
            // })();
            // (function () {
            //     'use strict';
                
            //     angular.module('ShoppingListComponentApp', [])
            //     .controller('ShoppingListController', ShoppingListController)
            //     .factory('ShoppingListFactory', ShoppingListFactory)
            //     .component('shoppingList', {
            //       templateUrl: 'shoppingList.html',
            //       controller: ShoppingListComponentController,
            //       bindings: {
            //         items: '<',
            //         myTitle: '@title',
            //         onRemove: '&'
            //       }
            //     });
                
            //     ShoppingListComponentController.$inject = ['$element']
            //     function ShoppingListComponentController($element) {
            //       var $ctrl = this;
            //       var totalItems;
                
            //       $ctrl.cookiesInList = function () {
            //         for (var i = 0; i < $ctrl.items.length; i++) {
            //           var name = $ctrl.items[i].name;
            //           if (name.toLowerCase().indexOf("cookie") !== -1) {
            //             return true;
            //           }
            //         }
                
            //         return false;
            //       };
                
            //       $ctrl.remove = function (myIndex) {
            //         $ctrl.onRemove({ index: myIndex });
            //       };
                
            //       $ctrl.$onInit = function () {
            //         totalItems = 0;
            //       };
                
            //       $ctrl.$onChanges = function (changeObj) {
            //         console.log("Changes: ", changeObj);
            //       }
                
            //       $ctrl.$doCheck = function () {
            //         if ($ctrl.items.length !== totalItems) {
            //           console.log("# of items changed. Checking for Cookies!");
            //           totalItems = $ctrl.items.length;
            //           if ($ctrl.cookiesInList()) {
            //             console.log("Oh, NO! COOKIES!!!!!");
            //             var warningElem = $element.find('div.error');
            //             warningElem.slideDown(900);
            //           }
            //           else {
            //             console.log("No cookies here. Move right along!");
            //             var warningElem = $element.find('div.error');
            //             warningElem.slideUp(900);
            //           }
            //         }
            //       };
            //     }
                
                
            //     ShoppingListController.$inject = ['ShoppingListFactory'];
            //     function ShoppingListController(ShoppingListFactory) {
            //       var list = this;
                
            //       // Use factory to create new shopping list service
            //       var shoppingList = ShoppingListFactory();
                
            //       list.items = shoppingList.getItems();
            //       var origTitle = "Shopping List #1";
            //       list.title = origTitle + " (" + list.items.length + " items )";
                
            //       list.itemName = "";
            //       list.itemQuantity = "";
                
            //       list.addItem = function () {
            //         shoppingList.addItem(list.itemName, list.itemQuantity);
            //         list.title = origTitle + " (" + list.items.length + " items )";
            //       }
                
            //       list.removeItem = function (itemIndex) {
            //         this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
            //         shoppingList.removeItem(itemIndex);
            //         this.title = origTitle + " (" + list.items.length + " items )";
            //       };
            //     }
                
                
            //     // If not specified, maxItems assumed unlimited
            //     function ShoppingListService(maxItems) {
            //       var service = this;
                
            //       // List of shopping items
            //       var items = [];
                
            //       service.addItem = function (itemName, quantity) {
            //         if ((maxItems === undefined) ||
            //             (maxItems !== undefined) && (items.length < maxItems)) {
            //           var item = {
            //             name: itemName,
            //             quantity: quantity
            //           };
            //           items.push(item);
            //         }
            //         else {
            //           throw new Error("Max items (" + maxItems + ") reached.");
            //         }
            //       };
                
            //       service.removeItem = function (itemIndex) {
            //         items.splice(itemIndex, 1);
            //       };
                
            //       service.getItems = function () {
            //         return items;
            //       };
            //     }
                
                
            //     function ShoppingListFactory() {
            //       var factory = function (maxItems) {
            //         return new ShoppingListService(maxItems);
            //       };
                
            //       return factory;
            //     }
                
            //     })();