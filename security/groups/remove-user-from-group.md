---
description: Removing a user from a group can be achieved by using one of the RemoveUser method overloads on either the group class, or directly from the management client without the need for a group instance.
---
# Getting a group

Removing a [user](/model/user.md) from a [group](/model/group.md) can be achieved by using one of the `RemoveUser` method overloads on either the group class, or directly from the management client without the need for a group instance.

* [RemoveUser(Guid groupId, Guid userId)](#remove-user)
* [RemoveUserAsync(Guid groupId, Guid userId)](#remove-user-async)
* [RemoveUser(User user)](#remove-user-from-group)
* [RemoveUserAsync(User user)](#remove-user-from-group-async)

# Remove user

Removes a user from a group.

### Syntax

```cs
public void RemoveUser(Guid groupId, Guid userId)
{    
}
```

### Parameters

*groupId*
> Type: `guid`  
> The group identifier to remove the user from.

*userId*
> Type: `guid`  
> The user identifier to remove from the group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic a user and group guid
Guid userId = Guid.Parse("3f7e190e-2ea6-4fb2-b0f3-e2ce7a231140");
Guid groupId = Guid.Parse("e65c27e1-211c-4372-874c-458ef28a3e7f");

// Remove the user from the group
client.Security.Groups.RemoveUser(groupId, userId);
```

# Remove user async

Removes a user from a group asynchronously.

### Syntax

```cs
public async Task RemoveUserAsync(Guid groupId, Guid userId)
{    
}
```

### Parameters

*groupId*
> Type: `guid`  
> The group identifier to remove the user from.

*userId*
> Type: `guid`  
> The user identifier to remove from the group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic a user and group guid
Guid userId = Guid.Parse("3f7e190e-2ea6-4fb2-b0f3-e2ce7a231140");
Guid groupId = Guid.Parse("e65c27e1-211c-4372-874c-458ef28a3e7f");

// Remove the user from the group
await client.Security.Groups.RemoveUserAsync(groupId, userId);
```

# Remove user from group

Removes a user from the group using a group and user instance.

### Syntax

```cs
public void RemoveUser(User user)
{    
}
```

### Parameters

*user*
> Type: [`user`](/model/user.md) 
> The user to remove from the group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = client.Security.Groups.Get("Fight Club Members");

// Get the user
User user = client.Security.Users.Get("t.durden")

// Remove the user from the group
group.RemoveUser(user);

```
# Remove user from group async

Removes a user from the group using a group and user instance asynchronously.

### Syntax

```cs
public async Task RemoveUserAsync(User user)
{    
}
```

### Parameters

*user*
> Type: [`user`](/model/user.md) 
> The user to remove from the group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = await client.Security.Groups.GetAsync("Fight Club Members");

// Get the user
User user = await client.Security.Users.GetAsync("t.durden")

// Remove the user from the group
await group.RemoveUserAsync(user);
```