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
 * The ComplexContactAllOfPushStats model module.
 * @module org.egoi.client/org.egoi.client.model/ComplexContactAllOfPushStats
 * @version 3.0.0-beta
 */
class ComplexContactAllOfPushStats {
    /**
     * Constructs a new <code>ComplexContactAllOfPushStats</code>.
     * Push stats of the contact
     * @alias module:org.egoi.client/org.egoi.client.model/ComplexContactAllOfPushStats
     */
    constructor() { 
        
        ComplexContactAllOfPushStats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ComplexContactAllOfPushStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/ComplexContactAllOfPushStats} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/ComplexContactAllOfPushStats} The populated <code>ComplexContactAllOfPushStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComplexContactAllOfPushStats();

            if (data.hasOwnProperty('sent')) {
                obj['sent'] = ApiClient.convertToType(data['sent'], 'Number');
            }
            if (data.hasOwnProperty('delivered')) {
                obj['delivered'] = ApiClient.convertToType(data['delivered'], 'Number');
            }
            if (data.hasOwnProperty('not_delivered')) {
                obj['not_delivered'] = ApiClient.convertToType(data['not_delivered'], 'Number');
            }
            if (data.hasOwnProperty('views')) {
                obj['views'] = ApiClient.convertToType(data['views'], 'Number');
            }
            if (data.hasOwnProperty('clicks')) {
                obj['clicks'] = ApiClient.convertToType(data['clicks'], 'Number');
            }
            if (data.hasOwnProperty('last_view_date')) {
                obj['last_view_date'] = ApiClient.convertToType(data['last_view_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Push messages sent to the contact
 * @member {Number} sent
 */
ComplexContactAllOfPushStats.prototype['sent'] = undefined;

/**
 * Push messages delivered to the contact
 * @member {Number} delivered
 */
ComplexContactAllOfPushStats.prototype['delivered'] = undefined;

/**
 * Push messages that were not delivered to the contact
 * @member {Number} not_delivered
 */
ComplexContactAllOfPushStats.prototype['not_delivered'] = undefined;

/**
 * Push messages that were viewed by the contact
 * @member {Number} views
 */
ComplexContactAllOfPushStats.prototype['views'] = undefined;

/**
 * Total number of clicks made by the contact
 * @member {Number} clicks
 */
ComplexContactAllOfPushStats.prototype['clicks'] = undefined;

/**
 * Date of the last push message view of the contact
 * @member {Date} last_view_date
 */
ComplexContactAllOfPushStats.prototype['last_view_date'] = undefined;






export default ComplexContactAllOfPushStats;
