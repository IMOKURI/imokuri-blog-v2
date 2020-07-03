.PHONY: install update dev help
.DEFAULT_GOAL := help

install: ## Install yarn packages
	yarn

update: ## Update yarn packages
	yarn upgrade

dev: ## Run test site
	gridsome develop

help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / \
		{printf "\033[38;2;98;209;150m%-15s\033[0m %s\n", $$1, $$2}' \
		$(MAKEFILE_LIST)
