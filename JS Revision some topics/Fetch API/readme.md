# API (Application Programming Interface)
Request - response cycle.
We request to api
Api sends response

# Fetch Api

The fetch API provides an interface for fetching (sending/receiving) resources.

It uses `Request` and `Response` objects.

The `fetch()` method is used to fetch a resource (data).

Fetch() method is asynchronous method and returns promise.

`let promise = fetch(url,[option]);`

## Example of API

### Free  APIs
`https://free-apis.github.io/#/browse`

`status 200 ==> successful request`

--- 

# Network requests

## GET Request
Request that is used for only receiving data.

# Understanding TERMS

## AJAX
AJAX is Asynchronous JS & XML

Data formate:Cash, Online  transaction => data dealing is also change

XML is replaced by JSON.
(Previous times=>  data return formate was is XML
but now a days it is in JSON normally)

## JSON
JSON is Javascript Object Notation

`AJAJ` max api that return data in JSON formate
AJAJ =>  Async Javascipt and JSON

AJAJ is not really a popular term

We still call netwrok request exchange `AJAX` even though XML is replaced by JSON

## json() method
json() method returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)

## Process of API Call

1- Responce in JSON Formate
2- Convert Responce in JS object (usable formate) by using json() method

json() method is asynchronous method and retuurns promise

---

# Request & Response

##  HTTP Verbs 
(HTTP => Hyper Text Transfer Protocol
protocol => Rules)

- ### GET
Request using get should only retrieve data

- ### POST
Request To send some specific data

- ### DELETE
Request To delete data 

## Response Status Code

- ### Informational Response (100-199)
- ### Successful Response (200-299)
- ### Redirection Message (300-399)
- ### Client Error Response (400-499)
- ### Server Error Response (500-599)

## HTTP Response Headers
HTTP responce headers also contain detials about the response, such as content type, HTTP satus code etc.