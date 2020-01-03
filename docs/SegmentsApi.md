# ApIv3Beta.SegmentsApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSegment**](SegmentsApi.md#createSegment) | **POST** /lists/{list_id}/segments | Create new segment
[**deleteSegment**](SegmentsApi.md#deleteSegment) | **DELETE** /lists/{list_id}/segments/{segment_id} | Remove segment
[**getAllSegments**](SegmentsApi.md#getAllSegments) | **GET** /lists/{list_id}/segments | Get all segments
[**getSegment**](SegmentsApi.md#getSegment) | **GET** /lists/{list_id}/segments/{segment_id} | Get segment



## createSegment

> SavedSegment createSegment(listId, savedSegment)

Create new segment

Create a new segment

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SegmentsApi();
let listId = 56; // Number | ID of the List
let savedSegment = new ApIv3Beta.SavedSegment(); // SavedSegment | Parameters for the segment
apiInstance.createSegment(listId, savedSegment, (error, data, response) => {
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
 **savedSegment** | [**SavedSegment**](SavedSegment.md)| Parameters for the segment | 

### Return type

[**SavedSegment**](SavedSegment.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSegment

> deleteSegment(segmentId, listId)

Remove segment

Remove segment information given its ID

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SegmentsApi();
let segmentId = "segmentId_example"; // String | ID of the Segment
let listId = 56; // Number | ID of the List
apiInstance.deleteSegment(segmentId, listId, (error, data, response) => {
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
 **segmentId** | **String**| ID of the Segment | 
 **listId** | **Number**| ID of the List | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllSegments

> SegmentCollection getAllSegments(listId, opts)

Get all segments

Returns all segments

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SegmentsApi();
let listId = 56; // Number | ID of the List
let opts = {
  'type': "type_example", // String | Type of segment
  'name': "name_example", // String | Segment name
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10 // Number | Number of items to return
};
apiInstance.getAllSegments(listId, opts, (error, data, response) => {
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
 **type** | **String**| Type of segment | [optional] 
 **name** | **String**| Segment name | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]

### Return type

[**SegmentCollection**](SegmentCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSegment

> Segment getSegment(segmentId, listId)

Get segment

Returns segment information given its ID

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.SegmentsApi();
let segmentId = "segmentId_example"; // String | ID of the Segment
let listId = 56; // Number | ID of the List
apiInstance.getSegment(segmentId, listId, (error, data, response) => {
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
 **segmentId** | **String**| ID of the Segment | 
 **listId** | **Number**| ID of the List | 

### Return type

[**Segment**](Segment.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

