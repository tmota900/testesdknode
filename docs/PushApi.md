# ApIv3Beta.PushApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionSendPush**](PushApi.md#actionSendPush) | **POST** /campaigns/push/{campaign_hash}/actions/send | Send push message
[**createPushCampaign**](PushApi.md#createPushCampaign) | **POST** /campaigns/push | Create new push campaign
[**patchPushCampaign**](PushApi.md#patchPushCampaign) | **PATCH** /campaigns/push/{campaign_hash} | Update a specific push campaign



## actionSendPush

> AcceptedResponse actionSendPush(campaignHash, campaignPushSendRequest)

Send push message

Deploys and sends a push message

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.PushApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let campaignPushSendRequest = new ApIv3Beta.CampaignPushSendRequest(); // CampaignPushSendRequest | Parameters for the 'send push' action
apiInstance.actionSendPush(campaignHash, campaignPushSendRequest, (error, data, response) => {
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
 **campaignPushSendRequest** | [**CampaignPushSendRequest**](CampaignPushSendRequest.md)| Parameters for the &#39;send push&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPushCampaign

> HashcodeCampaign createPushCampaign(pushCampaignPostRequest)

Create new push campaign

Create a new push campaign

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.PushApi();
let pushCampaignPostRequest = new ApIv3Beta.PushCampaignPostRequest(); // PushCampaignPostRequest | Parameters for the push campaign
apiInstance.createPushCampaign(pushCampaignPostRequest, (error, data, response) => {
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
 **pushCampaignPostRequest** | [**PushCampaignPostRequest**](PushCampaignPostRequest.md)| Parameters for the push campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchPushCampaign

> HashcodeCampaign patchPushCampaign(campaignHash, pushCampaignPatchRequest)

Update a specific push campaign

Update push campaign

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.PushApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let pushCampaignPatchRequest = new ApIv3Beta.PushCampaignPatchRequest(); // PushCampaignPatchRequest | Parameters for the push campaign
apiInstance.patchPushCampaign(campaignHash, pushCampaignPatchRequest, (error, data, response) => {
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
 **pushCampaignPatchRequest** | [**PushCampaignPatchRequest**](PushCampaignPatchRequest.md)| Parameters for the push campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

