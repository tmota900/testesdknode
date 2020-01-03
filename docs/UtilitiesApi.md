# ApIv3Beta.UtilitiesApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllCountries**](UtilitiesApi.md#getAllCountries) | **GET** /utilities/countries | Get all countries



## getAllCountries

> CountryCollection getAllCountries(opts)

Get all countries

Returns all countries

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.UtilitiesApi();
let opts = {
  'phone': "phone_example" // String | Phone number without country code to get all countries which can use that phone number
};
apiInstance.getAllCountries(opts, (error, data, response) => {
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
 **phone** | **String**| Phone number without country code to get all countries which can use that phone number | [optional] 

### Return type

[**CountryCollection**](CountryCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

