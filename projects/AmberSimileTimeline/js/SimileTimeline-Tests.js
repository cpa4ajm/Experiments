smalltalk.addPackage('SimileTimeline-Tests', {});
smalltalk.addClass('SimTLDefaultEventSourceTest', smalltalk.TestCase, [], 'SimileTimeline-Tests');
smalltalk.addMethod(
unescape('_testIfNil'),
smalltalk.method({
selector: unescape('testIfNil'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SimTLDefaultEventSource || SimTLDefaultEventSource), "_current", []), "_jsObject", []), "_isNil", [])]);
return self;},
args: [],
source: unescape('testIfNil%0A%09self%20deny%3A%20SimTLDefaultEventSource%20current%20jsObject%20isNil.'),
messageSends: ["deny:", "isNil", "jsObject", "current"],
referencedClasses: ["SimTLDefaultEventSource"]
}),
smalltalk.SimTLDefaultEventSourceTest);



