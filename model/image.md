# Images

The Image type represents a link to an image with an associated caption, if required.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Caption | string | The image caption, defined in the entry |
| Asset | [Asset](/model/asset.md) | The asset that is linked to from the entry |

## Remarks

The caption property allows instance specific text to be associated with an image.

Unlike entry links, an asset link is always resolved so that the full asset details are included when retrieved.

## Example

### Get an Image field object

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Create an API client
    var client = ContensisClient.Create();
    
    // Retrieve a movie by it's ID.
    var movie = client.Entries.Get("0aabad4e-a083-4a88-bd75-b2674e2f8298");

    // Get the field value as an Image instance.
    var coverImage = movie.Get<Image>("posterImage");
}

<figure>
  <img src="@coverImage.Asset.Uri" alt="@coverImage.Asset.Get("altText")" width="304" height="228">
  <figcaption>@coverImage.Caption</figcaption>
</figure>

```
