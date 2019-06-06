---
description: Creating a new project can be achieved by using the New method.
---
# Creating a new Project

## New

Creates a new project.

### Syntax

```cs
public Project New(string name, string id, string primaryLanguage, IList<string> supportedLanguages = null, string description = null)
{
}
```

### Parameters

*name*
> Type: `string`  
> The name for the project.

*id*
> Type: `string`  
> The id for the project.

*primaryLanguage*
> Type: `string`  
> The primary language for the project.

*supportedLanguages*
> Type: `string`  
> The name of the project.

*description*
> Type: `string`  
> The description for the project.

### Remarks

Throws an *ArgumentException* if the name, id or primaryLanguage parameters are either null or empty strings.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Create a project
var movieDbProject = client.Projects.New("Movie DB", "movieDb", "en-GB");

// Save the new project
movieDbProject.Save();
```
