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
 * The ContactStatusFieldsSchema model module.
 * @module org.egoi.client/org.egoi.client.model/ContactStatusFieldsSchema
 * @version 3.0.0-beta
 */
class ContactStatusFieldsSchema {
    /**
     * Constructs a new <code>ContactStatusFieldsSchema</code>.
     * Contact status schema
     * @alias module:org.egoi.client/org.egoi.client.model/ContactStatusFieldsSchema
     */
    constructor() { 
        
        ContactStatusFieldsSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactStatusFieldsSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/ContactStatusFieldsSchema} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/ContactStatusFieldsSchema} The populated <code>ContactStatusFieldsSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactStatusFieldsSchema();

            if (data.hasOwnProperty('email_status')) {
                obj['email_status'] = ApiClient.convertToType(data['email_status'], 'String');
            }
            if (data.hasOwnProperty('cellphone_status')) {
                obj['cellphone_status'] = ApiClient.convertToType(data['cellphone_status'], 'String');
            }
            if (data.hasOwnProperty('phone_status')) {
                obj['phone_status'] = ApiClient.convertToType(data['phone_status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Email channel status
 * @member {module:org.egoi.client/org.egoi.client.model/ContactStatusFieldsSchema.EmailStatusEnum} email_status
 */
ContactStatusFieldsSchema.prototype['email_status'] = undefined;

/**
 * Cellphone channel status
 * @member {module:org.egoi.client/org.egoi.client.model/ContactStatusFieldsSchema.CellphoneStatusEnum} cellphone_status
 */
ContactStatusFieldsSchema.prototype['cellphone_status'] = undefined;

/**
 * Phone channel status
 * @member {module:org.egoi.client/org.egoi.client.model/ContactStatusFieldsSchema.PhoneStatusEnum} phone_status
 */
ContactStatusFieldsSchema.prototype['phone_status'] = undefined;





/**
 * Allowed values for the <code>email_status</code> property.
 * @enum {String}
 * @readonly
 */
ContactStatusFieldsSchema['EmailStatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"
};


/**
 * Allowed values for the <code>cellphone_status</code> property.
 * @enum {String}
 * @readonly
 */
ContactStatusFieldsSchema['CellphoneStatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"
};


/**
 * Allowed values for the <code>phone_status</code> property.
 * @enum {String}
 * @readonly
 */
ContactStatusFieldsSchema['PhoneStatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"
};



export default ContactStatusFieldsSchema;

