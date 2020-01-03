# ApIv3Beta.PingApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping**](PingApi.md#ping) | **POST** /ping | Pings the API



## ping

> Ping ping()

Pings the API

Checks if API is up and running

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';

let apiInstance = new ApIv3Beta.PingApi();
apiInstance.ping((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Ping**](Ping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

