
/*import {Mesh_Group} from './Mesh_Group.js';
import {World_Axis} from './World_Axis.js';

import {Mesh_Axis} from './Mesh_Axis.js';




export {Mesh_Group,World_Axis,Mesh_Axis};*/

addScript("/WEB3D/main/test/Base_Tools.js");
addScript("/WEB3D/main/test/Mesh_Group.js");

addScript("/WEB3D/main/test/axis/Axis.js");
addScript("/WEB3D/main/test/axis/World_Axis.js");
addScript("/WEB3D/main/test/axis/Mesh_Axis.js");

addScript("/WEB3D/main/test/ground/Ground.js");
addScript("/WEB3D/main/test/ground/World_Ground.js");
addScript("/WEB3D/main/test/ground/Mesh_Ground.js");



addScript("/WEB3D/main/test/object/MMYObject.js");
addScript("/WEB3D/main/test/object/MMYObject_Group.js");


addScript("/WEB3D/main/test/camera/Universal_Camera.js");
addScript("/WEB3D/main/test/camera/Arc_Rotate_Camera.js");

addScript("/WEB3D/main/test/material/MMYMaterial.js");
addScript("/WEB3D/main/test/material/MMYMaterial_Change.js");


//gui
addScript("/WEB3D/main/test/gui/MMYButton.js");
addScript("/WEB3D/main/test/gui/MMYLabel.js");
addScript("/WEB3D/main/test/gui/MMYRadio.js");
addScript("/WEB3D/main/test/gui/MMYChecked.js");
addScript("/WEB3D/main/test/gui/MMYSlider.js");
addScript("/WEB3D/main/test/gui/MMYText_Pointer.js");
addScript("/WEB3D/main/test/gui/MMYButton_Pointer.js");
addScript("/WEB3D/main/test/gui/MMYImage_Pointer.js");

//TEST可删除
addScript("./obj_test.js");

addScript("/WEB3D/main/test/World.js");


function addScript(url){
	/*var script = document.createElement('script');
	script.setAttribute('type','text/javascript');
	script.setAttribute('src',url);
    document.getElementsByTagName('head')[0].appendChild(script);*/
    document.write("<script type='text/javascript' src='"+url+"'></script>");
}