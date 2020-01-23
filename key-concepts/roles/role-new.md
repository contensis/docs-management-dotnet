---
description: A new role is created using the *New* operation.
---
# Create a role

A new role is created using the *New* operation.

## New

Creates and returns a new role with specified name and description.

### Syntax

```cs
public Role New(LocalizedString name, LocalizedString description = null)
{
}
```

### Parameters

*name*
> Type: `LocalizedString`  
> The unique name for the role.

*description*
> Type: `LocalizedString`  
> An optional description for the role.

### Returns

> Type: [Role](/model/role.md)

## Remarks

The Save method on the Role object must be invoked once permissions and assignments have been set for the new role to take effect.

The API Key user must be part of the `Roles Administrators` group to be able to save a new Role.

## Example

This example shows how a role instance can be accessed.

```cs
using Zengenti.Contensis.Management;

var client = ManagementClient.Create();

// Access the movie DB project
var project = client.Projects.Get("movieDb");

// Create the role
var newRole = project.Security.Roles.New("Movie author", "Movie authors can create and update movie related content");

// Assign the required permissions to be able to create and update a movie and actor entries
newRole.Permissions.Entries.Add(
    new EntryPermission("movie",
        new List<string>
        {
            "contensisEntryBasic.sysCreate",
            "contensisEntryBasic.draft.sysUpdate"
        }));

newRole.Permissions.Entries.Add(
    new EntryPermission("actor",
        new List<string>
        {
            "contensisEntryBasic.sysCreate",
            "contensisEntryBasic.draft.sysUpdate"
        }));

// Assign users to the rolw
newRole.Assignments.Users.Add("m.jackson");
newRole.Assignments.Users.Add("g.michael");

try
{
    // Save the role to take effect
    await newRole.SaveAsync();
}
catch(RestRequestException restEx)
{
    // Handle service error.
}
catch(ValidationException valEx)
{
    // Handle data validation errors.
}
catch(Exception ex)
{
    // Handle anything else, e.g. network error.
}
```