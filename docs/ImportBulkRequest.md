# ApIv3Beta.ImportBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compareField** | **String** | Field ID which will be mapped for comparison to prevent duplicates. If it is an extra field,                         append the prefix &#39;extra_&#39; to it (e. g. &#39;extra_1&#39;) | 
**replaceExistingContacts** | **Boolean** | False to add new contacts only, true to replace existing contacts | [optional] [default to false]
**sendAutoresponder** | **Boolean** | True to send each imported contact the autoresponder sequence you have previously set up for                         sign-ups in this mailing list | [optional] [default to false]
**contacts** | [**[Contact]**](Contact.md) | Array of contacts to import | 



## Enum: CompareFieldEnum


* `email` (value: `"email"`)

* `cellphone` (value: `"cellphone"`)

* `phone` (value: `"phone"`)

* `first_name` (value: `"first_name"`)

* `last_name` (value: `"last_name"`)

* `birth_date` (value: `"birth_date"`)

* `extra_X` (value: `"extra_X"`)




