# Project methods

* [Save()](#save)
* [SaveAsync()](#saveasync)
* [Delete()](#delete)
* [DeleteAsync()](#deleteasync)

## Save

Saves a project instance.

### Syntax

```cs
public void Save()
{
}
```

### Return value

> Type: `void`

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get a specific project
var project = client.Projects.Get("movieDb");

// Make a change to the project
project.Description = "Movie database project";

try
{
    // Save the changes.
    project.Save();
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

Saves a project instance asynchronously.

### Syntax

```cs
public Task SaveAsync()
{
}
```

### Return value

> Type: `Task`

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get a specific project
var project = client.Projects.Get("movieDb");

// Make a change to the project
project.Description = "Movie database project";

try
{
    // Save the changes.
    await project.SaveAsync();
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

Deletes a project instance.

### Syntax

```cs
public void Delete()
{
}
```

### Return value

> Type: `void`

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get a specific project
var project = client.Projects.Get("movieDb");

try
{
    // Delete the instance.
    project.Delete();
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

## DeleteAsync

Deletes a project instance asynchronously.

### Syntax

```cs
public Task DeleteAsync()
{
}
```

### Return value

> Type: `Task`

### Example

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get a specific project
var project = client.Projects.Get("movieDb");

try
{
    // Delete the instance.
    await project.DeleteAsync();
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
