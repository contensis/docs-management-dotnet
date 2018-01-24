# Entry methods

## Core

* [Get(string fieldName)](#get)
* [Get&lt;T&gt;(string fieldName)](#get-t)
* [Set(string fieldName, object value)](#set)
* [HasValue(string fieldName)](#hasvalue)
* [Save()](#save)
* [SaveAsync()](#saveasync)
* [Delete()](#delete)
* [DeleteAsync()](#deleteasync)
* [NewVariation(string language)](#newvariation)

## Workflow

* [InvokeWorkflow(Dictionary<string, object> data)](#invokeworkflow-with-dictionary)
* [InvokeWorkflowAsync(Dictionary<string, object> data)](#invokeworkflowasync-with-dictionary)
* [InvokeWorkflow(object data)](#invokeworkflow-with-anonymous-object)
* [InvokeWorkflowAsync(object data)](#invokeworkflowasync-with-anonymous-object)

### Entry basic workflow

* [Publish()](#publish)
* [PublishAsync()](#publishasync)

### Entry approval workflow

* [Submit(string message = null)](#submit)
* [SubmitAsync(string message = null)](#submitasync)
* [Approve()](#approve)
* [ApproveAsync()](#approveasync)
* [Decline(string message = null)](#decline)
* [DeclineAsync(string message = null)](#declineasync)
* [Revoke()](#revoke)
* [RevokeAsync()](#revokeasync)

### Entry

---

## Get

Gets a field from an entry by *fieldName* and returns a dynamic object instance.

### Syntax

```cs
public dynamic Get(string fieldName)
{
}
```

### Parameters

*fieldName*
> Type: string  
> The name of the requested field.

### Remarks

Returns *null* if the field is not found or if the field value is null.

### Example

```cs
// Get the title field as dynamic.
dynamic title = entry.Get("title");
```

---

## Get &lt;T&gt;

Gets a field from an entry by *fieldName* and returns a typed object instance.

### Syntax

```cs
public T Get<T>(string fieldName)
{
}
```

### Parameters

*T*
> The type to attempt to cast the field data to. The type will either be a [DataType](/key-concepts/data-types.md), a supported [DataFormat](/key-concepts/data-format.md) type or a custom type.

*fieldName*
> Type: string  
> The name of the requested field

### Remarks

If the API cannot successfully cast or convert the field value then it will return the default for the specified type. Requesting field values by the wrong type will __not__ result in exceptions being thrown.

### Example

```cs
// Get the title field as defined type
string title = entry.Get<string>("title");
```

---


## Set



### Syntax

```cs
public void Set(string fieldName, object value)
{
}
```

### Parameters

*fieldName*
> Type: string  
> The name of the requested field.

*value*
> Type: object  
> The value for the field.

### Remarks

The type and value for the field will be validated when the entry is saved.

### Examples

```cs
// Set a title string field value
entry.Set("title", "Star Trek - Into Darkness");

// Set a location object field value
entry.Set("filmingLocation", new Location(34.0943145, -118.3316929));

// Set an anonymous component field value
entry.Set("director",
    new
    {
        Role = "Director",
        Person = new Link("80c8e272-076e-41e0-84f4-753fc092a120")
    }
);
```

---




## HasValue

Determines whether the field exists and the value is not null.

### Syntax

```cs
public bool HasValue(string fieldName)
{
}
```

### Parameters

*fieldName*
> Type: string  
> The name of the field to check

### Return value

> Type: boolean  
> __true__ if the field exists and is not null, otherwise __false__


### Remarks

If the *fieldName* is not defined in the content type that the entry is based on then it will return false.

### Example

```cs
if (entry.HasValue("title"))
{
    // Get the location field as type
    Location title = entry.Get<Location>("filmingLocation");
}
```

---

## Save

Saves an entry instance.

### Syntax

```cs
public void Save()
{
}
```

### Return value

> Type: void

### Remarks

On a successful save, the entry instance is updated with the new version details controlled from the service. An exception will be thrown if there is any issue with the save, which could be either a data validation issue, an unexpected issue in the service or a local exception.

### Example

```cs
// Make a change to an entry.
entry.Set("title", "Forrest Gump");

try
{
    // Save the changes.
    entry.Save();
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

Saves an entry instance asynchronously.

### Syntax

```cs
public async Task SaveAsync()
{
}
```

### Return value

> Type: Task

### Remarks

On a successful save, the entry instance is updated with the new version details controlled from the service. An exception will be thrown if there is any issue with the save, which could be either a data validation issue, an unexpected issue in the service or a local exception.

### Example

```cs
// Make a change to an entry
entry.Set("title", "Forrest Gump");

try
{
    // Save the changes asynchronously.
    entry.SaveAsnyc();
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

Delete an entry instance.

### Syntax

```cs
public void Delete()
{
}
```

### Return value

> Type: void

### Remarks

On a successful delete, the entry data is set to null.

### Example

```cs
{
    // Delete the entry variation.
    entry.Delete();
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

Delete an entry instance asynchronously.

### Syntax

```cs
public async Task DeleteAsync()
{
}
```

### Return value

> Type: Task

### Remarks

On a successful delete, the entry data is set to null.

### Example

```cs
{
    // Delete the entry variation.
    await entry.DeleteAsync();
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

## NewVariation

Creates a new variation of the entry for the specified language.

### Syntax

```cs
public Entry NewVariation(string language)
{
}
```

### Parameters

*language*
> Type: string  
> The variation language to create

### Return value

> Type: [Entry](/model/entry.md)  
> The newly created (unsaved) entry language variation

### Remarks

On a successful delete, the entry data is set to null.

### Example

```cs
// Create a new french variation
var frenchVariation = entry.NewVariation("fr-FR");

// Set some data for the variation
frenchVariation.Set("title", "Belle de Jour");

// Save the new variation
frenchVariation.Save();
```

---

## InvokeWorkflow with Dictionary

Invokes a named workflow event with an optional `Dictionary<string, object>` data parameter.

### Syntax

```cs
public void InvokeWorkflow(string event, Dictionary<string, object> data)
{
}
```

### Parameters

*event*
> Type: string  
> The id of the workflow event to invoked, e.g. submit

*data*
> Type: Dictionary&lt;string, object&gt;
> A dictionary of named data items to include as part of the event invocation

### Return value

> Type: void

### Remarks

The values in the data can only be simple types, i.e. string, int, decimal, datetime, bool. If a complex object type is passed then an `ArgumentException` will be thrown.

### Example

```cs
// Submit the entry for approval.
entry.InvokeWorkflow("submit", new Dictionary<string, object>
{
    { "message", "Added additional photos to the intro" }
});
```

---

## InvokeWorkflowAsync with Dictionary

Invokes a named workflow event asynchronously with an optional `Dictionary<string, object>` data parameter.

### Syntax

```cs
public async Task InvokeWorkflowAsync(string message)
{
}
```

### Parameters

*event*
> Type: string  
> The id of the workflow event to invoked, e.g. submit

*data*
> Type: Dictionary&lt;string, object&gt;
> A dictionary of named data items to include as part of the event invocation

### Return value

> Type: Task

### Remarks

The values in the data can only be simple types, i.e. string, int, decimal, datetime, bool. If a complex object type is passed then an `ArgumentException` will be thrown.

### Example

```cs
// Submit the entry for approval.
await entry.InvokeWorkflowAsync("submit", 
    new Dictionary<string, object>
    {
        { "message", "Added additional photos to the intro" }
    }
);
```

---

## InvokeWorkflow with anonymous object

Invokes a named workflow event with an optional anonymous object data parameter.

### Syntax

```cs
public void InvokeWorkflow(string event, object data)
{
}
```

### Parameters

*event*
> Type: string  
> The id of the workflow event to invoked, e.g. submit

*data*
> Type: object
> An anonynous object to include as part of the event invocation

### Return value

> Type: void

### Remarks

The values in the data can only be simple types, i.e. string, int, decimal, datetime, bool. If a complex object type is passed then an `ArgumentException` will be thrown.

### Example

```cs
// Submit the entry for approval.
entry.InvokeWorkflow("submit", 
    new 
    {
        Message = "Added additional photos to the intro"
    };
);
```

---

## InvokeWorkflowAsync with anonymous object

Invokes a named workflow event asynchronously with an optional anonymous object data parameter.

### Syntax

```cs
public async Task InvokeWorkflowAsync(string message)
{
}
```

### Parameters

*event*
> Type: string  
> The id of the workflow event to invoked, e.g. submit

*data*
> Type: Dictionary&lt;string, object&gt;
> An object to include as part of the event invocation

### Return value

> Type: Task

### Remarks

The values in the data can only be simple types, i.e. string, int, decimal, datetime, bool. If a complex object type is passed then an `ArgumentException` will be thrown.

### Example

```cs
// Submit the entry for approval.
await entry.InvokeWorkflowAsync("submit", 
    new 
    {
        Message = "Added additional photos to the intro"
    };
);
```

---

## Publish

Publishes an entry instance for entries in the Contensis basic workflow.

### Syntax

```cs
public void Publish()
{
}
```

### Return value

> Type: void

### Remarks

On a successful publish, the entry instance is updated with the new version details controlled from the service. A WorkflowException will be thrown if there is any issue with the publish workflow state change. Other exception types could be thrown if there are any data validation issues, unexpected issue in the service or a local exception.

### Example

```cs
// Publish the version of the entry.
entry.Publish();
```

---

## PublishAsync

Publishes an entry instance asynchronously for entries in the Contensis basic workflow.

### Syntax

```cs
public async Task PublishAsync()
{
}
```

### Return value

> Type: Task

### Remarks

On a successful publish, the entry instance is updated with the new version details controlled from the service. A WorkflowException will be thrown if there is any issue with the publish workflow state change. Other exception types could be thrown if there are any data validation issues, unexpected issue in the service or a local exception.

### Example

```cs
// Publish the version of the entry.
await entry.PublishAsync();
```

---

## Submit

Submits an entry instance to the awaiting approval state for entries in the Contensis approval workflow.

### Syntax

```cs
public void Submit(string message = null)
{
}
```

### Parameters

*message*
> Type: string  
> An optional message that can be included with the entry submission

### Return value

> Type: void


### Example

```cs
// Submit the entry for approval.
entry.Submit("I've updated the 2nd paragraph to make it clearer");
```

---

## SubmitAsync

Submits an entry instance to the awaiting approval state asynchronously for entries in the Contensis approval workflow.

### Syntax

```cs
public async Task SubmitAsync(string message)
{
}
```

### Parameters

*message*
> Type: string  
> An optional message that can be included with the entry submission

### Return value

> Type: Task

### Example

```cs
// Submit the entry for approval asynchronously.
await entry.SubmitAsync("I've updated the 2nd paragraph to make it clearer");
```

---

## Approve

Approves an entry for publishing for entries in the Contensis approval workflow.

### Syntax

```cs
public void Approve()
{
}
```

### Return value

> Type: void


### Example

```cs
// Approve the entry for publishing.
entry.Approve();
```

---

## ApproveAsync

Approves an entry for publishing asynchronously for entries in the Contensis approval workflow.

### Syntax

```cs
public async Task ApproveAsync()
{
}
```

### Return value

> Type: Task

### Example

```cs
// Approve the entry instance asynchronously.
await entry.ApproveAsync();
```

---

## Decline

Declines an entry submission for entries in the Contensis approval workflow.

### Syntax

```cs
public void Decline(string message = null)
{
}
```

### Parameters

*message*
> Type: string  
> An optional message that can be included to detail the decline reason

### Return value

> Type: void


### Example

```cs
// Decline the entry submission
entry.Decline("There are multiple spelling mistakes in the opening paragraph");
```

---

## DeclineAsync

Declines an entry submission for entries in the Contensis approval workflow.

### Syntax

```cs
public async Task DeclineAsync(string message)
{
}
```

### Parameters

*message*
> Type: string  
> An optional message that can be included to detail the decline reason

### Return value

> Type: Task

### Example

```cs
// Decline the entry submission asynchronously.
await entry.DeclineAsync("I've updated the 2nd paragraph to make it clearer");
```

---

## Revoke

Revokes an entry submission for entries in the Contensis approval workflow.

### Syntax

```cs
public void Revoke()
{
}
```

### Return value

> Type: void


### Example

```cs
// Revoke the entry submission
entry.Revoke();
```

---

## RevokeAsync

Revokes an entry submission for entries asynchronously in the Contensis approval workflow.

### Syntax

```cs
public async Task RevokeAsync()
{
}
```

### Return value

> Type: Task

### Example

```cs
// Revoke the entry submission asynchronously.
await entry.RevokeAsync();
```
