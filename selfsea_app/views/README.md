# Views

The views directory should contain only react-components that are used as a "top-level" view containers. Generally, views can contain the code responsible for fetching data, access the redux state, navigation, and any other "business logic."

Views should have the minimum UI code possible, and should mostly be composed of any number of components defined in the `components` directory.