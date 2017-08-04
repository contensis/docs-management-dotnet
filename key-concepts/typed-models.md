# Typed models

Typed models in the .NET Delivery API is the concept of handling entry data as strongly-typed objects instead of using general-purpose entry instances. When invoking any of the Get, List or Search operations, a Generic type parameter can be specified to stipulate the type you want the data to be returned as.

The following shows some of the entry method signatures.

```cs
// Get a entry model by id.
T Get<T>(string id);

// List entry models for a given content type.
PagedList<T> List<T>(string contentTypeId);

// Search entry models
PagedList<T> Search<T>(Query query)
```

Using typed models has the following key benefits.

- The API becomes specific to your domain.
- IntelliSense for fields are available when developing within Visual Studio.
- Errors from badly specified fields are caught during development, preventing many issues that may only show during runtime.
- Simplifies development, once the model is defined then the content type no longer needs to be referred to.
- Models can be extended with functions and calculated properties. This logic can be centralized which would otherwise be spread across Razor views.
- Models can be reshaped to fit the needs of the application.

The defined model type needs to have properties that match the api ids of the fields defined in the content type for the entry. Only a subset of the fields need to be added and the name of the property does not have to be the same casing as the field id.

## Defining models

There are essentially three locations models can be defined for Contensis websites.

- **Directly within a Razor view** - this is the simplest approach, but does not allow models to be shared across multiple views
- **App_Code** - C# or VB.NET class files can be added to a folder called App_Code in the root of a Contensis project. [Details of App_Code folders can be found here](https://msdn.microsoft.com/en-us/library/t990ks23.aspx#Anchor_1).
- **Custom dll** - model classes can be created within a .NET assembly and then referenced within the project configuration. This allows models to be shared across projects and even Contensis instances.



## Basic example

This Movie class shows a simple model and will be used throughout the examples.

```cs
namespace MovieDb.Models
{
    public class Movie
    {
        // Defined as title in the Content type.
        public string Title { get; set; }

        // Defined as overview in the Content type.
        public string Overview { get; set; }

        // Defined as releaseDate in the Content type.
        public DateTime ReleaseDate { get; set; }
    }
}
```

```cs
using Zengenti.Contensis.Delivery;
using MovieDb.Models; // Import the models

// Create a client to allow access to the content
var client = ContensisClient.Create();

// Get the entry as a Movie type
var movie = client.Entries.Get<Movie>("c1f27b57-c750-4feb-bd12-004ee651e796");

// Access the fields for the entry as typed properties
var title = movie.Title;
var overview = movie.Overview;
var releaseDate = movie.ReleaseDate;
```



## Linked entries and assets

Most content models are composed of content types with relationships to other content types. With Typed Models this can be achieved easily by adding properties on the model class that return a type that represents the linked entry.

## Example
A Movie has a director and actors. This can be achieved by creating a Person model class and using it as the return typed for properties on the Movie model class.

```cs
namespace MovieDb.Models
{
    public class Person
    {
        public string Name { get; set; }

        public string DateOfBirth { get; set; }
    }

    public class Movie
    {
        public string Title { get; set; }

        public string Overview { get; set; }

        public DateTime ReleaseDate { get; set; }

        // Return the director as a Person instance.
        public Person Director { get; set; }

        // Return the actors as a list of Person instances.
        public List<Person> { get; set; }
    }
}
```

```cs
using Zengenti.Contensis.Delivery;
using MovieDb.Models; // Import the models

// Create a client to allow access to the content.
var client = ContensisClient.Create();

// Get the entry as a Movie type. A link depth needs to be specified to resolve the linked entries.
var movie = client.Entries.Get<Movie>("c1f27b57-c750-4feb-bd12-004ee651e796", language = null, linkDepth = 1);

// Get the directors name.
var directorName = movie.Director.Name;

// Get the actors count.
var actors = movie.Actors.Count;
```


> **Note**  
> When getting the entry using a plain class model, a linkDepth value is needed so that the linked entry data is resolved before being returned and will ensure the Director and Actor properties are fully populated. For lazy resolved linked entries and assets a model needs to inherit from the `EntryModel` base class.




## EntryModel base class

Inheriting a model class from EntryModel gives access to the methods that will auto-resolve typed linked entries, for both individual entries or lists. This prevents the need to have to pass a *linkDepth* parameter to the Get, List or Search methods to resolve the linked entry data.

The EntryModel base class has a Sys property pre-defined which contains all the entry system data, such as Id, ProjectId, ContentTypeId, etc.

Inheriting from EntryModel is simple and doesn't require any constructor arguments to be passed down.

```cs
public class Movie: EntryModel
{
}
```

### Resolving a single link

Resolving a single link to a entry or asset is done using the `Resolve<T>(string name)` method.

```cs
public class Movie: EntryModel
{
    // Other properties
    ...

    //
    public Person Director => Resolve<Person>("director");
}
```

### Resolving a list of links

Resolving a list of links to entries or assets is done using the `ResolveList<T>(string name)` method.

```cs
public class Movie: EntryModel
{
    // Other properties
    ...

    // Return a list of the typed model
    public List<Person> Actors => ResolveList<Person>("actors");
}
```

### Resolving an Image

An Image has an Asset property that can be resolved in the same way as a Entry link. Resolving an Image is done by specifying Image as the generic parameter in the `Resolve<T>` method.

```cs
public class Movie: EntryModel
{
    // Other properties
    ...

    //
    public Image CoverImage => Resolve<Image>("coverImage");
}
```

### Resolving a list of Images

Resolving a list of Image uses the same approach as resolving lists of entries.

```cs
public class Movie: EntryModel
{
    // Other properties
    ...

    //
    public List<Image> FeatureImages => Resolve<Image>("featureImages");
}
```


### Entries can still be returned

Entries can still be used within typed models and can be useful when referencing assets. Using the resolve methods ensures that auto-resolving occurs when accessing the linked entry.

```cs
public class Movie: EntryModel
{
    // Other properties
    ...

    // Return the producer as the built-in entry type
    public Entry Producer => Resolve<Entry>("producer");
}
```

### Sys object

The Sys property on the EntryModel contains the entry system properties such as Id, ContentTypeId, ProjectId, Version information, etc.

```cs
// Get an entry model
var movie = client.Entries.Get<Movie>("c1f27b57-c750-4feb-bd12-004ee651e796");

// Get the entry id
var entryId = movie.Sys.Id;

// Get the entry language
var language = movie.Sys.Language;

// Get the version no.
var versionNo = movie.Sys.Version.VersionNo;
```
