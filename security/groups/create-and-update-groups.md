---
description: Creating and updating groups can be achieved by using one of the New method overloads in combination with calling Save on the Group class.
---
# Create and update groups

Creating and updating [groups](/model/group.md) can be achieved by using one of the `New` method overloads in combination with calling `Save` on the Group class.

* [New(string groupName, GroupType groupType)](#create-new-group)

# Create new group

Initializes a new group with a group name and type. The group is not created from calling `New`.

### Syntax

```cs
public Group New(string groupName, GroupType groupType)
{    
}
```

### Parameters

*groupName*
> Type: `string`  
> The group name.

*groupType*
> Type: [`GroupType`](/model/grouptype.md)  
> The type of group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Initialize the group
Group group = client.Security.Groups.New("Fight Club Members", GroupType.Contensis);

// Create the group
group.Save();

// Create the group asynchronously
await group.SaveAsync();
```

# Update group

Updates an existing group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get an existing group
Group group = client.Security.Groups.Get("Fight Club Members");

// Update group details
group.Description = "Members of Fight Club";

// Update the group
group.Save();

// Update the group asynchronously
await group.SaveAsync();
```