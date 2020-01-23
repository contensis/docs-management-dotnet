---
description: Role definitions in the Management API contain permissions associated with entries and assets, with users, groups and API keys assigned to those permissions.
---
# Node

Role definitions in the Management API contain permissions associated with entries and assets, with users, groups and API keys assigned to those permissions.

## Properties

| Name        | Type                                | Description                                                                               |
|-------------|-------------------------------------|-------------------------------------------------------------------------------------------|
| Id          | Guid                                | The role identifier                                                                      |
| Name        | string                              | The role name                                                                           |
| Description | string                              | An optional description for the role to explain it's purpose                             |
| Enabled     | bool                                | A flag to enable and disable the effect of the role                                      |
| Permissions | [RolePermissions](#rolepermissions) | The permissions assigned to the role to allow users and groups to perform certain actions |
| Assignment  | [RoleAssignments](#roleassignments) | The users, groups and API keys assigned to the role                                       |

### RolePermissions

| Name    | Type                        | Description                        |
|---------|-----------------------------|------------------------------------|
| Entries | List&lt;[EntryPermission](#entrypermission)&gt; | A list of permissions for entries. |
| Assets  | List&lt;[EntryPermission](#entrypermission)&gt; | A list of permissions for assets.  |

### RoleAssignments

| Name    | Type               | Description                                     |
|---------|--------------------|-------------------------------------------------|
| Users   | List&lt;string&gt; | The usernames of the users assigned to the role |
| Groups  | List&lt;string&gt; | The names of the groups assigned to the role    |
| ApiKeys | List&lt;string&gt; | The names of the API keys assigned to the role  |

### EntryPermission

| Name    | Type               | Description                                     |
|---------|--------------------|-------------------------------------------------|
| Users   | List&lt;string&gt; | The usernames of the users assigned to the role |
| Groups  | List&lt;string&gt; | The names of the groups assigned to the role    |
| ApiKeys | List&lt;string&gt; | The names of the API keys assigned to the role  |

## Methods

| Method                                         | Returns | Description                                             |
|------------------------------------------------|---------|---------------------------------------------------------|
| [Save()](./role-methods.md#save)               | void    | Saves changes made to the node instance.                |
| [SaveAsync()](./role-methods.md#saveasync)     | Task    | Saves changes made to the node instance asynchronously. |
| [Delete()](./role-methods.md#delete)           | void    | Deletes the node instance.                              |
| [DeleteAsync()](./role-methods.md#deleteasync) | Task    | Deletes the node instance instance asynchronously.      |