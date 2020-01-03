# ApIv3Beta.EcommerceApi

All URIs are relative to *http://api-v3.egoiapp.max*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCatalog**](EcommerceApi.md#createCatalog) | **POST** /catalogs | Create new catalog
[**createProduct**](EcommerceApi.md#createProduct) | **POST** /catalogs/{catalog_id}/products | Create new product
[**deleteCatalog**](EcommerceApi.md#deleteCatalog) | **DELETE** /catalogs/{catalog_id} | Remove catalog
[**deleteProduct**](EcommerceApi.md#deleteProduct) | **DELETE** /catalogs/{catalog_id}/products/{product_identifier} | Remove product
[**getAllCatalogs**](EcommerceApi.md#getAllCatalogs) | **GET** /catalogs | Get all catalogs
[**getAllProducts**](EcommerceApi.md#getAllProducts) | **GET** /catalogs/{catalog_id}/products | Get all products
[**getProduct**](EcommerceApi.md#getProduct) | **GET** /catalogs/{catalog_id}/products/{product_identifier} | Get product
[**importProducts**](EcommerceApi.md#importProducts) | **POST** /catalogs/{catalog_id}/products/actions/import | Import products
[**updateProduct**](EcommerceApi.md#updateProduct) | **PATCH** /catalogs/{catalog_id}/products/{product_identifier} | Update product



## createCatalog

> Catalog createCatalog(catalogPostRequest)

Create new catalog

Creates a new catalog

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.EcommerceApi();
let catalogPostRequest = new ApIv3Beta.CatalogPostRequest(); // CatalogPostRequest | Parameters for the Catalog
apiInstance.createCatalog(catalogPostRequest, (error, data, response) => {
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
 **catalogPostRequest** | [**CatalogPostRequest**](CatalogPostRequest.md)| Parameters for the Catalog | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProduct

> Product createProduct(catalogId, productPostRequest)

Create new product

Creates a new product

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let productPostRequest = new ApIv3Beta.ProductPostRequest(); // ProductPostRequest | Parameters for the Product
apiInstance.createProduct(catalogId, productPostRequest, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productPostRequest** | [**ProductPostRequest**](ProductPostRequest.md)| Parameters for the Product | 

### Return type

[**Product**](Product.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCatalog

> deleteCatalog(catalogId)

Remove catalog

Remove catalog information given its ID

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
apiInstance.deleteCatalog(catalogId, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProduct

> deleteProduct(catalogId, productIdentifier)

Remove product

Remove product information given its ID

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let productIdentifier = "productIdentifier_example"; // String | ID of the Product
apiInstance.deleteProduct(catalogId, productIdentifier, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| ID of the Product | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllCatalogs

> CatalogCollection getAllCatalogs()

Get all catalogs

Returns all catalogs

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.EcommerceApi();
apiInstance.getAllCatalogs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CatalogCollection**](CatalogCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllProducts

> ProductCollection getAllProducts(catalogId, opts)

Get all products

Returns all products for the given catalog

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let opts = {
  'productIdentifier': "productIdentifier_example", // String | Product ID in your store
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10 // Number | Number of items to return
};
apiInstance.getAllProducts(catalogId, opts, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| Product ID in your store | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]

### Return type

[**ProductCollection**](ProductCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProduct

> Product getProduct(catalogId, productIdentifier)

Get product

Returns product information given its ID

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let productIdentifier = "productIdentifier_example"; // String | ID of the Product
apiInstance.getProduct(catalogId, productIdentifier, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| ID of the Product | 

### Return type

[**Product**](Product.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importProducts

> AcceptedResponse importProducts(catalogId, productBulkRequest)

Import products

Imports a collection of products

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let productBulkRequest = new ApIv3Beta.ProductBulkRequest(); // ProductBulkRequest | Parameters for the Product
apiInstance.importProducts(catalogId, productBulkRequest, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productBulkRequest** | [**ProductBulkRequest**](ProductBulkRequest.md)| Parameters for the Product | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProduct

> Product updateProduct(catalogId, productIdentifier, productPatchRequest)

Update product

Updates a product

### Example

```javascript
import ApIv3Beta from 'ap_iv3__beta';
let defaultClient = ApIv3Beta.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new ApIv3Beta.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let productIdentifier = "productIdentifier_example"; // String | ID of the Product
let productPatchRequest = new ApIv3Beta.ProductPatchRequest(); // ProductPatchRequest | Parameters for the product
apiInstance.updateProduct(catalogId, productIdentifier, productPatchRequest, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| ID of the Product | 
 **productPatchRequest** | [**ProductPatchRequest**](ProductPatchRequest.md)| Parameters for the product | 

### Return type

[**Product**](Product.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

