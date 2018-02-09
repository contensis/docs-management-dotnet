# Workflow

## Overview

An entry's life-cycle is controlled by the workflow assigned to the content type that the entry is based on.

Contensis supports two standard workflows:

- **Basic** - allows content to be authored and then published instantly
- **Approval** - allows content to be submitted for approval so that it is controlled by an authorised approver before it is made live

Entries are by default controlled by the *Contensis Entry basic workflow*, but this can be changed by specifying a different workflow type in the content type editing screen.

## Invoking events

Workflow events can be invoked using the generic `Invoke` method on the Workflow property.

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
    entries.Workflow.Invoke("decline", 
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

### Supported methods

The .NET Management client has [specific entry methods](/model/entry-methods.md) which are essentially shortcuts to the main Workflow.Invoke method.

#### Basic workflow

- Publish()
- PublishAsync();

#### Approval workflow

- Submit(string message)
- SubmitAsync(string message)
- Approve()
- ApproveAsync()
- Decline(string message)
- DeclineAsync(string message)
- Revoke()
- RevokeAsync()

## Event permissioning

The invocation of workflow events is controlled by the roles & permissions security API, which can be configured within the Contensis Roles screens. Individual events can be permissioned so that granular control is possible, ensuring each step of a workflow is only invocable by an authorized user. If authorization is denied when invoking a workflow event then a `SecurityException` is raised, detailing the unauthorized access.