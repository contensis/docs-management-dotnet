# Entries

A full [overview of entries can be found here](https://zenhub.zengenti.com/Contensis/9/kb/content-types-and-entries/entries/Entries-overview.aspx).

An entry definition in the Delivery API contains a mixture of standard properties and properties that have been defined by the content type that an entry is based on.

## Standard properties

These are the standard properties that all entries have. An entry can have multiple language variations, which can be be edited, versioned and published independently. In the Delivery API context only a single language variation is available for an entry at any one time.

| Name | Type | Description |
| :------- | :--- | :---------- |
| Id | int | The entry identifier |
| ContentTypeId | string  | The API identifier of the content type that the entry is based on |
| ProjectId | string | The API identifer of the project the entry belongs to |
| DataFormat | string | Either 'entry' or 'asset' |
| Language | string | The language of the entry instance |
| Version | [VersionInfo](/model/versioninfo.md) | Version information for the entry |
| Metadata | Metadata | Metadata associated with the entry instance |

## Methods

| Method | Returns | Description |
| :----- | :------ | :-----------|
| [Get(string fieldName)](./entry-methods.html#get) | dynamic | Gets a field item by name and returns a dynamic object |
| [Get&lt;Type&gt;(string fieldName)](./entry-methods.html#gett) | &lt;Type&gt; | Gets a field item by name and attempts to cast to the specified generic type |
| [HasValue(string fieldName)](./entry-methods.html#hasvalue) | bool | A helper function to determine whether a field exists and has a value |


