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
import ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid from './ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid';
import ContactBaseWithStatusFieldsSchemaBasePushTokenIos from './ContactBaseWithStatusFieldsSchemaBasePushTokenIos';
import Language from './Language';

/**
 * The ContactBaseWithStatusFieldsSchemaBase model module.
 * @module org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBase
 * @version 3.0.0-beta
 */
class ContactBaseWithStatusFieldsSchemaBase {
    /**
     * Constructs a new <code>ContactBaseWithStatusFieldsSchemaBase</code>.
     * Contact base fields
     * @alias module:org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBase
     */
    constructor() { 
        
        ContactBaseWithStatusFieldsSchemaBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactBaseWithStatusFieldsSchemaBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBase} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBase} The populated <code>ContactBaseWithStatusFieldsSchemaBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactBaseWithStatusFieldsSchemaBase();

            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('consent')) {
                obj['consent'] = ApiClient.convertToType(data['consent'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('birth_date')) {
                obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'Date');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = Language.constructFromObject(data['language']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('email_status')) {
                obj['email_status'] = ApiClient.convertToType(data['email_status'], 'String');
            }
            if (data.hasOwnProperty('cellphone')) {
                obj['cellphone'] = ApiClient.convertToType(data['cellphone'], 'String');
            }
            if (data.hasOwnProperty('cellphone_status')) {
                obj['cellphone_status'] = ApiClient.convertToType(data['cellphone_status'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('phone_status')) {
                obj['phone_status'] = ApiClient.convertToType(data['phone_status'], 'String');
            }
            if (data.hasOwnProperty('push_token_android')) {
                obj['push_token_android'] = ApiClient.convertToType(data['push_token_android'], [ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid]);
            }
            if (data.hasOwnProperty('push_token_ios')) {
                obj['push_token_ios'] = ApiClient.convertToType(data['push_token_ios'], [ContactBaseWithStatusFieldsSchemaBasePushTokenIos]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} contact_id
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['contact_id'] = undefined;

/**
 * Status of the contact
 * @member {module:org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBase.StatusEnum} status
 * @default 'active'
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['status'] = 'active';

/**
 * Contact consent
 * @member {module:org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBase.ConsentEnum} consent
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['consent'] = undefined;

/**
 * First name of the contact
 * @member {String} first_name
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['first_name'] = undefined;

/**
 * Last name of the contact
 * @member {String} last_name
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['last_name'] = undefined;

/**
 * Birth date of the contact
 * @member {Date} birth_date
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['birth_date'] = undefined;

/**
 * @member {module:org.egoi.client/org.egoi.client.model/Language} language
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['language'] = undefined;

/**
 * Email of the contact
 * @member {String} email
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['email'] = undefined;

/**
 * Email channel status
 * @member {module:org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBase.EmailStatusEnum} email_status
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['email_status'] = undefined;

/**
 * Cellphone of the contact
 * @member {String} cellphone
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['cellphone'] = undefined;

/**
 * Cellphone channel status
 * @member {module:org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBase.CellphoneStatusEnum} cellphone_status
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['cellphone_status'] = undefined;

/**
 * Phone of the contact
 * @member {String} phone
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['phone'] = undefined;

/**
 * Phone channel status
 * @member {module:org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBase.PhoneStatusEnum} phone_status
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['phone_status'] = undefined;

/**
 * Android push token of the contact
 * @member {Array.<module:org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid>} push_token_android
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['push_token_android'] = undefined;

/**
 * IOS push token of the contact
 * @member {Array.<module:org.egoi.client/org.egoi.client.model/ContactBaseWithStatusFieldsSchemaBasePushTokenIos>} push_token_ios
 */
ContactBaseWithStatusFieldsSchemaBase.prototype['push_token_ios'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseWithStatusFieldsSchemaBase['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",

    /**
     * value: "removed"
     * @const
     */
    "removed": "removed",

    /**
     * value: "unconfirmed"
     * @const
     */
    "unconfirmed": "unconfirmed"
};


/**
 * Allowed values for the <code>consent</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseWithStatusFieldsSchemaBase['ConsentEnum'] = {

    /**
     * value: "any"
     * @const
     */
    "any": "any",

    /**
     * value: "consent"
     * @const
     */
    "consent": "consent",

    /**
     * value: "contract"
     * @const
     */
    "contract": "contract",

    /**
     * value: "legitimate_interest"
     * @const
     */
    "legitimate_interest": "legitimate_interest",

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "protect_vital_interests"
     * @const
     */
    "protect_vital_interests": "protect_vital_interests",

    /**
     * value: "public_interests"
     * @const
     */
    "public_interests": "public_interests",

    /**
     * value: "required_by_law"
     * @const
     */
    "required_by_law": "required_by_law",

    /**
     * value: "withdrawn"
     * @const
     */
    "withdrawn": "withdrawn"
};


/**
 * Allowed values for the <code>email_status</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseWithStatusFieldsSchemaBase['EmailStatusEnum'] = {

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
ContactBaseWithStatusFieldsSchemaBase['CellphoneStatusEnum'] = {

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
ContactBaseWithStatusFieldsSchemaBase['PhoneStatusEnum'] = {

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



export default ContactBaseWithStatusFieldsSchemaBase;

