# Linking content

Entries can be linked to other entries or assets through a [Link](/model/link.md) reference. A field may have a single link or contain a list of links to represent a one-to-many relationship.

## Getting entry or asset links

```cs
// Got a single link value
var trailerLink = movieEntry.Get<Link>("trailer");

// Get a list of link values
var reviews = movieEntry.Get<List<Link>>("reviews")
```

## Getting an image link

The [Image](/model/image.md) type has a link property called *Asset* and a caption.

```cs
// Get an image
var bannerImage = movieEntry.Get<Image>("trailer");

// The link for an Image type is the Asset property
var imageLink = bannerImage.Asset;
```

## Setting links

### Setting an entry or asset

```cs
// Set a link to a specific language variation
movieEntry.Set("trailer", new Link("793328d9-44f1-4af4-9ab9-f09374e178b7", "en-GB"));

// Set a list of links inline
movieEntry.Set("reviews", new List<Link>
{
    { new Link("e3b8d874-abc3-4845-ad14-226026386953") },
    { new Link("46f8e03d-39dc-4b3e-9d8b-a4ef7333b322") }
});
```

### Setting an image

```cs
// Set an Image link
movieEntry.Set("bannerImage", new Image("d349c6f1-510a-4fbc-bc75-bad026a229f0", "The Avengers"));

// Set a list of images
var posters = new List<Images>();
posters.Add(new Image("74129401-9c4c-4b39-bfc7-a2f87d22cf68", "Captain America"));
posters.Add(new Image("f7864568-76e6-467b-ac76-a4d215c45b2d", "The Hulk"));

movieEntry.Set("posters", posters);
```