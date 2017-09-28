# Get a project

Requesting an individual project can be achieved by using one of the *Get* operations.

- [Get(string projectId)](#get-by-id)
- [GetAsync(string projectId)](#get-by-id-async)

## Get by id

Gets a project by its identifier.

### Syntax

```cs
public Project Get(string projectId)
{
}
```

### Parameters

*id*
> Type: `string`  
> The id of the project.

### Remarks

Returns *null* if a project with an id matching the specified id does not exist.

## Examples

#### This example shows how a project instance can be accessed.

```cs
using Zengenti.Contensis.Management;

var client = ManagementClient.Create();

// Access the movie DB project
var movieProject = client.Projects.Get("movieDb");
```

---

## Get by id async

Gets a project by its identifier asynchronously.

### Syntax

```cs
public async Task<Project> GetAsync(string projectId)
{
}
```

### Parameters

*id*
> Type: `string`  
> The id of the project.

### Remarks

Returns *null* if a project with an id matching the specified id does not exist.

## Examples

#### This example shows how a project instance can be accessed asynchronously.

```cs
using Zengenti.Contensis.Management;

var client = ManagementClient.Create();

// Access the movie DB project
var movieProject = await client.Projects.GetAsync("movieDb");
```