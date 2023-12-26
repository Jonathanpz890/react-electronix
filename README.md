# React ElectroniX

`react-electronix` is a library that provides components to simulate the appearance of devices like iPhones and Macbooks in a React application.

## Installation

You can install `react-electronix` using npm:

```
npm install react-electronix
```

## Usage

### Mac component

The `Mac` component simulates the appearance of a Macbook. It accepts the following props:

| Prop         | Type              | Default | Description                                                                                                                 |
| ------------ | ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| `open`       | boolean           | `true`  | Whether the Macbook is open or closed                                                                                       |
| `width`      | number            | `600`   | The width of the Macbook in pixels                                                                                          |
| `startup`    | boolean           | `false` | Whether to show a startup animation                                                                                         |
| `animateOpen`| boolean           | `false` | Whether to animate the opening/closing of the Macbook                                                                       |
| `openAngle`  | number (degrees)  | `0`     | The angle at which the Macbook opens (0 for fully flat, 90 for fully open)                                                   |
| `children`   | React.ReactNode  |         | The content to display on the Macbook screen                                                                                |

Here's an example usage of the `Mac` component:

```jsx
import { Mac } from 'react-electronix';

function App() {
  return (
    <Mac open={true} width={800} animateOpen={true} startup={true}>
      <h1>Hello, World!</h1>
    </Mac>
  );
}
```

### Iphone component

The `Iphone` component simulates the appearance of an iPhone. It accepts the following props:

| Prop        | Type             | Default | Description                                                         |
| ----------- | ---------------- | ------- | ------------------------------------------------------------------- |
| `width`     | number           | `400`   | The width of the iPhone in pixels                                   |
| `children`  | React.ReactNode |         | The content to display on the iPhone screen (e.g. a mobile website) |

Here's an example usage of the `Iphone` component:

```jsx
import { Iphone } from 'react-electronix';

function App() {
  return (
    <Iphone width={400}>
      <h1>Hello, World!</h1>
    </Iphone>
  );
}
```

## License

This library is licensed under the MIT License.