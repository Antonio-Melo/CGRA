/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

	this.patchSlices = 1 / this.slices;
	this.patchStacks = 1 / this.stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
	
	this.vertices = new Array();
	this.indices = new Array();
	this.normals = new Array();
	this.texCoords = new Array();

	
	var ang = (2*Math.PI) / this.slices;
	var vert = 0;

	var s = 0;
	var t = 0;
	
	for (k = 0; k < this.stacks; k++) {

		s = 0;

		for (i = 0; i < 2*Math.PI; i += ang) {

			this.vertices.push(Math.cos(i), Math.sin(i), (k + 1.0)/this.stacks);
			this.vertices.push(Math.cos(i), Math.sin(i), k/this.stacks);
			this.normals.push(Math.cos((i + i + ang)/2), Math.sin((i + i + ang)/2), 0.0);
			this.normals.push(Math.cos((i + i + ang)/2), Math.sin((i + i + ang)/2), 0.0);
			this.texCoords.push(s, t + this.patchStacks);
			this.texCoords.push(s, t);


			this.vertices.push(Math.cos(i+ang), Math.sin(i+ang), (k + 1.0)/this.stacks);
			this.vertices.push(Math.cos(i+ang), Math.sin(i+ang), k/this.stacks);
			this.normals.push(Math.cos((i + i + ang)/2), Math.sin((i + i + ang)/2), 0.0);
			this.normals.push(Math.cos((i + i + ang)/2), Math.sin((i + i + ang)/2), 0.0);
			this.texCoords.push(s + this.patchSlices, t + this.patchStacks);
			this.texCoords.push(s + this.patchSlices, t);


			this.indices.push(vert++);
			this.indices.push(vert++);
			this.indices.push(vert++);
			this.indices.push(vert--);
			this.indices.push(vert--);
			this.indices.push(vert++);
			vert += 2;

			s += this.patchSlices;
		}

		t += this.patchStacks;
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
