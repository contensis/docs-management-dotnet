# Location


The Location class represents a geographic coordinate that specifies the position of a point on the Earth's surface.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Lat | double | The north-south position |
| Lon | double | The east-west position |

## Example

### Get a Location field object

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Create an API client
    var client = ContensisClient.Create();

    // Retrieve a film by it's ID.
    var movie = client.Entries.Get("0aabad4e-a083-4a88-bd75-b2674e2f8298");

    // Get the field value as a Location instance.
    var filmingLocation = movie.Get<Location>("filmingLocation");

    // Combine lat/lng into a string.
    var latLng = $"{filmingLocation.Lat},{filmingLocation.Lng}";

    // Use Google map API to generate a map image.
    var imgUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+latLng+"&zoom=14&size=400x300&sensor=false";
}

<div id="map">
    <img src="@imgUrl" />
</div>
```
