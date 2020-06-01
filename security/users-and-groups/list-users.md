---
description: Listing users can be achieved by using one of the List method overloads.
---
# Getting a user

Listing users can be achieved by using one of the `List` method overloads.

* [List(SecurityListOptions listOptions)](#list-with-page-options)
* [List(SecurityListOptions listOptions)](#list-with-query)

# List with page options

List users specifying page options

### Syntax

```cs
public PagedList<User> List(SecurityListOptions listOptions = null, string query = null)
{    
}
```

### Parameters

*listOptions*
> Type: [`SecurityListOptions`](/model/securitylistoptions.md)
> The list options, page size, page index, etc.

*query*
> Type: string
> The optional user list query, which performs a basic `contains` on the users firstname, surname, username or email.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();


SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0,10)
};

// List the users
PagedList<User> users = client.Security.Users.List(listOptions)
```

# List with query

List users specifying a query to filter users by

### Syntax

```cs
public PagedList<User> List(SecurityListOptions listOptions = null, string query = null)
{    
}
```

### Parameters

*listOptions*
> Type: `SecurityListOptions`
> The list options, page size, page index, etc.

*query*
> Type: string
> The optional user list query, which performs a basic `contains` on the users firstname, surname, username or email.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();


SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0,10)
};

// List the users with a query value of "tyler"
PagedList<User> users = client.Security.Users.List(listOptions, "tyler")
```