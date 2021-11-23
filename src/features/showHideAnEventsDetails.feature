Feature: Show/hide an event’s details

Scenario: An event element is collapsed by default.
	Given a user is on main page,
	When the event element is collapsed by default,
	Then the user should see only certain elements of events (event's title, date, and location).

Scenario: User can expand an event to see its details.
	Given a user wants to see the details of an event,
	When the user clicks on the desired event,
	Then the user expands an event and see its details (event's description).

Scenario: User can collapse an event to hide its details.
	Given a user with an expanded event,
	When the user clicks on the expanded event,
	Then the user collapses the event element and hide its details.


