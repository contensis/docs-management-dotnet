---
description: The PagedList is a object that is used to describe paging details for listing and search results.
---

# PagedList

The PagedList is a object that is used to describe paging details for listing and search results.

| Name | Type | Description |
| :--- | :--- | :---------- |
| PageIndex | `int` | The index of the result set to return |
| PageSize | `int` | The size of the result set to return |
| TotalCount | `long` | The total number of results available |
| PageCount | `long` | The calculated page count based on the TotalCount and PageSize |
| Items | `IList<T>` | A container for the items being returned |

## Example

The `PagedList` properties provide the information required to understand result positioning.

```cs
using System;
using Zengenti.Contensis.Management;
using Zengenti.Data;

namespace MovieImporter
{
    public class Program
    {
        // Create a management client and access the relevant project
        ManagementClient client = ManagementClient.Create();
        Project website = client.Projects.Get("website");

        // Get the first page of entry results, 20 items per page
        PagedList<Entry> entryList = website.Entries.List("movies", pageOptions: new PageOptions(0, 20));

        foreach (var movie in entryList.Items)
        {
            // Write each movie title to the console
            Console.WriteLine(movie.Get("title"));
        }
    }
}
```
