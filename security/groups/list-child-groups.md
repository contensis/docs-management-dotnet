---
description: Listing the child groups for a group can be achived by using one of the `Children` method overloads.
---

# List child groups

Listing the child [groups](/model/group.md) for a group can be achived by using one of the `Children` method overloads.

* [Children(SecurityListOptions listOptions)](#list-with-page-options)
* [ChildrenAsync(SecurityListOptions listOptions)](#list-with-page-options-async)

## List with page options

Lists child groups, specifying page options.

### Syntax

```cs
public PagedList<Group> Children(SecurityListOptions listOptions = null)
{    
}
```

### Parameters

*listOptions*
> Type: [`SecurityListOptions`](/model/securitylistoptions.md)  
> The list options, page size, page index, etc.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

Group systemAdministrators = client.Security.Groups.Get("System Administrators");

// Setup the list options, setting a page size of 10 and ordering by group name
SecurityListOptions listOptions = new SecurityListOptions
{
    PageOptions = new PageOptions(0, 10),
    Order = "name"
};

// List the child groups
PagedList<Group> groups = systemAdministrators.Children(listOptions);
```

## List with page options async

Lists child groups, specifying page options asynchronously.

### Syntax

```cs
public Task<PagedList<Group>> ChildrenAsync(SecurityListOptions listOptions = null)
{    
}
```

### Parameters

*listOptions*
> Type: [`SecurityListOptions`](/model/securitylistoptions.md)  
> The list options, page size, page index, etc.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

Group systemAdministrators = await client.Security.Groups.GetAsync("System Administrators");

// Setup the list options, setting a page size of 10 and ordering by group name
SecurityListOptions listOptions = new SecurityListOptions
{
    PageOptions = new PageOptions(0, 10),
    Order = "name"
};

// List the child groups
PagedList<Group> groups = await systemAdministrators.ChildrenAsync(listOptions);
```