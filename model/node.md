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
| [Save()](./node-methods.md#save) | void | Saves changes made to the node instance. |
| [SaveAsync()](./node-methods.md#saveasync) | Task | Saves changes made to the node instance asynchronously. |
| [Delete()](./node-methods.md#delete) | void | Deletes the node instance. |
| [DeleteAsync()](./node-methods.md#deleteasync) | Task | Deletes the node instance instance asynchronously. |
| [NewChild(LocalizedString title)](./node-methods.md#newchild-with-title) | Node | Creates and returns a new child node by specifying the title.|
| [Children()](./node-methods.md#children) | List&lt;Node&gt; | Gets the child nodes for the current node. |
| [ChildrenAsync()](./node-methods.md#childrenasync) | Task&lt;List&lt;Node&gt;&gt; | Gets the child nodes for the current node asynchronously. |