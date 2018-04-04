# Workflow extension methods

Event methods specific to the standard Contensis workflows can be included to make using the API simplier. These are implemented as methods using [extension methods](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods) and can be imported by using the appropriate namespaces for the target workflow.

**Basic workflow**

- [Publish(this Workflow workflow)](#publish)
- [PublishAsync(this Workflow workflow)](#publishasync)
- [Unpublish(this Workflow workflow, bool unpublishAll = false)](#unpublish)
- [UnpublishAsync(this Workflow workflow, bool unpublishAll = false)](#unpublishasync)

**Approval workflow**

- [Submit(this Workflow workflow, string message)](#submit)
- [SubmitAsync(this Workflow workflow, string message)](#submit)
- [Approve(this Workflow workflow)](#approve)
- [ApproveAsync(this Workflow workflow)](#approveasync)
- [Decline(this Workflow workflow, string message)](#decline)
- [DeclineAsync(this Workflow workflow, string message)](#declineasync)
- [Revoke(this Workflow workflow)](#revoke)
- [RevokeAsync(this Workflow workflow)](#revokeasync)
- [Unpublish(this Workflow workflow, bool unpublishAll = false)](#unpublish)
- [UnpublishAsync(this Workflow workflow, bool unpublishAll = false)](#unpublishasync)

<!--
// Commented out until we have 1st class custom workflows in the UI

**Custom workflow**

- [Creating custom extensions](#creating-custom-extensions)
-->

# Basic workflow

Adding the following namespace declaration will add the Publish methods.

```cs
using Zengenti.Contensis.Management.Workflow.Basic;
```

## Publish

Publishes an entry instance for entries in the Contensis basic workflow.

### Syntax

```cs
public static void Publish(this Workflow workflow)
{
}
```

### Return value

> Type: void

### Remarks

On a successful publish, the entry instance is updated with the new version details controlled from the service. A WorkflowException will be thrown if there is any issue with the publish workflow state change. Other exception types could be thrown if there are any data validation issues, unexpected issue in the service or a local exception.

### Example

```cs
// Publish the version of the entry.
entry.Workflow.Publish();
```

---

## PublishAsync

Publishes an entry instance asynchronously for entries in the Contensis basic workflow.

### Syntax

```cs
public async Task PublishAsync(this Workflow workflow)
{
}
```

### Return value

> Type: Task

### Remarks

On a successful publish, the entry instance is updated with the new version details controlled from the service. A WorkflowException will be thrown if there is any issue with the publish workflow state change. Other exception types could be thrown if there are any data validation issues, unexpected issue in the service or a local exception.

### Example

```cs
// Publish the version of the entry.
await entry.Workflow.PublishAsync();
```

# Approval workflow

Adding the following namespace declaration will add the Publish methods.

```cs
using Zengenti.Contensis.Management.Workflow.Approval;
```

## Submit

Submits an entry instance to the awaiting approval state for entries in the Contensis approval workflow.

### Syntax

```cs
public static void Submit(this Workflow workflow, string message = null)
{
}
```

### Parameters

*message*
> Type: string  
> An optional message that can be included with the entry submission

### Return value

> Type: void


### Example

```cs
// Submit the entry for approval.
entry.Workflow.Submit("I've updated the 2nd paragraph to make it clearer");
```

---

## SubmitAsync

Submits an entry instance to the awaiting approval state asynchronously for entries in the Contensis approval workflow.

### Syntax

```cs
public static async Task SubmitAsync(this Workflow workflow, string message = null)
{
}
```

### Parameters

*message*
> Type: string  
> An optional message that can be included with the entry submission

### Return value

> Type: Task

### Example

```cs
// Submit the entry for approval asynchronously.
await entry.Workflow.SubmitAsync("I've updated the 2nd paragraph to make it clearer");
```

---

## Approve

Approves an entry for publishing for entries in the Contensis approval workflow.

### Syntax

```cs
public void Approve(this Workflow workflow)
{
}
```

### Return value

> Type: void


### Example

```cs
// Approve the entry for publishing.
entry.Workflow.Approve();
```

---

## ApproveAsync

Approves an entry for publishing asynchronously for entries in the Contensis approval workflow.

### Syntax

```cs
public async Task ApproveAsync(this Workflow workflow)
{
}
```

### Return value

> Type: Task

### Example

```cs
// Approve the entry instance asynchronously.
await entry.Workflow.ApproveAsync();
```

---

## Decline

Declines an entry submission for entries in the Contensis approval workflow.

### Syntax

```cs
public void Decline(this Workflow workflow, string message = null)
{
}
```

### Parameters

*message*
> Type: string  
> An optional message that can be included to detail the decline reason

### Return value

> Type: void


### Example

```cs
// Decline the entry submission
entry.Workflow.Decline("There are multiple spelling mistakes in the opening paragraph");
```

---

## DeclineAsync

Declines an entry submission for entries in the Contensis approval workflow.

### Syntax

```cs
public async Task DeclineAsync(this Workflow workflow, string message)
{
}
```

### Parameters

*message*
> Type: string  
> An optional message that can be included to detail the decline reason

### Return value

> Type: Task

### Example

```cs
// Decline the entry submission asynchronously.
await entry.Workflow.DeclineAsync("I've updated the 2nd paragraph to make it clearer");
```

---

## Revoke

Revokes an entry submission for entries in the Contensis approval workflow.

### Syntax

```cs
public void Revoke(this Workflow workflow)
{
}
```

### Return value

> Type: void

### Example

```cs
// Revoke the entry submission
entry.Workflow.Revoke();
```

---

## RevokeAsync

Revokes an entry submission for entries asynchronously in the Contensis approval workflow.

### Syntax

```cs
public async Task RevokeAsync(this Workflow workflow)
{
}
```

### Return value

> Type: Task

### Example

```cs
// Revoke the entry submission asynchronously.
await entry.Workflow.RevokeAsync();
```

---

# All workflows

Adding either one of the following namespace declarations will add the Unpublish methods.

```cs
using Zengenti.Contensis.Management.Workflow.Approval;
using Zengenti.Contensis.Management.Workflow.Basic;
```

## Unpublish

Unpublishes an entry

### Syntax

```cs
public void Unpublish(this Workflow workflow, bool unpublishAll = false)
{
}
```

### Parameters

*unpublishAll*
> Type: boolean  
> An optional boolean specifying whether all language variations of the entry should be unpublished too.

### Return value

> Type: void

### Example

```cs
// Unpublish the current entry
entry.Workflow.Unpublish();

// Unpublish all of the language variations for this entry
entry.Workflow.Unpublish(true);
```

---

## UnpublishAsync

Unpublishes an entry asynchronously

### Syntax

```cs
public async Task UnpublishAsync(this Workflow workflow, bool unpublishAll = false)
{
}
```
### Parameters

*unpublishAll*
> Type: boolean  
> An optional boolean specifying whether all language variations of the entry should be unpublished too.

### Return value

> Type: Task

### Example

```cs
// Unpublish the current entry
await entry.Workflow.UnpublishAsync();

// Unpublish all of the language variations for this entry
await entry.Workflow.UnpublishAsync(true);
```

<!--
// Commented out until we have 1st class custom workflows in the UI

## Creating custom extensions

It may be useful to create specific event invocation methods for your own custom workflow to reduce potential mistakes and simplify the use of the API, especially if the code is going to be used in multiple scenarios.

Custom event methods are wrappers of the standard workflow Invoke/InvokeAsync methods. This example demonstrates how additional custom methods can be created:

```cs
using Zengenti.Contensis.Management;

namespace MovieDb.Importer.Workflow
{
    public static class WorkflowExtensions
    {
        /// <summary>
        /// Approve the entry in editorial review
        /// </summary>
        public static void ApproveEditorialReview(this Workflow workflow)
        {
            workflow.Invoke("awaitingTechnicalReview.approve");
        }

        /// <summary>
        /// Approve the entry in editorial review asynchronously
        /// </summary>
        public static async Task ApproveEditorialReviewAsync(this Workflow workflow)
        {
            await workflow.InvokeAsync("awaitingTechnicalReview.approve");
        }

        /// <summary>
        /// Declines the entry in editorial review
        /// </summary>
        public static void DeclineEditorialReview(this Workflow workflow, string reason)
        {

            workflow.Invoke("awaitingTechnicalReview.decline",
                new
                {
                    Message = "reason"
                });
        }

        /// <summary>
        /// Decline the entry in editorial review asynchronously
        /// </summary>
        public static async Task DeclineEditorialReviewAsync(this Workflow workflow, string reason)
        {
            await workflow.InvokeAsync("awaitingTechnicalReview.decline");
        }
    }
}
```

This would this allow the methods to be imported with the namespace.

```cs
using Zengenti.Contensis.Management;
using MovieDb.Importer.Workflow; // Import the extensions

namespace MovieDb.Importer;
{
    public class MovieImporter
    {
        public static void Main()
        {
            var client = ManagementClient.Create({URI}, {ClientId}, {SharedSecret});
            var movieDb = client.Projects.Get("movieDb");

            // Get an entry
            var fightClub = movieDb.Entries.Get("a065a5d2-e665-497c-99c1-caad46389268");

            // Invoke custom events using the extension methods
            fightClub.Workflow.ApproveEditorialReview();

            fightClub.Workflow.DeclineEditorialReview("The 2nd paragraph has spelling mistakes");
        }
    }
}
```
-->