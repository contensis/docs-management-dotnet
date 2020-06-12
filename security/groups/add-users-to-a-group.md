---
description: Adding users to groups can be achieved using one of the AddUser overloads on either the group class, or directly from the management client without the need for a group instance.

---
# Add users to groups

Adding [users](/model/user.md) to [groups](/model/group.md) can be achieved using one of the AddUser overloads on either the group class, or directly from the management client without the need for a group instance.

* [AddUser(Guid groupId, Guid userId)](#add-user-to-group)
* [AddUserAsync(Guid groupId, Guid userId)](#add-user-to-group-async)
* [AddUsers(Guid groupId, params Guid[] userIds)](#add-users-to-group)
* [AddUsersAsync(Guid groupId, params Guid[] userIds)](#add-users-to-group-async)
* [AddUser(User user)](#add-user-from-group)
* [AddUserAsync(User user)](#add-user-from-group-async)
* [AddUsers(params User[] users)](#add-users-from-group)
* [AddUsersAsync(params User[] users)](#add-users-from-group-async)
* [AddUser(Guid userId)](#add-user-from-group-with-user-id)
* [AddUserAsync(Guid userId)](#add-user-from-group-with-user-id-async)
* [AddUsers(params Guid[] userIds)](#add-users-from-group-with-user-ids)
* [AddUsersAsync(params Guid[] userIds)](#add-users-from-group-with-user-ids-async)
* [AddUsers(params string[] userIds)](#add-users-from-group-with-user-string-ids)
* [AddUsersAsync(params string[] userIds)](#add-users-from-group-with-user-string-ids-async)

## Add user to group

Adds a user to a group.

### Syntax

```cs
public void AddUser(Guid groupId, Guid userId)
{    
}
```
### Parameters

*groupId*
> Type: `guid`  
> The group identifier to add the user to.

*userId*
> Type: `guid`  
> The user identifier to add to the group.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic groupId
Guid groupId = Guid.Parse("cea8dc76-a421-453d-be80-515a443679df");

// Mimic userId
Guid userId = Guid.Parse("b062fab2-2240-4667-9371-e1f5b9164111");

// Add the user to the group
client.Security.Groups.AddUser(groupId, userId);
```

## Add user to group async

Adds a user to a group asynchronously.

### Syntax

```cs
public void AddUser(Guid groupId, Guid userId)
{    
}
```

### Parameters

*groupId*
> Type: `guid`  
> The group identifier to add the user to.

*userId*
> Type: `guid`  
> The user identifier to add to the group.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic groupId
Guid groupId = Guid.Parse("cea8dc76-a421-453d-be80-515a443679df");

// Mimic userId
Guid userId = Guid.Parse("b062fab2-2240-4667-9371-e1f5b9164111");

// Add the user to the group
await client.Security.Groups.AddUserAsync(groupId, userId);
```

## Add users to group

Adds many users to a group.

### Syntax

```cs
public void AddUsers(Guid groupId, params Guid[] userIds)
{    
}
```

### Parameters

*groupId*
> Type: `guid`  
> The group identifier to add the users to.

*userIds*
> Type: `guid[]`  
> The user identifiers to add to the group.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic groupId
Guid groupId = Guid.Parse("cea8dc76-a421-453d-be80-515a443679df");

// Mimic userIds
Guid userId1 = Guid.Parse("b062fab2-2240-4667-9371-e1f5b9164111");
Guid userId2 = Guid.Parse("eb9e5c65-a068-436c-9586-8cfe57fabf6d");

// Add the users to the group
client.Security.Groups.AddUsers(groupId, userId1, userId2);
```

## Add users to group async

Adds many users to a group asynchronously.

### Syntax

```cs
public async Task AddUsersAsync(Guid groupId, params Guid[] userIds)
{    
}
```

### Parameters

*groupId*
> Type: `guid`  
> The group identifier to add the users to.

*userIds*
> Type: `guid[]`  
> The user identifiers to add to the group.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic groupId
Guid groupId = Guid.Parse("cea8dc76-a421-453d-be80-515a443679df");

// Mimic userIds
Guid userId1 = Guid.Parse("b062fab2-2240-4667-9371-e1f5b9164111");
Guid userId2 = Guid.Parse("eb9e5c65-a068-436c-9586-8cfe57fabf6d");

// Add the users to the group
await client.Security.Groups.AddUsersAsync(groupId, userId1, userId2);
```

## Add user from group

Adds a user to a group using a group instance.

### Syntax

```cs
public void AddUser(User user)
{    
}
```

### Parameters

*user*
> Type: [`user`](/model/user.md)  
> The user to add to the group.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = client.Security.Groups.Get("Fight Club Administrators");

// Get the user
User user = client.Security.Users.Get("tyler.durden");

// Add the user to the group
group.AddUser(user);
```

## Add user from group async

Adds a user to a group using a group instance asynchronously.

### Syntax

```cs
public async Task AddUserAsync(User user)
{    
}
```

### Parameters

*user*
> Type: [`user`](/model/user.md)  
> The user to add to the group.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = await client.Security.Groups.GetAsync("Fight Club Administrators");

// Get the user
User user = await client.Security.Users.GetAsync("tyler.durden");

// Add the user to the group
await group.AddUserAsync(user);
```

## Add users from group

Add many users to a group using a group instance.

### Syntax

```cs
public void AddUsers(params User[] users)
{    
}
```

### Parameters

*users*
> Type: [`user[]`](/model/user.md)  
> The users to add to the group.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = client.Security.Groups.Get("Fight Club Members");

// Get the users
User tyler = client.Security.Users.Get("tyler.durden");
User robert = client.Security.Users.Get("robert.paulsen");

// Add the users to the group
group.AddUsers(tyler, robert);
```

## Add users from group async

Add many users to a group using a group instance asynchronously.

### Syntax

```cs
public async Task AddUsersAsync(params User[] users)
{    
}
```

### Parameters

*users*
> Type: [`user[]`](/model/user.md)  
> The users to add to the group.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = await client.Security.Groups.GetAsync("Fight Club Members");

// Get the users
User tyler = await client.Security.Users.GetAsync("tyler.durden");
User robert = await client.Security.Users.GetAsync("robert.paulsen");

// Add the users to the group
await group.AddUsersAsync(tyler, robert);
```

## Add user from group with user id

Add a user to a group using a group instance and a user identifier.

### Syntax

```cs
public void AddUser(Guid userId)
{    
}
```

### Parameters

*userId*
> Type: `guid`  
> The user identifier to add.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = client.Security.Groups.Get("Fight Club Members");

// Mimic a user id
Guid userId = Guid.Parse("8243d100-22e8-4f95-bee1-e03ca94c7245");

// Add the user to the group
group.AddUser(userId);
```

## Add user from group with user id async

Add a to a group using a group instance and a user identifier asynchronously.

### Syntax

```cs
public async Task AddUserAsync(Guid userId)
{    
}
```

### Parameters

*userId*
> Type: `guid`  
> The user identifier to add.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = await client.Security.Groups.GetAsync("Fight Club Members");

// Mimic a user id
Guid userId = Guid.Parse("8243d100-22e8-4f95-bee1-e03ca94c7245");

// Add the user to the group
await group.AddUserAsync(userId);
```

## Add users from group with user ids

Add many users to a group using a group instance and a user identifier.

### Syntax

```cs
public void AddUsers(parmas Guid[] userIds)
{    
}
```

### Parameters

*userIds*
> Type: `guid[]`  
> The user identifiers to add.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = client.Security.Groups.Get("Fight Club Members");

// Mimic user ids
Guid userId1 = Guid.Parse("8243d100-22e8-4f95-bee1-e03ca94c7245");
Guid userId2 = Guid.Parse("9636f573-ea39-48e4-9d2f-6e985f7298bd");

// Add the users to the group
group.AddUsers(userId1. userId2);
```

## Add users from group with user ids async

Add many users to a group using a group instance and a user identifier asynchronously.

### Syntax

```cs
public async Task AddUsersAsync(params Guid[] userIds)
{    
}
```

### Parameters

*userIds*
> Type: `guid[]`  
> The user identifiers to add.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = await client.Security.Groups.GetAsync("Fight Club Members");

// Mimic user ids
Guid userId1 = Guid.Parse("8243d100-22e8-4f95-bee1-e03ca94c7245");
Guid userId2 = Guid.Parse("9636f573-ea39-48e4-9d2f-6e985f7298bd");

// Add the users to the group
await group.AddUsersAsync(userId1, userId2);
```








## Add users from group with user string ids

Add many users to a group using a group instance and a user identifier.

### Syntax

```cs
public void AddUsers(parmas string userIds)
{    
}
```

### Parameters

*userIds*
> Type: `string[]`  
> The user identifiers to add.


### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = client.Security.Groups.Get("Fight Club Members");

// Mimic user ids
string userId1 = "8243d100-22e8-4f95-bee1-e03ca94c7245";
string userId2 = "9636f573-ea39-48e4-9d2f-6e985f7298bd";

// Add the users to the group
group.AddUsers(userId1. userId2);
```

## Add users from group with user string ids async

Add many users to a group using a group instance and a user identifier asynchronously.

### Syntax

```cs
public async Task AddUsersAsync(params string[] userIds)
{    
}
```

### Parameters

*userIds*
> Type: `string[]`  
> The user identifiers to add.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the group
Group group = await client.Security.Groups.GetAsync("Fight Club Members");

// Mimic user ids
string userId1 = "8243d100-22e8-4f95-bee1-e03ca94c7245";
string userId2 = "1dfa6915-51d8-4070-9ec1-6bcb7396032b";

// Add the users to the group
await group.AddUsersAsync(userId1, userId2);
```