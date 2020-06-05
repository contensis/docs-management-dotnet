---
description: Checking a users group memberships can be achieved by using one of the IsMemberOf method overloads on the user object
---

# Check group memberships

Checking a [users](/model/user.md) group memberships can be achieved by using one of the `IsMemberOf` method overloads on the user object.

* [IsMemberOf(string)](#by-group-name)
* [IsMemberOfAsync(string)](#by-group-name-async)
* [IsMemberOf(guid)](#by-group-id)
* [IsMemberOfAsync(guid)](#by-group-id-async)
* [IsMemberOf(string)](#by-group-id-string)
* [IsMemberOfAsync(string)](#by-group-id-string-async)

## By group name

Checks the user's group membership by the group name.

### Syntax

```cs
public bool IsMemberOf(string groupName)
{    
}
```

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = client.Security.Users.Get("t.durden");

// Check if the user is a member of the System Administrators group
bool isSystemAdmin = user.IsMemberOf("System Administrators");
```

## By group name async

Checks the user's group membership by the group name asynchronously.

### Syntax

```cs
public async Task<bool> IsMemberOfAsync(string groupName)
{    
}
```

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = await client.Security.Users.GetAsync("t.durden");

// Check if the user is a member of the System Administrators group
bool isSystemAdmin = await user.IsMemberOfAsync("System Administrators");
```

## By group id

Checks the user's group membership by the group identifier.

### Syntax

```cs
public bool IsMemberOf(Guid groupId)
{    
}
```

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = client.Security.Users.Get("t.durden");

//Mimic a group guid
Guid groupId = Guid.Parse("94b53068-4501-4ea2-abbd-ba51fed5008e");

// Check if the user is a member of the System Administrators group
bool isSystemAdmin = user.IsMemberOf(groupId);
```

## By group id async

Checks the user's group membership by the group identifier asynchronously.

### Syntax

```cs
public async Task<bool> IsMemberOfAsync(Guid groupId)
{    
}
```

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = await client.Security.Users.GetAsync("t.durden");

//Mimic a group guid
Guid groupId = Guid.Parse("94b53068-4501-4ea2-abbd-ba51fed5008e");

// Check if the user is a member of the System Administrators group
bool isSystemAdmin = await user.IsMemberOfAsync(groupId);
```

## By group id string

Checks the user's group membership by the group identifier.

### Syntax

```cs
public bool IsMemberOf(string groupId)
{    
}
```

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = client.Security.Users.Get("t.durden");

// Check if the user is a member of the System Administrators group
bool isSystemAdmin = user.IsMemberOf("94b53068-4501-4ea2-abbd-ba51fed5008e");
```

## By group id string async

Checks the user's group membership by the group identifier asynchronously.

### Syntax

```cs
public async Task<bool> IsMemberOfAsync(string groupId)
{    
}
```

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = await client.Security.Users.GetAsync("t.durden");

// Check if the user is a member of the System Administrators group
bool isSystemAdmin = await user.IsMemberOfAsync("94b53068-4501-4ea2-abbd-ba51fed5008e");
```