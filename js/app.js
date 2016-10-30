angular.module("provinceApp",[])
.controller("provinceController",['Province',provinceController])
.service("Province",Province)
.directive("provinceCard",provinceCard);
