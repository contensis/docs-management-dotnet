# Node methods

* [Save()](#save)
* [SaveAsync()](#saveasync)
* [Delete()](#delete)
* [DeleteAsync()](#deleteasync)
* [NewChild(LocalizedString title)](#newchild-with-title)
* [NewChild(LocalizedString title, LocalizedString slug)](#newchild-with-title-and-slug)
* [NewChild(LocalizedString title, LocalizedString slug, Guid entryId)](#newchild-with-title-slug-and-guid-entryId)
* [NewChild(LocalizedString title, LocalizedString slug, string entryId)](#newchild-with-title-slug-and-string-entryId)

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

## NewChild with title

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
{
    // Create a new node instance from an existing parent.
    var childNode = node.NewChild("Batman Returns");

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

## NewChild with title and slug

Creates and returns a new child node with the current node set as the parent.

### Syntax

```cs
public Node NewChild(LocalizedString title, LocalizedString slug)
{
}
```

### Parameters

*title*
> Type: `string`  
> The title of the node

*slug*
> Type: `string`  
> The slug of the node

### Return value

> Type: [Node](/model/node.md)

### Remarks

An `InvalidOperationException` is thrown if the current node has not been committed.

### Example

```cs
{
    // Create a new node instance from an existing parent.
    var childNode = node.NewChild("Batman Returns", "batman-returns");

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

## NewChild with title, slug and Guid entryId

Creates and returns a new child node with the current node set as the parent.

### Syntax

```cs
public Node NewChild(LocalizedString title, LocalizedString slug)
{
}
```

### Parameters

*title*
> Type: `string`  
> The title of the node

*slug*
> Type: `string`  
> The slug of the node

*entryId*
> Type: `Guid`  
> The identifier of the entry to assign to the node

### Return value

> Type: [Node](/model/node.md)

### Remarks

An `InvalidOperationException` is thrown if the current node has not been committed.

### Example

```cs
{
    // Mimic entry guid.
    var entryId = Guid.Parse("9e0b1aec-2224-43e8-8a9d-9868a2b990e8");

    // Create a new node instance from an existing parent.
    var childNode = node.NewChild("Batman Returns", "batman-returns", entryId);

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

## NewChild with title, slug and string entryId

Creates and returns a new child node with the current node set as the parent.

### Syntax

```cs
public Node NewChild(LocalizedString title, LocalizedString slug)
{
}
```

### Parameters

*title*
> Type: `string`  
> The title of the node

*slug*
> Type: `string`  
> The slug of the node

*entryId*
> Type: `string`  
> The identifier of the entry to assign to the node

### Return value

> Type: [Node](/model/node.md)

### Remarks

An `InvalidOperationException` is thrown if the current node has not been committed.

### Example

```cs
{
    // Create a new node instance from an existing parent.
    var childNode = node.NewChild("Batman Returns", "batman-returns", "9e0b1aec-2224-43e8-8a9d-9868a2b990e8");

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