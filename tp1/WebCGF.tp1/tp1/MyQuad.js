/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyQuad(scene) {
	CGFobject.call(this,scene);
	this.initBuffers();
};

MyQuad.prototype = Object.create(CGFobject.prototype);
MyQuad.prototype.constructor=MyQuad;

MyQuad.prototype.initBuffers = function () {
	this.vertices = [
            0.5,-0.5,0.5,
            0.5,0.5,0.5,
            -0.5,-0.5,0.5,
            -0.5,0.5,0.5
			];

	this.indices = [
            2,0,1,
            1,3,2
			   ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};