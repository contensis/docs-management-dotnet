---
description: Deleting a user can be achieved by using one of the Delete method overloads.
---
# Delete a user

Deleting a [user](/model/user.md) can be achieved by using one of the Delete method overloads.

* [Delete()](#delete)
* [DeleteAsync()](#delete-async)

## Delete

Deletes a user.

### Syntax

```cs
public void Delete()
{    
}
```

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic a guid value
var userId = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the user
User user = client.Security.Users.Get(userId);

// Delete the user
user.Delete();
```

## Delete async

Deletes a user asynchronously.

### Syntax

```cs
public async Task DeleteAsync()
{    
}
```

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic a guid value
var userId = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the user
User user = await client.Security.Users.GetAsync(userId);

// Delete the user
await user.DeleteAsync();
```