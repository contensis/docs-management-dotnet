# Contensis .NET Management API

## Introduction

The Management API has been designed to enable you to create and update content within Contensis as quickly and easily as possible. The API's main purpose is to allow content to be imported into Contensis in a process outside of a website as either a one-off migration or as a scheduled job, although it can be used within a website context if required.

The core Management API is a HTTP RESTful service, exposing content as JSON data and resource files (assets) as text or binary files. The .NET Management Client API is a wrapper to the [HTTP services](https://developer.zengenti.com/contensis/api/management/http/), which simplifies security and data consumption.

## Documentation

This documentation is mainly example-driven with API references to the types.

## Key concepts

* [Get started with the .NET Management API quickstart](getting-started.md)
* [API instantiation](key-concepts/api-instantiation.md)
* [Getting an entry](key-concepts/entry-get.md)
* [Creating an entry](key-concepts/entry-new.md)
* [Linking content](key-concepts/linking-content.md)
* [Invoking workflow events](key-concepts/workflow.md)