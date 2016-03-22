/**
 * Created by Tal on 17/03/2016.
 */
var app = angular.module("store", ['ngRoute']);

app.controller("acsController", function(){
    this.bags = bagList;
    this.necklaces = necklaceList;
    this.sunglasses = sunglassList;

    this.bags.forEach(function(item, index, nums){
        item.isPurchaseable();
    });
    this.necklaces.forEach(function(item, index, nums){
        item.isPurchaseable();
    });
    this.sunglasses.forEach(function(item, index, nums){
        item.isPurchaseable();
    });
});

app.controller("tabController", function(){
    this.tab = 1;

    this.selectTab = function(tabi){
      this.tab = tabi;
    };

    this.isTabSelected = function(tabi){
      return this.tab === tabi;
    };

});

function accessory(name, type, price, amount, description, image){
    this.name = name;
    this.type = type;
    this.price = price;
    this.amount = amount;
    this.canPurchase = false;
    this.description = description;
    this.image = image;

    if(typeof accessory.prototype.isPurchaseable != "function")
    {
        accessory.prototype.isPurchaseable = function(){
            if(this.amount > 0)
                this.canPurchase = true;
            else
                this.canPurchase = false;
        };
    }
}


//========================================================================
//========================================================================

var bagList = [];
bagList.push(new accessory("Black bag", "Big Bag", 20, 25,
    "A great bag in a good price!", "images/bag.jpg"));
bagList.push(new accessory("Cream bag", "Cream Bag", 18, 12,
    "The new cream bag is the best", "images/bag.jpg"));
bagList.push(new accessory("Bourdeaux bag", "Bourdeaux Bag", 25, 15,
"Very comfotable and good-quality bag!", "images/bag.jpg"));
//========================================================================
//========================================================================
var necklaceList = [];
necklaceList.push(new accessory("Gold Necklace", "Gold Necklace", 55, 3,
    "Our favourite! good-quality and in sale now!", "images/necklace.jpg"));
necklaceList.push(new accessory("Silver Necklace", "Silver Necklace", 50, 7,
    "Great for a present, very good-looking", "css/Cake/Chocolate-birthday.jpg"));
//========================================================================
//========================================================================
var sunglassList = [];
sunglassList.push(new accessory("Sunglass", "Sunglass", 22.7, 10,
    "Very good styling", "css/Pie/frenchPie.jpg"));
sunglassList.push(new accessory("Lemon Pie", "50% whole wheat", 20.6, 4,
    "This lemon pie will make you smile", "css/Pie/LemonPie.jpg"));


app.config(function($routeProvider) {
    $routeProvider
        // route for the bags page
        .when('/bags', {
            templateUrl : 'bags.html',
            controller  : 'acsController',
            controllerAs: 'acs'
        })

        // route for the necklaces page
        .when('/necklaces', {
            templateUrl : 'necklace.html',
            controller  : 'acsController',
            controllerAs: 'acs'
        })

        // route for the sunglasses page
        .when('/sunglasses', {
            templateUrl : 'sunglasses.html',
            controller  : 'acsController',
            controllerAs: 'acs'
        });
});
