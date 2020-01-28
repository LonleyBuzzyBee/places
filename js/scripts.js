function Places() {
    this.logItems = [];
    this.currentId = 0;
}

function LogItem(name, location, landmark, note) {
    this.name  = name;
    this.location = location;
    this.landmark = landmark;
    this.note = note;
}

Places.prototype.addPlace = function(newPlace) {
    this.logItems.push(newPlace);
    console.log(newPlace);
}

LogItem.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}
var places = new Places();

function displaylogdetails(placesToDisplay) {
	
}

$(document).ready(function() {
    $("form#place-log").submit(function(event){
        var logName = $("input#name").val();
        var logLocation = $("input#location").val();
        var logLandmark = $("input#landmark").val();
        var logNote = $("input#note").val();
        var newPlace = new LogItem(logName, logLocation, logLandmark, logNote)
        places.logItems.push(newPlace);
        console.log(places)
        console.log(newPlace);
        $("#result").append("<ul id=" + newPlace + ">" + newPlace.name + (" ") + newPlace.location + "</p>" + "<ul id=" + newPlace + ">" + "<li>" + newPlace.location + "</li>" + "<li>" + newPlace.landmark + "</li>" + "<li>" + newPlace.note + "</li>");
        // alert(Places);
        event.preventDefault();
    });
}); 