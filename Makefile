.PHONY: bootstrap dev check lint typecheck test clean migrate

bootstrap:
	pnpm install

dev:
	pnpm dev

check: lint typecheck test

lint:
	pnpm -r lint

typecheck:
	pnpm -r typecheck

test:
	pnpm -r test

clean:
	pnpm -r exec rimraf dist node_modules .turbo
