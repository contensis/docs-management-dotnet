---
description: In the .NET Delivery API client, the DataType is represented as a DataType `enum` type.
---

# DataTypes

The DataType is the storage type for a field and determines how the field data is validated and indexed for search. In the .NET Delivery API client, the DataType is represented as a DataType `enum` type.

## Syntax

```cs
public enum DataType
```

## Members

| Type | Description | .NET Types |
| ---- | :---------- | :-------- |
| String | Used for text entries such as titles, content or markup. | `string` |
| Integer | A whole number. | `short`, `int`, `long` |
| Decimal | A number with a fractional part. | `decimal`, `double`, `float` |
| Boolean | A value of 'true' or 'false'. | `bool` |
| DateTime | A point in time. | `DateTime` |
| Object | Any arbitrary structure as JSON or a string. | `object` |
| StringArray | An array of Strings. | `string[]`, `IList<string>` |
| IntegerArray | An array of Integers. | `int[]`, `IList<int>` |
| DecimalArray | An array of Decimals. | `int[]`, `IList<int>` |
| DateTimeArray | An array of DateTimes. | `DateTime[]`, `IList<DateTime>` |
| ObjectArray | An array of Objects. | `object[]`, `IList<object>` |
