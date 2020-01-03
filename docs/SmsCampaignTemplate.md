# ApIv3Beta.SmsCampaignTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | **Number** |  | [optional] [readonly] 
**templateHash** | **String** |  | [optional] [readonly] 
**internalName** | **String** | Campaign internal name | [optional] 
**created** | **Date** |  | [optional] [readonly] 
**updated** | **Date** |  | [optional] [readonly] 
**message** | **String** | Message | [optional] 
**sender** | **String** | Sender number | [optional] 
**messageType** | **String** | Message type | [optional] 
**encoding** | **String** | Message encoding | [optional] 
**maxMessages** | **Number** | Maximum number of messages | [optional] 



## Enum: MessageTypeEnum


* `normal` (value: `"normal"`)

* `flash` (value: `"flash"`)





## Enum: EncodingEnum


* `gsm` (value: `"gsm"`)

* `unicode` (value: `"unicode"`)




