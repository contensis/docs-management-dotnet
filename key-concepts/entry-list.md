# Listing Entries

Listing Entries can be achieved by using one of the `List` method overloads.

- [List(string contentTypeId, string language, PageOptions pageOptions, IList<string> order)](#list)
- [ListAsync(string contentTypeId, string language, PageOptions pageOptions, IList<string> order)](#list-async)

## List

Lists entries as a PagedList.

### Syntax

```cs
public PagedList<Entry> List(string contentTypeId = null, string language = null, PageOptions pageOptions = null, IList<string> order = null)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The content type to filter by.

*language*
> Type: `string`  
> The language to filter by.

*pageOptions*
> Type: `PageOptions`  
> Paging options with PageIndex and PageSize properties.

*order*
> Type: `IList<string>`  
> A list of fieldnames specifiying the order in which to return the entries.

### Remarks

The parameters can optionally specified in any combination.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get movies with paging options
var movies = client.Entries.List("movie", PageOptions: new PageOptions(0,10) });

// Get actors with default paging options and a specified order
var movies = client.Entries.List("actor", order: new [] { "name", "-dateOfBirth" } });
```
---

## List async

Lists entries as a PagedList asynchronously.

### Syntax

```cs
public async Task<PagedList<Entry>> List(string contentTypeId = null, string language = null, PageOptions pageOptions = null, IList<string> order = null)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The content type to filter by.

*language*
> Type: `string`  
> The language to filter by.

*pageOptions*
> Type: `PageOptions`  
> Paging options with PageIndex and PageSize properties.

*order*
> Type: `IList<string>`  
> A list of fieldnames specifiying the order in which to return the entries.

### Remarks

The parameters can optionally specified in any combination.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get movies with paging options
var movies = await client.Entries.ListAsync("movie", PageOptions: new PageOptions(0,10) });

// Get actors with default paging options and a specified order
var movies = await client.Entries.ListAsync("actor", order: new [] { "name", "-dateOfBirth" } });
```
---