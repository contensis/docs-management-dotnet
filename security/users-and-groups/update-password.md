---
description: Updating a users password can be achived by calling the UpdatePassword method on the user object.
---
# Update password

Updating a [users](/model/user.md) password can be achived by calling one of the `UpdatePassword` method overloads on the user object.

* [UpdatePassword(string currentPassword, string newPassword)](#update-password)
* [UpdatePasswordAsync(string currentPassword, string newPassword)](#update-password-async)
* [UpdatePassword(string newPassword)](#update-password-as-system-administrator)
* [UpdatePasswordAsync(string newPassword)](#update-password-as-system-administrator-async)

# Update password

Updating a password requires the correct current password and a valid new password.

### Syntax

```cs
public void UpdatePassword(string currentPassword, string newPassword)
{    
}
```

### Parameters

*currentPassword*
> Type: string
> The user's current password.

*newPassword*
> Type: string
> The user's new password.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = client.Security.Users.Get("t.durden");

// Update the password
user.UpdatePassword("d0ntT4lk4boutf1ghtClub!", "F1ghtC1ub1234!")
```

# Update password async

Updating a password requires the correct current password and a valid new password.

### Syntax

```cs
public async Task UpdatePasswordAsync(string currentPassword, string newPassword)
{    
}
```

### Parameters

*currentPassword*
> Type: string
> The user's current password.

*newPassword*
> Type: string
> The user's new password.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = await client.Security.Users.GetAsync("t.durden");

// Update the password
await user.UpdatePasswordAsync("d0ntT4lk4boutf1ghtClub!", "F1ghtC1ub1234!")
```

# Update password as system administrator

Updating a password as a system administrator only requires a new password to be specified.

### Syntax

```cs
public void UpdatePassword(string newPassword)
{    
}
```

### Parameters

*newPassword*
> Type: string
> The user's new password.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = client.Security.Users.Get("t.durden");

// Update the password
user.UpdatePassword("F1ghtC1ub1234!")
```

# Update password as system administrator async

Updating a password as a system administrator only requires a new password to be specified.

### Syntax

```cs
public async Task UpdatePasswordAsync(string newPassword)
{    
}
```

### Parameters

*newPassword*
> Type: string
> The user's new password.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = await client.Security.Users.GetAsync("t.durden");

// Update the password
await user.UpdatePasswordAsync("F1ghtC1ub1234!")
```