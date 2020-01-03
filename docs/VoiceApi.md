# ApIv3Beta.VoiceApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionSendVoice**](VoiceApi.md#actionSendVoice) | **POST** /campaigns/voice/{campaign_hash}/actions/send | Send voice message
[**createVoiceCampaign**](VoiceApi.md#createVoiceCampaign) | **POST** /campaigns/voice | Create new voice campaign
[**patchVoiceCampaign**](VoiceApi.md#patchVoiceCampaign) | **PATCH** /campaigns/voice/{campaign_hash} | Update a specific voice campaign



## actionSendVoice

> AcceptedResponse actionSendVoice(campaignHash, campaignVoiceSendRequest)

Send voice message

Deploys and sends an voice message

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.VoiceApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let campaignVoiceSendRequest = {"schedule_date":"2019-04-01 12:30:23","list_id":1,"segments":{"type":"none"},"notify":[0],"destination_field":"cellphone","limit_contacts":{"type":"percent","value":10},"limit_hour":{"hour_start":"01:00","hour_end":"04:00"},"limit_speed":1}; // CampaignVoiceSendRequest | Parameters for the 'send voice' action
apiInstance.actionSendVoice(campaignHash, campaignVoiceSendRequest, (error, data, response) => {
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
 **campaignVoiceSendRequest** | [**CampaignVoiceSendRequest**](CampaignVoiceSendRequest.md)| Parameters for the &#39;send voice&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVoiceCampaign

> CampaignHash createVoiceCampaign(voiceCampaign)

Create new voice campaign

Create a new voice campaign

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.VoiceApi();
let voiceCampaign = new ApIv3Beta.VoiceCampaign(); // VoiceCampaign | Parameters for the Voice Campaign
apiInstance.createVoiceCampaign(voiceCampaign, (error, data, response) => {
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
 **voiceCampaign** | [**VoiceCampaign**](VoiceCampaign.md)| Parameters for the Voice Campaign | 

### Return type

[**CampaignHash**](CampaignHash.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchVoiceCampaign

> CampaignHash patchVoiceCampaign(campaignHash, voicePatchCampaign)

Update a specific voice campaign

Update a voice campaign

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.VoiceApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let voicePatchCampaign = new ApIv3Beta.VoicePatchCampaign(); // VoicePatchCampaign | Parameters for the Voice Campaign
apiInstance.patchVoiceCampaign(campaignHash, voicePatchCampaign, (error, data, response) => {
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
 **voicePatchCampaign** | [**VoicePatchCampaign**](VoicePatchCampaign.md)| Parameters for the Voice Campaign | 

### Return type

[**CampaignHash**](CampaignHash.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

