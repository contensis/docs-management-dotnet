# Data format

The Data Format property is used as an extension of a [DataType](/key-concepts/data-types) to describe or identify the structure and intent of the data. For example, a [Location](/model/location.md) has a DataType of *object*, and a DataFormat of *location*. Another example is a HTML block, which has a DataType of *string* and a DataFormat of *html*.  

The DataFormat is a string value and is designed to allow custom types to be added.

## Supported data formats

The following list contains the data formats that are understood by Contensis:

| Data format | Data type | Description |
| :---------- | :-------- | :---------- |
| [entry](/model/entry.md) | object | An entry format for storing content |
| asset | object | An asset format that represents a file resource |
| [location](/model/location.md) | object | Represents a point on the surface of the Earth |
| [quote](/model/quote.md) | object | A quote with text and a source |
| [dateRange](/model/date-range.md) | object | Represents a document heading |
| [image](/model/image.md) | object | Wraps an Asset with an additional Caption property |
| field | objectArray | Represents a [composed](/model/composed.md) type, defined as an `objectArray` Data Type |
| heading | string | Represents a document heading |
| html | string | A string of HTML markup |
| markdown | string | A string of Markdown markup |