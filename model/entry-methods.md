# Entry methods

* [Get(string fieldName)](#get)
* [Get&lt;T&gt;(string fieldName)](#get-t)
* [Set(string fieldName, object value)](#set)
* [SetFile(string localFilePath, string filename = null)](#setfile-local-file)
* [SetFile(Stream fileStream, string filename = null)](#setfile-stream)
* [SetFile(byte[] bytes, string filename = null)](#setfile-byte-array)
* [HasValue(string fieldName)](#hasvalue)
* [Save()](#save)
* [SaveAsync()](#saveasync)
* [Delete()](#delete)
* [DeleteAsync()](#deleteasync)
* [NewVariation(string language)](#newvariation)
* [Clone](#clone)
* [CloneAsync](#cloneasync)

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

Sets data for a specified field.

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

 ## SetFile (local file)

Sets the file data for an asset instance by specifying a local file path.

### Syntax

```cs
public void SetFile(string localFilePath, string filename = null)
{
}
```

### Parameters

*localFilePath*
> Type: `string`  
> The absolute path to the file.

*filename*
> Type: `string`  
> An optional parameter that allows the filename of the asset to be specified, overriding the name of the local file.

### Remarks

Throws an *FileNotFoundException* if the specified local file does not exist.

### Examples

```cs
// Set new file for the asset with a filename override
entry.SetFile("c:\images\movies\batman.jpg", "Batman-returns.jpg");

```

---

## SetFile (Stream)

Sets the file data for an asset instance by specifying a Stream.

### Syntax

```cs
public void SetFile(Stream fileStream, string filename = null)
{
}
```

### Parameters

*fileStream*
> Type: `Stream`  
> The stream containing the file bytes.

*filename*
> Type: `string`  
> The filename of the asset including the file extension.

### Remarks

Throws an *ArgumentException* if the stream is null or empty.

Throws an *ArgumentException* if the parentNodePath is not specified.

Throws an *ArgumentException* if the filename is null, empty or does not include a file extension.

### Examples

```cs
// Get a file stream by downloading an image from a URL
var stream = new HttpClient()
    .GetStreamAsync("https://en.wikipedia.org/wiki/Batman_Returns#/media/File:Batman_returns_poster2.jpg");

// Set new file for the asset with a filename override
entry.SetFile(stream, "Batman-returns.jpg");

```

---

## SetFile (byte array)

Sets the file data for an asset instance by specifying a byte array.

### Syntax

```cs
public void SetFile(byte[] bytes, string filename = null)
{
}
```

### Parameters

*bytes*
> Type: `byte[]`  
> The file bytes.

*filename*
> Type: `string`  
> The filename of the asset including the file extension.

### Remarks

Throws an *ArgumentException* if the stream is null or empty.

Throws an *ArgumentException* if the parentNodePath is not specified.

Throws an *ArgumentException* if the filename is null, empty or does not include a file extension.

### Examples

```cs
// Get a file stream by downloading an image from a URL
var stream = new HttpClient()
    .GetStreamAsync("https://en.wikipedia.org/wiki/Batman_Returns#/media/File:Batman_returns_poster2.jpg");

// Set new file for the asset with a filename override
entry.SetFile(stream, "Batman-returns.jpg");

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

## Clone

Clones an entry with all it's variations and returns the variation language matching the entry variation it was cloned from.

### Syntax

```cs
public Entry Clone()
{
}
```

### Return value

> Type: [Entry](/model/entry.md)  
> The newly cloned entry with the language matching the entry variation that was cloned

### Example

```cs
// Clones an existing entry variation.
var clonedEntry = existingEntry.Clone();
```

---

## CloneAsync

Clones an entry with all it's variations asynchronously and returns the variation language matching the entry variation it was cloned from.

### Syntax

```cs
public Task<Entry> CloneAsync()
{
}
```

### Return value

> Type: [Entry](/model/entry.md)  
> The newly cloned entry with the language matching the entry variation that was cloned

### Example

```cs
// Clones an existing entry variation asynchronously.
var clonedEntry = await existingEntry.CloneAsync();
```

---