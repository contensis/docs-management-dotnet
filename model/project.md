# Project

A project object can be used to understand the languages that the project supports and which language is the primary language. The project instance is also where entry operations are located.

## Members

| Name | Type | Description |
| :--- | :--- | :---------- |
| Id | `string` | A unique project identifier |
| Name | `string` | The friendly name given to the project |
| Description | `string` | The description text given to a project |
| SupportedLanguages | `IReadOnlyList<string>` | An array of all the languages supported by the project |
| PrimaryLanguage | `string` | [LanguageCode](/key-concepts/localization.md) The primary language for the project |
