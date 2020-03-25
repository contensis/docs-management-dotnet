# Query operators

- [And](#and)
- [Or](#or)
- [Not](#not)
- [Between](#between)
- [Contains](#contains)
- [EndsWith](#endswith)
- [EqualTo](#equalto)
- [Exists](#exists)
- [FreeText](#freetext)
- [GreaterThan](#greaterthan)
- [GreaterThanOrEqualTo](#greaterthanorequalto)
- [In](#in)
- [LessThan](#lessthan)
- [LessThanOrEqualTo](#lessthanorequalto)
- [StartsWith](#startswith)
- [DistanceWithin](#distancewithin)

## Logical Operators

### And

This would return any document where *first* is *1* AND *second* is *2*.

```cs
var query = new Query(
    Op.And(
        Op.EqualTo("first", 1),
        Op.EqualTo("second", 2)
    )
);
```

The *And* operator is the default logical operator and is not required to be specified explicitly.

```cs
var query = new Query(
    Op.EqualTo("first", 1),
    Op.EqualTo("second", 2)
);
```

### Or

The example would return any document where *first* is *1* OR *second* is *2*.

```cs
var query = new Query(
    Op.Or(
        Op.EqualTo("first", 1),
        Op.EqualTo("second", 2)
    )
);
```

### Not

The *not* expects an inner operator so in the example any document where *first* is NOT equal to *7* would be returned.

```cs
var query = new Query(
    Op.Not(Op.EqualTo("first", 7))
);
```

## Relational & equality operators

### Between

In this example, if our field is between *18* and *45* inclusive it would match.

```cs
var query = new Query(
    Op.Between("age", 18, 45)
);
```

### Contains

This would match on a field called *description* containing the phrase *batman*.

```cs
var query = new Query(
    Op.Contains("description", "batman")
);
```

### EndsWith

This would find any item that has a field called *wordField* with a value ending with *ing*.

```cs
var query = new Query(
    Op.EndsWith("wordField", "ing")
);
```

### EqualTo

This would find any item that has a field called *blends* with a value exactly matching *5*. For string fields, the comparison is case-insensitive.

```cs
var query = new Query(
    Op.EqualTo("blends", 5)
);
```

### Exists

In the example any document that has a field called *fieldName* and would be returned. Documents where *fieldName* has some content would also be returned.

You can use a value of *false* if you want documents that do not contain a given field or where the field is empty or null. 

```cs
var query = new Query(
    Op.Exists("fieldName", true)
);
```

### FreeText

In the example the field *synopsis* is searched upon for any words that match *gotham* or *dark* or *knight*.

```cs
var query = new Query(
  Op.FreeText("synopsis", "gotham dark night")
);
```

### GreaterThan

In the example any item that has a field called *first* and a value that is greater than *7* would be returned.

```cs
var query = new Query(
  Op.GreaterThan("first", 7)
);
```

### GreaterThanOrEqualTo

In the example any item that has a field called *first* and a value that is greater than or equal to *7* would be returned.

```cs
var query = new Query(
    Op.GreaterThanOrEqualTo("first", 7)
);
```

### In

In the example any document that where the field *first* is equal to *1*,*7* or *11* would be returned. The values should be of the same type, in this case *integer*.

```cs
var query = new Query(
    Op.In("first", 1, 7, 11)
);
```

### LessThan

In the example any item that has a field called *first* and a value that is less than *7* would be returned.

```cs
var query = new Query(
    Op.LessThan("first", 7)
);
```

### LessThanOrEqualTo

In the example any item that has a field called *first* and a value that is less than or equal to *7* would be returned.

```cs
var query = new Query(
    Op.LessThanOrEqualTo("first", 7)
);
```

### StartsWith

In the example if the *name* field contains a value starting with *war* it would match.

```cs
var query = new Query(
    Op.StartsWith("name", "war")
);
```

### DistanceWithin
In the example any locations within a 10 mile radius of the specified location would match.

```cs
var query = new Query(
    Op.DistanceWithin("location", 52.377, -2.749, "10mi")
);
```
