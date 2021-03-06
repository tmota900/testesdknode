# ApIv3Beta.SmsApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionSendSms**](SmsApi.md#actionSendSms) | **POST** /campaigns/sms/{campaign_hash}/actions/send | Send sms message
[**createSmsCampaign**](SmsApi.md#createSmsCampaign) | **POST** /campaigns/sms | Create new sms campaign
[**patchSmsCampaign**](SmsApi.md#patchSmsCampaign) | **PATCH** /campaigns/sms/{campaign_hash} | Update a specific sms campaign



## actionSendSms

> AcceptedResponse actionSendSms(campaignHash, campaignSmsSendRequest)

Send sms message

Deploys and sends an sms message

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SmsApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let campaignSmsSendRequest = new ApIv3Beta.CampaignSmsSendRequest(); // CampaignSmsSendRequest | Parameters for the 'send sms' action
apiInstance.actionSendSms(campaignHash, campaignSmsSendRequest, (error, data, response) => {
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
 **campaignSmsSendRequest** | [**CampaignSmsSendRequest**](CampaignSmsSendRequest.md)| Parameters for the &#39;send sms&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSmsCampaign

> HashcodeCampaign createSmsCampaign(smsCampaign)

Create new sms campaign

Create a new sms campaign

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SmsApi();
let smsCampaign = new ApIv3Beta.SmsCampaign(); // SmsCampaign | Parameters for the Sms Campaign
apiInstance.createSmsCampaign(smsCampaign, (error, data, response) => {
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
 **smsCampaign** | [**SmsCampaign**](SmsCampaign.md)| Parameters for the Sms Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchSmsCampaign

> HashcodeCampaign patchSmsCampaign(campaignHash, smsCampaignPatchRequest)

Update a specific sms campaign

Update sms campaign

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SmsApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let smsCampaignPatchRequest = new ApIv3Beta.SmsCampaignPatchRequest(); // SmsCampaignPatchRequest | Parameters for the Sms Campaign
apiInstance.patchSmsCampaign(campaignHash, smsCampaignPatchRequest, (error, data, response) => {
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
 **smsCampaignPatchRequest** | [**SmsCampaignPatchRequest**](SmsCampaignPatchRequest.md)| Parameters for the Sms Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

