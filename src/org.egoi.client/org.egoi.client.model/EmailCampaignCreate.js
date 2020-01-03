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
import CampaignEmailContent from './CampaignEmailContent';
import HeaderFooter from './HeaderFooter';

/**
 * The EmailCampaignCreate model module.
 * @module org.egoi.client/org.egoi.client.model/EmailCampaignCreate
 * @version 3.0.0-beta
 */
class EmailCampaignCreate {
    /**
     * Constructs a new <code>EmailCampaignCreate</code>.
     * Email campaign schema
     * @alias module:org.egoi.client/org.egoi.client.model/EmailCampaignCreate
     * @param listId {Number} 
     * @param internalName {String} Campaign internal name
     * @param content {module:org.egoi.client/org.egoi.client.model/CampaignEmailContent} 
     * @param senderId {Number} 
     */
    constructor(listId, internalName, content, senderId) { 
        
        EmailCampaignCreate.initialize(this, listId, internalName, content, senderId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, listId, internalName, content, senderId) { 
        obj['list_id'] = listId;
        obj['internal_name'] = internalName;
        obj['content'] = content;
        obj['sender_id'] = senderId;
    }

    /**
     * Constructs a <code>EmailCampaignCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/EmailCampaignCreate} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/EmailCampaignCreate} The populated <code>EmailCampaignCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCampaignCreate();

            if (data.hasOwnProperty('list_id')) {
                obj['list_id'] = ApiClient.convertToType(data['list_id'], 'Number');
            }
            if (data.hasOwnProperty('internal_name')) {
                obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = CampaignEmailContent.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('sender_id')) {
                obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'Number');
            }
            if (data.hasOwnProperty('reply_to')) {
                obj['reply_to'] = ApiClient.convertToType(data['reply_to'], 'Number');
            }
            if (data.hasOwnProperty('header_footer')) {
                obj['header_footer'] = HeaderFooter.constructFromObject(data['header_footer']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} list_id
 */
EmailCampaignCreate.prototype['list_id'] = undefined;

/**
 * Campaign internal name
 * @member {String} internal_name
 */
EmailCampaignCreate.prototype['internal_name'] = undefined;

/**
 * Campaign subject. If no value is sent, defaults to 'internal_name' property value
 * @member {String} subject
 */
EmailCampaignCreate.prototype['subject'] = undefined;

/**
 * @member {module:org.egoi.client/org.egoi.client.model/CampaignEmailContent} content
 */
EmailCampaignCreate.prototype['content'] = undefined;

/**
 * @member {Number} sender_id
 */
EmailCampaignCreate.prototype['sender_id'] = undefined;

/**
 * @member {Number} reply_to
 */
EmailCampaignCreate.prototype['reply_to'] = undefined;

/**
 * @member {module:org.egoi.client/org.egoi.client.model/HeaderFooter} header_footer
 */
EmailCampaignCreate.prototype['header_footer'] = undefined;






export default EmailCampaignCreate;
