# Linked content

An entry can link to other entries or assets as [entry](/model/entry.md), [asset](/model/asset.md) or [image](/model/image.md) field types. They can be defined as a standard entry field or as a [composed](/model/composed.md) field type in the content type. These links can be singular or multiples of the same content type e.g. Actor, Image, etc.

Linked content can be [unresolved](#unresolved-entries) or [resolved](#resolved-entries) depending on whether a linkDepth value has been provided when retrieving entries using the [Get](/key-concepts/entry-get.md), [List](/key-concepts/entries-list.md) or [Search](/search/entry-search.md) methods. The .NET Delivery API will auto-resolve entry links if the entry is unresolved when the link object field is accessed, making the use of the API simpler.

## Unresolved entries

An unresolved entry or asset is essentially a subset of the entry structure with enough information to get the correct entry language variation. A subsequent service call is required to obtain the linked content. Unresolved entries and assets is the default behaviour for linked content.

## Resolved entries

Entries can be resolved automatically in the service to a maximum depth of 10 using the linkDepth parameter in any retrieval operation. Resolving entries in a single call can significantly improve the render performance of your webpage or application. Whilst fewer network requests can be beneficial, it can also be detrimental if the linkDepth is too deep, or if there are many linked fields.

### Resolution rules

When a linked entry is accessed then the following rules apply:

- If a language **has** been specified in the link, then the specific language variation will be returned.
- If a language **has** been specified in the link, but the specific language variation does not exist, then null will be returned or will not be included in the array.
- If a language **has not** been specified, then the *defaultLanguage* value defined in the [content type](/model/content-type.md) will be used to select the appropriate entry variation to return.
- If a language **has not** been specified and there is no default variation, then null will be returned.


### Examples

The following examples demonstrate how entries can be accessed. Accessing the entries will auto-resolve them if they are unresolved.

##### Get a single linked entry or asset

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Create a client
    var client = ContensisClient.Create();

    // Get a specific entry that has linked content
    var movie = client.Entries.Get("654fb097-8104-411c-8c6a-5e9050cc49c2");

    // Get the director entry associated with the movie
    var director = movie.Get<Entry>("director");

    // Alternatively get the entry as a dynamic object
    var dynamicDirector = movie.Get("director");
}
```

##### Get a list of linked entries or assets

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Create a client
    var client = ContensisClient.Create();

    // Get a specific entry that has linked content
    var movie = client.Entries.Get("654fb097-8104-411c-8c6a-5e9050cc49c2");

    // Get the actors associated with the movies
    var actors = movie.Get<Entry[]>("actors");

    // Alternatively the entries can be returned as a list...
    var actorList = movie.Get<List<Entry>>("actors");

    // ... or as a dynamic object
    var dynamicActors = movies.Get("actors");
}
```
