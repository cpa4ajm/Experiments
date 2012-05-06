smalltalk.addPackage('HelloApp', {});
smalltalk.addClass('Hello', smalltalk.Object, ['cordova', 'device', 'deviceName'], 'HelloApp');
smalltalk.addMethod(
unescape('_begin'),
smalltalk.method({
selector: unescape('begin'),
fn: function (){
var self=this;
var msg=nil;
var deviceName=nil;
var button=nil;
var button2=nil;
(msg=smalltalk.send(self, "_helloFromSmalltalk", []));
(button=smalltalk.send(unescape("%23sayHello"), "_asJQuery", []));
smalltalk.send(button, "_click_", [(function(){return smalltalk.send(button, "_after_", [smalltalk.send(smalltalk.send(unescape("%3Cp%3E"), "__comma", [msg]), "__comma", [unescape("%3C/p%3E")])]);})]);
(deviceName=smalltalk.send(self, "_currentDeviceName", []));
(button2=smalltalk.send(unescape("%23sayDeviceName"), "_asJQuery", []));
smalltalk.send(button2, "_click_", [(function(){return smalltalk.send(button2, "_after_", [smalltalk.send(smalltalk.send(unescape("%3Cp%3E"), "__comma", [deviceName]), "__comma", [unescape("%3C/p%3E")])]);})]);
return self;}
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_currentDeviceName'),
smalltalk.method({
selector: unescape('currentDeviceName'),
fn: function (){
var self=this;
return self['@deviceName'];
return self;}
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_helloFromSmalltalk'),
smalltalk.method({
selector: unescape('helloFromSmalltalk'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send("Hello from Smalltalk ", "__comma", [smalltalk.send(self, "_withComplexEmbeddedJavascriptText", [])]), "__comma", ["at "]), "__comma", [smalltalk.send((smalltalk.Date || Date), "_today", [])]);
return self;}
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_initialiseDeviceViaCordova'),
smalltalk.method({
selector: unescape('initialiseDeviceViaCordova'),
fn: function (){
var self=this;
(self['@deviceName']= new require('cordova-1.6.0'));
return self;}
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_moreComplexEmbeddedJavascript'),
smalltalk.method({
selector: unescape('moreComplexEmbeddedJavascript'),
fn: function (){
var self=this;
var socket=nil;
(socket= new require('net').Socket());
return self;}
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_withComplexEmbeddedJavascriptText'),
smalltalk.method({
selector: unescape('withComplexEmbeddedJavascriptText'),
fn: function (){
var self=this;
return new Date();;
return self;}
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_withEmbeddedJavascriptText'),
smalltalk.method({
selector: unescape('withEmbeddedJavascriptText'),
fn: function (){
var self=this;
return 'with ' + 'embedded ' + ' javascript ' + 'text ';
return self;}
}),
smalltalk.Hello);



