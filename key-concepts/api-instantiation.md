# API instantiation

## Client creation

All operations for the API hang off the *ManagementClient* type, which is created using the static method `ManagementClient.Create()`. The `Create()` method allows parts of the [default configuration](#default-configuration) to be partially or completely overridden for that instance.


### Standard creation

This is how the majority of clients are created within Contensis razor views.

```cs
var client = ManagementClient.Create();
```

### Connecting from a non-Contensis website.

Creating a client from outside a Contensis website

```cs
var client = ManagementClient.Create("https://cms.cloud.contensis.com", "{client_id}", "{shared_secret}");
```

## Default configuration

The default configuration needs to be set only once. For a Contensis published website this is automatically invoked on application start-up to reflect the context of the publishing server, ensuring that the correct service root url and security parameters are set.

The default configuration becomes effective for all ContensisClient instantiations, negating the need to provide configuration values each and every time the API is used.

## Non-Contensis published websites

This is a useful feature for websites that are created using a .NET based framework such as NancyFx or Asp.net MVC.

The client ID and shared secret are obtained from [API key management](https://zenhub.zengenti.com/Contensis/9/kb/content-types-and-entries/api-keys/api-key-overview.aspx). They can then be used to call the security service to obtain a claims-based bearer token, and to validate that the user can access resources from the service.


### API initialisation example

This example demonstrates how the default configuration can be set using the [ManagementClientConfiguration](/model/contensisclientconfiguration.md) type.

```cs
using Zengenti.Contensis.Management;

var defaultConfiguration = new ManagementClientConfiguration(
    rootUrl: "https://cms.cloud.contensis.com",
    clientId: "651465e0-2fb8-4b0f-aa2f-1ab34cfe0513",
    sharedSecret: "2327d623-d44e-41ef-a837-717a626f4b75-098348eb-b0a6-4023-a64a-805536024dfb-1a558c9c-49dc-4709-9e8b-c203f60fda80"
);

ManagementClient.Configure(defaultConfiguration);
```
