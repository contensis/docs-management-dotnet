---
description: Adding child groups to groups can be achieved using one of the AddGroup overloads on either the group class, or directly from the management client without the need for a group instance.

---
# Add child groups to a group

Adding child groups to [groups](/model/group.md) can be achieved using one of the AddUGroup overloads on either the group class, or directly from the management client without the need for a group instance.

* [AddChildGroup(Group childGroup)](#add-child-group)
* [AddChildGroupAsync(Group childGroup)](#add-child-group-async)

## Add child group

Adds a child group to a group using a group instance.

### Syntax

```cs
public void AddChildGroup(Group childGroup)
{    
}
```

### Parameters

*childGroup*
> Type: [`group`](/model/group.md)  
> The child group to add to the group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the Everyone group
Group everyoneGroup = client.Security.Groups.Get("Everyone");

// Get a group to add
Group fightClubAdministrators = client.Security.Groups.Get("Fight Club Administrators");


// Add the fight club administrators group to the Everyone group
everyoneGroup.AddGroup(fightClubAdministrators);
```

## Add child group async

Adds a child group to a group using a group instance asynchronously.

### Syntax

```cs
public async Task AddChildGroupAsync(Group childGroup)
{    
}
```

### Parameters

*childGroup*
> Type: [`group`](/model/group.md)  
> The child group to add to the group.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the Everyone group
Group everyoneGroup = await client.Security.Groups.GetAsync("Everyone");

// Get a group to add
Group fightClubAdministrators = await client.Security.Groups.GetAsync("Fight Club Administrators");

// Add the fight club administrators group to the Everyone group
await everyoneGroup.AddGroupAsync(fightClubAdministrators);
```