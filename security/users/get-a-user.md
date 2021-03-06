---
description: Requesting a user can be achieved by using one of the Get method overloads.
---
# Getting a user

Requesting an individual [user](/model/user.md) can be achieved by using one of the `Get` methods overloads.

* [Get(Guid id)](#get-by-id)
* [GetAsync(Guid id)](#get-by-id-async)
* [Get(string id)](#get-by-string-id)
* [GetAsync(string id)](#get-by-string-id-async)
* [Get(string username)](#get-by-username)
* [GetAsync(string username)](#get-by-username-async)
* [Get(string emailAddress)](#get-by-email-address)
* [GetAsync(string emailAddress)](#get-by-email-address-async)

# Get by id

Gets a user by its identifier.

### Syntax

```cs
public User Get(Guid id)
{    
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the user.

## Remarks

Returns *null* if no user matches the specified id.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic a guid value
var userId = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the user
User user = client.Security.Users.Get(userId);
```

# Get by id async

Gets a user by its identifier asynchronously.

### Syntax

```cs
public async Task<User> GetAsync(Guid id)
{    
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the user.

## Remarks

Returns *null* if no user matches the specified id.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Mimic a guid value
var userId = Guid.Parse("c5da1719-cb3f-4f2e-927b-f678293258f3");

// Get the user
User user = await client.Security.Users.GetAsync(userId);
```

# Get by string id

Gets a user by its id identifier.

### Syntax

```cs
public User Get(string id)
{    
}
```

### Parameters

*id*
> Type: `string`  
> The users identifier, either username, email address, or id.

## Remarks

Returns *null* if no user matches the specified id.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = client.Security.Users.Get("c5da1719-cb3f-4f2e-927b-f678293258f3");
```

# Get by string id async

Gets a user by its id identifier asynchronously.

### Syntax

```cs
public async Task<User> GetAsync(string id)
{    
}
```

### Parameters

*id*
> Type: `string`  
> The users identifier, either username, email address, or id.

## Remarks

Returns *null* if no user matches the specified id.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = await client.Security.Users.GetAsync("c5da1719-cb3f-4f2e-927b-f678293258f3");
```


# Get by username

Gets a user by their username identifier.

### Syntax

```cs
public User Get(string id)
{    
}
```

### Parameters

*id*
> Type: `string`  
> The users identifier, either username, email address, or id.

## Remarks

Returns *null* if no user matches the specified username.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = client.Security.Users.Get("r.paulsen");
```

# Get by username async

Gets a user by their username identifier asynchronously.

### Syntax

```cs
public async Task<User> GetAsync(string id)
{    
}
```

### Parameters

*id*
> Type: `string`  
> The users identifier, either username, email address, or id.

## Remarks

Returns *null* if no user matches the specified username.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = await client.Security.Users.GetAsync("r.paulsen");
```

# Get by email address

Gets a user by their email address.

### Syntax

```cs
public User Get(string id)
{    
}
```

### Parameters

*username*
> Type: `string`  
> The users identifier, either username, email address, or id.

## Remarks

Returns *null* if no user matches the specified email address.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = client.Security.Users.Get("robert.paulsen@fightclub.com")
```

# Get by email address async

Gets a user by their email address asynchronously.

### Syntax

```cs
public async Task<User> GetAsync(string id)
{    
}
```

### Parameters

*username*
> Type: `string`  
> The users identifier, either username, email address, or id.

## Remarks

Returns *null* if no user matches the specified email address.

### Examples

```cs
using Zengenti.Contensis.Management;

// Create a client
var client = ManagementClient.Create();

// Get the user
User user = await client.Security.Users.GetAsync("robert.paulsen@fightclub.com");
```