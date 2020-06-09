---
description: The user class represents a user in Contensis.
---

# User

The user class represents a user in Contensis.

## Members

| Name                      | Type                               | Description                                                                   |
|---------------------------|------------------------------------|-------------------------------------------------------------------------------|
| Activated                 | DateTime?                          | The user activated datetime.                                                  |
| AvatarUrl                 | String                             | The URL of the user's avatar.                                                 |
| Created                   | DateTime                           | The user creation datetime.                                                   |
| Credentials.Provider.Type | enum                               | The type of credential provider for the user, 'Sys', 'Contensis', 'External'. |
| Credentials.Provider.Name | string                             | The name of credential provider.                                              |
| Custom                    | Dictionary<string,string>          | The user's custom properties,                                                 |
| Email                     | String                             | The email address.                                                            |
| Firstname                 | String                             | The user's firstname.                                                         |
| Id                        | Guid                               | The user's unique identifier.                                                 |
| LastLogin                 | DateTime?                          | The user's last login datetime.                                               |
| Lastname                  | String                             | The user's lastname.                                                          |
| Modified                  | DateTime?                          | The last modification datetime.                                               |
| PasswordChanged           | DateTime?                          | The last password change datetime.                                            |
| Status                    | [UserStatus](/model/userstatus.md) | The user's status properties.                                                 |
| Timezone                  | String                             | The user's timezone.                                                          |
| Username                  | String                             | The user's username.                                                          |

## Methods

| Method                                                        | Returns                             | Description                                                              |
|---------------------------------------------------------------|-------------------------------------|--------------------------------------------------------------------------|
| [Delete](/security/users/delete-a-user.md)                    | void                                | Deletes the user.                                                        |
| [DeleteAsync](/security/users/delete-a-user.md)               | void                                | Deletes the user asynchronously.                                         |
| [Groups](/security/users/get-group-memberships.md)            | PagedList<[Group](/model/group.md)> | Lists group memberships.                                                 |
| [GroupsAsync](/security/users/get-group-memberships.md)       | PagedList<[Group](/model/group.md)> | Lists group memberships asynchronously.                                  |
| [IsMemberOf](/security/users/check-group-memberships.md)      | bool                                | Checks if the user is a member of the specified group(s).                |
| [IsMemberOfAsync](/security/users/check-group-memberships.md) | bool                                | Checks if the user is a member of the specified group(s) asynchronously. |
| [Save](/security/users/create-and-update-users.md)            | void                                | Updates the changes to the user, or creates a new user.                  |
| [SaveAsync](/security/users/create-and-update-users.md)       | void                                | Saves the changes to the user, or creates a new user asynchronously.     |
| [UpdatePassword](/security/users/update-password.md)          | void                                | Updates the user's password.                                             |
| [UpdatePasswordAsync](/security/users/update-password.md)     | void                                | Updates the user's password asynchronously.                              |