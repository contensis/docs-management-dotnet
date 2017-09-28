# Errors

Things go wrong, either because the client is asking for something that does not exist, a network failure occurred or a bug is in the code. All non-success HTTP responses are treated as errors and are wrapped up in the client API to allow them to be handled.

## Handling errors

Errors returned as HTTP errors are subsequently wrapped in appropriate Exception types - `ValidationException` and `RestRequestException`. Local errors that occur in the client API are thrown as standard .NET exceptions, such as `ArgumentException` or `IndexOutOfBoundsException`.

### Example

Handling .NET exceptions:

```cs
using Zengenti.Contensis.Management;
using Zengenti.Rest;
using Zengenti.Validation;

public class Program
{
    static void Main()
    {
        try
        {
            var client = ManagementClient.Create(
                "https://cms.cloud.contensis.com",
                "651465e0-2fb8-4b0f-aa2f-1ab34cfe0513",
                "2327d623-d44e-41ef-a837-717a626f4b75-098348eb-b0a6-4023-a64a-805536024dfb-1a558c9c-49dc-4709-9e8b-c203f60fda80");

            var movieDbProject = client.Projects.Get("movieDb");

            // Get a specific entry
            var entry = movieDbProject.Entries.Get("9c64e11e-fcf0-44a6-adff-41e13de15515");

            // Update a value
            entry.Set("yearOfRelease", 1978);

            // Commit the change
            entry.Save();
        }
        catch(ValidationException valEx)
        {
            // Validation error(s)
        }
        catch(RestRequestException valEx)
        {
            // Something went wrong, likely on the server
        }
        catch(Exception ex)
        {
            // Something went wrong in the client API
        }
    }
}
```
