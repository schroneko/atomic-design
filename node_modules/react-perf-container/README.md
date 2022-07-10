# react-perf-container

A GUI react-addons-perf wrapper to measure a React component's performance

![The controller](./assets/screen-shot.png)
![Print](./assets/screen-shot-print.png)

## Requirement

- React v15
- react-addons-perf v15

## Install

```sh
$ npm install react-perf-container --save-dev
```

## Usage

You can wrap any React component with `withPerf()`.  `withPerf()` receives props and keeps all of them in its state.  When a given action fires to make changes to the state, then the perf container starts performance measurement, passes the updated values to the target React component, and finally stops the measurement.

```js
import withPerf from 'react-perf-container';

const Example = ({ items }) => (
  <ul>
    { items.map(item => <li>{ item.title }: { item.description }</li>) }
  </ul>
);

const Perf = (
  withPerf({
    props: {
      items: [
        { title: 'Item : 1', description: `Item 1 comes here` },
        { title: 'Item : 2', description: `Item 2 comes here` },
      ],
    },
    actions: {
      'Add Item': function (end) {
        const items = this.state.items.concat({ title: 'Item : 3', description: `Item 3 comes here` });
        this.setState({ items }, end);
      }
    },
  })(({ items }) => (
    <Example items={ items } />
  ));
);
```

Then you can use it like an ordinary React component.

```js
<Perf />
```

### Parameters

`withPerf()` takes the following parameters:

| Name | Description | Default Value |
| --- | --- | --- |
| props | A Props object you want to pass to the target React component. | - |
| actions | A collection of functions to make changes to the target React component. | - |
| defaultPrintTypes | A collection of print types with which you want to print actions' performance measurement. | `{ printWasted: true }` |
