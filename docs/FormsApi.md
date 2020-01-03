# ApIv3Beta.FormsApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllForms**](FormsApi.md#getAllForms) | **GET** /forms | Get all forms



## getAllForms

> FormCollection getAllForms(opts)

Get all forms

Returns all forms

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.FormsApi();
let opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'form_id'", // String | Reference attribute to order forms
  'language': "language_example", // String | Language of the form
  'listId': 56, // Number | ID of the list that owns the form
  'owner': 56, // Number | User ID of the form owner
  'status': "status_example", // String | Status filter
  'createdMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Created initial date
  'createdMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Created finish
  'updatedMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated initial
  'updatedMax': new Date("2013-10-20T19:20:30+01:00") // Date | Updated finish
};
apiInstance.getAllForms(opts, (error, data, response) => {
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
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order forms | [optional] [default to &#39;form_id&#39;]
 **language** | **String**| Language of the form | [optional] 
 **listId** | **Number**| ID of the list that owns the form | [optional] 
 **owner** | **Number**| User ID of the form owner | [optional] 
 **status** | **String**| Status filter | [optional] 
 **createdMin** | **Date**| Created initial date | [optional] 
 **createdMax** | **Date**| Created finish | [optional] 
 **updatedMin** | **Date**| Updated initial | [optional] 
 **updatedMax** | **Date**| Updated finish | [optional] 

### Return type

[**FormCollection**](FormCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

