function Ship() {
	this.x = width/2; 

	this.show = function(){
		fill(255); 
		rectMode(CENTER);
		rect(this.x, height-20, 50, 50);
		//triangle(height-100, height-100, height-50, height-50, height-200,height-200)
	}

	this.move = function(dir){
		this.x += dir*5;
	}

}

 