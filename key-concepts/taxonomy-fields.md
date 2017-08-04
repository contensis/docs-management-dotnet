# Taxonomy fields

Fields defined as a taxonomy field (DataType = String, DataFormat = taxonomy) are automatically resolved in the Delivery API and returned as [TaxonomyNode](/model/TaxonomyNode.md) instances. A TaxonomyNode has a name, a path and child nodes.

The following example shows how a taxonomy node can be retrieved from an [Entry](/model/entry.md).

```cs
// Create a client
var client = ContensisClient.Create();

// Get an entry
var movie = client.Entries.Get("c68054c1-6ce8-4e9c-94d3-3d8332c85352");

// Get the field value as a taxonomy node
var genreNode = movie.Get<TaxonomyNode>("genre");
```

If a taxonomy node instance has child nodes, then they can be accessed using the Children property of the node. The child nodes are auto-resolved from the service.

```cs
// Accessing the Children property resolves the child nodes
<ul>
@foreach(var node in genreNode.Children)
{
   <li>@node.Name</li> 
}
</ul>
```