# ApIv3Beta.SendersApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCellphoneSender**](SendersApi.md#createCellphoneSender) | **POST** /senders/cellphone | Create cellphone sender
[**createEmailSender**](SendersApi.md#createEmailSender) | **POST** /senders/email | Create email sender
[**createPhoneSender**](SendersApi.md#createPhoneSender) | **POST** /senders/phone | Create phone sender
[**deleteCellphoneSender**](SendersApi.md#deleteCellphoneSender) | **DELETE** /senders/cellphone/{sender_id} | Remove cellphone sender
[**deleteEmailSender**](SendersApi.md#deleteEmailSender) | **DELETE** /senders/email/{sender_id} | Remove email sender
[**deletePhoneSender**](SendersApi.md#deletePhoneSender) | **DELETE** /senders/phone/{sender_id} | Remove phone sender
[**getAllCellphoneSenders**](SendersApi.md#getAllCellphoneSenders) | **GET** /senders/cellphone | Get all cellphone senders
[**getAllEmailSenders**](SendersApi.md#getAllEmailSenders) | **GET** /senders/email | Get all email senders
[**getAllPhoneSenders**](SendersApi.md#getAllPhoneSenders) | **GET** /senders/phone | Get all phone senders
[**putEmailSender**](SendersApi.md#putEmailSender) | **PUT** /senders/email/{sender_id} | Update email sender



## createCellphoneSender

> CellphoneSender createCellphoneSender(cellphoneSender)

Create cellphone sender

Creates a cellphone sender

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SendersApi();
let cellphoneSender = new ApIv3Beta.CellphoneSender(); // CellphoneSender | Parameters for the sender
apiInstance.createCellphoneSender(cellphoneSender, (error, data, response) => {
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
 **cellphoneSender** | [**CellphoneSender**](CellphoneSender.md)| Parameters for the sender | 

### Return type

[**CellphoneSender**](CellphoneSender.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEmailSender

> EmailSender createEmailSender(emailSender)

Create email sender

Creates an email sender

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SendersApi();
let emailSender = new ApIv3Beta.EmailSender(); // EmailSender | Parameters for the sender
apiInstance.createEmailSender(emailSender, (error, data, response) => {
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
 **emailSender** | [**EmailSender**](EmailSender.md)| Parameters for the sender | 

### Return type

[**EmailSender**](EmailSender.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPhoneSender

> PhoneSender createPhoneSender(phoneSender)

Create phone sender

Creates a phone sender

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SendersApi();
let phoneSender = new ApIv3Beta.PhoneSender(); // PhoneSender | Parameters for the sender
apiInstance.createPhoneSender(phoneSender, (error, data, response) => {
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
 **phoneSender** | [**PhoneSender**](PhoneSender.md)| Parameters for the sender | 

### Return type

[**PhoneSender**](PhoneSender.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCellphoneSender

> deleteCellphoneSender(senderId)

Remove cellphone sender

Remove sender information given its ID

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SendersApi();
let senderId = 56; // Number | ID of the Sender
apiInstance.deleteCellphoneSender(senderId, (error, data, response) => {
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
 **senderId** | **Number**| ID of the Sender | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEmailSender

> deleteEmailSender(senderId)

Remove email sender

Remove sender information given its ID

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SendersApi();
let senderId = 56; // Number | ID of the Sender
apiInstance.deleteEmailSender(senderId, (error, data, response) => {
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
 **senderId** | **Number**| ID of the Sender | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePhoneSender

> deletePhoneSender(senderId)

Remove phone sender

Remove sender information given its ID

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SendersApi();
let senderId = 56; // Number | ID of the Sender
apiInstance.deletePhoneSender(senderId, (error, data, response) => {
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
 **senderId** | **Number**| ID of the Sender | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllCellphoneSenders

> CellphoneSenderCollection getAllCellphoneSenders(opts)

Get all cellphone senders

Returns all cellphone senders

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SendersApi();
let opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'status': "status_example" // String | Status filter
};
apiInstance.getAllCellphoneSenders(opts, (error, data, response) => {
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
 **status** | **String**| Status filter | [optional] 

### Return type

[**CellphoneSenderCollection**](CellphoneSenderCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllEmailSenders

> EmailSenderCollection getAllEmailSenders(opts)

Get all email senders

Returns all email senders

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SendersApi();
let opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'status': "status_example" // String | Status filter
};
apiInstance.getAllEmailSenders(opts, (error, data, response) => {
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
 **status** | **String**| Status filter | [optional] 

### Return type

[**EmailSenderCollection**](EmailSenderCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPhoneSenders

> PhoneSenderCollection getAllPhoneSenders(opts)

Get all phone senders

Returns all phone senders

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SendersApi();
let opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'status': "status_example" // String | Status filter
};
apiInstance.getAllPhoneSenders(opts, (error, data, response) => {
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
 **status** | **String**| Status filter | [optional] 

### Return type

[**PhoneSenderCollection**](PhoneSenderCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putEmailSender

> EmailSender putEmailSender(senderId, emailSenderPutRequest)

Update email sender

Updates an email sender

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SendersApi();
let senderId = 56; // Number | ID of the Sender
let emailSenderPutRequest = new ApIv3Beta.EmailSenderPutRequest(); // EmailSenderPutRequest | Parameters for the contact
apiInstance.putEmailSender(senderId, emailSenderPutRequest, (error, data, response) => {
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
 **senderId** | **Number**| ID of the Sender | 
 **emailSenderPutRequest** | [**EmailSenderPutRequest**](EmailSenderPutRequest.md)| Parameters for the contact | 

### Return type

[**EmailSender**](EmailSender.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

