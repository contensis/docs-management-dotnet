# Role methods

* [Save()](#save)
* [SaveAsync()](#saveasync)
* [Delete()](#delete)
* [DeleteAsync()](#deleteasync)

## Save

Saves a role instance.

### Syntax

```cs
public void Save()
{
}
```

### Return value

> Type: `void`

### Remarks

An exception will be thrown if there is any issue with the save, which could be either a data validation issue, an unexpected issue in the service or a local exception.

The API Key user must be part of the `Roles Administrators` group to be able to save a role.

### Example

```cs
// Create the role
var newRole = project.Security.Roles.New("Blog authors", "Blog authors can create and update blog content");

// Assign the required permissions to be able to create and update a blog entry
newRole.Permissions.Entries.Add(
    new EntryPermission("blog",
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
    newRole.Save();
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

---

## SaveAsync

Saves a node instance asynchronously.

### Syntax

```cs
public async Task SaveAsync()
{
}
```

### Return value

> Type: `Task`

### Remarks

An exception will be thrown if there is any issue with the save, which could be either a data validation issue, an unexpected issue in the service or a local exception.

The API Key user must be part of the `Roles Administrators` group to be able to save a role.

### Example

```cs
// Create the role
var newRole = project.Security.Roles.New("Blog authors", "Blog authors can create and update blog content");

// Assign the required permissions to be able to create and update a blog entry
newRole.Permissions.Entries.Add(
    new EntryPermission("blog",
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

---

## Delete

Deletes a role instance.

### Syntax

```cs
public void Delete()
{
}
```

### Return value

> Type: `void`

### Remarks

The API Key user must be part of the `Roles Administrators` group to be able to delete a role.

### Example

```cs
// Get an existing role
var role = project.Security.Roles.Get("cffd4ac9-2710-44f2-9ca4-f02a3e114c2d");

try
{
    // Delete the role
    role.Delete();
}
catch(RestRequestException restEx)
{
    // Handle service error.
}
catch(Exception ex)
{
    // Handle anything else, e.g. network error.
}
```

---

---

## DeleteAsync

Deletes a role instance asynchronously.

### Syntax

```cs
public Task DeleteAsync()
{
}
```

### Return value

> Type: `Task`

### Remarks

The API Key user must be part of the `Roles Administrators` group to be able to delete a role.

### Example

```cs
// Get an existing role
var role = await project.Security.Roles.GetAsync("cffd4ac9-2710-44f2-9ca4-f02a3e114c2d");

try
{
    // Delete the role
    await role.DeleteAsync();
}
catch(RestRequestException restEx)
{
    // Handle service error.
}
catch(Exception ex)
{
    // Handle anything else, e.g. network error.
}
```