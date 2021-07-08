var milkImg = loadImage('images/Milk.png');

class Food{
constructor(){
    this.foodStock;
    this.lastFed;
}

display(){
    if(this.foodStock>0){
        image(milkImg,400,50,50,50);
    }
}

getFoodStock(){

}

updateFoodStock(){

}

deductFood(){

}

bedroom(){
background(bedroom)
}

garden(){
    background(garden)
}

washroom(){
    background(washroom)
}
}

