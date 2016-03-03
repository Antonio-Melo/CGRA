/**
 * myTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

function myTable(scene) {
	CGFobject.call(this,scene);
    
    this.unitCube = new MyUnitCubeQuad(this.scene);
};


myTable.prototype = Object.create(CGFobject.prototype);
myTable.prototype.constructor=myTable;


myTable.prototype.display = function() {
	this.scene.translate(2.6,0,2);
	
	this.scene.pushMatrix();
	this.scene.translate(-2.3, 0, 1.3);
	this.tableLegMatrix();
	this.unitCube.display();

	
	this.useSavedMatrix();

	this.scene.translate(2.3, 0, 1.3);
	this.tableLegMatrix();
	this.unitCube.display();


	this.useSavedMatrix();
	
	this.scene.translate(-2.3, 0, -1.3);
	this.tableLegMatrix();
	this.unitCube.display();


	this.useSavedMatrix();
	
	this.scene.translate(2.3, 0, -1.3);
	this.tableLegMatrix();
	this.unitCube.display();


	this.useSavedMatrix();
	this.tableTopMatrix();
	this.unitCube.display();

	this.scene.popMatrix();

}


myTable.prototype.tableLegMatrix = function() {

	this.scene.scale(0.3, 3.5, 0.3);
	this.scene.translate(0, 0.5, 0);
}



myTable.prototype.tableTopMatrix = function() {

	this.scene.translate(0, 3.5, 0);
	this.scene.scale(5, 0.3, 3);
	this.scene.translate(0, 0.5, 0);
}


myTable.prototype.useSavedMatrix = function() {

	this.scene.popMatrix();
	this.scene.pushMatrix();
}