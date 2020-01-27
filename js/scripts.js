function Places() {
    this.logItems = [];
    this.currentId = 0;
}

function LogItem(location, landmark, note) {
    this.location = location;
    this.landmark = landmark;
    this.note = note;

}
LogItem.prototype.addPlace = function(logItem) {
    this.logItems.push(logItem)
}

Logitems.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

$(document).ready(function() {
event.preventDefault();

}); 