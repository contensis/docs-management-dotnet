# DateRange

The DateRange type represents a start and end point in time.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| From | DateTime? | The date and time the range starts. |
| To | DateTime? | The date and time the range ends. |

## Constructor

### Syntax

```cs
public DateRange(DateTime from, DateTime to)
{
}
```

### Parameters

*from*
> Type: `DateTime`
> The date and time the range starts.

*to*
> Type: `DateTime`
> The date and time the range ends.

## Validation

The *From* value cannot be a later date than the *To* value.

## Examples

### Get a DateRange field object

```cs
// Get the field value as a DateRange instance.
DateRange filmingPeriod = movieEntry.Get<DateRange>("filmingPeriod");

// Get the field value as a dynamic object (ExpandoObject).
dynamic filmingPeriod = movieEntry.Get("filmingPeriod");
```

### Set a DateRange field object

```cs
// Set the field value
movie.Set("filmingPeriod", filmingPeriod);
```
