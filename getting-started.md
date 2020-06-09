---
description: This guide will take you through creating a content type and importing entries using the .NET Management API.
---
# Getting started

This guide will take you through creating a content type and importing entries using the .NET Management API. Throughout the documentation we use examples based on movies.

## Assumptions

* You have an understanding of managing and creating content in the project explorer.
* You have downloaded the example application.

## Create a new project (optional)

Projects are the home for all your content in Contensis. Either use an existing project or create a [new project](https://zenhub.zengenti.com/Contensis/12.0/kb/setup-and-configuration/Administration/Create-a-project.aspx) called MovieDB. You can use the default values for assets and languages. If you're creating a new project you'll need to setup a publishing server, [follow our guide](https://zenhub.zengenti.com/Contensis/12.0/kb/setup-and-configuration/Configuration/Setup-and-configure-a-publishing-server.aspx) to get one up and running.

## Create a genre taxonomy node

We want to be able to categorize movies by their genre, the easiest way to have a centrally managed list of categories is to use the taxonomy manager. To create a genres taxonomy follow these steps:

1. Click the *Management Console* icon at the bottom of the sidebar.
2. Select the *Taxonomy Manager* link in the menu.
3. Select the *Root* node of the taxonomy tree.
4. Enter *Genre* into the Child Name text box and press *Add Child*.
5. Genre will now be shown in the tree, select the Genre Node.
6. Enter *Action* into the Child Name text box and press *Add Child*.
7. Repeat this for Comedy, Crime, Drama, Romance and Western.

For each of the genres you have added, select them in the tree and make a note of the *Node Key* value, it will be in the format of 0/X/X, we will need these for the import later.

In the case of this guide our genres nodes have the following keys, your keys will likely have different values.

| Genre   | Key   |
|---------|-------|
| Action  | 0/5/1 |
| Comedy  | 0/5/2 |
| Crime   | 0/5/3 |
| Drama   | 0/5/4 |
| Romance | 0/5/5 |
| Western | 0/5/6 |

## Create a movie content type

You can [create a new content type](https://zenhub.zengenti.com/Contensis/12.0/kb/content-types-and-entries/content-types/create-a-content-type.aspx) using the content type builder. Create a new content type called *Movie* with the following fields.

| Field name   | API id      | Type             | Description                             |
|--------------|-------------|------------------|-----------------------------------------|
| Title        | title       | Text             | The title of the movie.                 |
| Overview     | overview    | Text             | An overview of what the movie is about. |
| Release date | releaseDate | Date             | The date the movie was released.        |
| Runtime      | runtime     | number (integer) | The runtime in minutes.                 |
| Genres       | genres      | Taxonomy         | The genre of the movie.                 |
| Revenue      | revenue     | number           | The revenue the movie generated.        |

## Import some movies

Now it's time to import some movies!

The example import solution can be found on [GitHub](https://github.com/contensis/dotnet-movie-import) and a local copy can be obtained using the `git clone` command:

``` bash
git clone https://github.com/contensis/dotnet-movie-import
```

Open the `MovieImport.sln` solution in Visual Studio.

You will see there is a simple class describing a movie.

```cs
using System;

namespace MovieImport
{
    public class Movie
    {
        public string Title { get; set; }
        public string Overview { get; set; }
        public int Runtime { get; set; }
        public string[] Genres { get; set; }
        public DateTime ReleaseDate { get; set; }
        public long Revenue { get; set; }
    }
}
```

Open the program class, make sure you replace the following values

| Value | Description |
| ----- | ----------- |
| &lt;Contensis URL&gt; | This is the URL of your Contensis instance. e.g. `https://cms.cloud.contensis.com` |
| &lt;Client ID&gt; | Copy your client ID from your API Key. [Create an API Key](https://zenhub.zengenti.com/Contensis/12.0/kb/content-types-and-entries/api-keys/create-an-api-key.aspx) |
| &lt;Shared Secret&gt; | Copy your shared secret from your API Key. [Create an API Key](https://zenhub.zengenti.com/Contensis/12.0/kb/content-types-and-entries/api-keys/create-an-api-key.aspx) |
| &lt;Project Id&gt; | From the management console, select the *Project Overview* and you will see your project API name. |

```cs
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using CsvHelper;
using Zengenti.Contensis.Management;

namespace MovieImport
{
    class Program
    {
        // The mapping between the taxonomy node name in the CSV and the taxonomy key to save
        private static readonly Dictionary<string, string> GenreTaxonomyKeys = new Dictionary<string, string>
        {
            {"Action", "0/5/1"},
            {"Comedy", "0/5/2"},
            {"Crime", "0/5/3"},
            {"Drama", "0/5/4"},
            {"Romance", "0/5/5"},
            {"Western", "0/5/6"}
        };

        static void Main()
        {
            // Create the management client
            var client = ManagementClient.Create("<Contensis URL>",
                "<Client ID>",
                "<Shared Secret>");

            // Get the project
            var project = client.Projects.Get("<Project Id>");

            // Read the movie CSV file
            using (var textReader = File.OpenText(@"Movies.csv"))
            {
                var csv = new CsvReader(textReader);

                // Iterate over each movie, creating it
                foreach (var movie in csv.GetRecords<Movie>())
                {
                    CreateMovie(project, movie);
                }
            }
        }

        private static void CreateMovie(Project project, Movie movie)
        {
            // Set-up a new movie entry
            var movieEntry = project.Entries.New("movie");

            // Set each field value
            movieEntry.Set("title", movie.Title);
            movieEntry.Set("overview", movie.Overview);
            movieEntry.Set("releaseDate", movie.ReleaseDate);
            movieEntry.Set("runtime", movie.Runtime);
            movieEntry.Set("genres", GetGenreTaxonomyKeys(movie.Genres));
            movieEntry.Set("revenue", movie.Revenue);

            // Save and publish the movie
            movieEntry.Save();
            movieEntry.Publish();
            Console.WriteLine($"Saved movie {movieEntry.Get("title")}");
        }

        private static string[] GetGenreTaxonomyKeys(string genreNames)
        {
            var genres = genreNames.Split(',');
            return genres.Select(genre => GenreTaxonomyKeys[genre]).ToArray();
        }
    }
}
```

Finally make sure the example CSV file is in the root of your app and run the application.

## Summary

We hope this demonstrates how simple it is to import basic entries using the .NET Management API.
