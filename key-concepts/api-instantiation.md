---
description: All operations for the API hang off the *ManagementClient* type, which is created using the static method `ManagementClient.Create()`.
---

# API instantiation

## Installation

The Contensis .NET Management API targets .NET Standard 2.0, which means it can be used in .NET Framework 4.6.2 projects and above for Windows only, and .NET Core 2.0 projects and above for Windows, Linux and MacOS.

The Nuget package can be added to a project using the built-in Visual studio Nuget management screens or by using one of the following methods.

- Open the Package Manager Console window within Visual Studio and run the following command:

```bash
PM> Install-Package Zengenti.Contensis.Management
```

- Open a command window and run the following .NET CLI command:

```bash
dotnet add package Zengenti.Contensis.Management
```

<br/>

> NOTE: You may have to target a previous major version of the API to match your version of Contensis.

## Client creation

All operations for the API hang off the *ManagementClient* type, which is created using the static method `ManagementClient.Create()`. The `Create()` method allows parts of the [default configuration](#default-configuration) to be partially or completely overridden for that instance.


### Standard creation

This is how the majority of clients are created within Contensis razor views.

```cs
var client = ManagementClient.Create();
```

### Connecting from a non Contensis website

Creating a client from outside a Contensis website, or developing locally in Visual Studio.

```cs
var client = ManagementClient.Create("https://cms.cloud.contensis.com", "PUT_CLIENT_ID_HERE", "PUT_SHARED_SECRET_HERE");
```

## Default configuration

The default configuration needs to be set only once. For a Contensis published website this is automatically invoked on application start-up to reflect the context of the publishing server, ensuring that the correct service root url and security parameters are set.

The default configuration becomes effective for all ManagementClient instantiations, negating the need to provide configuration values each and every time the API is used.

## Non contensis published websites

This is a useful feature for websites that are created using a .NET based framework such as NancyFx or Asp.net MVC.

The client ID and shared secret are obtained from [API key management](https://zenhub.zengenti.com/Contensis/10.0/kb/content-types-and-entries/api-keys/api-key-overview.aspx). They can then be used to call the security service to obtain a claims-based bearer token, and to validate that the user can access resources from the service.


### API initialization example

This example demonstrates how the default configuration can be set using the [ManagementClientConfiguration](/model/managementclientconfiguration.md) type.

```cs
using Zengenti.Contensis.Management;

var defaultConfiguration = new ManagementClientConfiguration(
    rootUrl: "https://cms.cloud.contensis.com",
    clientId: "651465e0-2fb8-4b0f-aa2f-1ab34cfe0513",
    sharedSecret: "2327d623d44e41efa837717a626f4b75098348ebb0a64023a64a805536024dfb1a558c9c49dc47099e8bc203f60fda80"
);

ManagementClient.Configure(defaultConfiguration);
```
