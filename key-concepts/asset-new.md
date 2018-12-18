---
description: Creating a new asset can be achieved by using one of the New method overloads.
---

# Creating assets

Creating a new [asset](/model/asset.md) can be achieved by using one of the `NewAsset` method overloads. Updating an asset's file can be acheived using one the of the SetFile methods overloads of an [entry](/model/entry-methods.md).

* [NewAsset(string localFilePath, string parentNodePath, string filename = null, string language = null)](#new-with-local-file-path)
* [NewAsset(Stream fileStream, string parentNodePath, string filename, string language = null)](#new-with-stream)
* [NewAsset(byte[] bytes, string parentNodePath, string filename, string language = null)](#new-with-byte-array)

## New with local file path

Creates a new asset from a file on the local file system.

### Syntax

```cs
public Entry NewAsset(string localFilePath, string parentNodePath, string filename = null, string language = null
{
}
```

### Parameters

*localFilePath*
> Type: `string`  
> The absolute path to the file.

*parentNodePath*
> Type: `string`  
> The path to the parent node where the asset should be created as a child.

*filename*
> Type: `string`  
> An optional parameter that allows the filename of the asset to be specified, overriding the name of the local file.

*language*
> Type: `string`  
> Optionally allows the target language to specified. Defaults to the project default language if not specified.

### Remarks

Throws an *FileNotFoundException* if the specified local file does not exist.

Throws an *ArgumentException* if the parentNodePath is not specified.

### Example

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Workflow.Basic;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Create a new image asset
var movieImage = movieDbProject.Entries.NewAsset(@"c:\images\movies\batman.jpg",
    @"\uploads\movie-posters", "Batman-returns.jpg", "en-GB");

// Set field data
movieImage.Set("title", "Batman Returns");

// Make the content live
movieImage.Save();
movieImage.Workflow.Publish();
```

---

## New with stream

Creates a new asset from a stream. Requires a valid filename with extension to be able to identify the asset type.

### Syntax

```cs
public Entry NewAsset(Stream fileStream, string parentNodePath, string filename, string language = null
{
}
```

### Parameters

*fileStream*
> Type: `Stream`  
> The stream containing the file bytes.

*parentNodePath*
> Type: `string`  
> The path to the parent node where the asset should be created as a child.

*filename*
> Type: `string`  
> The filename of the asset including the file extension.

*language*
> Type: `string`  
> Optionally allows the target language to specified. Defaults to the project default language if not specified.

### Remarks

Throws an *ArgumentException* if the stream is null or empty.

Throws an *ArgumentException* if the parentNodePath is not specified.

Throws an *ArgumentException* if the filename is null, empty or does not include a file extension.

### Example

```cs
using System.Net.Http;
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Workflow.Basic;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get a file stream by downloading an image from a URL
var stream = await new HttpClient()
    .GetStreamAsync("https://en.wikipedia.org/wiki/Batman_Returns#/media/File:Batman_returns_poster2.jpg");

// Create a new image asset
var movieImage = movieDbProject.Entries.NewAsset(stream,
    @"\uploads\movie-posters", "Batman-returns.jpg", "en-GB");

// Set field data
movieImage.Set("title", "Batman Returns");

// Make the content live
movieImage.Save();
movieImage.Workflow.Publish();
```

---

## New with byte array

Creates a new asset from a byte array. Requires a valid filename with extension to be able to identify the asset type.

### Syntax

```cs
public Entry NewAsset(Stream bytes, string parentNodePath, string filename, string language = null
{
}
```

### Parameters

*bytes*
> Type: `byte[]`  
> The file bytes.

*parentNodePath*
> Type: `string`  
> The path to the parent node where the asset should be created as a child.

*filename*
> Type: `string`  
> The filename of the asset including the file extension.

*language*
> Type: `string`  
> Optionally allows the target language to specified. Defaults to the project default language if not specified.

### Remarks

Throws an *ArgumentException* if the bytes are empty.

Throws an *ArgumentException* if the parentNodePath is not specified.

Throws an *ArgumentException* if the filename is null, empty or does not include a file extension.

### Example

```cs
using System.Net.Http;
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Workflow.Basic;

// Create a client
var client = ManagementClient.Create();

// Retrieve the relevant project
var movieDbProject = client.Projects.Get("moviedb");

// Get the files bytes from an images stored in a database
var bytes = new Repository().GetImageAsBytes(54321);

// Create a new image asset
var movieImage = movieDbProject.Entries.NewAsset(bytes,
    @"\uploads\movie-posters", "Batman-returns.jpg", "en-GB");

// Set field data
movieImage.Set("title", "Batman Returns");

// Make the content live
movieImage.Save();
movieImage.Workflow.Publish();
```

---
