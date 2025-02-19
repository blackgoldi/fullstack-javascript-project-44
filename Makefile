#Makefile

install: 
	@npm ci
brain-games: 
	@node bin/brain-games.js
	@node src/cli.js
brain-even: 
	@node bin/brain-games.js
	@node bin/brain-even.js
brain-calc:
	@node bin/brain-games.js
	@node bin/brain-calc.js
brain-gcd:
	@node bin/brain-games.js
	@node bin/brain-gcd.js
publish:
	@npm publish --dry-run
lint:
	@npx eslint .
rec:
	@clear
	@asciinema rec demo.cast
public_rec:
	@asciinema upload demo.cast