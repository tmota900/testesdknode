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
import Product from './Product';

/**
 * The ProductBulkRequest model module.
 * @module org.egoi.client/org.egoi.client.model/ProductBulkRequest
 * @version 3.0.0-beta
 */
class ProductBulkRequest {
    /**
     * Constructs a new <code>ProductBulkRequest</code>.
     * Product bulk request schema
     * @alias module:org.egoi.client/org.egoi.client.model/ProductBulkRequest
     * @param products {Array.<module:org.egoi.client/org.egoi.client.model/Product>} Collection of products to import. Products having an incorrect format will be ignored
     */
    constructor(products) { 
        
        ProductBulkRequest.initialize(this, products);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, products) { 
        obj['products'] = products;
    }

    /**
     * Constructs a <code>ProductBulkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/ProductBulkRequest} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/ProductBulkRequest} The populated <code>ProductBulkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductBulkRequest();

            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [Product]);
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Collection of products to import. Products having an incorrect format will be ignored
 * @member {Array.<module:org.egoi.client/org.egoi.client.model/Product>} products
 */
ProductBulkRequest.prototype['products'] = undefined;

/**
 * How the import will be processed:  *                      'rewrite' - catalog content will be erased and then the imported products will be added  *                      'add' - adds imported products to the catalog without replacing any content. Duplicates will                         not be added  *                      'update' - adds imported products to the catalog and updates any duplicates found
 * @member {module:org.egoi.client/org.egoi.client.model/ProductBulkRequest.ModeEnum} mode
 * @default 'update'
 */
ProductBulkRequest.prototype['mode'] = 'update';





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
ProductBulkRequest['ModeEnum'] = {

    /**
     * value: "rewrite"
     * @const
     */
    "rewrite": "rewrite",

    /**
     * value: "add"
     * @const
     */
    "add": "add",

    /**
     * value: "update"
     * @const
     */
    "update": "update"
};



export default ProductBulkRequest;

