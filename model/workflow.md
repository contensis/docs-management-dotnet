# Workflow

The Workflow object is readonly and contains information about the current workflow state for the entry. It also includes details about the previous state transition which resulted in the entry being in the current state along with a list of allowed events that can be invoked by the current user based on their permissions.

## Properties

### Workflow

| Name | Type | Description |
| :--- | :--- | :---------- |
| Id | string | The workflow id that controls the entry life-cycle |
| State | string | The id of the state that the entry is currently in |
| AllowedEvents | string[] | The events that can be invoked by the user based on permissions and the current entry state |
| Transition | [WorkflowTransition](#workflow-transition) | Details about the previous workflow transition |

### Workflow Transition

| Name | Type | Description |
| :--- | :--- | :---------- |
| Invoked | DateTime | The datetime that the last transition occurred |
| InvokedBy | string | The username of the user who invoked the last event |
| From | string | The id of the previous workflow state |
| Event | string | The id of the event that was invoked |
| Data | `IDictionary<string, object>` | Data included with the previous workflow invocation |