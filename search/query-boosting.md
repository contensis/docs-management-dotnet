---
description: Search queries can be focused by weighting free-text queries and structuring queries to provide convergence on certain fields and/or terms.
---
# Query weighting

Search queries can be focused by weighting free-text queries and structuring queries to provide convergence on certain fields and/or terms.

FreeText queries can be weighted in order to provide focus on certain terms. This is achieved by modifying the relevance of each search result by the provided weighting - the higher the relevance of any given result, the higher it will appear in the list.

Weighting can be used to provide more relevance to certain fields for your results - for example, if searching across movies, you may feel any results in the ‘title’ field are more relevant than the ‘tagline’ or ‘overview’ fields. This is easily achieved by simply weighting the relevant free-text operator in the query, as will be shown below.

A more subtle use of weighting can be applied to give more relevance to certain terms within a specific field.

Weighting can be achieved through the use of the **.Weight()** operator, or through the use of query structure. Examples of both are outlined below.

## FreeText

### Providing more relevance for specific fields

Weighting can be used to provide more relevance to specific fields with a query.

For example, if searching across movie ‘title’, ‘tagline’ and ‘overview’ for the term ‘earth’, with an emphasis on the ‘title’ field, you could use the following query:

```cs
var query = new Query
            (
                Op.And
                (
                    Op.EqualTo("sys.versionStatus", "published"),
                    Op.EqualTo("sys.contentTypeId", "movie")
                ),
                Op.Or
                (
                    Op.FreeText("title", "earth").Weight(10),
                    Op.FreeText("tagline", "earth"),
                    Op.FreeText("overview", "earth")
                )
            );
```

As can be seen from the following results, this lends a higher relevance to titles with a higher ratio of the term ‘earth’:  

![Weighting 'title' query](/images/field-search-title-weighted.png)

However, what can also be seen is the fact that ‘title’ fields with higher ratios of the term do not guarantee higher relevance. This is due to the cumulative effect of scoring across terms and operators, meaning the total relevance of the result can also be affected by the relevance of the other fields which have been searched across.

Applying the same weighting to the ‘tagline’ field:

```cs
var query = new Query
            (
                Op.And
                (
                    Op.EqualTo("sys.versionStatus", "published"),
                    Op.EqualTo("sys.contentTypeId", "movie")
                ),
                Op.Or
                (
                    Op.FreeText("title", "earth"),
                    Op.FreeText("tagline", "earth").Weight(10),
                    Op.FreeText("overview", "earth")
                )
            );
```

Yields the following results:

![Weighting 'tagline' query](/images/field-search-tagline-weighted.png)

Finally, weighting the ‘overview’ field:

```cs
var query = new Query
            (
                Op.And
                (
                    Op.EqualTo("sys.versionStatus", "published"),
                    Op.EqualTo("sys.contentTypeId", "movie")
                ),
                Op.Or
                (
                    Op.FreeText("title", "earth"),
                    Op.FreeText("tagline", "earth"),
                    Op.FreeText("overview", "earth").Weight(10)
                )
            );
```

Results in:

![Weighting 'overview' query](/images/field-search-overview-weighted.png)

As can be seen, weighting can help in providing relevance to your results, but is not a guarantee of specific ordering.

### Providing more relevance to terms within a field

Weighting can be used to provide focus on terms in free-text searches.

For example, if searching across movie overviews for ‘thrillers’ which are ‘exciting’ and/or ‘tense’, you might use the following query:

```cs
var query = new Query
            (
                Op.And
                (
                    Op.EqualTo("sys.versionStatus", "published"),
                    Op.EqualTo("sys.contentTypeId", "movie")
                ),
                Op.Or
                (
                    Op.FreeText("overview", "thriller"),
                    Op.FreeText("overview", "exciting"),
                    Op.FreeText("overview", "tense")
                )
            );
```

However, as can be seen from the results, this also retrieves movies which are not thrillers, but are apparently exciting and/or tense:  

![Non-weighted terms query](/images/term-search-not-weighted.png)

We can favour ‘thrillers’ by adding weighting to the query as follows:

```cs
var query = new Query
            (
                Op.And
                (
                    Op.EqualTo("sys.versionStatus", "published"),
                    Op.EqualTo("sys.contentTypeId", "movie")
                ),
                Op.Or
                (
                    Op.FreeText("overview", "thriller").Weight(10),
                    Op.FreeText("overview", "exciting"),
                    Op.FreeText("overview", "tense")
                )
            );
```

The query will now favour ‘thrillers’ over other movie results as can be seen in the following:

!['Thriller' weighted terms query](/images/term-search-thriller-weighted.png)

However, ‘exciting’ and ‘tense’ are still not favoured over other results. By also weighting these queries, we can push them to the top:

```cs
            var query = new Query
            (
                Op.And
                (
                    Op.EqualTo("sys.versionStatus", "published"),
                    Op.EqualTo("sys.contentTypeId", "movie")
                ),
                Op.Or
                (
                    Op.FreeText("overview", "thriller").Weight(10),
                    Op.FreeText("overview", "exciting").Weight(5),
                    Op.FreeText("overview", "tense").Weight(5)
                )
            );

```

As can be seen from the results:

![All weighted terms query](/images/term-search-all-weighted.png)

Please note the different weights for ‘thriller’, ‘exciting’ and ‘tense’: this difference is required in order to prevent the weightings negating each other. For example:

```cs
            var query = new Query
            (
                Op.And
                (
                    Op.EqualTo("sys.versionStatus", "published"),
                    Op.EqualTo("sys.contentTypeId", "movie")
                ),
                Op.Or
                (
                    Op.FreeText("overview", "thriller").Weight(10),
                    Op.FreeText("overview", "exciting").Weight(10),
                    Op.FreeText("overview", "tense").Weight(10)
                )
            );
```

As can be seen from the results, weighting each of these terms identically negates the effect, producing the same result as the non-weighted query:

![All equally weighted terms query](/images/term-search-all-equally-weighted.png)

## Query Structure

As well as weighting, query structure can be used to provide focus in searches. Continuing with the example in weighting free-text searches, we will show how query structure can be used to obtain the same results.

### Providing more relevance for specific fields

Query structure can also be used to provide more relevance to specific fields. For example, structuring a query as follows gives a relevance boost to any documents matching the query for the ‘title’ field:

```cs
var query = new Query
            (
                Op.And
                (
                    Op.EqualTo("sys.versionStatus", "published"),
                    Op.EqualTo("sys.contentTypeId", "movie")
                ),
                Op.Or
                (
                    Op.FreeText("title", "earth"),
                    Op.Or
                    (
                        Op.FreeText("tagline", "earth"),
                        Op.FreeText("overview", "earth")
                    )
                )
            );
```

This yields the following results:

![Structured field query](/images/field-search-title-structured-weighted.png)

However, this does not produce the same results as those of the weighted example.

### Providing more relevance to terms within a field

As in the weighted examples, the focus of the query should be ‘thrillers’, with ‘tense’ and ‘exciting’ being adjectives which should be favoured. This can be achieved by restructuring the original query as follows:

```cs
            var query = new Query
            (
                Op.And
                (
                    Op.EqualTo("sys.versionStatus", "published"),
                    Op.EqualTo("sys.contentTypeId", "movie")
                ),
                Op.Or
                (
                    Op.FreeText("overview", "thriller"),
                    Op.Or
                    (
                        Op.FreeText("overview", "exciting"),
                        Op.FreeText("overview", "tense")
                    )
                )
            );
```

As you can see from the results, this pushes the exciting and tense thrillers to the top of the results, while also removing any movies which are not also thrillers:

![Structured term query](/images/term-search-structured-weighted.png)

> **NOTE: Other Terms**
Query weighting will have no effect on the ordering of the results of the following queries:
>
>* EqualTo
>* Between
>* Contains
>* EndsWith
>* StartsWith
>* GreaterThan
>* GreaterThanOrEqualTo
>* In
>* LessThan
>* LessThanOrEqualTo
>
>Entries either can, or cannot, satisfy these query specifications. Therefore, weighting will not affect the ordering of these results as the relevance of each will be identical.
