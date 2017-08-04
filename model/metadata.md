# Metadata

The Metadata type is a object container for metadata that is associated with an [Entry](/model/entry.md). The values contained can be any type which can be accessed as either a dynamic object or cast to a specific type.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Keys | ICollection&lt;string&gt; | A collection of the keys available |

## Methods

### Get

Gets a value by the specified key and returns a dynamic object instance. 

#### Syntax

```cs
public dynamic Get(string key)
{
}
```

#### Parameters

*key*
> Type: string  
> The key for the data item

#### Remarks

Returns *null* if the key does not exist or if the value is null.

#### Example

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Create a client
    var client = ContensisClient.Create();

    // Retrieve an entry
    var movie = client.Entries.Get("1d1d3724-3f53-4589-8ea3-b16a1f3921f5");

    // Check that a metadata item exists and access it
    if (movie.Metadata.Keys.Contains("originalId"))
    {
        var originalId = movie.Metadata.Get("originalId");

        // Use the value
    }
}
```



### Get&lt;T&gt;

Gets a value by the specified key and returns the object instance as T. 

#### Syntax

```cs
public T Get<T>(string key)
{
}
```

#### Parameters

*T*
> The type to attempt to cast the field data to.

*key*
> Type: string  
> The key for the data item

#### Remarks

Returns *null* if the key does not exist or if the value is null.

#### Example

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Create a client
    var client = ContensisClient.Create();

    // Retrieve an entry
    var movie = client.Entries.Get("1d1d3724-3f53-4589-8ea3-b16a1f3921f5");

    // Check that a metadata item exists and access it
    if (movie.Metadata.Keys.Contains("originalId"))
    {
        var originalId = movie.Metadata.Get<string>("originalId");

        // Use the value
    }
}
```