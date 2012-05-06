Smalltalk current createPackage: 'HelloApp' properties: #{}!
Object subclass: #Hello
	instanceVariableNames: 'cordova device deviceName'
	package: 'HelloApp'!

!Hello methodsFor: 'basics'!

begin
"Makes me say hello to the user."

| msg deviceName button button2|

msg := self helloFromSmalltalk.
button := '#sayHello' asJQuery.
button click: [button after: '<p>' , msg , '</p>'].

deviceName := self currentDeviceName.
button2 := '#sayDeviceName' asJQuery.
button2 click: [button2 after: '<p>' , deviceName , '</p>'].
!

helloFromSmalltalk

^'Hello from Smalltalk ', self withComplexEmbeddedJavascriptText, 'at ', Date today
!

withEmbeddedJavascriptText

^<'with ' + 'embedded ' + ' javascript ' + 'text '>
! !

!Hello methodsFor: 'experiments'!

currentDeviceName
"Will only work when using PhoneGap"

^deviceName
!

initialiseDeviceViaCordova

deviceName :=  < new require('cordova-1.6.0')>
!

initialize

"self initialiseDeviceViaCordova"
!

moreComplexEmbeddedJavascript
	"some more examples"

	|socket |
	socket :=  < new require('net').Socket()>.
!

withComplexEmbeddedJavascriptText

^<new Date();>
! !

