function Flower(x, y) {
	this.x = x; 
	this.y = y; 

	this.show = function(){
		fill(255, 0 ,200); 
		ellipse(this.x, this.y, 50, 50);
	}

}

 