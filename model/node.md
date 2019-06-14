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
| DisplayName | LocalizedString | The localized node display name |
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
| [NewChild(LocalizedString displayName)](./node-methods.md#newchild) | Node | Creates and returns a new child node by specifying the display name.|
| [NewChild(LocalizedString displayName, Guid id)](./node-methods.md#newchild-with-id) | Node | Creates and returns a new child node by specifying the display name and id.|
| [Children()](./node-methods.md#children) | List&lt;Node&gt; | Gets the child nodes for the current node. |
| [ChildrenAsync()](./node-methods.md#childrenasync) | Task&lt;List&lt;Node&gt;&gt; | Gets the child nodes for the current node asynchronously. |
| [Parent()](./node-methods.md#parent) | Node | Gets the parent node for the current node. |
| [ParentAsync()](./node-methods.md#parentasync) | Node | Gets the parent node for the current node asynchronously. |
| [SetChildNodeOrder()](./node-methods.md#setchildnodeorder-with-guid-ids) | void | Sets the child node order for the current node. |
| [SetChildNodeOrderAsync()](./node-methods.md#setchildnodeorderasync-with-guid-ids) | Task | Sets the child node order for the current node asynchronously. |
| [SetChildNodeOrder()](./node-methods.md#setchildnodeorder-with-nodes) | void | Sets the child node order for the current node. |
| [SetChildNodeOrderAsync()](./node-methods.md#setchildnodeorderasync-with-nodes) | Task | Sets the child node order for the current node asynchronously. |
| [DeleteChildNodeOrder()](./node-methods.md#deletechildnodeorder) | void | Deletes the child node order for the current node. |
| [DeleteChildNodeOrderAsync()](./node-methods.md#deletechildnodeorderasync) | Task | Deletes the child node order for the current node asynchronously. |
