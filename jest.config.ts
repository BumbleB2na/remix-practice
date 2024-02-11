export default {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	transform: {
			"^.+\\.test.(tsx|jsx)?$": "ts-jest"
	// process `*.test.tsx` or `*.test.jsx` files with `ts-jest`
	},
	moduleNameMapper: {
			'\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
	},
}