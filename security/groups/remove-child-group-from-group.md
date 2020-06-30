---
description: Removing child groups from groups can be achieved using one of the RemoveChildGroup overloads on either the group class, or directly from the management client without the need for a group instance.

---
# Remove child groups from a group

Removing child [groups](/model/group.md) from groups can be achieved using one of the `RemoveChildGroup` overloads on either the group class, or directly from the management client without the need for a group instance.

* [RemoveChildGroup(Guid parentGroupId, Group childGroupId)](#remove-child-group)
* [RemoveChildGroupAsync(Guid parentGroupId, Group childGroupId)](#remove-child-group-async)
* [RemoveChildGroup(Group childGroup)](#remove-child-group-from-group)
* [RemoveChildGroupAsync(Group childGroup)](#remove-child-group-from-group-async)

## Remove child group

Removes a child group from a group.

### Syntax

```cs
public void RemoveChildGroup(Guid parentGroupId, Group childGroupId)
{    
}
```

### Parameters

*parentGroupId*
> Type: `guid`
> The parent group identifier to remove the child from.

*childGroupId*
> Type: `guid`  
> The child group identifier to remove from the group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the Everyone group
Group everyoneGroup = client.Security.Groups.Get("Everyone");

// Get a group to remove
Group fightClubAdministrators = client.Security.Groups.Get("Fight Club Administrators");

// Remove the fight club administrators group from the Everyone group
client.Security.Groups.RemoveChildGroup(everyoneGroup.Id, fightClubAdministrators.Id);
```

## Remove child group async

Removes a child group from a group asynchronously.

### Syntax

```cs
public async Task RemoveChildGroupAsync(Guid parentGroupId, Group childGroupId)
{    
}
```

### Parameters

*parentGroupId*
> Type: `guid`
> The parent group identifier to remove the child from.

*childGroupId*
> Type: `guid`  
> The child group identifier to remove from the group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the Everyone group
Group everyoneGroup = await client.Security.Groups.GetAsync("Everyone");

// Get a group to remove
Group fightClubAdministrators = await client.Security.Groups.GetAsync("Fight Club Administrators");

// Remove the fight club administrators group from the Everyone group
await client.Security.Groups.RemoveChildGroupAsync(everyoneGroup.Id, fightClubAdministrators.Id);
```

## Remove child group from group

Removes a child group from a group using a group instance.

### Syntax

```cs
public void RemoveChildGroup(Group childGroup)
{    
}
```

### Parameters

*childGroup*
> Type: [`group`](/model/group.md)  
> The child group to remove from the group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the Everyone group
Group everyoneGroup = client.Security.Groups.Get("Everyone");

// Get a group to remove
Group fightClubAdministrators = client.Security.Groups.Get("Fight Club Administrators");

// Remove the fight club administrators group from the Everyone group
everyoneGroup.RemoveGroup(fightClubAdministrators);
```

## Remove child group from group async

Remove a child group from a group using a group instance asynchronously.

### Syntax

```cs
public async Task RemoveChildGroupAsync(Group childGroup)
{    
}
```

### Parameters

*childGroup*
> Type: [`group`](/model/group.md)  
> The child group to remove from the group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the Everyone group
Group everyoneGroup = await client.Security.Groups.GetAsync("Everyone");

// Get a group to remove
Group fightClubAdministrators = await client.Security.Groups.GetAsync("Fight Club Administrators");

// Remove the fight club administrators group from the Everyone group
await everyoneGroup.RemoveGroupAsync(fightClubAdministrators);
```