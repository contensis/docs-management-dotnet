---
description: Listing the users that are members of groups can be achived by using one of the Users method overloads.
---
# List group user memberships

Listing the [users](/model/user.md) that are members of [groups](/model/group.md)  an be achived by using one of the `Users` method overloads.

* [Users(SecurityListOptions listOptions)](#list-with-page-options)
* [UsersAsync(SecurityListOptions listOptions)](#list-with-page-options-async)

# List with page options

List users that are members of the group.

### Syntax

```cs
public PagedList<User> List(SecurityListOptions listOptions = null)
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
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();

SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0, 10)
};

// Get the group
Group group = client.Security.Groups.Get("System Administrators");

// List the users
PagedList<User> members = group.Users(listOptions);
```

# List with page options async

List users that are members of the group asynchronously.

### Syntax

```cs
public Task<PagedList<User>> List(SecurityListOptions listOptions = null)
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
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();

SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0, 10)
};

// Get the group
Group group = await client.Security.Groups.Get("System Administrators");

// List the users
PagedList<User> members = await group.UsersAsync(listOptions);
```