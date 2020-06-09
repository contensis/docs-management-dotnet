---
description: Requesting a group can be achieved by using one of the Get method overloads.
---
# Getting a group

Requesting an individual [group](/model/group.md) can be achieved by using one of the `Get` methods overloads.

* [Get(Guid id)](#get-by-id)
* [GetAsync(Guid id)](#get-by-id-async)
* [Get(string id)](#get-by-string-id)
* [GetAsync(string id)](#get-by-string-id-async)
* [Get(string groupName)](#get-by-group-name)
* [GetAsync(string groupName)](#get-by-group-name-async)

# Get by id

Gets a group by its id.

### Syntax

```cs
public Group Get(Guid id)
{    
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the group.

## Remarks

Returns *null* if no group matches the specified id.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic a guid value
var groupId = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the group
Group group = client.Security.Groups.Get(groupId);
```

# Get by id async

Gets a group by its id asynchronously.

### Syntax

```cs
public async Task<Group> GetAsync(Guid id)
{    
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the group.

## Remarks

Returns *null* if no group matches the specified id.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic a guid value
var groupId = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the group
Group group = await client.Security.Groups.GetAsync(groupId);
```

# Get by string id

Gets a group by its id.

### Syntax

```cs
public Group Get(string id)
{    
}
```

### Parameters

*id*
> Type: `string`  
> The group identifier, either group name, or identifier.

## Remarks

Returns *null* if no group matches the specified id.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = client.Security.Groups.Get("c5da1719-cb3f-4f2e-927b-f678293258f3");
```

# Get by string id async

Gets a group by its id asynchronously.

### Syntax

```cs
public async Task<Group> GetAsync(string id)
{    
}
```

### Parameters

*id*
> Type: `string`  
> The groups identifier, either group name, or identifier.

## Remarks

Returns *null* if no group matches the specified id.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = await client.Security.Groups.GetAsync("c5da1719-cb3f-4f2e-927b-f678293258f3");
```


# Get by group name

Gets a group by its name.

### Syntax

```cs
public Group Get(string id)
{    
}
```

### Parameters

*id*
> Type: `string`  
> The group identifier, either group name, or identifier.

## Remarks

Returns *null* if no group matches the specified name.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = client.Security.Groups.Get("Fight Club Members");
```

# Get by group name async

Gets a group by its name asynchronously.

### Syntax

```cs
public async Task<Group> GetAsync(string id)
{    
}
```

### Parameters

*id*
> Type: `string`  
> The groups identifier, either group name, or identifier.

## Remarks

Returns *null* if no group matches the specified groupname.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = await client.Security.Groups.GetAsync("Fight Club Members");
```