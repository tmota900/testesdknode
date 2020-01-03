# ApIv3Beta.CellphoneSender

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**senderId** | **Number** |  | [readonly] 
**status** | **String** | Status of the sender | [optional] [readonly] 
**type** | **String** | Sender code type | 
**cellphone** | **String** | Sender cellphone (country code followed by phone number, split by &#39;-&#39;) | 
**file** | **Blob** | Content of your sender file in base64 | 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `moderation` (value: `"moderation"`)

* `rejected` (value: `"rejected"`)





## Enum: TypeEnum


* `alpha_numeric` (value: `"alpha_numeric"`)

* `numeric` (value: `"numeric"`)




