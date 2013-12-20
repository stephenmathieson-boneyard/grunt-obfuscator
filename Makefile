
TESTS ?= $(wildcard test/*.js)

test: node_modules $(TESTS)

$(TESTS):
	@node $@
	@echo "  ✓ $(basename $@)"

node_modules: package.json
	@npm install

.PHONY: test $(TESTS) test_setup
