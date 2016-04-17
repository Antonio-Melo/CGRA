/**
 * MyTable
 * @constructor
 */
 function MyTable(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();



    this.defaultMaterial = new CGFappearance(this.scene);


 	this.woodMaterial = new CGFappearance(this.scene);
 	this.woodMaterial.setAmbient(0.1, 0.1, 0.1, 1);
 	this.woodMaterial.setDiffuse(0.6, 0.3, 0.0, 1);
 	this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1);


 	this.metallicMaterial = new CGFappearance(this.scene);
 	this.metallicMaterial.setAmbient(0.1, 0.1, 0.1, 1);
 	this.metallicMaterial.setDiffuse(0, 0, 0, 1);
 	this.metallicMaterial.setSpecular(1, 1, 1, 1);


 	this.tableAppearance = new CGFappearance(this.scene);
 	this.tableAppearance.loadTexture("\\resources\\images\\table.png");

 };

 MyTable.prototype = Object.create(CGFobject.prototype);
 MyTable.prototype.constructor = MyTable;

 MyTable.prototype.display = function() {

   
 	// legs
    this.metallicMaterial.apply();

 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top
    this.tableAppearance.apply();
    
 	this.scene.pushMatrix();
 	this.scene.translate(0, 3.5, 0);
 	this.scene.scale(5, 0.3, 3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	 this.defaultMaterial.apply();
 }
