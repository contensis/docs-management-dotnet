---
description: Requesting an individual role can be achieved by using one of the Get operations.
---
# Get a role

Requesting an individual role can be achieved by using one of the *Get* operations.

* [Get(string roleId)](#get-by-string-id)
* [Get(Guid roleId)](#get-by-guid-id)
* [GetAsync(string roleId)](#get-by-string-id-async)
* [GetAsync(Guid roleId)](#get-by-guid-id-async)

## Get by string id

Gets a role by its identifier.

### Syntax

```cs
public Role Get(string roleId)
{
}
```

### Parameters

*roleId*
> Type: `string`  
> The id of the role.

### Return value

> Type: [Role](/model/role.md)

## Remarks

Returns *null* if a role with an id matching the specified roleId does not exist.

The API Key user must be part of the `Roles Administrators` group to be able to get a role.

## Example

This example shows how a role instance can be accessed.

```cs
using Zengenti.Contensis.Management;

var client = ManagementClient.Create();

// Access the movie DB project
var project = client.Projects.Get("movieDb");

// Get the role by id
var role = project.Security.Roles.Get("fb2f4753-7b4c-4885-b7fe-905377af95ff");
```

---

## Get by Guid id

Gets a role by its identifier.

### Syntax

```cs
public Role Get(Guid roleId)
{
}
```

### Parameters

*roleId*
> Type: `Guid`  
> The id of the role.

### Return value

> Type: [Role](/model/role.md)

### Remarks

Returns *null* if a role with an id matching the specified roleId does not exist.

## Example

This example shows how a role instance can be accessed.

```cs
using Zengenti.Contensis.Management;

var client = ManagementClient.Create();

// Access the movie DB project
var project = client.Projects.Get("movieDb");

// The role id may have been passed in as Guid variable
var roleId = Guid.Parse("fb2f4753-7b4c-4885-b7fe-905377af95ff");

// Get the role by id
var role = project.Security.Roles.Get(roleId);
```

---

## Get by string id async

Gets a role by its identifier asynchronously.

### Syntax

```cs
public async Task<Role> GetAsync(string roleId)
{
}
```

### Parameters

*roleId*
> Type: `string`  
> The id of the role.

### Return value

> Type: [Task&lt;Role&gt;](/model/role.md)

### Remarks

Returns *null* if a role with an id matching the specified roleId does not exist.

## Example

This example shows how a role instance can be accessed.

```cs
using Zengenti.Contensis.Management;

var client = ManagementClient.Create();

// Access the movie DB project
var project = await client.Projects.GetAsync("movieDb");

// Get the role by id
var role = await project.Security.Roles.GetAsync("fb2f4753-7b4c-4885-b7fe-905377af95ff");
```

---

## Get by Guid id async

Gets a role by its identifier asynchronously.

### Syntax

```cs
public async Task<Role> GetAsync(Guid roleId)
{
}
```

### Parameters

*roleId*
> Type: `Guid`  
> The id of the role.

### Return value

> Type: [Task&lt;Role&gt;](/model/role.md)

### Remarks

Returns *null* if a role with an id matching the specified roleId does not exist.

## Example

This example shows how a role instance can be accessed.

```cs
using Zengenti.Contensis.Management;

var client = ManagementClient.Create();

// Access the movie DB project
var project = await client.Projects.GetAsync("movieDb");

// The role id may have been passed in as a Guid variable
var roleId = Guid.Parse("fb2f4753-7b4c-4885-b7fe-905377af95ff");

// Get the role by id
var role = await project.Security.Roles.GetAsync(roleId);
```