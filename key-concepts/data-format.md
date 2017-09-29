# DataFormat

The DataFormat property is used as an extension of a [DataType](/key-concepts/data-types.md) to describe or identify the structure and intent of the data. For example, a [Location](/model/location.md) has a DataType of *object*, and a DataFormat of *location*. Another example is a HTML block, which has a DataType of *string* and a DataFormat of *html*.

The DataFormat is a string value and is designed to allow custom types to be added.

## Supported data formats

The following list contains the data formats that are understood by Contensis.

| DataFormat | DataType | Description |
| :---------- | :-------- | :---------- |
| [entry](/model/entry.md) | object | An entry format for storing content. |
| asset | object | An asset format that represents a file resource. |
| [location](/model/location.md) | object | Represents a point on the surface of the Earth. |
| [quote](/model/quote.md) | object | A quote with text and a source. |
| [dateRange](/model/daterange.md) | object | Represents a start and end point in time. |
| [image](/model/image.md) | object | Wraps an asset with an additional caption property. |
| [component](/key-concepts/components.md).* | object | Represents a component type. The format is the component id with a 'component.' prefix. |
| field | objectArray | Represents a [ComposedField](/model/composedfield.md) type, defined as an `objectArray` DataType. |
| heading | string | Represents a document heading. |
| html | string | A string of HTML markup. |
| markdown | string | A string of Markdown markup. |
| taxonomy | string | A taxonomy key. |
