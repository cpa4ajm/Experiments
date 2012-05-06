Smalltalk current createPackage: 'SimileTimeline' properties: #{}!
Object subclass: #SimTLObject
	instanceVariableNames: 'jsObject'
	package: 'SimileTimeline'!

!SimTLObject methodsFor: 'accessors'!

jsObject

^jsObject
!

jsObject: aJavascriptObject

^jsObject := aJavascriptObject
! !

SimTLObject subclass: #SimTLBandInfo
	instanceVariableNames: 'width intervalUnit intervalPixels eventSource theme date timeZone showEventText trackHeight'
	package: 'SimileTimeline'!

!SimTLBandInfo methodsFor: 'utility'!

widthAsTextPercentage
"return the width checking that it is as a string percentage"

^self class widthAsTextPercentage: width
! !

!SimTLBandInfo class methodsFor: 'constructors'!

createBandInfoWidth: aWidth intervalUnit: anIntervalNumber intervalPixels: anIntervalPixelsNumber eventSource: anEventSource theme: aTheme date: aDate timeZone: aTimeZone showEventText: aShowEventTestBoolean trackHeight: aTrackHeightNumber
| bandInfo widthPercentageText|

widthPercentageText := self widthAsTextPercentage: aWidth.
 bandInfo := <Timeline.createBandInfo({width: widthPercentageText, date: aDate, intervalUnit: anIntervalNumber, intervalPixels: anIntervalPixelsNumber, eventSource: anEventSource})>.
^self jsObject: bandInfo
!

newFromWidth: aWidth intervalUnit: anIntervalUnit eventSource: anEventSource
| bandInfo widthPercentageText|

widthPercentageText := self widthAsTextPercentage: aWidth.
 bandInfo := <Timeline.createBandInfo({width: widthPercentageText, date: new Date(), intervalUnit: anIntervalUnit, intervalPixels: 100, eventSource: anEventSource})>.
^self new jsObject: bandInfo;
		 yourself
! !

!SimTLBandInfo class methodsFor: 'utility'!

widthAsTextPercentage: aWidth
"return the width checking that it is as a string percentage"

^aWidth ifNil: [aWidth]
	   ifNotNil: [aWidth isNumber ifTrue:[aWidth asString, '%'] ifFalse: [aWidth]]
! !

SimTLObject subclass: #SimTLBandInfos
	instanceVariableNames: ''
	package: 'SimileTimeline'!

!SimTLBandInfos class methodsFor: 'constructors'!

newFromWidth: firstWidth eventSource: firstEventSource width: secondWidth eventSource: secondEventSource
| bandInfo1 bandInfo2 bandInfoArray|

bandInfo1 := (SimTLBandInfo newFromWidth: firstWidth intervalUnit: 5 eventSource: firstEventSource) jsObject.
bandInfo2 := (SimTLBandInfo newFromWidth: secondWidth intervalUnit: 6 eventSource: secondEventSource) jsObject.
bandInfoArray := <[bandInfo1, bandInfo2]>.
^self new jsObject: bandInfoArray;
		 yourself
! !

SimTLObject subclass: #SimTLDefaultEventSource
	instanceVariableNames: ''
	package: 'SimileTimeline'!

!SimTLDefaultEventSource methodsFor: 'initialisation'!

initialize

super initialize.
jsObject ifNil: [jsObject := <new Timeline.DefaultEventSource()>].
! !

SimTLDefaultEventSource class instanceVariableNames: 'current'!

!SimTLDefaultEventSource class methodsFor: 'accessors'!

current

^current ifNil: [current := super new]
! !

SimTLObject subclass: #SimTLEvent
	instanceVariableNames: ''
	package: 'SimileTimeline'!

!SimTLEvent class methodsFor: 'constructors'!

newEventCalled: eventText starting: aStartDate ending: anEndDate withDescription: descriptionText isInstant: instantBoolean

^self new jsObject: (<new Timeline.DefaultEventSource.Event({ start: aStartDate, end: anEndDate, text: eventText, description: descriptionText, instant: instantBoolean}) >);
		yourself
! !

SimTLObject subclass: #SimTLTimeline
	instanceVariableNames: 'dayNumber'
	package: 'SimileTimeline'!

!SimTLTimeline methodsFor: 'accessors'!

eventSource

^SimTLDefaultEventSource current jsObject
! !

!SimTLTimeline methodsFor: 'event creation'!

addEvent
| event |

self eventSource add: (event := self nextDayEvent).
self jsObject paint.  
^event
!

initialize

super initialize.
dayNumber := 0
!

nextDayEvent
| eventDate dayNumberString |
 
dayNumber := dayNumber + 1.
dayNumberString := dayNumber asString.
eventDate :=  <new Date(dayNumberString + ' Apr, 2012 23:15:00')>.
^(SimTLEvent newEventCalled: 'event',dayNumberString starting: eventDate ending: eventDate withDescription: 'event description',dayNumberString isInstant: true) jsObject
! !

!SimTLTimeline methodsFor: 'timeline configuration'!

newTimeline
| defaultEventSource timelineDiv bandInfoArray |
timelineDiv := <document.getElementById('my-timeline')>.
(defaultEventSource := SimTLDefaultEventSource current jsObject) add: self nextDayEvent. 
bandInfoArray := (SimTLBandInfos newFromWidth: 70 eventSource: defaultEventSource width: 30 eventSource: defaultEventSource) jsObject.
< bandInfoArray[1].syncWith = 0>.
< bandInfoArray[1].highlight = true>.
self jsObject: (< Timeline.create(timelineDiv, bandInfoArray)>)
! !

!SimTLTimeline methodsFor: 'utility'!

moveCentre
|newDate|

newDate := <new XDate().addMonths(1,true)>.
self setCenterVisibleDate: newDate.
!

setCenterVisibleDate: aDate
|currentTimeline|
currentTimeline := self jsObject.
<currentTimeline.getBand(0).setCenterVisibleDate(Timeline.DateTime.parseGregorianDateTime(aDate))>
! !

SimTLTimeline class instanceVariableNames: 'current'!

!SimTLTimeline class methodsFor: 'not yet classified'!

current

^current ifNil: [current := super new]
! !

Object subclass: #SimTLTimelineManager
	instanceVariableNames: ''
	package: 'SimileTimeline'!

!SimTLTimelineManager methodsFor: 'event creation'!

addEvent

^SimTLTimeline current addEvent.
! !

!SimTLTimelineManager methodsFor: 'initialisation'!

begin
"Create the timeline. Link to the action buttons"
| button1 button2 button3 |

button1 := '#createTimeline' asJQuery.
button1 click: [self createTimeline].

button2 := '#addEvent' asJQuery.
button2 click: [self addEvent].

button3 := '#moveCentre' asJQuery.
button3 click: [self moveCentre].
! !

!SimTLTimelineManager methodsFor: 'timeline configuration'!

createTimeline

SimTLTimeline current newTimeline.
!

moveCentre

SimTLTimeline current moveCentre.
! !

