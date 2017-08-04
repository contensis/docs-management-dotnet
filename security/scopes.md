# Scopes

OAuth 2.0 scopes allow a developer to specify which resources their application can access. These are included as a space-separated list value, in the scope parameter when invoking an [authentication](./authentication.md) request.

| Scope name | Associated methods |
|:-|:-|
| Entry_Read | [GET a single entry](/key-concepts/get-entry.md)<br />[List all entries ](/accessing/list-entries.md#list-all-entries)<br />[List entries by content type](/key-concepts/list-entries.md#list-entries-by-content-type) |
| ContentType_Read | [Get a content type](/key-concepts/get-contenttype.md) |
| Project_Read | [Get a project](/key-concepts/get-project.md) |

The .NET needs the