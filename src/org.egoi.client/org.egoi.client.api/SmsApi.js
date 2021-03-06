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


import ApiClient from "../ApiClient";
import AcceptedResponse from '../org.egoi.client.model/AcceptedResponse';
import BadRequest from '../org.egoi.client.model/BadRequest';
import CampaignSmsSendRequest from '../org.egoi.client.model/CampaignSmsSendRequest';
import Forbidden from '../org.egoi.client.model/Forbidden';
import HashcodeCampaign from '../org.egoi.client.model/HashcodeCampaign';
import InternalServerError from '../org.egoi.client.model/InternalServerError';
import NotFound from '../org.egoi.client.model/NotFound';
import SmsCampaign from '../org.egoi.client.model/SmsCampaign';
import SmsCampaignPatchRequest from '../org.egoi.client.model/SmsCampaignPatchRequest';
import Unauthorized from '../org.egoi.client.model/Unauthorized';
import UnprocessableEntity from '../org.egoi.client.model/UnprocessableEntity';

/**
* Sms service.
* @module org.egoi.client/org.egoi.client.api/SmsApi
* @version 3.0.0-beta
*/
export default class SmsApi {

    /**
    * Constructs a new SmsApi. 
    * @alias module:org.egoi.client/org.egoi.client.api/SmsApi
    * @class
    * @param {module:org.egoi.client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:org.egoi.client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the actionSendSms operation.
     * @callback module:org.egoi.client/org.egoi.client.api/SmsApi~actionSendSmsCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send sms message
     * Deploys and sends an sms message
     * @param {String} campaignHash ID of the Campaign
     * @param {module:org.egoi.client/org.egoi.client.model/CampaignSmsSendRequest} campaignSmsSendRequest Parameters for the 'send sms' action
     * @param {module:org.egoi.client/org.egoi.client.api/SmsApi~actionSendSmsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    actionSendSms(campaignHash, campaignSmsSendRequest, callback) {
      let postBody = campaignSmsSendRequest;
      // verify the required parameter 'campaignHash' is set
      if (campaignHash === undefined || campaignHash === null) {
        throw new Error("Missing the required parameter 'campaignHash' when calling actionSendSms");
      }
      // verify the required parameter 'campaignSmsSendRequest' is set
      if (campaignSmsSendRequest === undefined || campaignSmsSendRequest === null) {
        throw new Error("Missing the required parameter 'campaignSmsSendRequest' when calling actionSendSms");
      }

      let pathParams = {
        'campaign_hash': campaignHash
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/campaigns/sms/{campaign_hash}/actions/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createSmsCampaign operation.
     * @callback module:org.egoi.client/org.egoi.client.api/SmsApi~createSmsCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/HashcodeCampaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new sms campaign
     * Create a new sms campaign
     * @param {module:org.egoi.client/org.egoi.client.model/SmsCampaign} smsCampaign Parameters for the Sms Campaign
     * @param {module:org.egoi.client/org.egoi.client.api/SmsApi~createSmsCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/HashcodeCampaign}
     */
    createSmsCampaign(smsCampaign, callback) {
      let postBody = smsCampaign;
      // verify the required parameter 'smsCampaign' is set
      if (smsCampaign === undefined || smsCampaign === null) {
        throw new Error("Missing the required parameter 'smsCampaign' when calling createSmsCampaign");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = HashcodeCampaign;
      return this.apiClient.callApi(
        '/campaigns/sms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchSmsCampaign operation.
     * @callback module:org.egoi.client/org.egoi.client.api/SmsApi~patchSmsCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/HashcodeCampaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific sms campaign
     * Update sms campaign
     * @param {String} campaignHash ID of the Campaign
     * @param {module:org.egoi.client/org.egoi.client.model/SmsCampaignPatchRequest} smsCampaignPatchRequest Parameters for the Sms Campaign
     * @param {module:org.egoi.client/org.egoi.client.api/SmsApi~patchSmsCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/HashcodeCampaign}
     */
    patchSmsCampaign(campaignHash, smsCampaignPatchRequest, callback) {
      let postBody = smsCampaignPatchRequest;
      // verify the required parameter 'campaignHash' is set
      if (campaignHash === undefined || campaignHash === null) {
        throw new Error("Missing the required parameter 'campaignHash' when calling patchSmsCampaign");
      }
      // verify the required parameter 'smsCampaignPatchRequest' is set
      if (smsCampaignPatchRequest === undefined || smsCampaignPatchRequest === null) {
        throw new Error("Missing the required parameter 'smsCampaignPatchRequest' when calling patchSmsCampaign");
      }

      let pathParams = {
        'campaign_hash': campaignHash
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = HashcodeCampaign;
      return this.apiClient.callApi(
        '/campaigns/sms/{campaign_hash}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
