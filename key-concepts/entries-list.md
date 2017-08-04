# List entries

Requesting a list of entries can be achieved by using one of the *List* method overloads.

- [List(PageOptions pageOptions)](#list)
- [List&lt;T&gt;(PageOptions pageOptions)](#list-as-typed-model)
- [ListAsync(PageOption pageOptions)](#list-async)
- [ListAsync&lt;T&gt;(PageOption pageOptions)](#list-as-typed-model-async)
- [List(string contentTypeId, PageOptions pageOptions)](#list-by-content-type)
- [List&lt;T&gt;(string contentTypeId, PageOptions pageOptions)](#list-as-typed-model-by-content-type)
- [ListAsync(string contentTypeId, PageOptions pageOptions)](#list-by-content-type-async)
- [ListAsync&lt;T&gt;(string contentTypeId, PageOptions pageOptions)](#list-as-typed-model-by-content-type-async)
- [List(string contentTypeId, PageOptions pageOptions, IList<string> order)](#list-by-content-type-with-paging-and-ordering)
- [List&lt;T&gt;(string contentTypeId, PageOptions pageOptions, IList<string> order)](#list-as-typed-model-by-content-type-with-paging-and-ordering)
- [ListAsync(string contentTypeId, PageOptions pageOptions, IList<string> order)](#list-by-content-type-with-paging-and-ordering-asynchronously)
- [ListAsync&lt;T&gt;(string contentTypeId, PageOptions pageOptions, IList<string> order)](#list-as-typed-model-by-content-type-with-paging-and-ordering-asynchronously)
- [List(EntryListOptions listOptions)](#list-with-options-object)
- [List&lt;T&gt;(EntryListOptions listOptions)](#list-as-typed-model-with-options-object)
- [ListAsync(EntryListOptions listOptions)](#list-with-options-object-asynchronously)
- [ListAsync&lt;T&gt;(EntryListOptions listOptions)](#list-as-typed-model-with-options-object-asynchronously)

## List

Lists entries for all content types, with paging.

### Syntax

```cs
public PagedList<Entry> List(PageOptions pageOptions = null)
{
}
```

### Parameters

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md)   
> Paging options for specifying the page index and size.

### Remarks

The default for the pageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get all entries with the default paging options
var entries = client.Entries.List();

// Get all entries with specified paging options
var entries = client.Entries.List(new PageOptions(3, 10));
```

---


## List as typed model

Lists entries as typed models for all content types, with paging.

### Syntax

```cs
public PagedList<T> List<T>(PageOptions pageOptions = null) where T: class
{
}
```

### Parameters

*T*
> The model class, either a plain class or inheriting from EntryModel.

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md)   
> Paging options for specifying the page index and size.

### Remarks

The default for the pageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
public class Movie
{
    public string Title { get; set; }

    public DateTime DateOfRelease { get; set; }
}
```
```cs
// Create a client
var client = ContensisClient.Create();

// Get all entries with the default paging options
var movies = client.Entries.List<Movie>();

// Get all entries with specified paging options
var movies = client.Entries.List<Movie>(new PageOptions(3, 10));
```

---






## List async

Lists entries for all content types asynchronously, with paging.

### Syntax

```cs
public async Task<PagedList<Entry>> List(PageOptions pageOptions = null)
{
}
```

### Parameters

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md)   
> Paging options for specifying the page index and size.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get all entries with the default paging options
var entries = await client.Entries.ListAsync();

// Get all entries with specified paging options
var entries = await client.Entries.ListAsync(new PageOptions(3, 10));
```

---





## List as typed model async

Lists entries as typed models for all content types asynchronously, with paging.

### Syntax

```cs
public async Task<PagedList<T>> ListAsync<T>(PageOptions pageOptions = null) where T: class
{
}
```

### Parameters

*T*
> The model class, either a plain class or inheriting from EntryModel.

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md)   
> Paging options for specifying the page index and size.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
public class Movie
{
    public string Title { get; set; }

    public DateTime DateOfRelease { get; set; }
}
```

```cs
// Create a client
var client = ContensisClient.Create();

// Get all entries with the default paging options
var entries = await client.Entries.ListAsync();

// Get all entries with specified paging options
var entries = await client.Entries.ListAsync(new PageOptions(3, 10));
```

---



## List by content type

Lists entries for a specific content type.

### Syntax

```cs
public PagedList<Entry> List(string contentTypeId, PageOptions pageOptions = null)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md) 
> Paging options for specifying the page index and size.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get entries with the default paging options
var entries = client.Entries.List("movie");

// Get all entries with specified paging options
var entries = client.Entries.List("movie", new PageOptions(3, 10));
```

---


## List as typed model by content type

Lists entries as typed models for a specific content type.

### Syntax

```cs
public PagedList<T> List<T>(string contentTypeId, PageOptions pageOptions = null) where T: class
{
}
```

### Parameters

*T*
> The model class, either a plain class or inheriting from EntryModel.

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md) 
> Paging options for specifying the page index and size.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
public class Movie
{
    public string Title { get; set; }

    public DateTime DateOfRelease { get; set; }
}
```
```cs
// Create a client
var client = ContensisClient.Create();

// Get entries as typed models with the default paging options
var entries = client.Entries.List<Movie>("movie");

// Get all entries as typed models with specified paging options
var entries = client.Entries.List<Movie>("movie", new PageOptions(3, 10));
```

---





## List by content type async

Lists entries for a specific content type.

### Syntax

```cs
public async Task<PagedList<Entry>> ListAsync(string contentTypeId, PageOptions pageOptions = null)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md)  
> Paging options for specifying the page index and size.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get entries with the default paging options
var entries = await client.Entries.ListAsync("movie");

// Get all entries with specified paging options
var entries = await client.Entries.ListAsync("movie", new PageOptions(3, 10));
```

---




## List as typed model by content type async

Lists entries as typed models for a specific content type.

### Syntax

```cs
public async Task<PagedList<T>> ListAsync(string contentTypeId, PageOptions pageOptions = null) where T: class
{
}
```

### Parameters

*T*
> The model class, either a plain class or inheriting from EntryModel.

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md)  
> Paging options for specifying the page index and size.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
public class Movie
{
    public string Title { get; set; }

    public DateTime DateOfRelease { get; set; }
}
```
```cs
// Create a client
var client = ContensisClient.Create();

// Get entries as typed models with the default paging options
var entries = await client.Entries.ListAsync<Movie>("movie");

// Get all entries as typed models with specified paging options
var entries = await client.Entries.ListAsync<Movie>("movie", new PageOptions(3, 10));
```
---





## List by content type with paging and ordering

Lists entries for a specific content type, with paging and field order configuration.

### Syntax

```cs
public PagedList<Entry> List(string contentTypeId, PageOptions pageOptions, IList<string> order)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: PageOptions  
> Paging options for specifying the page index and size.

*order*
> Type: `IList<string>`  
> Options for specifying the result ordering.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get movie entries of with paging options and ordering
var entries = client.Entries.List("movie", new PageOptions(3, 10), 
    new [] { "title", "-dateOfRelease" } );
```

---




## List as typed model by content type with paging and ordering

Lists entries as typed models for a specific content type, with paging and field order configuration.

### Syntax

```cs
public PagedList<T> List<T>(string contentTypeId, PageOptions pageOptions, IList<string> order)
{
}
```

### Parameters

*T*
> The model class, either a plain class or inheriting from EntryModel.

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: PageOptions  
> Paging options for specifying the page index and size.

*order*
> Type: `IList<string>`  
> Options for specifying the result ordering.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
public class Movie
{
    public string Title { get; set; }

    public DateTime DateOfRelease { get; set; }
}
```
```cs
// Create a client
var client = ContensisClient.Create();

// Get movie entries as Movie instances with paging options and ordering
var entries = client.Entries.List<Movie>("movie", new PageOptions(3, 10), 
    new [] { "title", "-dateOfRelease" } );
```

---





## List by content type with paging and ordering asynchronously

Lists entries for a specific content type, with paging and field sort configuration.

### Syntax


```cs
public async Task<PagedList<Entry>> ListAsync(string contentTypeId, PageOptions pageOptions, SortFields sortFields)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: PageOptions  
> Paging options for specifying the page index and size.

*sortFields*
> Type: SortFields  
> Options for specifying the result ordering.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get all entries with the default paging options
var entries = await client.Entries.ListAsync("movie", new PageOptions(3, 10), 
    new SortFields { new SortField("title", SortField.FieldSortDirection.Descending) });
```

---



## List as typed model by content type with paging and ordering asynchronously

Lists entries as typed models for a specific content type, with paging and field sort configuration.

### Syntax


```cs
public async Task<PagedList<T>> ListAsync<T>(string contentTypeId, PageOptions pageOptions, SortFields sortFields)
{
}
```

### Parameters

*T*
> The model class, either a plain class or inheriting from EntryModel.

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: PageOptions  
> Paging options for specifying the page index and size.

*sortFields*
> Type: SortFields  
> Options for specifying the result ordering.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get all entries with the default paging options
var entries = await client.Entries.ListAsync<Movie>("movie", new PageOptions(3, 10), new [] {"-title" });
```

---




## List with options object

Lists entries using an EntryListOptions object to allow more granular control of entries being returned.

### Syntax

```cs
public PagedList<Entry> List(EntryListOptions listOptions)
{
}
```

### Parameters

*listOptions*
> Type: `EntryListOptions`
> Allows all parameters to be optionally set and exposes less commonly used parameters.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Use the list options to filter the entry listing
var entries = client.Entries.List(new EntryListOptions{
    ContentTypeId = "movie",
    PageOptions = new PageOptions(3, 10),
    Order = new[] { "title", "-sys.version.created" },
    Language = "fr-fr",
    LinkDepth = 5,
    Fields = new[] { "title", "description", "releaseDate", "coverImage" }
});
```

---




## List as typed model with options object

Lists entries as typed models using an EntryListOptions object to allow more granular control of entries being returned.

### Syntax

```cs
public PagedList<T> List<T>(EntryListOptions listOptions)
{
}
```

### Parameters

*T*
> The model class, either a plain class or inheriting from EntryModel.

*listOptions*
> Type: `EntryListOptions`
> Allows all parameters to be optionally set and exposes less commonly used parameters.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
public class Movie
{
    public string Title { get; set; }

    public DateTime DateOfRelease { get; set; }
}
```
```cs
// Create a client
var client = ContensisClient.Create();

// Use the list options to filter the entry listing
var entries = client.Entries.List<Movie>(new EntryListOptions{
    ContentTypeId = "movie",
    PageOptions = new PageOptions(3, 10),
    Order = new[] { "title", "-sys.version.created" },
    Language = "fr-fr",
    LinkDepth = 5,
    Fields = new[] { "title", "dateOfRelease" }
});
```

---




## List with options object asynchronously

Lists entries using an EntryListOptions object to allow more granular control of entries being returned.

### Syntax

```cs
public Task<PagedList<Entry>> ListAsync(EntryListOptions listOptions)
{
}
```

### Parameters

*listOptions*
> Type: `EntryListOptions`  
> Allows all parameters to be optionally set and exposes less commonly used parameters.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Use the list options to filter the entry data
var entries = await client.Entries.ListAsync(new EntryListOptions{
    ContentTypeId = "movie",
    PageOptions = new PageOptions(3, 10),
    Order = new[] { "title", "-sys.version.created" },
    Language = "fr-fr",
    LinkDepth = 5,
    Fields = new { "title", "description", "releaseDate", "coverImage" }
});
```
---



## List as typed model with options object asynchronously

Lists entries using an EntryListOptions object to allow more granular control of entries being returned.

### Syntax

```cs
public async Task<PagedList<T>> ListAsync(EntryListOptions listOptions)
{
}
```

### Parameters

*T*
> The model class, either a plain class or inheriting from EntryModel.

*listOptions*
> Type: `EntryListOptions`  
> Allows all parameters to be optionally set and exposes less commonly used parameters.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
public class Movie
{
    public string Title { get; set; }

    public DateTime DateOfRelease { get; set; }
}
```
```cs
// Create a client
var client = ContensisClient.Create();

// Use the list options to filter the entry data
var entries = await client.Entries.ListAsync<Movie>(new EntryListOptions{
    ContentTypeId = "movie",
    PageOptions = new PageOptions(3, 10),
    Order = new[] { "title", "-sys.version.created" },
    Language = "fr-fr",
    LinkDepth = 5,
    Fields = new { "title", "-dateOfRelease" }
});
```
---