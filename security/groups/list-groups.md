---
description: Listing groups can be achieved by using one of the List method overloads.
---
# Listing groups

Listing [groups](/model/group.md) can be achieved by using one of the `List` method overloads.

* [List(SecurityListOptions listOptions)](#list-with-page-options)
* [ListAsync(SecurityListOptions listOptions)](#list-with-page-options-async)
* [List(SecurityListOptions listOptions, string query)](#list-with-query)
* [ListAsync(SecurityListOptions listOptions, string query)](#list-with-query-async)

# List with page options

List groups specifying page options.

### Syntax

```cs
public PagedList<Group> List(SecurityListOptions listOptions = null, string query = null)
{    
}
```

### Parameters

*listOptions*
> Type: [`SecurityListOptions`](/model/securitylistoptions.md)  
> The list options, page size, page index, etc.

*query*
> Type: `string`  
> The optional group list query, which performs a basic `contains` on the group name.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();

SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0, 10)
};

// List the groups
PagedList<Group> groups = client.Security.Groups.List(listOptions);
```

# List with page options async

List groups specifying page options asynchronously.

### Syntax

```cs
public async Task<PagedList<Group>> ListAsync(SecurityListOptions listOptions = null, string query = null)
{    
}
```

### Parameters

*listOptions*
> Type: [`SecurityListOptions`](/model/securitylistoptions.md)  
> The list options, page size, page index, etc.

*query*
> Type: `string`  
> The optional group list query, which performs a basic `contains` on the group name.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();

SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0, 10)
};

// List the groups
PagedList<Group> groups = await client.Security.Groups.ListAsync(listOptions);
```

# List with query

List groups specifying a query to filter groups by.

### Syntax

```cs
public PagedList<Group> List(SecurityListOptions listOptions = null, string query = null)
{    
}
```

### Parameters

*listOptions*
> Type: `SecurityListOptions`  
> The list options, page size, page index, etc.

*query*
> Type: `string`  
> The optional group list query, which performs a basic `contains` on the group name.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();

SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0, 10)
};

// List the groups with a query value of "fight club"
PagedList<Group> groups = client.Security.Groups.List(listOptions, "fight club");
```

# List with query async

List groups specifying a query to filter groups by asynchronously.

### Syntax

```cs
public async Task<PagedList<Group>> ListAsync(SecurityListOptions listOptions = null, string query = null)
{    
}
```

### Parameters

*listOptions*
> Type: `SecurityListOptions`  
> The list options, page size, page index, etc.

*query*
> Type: `string`  
> The optional group list query, which performs a basic `contains` on the group name.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();

SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0, 10)
};

// List the groups with a query value of "fight club"
PagedList<Group> groups = await client.Security.Groups.ListAsync(listOptions, "fight club");
```