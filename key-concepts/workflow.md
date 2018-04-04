---
description: An entry's life-cycle is controlled by the workflow assigned to the content type that the entry is based on.
---
# Workflow

## Overview

An entry's life-cycle is controlled by the workflow assigned to the content type that the entry is based on. Contensis supports two standard built-in workflows types.

### Basic workflow

Allows content to be authored and then published instantly.

![Basic workflow](/images/basic-workflow.png "Basic workflow")

### Approval workflow

Allows content to be submitted for approval so that it is controlled by an authorised approver before it is made live.

![Approval workflow](/images/approval-workflow.png "Approval workflow")

Entries are by default controlled by the *basic* workflow, but this can be changed by specifying a different workflow type in the content type editing screen.

## Workflow specific methods

We have created some [useful workflow extension methods](/model/workflowExtensions.md) which offer shortcuts for events in our standard workflows. Alternatively you can use the more generic Workflow.Invoke / Workflow.InvokeAsync methods.

## Invoking events generically

Workflow events can be invoked using the generic `Invoke` or `InvokeAsync` methods on the Workflow object.

```cs
using Zengenti.Contensis.Management;

// Get a management client
var client = ManagementClient.Create({url}, {clientId}, {sharedSecret});

// Select to relevant project 
var website = client.Projects.Get("movieDb");

// Retrieve an entry
var entry = website.Entries.Get("d69ad539-0e3a-4d7f-9c9d-1fad1b39faad");

// Invoke a workflow event
try
{
    entries.Workflow.Invoke("awaitingApproval.decline",
        new
        {
            message = "Need to work on the last part as it doesn't read very well..."
        }
    );

}
catch(WorkflowException ex)
{
    // Something went wrong invoking the workflow
}
catch(RestException restEx)
{
    // Something went wrong in the service or the entry does not exist
}
catch(Exception)
{
    // Client API issue
}

```

The eventName parameter passed to the `Invoke` methods follows the structure, except for `sysUnpublish`:

`{workflowStateId}.{workflowEventId}`

These are the available events for the supported workflows

### Basic workflow

- draft.publish
- sysUnpublish

### Approval workflow

- draft.submit
- awaitingApproval.approve
- awaitingApproval.decline
- awaitingApproval.revoke
- declined.submit
- sysUnpublish

It is possible to only specify the `workflowEventId` i.e. 'approve' or 'submit' and the Management API client will automatically prefix the current state of the entry, but this is less explicit and open to invalid event invocations.

**If a workflow event is invoked that is not valid for the current state, then a `WorkflowException` will be raised detailing the invalid action.**

It is important to note certain states have 'sysUpdate' and 'sysDelete' events, which can't be invoked directly through a workflow event invocation, but can be invoked using the Save and Delete methods on the entry. When an entry is in the Published state, calling save (which in-turn invokes sysUpdate) will automatically move the state back to Draft.

## Event permissions

The invocation of workflow events is controlled by the roles & permissions security API, which can be configured within the Contensis Roles screens. Individual events can be permissioned so that granular control is possible, ensuring each step of a workflow is only invocable by an authorized user. If authorization is denied when invoking a workflow event then a `AuthorizationException` is raised, detailing the unauthorized access.
