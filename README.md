# useTextFit & fitText

A very simple React Hook and helper function to dynamically adjust the font size of an HTML element to fit its container. It uses a binary search algorithm for efficiency. Works right out of the box.

[View Demo on CodeSandbox](CODESANDBOX_LINK)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
    - [useTextFit](#usetextfit)
    - [fitText](#fittext)
- [Examples](#examples)
- [License](#license)

## Installation

Install the package via npm:

```bash
npm install use-simple-text-fit
```

Or if you prefer yarn:

```bash
yarn add use-simple-text-fit
```

## Usage

### useTextFit

A React Hook to automatically adjust the font size of an HTML element so that it fits its container.

#### Syntax

```tsx
const [ref, fit] = useTextFit(options?, deps?)
```

#### Parameters

- `options`: An object containing `min` and `max` font sizes (optional).
- `deps`: React dependency array for the effect (optional).

#### Return Value

- `ref`: A React ref to be attached to the HTML element.
- `fit`: A function that can be called to manually trigger a resize.

### fitText

A helper function to manually adjust the font size of an HTML element so that it fits its container.

#### Syntax

```tsx
fitText(element, min, max)
```

#### Parameters

- `element`: The HTML element to adjust.
- `min`: Minimum font size.
- `max`: Maximum font size.

## Examples

### Using useTextFit

```tsx
import { useTextFit } from 'use-simple-text-fit';

const MyComponent = () => {
  const [ref, fit] = useTextFit();
  
  // Use fit to trigger a resize manually, or pass a dependency array to useTextFit

  return (
    <div ref={ref}>
      Text to fit
    </div>
  );
}
```

### Using fitText

```tsx
import { fitText } from 'use-simple-text-fit';

const element = document.querySelector('.my-element');
fitText(element, 10, 50);
```

## License

MIT