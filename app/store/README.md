# Store

The store module contains all code related to redux and it's state. For this
application, we are using redux-observable as a way to manage async actions,
and typesafe-actions as a way to make sure our actions have typescript types.

At the top level, there are a few different files.

- `root-action.ts`: This file is our "root action" or the combination of all of
our other redux actions. When we want to add a new feature module to this code,
insert a reasonably named key into the default export, with the value being all
of the actions that feature module exports. See the `user` module for an example.
- `root-epic.ts`: This, like the above file, contains the combination of all of
our redux-observable epics. This time, to add a new module, insert all of the 
epics from that module into array passed to the `combineEpics` function call.
You can easily do this with `Object.values`, and there is an example of how to do
this in the file.
- `root-reducer.ts`: Again, this is the combination of all of our reducers. This
is where we define the top level "shape" of our redux store. Generally, each
feature module should have a new top level redux key, which can be added to the
`combineReducers` call.

## Feature Modules

Each feature module contains it's own reducers, actions, epics, and selectors.
Generally speaking, feature modules should be a subset of the application state
that can be reasonably grouped together. There are a few things to note when
creating a new feature module.

1) Actions should always be defined with the `typesafe-actions` module. This
allows us to make reasonable assumptions elsewhere in the application about the
payloads and types of actions.
2) Reducers should always be defined with the `createReducer` function from the
`typesafe-actions` module. Again, this allows us to utilize typescript fully
throughout the application. The type of the entire redux state will even be
well defined! (See `types.d.ts` for the definitions of the type hints).
3) Epics should always have the `AppEpic` type annotation. This allows the
code in the epic to be typesafe.
4) Selectors should have a `RootState` as their parameter. Again, for type
safety. If a selector needs additional context for it's functionality, it
should be defined as a function with any number of arguments that returns
the selector. For example:
`const selectPostDetails = (postId: string) => (state: RootState) => ...`

