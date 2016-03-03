/**
 * myTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

function myTable(scene, tableHeight, tableLength, tableWidth) {
	CGFobject.call(this,scene);
    
    this.unitCube = new MyUnitCubeQuad(this.scene);
    
    
    this.tableThickness = 0.3;
    this.tableHeight = tableHeight;
    this.tableLength = tableLength;
    this.tableWidth = tableWidth;
    this.legLength = tableLength / 20;
    this.legWidth = tableWidth / 10;

    this.xTranslate = this.tableLength/2 - this.legLength/2;
    this.zTranslate = this.tableWidth/2 - this.legWidth/2;
};


myTable.prototype = Object.create(CGFobject.prototype);
myTable.prototype.constructor=myTable;


myTable.prototype.display = function() {

	this.scene.pushMatrix();
	this.scene.translate(-this.xTranslate, 0, this.zTranslate);
	this.tableLegMatrix();
	this.unitCube.display();

	
	this.useSavedMatrix();

	this.scene.translate(this.xTranslate, 0, this.zTranslate);
	this.tableLegMatrix();
	this.unitCube.display();


	this.useSavedMatrix();
	
	this.scene.translate(-this.xTranslate, 0, -this.zTranslate);
	this.tableLegMatrix();
	this.unitCube.display();


	this.useSavedMatrix();
	
	this.scene.translate(this.xTranslate, 0, -this.zTranslate);
	this.tableLegMatrix();
	this.unitCube.display();


	this.useSavedMatrix();
	this.tableTopMatrix();
	this.unitCube.display();

	this.scene.popMatrix();
}


myTable.prototype.tableLegMatrix = function() {

	this.scene.scale(this.legLength, this.tableHeight, this.legWidth);
	this.scene.translate(0, 0.5, 0);
}



myTable.prototype.tableTopMatrix = function() {

	this.scene.translate(0, this.tableHeight, 0);
	this.scene.scale(this.tableLength, this.tableThickness, this.tableWidth);
	this.scene.translate(0, 0.5, 0);
}


myTable.prototype.useSavedMatrix = function() {

	this.scene.popMatrix();
	this.scene.pushMatrix();
}