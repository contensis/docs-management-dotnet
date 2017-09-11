# Quote

The Quote type represents a section of referenced text from an external source.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Text | string | The quote text |
| Source | string | The source of the quote |

## Examples

##### Get a Source field object

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Create an API client
    var client = ContensisClient.Create();

    // Retrieve a movie by it's ID.
    var movie = client.Entries.Get("3bb72e32-1fc7-4289-bf65-60a5b8ce1f78");

    // Get the field value as a DateRange instance.
    var filmQuote = movie.Get<Quote>("memorableQuote");
}

<blockquote cite="@filmQuote.Source">
    @filmQuote.Text
</blockquote>
```

