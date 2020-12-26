current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
SHELL = /bin/sh

npm/install: ACTION=install
npm/update: ACTION=update
npm/require: ACTION=add $(module)
npm/run: ACTION=$(action)
npm/run: PORT=-p 4000:4000
npm npm/install npm/update npm/require npm/run:
	@docker run --rm $(INTERACTIVE) --volume $(current-dir):/app -w /app $(PORT)  \
		node yarn $(ACTION)

# 🐳 Docker Compose
start: CMD=up -d
dev: CMD=up
stop: CMD=stop
destroy: CMD=down

doco start dev stop destroy:
	@docker-compose $(CMD)
