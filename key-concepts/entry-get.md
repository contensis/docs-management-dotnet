# Getting an entry

Requesting an individual [entry](/model/entry.md) can be achieved by using one of the `Get` method overloads.

* [Get(Guid id, string language, string version)](#get-by-guid-id)
* [Get(string id, string language, string version)](#get-by-string-id)
* [GetAsync(Guid id, string language, string version)](#get-by-guid-id-async)
* [GetAsync(string id, string language, string version)](#get-by-string-id-async)

## Get by Guid id

Gets an entry by its `Guid` identifier.

### Syntax

```cs
public Entry Get(Guid id, string language = null, string version = null)
{
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the entry.

*language*
> Type: `string`  
> The specified language variation for the entry. If no value is provided then the project default language is used.

*version*
> Type: `string`  
> The specific version number for the entry.

### Remarks

Returns *null* if no entry matches the specified id and language.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Mimic a guid id value
var movieGuid = Guid.Parse("2c95e478-289d-4d28-8159-02a3f8de5fb4");

// Get the french variation of the movie entry
Entry movie = movieDbProject.Entries.Get(movieGuid, "fr-fr");
```

---




## Get by string id

Gets an entry by its `string` identifier.

### Syntax

```cs
public Entry Get(string id, string language = null, string version = null)
{
}
```

### Parameters

*id*
> Type: `string`  
> The id of the entry.

*language*
> Type: `string`  
> The specified language variation for the entry. If no value is provided then the project default language is used.

*version*
> Type: `string`  
> The specific version number for the entry.

### Remarks

Returns *null* if no entry matches the specified id and language. If the id string is not a valid `Guid` format then an ArgumentException will be thrown.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get the french variation of the movie entry
Entry movie = movieDbProject.Entries.Get("456e5f2a-a1cf-4520-a46c-e5f22ed299e8", "fr-fr");
```

---




## Get by Guid id async

Gets an entry by its `Guid` identifier asynchronously.

### Syntax

```cs
public async Task<Entry> GetAsync(Guid id, string language = null, string version = null)
{
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the entry.

*language*
> Type: `string`  
> The specified language variation for the entry. If no value is provided then the project default language is used.

*version*
> Type: `string`  
> The specific version number for the entry.

### Remarks

Returns *null* if no entry matches the specified id and language.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Mimic a guid id value
var movieGuid = Guid.Parse("2c95e478-289d-4d28-8159-02a3f8de5fb4");

// Get the french variation of the movie entry asynchronously
Entry movie = await movieDbProject.Entries.GetAsync(movieGuid, "fr-fr");
```

---




## Get by string id async

Gets an entry by its `string` identifier asynchronously.

### Syntax

```cs
public async Task<Entry> GetAsync(string id, string language = null, string version = null)
{
}
```

### Parameters

*id*
> Type: `string`  
> The id of the entry.

*language*
> Type: `string`  
> The specified language variation for the entry. If no value is provided then the project default language is used.

*version*
> Type: `string`  
> The specific version number for the entry.

### Remarks

Returns *null* if no entry matches the specified id and language. If the id string is not a valid `Guid` format then an exception will be thrown.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get the french variation of the movie entry asynchronously
Entry movie = await movieDbProject.Entries.GetAsync("456e5f2a-a1cf-4520-a46c-e5f22ed299e8", "fr-fr");
```
