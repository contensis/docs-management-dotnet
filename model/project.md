# Project

A project object can be used to understand the languages that the project supports and which language is the primary language. A client instance is initialized within the context of a single project, which can be accessible directly as a property of the client.

## Members

| Name | Type | Description |
| :--- | :--- | :---------- |
| Id | `string` | A unique project identifier |
| Name | `string` | The friendly name given to the project |
| Description | `string` | The description text given to a project |
| SupportedLanguages | `IReadOnlyList<string>` | An array of all the languages supported by the project |
| PrimaryLanguage | `string` | [LanguageCode](/key-concepts/localization.md) The primary language for the project |


## Example

#### This example renders a language drop-down based on the supported languages in the project

```cs
@using System.Globalization;
@using Zengenti.Contensis.Delivery;

@{
    // Create the client
    var client = ContensisClient.Create();

    // Access the project that has been configured as the default project
    var project = client.project;
}

<select id="language_selector">

    @foreach(var lang in project.SupportedLanguage)
    {
        <option value="@lang">new CultureInfo(lang).DisplayName</option>
    }

</select>

```