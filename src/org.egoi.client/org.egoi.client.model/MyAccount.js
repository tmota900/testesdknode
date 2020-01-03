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
import BalanceInfo from './BalanceInfo';
import BalanceInfoBalanceInfo from './BalanceInfoBalanceInfo';
import BillingInfo from './BillingInfo';
import BillingInfoAllOfBillingInfo from './BillingInfoAllOfBillingInfo';
import GeneralInfo from './GeneralInfo';
import GeneralInfoAllOfGeneralInfo from './GeneralInfoAllOfGeneralInfo';
import ModuleInfo from './ModuleInfo';
import ModuleInfoModuleInfo from './ModuleInfoModuleInfo';
import PlanInfo from './PlanInfo';
import PlanInfoPlanInfo from './PlanInfoPlanInfo';

/**
 * The MyAccount model module.
 * @module org.egoi.client/org.egoi.client.model/MyAccount
 * @version 3.0.0-beta
 */
class MyAccount {
    /**
     * Constructs a new <code>MyAccount</code>.
     * My Account schema
     * @alias module:org.egoi.client/org.egoi.client.model/MyAccount
     * @implements module:org.egoi.client/org.egoi.client.model/GeneralInfo
     * @implements module:org.egoi.client/org.egoi.client.model/BillingInfo
     * @implements module:org.egoi.client/org.egoi.client.model/PlanInfo
     * @implements module:org.egoi.client/org.egoi.client.model/BalanceInfo
     * @implements module:org.egoi.client/org.egoi.client.model/ModuleInfo
     */
    constructor() { 
        GeneralInfo.initialize(this);BillingInfo.initialize(this);PlanInfo.initialize(this);BalanceInfo.initialize(this);ModuleInfo.initialize(this);
        MyAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MyAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.egoi.client/org.egoi.client.model/MyAccount} obj Optional instance to populate.
     * @return {module:org.egoi.client/org.egoi.client.model/MyAccount} The populated <code>MyAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MyAccount();
            GeneralInfo.constructFromObject(data, obj);
            BillingInfo.constructFromObject(data, obj);
            PlanInfo.constructFromObject(data, obj);
            BalanceInfo.constructFromObject(data, obj);
            ModuleInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('general_info')) {
                obj['general_info'] = GeneralInfoAllOfGeneralInfo.constructFromObject(data['general_info']);
            }
            if (data.hasOwnProperty('billing_info')) {
                obj['billing_info'] = BillingInfoAllOfBillingInfo.constructFromObject(data['billing_info']);
            }
            if (data.hasOwnProperty('plan_info')) {
                obj['plan_info'] = PlanInfoPlanInfo.constructFromObject(data['plan_info']);
            }
            if (data.hasOwnProperty('balance_info')) {
                obj['balance_info'] = BalanceInfoBalanceInfo.constructFromObject(data['balance_info']);
            }
            if (data.hasOwnProperty('module_info')) {
                obj['module_info'] = ModuleInfoModuleInfo.constructFromObject(data['module_info']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:org.egoi.client/org.egoi.client.model/GeneralInfoAllOfGeneralInfo} general_info
 */
MyAccount.prototype['general_info'] = undefined;

/**
 * @member {module:org.egoi.client/org.egoi.client.model/BillingInfoAllOfBillingInfo} billing_info
 */
MyAccount.prototype['billing_info'] = undefined;

/**
 * @member {module:org.egoi.client/org.egoi.client.model/PlanInfoPlanInfo} plan_info
 */
MyAccount.prototype['plan_info'] = undefined;

/**
 * @member {module:org.egoi.client/org.egoi.client.model/BalanceInfoBalanceInfo} balance_info
 */
MyAccount.prototype['balance_info'] = undefined;

/**
 * @member {module:org.egoi.client/org.egoi.client.model/ModuleInfoModuleInfo} module_info
 */
MyAccount.prototype['module_info'] = undefined;


// Implement GeneralInfo interface:
/**
 * @member {module:org.egoi.client/org.egoi.client.model/GeneralInfoAllOfGeneralInfo} general_info
 */
GeneralInfo.prototype['general_info'] = undefined;
// Implement BillingInfo interface:
/**
 * @member {module:org.egoi.client/org.egoi.client.model/BillingInfoAllOfBillingInfo} billing_info
 */
BillingInfo.prototype['billing_info'] = undefined;
// Implement PlanInfo interface:
/**
 * @member {module:org.egoi.client/org.egoi.client.model/PlanInfoPlanInfo} plan_info
 */
PlanInfo.prototype['plan_info'] = undefined;
// Implement BalanceInfo interface:
/**
 * @member {module:org.egoi.client/org.egoi.client.model/BalanceInfoBalanceInfo} balance_info
 */
BalanceInfo.prototype['balance_info'] = undefined;
// Implement ModuleInfo interface:
/**
 * @member {module:org.egoi.client/org.egoi.client.model/ModuleInfoModuleInfo} module_info
 */
ModuleInfo.prototype['module_info'] = undefined;




export default MyAccount;

