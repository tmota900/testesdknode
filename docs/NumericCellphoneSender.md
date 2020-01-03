# ApIv3Beta.NumericCellphoneSender

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**senderId** | **Number** |  | [readonly] 
**status** | **String** | Status of the sender | [optional] [readonly] 
**type** | **String** | Sender code type | 
**cellphone** | **String** | Sender cellphone (country code followed by phone number, split by &#39;-&#39;) | 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `moderation` (value: `"moderation"`)

* `rejected` (value: `"rejected"`)





## Enum: TypeEnum


* `alpha_numeric` (value: `"alpha_numeric"`)

* `numeric` (value: `"numeric"`)




