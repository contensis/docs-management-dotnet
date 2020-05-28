---
description: Requesting a user can be achieved by using one of the Get method overloads.
---
# Getting a user

Requesting an individual user can be achieved by using one of the `Get` methods overloads.

* [Get(Guid uuid)](#get-by-uuid)

# Get by uuid

Gets an entry by its uuid identifier.

### Syntax

```cs
public User Get(Guid uuid)
{    
}
```

### Parameters

*uuid*
> Type: `Guid`
> The uuid of the user.

## Remarks

Returns *null* if no user matches the specified uuid.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Mimic a guid value
var userUuid = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the user
User user = client.Security.Users.Get(userUuid)
```