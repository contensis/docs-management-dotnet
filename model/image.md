# Image

The Image type represents a link to an image asset with an instance specific caption, if required. 

## Constructors

### Create with `Guid` asset id.

#### Syntax

```cs
public Image(Guid assetId, string caption = null, string language = null)
{
}
```

#### Parameters

*assetId*
> Type: `Guid`  
> The asset identifier

*caption*
> Type: `string`  
> The caption for the image

*language*
> Type: `string`  
> The language variation to link to

---

### Create with `string` asset id.

#### Syntax

```cs
public Image(Guid assetId, string caption = null, string language = null)
{
}
```
#### Parameters

*assetId*
> Type: `Guid`
> The asset identifier

*caption*
> Type: `string`
> The caption for the image

*language*
> Type: `string`
> The specific language variation to link to



## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Caption | string | The image caption, defined in the entry |
| Asset | [Link](/model/link.md) | The asset that is linked to from the entry |

## Examples

### Get an Image field object

```cs
// Get the field value as a Image instance
Image bannerImage = movieEntry.Get<Image>("bannerImage");

// Get the field value as a dynamic (ExpandoObject) instance
dynamic bannerImage = movieEntry.Get("bannerImage");
```

### Set an Image field object

```cs
// Create a new Image instance
Image bannerImage = new Image("b54d1099-a9c5-4848-a16e-d24805fa0825", "Iron man main banner image");

// Set the Image field value
movieEntry.set("bannerImage", bannerImage);
```