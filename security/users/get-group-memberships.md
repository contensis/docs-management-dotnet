---
description: Getting the group memberships for a user can be achived by using one of the `Groups` method overloads.loads.
---
# Get group memberships

Getting the [group](/model/group.md) memberships for a [user](/model/user.md) can be achived by using one of the `Groups` method overloads.

* [Groups(SecurityListOptions listOptions, bool includeInherited)](#list-with-page-options)
* [GroupsAsync(SecurityListOptions listOptions, bool includeInherited)](#list-with-page-options)

## List with page options

Lists user's group memberships, specifying page options and whether or not to include inherited group memberships.

### Syntax

```cs
public PagedList<Group> Groups(SecurityListOptions listOptions = null, bool includeInherited = false)
{    
}
```

### Parameters

*listOptions*
> Type: [`SecurityListOptions`](/model/securitylistoptions.md)  
> The list options, page size, page index, etc.

*includeInherited*
> Type: `bool`  
> Whether or not to include all inherited parent groups.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic a guid value
var userId = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the user
User user = client.Security.Users.Get(userId);

// Setup the list options, setting a page size of 10 and ordering by group name
SecurityListOptions listOptions = new SecurityListOptions
{
    PageOptions = new PageOptions(0, 10),
    Order = "name"
};

// List the group memberships including inherited groups
PagedList<Group> groups = user.Groups(listOptions, true);
```
## List with page options async

Lists user's group memberships, specifying page options and whether or not to include inherited group memberships asynchronously.

### Syntax

```cs
public async Task<PagedList<Group>> GroupsAsync(SecurityListOptions listOptions = null, bool includeInherited = false)
{    
}
```

### Parameters

*listOptions*
> Type: [`SecurityListOptions`](/model/securitylistoptions.md)  
> The list options, page size, page index, etc.

*includeInherited*
> Type: `bool`  
> Whether or not to include all inherited parent groups.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic a guid value
var userId = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the user
User user = await client.Security.Users.GetAsync(userId);

// Setup the list options, setting a page size of 10 and ordering by group name
SecurityListOptions listOptions = new SecurityListOptions
{
    PageOptions = new PageOptions(0, 10),
    Order = "name"
};

// List the group memberships including inherited groups
PagedList<Group> groups = await user.GroupsAsync(listOptions, true);
```