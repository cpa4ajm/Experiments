Smalltalk current createPackage: 'HelloApp' properties: #{}!
Object subclass: #Hello
	instanceVariableNames: ''
	category: 'HelloApp'!

!Hello methodsFor: 'not yet classified'!

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

^'Hello from Smalltalk at ', Date today
!

currentDeviceName
"Will only work when using PhoneGap"
"^<device.name>"
^'Dummy device name sring'
! !

