# ToastX

To see live demo with examples, goto [https://phploaded.github.io/toastX/](https://phploaded.github.io/toastX/)\
\
ToastX is a lightweight and flexible jQuery-based toast notification plugin designed to display elegant, animated toast messages with customizable options. It supports progress bars, animations, icons, and multiple positions for messages.

## Features

- Multiple toast positions (e.g., `top-left`, `bottom-center`).
- Progress bar with customizable color and optional styling.
- Icons with class-based prefixes for consistent customization.
- Callback functions for creation and closure events.
- Custom animations for entrance and exit.
- Ability to remove all toasts or only those from specific positions.

## Getting Started

### Installation

1. Include jQuery in your project (if not already included):

   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   ```

2. Include the ToastX plugin JavaScript file:

   ```html
   <script src="toastx.js"></script>
   ```

3. Optionally, include a CSS file for toast styling:

   ```html
   <link rel="stylesheet" href="toastx.css">
   ```

### Usage

#### Basic Example

```javascript
$.toastX("Hello, World!");
```

#### Custom Options

```javascript
$.toastX("Custom message", {
    position: "top-right",
    duration: 5000,
    animation: "slide",
    showProgress: true,
    progressBarColor: "#FF4500",
    icon: "check",
    type: "success",
    onCreate: function (toast) {
        console.log("Toast created:", toast);
    },
    onClose: function (toast) {
        console.log("Toast closed:", toast);
    }
});
```

#### Remove Toasts

- Remove all toasts:
  ```javascript
  $.toastX.removeAll();
  ```
- Remove toasts from a specific position:
  ```javascript
  $.toastX.removeAll('top-right');
  ```

## Options

| Option             | Type       | Default         | Description                                                                       |
| ------------------ | ---------- | --------------- | --------------------------------------------------------------------------------- |
| `position`         | `string`   | `bottom-center` | Position of the toast. Options: `top-left`, `top-center`, `top-right`, etc.       |
| `duration`         | `number`   | `3000`          | Duration in milliseconds before the toast disappears.                             |
| `animation`        | `string`   | `none`          | Animation type for entrance/exit.                                                 |
| `showProgress`     | `boolean`  | `true`          | Whether to show a progress bar.                                                   |
| `progressBarColor` | `string`   | `#99FF00`       | Color of the progress bar.                                                        |
| `progressBarClass` | `string`   | `""`            | Additional CSS class for the progress bar.                                        |
| `icon`             | `string`   | `null`          | Icon class prefix (e.g., `check`, `error`). Will be prefixed with `toastx-icon-`. |
| `type`             | `string`   | `""`            | Type of toast for styling purposes (e.g., `success`, `error`).                    |
| `additionalClass`  | `string`   | `""`            | Additional CSS classes for custom styling.                                        |
| `onCreate`         | `function` | `null`          | Callback function when the toast is created.                                      |
| `onClose`          | `function` | `null`          | Callback function when the toast is closed.                                       |
| `onBeforeCreate`   | `function` | `null`          | Callback function before the toast is created.                                    |
| `onBeforeClose`    | `function` | `null`          | Callback function before the toast is closed.                                     |

## Examples

#### Toast with an Icon

```javascript
$.toastX("Success!", {
    icon: "check",
    type: "success",
    position: "top-center"
});
```

#### Toast with a Custom Progress Bar

```javascript
$.toastX("Processing...", {
    showProgress: true,
    progressBarColor: "#FFD700",
    duration: 4000
});
```

#### Remove Toasts from a Specific Position

```javascript
$.toastX.removeAll('bottom-center');
```

## Styling

To style the toasts, you can use the following default classes or create your own:

### Default Classes

- `.toastx-toast`: General toast styling.
- `.toastx-icon`: Icon styling.
- `.toastx-progress`: Progress bar wrapper.
- `.toastx-progress-bar`: Progress bar.
- `.toastx-[type]`: Specific types (e.g., `success`, `error`).

### Example Gradient Backgrounds

```css
.toastx-yellow-bright {
    background-image: linear-gradient(to bottom left, #FFFF99, #FFD700);
}

.toastx-yellow-warm {
    background-image: linear-gradient(to bottom left, #FFDD44, #FFA500);
}
```

## License

This plugin is open-sourced under the [MIT License](LICENSE).

---

Enjoy creating stunning toast notifications with ToastX! Feel free to contribute or report issues on GitHub.

