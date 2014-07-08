VERSION := $(shell node -e "console.log(require('./package.json').version)")

.PHONY: default release test

# to prevent a release attempt every time someone runs 'make'
default:
	@echo "Default Make Task"

release:
	@git tag -m "$(VERSION)" v$(VERSION)
	@git push --tags
	@gem build robeaux.gemspec
	@gem push robeaux-$(VERSION).gem
	@npm publish ./

test:
	karma start ./test/karma.conf.js --no-auto-watch --single-run 