---
description: The ComposedField type contains the data that the Composer editor defines. 
---
# ComposedField

The `ComposedField` type contains the data that the [Composer editor](https://zenhub.zengenti.com/Contensis/10.0/kb/content-types-and-entries/field-editors/Composer.aspx) defines. It contains a list of [ComposedFieldItem](/model/composedfielditem.md) instances, which expose *Type* and *Value* properties. The *Value* property allows data for the field to be retrieved or set. The *Type* property is a name given to an *allowed field type validation* defined in the content type that the entry is based on.

An *allowed field type* is essentially any standard field (such as Image, Heading, Location, etc.) that restricts what types of field can be added to a `ComposedField`.

For example, an *allowed field* could be defined with a type of *Heading* and given a type name of "mainHeading" or with a type of [Image](/model/image.md) and given a type name of "bannerImage". There can be multiple *allowed fields* based on the same type, but a `ComposedField` cannot contain other `ComposedField` fields.

## Adding field items

### Add overload

The ComposedField type inherits from `List<ComposedFieldItem>` with an additional *Add* method.

```cs
public void Add(string type, object value)
{
}
```

#### Remarks

The item added using this method will be appended to the end of the list.

#### Example

```cs
// Get the ComposedField instance
ComposedField composed = movieEntry.Get<ComposedField>("synopsis");

// Add a heading
composed.Add("heading", "A long time ago in a galaxy far, far away...");

// Add a location
composed.Add("hq", new Location(52.415936, -2.6417701));
```

## List methods

### Examples

```cs
// Get the ComposedField instance
ComposedField composed = movieEntry.Get<ComposedField>("synopsis");

// Add a item to the end of the field
composed.Add(new ComposedFieldItem("paragraph", "<p>The story starts with...</p>"));

// Insert an item at a specific index
composed.Add(4, new ComposedFieldItem("featureQuote", new Quote("I find your lack of faith disturbing.", "Darth Vader")));

// Remove an item at a specific index
composed.RemoveAt(3);
```
