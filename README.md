<p align="center">
    <img src="https://i.imgur.com/yeM70JU.png">
    <h2>The Express middleware for microservice tracing</h2>
</p>

<p>
  APISense is a Express middleware, that help you to track all the requests and the data that is being sent all over your microservices.
  
  It allow you to see all the system logs, the new requests sent and the responses generated by a incoming request in your service.
</p>
<br>

<h2>1. How to implement APISense?</h2>

First, install the package via NPM:
<br>
<code>
npm install apisense --save
</code>

<br>
And finally, just add the middleware in all the services you want to trace:

<code>
app.use(require('apisense')())
</code>


<br>
<h2>2. How to use APISense?</h2>
APISense deploy a new interface in every service deployed. You can access the APISense interface from the service URL + "/apisense".

<br>
Example:
<code>
localhost:8000/apisense
</code>

The interface shows all the request received in the server (the recent ones first).
<img width="700" src="https://i.imgur.com/CwLzKBS.png" border="3px">


You can click in any request to get all the details about that request, this includes the logs generated by that requests, the new requests and also the response sent.
<img border="5" width="700" src="https://i.imgur.com/GNpy17v.png">




You can also click in the information like the response to get the headers and body data.
<img border="5" width="700" src="https://i.imgur.com/gcPCPzj.png">

