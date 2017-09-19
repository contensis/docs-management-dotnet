# Creating a new Entry

Creating a new [entry](/model/entry.md) can be achieved by using one of the `New` method overloads.

- [New(string contentTypeId)](#new-with-content-type)
- [New(string contentTypeId, string language)](#new-with-content-type-and-language)
- [New(string contentTypeId, string language, string entryId)](#new-with-content-type-language-and-string-id)
- [New(string contentTypeId, string language, Guid entryId)](#new-with-content-type-language-and-guid-id)

## New with content type

Creates a new entry based on a content type id.

### Syntax

```cs
public Entry New(string contentTypeId)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of content type.

### Remarks

Throws an *ArgumentException* if the contentTypeId parameter is either null or an empty string.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Create a new Movie entry
var movie = movieDbProject.Entries.New("movie");
```
---





## New with content type and language

Creates a new entry based on a content type id and a language.

### Syntax

```cs
public Entry New(string contentTypeId, string language)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of content type.

*language*
> Type: `string`  
> The language variation of the entry to create.

### Remarks

Throws an *ArgumentException* if the contentTypeId parameter is either null or an empty string.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Create a new Movie entry for french
var movie = movieDbProject.Entries.New("movie", "fr-FR");
```
---






## New with content type, language and string id
Creates a new entry based on a content type id, language and by providing the id for the entry.

### Syntax

```cs
public Entry New(string contentTypeId, string language)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of the content type.

*language*
> Type: `string`  
> The language variation of the entry to create.

*entryId*
> Type: `string`  
> The id given to the entry.

### Remarks

Throws an *ArgumentException* if the contentTypeId parameter is either null or an empty string.  
A null value can be set for the language if needed so that the entry id can still be set and the default language inferred.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Create a new Movie entry for french
var movie = movieDbProject.Entries.New("movie", "fr-FR", "ff1c8adf-2bd7-4ebe-88b2-37ce280d89f8");
```
---






## New with content type, language and Guid id
Creates a new entry based on a content type id, language and by providing the id for the entry.

### Syntax

```cs
public Entry New(string contentTypeId, string language)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of the content type.

*language*
> Type: `string`  
> The language variation of the entry to create.

*entryId*
> Type: `Guid`  
> The id given to the entry.

### Remarks

Throws an *ArgumentException* if the contentTypeId parameter is either null or an empty string.  
A null value can be set for the language if needed so that the entry id can still be set and the default language inferred.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get a Guid
var entryId = Guid.Parse("ff1c8adf-2bd7-4ebe-88b2-37ce280d89f8");

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Create a new Movie entry for french
var movie = movieDbProject.Entries.New("movie", "fr-FR", entryId);
```
---
