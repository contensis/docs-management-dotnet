---
description: Components are structures that are defined in the component editor as custom types.
---

# Components

Components are structures that are defined in the component editor as custom types. They can be added as field types to content types as entry-level fields or as [ComposedField](/model/composedfield.md) items. Components themselves can contain any field types except other components or [ComposedField](/model/composedfield.md) types.

## Getting component data

Accessing component data from either an entry-level field or from a ComposedFieldItem instance can be done by either providing a user-defined type as a generic type parameter to specify the return type, or alternatively using the non-generic method to return a `dynamic` object instance.

Consider the following user-defined type that matches a component. The class has to have an empty public constructor (default in this example) and the property names need to match (case-insensitive) the field ids defined in the component.

```cs
public class MovieRole
{
    public string RoleName { get; set; }

    public string Description { get; set; }

    public Link Person { get; set; }
}
```

Accessing the component from an entry is done in the same way any other field data is accessed.

```cs
// Access the director field data using the generic type
MovieRole directorRole = movieEntry.Get<MovieRole>("director");

// The Person entry link can be accessed
Link director = directorRole.Person;
```

```cs
// Alternatively return a dynamic object
dynamic directorRole = movieEntry.Get("director");

// The Person entry link can be accessed
Link director = directorRole.Person;
```

The same applies when accessing a list of components:

```cs
// Access the actors field data using the generic type
List<MovieRole> actorRoles = movieEntry.Get<List<MovieRole>>("actors");

foreach(MovieRole role in actorRoles)
{
    // The Person entry id can be accessed and updated
    int actorId = role.Person.Id;
    ...
}
```

## Setting component data

Setting field data for a Component is as simple as setting any other field data. You can either create an instance of a user-defined type, such as the MovieRole example, set an anonymous object or use `Dictionary<string, object>` instance.


### User-defined type model

```cs
Movie directorRole = new MovieRole
{
    RoleName = "Director",
    Description = "Debut directing position for this Marvel block buster",
    Person = new Link("566779e5-3b3d-439f-aa45-957ae21f17ed")
};

movieEntry.Set("director", directorRole);

// Commit the changes
movieEntry.Save();
```

### Anonymous type

```cs
var directorRole = new
{
    RoleName = "Director",
    Description = "Debut directing position for this Marvel block buster",
    Person = new Link("566779e5-3b3d-439f-aa45-957ae21f17ed")
};

movieEntry.Set("director", directorRole);

// Commit the changes
movieEntry.Save();
```

> **Note**  
> Updated Component data needs to be set back as the field value using the **Set()** method.
