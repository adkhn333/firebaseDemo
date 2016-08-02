// Initialize Firebase
var config = {
    apiKey: "AIzaSyAdggLm_P1I2wx7-5ECgzPLBPOPhsq2VTI",
    authDomain: "project-5218220492009865828.firebaseapp.com",
    databaseURL: "https://project-5218220492009865828.firebaseio.com",
    storageBucket: "project-5218220492009865828.appspot.com",
};
firebase.initializeApp(config);
var database = firebase.database();
var app = angular.module('app', ['firebase']);