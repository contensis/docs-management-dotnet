---
description: The group class represents a user group in Contensis.
---

# Group

The group class represents a user group in Contensis.

## Members

| Name        | Type                             | Description                                            |
|-------------|----------------------------------|--------------------------------------------------------|
| Custom      | Dictionary<string,string>        | The custom properties.                                 |
| Description | string                           | A description for the group.                           |
| Name        | string                           | The name of the group.                                 |
| Type        | [GroupType](/model/grouptype.md) | The type of the group, 'Sys', 'Contensis', 'External'. |

## Methods

| Method                                                                                                         | Returns                             | Description                                                   |
|----------------------------------------------------------------------------------------------------------------|-------------------------------------|---------------------------------------------------------------|
| [AddChildGroup](/security/groups/add-child-group-to-a-group.md#add-child-group-from-a-group)                   | void                                | Adds a child group to the group.                              |
| [AddChildGroupAsync](/security/groups/add-child-group-to-a-group.md#add-child-group-from-a-group-async)        | void                                | Adds a child group to the group asynchronously                |
| [AddUser](/security/groups/add-users-to-a-group.md#add-user-from-group)                                        | void                                | Adds a user to the group.                                     |
| [AddUserAsync](/security/groups/add-users-to-a-group.md#add-user-from-group-async)                             | void                                | Adds a user to the group asynchronously.                      |
| [AddUsers](/security/groups/add-users-to-a-group.md#add-users-from-group)                                      | void                                | Adds multiple users to the group.                             |
| [AddUsersAsync](/security/groups/add-users-to-a-group.md#add-users-from-group-async)                           | void                                | Adds multiple users to the group asynchronously.              |
| [Children](/security/groups/list-child-groups.md#list-with-page-options)                                       | PagedList<[Group](/model/group.md)> | Lists the child groups for the group.                         |
| [ChildrenAsync](/security/groups/list-child-groups.md#list-with-page-options-async)                            | PagedList<[Group](/model/group.md)> | Lists the child groups for the group asynchronously.          |
| [Delete](/security/groups/delete-a-group.md#delete)                                                            | void                                | Deletes the user group.                                       |
| [DeleteAsync](/security/groups/delete-a-group.md#delete-async)                                                 | void                                | Deletes the user group asynchronously.                        |
| [RemoveChildGroup](/security/groups/remove-child-group-from-group.md#remove-child-group-from-group)            | void                                | Removes a child group from the group.                         |
| [RemoveChildGroupAsync](/security/groups/remove-child-group-from-group.md#remove-child-group-from-group-async) | void                                | Removes a child group from the group asynchronously.          |
| [RemoveUser](/security/groups/remove-user-from-group.md#remove-user-from-group)                                | void                                | Removes a user the group.                                     |
| [RemoveUserAsync](/security/groups/remove-user-from-group.md#remove-user-from-group-async)                     | void                                | Removes a user from the group asynchronously.                 |
| [Save](/security/groups/create-and-update-groups.md)                                                           | void                                | Saves the group.                                              |
| [SaveAsync](/security/groups/create-and-update-groups.md)                                                      | void                                | Saves the group asynchronously.                               |
| [Users](/security/groups/list-group-user-memberships.md#list-with-page-options)                                | void                                | Lists the users that are members of the group.                |
| [UsersAsync](/security/groups/list-group-user-memberships.md#list-with-page-options-async)                     | void                                | Lists the users that are members of the group asynchronously. |