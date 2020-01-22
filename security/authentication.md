---
description: To access any resource from the Management API, a client needs to be authenticated with the Zengenti OAuth2 Identity provider. 
---
# Authentication

## Overview

To access any resource from the Management API, a client needs to be authenticated with the Zengenti OAuth2 Identity provider, which is hosted alongside the Contensis web application. Websites are authenticated using the [Client Credential flow](https://tools.ietf.org/html/rfc6749#section-4.4) which grants access to resources in a project.

The client provides both a *clientId* and a *shared secret* (which can be created and obtained from [API key management](https://zenhub.zengenti.com/Contensis/12.0/kb/content-types-and-entries/api-keys/api-key-overview.aspx) as part of the [API instantiation](/key-concepts/api-instantiation.md). These are used to request an *access token* from the authentication provider which are then cached locally and passed along with each request as a HTTP header to the Management API services. If the authentication request fails then a 401 HTTP status code is returned and an exception is thrown.

Periodically the access token will expire to ensure that if the access token is compromised then any grants are short lived. On an expiry a new access token is requested using the same mechanism as the initial token request. All this functionality is wrapped up in the C# Management API.

If you want to implement your own Management API wrapper in a different language then the implementation must implement the OAuth2 Client Credential flow as specified in [RFC-6749 standard](https://tools.ietf.org/html/rfc6749#section-4.4) using the discovery document located at `https://*YOUR_CMS_URL*/authenticate`.
