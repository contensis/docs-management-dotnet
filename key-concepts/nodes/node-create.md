---
description: A new node can be created by using one of the `New` overload methods.
---
# Create a node

A new [node](/model/node.md) can be created by using one of the `New` overload methods.

* [New(Guid parentId, LocalizedString title)](#new-with-guid-parentid-and-title)
* [New(string parentId, LocalizedString title)](#new-with-string-parentid-and-title)

## New with guid parentId and title

Creates a new node with a specified title.

### Syntax

```cs
public Node New(Guid parentId, LocalizedString title)
{
}
```

### Parameters

*parentId*
> Type: `Guid`  
> The id of the parent node.

*title*
> Type: `LocalizedString`  
> The localized title for the node.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Create a new node by specifying the parent node id and the title
var newNode = movieDbProject.Nodes.New(parentGuidId, "Indiana Jones");

// Set some properties
newNode.Slug = "indiana-jones"

// Commit the new node
newNode.Save();
```

---

## New with string parentId and title

Creates a new node with a specified title.

### Syntax

```cs
public Node New(string parentId, LocalizedString title)
{
}
```

### Parameters

*parentId*
> Type: `string`  
> The id of the parent node.

*title*
> Type: `LocalizedString`  
> The localized title for the node.

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Create a new node by specifying the parent node id and the title
var newNode = movieDbProject.Nodes.New("fb815126-e6b4-465c-9423-2cac9a0d791e", "Indiana Jones");

// Set some properties
newNode.Slug = "indiana-jones"

// Commit the new node
newNode.Save();
```