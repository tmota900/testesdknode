# ApIv3Beta.AutomationsApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAutomation**](AutomationsApi.md#createAutomation) | **POST** /automations | Create new automation
[**deleteAutomation**](AutomationsApi.md#deleteAutomation) | **DELETE** /automations/{automation_id} | Remove automation
[**getAllAutomations**](AutomationsApi.md#getAllAutomations) | **GET** /automations | Get all automations
[**updateAutomation**](AutomationsApi.md#updateAutomation) | **PUT** /automations/{automation_id} | Update a specific automation



## createAutomation

> Automation createAutomation(automation)

Create new automation

Create a new automation

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.AutomationsApi();
let automation = new ApIv3Beta.Automation(); // Automation | Parameters for the automation
apiInstance.createAutomation(automation, (error, data, response) => {
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
 **automation** | [**Automation**](Automation.md)| Parameters for the automation | 

### Return type

[**Automation**](Automation.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAutomation

> deleteAutomation(automationId)

Remove automation

Remove automation information given its ID

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.AutomationsApi();
let automationId = 56; // Number | ID of the Automation
apiInstance.deleteAutomation(automationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | **Number**| ID of the Automation | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllAutomations

> AutomationCollection getAllAutomations(opts)

Get all automations

Returns all automations

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.AutomationsApi();
let opts = {
  'automationId': 56, // Number | Reference attribute to automation id
  'title': "title_example", // String | Reference attribute to title
  'createdBy': 56, // Number | Reference attribute to created by
  'listId': 56, // Number | ID of the list that owns the automation
  'status': "status_example", // String | Automation status
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'automation_id'" // String | Reference attribute to order automations
};
apiInstance.getAllAutomations(opts, (error, data, response) => {
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
 **automationId** | **Number**| Reference attribute to automation id | [optional] 
 **title** | **String**| Reference attribute to title | [optional] 
 **createdBy** | **Number**| Reference attribute to created by | [optional] 
 **listId** | **Number**| ID of the list that owns the automation | [optional] 
 **status** | **String**| Automation status | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order automations | [optional] [default to &#39;automation_id&#39;]

### Return type

[**AutomationCollection**](AutomationCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAutomation

> Automation updateAutomation(automationId, automation)

Update a specific automation

Update an automation

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.AutomationsApi();
let automationId = 56; // Number | ID of the Automation
let automation = new ApIv3Beta.Automation(); // Automation | Parameters for the automation
apiInstance.updateAutomation(automationId, automation, (error, data, response) => {
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
 **automationId** | **Number**| ID of the Automation | 
 **automation** | [**Automation**](Automation.md)| Parameters for the automation | 

### Return type

[**Automation**](Automation.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

