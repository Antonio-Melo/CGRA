/**
 * myFloor
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function myFloor(scene) {
	CGFobject.call(this,scene);

    this.cube = new MyUnitCubeQuad(this.scene);
};

myFloor.prototype = Object.create(CGFobject.prototype);
myFloor.prototype.constructor=myFloor;

myFloor.prototype.display = function (){
	var deg2rad=Math.PI/180.0;
	var a_rad=90.0*deg2rad;

    this.scene.pushMatrix();
    this.scene.translate(4,0,3);
	this.scene.scale(8,0.1,6);
	

	this.cube.display();
	this.scene.popMatrix();

}
