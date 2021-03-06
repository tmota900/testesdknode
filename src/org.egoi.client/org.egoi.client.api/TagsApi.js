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
import BadRequest from '../org.egoi.client.model/BadRequest';
import Conflict from '../org.egoi.client.model/Conflict';
import Forbidden from '../org.egoi.client.model/Forbidden';
import InternalServerError from '../org.egoi.client.model/InternalServerError';
import NotFound from '../org.egoi.client.model/NotFound';
import Tag from '../org.egoi.client.model/Tag';
import TagCollection from '../org.egoi.client.model/TagCollection';
import TagRequest from '../org.egoi.client.model/TagRequest';
import Unauthorized from '../org.egoi.client.model/Unauthorized';
import UnprocessableEntity from '../org.egoi.client.model/UnprocessableEntity';

/**
* Tags service.
* @module org.egoi.client/org.egoi.client.api/TagsApi
* @version 3.0.0-beta
*/
export default class TagsApi {

    /**
    * Constructs a new TagsApi. 
    * @alias module:org.egoi.client/org.egoi.client.api/TagsApi
    * @class
    * @param {module:org.egoi.client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:org.egoi.client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTag operation.
     * @callback module:org.egoi.client/org.egoi.client.api/TagsApi~createTagCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new tag
     * Create a new tag
     * @param {module:org.egoi.client/org.egoi.client.model/TagRequest} tagRequest Parameters for the Tag
     * @param {module:org.egoi.client/org.egoi.client.api/TagsApi~createTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/Tag}
     */
    createTag(tagRequest, callback) {
      let postBody = tagRequest;
      // verify the required parameter 'tagRequest' is set
      if (tagRequest === undefined || tagRequest === null) {
        throw new Error("Missing the required parameter 'tagRequest' when calling createTag");
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
      let returnType = Tag;
      return this.apiClient.callApi(
        '/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTag operation.
     * @callback module:org.egoi.client/org.egoi.client.api/TagsApi~deleteTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove tag
     * Remove tag information given its ID
     * @param {Number} tagId ID of the Tag
     * @param {module:org.egoi.client/org.egoi.client.api/TagsApi~deleteTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTag(tagId, callback) {
      let postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling deleteTag");
      }

      let pathParams = {
        'tag_id': tagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/tags/{tag_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllTags operation.
     * @callback module:org.egoi.client/org.egoi.client.api/TagsApi~getAllTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/TagCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all tags
     * Returns all tags
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:org.egoi.client/org.egoi.client.model/String} opts.order Type of order (default to 'desc')
     * @param {module:org.egoi.client/org.egoi.client.model/String} opts.orderBy Reference attribute to order tags (default to 'tag_id')
     * @param {module:org.egoi.client/org.egoi.client.api/TagsApi~getAllTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/TagCollection}
     */
    getAllTags(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'order': opts['order'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TagCollection;
      return this.apiClient.callApi(
        '/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTag operation.
     * @callback module:org.egoi.client/org.egoi.client.api/TagsApi~updateTagCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific tag
     * Update a tag
     * @param {Number} tagId ID of the Tag
     * @param {module:org.egoi.client/org.egoi.client.model/TagRequest} tagRequest Parameters for the tag
     * @param {module:org.egoi.client/org.egoi.client.api/TagsApi~updateTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/Tag}
     */
    updateTag(tagId, tagRequest, callback) {
      let postBody = tagRequest;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling updateTag");
      }
      // verify the required parameter 'tagRequest' is set
      if (tagRequest === undefined || tagRequest === null) {
        throw new Error("Missing the required parameter 'tagRequest' when calling updateTag");
      }

      let pathParams = {
        'tag_id': tagId
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
      let returnType = Tag;
      return this.apiClient.callApi(
        '/tags/{tag_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
