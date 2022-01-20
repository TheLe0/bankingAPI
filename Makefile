
start:
	make install

install:
	yarn

setup:
	make install

run-dev:
	make setup
	yarn start:dev

run-prod:
	make setup
	yarn start:prod

tests:
	make setup
	yarn test