smalltalk.addPackage('HelloApp', {});
smalltalk.addClass('Hello', smalltalk.Object, ['cordova', 'device', 'deviceName'], 'HelloApp');
smalltalk.addMethod(
unescape('_begin'),
smalltalk.method({
selector: unescape('begin'),
category: 'basics',
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
return self;},
args: [],
source: unescape('begin%0A%22Makes%20me%20say%20hello%20to%20the%20user.%22%0A%0A%7C%20msg%20deviceName%20button%20button2%7C%0A%0Amsg%20%3A%3D%20self%20helloFromSmalltalk.%0Abutton%20%3A%3D%20%27%23sayHello%27%20asJQuery.%0Abutton%20click%3A%20%5Bbutton%20after%3A%20%27%3Cp%3E%27%20%2C%20msg%20%2C%20%27%3C/p%3E%27%5D.%0A%0AdeviceName%20%3A%3D%20self%20currentDeviceName.%0Abutton2%20%3A%3D%20%27%23sayDeviceName%27%20asJQuery.%0Abutton2%20click%3A%20%5Bbutton2%20after%3A%20%27%3Cp%3E%27%20%2C%20deviceName%20%2C%20%27%3C/p%3E%27%5D.'),
messageSends: ["helloFromSmalltalk", "asJQuery", "click:", "after:", unescape("%2C"), "currentDeviceName"],
referencedClasses: []
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_currentDeviceName'),
smalltalk.method({
selector: unescape('currentDeviceName'),
category: 'experiments',
fn: function (){
var self=this;
return self['@deviceName'];
return self;},
args: [],
source: unescape('currentDeviceName%0A%22Will%20only%20work%20when%20using%20PhoneGap%22%0A%0A%5EdeviceName%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_helloFromSmalltalk'),
smalltalk.method({
selector: unescape('helloFromSmalltalk'),
category: 'basics',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send("Hello from Smalltalk ", "__comma", [smalltalk.send(self, "_withComplexEmbeddedJavascriptText", [])]), "__comma", ["at "]), "__comma", [smalltalk.send((smalltalk.Date || Date), "_today", [])]);
return self;},
args: [],
source: unescape('helloFromSmalltalk%0A%0A%5E%27Hello%20from%20Smalltalk%20%27%2C%20self%20withComplexEmbeddedJavascriptText%2C%20%27at%20%27%2C%20Date%20today'),
messageSends: [unescape("%2C"), "withComplexEmbeddedJavascriptText", "today"],
referencedClasses: ["Date"]
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_initialiseDeviceViaCordova'),
smalltalk.method({
selector: unescape('initialiseDeviceViaCordova'),
category: 'experiments',
fn: function (){
var self=this;
(self['@deviceName']= new require('cordova-1.6.0'));
return self;},
args: [],
source: unescape('initialiseDeviceViaCordova%0A%0AdeviceName%20%3A%3D%20%20%3C%20new%20require%28%27cordova-1.6.0%27%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'experiments',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('initialize%0A%0A%22self%20initialiseDeviceViaCordova%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_moreComplexEmbeddedJavascript'),
smalltalk.method({
selector: unescape('moreComplexEmbeddedJavascript'),
category: 'experiments',
fn: function (){
var self=this;
var socket=nil;
(socket= new require('net').Socket());
return self;},
args: [],
source: unescape('moreComplexEmbeddedJavascript%0A%09%22some%20more%20examples%22%0A%0A%09%7Csocket%20%7C%0A%09socket%20%3A%3D%20%20%3C%20new%20require%28%27net%27%29.Socket%28%29%3E.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_withComplexEmbeddedJavascriptText'),
smalltalk.method({
selector: unescape('withComplexEmbeddedJavascriptText'),
category: 'experiments',
fn: function (){
var self=this;
return new Date();;
return self;},
args: [],
source: unescape('withComplexEmbeddedJavascriptText%0A%0A%5E%3Cnew%20Date%28%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_withEmbeddedJavascriptText'),
smalltalk.method({
selector: unescape('withEmbeddedJavascriptText'),
category: 'basics',
fn: function (){
var self=this;
return 'with ' + 'embedded ' + ' javascript ' + 'text ';
return self;},
args: [],
source: unescape('withEmbeddedJavascriptText%0A%0A%5E%3C%27with%20%27%20+%20%27embedded%20%27%20+%20%27%20javascript%20%27%20+%20%27text%20%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Hello);



