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
import ReportCampaignsAll from './ReportCampaignsAll';
import ReportCampaignsGroup from './ReportCampaignsGroup';
import ReportCampaignsLast from './ReportCampaignsLast';
import ReportCampaignsSpecific from './ReportCampaignsSpecific';

/**
 * The AdvancedReportCampaignsObject model module.
 * @module org.egoi.client/org.egoi.client.model/AdvancedReportCampaignsObject
 * @version 3.0.0-beta
 */
class AdvancedReportCampaignsObject {
    /**
     * Constructs a new <code>AdvancedReportCampaignsObject</code>.
     * @alias module:org.egoi.client/org.egoi.client.model/AdvancedReportCampaignsObject
     * @implements module:org.egoi.client/org.egoi.client.model/ReportCampaignsAll
     * @implements module:org.egoi.client/org.egoi.client.model/ReportCampaignsLast
     * @implements module:org.egoi.client/org.egoi.client.model/ReportCampaignsSpecific
     * @implements module:org.egoi.client/org.egoi.client.model/ReportCampaignsGroup
     * @param listId {Number} 
     * @param type {module:org.egoi.client/org.egoi.client.model/AdvancedReportCampaignsObject.TypeEnum} 
     * @param data {Array.<Number>} Array of campaign groups
     */
    constructor(listId, type, data) { 
        ReportCampaignsAll.initialize(this, listId, type);ReportCampaignsLast.initialize(this, listId, type);ReportCampaignsSpecific.initialize(this, listId, type, data);ReportCampaignsGroup.initialize(this, listId, type, data);
        AdvancedReportCampaignsObject.initialize(this, listId, type, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, listId, type, data) { 
        obj['list_id'] = listId;
        obj['type'] = type;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>AdvancedReportCampaignsObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/AdvancedReportCampaignsObject} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/AdvancedReportCampaignsObject} The populated <code>AdvancedReportCampaignsObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdvancedReportCampaignsObject();
            ReportCampaignsAll.constructFromObject(data, obj);
            ReportCampaignsLast.constructFromObject(data, obj);
            ReportCampaignsSpecific.constructFromObject(data, obj);
            ReportCampaignsGroup.constructFromObject(data, obj);

            if (data.hasOwnProperty('list_id')) {
                obj['list_id'] = ApiClient.convertToType(data['list_id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} list_id
 */
AdvancedReportCampaignsObject.prototype['list_id'] = undefined;

/**
 * @member {module:org.egoi.client/org.egoi.client.model/AdvancedReportCampaignsObject.TypeEnum} type
 */
AdvancedReportCampaignsObject.prototype['type'] = undefined;

/**
 * Array of campaign groups
 * @member {Array.<Number>} data
 */
AdvancedReportCampaignsObject.prototype['data'] = undefined;


// Implement ReportCampaignsAll interface:
/**
 * @member {Number} list_id
 */
ReportCampaignsAll.prototype['list_id'] = undefined;
/**
 * @member {module:org.egoi.client/org.egoi.client.model/ReportCampaignsAll.TypeEnum} type
 */
ReportCampaignsAll.prototype['type'] = undefined;
// Implement ReportCampaignsLast interface:
/**
 * @member {Number} list_id
 */
ReportCampaignsLast.prototype['list_id'] = undefined;
/**
 * @member {module:org.egoi.client/org.egoi.client.model/ReportCampaignsLast.TypeEnum} type
 */
ReportCampaignsLast.prototype['type'] = undefined;
// Implement ReportCampaignsSpecific interface:
/**
 * @member {Number} list_id
 */
ReportCampaignsSpecific.prototype['list_id'] = undefined;
/**
 * @member {module:org.egoi.client/org.egoi.client.model/ReportCampaignsSpecific.TypeEnum} type
 */
ReportCampaignsSpecific.prototype['type'] = undefined;
/**
 * Array of campaign hashes
 * @member {Array.<String>} data
 */
ReportCampaignsSpecific.prototype['data'] = undefined;
// Implement ReportCampaignsGroup interface:
/**
 * @member {Number} list_id
 */
ReportCampaignsGroup.prototype['list_id'] = undefined;
/**
 * @member {module:org.egoi.client/org.egoi.client.model/ReportCampaignsGroup.TypeEnum} type
 */
ReportCampaignsGroup.prototype['type'] = undefined;
/**
 * Array of campaign groups
 * @member {Array.<Number>} data
 */
ReportCampaignsGroup.prototype['data'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
AdvancedReportCampaignsObject['TypeEnum'] = {

    /**
     * value: "group"
     * @const
     */
    "group": "group"
};



export default AdvancedReportCampaignsObject;

