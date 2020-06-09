---
description: The user status class contains properties related to whether the user is active, deactivated, locked or needs a password reset.
---

# UserStatus

The user status class contains properties related to whether the user is active, deactivated, locked or needs a password reset.

## Members
| Name                  | Type   | Description                                     |
|-----------------------|--------|-------------------------------------------------|
| Active                | bool   | Indicates whether the user is active.           |
| DeactivationReason    | string | The user deactivation reason.                   |
| Locked                | bool   | Indicates whether the user account is locked.   |
| PasswordResetRequired | bool   | Indicates whether a password reset is required. |