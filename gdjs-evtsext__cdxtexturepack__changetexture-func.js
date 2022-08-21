
if (typeof gdjs.evtsExt__CDXTexturePack__ChangeTexture !== "undefined") {
  gdjs.evtsExt__CDXTexturePack__ChangeTexture.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CDXTexturePack__ChangeTexture = {};

gdjs.evtsExt__CDXTexturePack__ChangeTexture.conditionTrue_0 = {val:false};
gdjs.evtsExt__CDXTexturePack__ChangeTexture.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CDXTexturePack__ChangeTexture.userFunc0x7e10d8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var object = eventsFunctionContext.getArgument("Object"); //get object from scene variable
var anim = 0 //get animation number from scene variable
var url = eventsFunctionContext.getArgument("URL"); // get the url from scene variable

runtimeScene.myCallback = function(loader, resources){ // loader and ressources come from PIXI.Loader.shared

    var mySprite= resources[eventsFunctionContext.getArgument("resname")]; //get the image from PIXI ressources
    
    var game = runtimeScene.getGame(); //get the game currently running
    
    var object_texture_image = runtimeScene.getObjects(object); // Get all the objects called "My_picture"
    
    var object_texture_image_renderer = object_texture_image[anim].getRendererObject(); // get the frist (and unique) objet called "My_picture" and get this renderer (PIXI sprite)

    object_texture_image_renderer.texture = mySprite.texture; // change the texture in renderer (PIXI sprite)
};

PIXI.Loader.shared.reset(); // reset the loader because if you press many times M key the ressources "Sprite_Logo_GDevelop" exist and crash your application
PIXI.Loader.shared.add(eventsFunctionContext.getArgument("resname"), url);  // here change the URL for get you own images from web !
PIXI.Loader.shared.load(runtimeScene.myCallback); // Use callback for load the new image
};
gdjs.evtsExt__CDXTexturePack__ChangeTexture.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CDXTexturePack__ChangeTexture.userFunc0x7e10d8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CDXTexturePack__ChangeTexture.func = function(runtimeScene, Object, URL, resname, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Object") return Object;
if (argName === "URL") return URL;
if (argName === "resname") return resname;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CDXTexturePack__ChangeTexture.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__CDXTexturePack__ChangeTexture.registeredGdjsCallbacks = [];