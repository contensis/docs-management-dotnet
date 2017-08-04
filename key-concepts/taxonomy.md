# Taxonomy

Taxonomy nodes can be retrieved using the following methods, either by key or by path. The localization can be included as a parameter to determine the language the nodes should be returned as. The order by default is set to 'Defined', which is the order set in the UI, but an order of 'Alphabetical' can also be set. 

The childDepth parameter is used to reduce the number of service calls if child and descendant nodes are being iterated, which will potentially increase performance.

- [GetNodeByKey(string key, string language, int childDepth, TaxonomyNodeOrder order))](#getnodebykey)
- [GetNodeByKeyAsync(string key, string language, int childDepth, TaxonomyNodeOrder order)](#getnodebykeyasync)
- [GetNodeByPath(string path, string language, int childDepth, TaxonomyNodeOrder order))](#getnodebypath)
- [GetNodeByPathAsync(string key, string language, int childDepth, TaxonomyNodeOrder order))](#getnodebypathasync)

## GetNodeByKey

Gets a [TaxonomyNode](/model/taxonomynode.md) instance by it's key.

### Syntax

```cs
public TaxonomyNode GetNodeByKey(string key, string language = null, int childDepth = 0, TaxonomyNodeOrder order = TaxonomyNodeOrder.Defined)
{
}
```

### Parameters

*key*
> Type: `string`  
> The key for the taxonomy, which is a forward-slash delimitered set of integer values, e.g. 0/2/734 

*language*
> Type: `string`  
> The specified localization for the taxonomy.

*childDepth*
> Type: `int`  
> The depth at which to return child nodes.

*order*
> Type: `TaxonomyNodeOrder`  
> The order in which to return the descendant taxonomy nodes.

### Remarks

Returns *null* if a taxonomy does not match the key or if the language is unsupported in the project.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get a specific taxonomy for the default project language
TaxonomyNode genreNode = client.Taxonomy.GetNodeByKey("0/12/543");

// Get a specific taxonomy for French and include childs nodes to a depth of 2
TaxonomyNode genreNode = client.Taxonomy.GetNodeByKey("0/12/543", "fr-FR", 2);

// Order the node alphabetically
TaxonomyNode genreNode = client.Taxonomy.GetNodeByKey("0/12/543", order: TaxonomyNodeOrder.Alphabetical);
```

---

## GetNodeByKeyAsync

Gets a [TaxonomyNode](/model/taxonomynode.md) instance by it's key asynchronously.

### Syntax

```cs
public asnyc Task<TaxonomyNode> GetNodeByKeyAsync(string key, string language = null, int childDepth = 0, TaxonomyNodeOrder order = TaxonomyNodeOrder.Defined)
{
}
```

### Parameters

*key*
> Type: `string`  
> The key for the taxonomy, which is a forward-slash delimitered set of integer values, e.g. 0/2/734 

*language*
> Type: `string`  
> The specified localization for the taxonomy.

*childDepth*
> Type: `int`  
> The depth at which to return child nodes.

*order*
> Type: `TaxonomyNodeOrder`  
> The order in which to return the descendant taxonomy nodes.

### Remarks

Returns *null* if a taxonomy does not match the key or if the language is unsupported in the project.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get a specific taxonomy for the default project language
TaxonomyNode genreNode = await client.Taxonomy.GetNodeByKeyAsync("0/12/543");

// Get a specific taxonomy for French and include childs nodes to a depth of 2
TaxonomyNode genreNode = await client.Taxonomy.GetNodeByKeyAsync("0/12/543", "fr-FR", 2);

// Order the node alphabetically
TaxonomyNode genreNode = await client.Taxonomy.GetNodeByKeyAsync("0/12/543", order: TaxonomyNodeOrder.Alphabetical);
```

## GetNodeByPath

Gets a [TaxonomyNode](/model/taxonomynode.md) instance by it's path.

### Syntax

```cs
public TaxonomyNode GetNodeByPath(string path, string language = null, int childDepth = 0, TaxonomyNodeOrder order = TaxonomyNodeOrder.Defined)
{
}
```

### Parameters

*path*
> Type: `string`  
> The path for the taxonomy, which is a forward-slash delimitered set of string values, e.g. "Root/Movies/Genres/Comedy" 

*language*
> Type: `string`  
> The specified localization for the taxonomy.

*childDepth*
> Type: `int`  
> The depth at which to return child nodes.

*order*
> Type: `TaxonomyNodeOrder`  
> The order in which to return the descendant taxonomy nodes.

### Remarks

Returns *null* if a taxonomy does not match the key or if the language is unsupported in the project.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get a specific taxonomy for the default project language
TaxonomyNode genreNode = client.Taxonomy.GetNodeByPath("Root/movies/genre");

// Get a specific taxonomy for French and include childs nodes to a depth of 2
TaxonomyNode genreNode = client.Taxonomy.GetNodeByPath("Root/movies/genre", "fr-FR", 2);

// Order the node alphabetically
TaxonomyNode genreNode = client.Taxonomy.GetNodeByPath("Root/movies/genre", order: TaxonomyNodeOrder.Alphabetical);
```

---


## GetNodeByPathAsync

Gets a [TaxonomyNode](/model/taxonomynode.md) instance by it's path asynchronously.

### Syntax

```cs
public asnyc Task<TaxonomyNode> GetNodeByPathAsync(string path, string language = null, int childDepth = 0, TaxonomyNodeOrder order = TaxonomyNodeOrder.Defined)
{
}
```

### Parameters

*path*
> Type: `string`  
> The path for the taxonomy, which is a forward-slash delimitered set of string values, e.g. "Root/Movies/Genres/Comedy" 

*language*
> Type: `string`  
> The specified localization for the taxonomy.

*childDepth*
> Type: `int`  
> The depth at which to return child nodes.

*order*
> Type: `TaxonomyNodeOrder`  
> The order in which to return the descendant taxonomy nodes.

### Remarks

Returns *null* if a taxonomy does not match the path for the specified language or if the language is unsupported in the project.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get a specific taxonomy for the default project language
TaxonomyNode genreNode = await client.Taxonomy.GetNodeByPathAsync("Root/movies/genre");

// Get a specific taxonomy for French and include childs nodes to a depth of 2
TaxonomyNode genreNode = await client.Taxonomy.GetNodeByPathAsync("Root/movies/genre", "fr-FR", 2);

// Order the node alphabetically
TaxonomyNode genreNode = await client.Taxonomy.GetNodeByKeyAsync("Root/movies/genre", order: TaxonomyNodeOrder.Alphabetical);
```

---