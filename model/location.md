---
description: The Location class represents a geographic coordinate that specifies the position of a point on the Earth's surface.
---
# Location

The Location class represents a geographic coordinate that specifies the position of a point on the Earth's surface.

## Constructor

### Syntax

```cs
public Location(double lat, double lon)
{
}
```

### Parameters

*lat*
> Type: `double`
> The latitude.

*lon*
> Type: `double`
> The longitude.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Lat | double | The north-south position |
| Lon | double | The east-west position |

## Examples

### Get a Location field object

```cs
// Get the field value as a Location instance.
Location filmingLocation = movieEntry.Get<Location>("filmingLocation");

// Get the field value as a dynamic (ExpandoObject) instance.
dynamic filmingLocation = movieEntry.Get("filmingLocation");
```

### Set a Location field object

```cs
// Create a Location object.
var filmingLocation = new Location(52.415936, -2.6417701);

// Set the film value.
movieEntry.Set("filmingLocation", filmingLocation);
```
