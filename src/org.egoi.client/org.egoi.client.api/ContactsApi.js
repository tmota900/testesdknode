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
import ActivityCollection from '../org.egoi.client.model/ActivityCollection';
import AttachTagRequest from '../org.egoi.client.model/AttachTagRequest';
import AttachTagResponse from '../org.egoi.client.model/AttachTagResponse';
import BadRequest from '../org.egoi.client.model/BadRequest';
import ComplexContact from '../org.egoi.client.model/ComplexContact';
import ContactBaseExtra from '../org.egoi.client.model/ContactBaseExtra';
import ContactBaseStatusExtra from '../org.egoi.client.model/ContactBaseStatusExtra';
import ContactCollection from '../org.egoi.client.model/ContactCollection';
import ContactExportRequest from '../org.egoi.client.model/ContactExportRequest';
import CreateContactResponse from '../org.egoi.client.model/CreateContactResponse';
import Forbidden from '../org.egoi.client.model/Forbidden';
import ImportBulkRequest from '../org.egoi.client.model/ImportBulkRequest';
import ImportBulkResponse from '../org.egoi.client.model/ImportBulkResponse';
import InternalServerError from '../org.egoi.client.model/InternalServerError';
import NotFound from '../org.egoi.client.model/NotFound';
import PostContactsConflict from '../org.egoi.client.model/PostContactsConflict';
import RemoveRequest from '../org.egoi.client.model/RemoveRequest';
import RemoveResponse from '../org.egoi.client.model/RemoveResponse';
import StartAutomationRequest from '../org.egoi.client.model/StartAutomationRequest';
import StartAutomationResponse from '../org.egoi.client.model/StartAutomationResponse';
import Unauthorized from '../org.egoi.client.model/Unauthorized';
import UnprocessableEntity from '../org.egoi.client.model/UnprocessableEntity';

/**
* Contacts service.
* @module org.egoi.client/org.egoi.client.api/ContactsApi
* @version 3.0.0-beta
*/
export default class ContactsApi {

    /**
    * Constructs a new ContactsApi. 
    * @alias module:org.egoi.client/org.egoi.client.api/ContactsApi
    * @class
    * @param {module:org.egoi.client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:org.egoi.client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the actionAttachTag operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~actionAttachTagCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AttachTagResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach tag to contact
     * Attaches a tag to the provided contacts
     * @param {Number} listId ID of the List
     * @param {module:org.egoi.client/org.egoi.client.model/AttachTagRequest} attachTagRequest Parameters for the Tag
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~actionAttachTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AttachTagResponse}
     */
    actionAttachTag(listId, attachTagRequest, callback) {
      let postBody = attachTagRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionAttachTag");
      }
      // verify the required parameter 'attachTagRequest' is set
      if (attachTagRequest === undefined || attachTagRequest === null) {
        throw new Error("Missing the required parameter 'attachTagRequest' when calling actionAttachTag");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = AttachTagResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/attach-tag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionDetachTag operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~actionDetachTagCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AttachTagResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detach tag to contact
     * Detach a tag to the provided contacts
     * @param {Number} listId ID of the List
     * @param {module:org.egoi.client/org.egoi.client.model/AttachTagRequest} attachTagRequest Parameters for the Tag
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~actionDetachTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AttachTagResponse}
     */
    actionDetachTag(listId, attachTagRequest, callback) {
      let postBody = attachTagRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionDetachTag");
      }
      // verify the required parameter 'attachTagRequest' is set
      if (attachTagRequest === undefined || attachTagRequest === null) {
        throw new Error("Missing the required parameter 'attachTagRequest' when calling actionDetachTag");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = AttachTagResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/detach-tag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionExportContacts operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~actionExportContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Exports a list of contacts
     * Exports a list of contacts to the desired callback url
     * @param {Number} listId ID of the List
     * @param {module:org.egoi.client/org.egoi.client.model/ContactExportRequest} contactExportRequest Parameters for export
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~actionExportContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    actionExportContacts(listId, contactExportRequest, callback) {
      let postBody = contactExportRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionExportContacts");
      }
      // verify the required parameter 'contactExportRequest' is set
      if (contactExportRequest === undefined || contactExportRequest === null) {
        throw new Error("Missing the required parameter 'contactExportRequest' when calling actionExportContacts");
      }

      let pathParams = {
        'list_id': listId
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
        '/lists/{list_id}/contacts/actions/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionImportBulk operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~actionImportBulkCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/ImportBulkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import collection of contacts
     * Imports a collection of contacts
     * @param {Number} listId ID of the List
     * @param {module:org.egoi.client/org.egoi.client.model/ImportBulkRequest} importBulkRequest Parameters for the bulk import
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~actionImportBulkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/ImportBulkResponse}
     */
    actionImportBulk(listId, importBulkRequest, callback) {
      let postBody = importBulkRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionImportBulk");
      }
      // verify the required parameter 'importBulkRequest' is set
      if (importBulkRequest === undefined || importBulkRequest === null) {
        throw new Error("Missing the required parameter 'importBulkRequest' when calling actionImportBulk");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = ImportBulkResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/import-bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionStartAutomation operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~actionStartAutomationCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/StartAutomationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start automation
     * Start automation to the provided contacts
     * @param {Number} listId ID of the List
     * @param {module:org.egoi.client/org.egoi.client.model/StartAutomationRequest} startAutomationRequest Parameters for the operation to start automation
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~actionStartAutomationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/StartAutomationResponse}
     */
    actionStartAutomation(listId, startAutomationRequest, callback) {
      let postBody = startAutomationRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionStartAutomation");
      }
      // verify the required parameter 'startAutomationRequest' is set
      if (startAutomationRequest === undefined || startAutomationRequest === null) {
        throw new Error("Missing the required parameter 'startAutomationRequest' when calling actionStartAutomation");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = StartAutomationResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/start-automation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionUnsubscribeContact operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~actionUnsubscribeContactCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/RemoveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unsubscribes contacts
     * Unsubscribes contacts
     * @param {Number} listId ID of the List
     * @param {module:org.egoi.client/org.egoi.client.model/RemoveRequest} removeRequest Parameters for the contact to unsubscribe
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~actionUnsubscribeContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/RemoveResponse}
     */
    actionUnsubscribeContact(listId, removeRequest, callback) {
      let postBody = removeRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionUnsubscribeContact");
      }
      // verify the required parameter 'removeRequest' is set
      if (removeRequest === undefined || removeRequest === null) {
        throw new Error("Missing the required parameter 'removeRequest' when calling actionUnsubscribeContact");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = RemoveResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/unsubscribe', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createContact operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~createContactCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/CreateContactResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new contact
     * Create a new contact
     * @param {Number} listId ID of the list where the contact belongs
     * @param {module:org.egoi.client/org.egoi.client.model/ContactBaseExtra} contactBaseExtra Parameters for the Contact
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~createContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/CreateContactResponse}
     */
    createContact(listId, contactBaseExtra, callback) {
      let postBody = contactBaseExtra;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling createContact");
      }
      // verify the required parameter 'contactBaseExtra' is set
      if (contactBaseExtra === undefined || contactBaseExtra === null) {
        throw new Error("Missing the required parameter 'contactBaseExtra' when calling createContact");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = CreateContactResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllContactActivities operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~getAllContactActivitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/ActivityCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all contact activities
     * Returns all contact activities
     * @param {String} contactId ID of the Contact
     * @param {Number} listId ID of the List
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {Date} opts.dateMin Start date
     * @param {Date} opts.dateMax End date
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~getAllContactActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/ActivityCollection}
     */
    getAllContactActivities(contactId, listId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling getAllContactActivities");
      }
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getAllContactActivities");
      }

      let pathParams = {
        'contact_id': contactId,
        'list_id': listId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'date_min': opts['dateMin'],
        'date_max': opts['dateMax']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ActivityCollection;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/{contact_id}/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllContacts operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~getAllContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/ContactCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all contacts
     * Returns all contacts
     * @param {Number} listId ID of the List
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~getAllContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/ContactCollection}
     */
    getAllContacts(listId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getAllContacts");
      }

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ContactCollection;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContact operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~getContactCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/ComplexContact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contact
     * Returns contact information given its ID
     * @param {String} contactId ID of the Contact
     * @param {Number} listId ID of the List
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~getContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/ComplexContact}
     */
    getContact(contactId, listId, callback) {
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling getContact");
      }
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getContact");
      }

      let pathParams = {
        'contact_id': contactId,
        'list_id': listId
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
      let returnType = ComplexContact;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/{contact_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchContact operation.
     * @callback module:org.egoi.client/org.egoi.client.api/ContactsApi~patchContactCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/CreateContactResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific contact
     * Update contact
     * @param {String} contactId ID of the Contact
     * @param {Number} listId ID of the List
     * @param {module:org.egoi.client/org.egoi.client.model/ContactBaseStatusExtra} contactBaseStatusExtra Parameters for the contact
     * @param {module:org.egoi.client/org.egoi.client.api/ContactsApi~patchContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/CreateContactResponse}
     */
    patchContact(contactId, listId, contactBaseStatusExtra, callback) {
      let postBody = contactBaseStatusExtra;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling patchContact");
      }
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling patchContact");
      }
      // verify the required parameter 'contactBaseStatusExtra' is set
      if (contactBaseStatusExtra === undefined || contactBaseStatusExtra === null) {
        throw new Error("Missing the required parameter 'contactBaseStatusExtra' when calling patchContact");
      }

      let pathParams = {
        'contact_id': contactId,
        'list_id': listId
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
      let returnType = CreateContactResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/{contact_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
