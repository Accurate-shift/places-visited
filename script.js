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
