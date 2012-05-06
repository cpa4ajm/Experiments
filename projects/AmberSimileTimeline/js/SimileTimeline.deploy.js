smalltalk.addPackage('SimileTimeline', {});
smalltalk.addClass('SimTLObject', smalltalk.Object, ['jsObject'], 'SimileTimeline');
smalltalk.addMethod(
unescape('_jsObject'),
smalltalk.method({
selector: unescape('jsObject'),
fn: function (){
var self=this;
return self['@jsObject'];
return self;}
}),
smalltalk.SimTLObject);

smalltalk.addMethod(
unescape('_jsObject_'),
smalltalk.method({
selector: unescape('jsObject%3A'),
fn: function (aJavascriptObject){
var self=this;
return (self['@jsObject']=aJavascriptObject);
return self;}
}),
smalltalk.SimTLObject);



smalltalk.addClass('SimTLBandInfo', smalltalk.SimTLObject, ['width', 'intervalUnit', 'intervalPixels', 'eventSource', 'theme', 'date', 'timeZone', 'showEventText', 'trackHeight'], 'SimileTimeline');
smalltalk.addMethod(
unescape('_widthAsTextPercentage'),
smalltalk.method({
selector: unescape('widthAsTextPercentage'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_widthAsTextPercentage_", [self['@width']]);
return self;}
}),
smalltalk.SimTLBandInfo);


smalltalk.addMethod(
unescape('_createBandInfoWidth_intervalUnit_intervalPixels_eventSource_theme_date_timeZone_showEventText_trackHeight_'),
smalltalk.method({
selector: unescape('createBandInfoWidth%3AintervalUnit%3AintervalPixels%3AeventSource%3Atheme%3Adate%3AtimeZone%3AshowEventText%3AtrackHeight%3A'),
fn: function (aWidth, anIntervalNumber, anIntervalPixelsNumber, anEventSource, aTheme, aDate, aTimeZone, aShowEventTestBoolean, aTrackHeightNumber){
var self=this;
var bandInfo=nil;
var widthPercentageText=nil;
(widthPercentageText=smalltalk.send(self, "_widthAsTextPercentage_", [aWidth]));
(bandInfo=Timeline.createBandInfo({width: widthPercentageText, date: aDate, intervalUnit: anIntervalNumber, intervalPixels: anIntervalPixelsNumber, eventSource: anEventSource}));
return smalltalk.send(self, "_jsObject_", [bandInfo]);
return self;}
}),
smalltalk.SimTLBandInfo.klass);

smalltalk.addMethod(
unescape('_newFromWidth_intervalUnit_eventSource_'),
smalltalk.method({
selector: unescape('newFromWidth%3AintervalUnit%3AeventSource%3A'),
fn: function (aWidth, anIntervalUnit, anEventSource){
var self=this;
var bandInfo=nil;
var widthPercentageText=nil;
(widthPercentageText=smalltalk.send(self, "_widthAsTextPercentage_", [aWidth]));
(bandInfo=Timeline.createBandInfo({width: widthPercentageText, date: new Date(), intervalUnit: anIntervalUnit, intervalPixels: 100, eventSource: anEventSource}));
return (function($rec){smalltalk.send($rec, "_jsObject_", [bandInfo]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.SimTLBandInfo.klass);

smalltalk.addMethod(
unescape('_widthAsTextPercentage_'),
smalltalk.method({
selector: unescape('widthAsTextPercentage%3A'),
fn: function (aWidth){
var self=this;
return (($receiver = aWidth) == nil || $receiver == undefined) ? (function(){return aWidth;})() : (function(){return ((($receiver = smalltalk.send(aWidth, "_isNumber", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(aWidth, "_asString", []), "__comma", [unescape("%25")]);})() : (function(){return aWidth;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(aWidth, "_asString", []), "__comma", [unescape("%25")]);}), (function(){return aWidth;})]));})();
return self;}
}),
smalltalk.SimTLBandInfo.klass);


smalltalk.addClass('SimTLBandInfos', smalltalk.SimTLObject, [], 'SimileTimeline');

smalltalk.addMethod(
unescape('_newFromWidth_eventSource_width_eventSource_'),
smalltalk.method({
selector: unescape('newFromWidth%3AeventSource%3Awidth%3AeventSource%3A'),
fn: function (firstWidth, firstEventSource, secondWidth, secondEventSource){
var self=this;
var bandInfo1=nil;
var bandInfo2=nil;
var bandInfoArray=nil;
(bandInfo1=smalltalk.send(smalltalk.send((smalltalk.SimTLBandInfo || SimTLBandInfo), "_newFromWidth_intervalUnit_eventSource_", [firstWidth, (5), firstEventSource]), "_jsObject", []));
(bandInfo2=smalltalk.send(smalltalk.send((smalltalk.SimTLBandInfo || SimTLBandInfo), "_newFromWidth_intervalUnit_eventSource_", [secondWidth, (6), secondEventSource]), "_jsObject", []));
(bandInfoArray=[bandInfo1, bandInfo2]);
return (function($rec){smalltalk.send($rec, "_jsObject_", [bandInfoArray]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.SimTLBandInfos.klass);


smalltalk.addClass('SimTLDefaultEventSource', smalltalk.SimTLObject, [], 'SimileTimeline');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SimTLObject);
(($receiver = self['@jsObject']) == nil || $receiver == undefined) ? (function(){return (self['@jsObject']=new Timeline.DefaultEventSource());})() : $receiver;
return self;}
}),
smalltalk.SimTLDefaultEventSource);


smalltalk.SimTLDefaultEventSource.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", [], smalltalk.Object.klass));})() : $receiver;
return self;}
}),
smalltalk.SimTLDefaultEventSource.klass);


smalltalk.addClass('SimTLEvent', smalltalk.SimTLObject, [], 'SimileTimeline');

smalltalk.addMethod(
unescape('_newEventCalled_starting_ending_withDescription_isInstant_'),
smalltalk.method({
selector: unescape('newEventCalled%3Astarting%3Aending%3AwithDescription%3AisInstant%3A'),
fn: function (eventText, aStartDate, anEndDate, descriptionText, instantBoolean){
var self=this;
return (function($rec){smalltalk.send($rec, "_jsObject_", [new Timeline.DefaultEventSource.Event({ start: aStartDate, end: anEndDate, text: eventText, description: descriptionText, instant: instantBoolean}) ]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.SimTLEvent.klass);


smalltalk.addClass('SimTLTimeline', smalltalk.SimTLObject, ['dayNumber'], 'SimileTimeline');
smalltalk.addMethod(
unescape('_addEvent'),
smalltalk.method({
selector: unescape('addEvent'),
fn: function (){
var self=this;
var event=nil;
smalltalk.send(smalltalk.send(self, "_eventSource", []), "_add_", [(event=smalltalk.send(self, "_nextDayEvent", []))]);
smalltalk.send(smalltalk.send(self, "_jsObject", []), "_paint", []);
return event;
return self;}
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_eventSource'),
smalltalk.method({
selector: unescape('eventSource'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.SimTLDefaultEventSource || SimTLDefaultEventSource), "_current", []), "_jsObject", []);
return self;}
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@dayNumber']=(0));
return self;}
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_moveCentre'),
smalltalk.method({
selector: unescape('moveCentre'),
fn: function (){
var self=this;
var newDate=nil;
(newDate=new XDate().addMonths(1,true));
smalltalk.send(self, "_setCenterVisibleDate_", [newDate]);
return self;}
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_newTimeline'),
smalltalk.method({
selector: unescape('newTimeline'),
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
return self;}
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_nextDayEvent'),
smalltalk.method({
selector: unescape('nextDayEvent'),
fn: function (){
var self=this;
var eventDate=nil;
var dayNumberString=nil;
(self['@dayNumber']=((($receiver = self['@dayNumber']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
(dayNumberString=smalltalk.send(self['@dayNumber'], "_asString", []));
(eventDate=new Date(dayNumberString + ' Apr, 2012 23:15:00'));
return smalltalk.send(smalltalk.send((smalltalk.SimTLEvent || SimTLEvent), "_newEventCalled_starting_ending_withDescription_isInstant_", [smalltalk.send("event", "__comma", [dayNumberString]), eventDate, eventDate, smalltalk.send("event description", "__comma", [dayNumberString]), true]), "_jsObject", []);
return self;}
}),
smalltalk.SimTLTimeline);

smalltalk.addMethod(
unescape('_setCenterVisibleDate_'),
smalltalk.method({
selector: unescape('setCenterVisibleDate%3A'),
fn: function (aDate){
var self=this;
var currentTimeline=nil;
(currentTimeline=smalltalk.send(self, "_jsObject", []));
currentTimeline.getBand(0).setCenterVisibleDate(Timeline.DateTime.parseGregorianDateTime(aDate));
return self;}
}),
smalltalk.SimTLTimeline);


smalltalk.SimTLTimeline.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", [], smalltalk.SimTLObject.klass));})() : $receiver;
return self;}
}),
smalltalk.SimTLTimeline.klass);


smalltalk.addClass('SimTLTimelineManager', smalltalk.Object, [], 'SimileTimeline');
smalltalk.addMethod(
unescape('_addEvent'),
smalltalk.method({
selector: unescape('addEvent'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.SimTLTimeline || SimTLTimeline), "_current", []), "_addEvent", []);
return self;}
}),
smalltalk.SimTLTimelineManager);

smalltalk.addMethod(
unescape('_begin'),
smalltalk.method({
selector: unescape('begin'),
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
return self;}
}),
smalltalk.SimTLTimelineManager);

smalltalk.addMethod(
unescape('_createTimeline'),
smalltalk.method({
selector: unescape('createTimeline'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.SimTLTimeline || SimTLTimeline), "_current", []), "_newTimeline", []);
return self;}
}),
smalltalk.SimTLTimelineManager);

smalltalk.addMethod(
unescape('_moveCentre'),
smalltalk.method({
selector: unescape('moveCentre'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.SimTLTimeline || SimTLTimeline), "_current", []), "_moveCentre", []);
return self;}
}),
smalltalk.SimTLTimelineManager);



