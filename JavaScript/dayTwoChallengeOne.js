//BRONZE
var myName = "Jean-Pierre";
var friendName = "Jo";

var myNameStr = myName.length;
var friendNameStr = friendName.length;
console.log("The name lengths are: " + myName +" (" + myNameStr +") & " + friendName +" (" + friendNameStr +")");


// SILVER
if (myNameStr >= friendNameStr){
    console.log(myName + "'s is the longer name!")
} else if (myNameStr <= friendNameStr){
    console.log(friendName + "'s is the longer name!");
} else {
    console.log("Both names have the same character count.");
}


// GOLD
if (myNameStr >= friendNameStr){
    var countDifference = myNameStr - friendNameStr;
    console.log(myName + "'s is the longer name by " + countDifference + " character(s)!")
} else if (myNameStr <= friendNameStr){
    var countDifference = friendNameStr - myNameStr;
    console.log(friendName + "'s is the longer name by " + countDifference + " character(s)!");
} else {
    console.log("Both names have the same character count.");
}