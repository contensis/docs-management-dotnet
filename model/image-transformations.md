---
description: The ImageTransformations class represents transformations that will be applied to images in the Delivery API and within the Image Editor in the Contensis Entry UI. 
---
# Image Transformations

The ImageTransformations class represents transformations that will be applied to images in the Delivery API and within the Image Editor in the Contensis Entry UI.
All properties within the ImageTransformation type are optional.

## Members

| Name | Type | Description |
| :--- | :--- | :---------- |
| Crop | `ImageCropTransformation` | The crop properties including Height, Width, X and Y. |
| Quality | `int?` | The image quality in percentage. |
| Rotate | `int?` | The image rotation in degrees. |
| Size | `ImageSizeTransformation` | The image resize properties including Height and Width. |
| Flip | `string` | The image flip orientation. |

### Setting the Image Transformations

```cs
ImageTransformations transformations = new ImageTransformations
{
    Crop = new ImageCropTransformation
    {
        Height = 1080,
        Width = 1920,
        X = 400,
        Y = 900
    },
    Quality = 100,
    Rotate = 90,
    Size = new ImageSizeTransformation
    {
        Height = 1080,
        Width = 1920
    },
    Flip = "v"
};
```