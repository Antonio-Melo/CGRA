/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

function MyUnitCube(scene) {
    CGFobject.call(this,scene);
    this.initBuffers();
};


MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
    this.vertices = [
        //Vertices com y <0 
        0.5,-0.5,0.5,
        0.5,-0.5,-0.5,
        -0.5,-0.5,0.5,
        -0.5,-0.5,-0.5,
        //Vertices com y >0
        0.5,0.5,0.5,
        0.5,0.5,-0.5,
        -0.5,0.5,0.5,
        -0.5,0.5,-0.5
    ];
    

    this.indices = [
        //Base inferior
        0,1,2,
        1,3,2,
        //Base lateral x>0
        5,4,0,
        0,1,5,
        //Base lateral x<0
        2,3,7,
        7,6,2,
        //Base frente
        6,2,0,
        0,4,6,
        //Base trás
        3,1,5,
        5,7,3,
        //Base superior
        7,6,5,
        4,5,6  
	];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};