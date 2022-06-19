require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests()
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
global.ReanimatedDataMock = {
    now: () => Date.now(),
}
