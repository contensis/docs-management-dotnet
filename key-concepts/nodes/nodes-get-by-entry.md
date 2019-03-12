---
description: Requesting nodes that have an attached entry can be achieved by using one of the `GetByEntryId` method overloads.
---
# Getting a node

Requesting [nodes](/model/node.md) that have an attached entry can be achieved by using one of the `GetByEntryId` method overloads.

* [GetByEntryId(Guid entryId)](#get-by-entry-guid-id)
* [GetByEntryIdAsync(Guid entryId)](#get-by-entry-guid-id-async)
* [GetByEntryId(string entryId)](#get-by-entry-string-id)
* [GetByEntryIdAsync(string entryId)](#get-by-entry-string-id-async)

## Get by entry Guid id

Gets a list of nodes by specifiying an entry `Guid` identifier.

### Syntax

```cs
public List<Node> GetByEntryId(Guid entryId)
{
}
```

### Parameters

*id*
> Type: `Guid`  
> The entry identifier to match the nodes by.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get a specific node with assigned entry id
List<Node> nodesWithEntryAssigned = movieDbProject.Nodes.GetByEntryId(entryGuid);
```

---

## Get by entry Guid id async

Gets a list of nodes asynchronously by specifiying an entry `Guid` identifier.

### Syntax

```cs
public Task<List<Node>> GetByEntryIdAsync(Guid entryId)
{
}
```

### Parameters

*id*
> Type: `Guid`  
> The entry identifier to match the nodes by.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get a specific node with assigned entry id
List<Node> nodesWithEntryAssigned = await movieDbProject.Nodes.GetByEntryIdAsync(entryGuid);
```

---

## Get by entry string id

Gets a list of nodes by specifiying an entry `string` identifier.

### Syntax

```cs
public List<Node> GetByEntryId(string entryId)
{
}
```

### Parameters

*id*
> Type: `string`  
> The entry identifier to match the nodes by.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get a specific node with assigned entry id
List<Node> nodesWithEntryAssigned = movieDbProject.Nodes.GetByEntryId("d2fb1cb7-e0c0-4334-bf86-be0f08163953");
```

---

## Get by entry string id async

Gets a list of nodes asynchronously by specifiying an entry `string` identifier.

### Syntax

```cs
public Task<List<Node>> GetByEntryIdAsync(string entryId)
{
}
```

### Parameters

*id*
> Type: `string`  
> The entry identifier to match the nodes by.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get a specific node with assigned entry id
List<Node> nodesWithEntryAssigned = await movieDbProject.Nodes.GetByEntryIdAsync("d2fb1cb7-e0c0-4334-bf86-be0f08163953");
```