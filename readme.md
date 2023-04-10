## About

If Phaser is found on the page, you will see `Phaser debug is enabled` message in console, at this point
the injection occurs. Then you will get `Phaser debug is attached` if Game was successfully started.

Extension button on the right side of the screen which will show a list of available scenes & FPS.

## Showcase

![resize_and_move](./readme/resize_and_movable.gif)

![search](./readme/search.gif)

![drag_and_drop](./readme/drag_and_drop.gif)

![scenes](./readme/scenes.png)

![spine](./readme/spine.png)

![image](./readme/image.png)

![container](./readme/container.png)

![text](./readme/text.png)


## Build

Install the project: `npm install`

Chrome: `npm run build-chrome`
Firefox: `npm run build-firefox`

## Installation

### Chrome

1. Open Extension tab `chrome://extensions/`
2. Enable Developer Mode on top right corner
3. Press "Load Unpacked Extension"
4. Choose `dist` project folder
5. Refresh game tab
6. Left top corner you will see "Debug" button

### Firefox

1. Open Debug tab `about:debugging#/runtime/this-firefox`
2. Click on "Load Temporary Add-on"
3. Choose manifest.json inside `dist` project folder
4. Refresh game tab
5. Left top corner you will see "Debug" button

## TODO

1. Fix firefox perfomance issue
2. Add game object search (by name)
3. Add mesh suppport
4. Add tweens support
5. Add button to export game obj data
6. Add section to create new game objects
7. Add section to create new tweens
8. Add time scale into scene
