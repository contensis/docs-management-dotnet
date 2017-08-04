# PagedList

The PagedList is a object that is used to describe paging details for listing and search results.

| Name | Type | Description |
| :--- | :--- | :---------- |
| PageIndex | `int` | The index of the result set to return |
| PageSize | `int` | The size of the result set to return |
| TotalCount | `int` | The total number of results available |
| Items | `IList<T>` | A container for the items being returned |

## Example

The `PagedList` properties provide the information required to implement paging.

```cs
@using System.Web;
@using Zengenti.Contensis.Delivery;

@{
    const int PageSize = 10;

    // Create a client instance 
    var client = ContensisClient.Create();

    // Get the pageIndex passed on the query string
    var selectedPageIndex = int.Parse(Request.QueryString["pageIndex"]);

    // Get the first 10 movie entries
    var moviesList = client.Entries.List("movies", new PageOptions(selectedPageIndex, PageSize));

    // Calculate the total number of pages
    var pageCount = (int)(Math.Ceiling((double)moviesList.TotalCount/PageSize));

    // Render a pager, applying a 'selected' class for the current page
}

<ul class="pager">
    @for(var index = 1; index <= pageCount; index++)
    {
        var selectedClass = (selectedPageIndex == index ? "selected" : null);

        // The class will only be applied if selectedClass is not null
        <li class="@selectedClass"><a href="#">@index</a></li>
    }
</ul>
```
