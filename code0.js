gdjs.Weather_32AppletCode = {};
gdjs.Weather_32AppletCode.GDcurrentObjects1= [];
gdjs.Weather_32AppletCode.GDcurrentObjects2= [];
gdjs.Weather_32AppletCode.GDcurrentObjects3= [];
gdjs.Weather_32AppletCode.GDcurrentObjects4= [];
gdjs.Weather_32AppletCode.GDwindspdObjects1= [];
gdjs.Weather_32AppletCode.GDwindspdObjects2= [];
gdjs.Weather_32AppletCode.GDwindspdObjects3= [];
gdjs.Weather_32AppletCode.GDwindspdObjects4= [];
gdjs.Weather_32AppletCode.GDcurtempObjects1= [];
gdjs.Weather_32AppletCode.GDcurtempObjects2= [];
gdjs.Weather_32AppletCode.GDcurtempObjects3= [];
gdjs.Weather_32AppletCode.GDcurtempObjects4= [];
gdjs.Weather_32AppletCode.GDWSwt2Objects1= [];
gdjs.Weather_32AppletCode.GDWSwt2Objects2= [];
gdjs.Weather_32AppletCode.GDWSwt2Objects3= [];
gdjs.Weather_32AppletCode.GDWSwt2Objects4= [];
gdjs.Weather_32AppletCode.GDWSwtObjects1= [];
gdjs.Weather_32AppletCode.GDWSwtObjects2= [];
gdjs.Weather_32AppletCode.GDWSwtObjects3= [];
gdjs.Weather_32AppletCode.GDWSwtObjects4= [];
gdjs.Weather_32AppletCode.GDAQISwitchObjects1= [];
gdjs.Weather_32AppletCode.GDAQISwitchObjects2= [];
gdjs.Weather_32AppletCode.GDAQISwitchObjects3= [];
gdjs.Weather_32AppletCode.GDAQISwitchObjects4= [];
gdjs.Weather_32AppletCode.GDAQICoObjects1= [];
gdjs.Weather_32AppletCode.GDAQICoObjects2= [];
gdjs.Weather_32AppletCode.GDAQICoObjects3= [];
gdjs.Weather_32AppletCode.GDAQICoObjects4= [];
gdjs.Weather_32AppletCode.GDAQINO2Objects1= [];
gdjs.Weather_32AppletCode.GDAQINO2Objects2= [];
gdjs.Weather_32AppletCode.GDAQINO2Objects3= [];
gdjs.Weather_32AppletCode.GDAQINO2Objects4= [];
gdjs.Weather_32AppletCode.GDAQIO3Objects1= [];
gdjs.Weather_32AppletCode.GDAQIO3Objects2= [];
gdjs.Weather_32AppletCode.GDAQIO3Objects3= [];
gdjs.Weather_32AppletCode.GDAQIO3Objects4= [];
gdjs.Weather_32AppletCode.GDAQISO2Objects1= [];
gdjs.Weather_32AppletCode.GDAQISO2Objects2= [];
gdjs.Weather_32AppletCode.GDAQISO2Objects3= [];
gdjs.Weather_32AppletCode.GDAQISO2Objects4= [];
gdjs.Weather_32AppletCode.GDAQIPM2_955Objects1= [];
gdjs.Weather_32AppletCode.GDAQIPM2_955Objects2= [];
gdjs.Weather_32AppletCode.GDAQIPM2_955Objects3= [];
gdjs.Weather_32AppletCode.GDAQIPM2_955Objects4= [];
gdjs.Weather_32AppletCode.GDAQIPM10Objects1= [];
gdjs.Weather_32AppletCode.GDAQIPM10Objects2= [];
gdjs.Weather_32AppletCode.GDAQIPM10Objects3= [];
gdjs.Weather_32AppletCode.GDAQIPM10Objects4= [];
gdjs.Weather_32AppletCode.GDcpObjects1= [];
gdjs.Weather_32AppletCode.GDcpObjects2= [];
gdjs.Weather_32AppletCode.GDcpObjects3= [];
gdjs.Weather_32AppletCode.GDcpObjects4= [];
gdjs.Weather_32AppletCode.GDverObjects1= [];
gdjs.Weather_32AppletCode.GDverObjects2= [];
gdjs.Weather_32AppletCode.GDverObjects3= [];
gdjs.Weather_32AppletCode.GDverObjects4= [];
gdjs.Weather_32AppletCode.GDCIDObjects1= [];
gdjs.Weather_32AppletCode.GDCIDObjects2= [];
gdjs.Weather_32AppletCode.GDCIDObjects3= [];
gdjs.Weather_32AppletCode.GDCIDObjects4= [];
gdjs.Weather_32AppletCode.GDimgObjects1= [];
gdjs.Weather_32AppletCode.GDimgObjects2= [];
gdjs.Weather_32AppletCode.GDimgObjects3= [];
gdjs.Weather_32AppletCode.GDimgObjects4= [];

gdjs.Weather_32AppletCode.conditionTrue_0 = {val:false};
gdjs.Weather_32AppletCode.condition0IsTrue_0 = {val:false};
gdjs.Weather_32AppletCode.condition1IsTrue_0 = {val:false};
gdjs.Weather_32AppletCode.condition2IsTrue_0 = {val:false};
gdjs.Weather_32AppletCode.condition3IsTrue_0 = {val:false};
gdjs.Weather_32AppletCode.conditionTrue_1 = {val:false};
gdjs.Weather_32AppletCode.condition0IsTrue_1 = {val:false};
gdjs.Weather_32AppletCode.condition1IsTrue_1 = {val:false};
gdjs.Weather_32AppletCode.condition2IsTrue_1 = {val:false};
gdjs.Weather_32AppletCode.condition3IsTrue_1 = {val:false};


gdjs.Weather_32AppletCode.eventsList0 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AQICo"), gdjs.Weather_32AppletCode.GDAQICoObjects1);
gdjs.copyArray(runtimeScene.getObjects("AQINO2"), gdjs.Weather_32AppletCode.GDAQINO2Objects1);
gdjs.copyArray(runtimeScene.getObjects("AQIO3"), gdjs.Weather_32AppletCode.GDAQIO3Objects1);
gdjs.copyArray(runtimeScene.getObjects("AQIPM10"), gdjs.Weather_32AppletCode.GDAQIPM10Objects1);
gdjs.copyArray(runtimeScene.getObjects("AQIPM2_5"), gdjs.Weather_32AppletCode.GDAQIPM2_955Objects1);
gdjs.copyArray(runtimeScene.getObjects("AQISO2"), gdjs.Weather_32AppletCode.GDAQISO2Objects1);
gdjs.copyArray(runtimeScene.getObjects("AQISwitch"), gdjs.Weather_32AppletCode.GDAQISwitchObjects1);
gdjs.copyArray(runtimeScene.getObjects("curtemp"), gdjs.Weather_32AppletCode.GDcurtempObjects1);
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.Weather_32AppletCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("windspd"), gdjs.Weather_32AppletCode.GDwindspdObjects1);
{gdjs.evtTools.network.sendAsyncRequest("http://cdxweather.cdxteam.xyz/", "", "GET", "", runtimeScene.getVariables().get("image"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.network.sendAsyncRequest("https://api.ipify.org", "", "GET", "", runtimeScene.getVariables().get("ip"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loadwtr");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "image");
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDwindspdObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDwindspdObjects1[i].setShadow("0;0;0", 2, 12, 90);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurtempObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurtempObjects1[i].setShadow("0;0;0", 2, 12, 90);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQISwitchObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQISwitchObjects1[i].setShadow("0;0;0", 2, 12, 90);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQICoObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQICoObjects1[i].setShadow("0;0;0", 2, 12, 90);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQINO2Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQINO2Objects1[i].setShadow("0;0;0", 2, 12, 90);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIO3Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIO3Objects1[i].setShadow("0;0;0", 2, 12, 90);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQISO2Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQISO2Objects1[i].setShadow("0;0;0", 2, 12, 90);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIPM2_955Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIPM2_955Objects1[i].setShadow("0;0;0", 2, 12, 90);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIPM10Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIPM10Objects1[i].setShadow("0;0;0", 2, 12, 90);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurtempObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurtempObjects1[i].showShadow(true);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDwindspdObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDwindspdObjects1[i].showShadow(true);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQISwitchObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQISwitchObjects1[i].showShadow(true);
}
}{gdjs.evtsExt__URLFN__PlaySNDLP.func(runtimeScene, "https://firebasestorage.googleapis.com/v0/b/test-server-4a8ec.appspot.com/o/%5BYT2mp3.info%5D%20-%20Alexander%20Tarasov%20-%20November%20(Original%20mix).mp3?alt=media&token=c6c9496c-4545-4b9f-b59c-429d0a84985a", 100, 1, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDimgObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDimgObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


};gdjs.Weather_32AppletCode.eventsList1 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "loadwtr");
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("http://api.weatherapi.com/v1/current.json?key=57fce2405e934c638e221232222108&q=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ip")) + "&aqi=yes", "", "GET", "", runtimeScene.getVariables().get("weatherunparsed"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("weatherunparsed")), runtimeScene.getVariables().get("weatherparsed"));
}}

}


{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "loadwtr");
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AQICo"), gdjs.Weather_32AppletCode.GDAQICoObjects1);
gdjs.copyArray(runtimeScene.getObjects("AQINO2"), gdjs.Weather_32AppletCode.GDAQINO2Objects1);
gdjs.copyArray(runtimeScene.getObjects("AQIO3"), gdjs.Weather_32AppletCode.GDAQIO3Objects1);
gdjs.copyArray(runtimeScene.getObjects("AQIPM10"), gdjs.Weather_32AppletCode.GDAQIPM10Objects1);
gdjs.copyArray(runtimeScene.getObjects("AQIPM2_5"), gdjs.Weather_32AppletCode.GDAQIPM2_955Objects1);
gdjs.copyArray(runtimeScene.getObjects("AQISO2"), gdjs.Weather_32AppletCode.GDAQISO2Objects1);
gdjs.copyArray(runtimeScene.getObjects("curtemp"), gdjs.Weather_32AppletCode.GDcurtempObjects1);
gdjs.copyArray(runtimeScene.getObjects("windspd"), gdjs.Weather_32AppletCode.GDwindspdObjects1);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurtempObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurtempObjects1[i].setString("Current Temp: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("weatherparsed").getChild("current").getChild("temp_f")) + "°F");
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDwindspdObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDwindspdObjects1[i].setString("Current Wind Speed: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("weatherparsed").getChild("current").getChild("gust_kph")) + "kph");
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQICoObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQICoObjects1[i].setString("Current CO: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("weatherparsed").getChild("current").getChild("air_quality").getChild("co")))));
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQINO2Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQINO2Objects1[i].setString("Current nO2: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("weatherparsed").getChild("current").getChild("air_quality").getChild("no2")))));
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIO3Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIO3Objects1[i].setString("Current O3: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("weatherparsed").getChild("current").getChild("air_quality").getChild("o3")))));
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQISO2Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQISO2Objects1[i].setString("Current SO2: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("weatherparsed").getChild("current").getChild("air_quality").getChild("so2")))));
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIPM2_955Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIPM2_955Objects1[i].setString("Current PM 2.5: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("weatherparsed").getChild("current").getChild("air_quality").getChild("pm2_5")))));
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIPM10Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIPM10Objects1[i].setString("Current PM 10: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("weatherparsed").getChild("current").getChild("air_quality").getChild("pm10")))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loadwtr");
}}

}


};gdjs.Weather_32AppletCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("CID"), gdjs.Weather_32AppletCode.GDCIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.Weather_32AppletCode.GDimgObjects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("image")), runtimeScene.getVariables().get("imgload"));
}{runtimeScene.getVariables().get("time").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour"));
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDCIDObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDCIDObjects1[i].setString("Client ID: " + gdjs.evtsExt__Hash__GenerateHashMD5.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ip")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDimgObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDimgObjects1[i].setSize(960, 540);
}
}}

}


};gdjs.Weather_32AppletCode.eventsList3 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition0IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8366580);
}
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("sunnyimg").setNumber(1);
}}

}


};gdjs.Weather_32AppletCode.eventsList4 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition0IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8367836);
}
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("sunsetimg").setNumber(1);
}}

}


};gdjs.Weather_32AppletCode.eventsList5 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition0IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8369588);
}
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("munimg").setNumber(1);
}}

}


};gdjs.Weather_32AppletCode.eventsList6 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition0IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8370900);
}
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("munimg").setNumber(1);
}}

}


};gdjs.Weather_32AppletCode.eventsList7 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition0IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8371332);
}
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("sunrsimg").setNumber(1);
}}

}


};gdjs.Weather_32AppletCode.eventsList8 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("time")) >= 8;
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("time")) <= 18;
}}
if (gdjs.Weather_32AppletCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("current"), gdjs.Weather_32AppletCode.GDcurrentObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurrentObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurrentObjects2[i].setAnimation(2);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("time")) >= 19;
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("time")) <= 20;
}}
if (gdjs.Weather_32AppletCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("current"), gdjs.Weather_32AppletCode.GDcurrentObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurrentObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurrentObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("time")) >= 20;
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("time")) <= 23;
}}
if (gdjs.Weather_32AppletCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("current"), gdjs.Weather_32AppletCode.GDcurrentObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurrentObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurrentObjects2[i].setAnimation(3);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("time")) >= 0;
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("time")) <= 6;
}}
if (gdjs.Weather_32AppletCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("current"), gdjs.Weather_32AppletCode.GDcurrentObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurrentObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurrentObjects2[i].setAnimation(3);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("time")) >= 6;
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("time")) <= 8;
}}
if (gdjs.Weather_32AppletCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("current"), gdjs.Weather_32AppletCode.GDcurrentObjects1);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurrentObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurrentObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Weather_32AppletCode.mapOfGDgdjs_46Weather_9532AppletCode_46GDAQISwitchObjects2Objects = Hashtable.newFrom({"AQISwitch": gdjs.Weather_32AppletCode.GDAQISwitchObjects2});
gdjs.Weather_32AppletCode.eventsList9 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition0IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8373572);
}
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AQICo"), gdjs.Weather_32AppletCode.GDAQICoObjects2);
gdjs.copyArray(runtimeScene.getObjects("AQINO2"), gdjs.Weather_32AppletCode.GDAQINO2Objects2);
gdjs.copyArray(runtimeScene.getObjects("AQIO3"), gdjs.Weather_32AppletCode.GDAQIO3Objects2);
gdjs.copyArray(runtimeScene.getObjects("AQIPM10"), gdjs.Weather_32AppletCode.GDAQIPM10Objects2);
gdjs.copyArray(runtimeScene.getObjects("AQIPM2_5"), gdjs.Weather_32AppletCode.GDAQIPM2_955Objects2);
gdjs.copyArray(runtimeScene.getObjects("AQISO2"), gdjs.Weather_32AppletCode.GDAQISO2Objects2);
/* Reuse gdjs.Weather_32AppletCode.GDAQISwitchObjects2 */
gdjs.copyArray(runtimeScene.getObjects("WSwt"), gdjs.Weather_32AppletCode.GDWSwtObjects2);
gdjs.copyArray(runtimeScene.getObjects("current"), gdjs.Weather_32AppletCode.GDcurrentObjects2);
gdjs.copyArray(runtimeScene.getObjects("curtemp"), gdjs.Weather_32AppletCode.GDcurtempObjects2);
gdjs.copyArray(runtimeScene.getObjects("windspd"), gdjs.Weather_32AppletCode.GDwindspdObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurrentObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurrentObjects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 350, (gdjs.Weather_32AppletCode.GDcurrentObjects2[i].getPointY("")), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDwindspdObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDwindspdObjects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 350, (gdjs.Weather_32AppletCode.GDwindspdObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurtempObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurtempObjects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 350, (gdjs.Weather_32AppletCode.GDcurtempObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQISwitchObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQISwitchObjects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 350, (gdjs.Weather_32AppletCode.GDAQISwitchObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDWSwtObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDWSwtObjects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 0, (gdjs.Weather_32AppletCode.GDWSwtObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQICoObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQICoObjects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 0, (gdjs.Weather_32AppletCode.GDAQICoObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQINO2Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQINO2Objects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 0, (gdjs.Weather_32AppletCode.GDAQINO2Objects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIO3Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIO3Objects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 0, (gdjs.Weather_32AppletCode.GDAQIO3Objects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQISO2Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQISO2Objects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 0, (gdjs.Weather_32AppletCode.GDAQISO2Objects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIPM2_955Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIPM2_955Objects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 0, (gdjs.Weather_32AppletCode.GDAQIPM2_955Objects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIPM10Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIPM10Objects2[i].getBehavior("Tween").addObjectPositionTween("swaqi", 0, (gdjs.Weather_32AppletCode.GDAQIPM10Objects2[i].getY()), "easeInOutQuad", 350, false);
}
}}

}


};gdjs.Weather_32AppletCode.mapOfGDgdjs_46Weather_9532AppletCode_46GDWSwtObjects2Objects = Hashtable.newFrom({"WSwt": gdjs.Weather_32AppletCode.GDWSwtObjects2});
gdjs.Weather_32AppletCode.eventsList10 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition0IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8378372);
}
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AQICo"), gdjs.Weather_32AppletCode.GDAQICoObjects2);
gdjs.copyArray(runtimeScene.getObjects("AQINO2"), gdjs.Weather_32AppletCode.GDAQINO2Objects2);
gdjs.copyArray(runtimeScene.getObjects("AQIO3"), gdjs.Weather_32AppletCode.GDAQIO3Objects2);
gdjs.copyArray(runtimeScene.getObjects("AQIPM10"), gdjs.Weather_32AppletCode.GDAQIPM10Objects2);
gdjs.copyArray(runtimeScene.getObjects("AQIPM2_5"), gdjs.Weather_32AppletCode.GDAQIPM2_955Objects2);
gdjs.copyArray(runtimeScene.getObjects("AQISO2"), gdjs.Weather_32AppletCode.GDAQISO2Objects2);
gdjs.copyArray(runtimeScene.getObjects("AQISwitch"), gdjs.Weather_32AppletCode.GDAQISwitchObjects2);
/* Reuse gdjs.Weather_32AppletCode.GDWSwtObjects2 */
gdjs.copyArray(runtimeScene.getObjects("current"), gdjs.Weather_32AppletCode.GDcurrentObjects2);
gdjs.copyArray(runtimeScene.getObjects("curtemp"), gdjs.Weather_32AppletCode.GDcurtempObjects2);
gdjs.copyArray(runtimeScene.getObjects("windspd"), gdjs.Weather_32AppletCode.GDwindspdObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurrentObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurrentObjects2[i].getBehavior("Tween").addObjectPositionTween("sww", 217, (gdjs.Weather_32AppletCode.GDcurrentObjects2[i].getPointY("")), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDwindspdObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDwindspdObjects2[i].getBehavior("Tween").addObjectPositionTween("sww", 0, (gdjs.Weather_32AppletCode.GDwindspdObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurtempObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurtempObjects2[i].getBehavior("Tween").addObjectPositionTween("sww", 0, (gdjs.Weather_32AppletCode.GDcurtempObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQISwitchObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQISwitchObjects2[i].getBehavior("Tween").addObjectPositionTween("sww", 0, (gdjs.Weather_32AppletCode.GDAQISwitchObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDWSwtObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDWSwtObjects2[i].getBehavior("Tween").addObjectPositionTween("sww", -(300), (gdjs.Weather_32AppletCode.GDWSwtObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQICoObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQICoObjects2[i].getBehavior("Tween").addObjectPositionTween("sww", -(300), (gdjs.Weather_32AppletCode.GDAQICoObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQINO2Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQINO2Objects2[i].getBehavior("Tween").addObjectPositionTween("sww", -(300), (gdjs.Weather_32AppletCode.GDAQINO2Objects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIO3Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIO3Objects2[i].getBehavior("Tween").addObjectPositionTween("sww", -(300), (gdjs.Weather_32AppletCode.GDAQIO3Objects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQISO2Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQISO2Objects2[i].getBehavior("Tween").addObjectPositionTween("sww", -(300), (gdjs.Weather_32AppletCode.GDAQISO2Objects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIPM2_955Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIPM2_955Objects2[i].getBehavior("Tween").addObjectPositionTween("sww", -(300), (gdjs.Weather_32AppletCode.GDAQIPM2_955Objects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQIPM10Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQIPM10Objects2[i].getBehavior("Tween").addObjectPositionTween("sww", -(300), (gdjs.Weather_32AppletCode.GDAQIPM10Objects2[i].getY()), "easeInOutQuad", 350, false);
}
}}

}


};gdjs.Weather_32AppletCode.mapOfGDgdjs_46Weather_9532AppletCode_46GDWSwt2Objects2Objects = Hashtable.newFrom({"WSwt2": gdjs.Weather_32AppletCode.GDWSwt2Objects2});
gdjs.Weather_32AppletCode.eventsList11 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition0IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8383140);
}
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AQISwitch"), gdjs.Weather_32AppletCode.GDAQISwitchObjects2);
gdjs.copyArray(runtimeScene.getObjects("CID"), gdjs.Weather_32AppletCode.GDCIDObjects2);
gdjs.copyArray(runtimeScene.getObjects("WSwt"), gdjs.Weather_32AppletCode.GDWSwtObjects2);
/* Reuse gdjs.Weather_32AppletCode.GDWSwt2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("cp"), gdjs.Weather_32AppletCode.GDcpObjects2);
gdjs.copyArray(runtimeScene.getObjects("current"), gdjs.Weather_32AppletCode.GDcurrentObjects2);
gdjs.copyArray(runtimeScene.getObjects("curtemp"), gdjs.Weather_32AppletCode.GDcurtempObjects2);
gdjs.copyArray(runtimeScene.getObjects("ver"), gdjs.Weather_32AppletCode.GDverObjects2);
gdjs.copyArray(runtimeScene.getObjects("windspd"), gdjs.Weather_32AppletCode.GDwindspdObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurrentObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurrentObjects2[i].getBehavior("Tween").addObjectPositionTween("swcd", 217, (gdjs.Weather_32AppletCode.GDcurrentObjects2[i].getPointY("")), "easeInOutQuad", 490, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDwindspdObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDwindspdObjects2[i].getBehavior("Tween").addObjectPositionTween("swcd", 0, (gdjs.Weather_32AppletCode.GDwindspdObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurtempObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurtempObjects2[i].getBehavior("Tween").addObjectPositionTween("swcd", 0, (gdjs.Weather_32AppletCode.GDcurtempObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQISwitchObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQISwitchObjects2[i].getBehavior("Tween").addObjectPositionTween("swcd", 0, (gdjs.Weather_32AppletCode.GDAQISwitchObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDWSwt2Objects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDWSwt2Objects2[i].getBehavior("Tween").addObjectPositionTween("swcd", 300, (( gdjs.Weather_32AppletCode.GDWSwtObjects2.length === 0 ) ? 0 :gdjs.Weather_32AppletCode.GDWSwtObjects2[0].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcpObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcpObjects2[i].getBehavior("Tween").addObjectPositionTween("swcd", 300, (gdjs.Weather_32AppletCode.GDcpObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDverObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDverObjects2[i].getBehavior("Tween").addObjectPositionTween("swcd", 300, (gdjs.Weather_32AppletCode.GDverObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDCIDObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDCIDObjects2[i].getBehavior("Tween").addObjectPositionTween("swcd", 300, (gdjs.Weather_32AppletCode.GDCIDObjects2[i].getY()), "easeInOutQuad", 350, false);
}
}}

}


};gdjs.Weather_32AppletCode.mapOfGDgdjs_46Weather_9532AppletCode_46GDcurrentObjects1Objects = Hashtable.newFrom({"current": gdjs.Weather_32AppletCode.GDcurrentObjects1});
gdjs.Weather_32AppletCode.eventsList12 = function(runtimeScene) {

{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition0IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8387196);
}
}if (gdjs.Weather_32AppletCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AQISwitch"), gdjs.Weather_32AppletCode.GDAQISwitchObjects1);
gdjs.copyArray(runtimeScene.getObjects("CID"), gdjs.Weather_32AppletCode.GDCIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("WSwt"), gdjs.Weather_32AppletCode.GDWSwtObjects1);
gdjs.copyArray(runtimeScene.getObjects("WSwt2"), gdjs.Weather_32AppletCode.GDWSwt2Objects1);
gdjs.copyArray(runtimeScene.getObjects("cp"), gdjs.Weather_32AppletCode.GDcpObjects1);
/* Reuse gdjs.Weather_32AppletCode.GDcurrentObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curtemp"), gdjs.Weather_32AppletCode.GDcurtempObjects1);
gdjs.copyArray(runtimeScene.getObjects("ver"), gdjs.Weather_32AppletCode.GDverObjects1);
gdjs.copyArray(runtimeScene.getObjects("windspd"), gdjs.Weather_32AppletCode.GDwindspdObjects1);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurrentObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurrentObjects1[i].getBehavior("Tween").addObjectPositionTween("swcd", -(300), (gdjs.Weather_32AppletCode.GDcurrentObjects1[i].getPointY("")), "easeInOutQuad", 490, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDwindspdObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDwindspdObjects1[i].getBehavior("Tween").addObjectPositionTween("swcd", -(300), (gdjs.Weather_32AppletCode.GDwindspdObjects1[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcurtempObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcurtempObjects1[i].getBehavior("Tween").addObjectPositionTween("swcd", -(300), (gdjs.Weather_32AppletCode.GDcurtempObjects1[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDAQISwitchObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDAQISwitchObjects1[i].getBehavior("Tween").addObjectPositionTween("swcd", -(300), (gdjs.Weather_32AppletCode.GDAQISwitchObjects1[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDWSwt2Objects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDWSwt2Objects1[i].getBehavior("Tween").addObjectPositionTween("swcd", 0, (( gdjs.Weather_32AppletCode.GDWSwtObjects1.length === 0 ) ? 0 :gdjs.Weather_32AppletCode.GDWSwtObjects1[0].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDcpObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDcpObjects1[i].getBehavior("Tween").addObjectPositionTween("swcd", 0, (gdjs.Weather_32AppletCode.GDcpObjects1[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDverObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDverObjects1[i].getBehavior("Tween").addObjectPositionTween("swcd", 0, (gdjs.Weather_32AppletCode.GDverObjects1[i].getY()), "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.Weather_32AppletCode.GDCIDObjects1.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDCIDObjects1[i].getBehavior("Tween").addObjectPositionTween("swcd", 0, (gdjs.Weather_32AppletCode.GDCIDObjects1[i].getY()), "easeInOutQuad", 350, false);
}
}}

}


};gdjs.Weather_32AppletCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AQISwitch"), gdjs.Weather_32AppletCode.GDAQISwitchObjects2);

gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Weather_32AppletCode.mapOfGDgdjs_46Weather_9532AppletCode_46GDAQISwitchObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Weather_32AppletCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Weather_32AppletCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WSwt"), gdjs.Weather_32AppletCode.GDWSwtObjects2);

gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Weather_32AppletCode.mapOfGDgdjs_46Weather_9532AppletCode_46GDWSwtObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Weather_32AppletCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Weather_32AppletCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WSwt2"), gdjs.Weather_32AppletCode.GDWSwt2Objects2);

gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Weather_32AppletCode.mapOfGDgdjs_46Weather_9532AppletCode_46GDWSwt2Objects2Objects, runtimeScene, true, false);
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Weather_32AppletCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Weather_32AppletCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("current"), gdjs.Weather_32AppletCode.GDcurrentObjects1);

gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Weather_32AppletCode.mapOfGDgdjs_46Weather_9532AppletCode_46GDcurrentObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Weather_32AppletCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Weather_32AppletCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Weather_32AppletCode.asyncCallback10058252 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "image");
}}
gdjs.Weather_32AppletCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback10058252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback10057964 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("img"), gdjs.Weather_32AppletCode.GDimgObjects3);

{for(var i = 0, len = gdjs.Weather_32AppletCode.GDimgObjects3.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDimgObjects3[i].getBehavior("Tween").addObjectOpacityTween("", 0, "easeInOutQuad", 600, false);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Weather_32AppletCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Weather_32AppletCode.GDimgObjects2) asyncObjectsList.addObject("img", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback10057964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback10057604 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.Weather_32AppletCode.GDimgObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDimgObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDimgObjects2[i].getBehavior("Tween").addObjectOpacityTween("", 135, "easeInOutQuad", 600, false);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Weather_32AppletCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback10057604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback8670012 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "image");
}}
gdjs.Weather_32AppletCode.eventsList17 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback8670012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback8669724 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("img"), gdjs.Weather_32AppletCode.GDimgObjects3);

{for(var i = 0, len = gdjs.Weather_32AppletCode.GDimgObjects3.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDimgObjects3[i].getBehavior("Tween").addObjectOpacityTween("", 0, "easeInOutQuad", 600, false);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList17(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Weather_32AppletCode.eventsList18 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Weather_32AppletCode.GDimgObjects2) asyncObjectsList.addObject("img", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback8669724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback8669508 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.Weather_32AppletCode.GDimgObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDimgObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDimgObjects2[i].getBehavior("Tween").addObjectOpacityTween("", 135, "easeInOutQuad", 600, false);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList18(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Weather_32AppletCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback8669508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback11156260 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "image");
}}
gdjs.Weather_32AppletCode.eventsList20 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback11156260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback11156796 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("img"), gdjs.Weather_32AppletCode.GDimgObjects3);

{for(var i = 0, len = gdjs.Weather_32AppletCode.GDimgObjects3.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDimgObjects3[i].getBehavior("Tween").addObjectOpacityTween("", 0, "easeInOutQuad", 600, false);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList20(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Weather_32AppletCode.eventsList21 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Weather_32AppletCode.GDimgObjects2) asyncObjectsList.addObject("img", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback11156796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback11154332 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.Weather_32AppletCode.GDimgObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDimgObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDimgObjects2[i].getBehavior("Tween").addObjectOpacityTween("", 135, "easeInOutQuad", 600, false);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList21(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Weather_32AppletCode.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback11154332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback8426732 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "image");
}}
gdjs.Weather_32AppletCode.eventsList23 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback8426732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback8426348 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("img"), gdjs.Weather_32AppletCode.GDimgObjects3);

{for(var i = 0, len = gdjs.Weather_32AppletCode.GDimgObjects3.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDimgObjects3[i].getBehavior("Tween").addObjectOpacityTween("", 0, "easeInOutQuad", 600, false);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList23(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Weather_32AppletCode.eventsList24 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Weather_32AppletCode.GDimgObjects2) asyncObjectsList.addObject("img", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback8426348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.asyncCallback8425148 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.Weather_32AppletCode.GDimgObjects2);
{for(var i = 0, len = gdjs.Weather_32AppletCode.GDimgObjects2.length ;i < len;++i) {
    gdjs.Weather_32AppletCode.GDimgObjects2[i].getBehavior("Tween").addObjectOpacityTween("", 135, "easeInOutQuad", 600, false);
}
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList24(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Weather_32AppletCode.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Weather_32AppletCode.asyncCallback8425148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Weather_32AppletCode.eventsList26 = function(runtimeScene) {

{



}


{


{

{ //Subevents
gdjs.Weather_32AppletCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


{

{ //Subevents
gdjs.Weather_32AppletCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


{

{ //Subevents
gdjs.Weather_32AppletCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


{

{ //Subevents
gdjs.Weather_32AppletCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{


{

{ //Subevents
gdjs.Weather_32AppletCode.eventsList13(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition2IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("munimg")) == 1;
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "image");
}if ( gdjs.Weather_32AppletCode.condition1IsTrue_0.val ) {
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition2IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10056884);
}
}}
}
if (gdjs.Weather_32AppletCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("choose").setNumber(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("imgload").getChild("nightmax")) - 1));
}{runtimeScene.getVariables().get("imagesrc").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("imgload").getChild("nightimages").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("choose")))));
}{gdjs.evtsExt__CDXTexturePack__ChangeTexture.func(runtimeScene, "img", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("imagesrc")), gdjs.evtTools.common.toString(gdjs.randomInRange(1000000, 9999999)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition2IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("sunrsimg")) == 1;
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "image");
}if ( gdjs.Weather_32AppletCode.condition1IsTrue_0.val ) {
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition2IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8668788);
}
}}
}
if (gdjs.Weather_32AppletCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("choose").setNumber(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("imgload").getChild("sunriseimg")) - 1));
}{runtimeScene.getVariables().get("imagesrc").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("imgload").getChild("sunriseimages").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("choose")))));
}{gdjs.evtsExt__CDXTexturePack__ChangeTexture.func(runtimeScene, "img", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("imagesrc")), gdjs.evtTools.common.toString(gdjs.randomInRange(1000000, 9999999)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition2IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("sunnyimg")) == 1;
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "image");
}if ( gdjs.Weather_32AppletCode.condition1IsTrue_0.val ) {
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition2IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11182788);
}
}}
}
if (gdjs.Weather_32AppletCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("choose").setNumber(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("imgload").getChild("daytimemax")) - 1));
}{runtimeScene.getVariables().get("imagesrc").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("imgload").getChild("daytimeimages").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("choose")))));
}{gdjs.evtsExt__CDXTexturePack__ChangeTexture.func(runtimeScene, "img", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("imagesrc")), gdjs.evtTools.common.toString(gdjs.randomInRange(1000000, 9999999)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


gdjs.Weather_32AppletCode.condition0IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = false;
gdjs.Weather_32AppletCode.condition2IsTrue_0.val = false;
{
gdjs.Weather_32AppletCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("sunsetimg")) == 1;
}if ( gdjs.Weather_32AppletCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32AppletCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "image");
}if ( gdjs.Weather_32AppletCode.condition1IsTrue_0.val ) {
{
{gdjs.Weather_32AppletCode.conditionTrue_1 = gdjs.Weather_32AppletCode.condition2IsTrue_0;
gdjs.Weather_32AppletCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8424596);
}
}}
}
if (gdjs.Weather_32AppletCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("choose").setNumber(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("imgload").getChild("sunsetmax")) - 1));
}{runtimeScene.getVariables().get("imagesrc").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("imgload").getChild("sunsetimages").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("choose")))));
}{gdjs.evtsExt__CDXTexturePack__ChangeTexture.func(runtimeScene, "img", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("imagesrc")), gdjs.evtTools.common.toString(gdjs.randomInRange(1000000, 9999999)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.Weather_32AppletCode.eventsList25(runtimeScene);} //End of subevents
}

}


};

gdjs.Weather_32AppletCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Weather_32AppletCode.GDcurrentObjects1.length = 0;
gdjs.Weather_32AppletCode.GDcurrentObjects2.length = 0;
gdjs.Weather_32AppletCode.GDcurrentObjects3.length = 0;
gdjs.Weather_32AppletCode.GDcurrentObjects4.length = 0;
gdjs.Weather_32AppletCode.GDwindspdObjects1.length = 0;
gdjs.Weather_32AppletCode.GDwindspdObjects2.length = 0;
gdjs.Weather_32AppletCode.GDwindspdObjects3.length = 0;
gdjs.Weather_32AppletCode.GDwindspdObjects4.length = 0;
gdjs.Weather_32AppletCode.GDcurtempObjects1.length = 0;
gdjs.Weather_32AppletCode.GDcurtempObjects2.length = 0;
gdjs.Weather_32AppletCode.GDcurtempObjects3.length = 0;
gdjs.Weather_32AppletCode.GDcurtempObjects4.length = 0;
gdjs.Weather_32AppletCode.GDWSwt2Objects1.length = 0;
gdjs.Weather_32AppletCode.GDWSwt2Objects2.length = 0;
gdjs.Weather_32AppletCode.GDWSwt2Objects3.length = 0;
gdjs.Weather_32AppletCode.GDWSwt2Objects4.length = 0;
gdjs.Weather_32AppletCode.GDWSwtObjects1.length = 0;
gdjs.Weather_32AppletCode.GDWSwtObjects2.length = 0;
gdjs.Weather_32AppletCode.GDWSwtObjects3.length = 0;
gdjs.Weather_32AppletCode.GDWSwtObjects4.length = 0;
gdjs.Weather_32AppletCode.GDAQISwitchObjects1.length = 0;
gdjs.Weather_32AppletCode.GDAQISwitchObjects2.length = 0;
gdjs.Weather_32AppletCode.GDAQISwitchObjects3.length = 0;
gdjs.Weather_32AppletCode.GDAQISwitchObjects4.length = 0;
gdjs.Weather_32AppletCode.GDAQICoObjects1.length = 0;
gdjs.Weather_32AppletCode.GDAQICoObjects2.length = 0;
gdjs.Weather_32AppletCode.GDAQICoObjects3.length = 0;
gdjs.Weather_32AppletCode.GDAQICoObjects4.length = 0;
gdjs.Weather_32AppletCode.GDAQINO2Objects1.length = 0;
gdjs.Weather_32AppletCode.GDAQINO2Objects2.length = 0;
gdjs.Weather_32AppletCode.GDAQINO2Objects3.length = 0;
gdjs.Weather_32AppletCode.GDAQINO2Objects4.length = 0;
gdjs.Weather_32AppletCode.GDAQIO3Objects1.length = 0;
gdjs.Weather_32AppletCode.GDAQIO3Objects2.length = 0;
gdjs.Weather_32AppletCode.GDAQIO3Objects3.length = 0;
gdjs.Weather_32AppletCode.GDAQIO3Objects4.length = 0;
gdjs.Weather_32AppletCode.GDAQISO2Objects1.length = 0;
gdjs.Weather_32AppletCode.GDAQISO2Objects2.length = 0;
gdjs.Weather_32AppletCode.GDAQISO2Objects3.length = 0;
gdjs.Weather_32AppletCode.GDAQISO2Objects4.length = 0;
gdjs.Weather_32AppletCode.GDAQIPM2_955Objects1.length = 0;
gdjs.Weather_32AppletCode.GDAQIPM2_955Objects2.length = 0;
gdjs.Weather_32AppletCode.GDAQIPM2_955Objects3.length = 0;
gdjs.Weather_32AppletCode.GDAQIPM2_955Objects4.length = 0;
gdjs.Weather_32AppletCode.GDAQIPM10Objects1.length = 0;
gdjs.Weather_32AppletCode.GDAQIPM10Objects2.length = 0;
gdjs.Weather_32AppletCode.GDAQIPM10Objects3.length = 0;
gdjs.Weather_32AppletCode.GDAQIPM10Objects4.length = 0;
gdjs.Weather_32AppletCode.GDcpObjects1.length = 0;
gdjs.Weather_32AppletCode.GDcpObjects2.length = 0;
gdjs.Weather_32AppletCode.GDcpObjects3.length = 0;
gdjs.Weather_32AppletCode.GDcpObjects4.length = 0;
gdjs.Weather_32AppletCode.GDverObjects1.length = 0;
gdjs.Weather_32AppletCode.GDverObjects2.length = 0;
gdjs.Weather_32AppletCode.GDverObjects3.length = 0;
gdjs.Weather_32AppletCode.GDverObjects4.length = 0;
gdjs.Weather_32AppletCode.GDCIDObjects1.length = 0;
gdjs.Weather_32AppletCode.GDCIDObjects2.length = 0;
gdjs.Weather_32AppletCode.GDCIDObjects3.length = 0;
gdjs.Weather_32AppletCode.GDCIDObjects4.length = 0;
gdjs.Weather_32AppletCode.GDimgObjects1.length = 0;
gdjs.Weather_32AppletCode.GDimgObjects2.length = 0;
gdjs.Weather_32AppletCode.GDimgObjects3.length = 0;
gdjs.Weather_32AppletCode.GDimgObjects4.length = 0;

gdjs.Weather_32AppletCode.eventsList26(runtimeScene);
return;

}

gdjs['Weather_32AppletCode'] = gdjs.Weather_32AppletCode;
