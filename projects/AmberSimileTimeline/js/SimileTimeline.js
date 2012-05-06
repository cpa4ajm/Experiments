smalltalk.addPackage('SimileTimeline', {});
smalltalk.addClass('SimTLObject', smalltalk.Object, ['jsObject'], 'SimileTimeline');
smalltalk.addMethod(
unescape('_jsObject'),
smalltalk.method({
selector: unescape('jsObject'),
category: 'accessors',
fn: function (){
var self=this;
return self['@jsObject'];
return self;},
args: [],
source: unescape('jsObject%0A%0A%5EjsObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SimTLObject);

smalltalk.addMethod(
unescape('_jsObject_'),
smalltalk.method({
selector: unescape('jsObject%3A'),
category: 'accessors',
fn: function (aJavascriptObject){
var self=this;
return (self['@jsObject']=aJavascriptObject);
return self;},
args: ["aJavascriptObject"],
source: unescape('jsObject%3A%20aJavascriptObject%0A%0A%5EjsObject%20%3A%3D%20aJavascriptObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SimTLObject);



smalltalk.addClass('SimTLBandInfo', smalltalk.SimTLObject, ['width', 'intervalUnit', 'intervalPixels', 'eventSource', 'theme', 'date', 'timeZone', 'showEventText', 'trackHeight'], 'SimileTimeline');
smalltalk.addMethod(
unescape('_widthAsTextPercentage'),
smalltalk.method({
selector: unescape('widthAsTextPercentage'),
category: 'utility',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_widthAsTextPercentage_", [self['@width']]);
return self;},
args: [],
source: unescape('widthAsTextPercentage%0A%22return%20the%20width%20checking%20that%20it%20is%20as%20a%20string%20percentage%22%0A%0A%5Eself%20class%20widthAsTextPercentage%3A%20width%20'),
messageSends: ["widthAsTextPercentage:", "class"],
referencedClasses: []
}),
smalltalk.SimTLBandInfo);


smalltalk.addMethod(
unescape('_createBandInfoWidth_intervalUnit_intervalPixels_eventSource_theme_date_timeZone_showEventText_trackHeight_'),
smalltalk.method({
selector: unescape('createBandInfoWidth%3AintervalUnit%3AintervalPixels%3AeventSource%3Atheme%3Adate%3AtimeZone%3AshowEventText%3AtrackHeight%3A'),
category: 'constructors',
fn: function (aWidth, anIntervalNumber, anIntervalPixelsNumber, anEventSource, aTheme, aDate, aTimeZone, aShowEventTestBoolean, aTrackHeightNumber){
var self=this;
var bandInfo=nil;
var widthPercentageText=nil;
(widthPercentageText=smalltalk.send(self, "_widthAsTextPercentage_", [aWidth]));
(bandInfo=Timeline.createBandInfo({width: widthPercentageText, date: aDate, intervalUnit: anIntervalNumber, intervalPixels: anIntervalPixelsNumber, eventSource: anEventSource}));
return smalltalk.send(self, "_jsObject_", [bandInfo]);
return self;},
args: ["aWidth", "anIntervalNumber", "anIntervalPixelsNumber", "anEventSource", "aTheme", "aDate", "aTimeZone", "aShowEventTestBoolean", "aTrackHeightNumber"],
source: unescape('createBandInfoWidth%3A%20aWidth%20intervalUnit%3A%20anIntervalNumber%20intervalPixels%3A%20anIntervalPixelsNumber%20eventSource%3A%20anEventSource%20theme%3A%20aTheme%20date%3A%20aDate%20timeZone%3A%20aTimeZone%20showEventText%3A%20aShowEventTestBoolean%20trackHeight%3A%20aTrackHeightNumber%0A%7C%20bandInfo%20widthPercentageText%7C%0A%0AwidthPercentageText%20%3A%3D%20self%20widthAsTextPercentage%3A%20aWidth.%0A%20bandInfo%20%3A%3D%20%3CTimeline.createBandInfo%28%7Bwidth%3A%20widthPercentageText%2C%20date%3A%20aDate%2C%20intervalUnit%3A%20anIntervalNumber%2C%20intervalPixels%3A%20anIntervalPixelsNumber%2C%20eventSource%3A%20anEventSource%7D%29%3E.%0A%5Eself%20jsObject%3A%20bandInfo'),
messageSends: ["widthAsTextPercentage:", "jsObject:"],
referencedClasses: []
}),
smalltalk.SimTLBandInfo.klass);

smalltalk.addMethod(
unescape('_newFromWidth_intervalUnit_eventSource_'),
smalltalk.method({
selector: unescape('newFromWidth%3AintervalUnit%3AeventSource%3A'),
category: 'constructors',
fn: function (aWidth, anIntervalUnit, anEventSource){
var self=this;
var bandInfo=nil;
var widthPercentageText=nil;
(widthPercentageText=smalltalk.send(self, "_widthAsTextPercentage_", [aWidth]));
(bandInfo=Timeline.createBandInfo({width: widthPercentageText, date: new Date(), intervalUnit: anIntervalUnit, intervalPixels: 100, eventSource: anEventSource}));
return (function($rec){smalltalk.send($rec, "_jsObject_", [bandInfo]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aWidth", "anIntervalUnit", "anEventSource"],
source: unescape('newFromWidth%3A%20aWidth%20intervalUnit%3A%20anIntervalUnit%20eventSource%3A%20anEventSource%0A%7C%20bandInfo%20widthPercentageText%7C%0A%0AwidthPercentageText%20%3A%3D%20self%20widthAsTextPercentage%3A%20aWidth.%0A%20bandInfo%20%3A%3D%20%3CTimeline.createBandInfo%28%7Bwidth%3A%20widthPercentageText%2C%20date%3A%20new%20Date%28%29%2C%20intervalUnit%3A%20anIntervalUnit%2C%20intervalPixels%3A%20100%2C%20eventSource%3A%20anEventSource%7D%29%3E.%0A%5Eself%20new%20jsObject%3A%20bandInfo%3B%0A%09%09%20yourself'),
messageSends: ["widthAsTextPercentage:", "jsObject:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.SimTLBandInfo.klass);

smalltalk.addMethod(
unescape('_widthAsTextPercentage_'),
smalltalk.method({
selector: unescape('widthAsTextPercentage%3A'),
category: 'utility',
fn: function (aWidth){
var self=this;
return (($receiver = aWidth) == nil || $receiver == undefined) ? (function(){return aWidth;})() : (function(){return ((($receiver = smalltalk.send(aWidth, "_isNumber", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(aWidth, "_asString", []), "__comma", [unescape("%25")]);})() : (function(){return aWidth;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(aWidth, "_asString", []), "__comma", [unescape("%25")]);}), (function(){return aWidth;})]));})();
return self;},
args: ["aWidth"],
source: unescape('widthAsTextPercentage%3A%20aWidth%0A%22return%20the%20width%20checking%20that%20it%20is%20as%20a%20string%20percentage%22%0A%0A%5EaWidth%20ifNil%3A%20%5BaWidth%5D%0A%09%20%20%20ifNotNil%3A%20%5BaWidth%20isNumber%20ifTrue%3A%5BaWidth%20asString%2C%20%27%25%27%5D%20ifFalse%3A%20%5BaWidth%5D%5D'),
messageSends: ["ifNil:ifNotNil:", "ifTrue:ifFalse:", "isNumber", unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.SimTLBandInfo.klass);


smalltalk.addClass('SimTLBandInfos', smalltalk.SimTLObject, [], 'SimileTimeline');

smalltalk.addMethod(
unescape('_newFromWidth_eventSource_width_eventSource_'),
smalltalk.method({
selector: unescape('newFromWidth%3AeventSource%3Awidth%3AeventSource%3A'),
category: 'constructors',
fn: function (firstWidth, firstEventSource, secondWidth, secondEventSource){
var self=this;
var bandInfo1=nil;
var bandInfo2=nil;
var bandInfoArray=nil;
(bandInfo1=smalltalk.send(smalltalk.send((smalltalk.SimTLBandInfo || SimTLBandInfo), "_newFromWidth_intervalUnit_eventSource_", [firstWidth, (5), firstEventSource]), "_jsObject", []));
(bandInfo2=smalltalk.send(smalltalk.send((smalltalk.SimTLBandInfo || SimTLBandInfo), "_newFromWidth_intervalUnit_eventSource_", [secondWidth, (6), secondEventSource]), "_jsObject", []));
(bandInfoArray=[bandInfo1, bandInfo2]);
return (function($rec){smalltalk.send($rec, "_jsObject_", [bandInfoArray]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["firstWidth", "firstEventSource", "secondWidth", "secondEventSource"],
source: unescape('newFromWidth%3A%20firstWidth%20eventSource%3A%20firstEventSource%20width%3A%20secondWidth%20eventSource%3A%20secondEventSource%0A%7C%20bandInfo1%20bandInfo2%20bandInfoArray%7C%0A%0AbandInfo1%20%3A%3D%20%28SimTLBandInfo%20newFromWidth%3A%20firstWidth%20intervalUnit%3A%205%20eventSource%3A%20firstEventSource%29%20jsObject.%0AbandInfo2%20%3A%3D%20%28SimTLBandInfo%20newFromWidth%3A%20secondWidth%20intervalUnit%3A%206%20eventSource%3A%20secondEventSource%29%20jsObject.%0AbandInfoArray%20%3A%3D%20%3C%5BbandInfo1%2C%20bandInfo2%5D%3E.%0A%5Eself%20new%20jsObject%3A%20bandInfoArray%3B%0A%09%09%20yourself'),
messageSends: ["jsObject", "newFromWidth:intervalUnit:eventSource:", "jsObject:", "yourself", "new"],
referencedClasses: ["SimTLBandInfo"]
}),
smalltalk.SimTLBandInfos.klass);


smalltalk.addClass('SimTLDefaultEventSource', smalltalk.SimTLObject, [], 'SimileTimeline');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialisation',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SimTLObject);
(($receiver = self['@jsObject']) == nil || $receiver == undefined) ? (function(){return (self['@jsObject']=new Timeline.DefaultEventSource());})() : $receiver;
return self;},
args: [],
source: unescape('initialize%0A%0Asuper%20initialize.%0AjsObject%20ifNil%3A%20%5BjsObject%20%3A%3D%20%3Cnew%20Timeline.DefaultEventSource%28%29%3E%5D.%0A'),
messageSends: ["initialize", "ifNil:"],
referencedClasses: []
}),
smalltalk.SimTLDefaultEventSource);


smalltalk.SimTLDefaultEventSource.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'accessors',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", [], smalltalk.Object.klass));})() : $receiver;
return self;},
args: [],
source: unescape('current%0A%0A%5Ecurrent%20ifNil%3A%20%5Bcurrent%20%3A%3D%20super%20new%5D%20'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.SimTLDefaultEventSource.klass);


smalltalk.addClass('SimTLEvent', smalltalk.SimTLObject, [], 'SimileTimeline');

smalltalk.addMethod(
unescape('_newEventCalled_starting_ending_withDescription_isInstant_'),
smalltalk.method({
selector: unescape('newEventCalled%3Astarting%3Aending%3AwithDescription%3AisInstant%3A'),
category: 'constructors',
fn: function (eventText, aStartDate, anEndDate, descriptionText, instantBoolean){
var self=this;
return (function($rec){smalltalk.send($rec, "_jsObject_", [new Timeline.DefaultEventSource.Event({ start: aStartDate, end: anEndDate, text: eventText, description: descriptionText, instant: instantBoolean}) ]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["eventText", "aStartDate", "anEndDate", "descriptionText", "instantBoolean"],
source: unescape('newEventCalled%3A%20eventText%20starting%3A%20aStartDate%20ending%3A%20anEndDate%20withDescription%3A%20descriptionText%20isInstant%3A%20instantBoolean%0A%0A%5Eself%20new%20jsObject%3A%20%28%3Cnew%20Timeline.DefaultEventSource.Event%28%7B%20start%3A%20aStartDate%2C%20end%3A%20anEndDate%2C%20text%3A%20eventText%2C%20description%3A%20descriptionText%2C%20instant%3A%20instantBoolean%7D%29%20%3E%29%3B%0A%09%09yourself%0A'),
messageSends: ["jsObject:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.SimTLEvent.klass);


smalltalk.addClass('SimTLTimeline', smalltalk.SimTLObject, ['dayNumber'], 'SimileTimeline');
smalltalk.addMethod(
unescape('_addEvent'),
smalltalk.method({
selector: unescape('addEvent'),
category: 'event creation',
fn: function (){
var self=this;
var event=nil;
smalltalk.send(smalltalk.send(self, "_eventSource", []), "_add_", [(event=smalltalk.send(self, "_nextDayEvent", []))]);
smalltalk.send(smalltalk.send(self, "_jsObject", []), "_paint", []);
return event;
return self;},
args: [],
source: unescape('addEvent%0A%7C%20event%20%7C%0A%0Aself%20eventSource%20add%3A%20%28event%20%3A%3D%20self%20nextDayEvent%29.%0Aself%20jsObject%20paint.%20%20%0A%5Eevent'),
messageSends: ["add:", "eventSource", "nextDayEvent", "paint", "jsObject"],
referencedClasses: []
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_eventSource'),
smalltalk.method({
selector: unescape('eventSource'),
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.SimTLDefaultEventSource || SimTLDefaultEventSource), "_current", []), "_jsObject", []);
return self;},
args: [],
source: unescape('eventSource%0A%0A%5ESimTLDefaultEventSource%20current%20jsObject'),
messageSends: ["jsObject", "current"],
referencedClasses: ["SimTLDefaultEventSource"]
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'event creation',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@dayNumber']=(0));
return self;},
args: [],
source: unescape('initialize%0A%0Asuper%20initialize.%0AdayNumber%20%3A%3D%200'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_moveCentre'),
smalltalk.method({
selector: unescape('moveCentre'),
category: 'utility',
fn: function (){
var self=this;
var newDate=nil;
(newDate=new XDate().addMonths(1,true));
smalltalk.send(self, "_setCenterVisibleDate_", [newDate]);
return self;},
args: [],
source: unescape('moveCentre%0A%7CnewDate%7C%0A%0AnewDate%20%3A%3D%20%3Cnew%20XDate%28%29.addMonths%281%2Ctrue%29%3E.%0Aself%20setCenterVisibleDate%3A%20newDate.'),
messageSends: ["setCenterVisibleDate:"],
referencedClasses: []
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_newTimeline'),
smalltalk.method({
selector: unescape('newTimeline'),
category: 'timeline configuration',
fn: function (){
var self=this;
var defaultEventSource=nil;
var timelineDiv=nil;
var bandInfoArray=nil;
(timelineDiv=document.getElementById('my-timeline'));
smalltalk.send((defaultEventSource=smalltalk.send(smalltalk.send((smalltalk.SimTLDefaultEventSource || SimTLDefaultEventSource), "_current", []), "_jsObject", [])), "_add_", [smalltalk.send(self, "_nextDayEvent", [])]);
(bandInfoArray=smalltalk.send(smalltalk.send((smalltalk.SimTLBandInfos || SimTLBandInfos), "_newFromWidth_eventSource_width_eventSource_", [(70), defaultEventSource, (30), defaultEventSource]), "_jsObject", []));
 bandInfoArray[1].syncWith = 0;
 bandInfoArray[1].highlight = true;
smalltalk.send(self, "_jsObject_", [ Timeline.create(timelineDiv, bandInfoArray)]);
return self;},
args: [],
source: unescape('newTimeline%0A%7C%20defaultEventSource%20timelineDiv%20bandInfoArray%20%7C%0AtimelineDiv%20%3A%3D%20%3Cdocument.getElementById%28%27my-timeline%27%29%3E.%0A%28defaultEventSource%20%3A%3D%20SimTLDefaultEventSource%20current%20jsObject%29%20add%3A%20self%20nextDayEvent.%20%0AbandInfoArray%20%3A%3D%20%28SimTLBandInfos%20newFromWidth%3A%2070%20eventSource%3A%20defaultEventSource%20width%3A%2030%20eventSource%3A%20defaultEventSource%29%20jsObject.%0A%3C%20bandInfoArray%5B1%5D.syncWith%20%3D%200%3E.%0A%3C%20bandInfoArray%5B1%5D.highlight%20%3D%20true%3E.%0Aself%20jsObject%3A%20%28%3C%20Timeline.create%28timelineDiv%2C%20bandInfoArray%29%3E%29'),
messageSends: ["add:", "jsObject", "current", "nextDayEvent", "newFromWidth:eventSource:width:eventSource:", "jsObject:"],
referencedClasses: ["SimTLDefaultEventSource", "SimTLBandInfos"]
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_nextDayEvent'),
smalltalk.method({
selector: unescape('nextDayEvent'),
category: 'event creation',
fn: function (){
var self=this;
var eventDate=nil;
var dayNumberString=nil;
(self['@dayNumber']=((($receiver = self['@dayNumber']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
(dayNumberString=smalltalk.send(self['@dayNumber'], "_asString", []));
(eventDate=new Date(dayNumberString + ' Apr, 2012 23:15:00'));
return smalltalk.send(smalltalk.send((smalltalk.SimTLEvent || SimTLEvent), "_newEventCalled_starting_ending_withDescription_isInstant_", [smalltalk.send("event", "__comma", [dayNumberString]), eventDate, eventDate, smalltalk.send("event description", "__comma", [dayNumberString]), true]), "_jsObject", []);
return self;},
args: [],
source: unescape('nextDayEvent%0A%7C%20eventDate%20dayNumberString%20%7C%0A%20%0AdayNumber%20%3A%3D%20dayNumber%20+%201.%0AdayNumberString%20%3A%3D%20dayNumber%20asString.%0AeventDate%20%3A%3D%20%20%3Cnew%20Date%28dayNumberString%20+%20%27%20Apr%2C%202012%2023%3A15%3A00%27%29%3E.%0A%5E%28SimTLEvent%20newEventCalled%3A%20%27event%27%2CdayNumberString%20starting%3A%20eventDate%20ending%3A%20eventDate%20withDescription%3A%20%27event%20description%27%2CdayNumberString%20isInstant%3A%20true%29%20jsObject'),
messageSends: [unescape("+"), "asString", "jsObject", "newEventCalled:starting:ending:withDescription:isInstant:", unescape("%2C")],
referencedClasses: ["SimTLEvent"]
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_setCenterVisibleDate_'),
smalltalk.method({
selector: unescape('setCenterVisibleDate%3A'),
category: 'utility',
fn: function (aDate){
var self=this;
var currentTimeline=nil;
(currentTimeline=smalltalk.send(self, "_jsObject", []));
currentTimeline.getBand(0).setCenterVisibleDate(Timeline.DateTime.parseGregorianDateTime(aDate));
return self;},
args: ["aDate"],
source: unescape('setCenterVisibleDate%3A%20aDate%0A%7CcurrentTimeline%7C%0AcurrentTimeline%20%3A%3D%20self%20jsObject.%0A%3CcurrentTimeline.getBand%280%29.setCenterVisibleDate%28Timeline.DateTime.parseGregorianDateTime%28aDate%29%29%3E'),
messageSends: ["jsObject"],
referencedClasses: []
}),
smalltalk.SimTLTimeline);


smalltalk.SimTLTimeline.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", [], smalltalk.SimTLObject.klass));})() : $receiver;
return self;},
args: [],
source: unescape('current%0A%0A%5Ecurrent%20ifNil%3A%20%5Bcurrent%20%3A%3D%20super%20new%5D%20'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.SimTLTimeline.klass);


smalltalk.addClass('SimTLTimelineManager', smalltalk.Object, [], 'SimileTimeline');
smalltalk.addMethod(
unescape('_addEvent'),
smalltalk.method({
selector: unescape('addEvent'),
category: 'event creation',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.SimTLTimeline || SimTLTimeline), "_current", []), "_addEvent", []);
return self;},
args: [],
source: unescape('addEvent%0A%0A%5ESimTLTimeline%20current%20addEvent.'),
messageSends: ["addEvent", "current"],
referencedClasses: ["SimTLTimeline"]
}),
smalltalk.SimTLTimelineManager);

smalltalk.addMethod(
unescape('_begin'),
smalltalk.method({
selector: unescape('begin'),
category: 'initialisation',
fn: function (){
var self=this;
var button1=nil;
var button2=nil;
var button3=nil;
(button1=smalltalk.send(unescape("%23createTimeline"), "_asJQuery", []));
smalltalk.send(button1, "_click_", [(function(){return smalltalk.send(self, "_createTimeline", []);})]);
(button2=smalltalk.send(unescape("%23addEvent"), "_asJQuery", []));
smalltalk.send(button2, "_click_", [(function(){return smalltalk.send(self, "_addEvent", []);})]);
(button3=smalltalk.send(unescape("%23moveCentre"), "_asJQuery", []));
smalltalk.send(button3, "_click_", [(function(){return smalltalk.send(self, "_moveCentre", []);})]);
return self;},
args: [],
source: unescape('begin%0A%22Create%20the%20timeline.%20Link%20to%20the%20action%20buttons%22%0A%7C%20button1%20button2%20button3%20%7C%0A%0Abutton1%20%3A%3D%20%27%23createTimeline%27%20asJQuery.%0Abutton1%20click%3A%20%5Bself%20createTimeline%5D.%0A%0Abutton2%20%3A%3D%20%27%23addEvent%27%20asJQuery.%0Abutton2%20click%3A%20%5Bself%20addEvent%5D.%0A%0Abutton3%20%3A%3D%20%27%23moveCentre%27%20asJQuery.%0Abutton3%20click%3A%20%5Bself%20moveCentre%5D.'),
messageSends: ["asJQuery", "click:", "createTimeline", "addEvent", "moveCentre"],
referencedClasses: []
}),
smalltalk.SimTLTimelineManager);

smalltalk.addMethod(
unescape('_createTimeline'),
smalltalk.method({
selector: unescape('createTimeline'),
category: 'timeline configuration',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.SimTLTimeline || SimTLTimeline), "_current", []), "_newTimeline", []);
return self;},
args: [],
source: unescape('createTimeline%0A%0ASimTLTimeline%20current%20newTimeline.'),
messageSends: ["newTimeline", "current"],
referencedClasses: ["SimTLTimeline"]
}),
smalltalk.SimTLTimelineManager);

smalltalk.addMethod(
unescape('_moveCentre'),
smalltalk.method({
selector: unescape('moveCentre'),
category: 'timeline configuration',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.SimTLTimeline || SimTLTimeline), "_current", []), "_moveCentre", []);
return self;},
args: [],
source: unescape('moveCentre%0A%0ASimTLTimeline%20current%20moveCentre.'),
messageSends: ["moveCentre", "current"],
referencedClasses: ["SimTLTimeline"]
}),
smalltalk.SimTLTimelineManager);



