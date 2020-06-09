---
description: Listing users can be achieved by using one of the List method overloads.
---
# Listing users

Listing [users](/model/user.md) can be achieved by using one of the `List` method overloads.

* [List(SecurityListOptions listOptions)](#list-with-page-options)
* [ListAsync(SecurityListOptions listOptions)](#list-with-page-options-async)
* [List(SecurityListOptions listOptions, string query)](#list-with-query)
* [ListAsync(SecurityListOptions listOptions, string query)](#list-with-query-async)

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
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();

SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0,10)
};

// List the users
PagedList<User> users = client.Security.Users.List(listOptions);
```

# List with page options async

List users specifying page options

### Syntax

```cs
public async Task<PagedList<User>> ListAsync(SecurityListOptions listOptions = null, string query = null)
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
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();

SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0,10)
};

// List the users
PagedList<User> users = await client.Security.Users.ListAsync(listOptions);
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
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();

SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0,10)
};

// List the users with a query value of "tyler"
PagedList<User> users = client.Security.Users.List(listOptions, "tyler");
```

# List with query async

List users specifying a query to filter users by

### Syntax

```cs
public async Task<PagedList<User>> ListAsync(SecurityListOptions listOptions = null, string query = null)
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
using Zengenti.Data;

// Create a client
var client = ManagementClient.Create();

SecurityListOptions listOptions = new SecurityListOptions 
{
    PageOptions = new PageOptions(0,10)
};

// List the users with a query value of "tyler"
PagedList<User> users = await client.Security.Users.ListAsync(listOptions, "tyler");
```