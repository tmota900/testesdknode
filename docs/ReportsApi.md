# ApIv3Beta.ReportsApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPushReport**](ReportsApi.md#getPushReport) | **GET** /reports/push/{campaign_hash} | Get push report
[**getSMSReport**](ReportsApi.md#getSMSReport) | **GET** /reports/sms/{campaign_hash} | Get sms report
[**getVoiceReport**](ReportsApi.md#getVoiceReport) | **GET** /reports/voice/{campaign_hash} | Get voice report
[**getWebPushReport**](ReportsApi.md#getWebPushReport) | **GET** /reports/web-push/{campaign_hash} | Get webpush report



## getPushReport

> PushReport getPushReport(campaignHash, opts)

Get push report

Returns a push report given the campaign hash

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ReportsApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let opts = {
  'operatingSystems': true, // Boolean | True to show operating system stats
  'brands': true // Boolean | True to show brand stats
};
apiInstance.getPushReport(campaignHash, opts, (error, data, response) => {
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
 **campaignHash** | **String**| ID of the Campaign | 
 **operatingSystems** | **Boolean**| True to show operating system stats | [optional] [default to true]
 **brands** | **Boolean**| True to show brand stats | [optional] [default to true]

### Return type

[**PushReport**](PushReport.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSMSReport

> PhoneReport getSMSReport(campaignHash, opts)

Get sms report

Returns sms report given the campaign hash

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ReportsApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let opts = {
  'networks': true // Boolean | True to show network stats
};
apiInstance.getSMSReport(campaignHash, opts, (error, data, response) => {
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
 **campaignHash** | **String**| ID of the Campaign | 
 **networks** | **Boolean**| True to show network stats | [optional] [default to true]

### Return type

[**PhoneReport**](PhoneReport.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVoiceReport

> PhoneReport getVoiceReport(campaignHash, opts)

Get voice report

Returns voice report given the campaign hash

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ReportsApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let opts = {
  'networks': true // Boolean | True to show network stats
};
apiInstance.getVoiceReport(campaignHash, opts, (error, data, response) => {
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
 **campaignHash** | **String**| ID of the Campaign | 
 **networks** | **Boolean**| True to show network stats | [optional] [default to true]

### Return type

[**PhoneReport**](PhoneReport.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebPushReport

> WebPushReport getWebPushReport(campaignHash, opts)

Get webpush report

Returns webpush report given the campaign hash

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.ReportsApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let opts = {
  'devices': true, // Boolean | True to show device stats
  'operatingSystems': true, // Boolean | True to show operating systems stats
  'browsers': true, // Boolean | True to show browser stats
  'url': true // Boolean | True to show url stats
};
apiInstance.getWebPushReport(campaignHash, opts, (error, data, response) => {
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
 **campaignHash** | **String**| ID of the Campaign | 
 **devices** | **Boolean**| True to show device stats | [optional] [default to true]
 **operatingSystems** | **Boolean**| True to show operating systems stats | [optional] [default to true]
 **browsers** | **Boolean**| True to show browser stats | [optional] [default to true]
 **url** | **Boolean**| True to show url stats | [optional] [default to true]

### Return type

[**WebPushReport**](WebPushReport.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

