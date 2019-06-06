---
description: Getting a list of projects can be achieved by using one of the List method overloads.
---
# Listing projects

Getting a list of projects can be achieved by using one of the `List` method overloads.

* [List()](#list)
* [ListAsync()](#list-async)

## List

Lists all projects for a Contensis instance.

### Syntax

```cs
public List<Project> List()
{
}
```

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Create a project
var projects = client.Projects.List();

// Save the new project
movieDbProject.Save();
```

---

## List async

Lists all projects for a Contensis instance asynchronously.

### Syntax

```cs
public async Task<List<Project> ListAsync()
{
}
```

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Create a project
var projects = await client.Projects.ListAsync();

// Save the new project
await movieDbProject.SaveAsync();
```
