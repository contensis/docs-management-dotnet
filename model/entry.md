---
description: An entry definition in the Management API contains a mixture of standard properties and properties that have been defined by the content type that an entry is based on. 
---
# Entries

An entry definition in the Management API contains a mixture of standard properties and properties that have been defined by the content type that an [entry](https://zenhub.zengenti.com/Contensis/12.0/kb/content-types-and-entries/entries/Entries-overview.aspx) is based on.

## Standard properties

These are the standard properties that all entries have. An entry can have multiple language variations, which can be be edited, versioned and published independently. A single language variation is available for an entry at any one time.

| Name | Type | Description |
| :------- | :--- | :---------- |
| Id | int | The entry identifier |
| ContentTypeId | string  | The API identifier of the content type that the entry is based on |
| ProjectId | string | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| DataFormat | string | Either 'entry' or 'asset' |
| Language | string | The language of the entry instance |
| AvailableLanguages | IReadonlyCollection&lt;string&gt; | A list of languages which have available translations. |
| UnavailableLanguages | IReadonlyCollection&lt;string&gt; | A list of languages which the entry can be translated to but have yet to be completed. |
| Version | [VersionInfo](/model/versioninfo.md) | Version information for the entry |
| IsPublished | bool | Returns whether the entry is published |
| Metadata | Metadata | Metadata associated with the entry instance |
| Owner | string | The id of the entry owner |
| Workflow | [Workflow](/model/workflow.md) | The current workflow details for the entry |
| TranslationState | TranslationState enum | The translation status of the entry. Possible values are *None, NeverTranslated, Translated, TranslationOutOfDate, NoDefaultLanguage, AvailableForTranslation, NotAvailableForTranslation*|
| Slug | string | The entry slug token |

## Methods

| Method | Returns | Description |
| :----- | :------ | :-----------|
| [Get(string fieldName)](./entry-methods.html#get) | dynamic | Gets a field item by name and returns a dynamic object. |
| [Get&lt;Type&gt;(string fieldName)](./entry-methods.html#get-t) | &lt;Type&gt; | Gets a field item by name and attempts to cast to the specified generic type. |
| [HasValue(string fieldName)](./entry-methods.html#hasvalue) | bool | A helper function to determine whether a field exists and has a value. |
| [Save()](./entry-methods.html#save) | void | Saves changes made to the entry instance. |
| [SaveAsync()](./entry-methods.html#save) | Task | Saves changes made to the entry instance asynchronously. |
| [Delete()](./entry-methods.html#delete) | void | Deletes entry variation instance. |
| [DeleteAsync()](./entry-methods.html#deleteasync) | Task | Deletes entry variation instance asynchronously. |
