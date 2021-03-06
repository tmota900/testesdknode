# ApIv3Beta.UserPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **Number** |  | [optional] [readonly] 
**username** | **String** | User login | [optional] [readonly] 
**isAdmin** | **Boolean** | True if user is admin, false otherwise | [optional] [readonly] [default to false]
**firstName** | **String** | First name of the user | [optional] 
**lastName** | **String** | Last name of the user | [optional] 
**email** | **String** | Email of the user | [optional] 
**phone** | **String** | User&#39;s phone (may be cellphone or phone) | [optional] 
**profileImage** | **String** | User&#39;s profile image | [optional] [readonly] 
**status** | **String** | User status | [optional] [readonly] 
**created** | **Date** | The date and time | [optional] 
**updated** | **Date** | The date and time | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 
**timezone** | **String** | User timezone | [optional] [readonly] 
**showRemovedContacts** | **Boolean** | True if the user can see removed contacts, false otherwise | [optional] [readonly] [default to true]
**gender** | **String** | User gender | [optional] 
**password** | **String** | User password | [optional] 
**passwordConfirmation** | **String** | User password confirmation | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)





## Enum: GenderEnum


* `male` (value: `"male"`)

* `female` (value: `"female"`)




