# ManagementClientConfiguration

The ManagementClientConfiguration is a container for the options that are required for setting the defaults settings.

## Syntax

```cs
// Constructor
public ManagementClientConfiguration(string rootUrl, string clientId = null, string sharedSecret = null)
{
}

```

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| RootUrl | string | The url to the root of the Delivery API services. |
| ClientId | string | The client id value obtained from [API key management](https://zenhub.zengenti.com/Contensis/9/kb/content-types-and-entries/api-keys/api-key-overview.aspx). |
| SharedSecret | string | The shared secret value obtained from [API key management](https://zenhub.zengenti.com/Contensis/9/kb/content-types-and-entries/api-keys/api-key-overview.aspx). |