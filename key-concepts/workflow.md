# Workflow

## Overview

An entry's life-cycle is controlled by the workflow assigned to the content type that the entry is based on.

Contensis supports two standard workflows:

- **Basic** - allows content to be authored and then published instantly.
- **Approval** - allows content to be submitted for approval so that it is controlled by an authorised approver before it is made live.

Entries are by default controlled by the *basic* workflow, but this can be changed by specifying a different workflow type in the content type editing screen.

## Invoking events

Workflow events can be invoked using the `Invoke` or `InvokeAsync` methods on the Workflow object.

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
catch(SecurityException secEx)
{
    // The workflow event invoke was not allowed
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

The eventName parameter passed to the `Invoke` methods follows the structure:

`{workflowStateId}.{workflowEventId}`

These are the available events for the supported workflows

### Basic workflow

- authoring.publish

### Approval workflow

- authoring.submit
- awaitingApproval.approve
- awaitingApproval.decline
- awaitingApproval.revoke
- declined.submit

It is possible to only specify the `workflowEventId` i.e. 'approve' or 'submit' and the Management API client will automatically prefix the current state of the entry, but this is less explicit and open to invalid event invocations.

It is important to note certain states have 'sysUpdate' and 'sysDelete' events, which can't be invoked directly through a workflow event invocation, but can be invoked using the Save and Delete methods on the entry. When an entry is in the Published state, calling save (which in-turn invokes sysUpdate) will automatically move the state back to Authoring.

### Specific workflow methods

The .NET Management client has [specific workflow extension methods](/model/workflowExtensions.md) which are essentially shortcuts to the main Workflow.Invoke / Workflow.InvokeAsync methods.

## Event permissions

The invocation of workflow events is controlled by the roles & permissions security API, which can be configured within the Contensis Roles screens. Individual events can be permissioned so that granular control is possible, ensuring each step of a workflow is only invocable by an authorized user. If authorization is denied when invoking a workflow event then a `SecurityException` is raised, detailing the unauthorized access.