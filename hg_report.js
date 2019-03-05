"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Bryan Vargas
   Date:   02/28/19
   
   Filename: hg_report.js
	
*/
// The Base variable below contains a table format containing information about games.
var gameReport = "<h1>" + itemTitle + "</h1>" + "<h2>By:" + itemManufacturer + "</h2><img src='hg_" + itemID + ".png' alt='" + itemID + "'id='gameImg'/> <table> <tr><th>Product ID</th><td>" + itemID + "</td></tr>" + "<tr><th>ListPrice</th><td>" + itemPrice + "</td></tr>" + "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>" + "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>" + "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>" + "<tr><th>Release</th><td>" + itemRelease + "</td></tr>" + "</table>" + itemSummary;
// The gameReport variable informartion will be inserted into the article element.
document.getElementsByTagName("article")[0].innerHTML = gameReport;

// The base variable "ratingSum" will calculate the number of stars to render.
// ratingcount variable is the length of the ratings array.
var ratingSum = 0;
var ratingCount = ratings.length;

//The for loop will create the number of ratings that the article will render.
for (var i = 0; i < ratingCount; i++) {
    ratingSum += ratings[i];
}

//The ratingsAvg variable creates the average rating from all the reviews.
var ratingsAvg = ratingSum / ratingCount;

//The rating report creates the header for the review section.
var ratingReport = "<h1>Customer Review</h1><h2>" + ratingsAvg + "out of 5 stars (" + ratingCount + " reviews)</h2>";
//The for loop will render three particular reviews onto the page.
for (var i = 0; i <= 2; i++) {
    //An entire table format will structure the  review asides.
    ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>" + "<tr><th>Review Dates</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";
    //this for loop will render an image with the number of stars that the review rated the game with.
    for (var j = 1; j <= 5; j++) {
        ratingReport += "<img src='hg_star.png'>";
    }
    //This closes the review aside
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}
//Everything will now be inserted into the article.
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;