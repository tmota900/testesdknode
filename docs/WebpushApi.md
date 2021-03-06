# ApIv3Beta.WebpushApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionEnableWebPushRss**](WebpushApi.md#actionEnableWebPushRss) | **POST** /campaigns/webpush/rss/{campaign_hash}/actions/enable | Enable a rss webpush campaign
[**actionSendWebPush**](WebpushApi.md#actionSendWebPush) | **POST** /campaigns/web-push/{campaign_hash}/actions/send | Send webpush message
[**createWebPushCampaign**](WebpushApi.md#createWebPushCampaign) | **POST** /campaigns/web-push | Create new webpush campaign
[**createWebPushRssCampaign**](WebpushApi.md#createWebPushRssCampaign) | **POST** /campaigns/webpush/rss | Create new webpush rss campaign
[**getAllWebPushSites**](WebpushApi.md#getAllWebPushSites) | **GET** /webpush/site | Get all webpush sites
[**patchWebPushCampaign**](WebpushApi.md#patchWebPushCampaign) | **PATCH** /campaigns/web-push/{campaign_hash} | Update a specific webpush campaign



## actionEnableWebPushRss

> AcceptedResponse actionEnableWebPushRss(campaignHash)

Enable a rss webpush campaign

Enable rss webpush message

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.WebpushApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
apiInstance.actionEnableWebPushRss(campaignHash, (error, data, response) => {
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

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionSendWebPush

> AcceptedResponse actionSendWebPush(campaignHash, campaignWebPushSendRequest)

Send webpush message

Deploys and sends a webpush message

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.WebpushApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let campaignWebPushSendRequest = new ApIv3Beta.CampaignWebPushSendRequest(); // CampaignWebPushSendRequest | Parameters for the 'send web-push' action
apiInstance.actionSendWebPush(campaignHash, campaignWebPushSendRequest, (error, data, response) => {
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
 **campaignWebPushSendRequest** | [**CampaignWebPushSendRequest**](CampaignWebPushSendRequest.md)| Parameters for the &#39;send web-push&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWebPushCampaign

> CampaignHash createWebPushCampaign(webPushCampaign)

Create new webpush campaign

Create a new webpush campaign

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.WebpushApi();
let webPushCampaign = new ApIv3Beta.WebPushCampaign(); // WebPushCampaign | Parameters for the webpush campaign
apiInstance.createWebPushCampaign(webPushCampaign, (error, data, response) => {
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
 **webPushCampaign** | [**WebPushCampaign**](WebPushCampaign.md)| Parameters for the webpush campaign | 

### Return type

[**CampaignHash**](CampaignHash.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWebPushRssCampaign

> HashcodeCampaign createWebPushRssCampaign(webPushRssCampaign)

Create new webpush rss campaign

Create a new webpush rss campaign

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.WebpushApi();
let webPushRssCampaign = new ApIv3Beta.WebPushRssCampaign(); // WebPushRssCampaign | Parameters for the WebPush Campaign
apiInstance.createWebPushRssCampaign(webPushRssCampaign, (error, data, response) => {
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
 **webPushRssCampaign** | [**WebPushRssCampaign**](WebPushRssCampaign.md)| Parameters for the WebPush Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllWebPushSites

> TagCollection1 getAllWebPushSites(opts)

Get all webpush sites

Returns all wepush&#39;s sites

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.WebpushApi();
let opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'list_id'", // String | Reference attribute to order sites
  'listId': 56 // Number | Select sites referenced to a list
};
apiInstance.getAllWebPushSites(opts, (error, data, response) => {
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
 **orderBy** | **String**| Reference attribute to order sites | [optional] [default to &#39;list_id&#39;]
 **listId** | **Number**| Select sites referenced to a list | [optional] 

### Return type

[**TagCollection1**](TagCollection1.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchWebPushCampaign

> CampaignHash patchWebPushCampaign(campaignHash, webPushPatchCampaign)

Update a specific webpush campaign

Update a webpush campaign

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.WebpushApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let webPushPatchCampaign = new ApIv3Beta.WebPushPatchCampaign(); // WebPushPatchCampaign | Parameters for the Webpush Campaign
apiInstance.patchWebPushCampaign(campaignHash, webPushPatchCampaign, (error, data, response) => {
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
 **webPushPatchCampaign** | [**WebPushPatchCampaign**](WebPushPatchCampaign.md)| Parameters for the Webpush Campaign | 

### Return type

[**CampaignHash**](CampaignHash.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

