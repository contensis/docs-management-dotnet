---
description: The Image type represents a link to an image asset with an instance specific caption and alt text, if required.
---
# Image

The Image type represents a link to an image asset with an instance specific caption and alt text, if required.

## Constructors

### Create with `Guid` asset id

#### Syntax

```cs
public Image(Guid assetId, string caption = null, string language = null, string altText = null, ImageTransformations transformations = null)
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

*AltText*
> Type: `string`  
> The alt text for the image

*Transformations*
> Type: `ImageTransformations`  
> The transformations to be applied to the image.

---

### Create with `string` asset id

#### Syntax

```cs
public Image(Guid assetId, string caption = null, string language = null, string altText = null, ImageTransformations transformations = null)
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

*AltText*
> Type: `string`  
> The alt text for the image

*Transformations*
> Type: `ImageTransformations`  
> The transformations to be applied to the image

## Properties

| Name    | Type                   | Description                                |
|:--------|:-----------------------|:-------------------------------------------|
| AltText | string                 | The image alt text, defined in the entry   |
| Caption | string                 | The image caption, defined in the entry    |
| Asset   | [Link](/model/link.md) | The asset that is linked to from the entry |
| Transformations  | [ImageTransformations](/model/image-transformations.md) | The image transformations that will be applied in the Delivery API. |

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
Image bannerImage = new Image("b54d1099-a9c5-4848-a16e-d24805fa0825", "Iron man main banner image", "Iron Man banner");

// Set the Image field value
movieEntry.set("bannerImage", bannerImage);
```

### Set transformations on an Image

```cs
// Set the transformation properties, all of which are optional.
ImageTransformations transformations = new ImageTransformations
{
    Crop = new ImageCrop
    {
        Height = 1080,
        Width = 1920,
        X = 400,
        Y = 900
    },
    Quality = 100,
    Rotate = 90,
    Size = new ImageSize
    {
        Height = 1080,
        Width = 1920
    },
    Flip = ImageFlip.Vertical
};

// Create a new Image instance
Image bannerImage = new Image("b54d1099-a9c5-4848-a16e-d24805fa0825", "Iron man main banner image", "Iron Man banner", transformations);

// Set the Image field value
movieEntry.set("bannerImage", bannerImage);
```
