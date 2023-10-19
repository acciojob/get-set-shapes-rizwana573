//complete this code
class Rectangle {
	constructor(width, height){
		this.width=width;
		this.height=height;
	}
	getWidth(){
		return this.width;
	}
	setWidth(newWidth){
		this.width= newWidth;
	}
	getHeight(){
		return this.height;
	}
	setWidth(newHeight){
		this.height= newHeight;
	}
	getArea(){
		return this.width*this.height;
	}
	
}

class Square extends Rectangle {
	getPerimeter(){
		console.log(4*this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
