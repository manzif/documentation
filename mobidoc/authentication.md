---
pageClass: frontend-class
---

# Authentication

With the authentication service the user is able to prove to the system his identity with valid information , if the user is valid then system provides access to the resources.


## /authentication : POST

#### Headers

- Content-type: application/json

#### Code snipets of data

```
{
  "username": "John",
  "password": "123456"
}
```

## Expected response

if the request was sucessfull you will receive response similar to these below

#### if you are successfully authenticated

```
{
  "username": "John",
  "password": "123456"
}
```

#### if you are not successfully authenticated

```
{
    "name": "NotAuthenticated",
    "message": "Invalid login",
    "code": 401,
    "className": "not-authenticated",
    "errors": {}
}
```