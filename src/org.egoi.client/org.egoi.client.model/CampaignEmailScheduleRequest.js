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
import AbstractSendEmail from './AbstractSendEmail';
import CampaignEmailScheduleRequestAllOf from './CampaignEmailScheduleRequestAllOf';
import EmailSendSegment from './EmailSendSegment';

/**
 * The CampaignEmailScheduleRequest model module.
 * @module org.egoi.client/org.egoi.client.model/CampaignEmailScheduleRequest
 * @version 3.0.0-beta
 */
class CampaignEmailScheduleRequest {
    /**
     * Constructs a new <code>CampaignEmailScheduleRequest</code>.
     * Campaign email schedule request schema
     * @alias module:org.egoi.client/org.egoi.client.model/CampaignEmailScheduleRequest
     * @implements module:org.egoi.client/org.egoi.client.model/CampaignEmailScheduleRequestAllOf
     * @implements module:org.egoi.client/org.egoi.client.model/AbstractSendEmail
     * @param listId {Number} 
     * @param segments {module:org.egoi.client/org.egoi.client.model/EmailSendSegment} 
     */
    constructor(listId, segments) { 
        CampaignEmailScheduleRequestAllOf.initialize(this);AbstractSendEmail.initialize(this, listId, segments);
        CampaignEmailScheduleRequest.initialize(this, listId, segments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, listId, segments) { 
        obj['list_id'] = listId;
        obj['segments'] = segments;
    }

    /**
     * Constructs a <code>CampaignEmailScheduleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/CampaignEmailScheduleRequest} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/CampaignEmailScheduleRequest} The populated <code>CampaignEmailScheduleRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignEmailScheduleRequest();
            CampaignEmailScheduleRequestAllOf.constructFromObject(data, obj);
            AbstractSendEmail.constructFromObject(data, obj);

            if (data.hasOwnProperty('schedule_date')) {
                obj['schedule_date'] = ApiClient.convertToType(data['schedule_date'], 'Date');
            }
            if (data.hasOwnProperty('list_id')) {
                obj['list_id'] = ApiClient.convertToType(data['list_id'], 'Number');
            }
            if (data.hasOwnProperty('segments')) {
                obj['segments'] = EmailSendSegment.constructFromObject(data['segments']);
            }
            if (data.hasOwnProperty('notify')) {
                obj['notify'] = ApiClient.convertToType(data['notify'], ['Number']);
            }
            if (data.hasOwnProperty('destination_field')) {
                obj['destination_field'] = ApiClient.convertToType(data['destination_field'], 'String');
            }
            if (data.hasOwnProperty('unique_contacts_only')) {
                obj['unique_contacts_only'] = ApiClient.convertToType(data['unique_contacts_only'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The date and time
 * @member {Date} schedule_date
 */
CampaignEmailScheduleRequest.prototype['schedule_date'] = undefined;

/**
 * @member {Number} list_id
 */
CampaignEmailScheduleRequest.prototype['list_id'] = undefined;

/**
 * @member {module:org.egoi.client/org.egoi.client.model/EmailSendSegment} segments
 */
CampaignEmailScheduleRequest.prototype['segments'] = undefined;

/**
 * Array of IDs of the users to notify
 * @member {Array.<Number>} notify
 */
CampaignEmailScheduleRequest.prototype['notify'] = undefined;

/**
 * Destination field of this campaign, which must be an email field (email or extra field id).                         If not sent, defaults to the general email field
 * @member {String} destination_field
 */
CampaignEmailScheduleRequest.prototype['destination_field'] = undefined;

/**
 * True to send the campaign only to unique contacts
 * @member {Boolean} unique_contacts_only
 * @default false
 */
CampaignEmailScheduleRequest.prototype['unique_contacts_only'] = false;


// Implement CampaignEmailScheduleRequestAllOf interface:
/**
 * The date and time
 * @member {Date} schedule_date
 */
CampaignEmailScheduleRequestAllOf.prototype['schedule_date'] = undefined;
// Implement AbstractSendEmail interface:
/**
 * @member {Number} list_id
 */
AbstractSendEmail.prototype['list_id'] = undefined;
/**
 * @member {module:org.egoi.client/org.egoi.client.model/EmailSendSegment} segments
 */
AbstractSendEmail.prototype['segments'] = undefined;
/**
 * Array of IDs of the users to notify
 * @member {Array.<Number>} notify
 */
AbstractSendEmail.prototype['notify'] = undefined;
/**
 * Destination field of this campaign, which must be an email field (email or extra field id).                         If not sent, defaults to the general email field
 * @member {String} destination_field
 */
AbstractSendEmail.prototype['destination_field'] = undefined;
/**
 * True to send the campaign only to unique contacts
 * @member {Boolean} unique_contacts_only
 * @default false
 */
AbstractSendEmail.prototype['unique_contacts_only'] = false;




export default CampaignEmailScheduleRequest;

