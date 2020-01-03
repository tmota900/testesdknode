# ApIv3Beta.SuppressionListApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSuppressionList**](SuppressionListApi.md#getAllSuppressionList) | **GET** /suppression-list | Get the suppression list



## getAllSuppressionList

> SuppressionListItems getAllSuppressionList(opts)

Get the suppression list

Returns the suppression list

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SuppressionListApi();
let opts = {
  'type': "type_example", // String | Suppression type
  'method': "method_example", // String | Suppression method
  'value': "value_example", // String | Reference attribute to value suppression list
  'campaignHash': "campaignHash_example", // String | Reference attribute to campaign id
  'createdMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Created initial date
  'createdMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Created finish
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'id'" // String | Reference attribute to order the suppression list
};
apiInstance.getAllSuppressionList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Suppression type | [optional] 
 **method** | **String**| Suppression method | [optional] 
 **value** | **String**| Reference attribute to value suppression list | [optional] 
 **campaignHash** | **String**| Reference attribute to campaign id | [optional] 
 **createdMin** | **Date**| Created initial date | [optional] 
 **createdMax** | **Date**| Created finish | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order the suppression list | [optional] [default to &#39;id&#39;]

### Return type

[**SuppressionListItems**](SuppressionListItems.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

