---
description: Requesting a list of role can be achieved by using one of the List operations.
---
# Listing roles

Requesting a list of role can be achieved by using one of the *List* operations.

* [List(PageOptions pageOptions = null)](#list)
* [ListAsync(PageOptions pageOptions = null)](#listasync)

## List

Lists all roles assigned to a project.

### Syntax

```cs
public PagedList<Role> List(PagingOptions pagingOptions = null)
{
}
```

### Parameters

*pageOptions*
> Type: `PageOptions&lt;Role&gt;`  
> The options for paging the results.

### Return value

> Type: [PagedList&lt;Role&gt;](/model/role.md)

## Remarks

The API Key user must be part of the `Roles Administrators` group to be able to list roles.

## Example

This example shows how roles can be listed for a project.

```cs
using Zengenti.Contensis.Management;

var client = ManagementClient.Create();

// Access the movie DB project
var project = client.Projects.Get("movieDb");

// List the roles with the default paging options
var roles = project.Security.Roles.List();
```

---

## ListAsync

Lists all roles assigned to a project asynchronously.

### Syntax

```cs
public async Task<PagedList<Role>> ListAsync(PagingOptions pagingOptions = null)
{
}
```

### Parameters

*pageOptions*
> Type: `PageOptions&lt;Role&gt;`  
> The options for paging the results.

### Return value

> Type: [Task&lt;PagedList&lt;Role&gt;&gt;](/model/role.md)

## Example

This example shows how roles can be listed for a project.

```cs
using Zengenti.Contensis.Management;

var client = ManagementClient.Create();

// Access the movie DB project
var project = await client.Projects.GetAsync("movieDb");

// List the roles with specific paging options
var roles = await project.Security.Roles.ListAsync(new PageOptions(pageIndex: 0, pageSize: 10));
```

---