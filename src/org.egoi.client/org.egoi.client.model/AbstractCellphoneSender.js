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
import AbstractCellphoneSenderAllOf from './AbstractCellphoneSenderAllOf';
import BasicSender from './BasicSender';

/**
 * The AbstractCellphoneSender model module.
 * @module org.egoi.client/org.egoi.client.model/AbstractCellphoneSender
 * @version 3.0.0-beta
 */
class AbstractCellphoneSender {
    /**
     * Constructs a new <code>AbstractCellphoneSender</code>.
     * Abstract cellphone sender schema
     * @alias module:org.egoi.client/org.egoi.client.model/AbstractCellphoneSender
     * @implements module:org.egoi.client/org.egoi.client.model/BasicSender
     * @implements module:org.egoi.client/org.egoi.client.model/AbstractCellphoneSenderAllOf
     * @param senderId {Number} 
     * @param type {module:org.egoi.client/org.egoi.client.model/AbstractCellphoneSender.TypeEnum} Sender code type
     */
    constructor(senderId, type) { 
        BasicSender.initialize(this, senderId);AbstractCellphoneSenderAllOf.initialize(this);
        AbstractCellphoneSender.initialize(this, senderId, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, senderId, type) { 
        obj['sender_id'] = senderId;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>AbstractCellphoneSender</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/AbstractCellphoneSender} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/AbstractCellphoneSender} The populated <code>AbstractCellphoneSender</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AbstractCellphoneSender();
            BasicSender.constructFromObject(data, obj);
            AbstractCellphoneSenderAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('sender_id')) {
                obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} sender_id
 */
AbstractCellphoneSender.prototype['sender_id'] = undefined;

/**
 * Status of the sender
 * @member {module:org.egoi.client/org.egoi.client.model/AbstractCellphoneSender.StatusEnum} status
 */
AbstractCellphoneSender.prototype['status'] = undefined;

/**
 * Sender code type
 * @member {module:org.egoi.client/org.egoi.client.model/AbstractCellphoneSender.TypeEnum} type
 */
AbstractCellphoneSender.prototype['type'] = undefined;


// Implement BasicSender interface:
/**
 * @member {Number} sender_id
 */
BasicSender.prototype['sender_id'] = undefined;
/**
 * Status of the sender
 * @member {module:org.egoi.client/org.egoi.client.model/BasicSender.StatusEnum} status
 */
BasicSender.prototype['status'] = undefined;
// Implement AbstractCellphoneSenderAllOf interface:
/**
 * Sender code type
 * @member {module:org.egoi.client/org.egoi.client.model/AbstractCellphoneSenderAllOf.TypeEnum} type
 */
AbstractCellphoneSenderAllOf.prototype['type'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
AbstractCellphoneSender['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "moderation"
     * @const
     */
    "moderation": "moderation",

    /**
     * value: "rejected"
     * @const
     */
    "rejected": "rejected"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
AbstractCellphoneSender['TypeEnum'] = {

    /**
     * value: "alpha_numeric"
     * @const
     */
    "alpha_numeric": "alpha_numeric",

    /**
     * value: "numeric"
     * @const
     */
    "numeric": "numeric"
};



export default AbstractCellphoneSender;
