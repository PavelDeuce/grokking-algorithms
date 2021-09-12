install: install-deps

page-loader:
	node src/bin/page-loader.js

install-deps:
	npm ci

test:
	npm run test

test-coverage:
	npm run test-coverage

lint:
	npm run lint
