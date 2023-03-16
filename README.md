### Link to published version
https://ankozhd.github.io/campaigns-test


### Assignment

The candidate should create a simple react application that shows a list of campaign that can be filtered by campaign name and by date (using a
date range selector).

### Requirements

The application should be accessible from a public repository in Github.
The application must use React.
There is no restriction on the libraries/tools to use during the development.
The look and feel of the application is left to the taste of the candidate.
The application must be written as if it would be released in production.

### Application Requirements

The application should be a simple page with the following elements:
A list of Campaign which shows
The Name
The startDate
The endDate
A flag to state if the Campaign is active (a campaign is running when the current date is inside the start-end date range)
The Budget (in USD dollar)
A Search Form before the list in order to filter the list by Campaign Name
A DateRange component that filters the list of campaigns based on a Start and End Date.
If the campaign has a startDate that is contained in the range, it should show
If the campaign has an endDate that is contained in the range, it should show.
You should not be able to select an end-date that is before the start-date.
If the endDate is before the start Date, the campaign should not show.

### Mockup

The UI look and feel is left to the candidate, use your own taste and make it as beautiful as you can.
The list should show in some kind of Table.
The active status should be in the green palette.
The inactive status should be in the red palette.

### How to test the application

The candidate will expose a global method called &#39;AddCampaigns&#39; that takes an array of Campaigns and will render them.
This function will be invoked from the browser’s JavaScript console for testing purposes. If it cannot be invoked, the submission will be rejected.
The method is allowed to be called multiple times. If so, the new campaigns will append to the existing list.

Example of campaign array that can be passed

```json
[{"id":1,"name":"Divavu","startDate":"9/19/2017","endDate":"3/9/2018","B
udget":88377},
{"id":2,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018",
"Budget":608715},
{"id":3,"name":"Miboo","startDate":"11/1/2017","endDate":"6/20/2017","Bu
dget":239507},
{"id":4,"name":"Trilith","startDate":"8/25/2017","endDate":"11/30/2017",
"Budget":179838},
{"id":5,"name":"Layo","startDate":"11/28/2017","endDate":"3/10/2018","Bu
dget":837850},
{"id":6,"name":"Photojam","startDate":"7/25/2017","endDate":"6/23/2017",
"Budget":858131},
{"id":7,"name":"Blogtag","startDate":"6/27/2017","endDate":"1/15/2018","
Budget":109078},
{"id":8,"name":"Rhyzio","startDate":"10/13/2017","endDate":"1/25/2018","
Budget":272552},
{"id":9,"name":"Zoomcast","startDate":"9/6/2017","endDate":"11/10/2017",
"Budget":301919},
{"id":10,"name":"Realbridge","startDate":"3/5/2018","endDate":"10/2/2017
","Budget":505602}]
```