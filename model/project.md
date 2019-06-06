---
description: A project object can be used to understand the languages that the project supports and which language is the primary language. 
---
# Project

A project object can be used to understand the languages that the project supports and which language is the primary language. The project instance is also where entry operations are located.

## Members

| Name | Type | Description |
| :--- | :--- | :---------- |
| Id | `string` | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console. |
| Name | `string` | The friendly name given to the project. |
| Description | `string` | The description text given to a project. |
| SupportedLanguages | `IList<string>` | An array of all the languages supported by the project. |
| PrimaryLanguage | `string` | [LanguageCode](/key-concepts/localization.md) The primary language for the project. |

## Methods

| Method | Returns | Description |
| :----- | :------ | :-----------|
| [Save()](./project-methods.html#save) |  | Commits any changes made to the project instance. |
| [SaveAsync()](./project-methods.html#saveasync) |  | Commits any changes made to the project instance asynchronously. |
| [Delete()](./project-methods.html#delete) |  | Deletes the project instance. |
| [DeleteAsync()](./project-methods.html#deleteasync) |  | Delete the project instance asynchronously. |
