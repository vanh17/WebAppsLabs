lint:
	eslint task.js

lintall:
	eslint task.js task.spec.js

testTask:
	mocha task.spec.js

test: testTask

all: lint test
