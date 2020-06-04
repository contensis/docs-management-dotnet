---
description: Creating and updating users can be achieved by using one of the New method overloads in combination with calling Save on the User object.
---
# Create and update users

Creating and updating [users](/model/user.md) can be achieved by using one of the `New` method overloads in combination with calling `Save` on the User object.

* [New(string username, string email, string password)](#create-new-user)
* [New(Guid id, string username, string email, string password)](#create-new-user-with-an-id)
* [Update user](#update-user)

# Create new user

Initializes a new user with a username, email address and password. The user is not created from calling `New`.

### Syntax

```cs
public User New(string username, string email, string password)
{    
}
```

### Parameters

*username*
> Type: string
> The user's username.

*email*
> Type: string
> The user's email address.

*password*
> Type: string
> The user's password for login.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Initialize the user
User user = client.Security.Users.New("t.durden", "t.durden@fightclub.com", "d0ntT4lk4boutf1ghtClub!");

// Create the user
user.Save();

// Create the user asynchronously
await user.SaveAsync();
```

# Create new user with an id

Initializes a new user with a specified unique id, username, email address and password. The user is not created from calling `New`.

### Syntax

```cs
public User New(Guid id, string username, string email, string password)
{    
}
```

### Parameters

*id*
> Type: guid
> A unique identifier for the user.

*username*
> Type: string
> The user's username.

*email*
> Type: string
> The user's email address.

*password*
> Type: string
> The user's password for login.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Create a guid
var userId = Guid.Parse("00000000-0000-0000-0000-000000000001")

// Initialize the user
User user = client.Security.Users.New(userId, "t.durden", "t.durden@fightclub.com", "d0ntT4lk4boutf1ghtClub!");

// Create the user
user.Save();

// Create the user asynchronously
await user.SaveAsync();
```

# Update user

Updates an existing user.

### Examples

```cs
using Zengenti.Contensis.Management;
using Zengenti.Contensis.Management.Users;

// Create a client
var client = ManagementClient.Create();

// Get an existing user
User user = client.Security.Users.Get("t.durden");

// Update user details
user.Custom.Add("motto", "The first rule of fight club...");

// Update the user
user.Save();

// Update the user asynchronously
await user.SaveAsync();
```