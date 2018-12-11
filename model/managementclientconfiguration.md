---
description: The ManagementClientConfiguration is a container for the options that are required for setting the default settings.
---
# ManagementClientConfiguration

The `ManagementClientConfiguration` is a container for the options that are required for setting the default settings.

## Syntax

```cs
// Constructor
public ManagementClientConfiguration(string rootUrl, string clientId = null, string sharedSecret = null)
{
}
```

### Parameters

*rootUrl*
> Type: `string`  
> The url to the root of the Management API services

*clientId*
> Type: `string`  
> The client id value obtained from [API key management](https://zenhub.zengenti.com/Contensis/11.1/kb/content-types-and-entries/api-keys/api-key-overview.aspx)

*sharedSecret*
> Type: `string`  
> The shared secret value obtained from [API key management](https://zenhub.zengenti.com/Contensis/10.0/kb/content-types-and-entries/api-keys/api-key-overview.aspx)

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| RootUrl | string | The url to the root of the Management API services. |
| ClientId | string | The client id value obtained from [API key management](https://zenhub.zengenti.com/Contensis/10.0/kb/content-types-and-entries/api-keys/api-key-overview.aspx). |
| SharedSecret | string | The shared secret value obtained from [API key management](https://zenhub.zengenti.com/Contensis/11.1/kb/content-types-and-entries/api-keys/api-key-overview.aspx). |

## Example

```cs
// Set the default settings which will be used when client instances are created without parameters
using Zengenti.Contensis.Management;

var defaultConfiguration = new ManagementClientConfiguration(
    rootUrl: "http://cms.contensis.com",
    clientId: "651465e0-2fb8-4b0f-aa2f-1ab34cfe0513",
    sharedSecret: "2327d623-d44e-41ef-a837-717a626f4b75-098348eb-b0a6-4023-a64a-805536024dfb-1a558c9c-49dc-4709-9e8b-c203f60fda80"
);

// Set the default settings
ManagementClient.Configure(defaultConfiguration);

// The client instance will use the default settings.
var client = ManagementClient.Create();
```
