Smalltalk current createPackage: 'SimileTimeline-Tests' properties: #{}!
TestCase subclass: #SimTLDefaultEventSourceTest
	instanceVariableNames: ''
	package: 'SimileTimeline-Tests'!

!SimTLDefaultEventSourceTest methodsFor: 'tests'!

testIfNil
	self deny: SimTLDefaultEventSource current jsObject isNil.
! !

