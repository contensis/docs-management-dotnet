---
description: The Quote type represents a section of referenced text from an external source.
---
# Quote

The Quote type represents a section of referenced text from an external source.

## Constructor

### Syntax

```cs
public Quote(string text, string source)
{
}
```

### Parameters

*text*
> Type: `string`
> The quote text.

*source*
> Type: `string`
> The source of the quote.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Text | string | The quote text. |
| Source | string | The source of the quote. |

## Examples

### Get a Quote object

```cs
// Get the field value as a Quote instance.
Quote movieQuote = movieEntry.Get<Quote>("memorableQuote");

// Get the field value as a dynamic (ExpandoObject) instance.
dynamic movieQuote = movieEntry.Get("memorableQuote");
```

### Set a Quote object

```cs
// Create a Quote object.
var memorableQuote = new Quote("There’s a snake in my boots.", "Woody, Toy Story");

// Set the field value.
dynamic movieQuote = movieEntry.Set("memorableQuote", memorableQuote);
```
