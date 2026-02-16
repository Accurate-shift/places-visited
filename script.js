// workin logic
function Place(location, landmarks, timeOfYear, notes){
    this.location;
    this.landmarks;
    this.timeOfYear;
    this.notes;
    this = Place.assingId();
}
// assigning the ids
Place.currentId = 0;
Place.assignId = function(){
Place.currentId +=1;
return Place.currentId;
};
// adding and viewing logic
Place.prototype.getSummary = function(){
    return `${this.location}(${this.timeOfYear})`;
};
Place.prototype.getDetails = funtion(){
    return`
            Location:${this.location}
            Time of Year:${this.timeOfYear}
            Landmarks:${this.landmarks}
            Notes:${this.notes} `;
};
Place.prototype.addLandmark = function(landmark){
    this.landmark.push(landmark);
};
