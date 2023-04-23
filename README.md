# React-Devices

React-Devices is a React library written in TypeScript that provides a customizable MacBook Pro-style device component. This library allows developers to quickly and easily add a realistic MacBook Pro to their React applications.

## Installation

To install React-Devices, use npm:

```
npm install react-devices
```

## Usage

To use React-Devices in your React application, first import the `Mac` component from the library:

```jsx
import { Mac } from 'react-devices';
```

Then, use the `Mac` component in your React application:

```jsx
<Mac
  startup={true}
  animateOpen={false}
  open={true}
  width={800}
  openAngle={110}
>
  {/* Add your content here */}
</Mac>
```

### Props

The `Mac` component accepts the following props:

| Prop | Type | Description |
| --- | --- | --- |
| `startup` | boolean | Determines whether the startup animation is shown. |
| `animateOpen` | boolean | Determines whether the device opens with an animation. |
| `open` | boolean | Determines whether the device is open or closed. |
| `width` | number | The width of the device in pixels. |
| `openAngle` | number | The angle at which the device opens, in degrees. (0 is open, 90 is closed), this is meant for using with scroll animation |
| `children` | ReactNode | The content to be displayed inside the device. |

## Example

Here's an example of how to use the `Mac` component:

```jsx
import React from 'react';
import { Mac } from 'react-devices';

function App() {
  return (
    <div>
      <Mac
        startup={true}
        animateOpen={false}
        open={false}
        width={800}
        openAngle={110}
      >
        <h1>Welcome to my React application!</h1>
      </Mac>
    </div>
  );
}

export default App;
```

## License

React-Devices is licensed under the [MIT License](https://opensource.org/licenses/MIT).