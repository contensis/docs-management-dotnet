---
description: Requesting an individual node by it's identifier can be achieved by using one of the `Get` method overloads.
---
# Getting a node

Requesting an individual [node](/model/node.md) can be achieved by using one of the following methods.

* [Get(Guid id)](#get-by-guid-id)
* [Get(string id)](#get-by-string-id)
* [GetAsync(Guid id)](#get-by-guid-id-async)
* [GetAsync(string id)](#get-by-string-id-async)
* [GetRoot()](#get-root)
* [GetRootAsync()](#get-root-async)


## Get by Guid id

Gets a node by its `Guid` identifier.

### Syntax

```cs
public Node Get(Guid id)
{
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the node.

### Remarks

Returns *null* if no node matches the specified id.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Mimic a guid id value
var nodeGuid = Guid.Parse("2c95e478-289d-4d28-8159-02a3f8de5fb4");

// Get a specific node with matching id
Node moviesNode = movieDbProject.Nodes.Get(nodeGuid);
```

---

## Get by string id

Gets a node by its `string` identifier.

### Syntax

```cs
public Node Get(string id)
{
}
```

### Parameters

*id*
> Type: `string`  
> The id of the node.

### Remarks

Returns *null* if no node matches the specified id.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get a specific node with matching id
Node moviesNode = movieDbProject.Nodes.Get("2c95e478-289d-4d28-8159-02a3f8de5fb4");
```

---

## Get by Guid id async

Gets a node by its `Guid` identifier asynchronously.

### Syntax

```cs
public async Task<Node> GetAsync(Guid id)
{
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the node.

### Remarks

Returns *null* if no node matches the specified id.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Mimic a guid id value
var nodeGuid = Guid.Parse("2c95e478-289d-4d28-8159-02a3f8de5fb4");

// Get a specific node with matching id
Node moviesNode = await movieDbProject.Nodes.GetAsync(nodeGuid);
```

---

## Get by string id async

Gets a node by its `string` identifier asynchronously.

### Syntax

```cs
public async Task<Node> GetAsync(string id)
{
}
```

### Parameters

*id*
> Type: `string`  
> The id of the node.

### Remarks

Returns *null* if no node matches the specified id.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get a specific node with matching id
Node moviesNode = await movieDbProject.Nodes.GetAsync("2c95e478-289d-4d28-8159-02a3f8de5fb4");
```

---

## Get root

Gets the root node for the project

### Syntax

```cs
public Node GetRoot()
{
}
```

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get the root node for the prohect
Node rootNode = movieDbProject.Nodes.GetRoot();
```

## Get root async

Gets the root node for the project asynchronously

### Syntax

```cs
public async Task<Node> GetRoot()
{
}
```

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get the root node for the project
Node rootNode = await movieDbProject.Nodes.GetRootAsync();
```
