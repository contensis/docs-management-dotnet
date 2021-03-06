---
description: Creating a new asset can be achieved by using one of the NewAsset method overloads.
---

# Creating assets

Creating a new [asset](/model/asset.md) can be achieved by using one of the `NewAsset` method overloads. Updating an asset's file can be acheived using one the of the SetFile methods overloads of an [entry](/model/entry-methods.md).

> NOTE  
> The language of the asset will be determined by the language of the target folder in Contensis.

* [NewAsset(string localFilePath, string parentNodePath, string filename = null)](#newasset-with-local-file-path)
* [NewAsset(Stream fileStream, string parentNodePath, string filename)](#newasset-with-stream)
* [NewAsset(byte[] bytes, string parentNodePath, string filename)](#newasset-with-byte-array)

## NewAsset with local file path

Creates a new asset from a file on the local file system.

### Syntax

```cs
public Entry NewAsset(string localFilePath, string parentNodePath, string filename = null)
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

### Remarks

If no filename parameter is specified, then the name of the local file is used.

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
    @"\uploads\movie-posters", "Batman-returns.jpg");

// Set field data
movieImage.Set("title", "Batman Returns");

// Make the content live
movieImage.Save();
movieImage.Workflow.Publish();
```

---

## NewAsset with stream

Creates a new asset from a stream. Requires a valid filename with extension to be able to identify the asset type.

### Syntax

```cs
public Entry NewAsset(Stream fileStream, string parentNodePath, string filename)
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
    @"\uploads\movie-posters", "Batman-returns.jpg");

// Set field data
movieImage.Set("title", "Batman Returns");

// Make the content live
movieImage.Save();
movieImage.Workflow.Publish();
```

---

## NewAsset with byte array

Creates a new asset from a byte array. Requires a valid filename with extension to be able to identify the asset type.

### Syntax

```cs
public Entry NewAsset(Stream bytes, string parentNodePath, string filename)
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
    @"\uploads\movie-posters", "Batman-returns.jpg");

// Set field data
movieImage.Set("title", "Batman Returns");

// Make the content live
movieImage.Save();
movieImage.Workflow.Publish();
```

---
