# ApIv3Beta.ContactsApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionAttachTag**](ContactsApi.md#actionAttachTag) | **POST** /lists/{list_id}/contacts/actions/attach-tag | Attach tag to contact
[**actionDetachTag**](ContactsApi.md#actionDetachTag) | **POST** /lists/{list_id}/contacts/actions/detach-tag | Detach tag to contact
[**actionExportContacts**](ContactsApi.md#actionExportContacts) | **POST** /lists/{list_id}/contacts/actions/export | Exports a list of contacts
[**actionImportBulk**](ContactsApi.md#actionImportBulk) | **POST** /lists/{list_id}/contacts/actions/import-bulk | Import collection of contacts
[**actionStartAutomation**](ContactsApi.md#actionStartAutomation) | **POST** /lists/{list_id}/contacts/actions/start-automation | Start automation
[**actionUnsubscribeContact**](ContactsApi.md#actionUnsubscribeContact) | **POST** /lists/{list_id}/contacts/actions/unsubscribe | Unsubscribes contacts
[**createContact**](ContactsApi.md#createContact) | **POST** /lists/{list_id}/contacts | Create new contact
[**getAllContactActivities**](ContactsApi.md#getAllContactActivities) | **GET** /lists/{list_id}/contacts/{contact_id}/activities | Get all contact activities
[**getAllContacts**](ContactsApi.md#getAllContacts) | **GET** /lists/{list_id}/contacts | Get all contacts
[**getContact**](ContactsApi.md#getContact) | **GET** /lists/{list_id}/contacts/{contact_id} | Get contact
[**patchContact**](ContactsApi.md#patchContact) | **PATCH** /lists/{list_id}/contacts/{contact_id} | Update a specific contact



## actionAttachTag

> AttachTagResponse actionAttachTag(listId, attachTagRequest)

Attach tag to contact

Attaches a tag to the provided contacts

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let listId = 56; // Number | ID of the List
let attachTagRequest = new ApIv3Beta.AttachTagRequest(); // AttachTagRequest | Parameters for the Tag
apiInstance.actionAttachTag(listId, attachTagRequest, (error, data, response) => {
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
 **listId** | **Number**| ID of the List | 
 **attachTagRequest** | [**AttachTagRequest**](AttachTagRequest.md)| Parameters for the Tag | 

### Return type

[**AttachTagResponse**](AttachTagResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## actionDetachTag

> AttachTagResponse actionDetachTag(listId, attachTagRequest)

Detach tag to contact

Detach a tag to the provided contacts

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let listId = 56; // Number | ID of the List
let attachTagRequest = new ApIv3Beta.AttachTagRequest(); // AttachTagRequest | Parameters for the Tag
apiInstance.actionDetachTag(listId, attachTagRequest, (error, data, response) => {
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
 **listId** | **Number**| ID of the List | 
 **attachTagRequest** | [**AttachTagRequest**](AttachTagRequest.md)| Parameters for the Tag | 

### Return type

[**AttachTagResponse**](AttachTagResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## actionExportContacts

> AcceptedResponse actionExportContacts(listId, contactExportRequest)

Exports a list of contacts

Exports a list of contacts to the desired callback url

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let listId = 56; // Number | ID of the List
let contactExportRequest = new ApIv3Beta.ContactExportRequest(); // ContactExportRequest | Parameters for export
apiInstance.actionExportContacts(listId, contactExportRequest, (error, data, response) => {
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
 **listId** | **Number**| ID of the List | 
 **contactExportRequest** | [**ContactExportRequest**](ContactExportRequest.md)| Parameters for export | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## actionImportBulk

> ImportBulkResponse actionImportBulk(listId, importBulkRequest)

Import collection of contacts

Imports a collection of contacts

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let listId = 56; // Number | ID of the List
let importBulkRequest = new ApIv3Beta.ImportBulkRequest(); // ImportBulkRequest | Parameters for the bulk import
apiInstance.actionImportBulk(listId, importBulkRequest, (error, data, response) => {
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
 **listId** | **Number**| ID of the List | 
 **importBulkRequest** | [**ImportBulkRequest**](ImportBulkRequest.md)| Parameters for the bulk import | 

### Return type

[**ImportBulkResponse**](ImportBulkResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## actionStartAutomation

> StartAutomationResponse actionStartAutomation(listId, startAutomationRequest)

Start automation

Start automation to the provided contacts

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let listId = 56; // Number | ID of the List
let startAutomationRequest = new ApIv3Beta.StartAutomationRequest(); // StartAutomationRequest | Parameters for the operation to start automation
apiInstance.actionStartAutomation(listId, startAutomationRequest, (error, data, response) => {
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
 **listId** | **Number**| ID of the List | 
 **startAutomationRequest** | [**StartAutomationRequest**](StartAutomationRequest.md)| Parameters for the operation to start automation | 

### Return type

[**StartAutomationResponse**](StartAutomationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## actionUnsubscribeContact

> RemoveResponse actionUnsubscribeContact(listId, removeRequest)

Unsubscribes contacts

Unsubscribes contacts

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let listId = 56; // Number | ID of the List
let removeRequest = new ApIv3Beta.RemoveRequest(); // RemoveRequest | Parameters for the contact to unsubscribe
apiInstance.actionUnsubscribeContact(listId, removeRequest, (error, data, response) => {
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
 **listId** | **Number**| ID of the List | 
 **removeRequest** | [**RemoveRequest**](RemoveRequest.md)| Parameters for the contact to unsubscribe | 

### Return type

[**RemoveResponse**](RemoveResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContact

> CreateContactResponse createContact(listId, contactBaseExtra)

Create new contact

Create a new contact

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let listId = 56; // Number | ID of the list where the contact belongs
let contactBaseExtra = new ApIv3Beta.ContactBaseExtra(); // ContactBaseExtra | Parameters for the Contact
apiInstance.createContact(listId, contactBaseExtra, (error, data, response) => {
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
 **listId** | **Number**| ID of the list where the contact belongs | 
 **contactBaseExtra** | [**ContactBaseExtra**](ContactBaseExtra.md)| Parameters for the Contact | 

### Return type

[**CreateContactResponse**](CreateContactResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllContactActivities

> ActivityCollection getAllContactActivities(contactId, listId, opts)

Get all contact activities

Returns all contact activities

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let contactId = "contactId_example"; // String | ID of the Contact
let listId = 56; // Number | ID of the List
let opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'dateMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'dateMax': new Date("2013-10-20T19:20:30+01:00") // Date | End date
};
apiInstance.getAllContactActivities(contactId, listId, opts, (error, data, response) => {
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
 **contactId** | **String**| ID of the Contact | 
 **listId** | **Number**| ID of the List | 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **dateMin** | **Date**| Start date | [optional] 
 **dateMax** | **Date**| End date | [optional] 

### Return type

[**ActivityCollection**](ActivityCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllContacts

> ContactCollection getAllContacts(listId, opts)

Get all contacts

Returns all contacts

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let listId = 56; // Number | ID of the List
let opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10 // Number | Number of items to return
};
apiInstance.getAllContacts(listId, opts, (error, data, response) => {
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
 **listId** | **Number**| ID of the List | 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]

### Return type

[**ContactCollection**](ContactCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContact

> ComplexContact getContact(contactId, listId)

Get contact

Returns contact information given its ID

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let contactId = "contactId_example"; // String | ID of the Contact
let listId = 56; // Number | ID of the List
apiInstance.getContact(contactId, listId, (error, data, response) => {
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
 **contactId** | **String**| ID of the Contact | 
 **listId** | **Number**| ID of the List | 

### Return type

[**ComplexContact**](ComplexContact.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchContact

> CreateContactResponse patchContact(contactId, listId, contactBaseStatusExtra)

Update a specific contact

Update contact

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ContactsApi();
let contactId = "contactId_example"; // String | ID of the Contact
let listId = 56; // Number | ID of the List
let contactBaseStatusExtra = new ApIv3Beta.ContactBaseStatusExtra(); // ContactBaseStatusExtra | Parameters for the contact
apiInstance.patchContact(contactId, listId, contactBaseStatusExtra, (error, data, response) => {
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
 **contactId** | **String**| ID of the Contact | 
 **listId** | **Number**| ID of the List | 
 **contactBaseStatusExtra** | [**ContactBaseStatusExtra**](ContactBaseStatusExtra.md)| Parameters for the contact | 

### Return type

[**CreateContactResponse**](CreateContactResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

