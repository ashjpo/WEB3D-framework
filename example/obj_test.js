

var create_obj1=function(scene,hdrTexture){
    var model_obj_name="AVP5_Standard.unity_1.obj";
    var gameobj=new MMYObject(scene);
    
    BABYLON.SceneLoader.ImportMesh("", "./home/", model_obj_name, scene, function (newMeshes, particleSystems, skeletons) {
        gameobj.set_mesh(newMeshes[0]);
        gameobj.show_ground();
        gameobj.show_axis();
        gameobj.set_position_all(new BABYLON.Vector3(1,0,1));
        gameobj.set_collision(true);

        var material_test=new MMYMaterial(scene);
        material_test.set_default_qulity("tlow");
        material_test.create_material("./home");
        if(hdrTexture){
            //material_test.set_reflectionTexture(hdrTexture);
        }
        material_test.set_main_texture("Gio_AlbedoTransparency.jpg");
        material_test.set_metallic_texture("Gio_MetallicSmoothness.jpg");
        material_test.set_bump("Gio_Normal.jpg");
        material_test.set_occlusion("Gio_AO.jpg");
        //material_test.set_main_color(new BABYLON.Color3(0.1,0.09,0.59));
        material_test.set_metallic(0.1);
        //material_test.set_roughness(1);
        gameobj.set_material(material_test);
        
        material_upgrade(material_test,"mid_l",10000,function(str){
            
        });
    })
    return gameobj;
}
//gameobj.set_position_all(new BABYLON.Vector3(3,0,0));