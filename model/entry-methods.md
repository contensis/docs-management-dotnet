# Entry methods

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
> The name of the requested field

### Remarks

Returns *null* if the field is not found or if the field value is null.

### Example

```cs
// Get the title field as dynamic
dynamic title = entry.Get("title")
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
string title = entry.Get<string>("title")
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

If the *fieldName* is not defined in the content type that the entry is based on then it will return null.

### Example

```cs
if (entry.HasValue("title"))
{
    // Get the location field as type
    Location title = entry.Get<Location>("filmingLocation")
}
```

---

## Save

Saves.

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
// Make a change to an entry
entry.Set("title", "Forrest Gump");

try
{
    // Save the changes
    entry.Save();
}
catch(RestRequestException restEx)
{
    // Handle service error
}
catch(ValidationException valEx)
{
    // Handle data validation errors
}
catch(Exception ex)
{
    // Handle anything else, e.g. network error
}
```