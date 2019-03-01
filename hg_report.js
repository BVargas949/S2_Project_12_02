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
var gameReport = "<h1>" + itemTitle + "</h1>" + "<h2>By:" + itemManufacturer + "</h2>" + "<img scr='hg_" + itemID + "'.png/>" + "<table>" + "<tr><th>Product ID</th><td>" + itemID + "</td></tr>" + "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>" + "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>" + "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>" + "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>" + "<tr><th>Release</th><td>" + itemRelease + "</td></tr>" + "/<table>" + "summary";