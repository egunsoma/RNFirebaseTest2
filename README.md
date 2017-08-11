## Description
This is a repo to demonstrate a bug described in this [issue](https://github.com/invertase/react-native-firebase/issues/295).

## Info
Beside dependencies included by the `react-native init` command, it has only one additional dependency, which is [react-native-firebase](https://github.com/invertase/react-native-firebase). Only iOS part is configured for this dependency.

Signing method is also modified based on this [video](https://www.youtube.com/watch?v=lfqZ8Uy2p3U&t=105s).

## Run
Execute `npm install`.

### Simulator
Execute `react-native run-ios`.

### Device
Open Xcode and click **RUN**.

## Expected behaviour
**NOT LOADED** string should appear on the middle of the screen, then, after the database query is resolved, a username(soma) should appear.

## Actual behaviour
On Simulator, the username appears, but on physical device only the **NOT LOADED** string appears.
