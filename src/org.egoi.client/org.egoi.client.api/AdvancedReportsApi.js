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
import AdvancedReportsCollection from '../org.egoi.client.model/AdvancedReportsCollection';
import BadRequest from '../org.egoi.client.model/BadRequest';
import Forbidden from '../org.egoi.client.model/Forbidden';
import GenerateEmailBouncesReport from '../org.egoi.client.model/GenerateEmailBouncesReport';
import GenerateEmailClicksByContactReport from '../org.egoi.client.model/GenerateEmailClicksByContactReport';
import GenerateEmailClicksByUrlReport from '../org.egoi.client.model/GenerateEmailClicksByUrlReport';
import GenerateEmailEventsReport from '../org.egoi.client.model/GenerateEmailEventsReport';
import GenerateEmailUnsubscriptionsReport from '../org.egoi.client.model/GenerateEmailUnsubscriptionsReport';
import GenerateFormAnswersReport from '../org.egoi.client.model/GenerateFormAnswersReport';
import GenerateSendsReport from '../org.egoi.client.model/GenerateSendsReport';
import GenerateSmsBouncesReport from '../org.egoi.client.model/GenerateSmsBouncesReport';
import GenerateSmsEventsReport from '../org.egoi.client.model/GenerateSmsEventsReport';
import GenerateSubscriptionsReport from '../org.egoi.client.model/GenerateSubscriptionsReport';
import GenerateUnsubscriptionsReport from '../org.egoi.client.model/GenerateUnsubscriptionsReport';
import InternalServerError from '../org.egoi.client.model/InternalServerError';
import Unauthorized from '../org.egoi.client.model/Unauthorized';
import UnprocessableEntity from '../org.egoi.client.model/UnprocessableEntity';

/**
* AdvancedReports service.
* @module org.egoi.client/org.egoi.client.api/AdvancedReportsApi
* @version 3.0.0-beta
*/
export default class AdvancedReportsApi {

    /**
    * Constructs a new AdvancedReportsApi. 
    * @alias module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi
    * @class
    * @param {module:org.egoi.client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:org.egoi.client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the generateEmailBouncesReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailBouncesReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email bounces report
     * Generates a new email bounces report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateEmailBouncesReport} generateEmailBouncesReport Parameters for the email bounces report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailBouncesReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateEmailBouncesReport(generateEmailBouncesReport, callback) {
      let postBody = generateEmailBouncesReport;
      // verify the required parameter 'generateEmailBouncesReport' is set
      if (generateEmailBouncesReport === undefined || generateEmailBouncesReport === null) {
        throw new Error("Missing the required parameter 'generateEmailBouncesReport' when calling generateEmailBouncesReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/email-bounces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailClicksByContactReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailClicksByContactReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email clicks by contact report
     * Generates a new email clicks by contact report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateEmailClicksByContactReport} generateEmailClicksByContactReport Parameters for the email clicks by contact report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailClicksByContactReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateEmailClicksByContactReport(generateEmailClicksByContactReport, callback) {
      let postBody = generateEmailClicksByContactReport;
      // verify the required parameter 'generateEmailClicksByContactReport' is set
      if (generateEmailClicksByContactReport === undefined || generateEmailClicksByContactReport === null) {
        throw new Error("Missing the required parameter 'generateEmailClicksByContactReport' when calling generateEmailClicksByContactReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/email-clicks-by-contact', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailClicksByUrlReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailClicksByUrlReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email clicks by URL report
     * Generates a new email clicks by URL report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateEmailClicksByUrlReport} generateEmailClicksByUrlReport Parameters for the email clicks by URL report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailClicksByUrlReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateEmailClicksByUrlReport(generateEmailClicksByUrlReport, callback) {
      let postBody = generateEmailClicksByUrlReport;
      // verify the required parameter 'generateEmailClicksByUrlReport' is set
      if (generateEmailClicksByUrlReport === undefined || generateEmailClicksByUrlReport === null) {
        throw new Error("Missing the required parameter 'generateEmailClicksByUrlReport' when calling generateEmailClicksByUrlReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/email-clicks-by-url', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailEventsReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailEventsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email events report
     * Generates a new email events report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateEmailEventsReport} generateEmailEventsReport Parameters for the email events report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailEventsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateEmailEventsReport(generateEmailEventsReport, callback) {
      let postBody = generateEmailEventsReport;
      // verify the required parameter 'generateEmailEventsReport' is set
      if (generateEmailEventsReport === undefined || generateEmailEventsReport === null) {
        throw new Error("Missing the required parameter 'generateEmailEventsReport' when calling generateEmailEventsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/email-events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailSmsReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailSmsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate SMS bounces report
     * Generates a new SMS bounces report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateSmsBouncesReport} generateSmsBouncesReport Parameters for the SMS bounces report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailSmsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateEmailSmsReport(generateSmsBouncesReport, callback) {
      let postBody = generateSmsBouncesReport;
      // verify the required parameter 'generateSmsBouncesReport' is set
      if (generateSmsBouncesReport === undefined || generateSmsBouncesReport === null) {
        throw new Error("Missing the required parameter 'generateSmsBouncesReport' when calling generateEmailSmsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/sms-bounces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailUnsubscriptionsReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailUnsubscriptionsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email unsubscriptions report
     * Generates a new email unsubscriptions report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateEmailUnsubscriptionsReport} generateEmailUnsubscriptionsReport Parameters for the email unsubscriptions report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateEmailUnsubscriptionsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateEmailUnsubscriptionsReport(generateEmailUnsubscriptionsReport, callback) {
      let postBody = generateEmailUnsubscriptionsReport;
      // verify the required parameter 'generateEmailUnsubscriptionsReport' is set
      if (generateEmailUnsubscriptionsReport === undefined || generateEmailUnsubscriptionsReport === null) {
        throw new Error("Missing the required parameter 'generateEmailUnsubscriptionsReport' when calling generateEmailUnsubscriptionsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/email-unsubscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateFormAnswersReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateFormAnswersReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate form answers report
     * Generates a new form answers report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateFormAnswersReport} generateFormAnswersReport Parameters for the form answers report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateFormAnswersReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateFormAnswersReport(generateFormAnswersReport, callback) {
      let postBody = generateFormAnswersReport;
      // verify the required parameter 'generateFormAnswersReport' is set
      if (generateFormAnswersReport === undefined || generateFormAnswersReport === null) {
        throw new Error("Missing the required parameter 'generateFormAnswersReport' when calling generateFormAnswersReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/form-answers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateSendsReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateSendsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate sends report
     * Generates a new sends report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateSendsReport} generateSendsReport Parameters for the sends report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateSendsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateSendsReport(generateSendsReport, callback) {
      let postBody = generateSendsReport;
      // verify the required parameter 'generateSendsReport' is set
      if (generateSendsReport === undefined || generateSendsReport === null) {
        throw new Error("Missing the required parameter 'generateSendsReport' when calling generateSendsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/sends', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateSmsEventsReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateSmsEventsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate SMS events report
     * Generates a new SMS events report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateSmsEventsReport} generateSmsEventsReport Parameters for the SMS events report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateSmsEventsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateSmsEventsReport(generateSmsEventsReport, callback) {
      let postBody = generateSmsEventsReport;
      // verify the required parameter 'generateSmsEventsReport' is set
      if (generateSmsEventsReport === undefined || generateSmsEventsReport === null) {
        throw new Error("Missing the required parameter 'generateSmsEventsReport' when calling generateSmsEventsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/sms-events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateSubscriptionsReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateSubscriptionsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate subscriptions report
     * Generates a new subscriptions report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateSubscriptionsReport} generateSubscriptionsReport Parameters for the subscriptions report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateSubscriptionsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateSubscriptionsReport(generateSubscriptionsReport, callback) {
      let postBody = generateSubscriptionsReport;
      // verify the required parameter 'generateSubscriptionsReport' is set
      if (generateSubscriptionsReport === undefined || generateSubscriptionsReport === null) {
        throw new Error("Missing the required parameter 'generateSubscriptionsReport' when calling generateSubscriptionsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateUnsubscriptionsReport operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateUnsubscriptionsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate unsubscriptions report
     * Generates a new unsubscriptions report
     * @param {module:org.egoi.client/org.egoi.client.model/GenerateUnsubscriptionsReport} generateUnsubscriptionsReport Parameters for the unsubscriptions report
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~generateUnsubscriptionsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AcceptedResponse}
     */
    generateUnsubscriptionsReport(generateUnsubscriptionsReport, callback) {
      let postBody = generateUnsubscriptionsReport;
      // verify the required parameter 'generateUnsubscriptionsReport' is set
      if (generateUnsubscriptionsReport === undefined || generateUnsubscriptionsReport === null) {
        throw new Error("Missing the required parameter 'generateUnsubscriptionsReport' when calling generateUnsubscriptionsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/unsubscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllAdvancedReports operation.
     * @callback module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~getAllAdvancedReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:org.egoi.client/org.egoi.client.model/AdvancedReportsCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all advanced reports
     * Returns all advanced reports
     * @param {Object} opts Optional parameters
     * @param {module:org.egoi.client/org.egoi.client.model/String} opts.status Advanced report status
     * @param {String} opts.title Advanced report title
     * @param {Date} opts.createdMin Created initial date
     * @param {Date} opts.createdMax Created finish
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:org.egoi.client/org.egoi.client.model/String} opts.order Type of order (default to 'desc')
     * @param {module:org.egoi.client/org.egoi.client.model/String} opts.orderBy Reference attribute to order the advanced reports (default to 'advanced_report_id')
     * @param {module:org.egoi.client/org.egoi.client.api/AdvancedReportsApi~getAllAdvancedReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.egoi.client/org.egoi.client.model/AdvancedReportsCollection}
     */
    getAllAdvancedReports(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'status': opts['status'],
        'title': opts['title'],
        'created_min': opts['createdMin'],
        'created_max': opts['createdMax'],
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
      let returnType = AdvancedReportsCollection;
      return this.apiClient.callApi(
        '/reports/advanced', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
