/**
 * APIv3 (Beta)
 *  # Introduction Just a quick pick!!! This is our new version of API. Remember, it is not stable yet!!! But we invite you play with it and give us your feedback ;) # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.   The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.   BaseURL = api.egoiapp.com  # HTTP Methods for RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication   We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:  #!/bin/bash  curl -X GET 'https://api.egoiapp.com/my-account' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:  #!/bin/bash  curl -X POST 'http://api.egoiapp.com/tags' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>' \\  -H 'Content-Type: application/json' \\  -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  <security-definitions/>
 *
 * The version of the OpenAPI document: 3.0.0-beta
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BasicProduct model module.
 * @module org.egoi.client/org.egoi.client.model/BasicProduct
 * @version 3.0.0-beta
 */
class BasicProduct {
    /**
     * Constructs a new <code>BasicProduct</code>.
     * Basic Product schema
     * @alias module:org.egoi.client/org.egoi.client.model/BasicProduct
     */
    constructor() { 
        
        BasicProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/BasicProduct} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/BasicProduct} The populated <code>BasicProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicProduct();

            if (data.hasOwnProperty('product_identifier')) {
                obj['product_identifier'] = ApiClient.convertToType(data['product_identifier'], 'String');
            }
            if (data.hasOwnProperty('catalog_id')) {
                obj['catalog_id'] = ApiClient.convertToType(data['catalog_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('ean')) {
                obj['ean'] = ApiClient.convertToType(data['ean'], 'String');
            }
            if (data.hasOwnProperty('gtin')) {
                obj['gtin'] = ApiClient.convertToType(data['gtin'], 'String');
            }
            if (data.hasOwnProperty('mpn')) {
                obj['mpn'] = ApiClient.convertToType(data['mpn'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('image_link')) {
                obj['image_link'] = ApiClient.convertToType(data['image_link'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('sale_price')) {
                obj['sale_price'] = ApiClient.convertToType(data['sale_price'], 'Number');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the product in your store
 * @member {String} product_identifier
 */
BasicProduct.prototype['product_identifier'] = undefined;

/**
 * @member {Number} catalog_id
 */
BasicProduct.prototype['catalog_id'] = undefined;

/**
 * Name of the product
 * @member {String} name
 */
BasicProduct.prototype['name'] = undefined;

/**
 * Description of the product
 * @member {String} description
 */
BasicProduct.prototype['description'] = undefined;

/**
 * Stock Keeping Unit
 * @member {String} sku
 */
BasicProduct.prototype['sku'] = undefined;

/**
 * Universal Product Code
 * @member {String} upc
 */
BasicProduct.prototype['upc'] = undefined;

/**
 * European Article Numbering
 * @member {String} ean
 */
BasicProduct.prototype['ean'] = undefined;

/**
 * Global Trade Item Number
 * @member {String} gtin
 */
BasicProduct.prototype['gtin'] = undefined;

/**
 * Manufacturer Part Number
 * @member {String} mpn
 */
BasicProduct.prototype['mpn'] = undefined;

/**
 * Link for the product
 * @member {String} link
 */
BasicProduct.prototype['link'] = undefined;

/**
 * Link for the product image
 * @member {String} image_link
 */
BasicProduct.prototype['image_link'] = undefined;

/**
 * Price of the product
 * @member {Number} price
 */
BasicProduct.prototype['price'] = undefined;

/**
 * Sale price of the product
 * @member {Number} sale_price
 */
BasicProduct.prototype['sale_price'] = undefined;

/**
 * Brand of the product
 * @member {String} brand
 */
BasicProduct.prototype['brand'] = undefined;






export default BasicProduct;

