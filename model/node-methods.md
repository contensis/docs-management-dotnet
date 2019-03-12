# Node methods

* [Save()](#save)
* [SaveAsync()](#saveasync)
* [Delete()](#delete)
* [DeleteAsync()](#deleteasync)
* [NewChild(LocalizedString title)](#newchild)
* [Children()](#children)
* [ChildrenAsync()](#children)

## Save

Saves a node instance.

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
// Get a node
var node = client.Nodes.Get("1abf0e7f-7507-4578-a3be-1280ed7486fe");

// Update a value
node.Slug = "iron-man";

try
{
    // Save the changes.
    node.Save();
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

### Example

```cs
// Get a node
var node = client.Nodes.Get("1abf0e7f-7507-4578-a3be-1280ed7486fe");

// Update a value
node.Slug = "iron-man";

try
{
    // Save the changes asynchronously.
    await node.SaveAsnyc();
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

Deletes a node instance.

### Syntax

```cs
public void Delete()
{
}
```

### Return value

> Type: `void`

### Remarks

On a successful delete, the node data is set to null.

### Example

```cs
// Get a node
var node = client.Nodes.Get("1abf0e7f-7507-4578-a3be-1280ed7486fe");

try
{
    // Delete the node instance.
    node.Delete();
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

## DeleteAsync

Delete a entry node asynchronously.

### Syntax

```cs
public async Task DeleteAsync()
{
}
```

### Return value

> Type: `Task`

### Remarks

On a successful delete, the node data is set to null.

### Example

```cs
// Get a node
var node = client.Nodes.Get("1abf0e7f-7507-4578-a3be-1280ed7486fe");

try
{
    // Delete the node instance.
    await node.DeleteAsync();
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

## NewChild

Creates and returns a new child node with the current node set as the parent.

### Syntax

```cs
public Node NewChild(LocalizedString title)
{
}
```

### Parameters

*title*
> Type: `string`  
> The title of the node

### Return value

> Type: [Node](/model/node.md)

### Remarks

An `InvalidOperationException` is thrown if the current node has not been committed.

### Example

```cs
// Get a node
var node = client.Nodes.Get("1abf0e7f-7507-4578-a3be-1280ed7486fe");

try
{
    // Create a new node instance from an existing parent.
    var childNode = node.NewChild("Batman Returns");

    // Set some additional properties
    childNode.Slug = "batman-returns";
    childNode.EntryId = Guid.Parse("f91e37bd-0cf4-4631-b22a-eb0b78841f23");

    // Commit the newly created child node.
    childNode.Save();
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

## Children

Gets the child nodes for the current node.

### Syntax

```cs
public List<Node> Children()
{
}
```

### Return value

> Type: `List<Node>`


### Example

```cs
// Get a node
var node = client.Nodes.Get("1abf0e7f-7507-4578-a3be-1280ed7486fe");

try
{
    // Get the child nodes for the node.
    var childNodes = node.Children();

    foreach(var child in childNodes)
    {
        // perform actions on the child nodes.
    }
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

## ChildrenAsync

Gets the child nodes for the current node asynchronously.

### Syntax

```cs
public async Task<List<Node>> ChildrenAsync()
{
}
```

### Return value

> Type: `Task<List<Node>>`

### Example

```cs
// Get a node
var node = client.Nodes.Get("1abf0e7f-7507-4578-a3be-1280ed7486fe");

try
{
    // Get the child nodes for the node.
    var childNodes = await node.ChildrenAsync();

    foreach(var child in childNodes)
    {
        // perform actions on the child nodes.
    }
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