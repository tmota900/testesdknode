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
 * The List model module.
 * @module org.egoi.client/org.egoi.client.model/List
 * @version 3.0.0-beta
 */
class List {
    /**
     * Constructs a new <code>List</code>.
     * List schema
     * @alias module:org.egoi.client/org.egoi.client.model/List
     * @param publicName {String} Public name of the list
     */
    constructor(publicName) { 
        
        List.initialize(this, publicName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, publicName) { 
        obj['public_name'] = publicName;
    }

    /**
     * Constructs a <code>List</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/List} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/List} The populated <code>List</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new List();

            if (data.hasOwnProperty('list_id')) {
                obj['list_id'] = ApiClient.convertToType(data['list_id'], 'Number');
            }
            if (data.hasOwnProperty('internal_name')) {
                obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'String');
            }
            if (data.hasOwnProperty('public_name')) {
                obj['public_name'] = ApiClient.convertToType(data['public_name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} list_id
 */
List.prototype['list_id'] = undefined;

/**
 * Internal name of the list
 * @member {String} internal_name
 */
List.prototype['internal_name'] = undefined;

/**
 * Public name of the list
 * @member {String} public_name
 */
List.prototype['public_name'] = undefined;

/**
 * Status of the list
 * @member {module:org.egoi.client/org.egoi.client.model/List.StatusEnum} status
 */
List.prototype['status'] = undefined;

/**
 * ID of the list group
 * @member {Number} group_id
 */
List.prototype['group_id'] = undefined;

/**
 * @member {Date} created
 */
List.prototype['created'] = undefined;

/**
 * @member {Date} updated
 */
List.prototype['updated'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
List['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "blocked"
     * @const
     */
    "blocked": "blocked"
};



export default List;

