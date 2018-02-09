# Workflow Transition

The WorkflowTransition type contains read-only information about the last workflow event invocation.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Invoked | DateTime | The datetime that the last transition occurred |
| InvokedBy | string | The username of the user who invoked the last event |
| From | string | The id of the previous workflow state |
| Event | string | The id of the event that was invoked |
| Data | IReadonlyDictionary&lt;string, object&gt; | Data included with the previous workflow invocation |