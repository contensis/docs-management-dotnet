# Assets

Assets are effectively an extension of entries, with additional properties containing details about the file they represent. An asset is an entry with a dataFormat value equal to 'asset', which allows them to be identified and queried independently to entries.

## Standard fields

All assets have the following standard entry fields:

| Name | Type | Description |
| :--- | :--- | :---------- |
| Title | string | The title of the asset |
| Description | string | The description for the asset |
| Properties | [PropertiesDictionary](#PropertiesDictionary) | A readonly collection of asset specific fields |

### Image
In addition to the standard data fields, images have the following.

| Name | Description |
| ---- | ----------- |
| altText | The default alt text defined for the image resource |

## PropertiesDictionary

| Name | Type | Description |
| :--- | :--- | :---------- |
| Filename | string | The name of the actual file, with extension included |
| FileSize | long | The file size in bytes |
| Extension | string | The file extension |
| FieldId | string | The GUID identifier of the file resource |
| Uri | string | The URI path to the file, excluding the domain |
| [fieldName] | object | An indexed accessor to extended properties which are not exposed as typed properties |

## Extended properties

These are properties that are specific to an asset type. Currently this is limited to images, but new extended properties may be added for images (such as cameraModel) in the future or for other asset types.

### Images

| Name | Description |
| :--- | :---------- |
| Width | The width of the image |
| Height | The height of the image |