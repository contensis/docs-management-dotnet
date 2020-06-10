---
description: Deleting a group can be achieved by using one of the Delete method overloads.
---
# Delete a group

Deleting a [group](/model/group.md) can be achieved by using one of the Delete method overloads.

* [Delete()](#delete)
* [DeleteAsync()](#delete-async)

## Delete

Deletes a group.

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
var groupId = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the group
Group group = client.Security.Groups.Get(groupId);

// Delete the group
group.Delete();
```

## Delete async

Deletes a group asynchronously.

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
var groupId = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the group
Group group = await client.Security.Groups.GetAsync(groupId);

// Delete the group
await group.DeleteAsync();
```