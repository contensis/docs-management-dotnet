---
description: A node represents a location within the navigational structure of a website.
---
# Node

A node represents a location within the navigational structure of a website. The linking of nodes as parent-child relationships forms the hierarchical structure of a website, with a node having a single parent and (optionally) multiple child nodes. A single entry can optionally be assigned to a node.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Id | Guid | The node identifier |
| ProjectId | string | The project identifier |
| ParentId | Guid? | The parent node id. The value will be null if the node is the root |
| Title | LocalizedString | The localized node title |
| Slug | LocalizedString | The localized node slug |
| EntryId | Guid? | (Optional) The associated entry identifier |
| ChildCount | int | The count of child nodes |

## Methods

| Method | Returns | Description |
| :----- | :------ | :-----------|
| [Save()](./node-methods.html#save) | void | Saves changes made to the node instance. |
| [SaveAsync()](./node-methods.html#saveasync) | Task | Saves changes made to the node instance asynchronously. |
| [Delete()](./node-methods.html#delete) | void | Deletes the node instance. |
| [DeleteAsync()](./node-methods.html#deleteasync) | Task | Deletes the node instance instance asynchronously. |
| [NewChild(LocalizedString title)](./node-methods.html#newchild-with-title) | Node | Creates and returns a new child node by specifying the title.|
| [NewChild(LocalizedString title, LocalizedString slug)](./node-methods.html#newchild-with-title-and-slug) | Node | Creates and returns a new child node by specifying the title and slug. |
| [NewChild(LocalizedString title, LocalizedString slug, Guid entryId))](./node-methods.html#newchild-with-title-slug-and-guid-entryId) | Node | Creates and returns a new child node by specifying the title,slug and associated entry |
| [NewChild(LocalizedString title, LocalizedString slug, string entryId))](./node-methods.html#newchild-with-title-slug-and-string-entryId) | Node | Creates and returns a new child node by specifying the title,slug and associated entry |