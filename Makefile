#Makefile

install: 
	@npm ci
brain-games: 
	@node games/brain-games.js
	@node src/cli.js
brain-even: 
	@node games/brain-games.js
	@node games/brain-even.js
brain-calc:
	@node games/brain-games.js
	@node games/brain-calc.js
brain-gcd:
	@node games/brain-games.js
	@node games/brain-gcd.js
brain-progression:
	@node games/brain-games.js
	@node games/brain-progression.js
brain-prime:
	@node games/brain-games.js
	@node games/brain-prime.js
publish:
	@npm publish --dry-run
lint:
	@npx eslint .
rec:
	@clear
	@asciinema rec demo.cast
public_rec:
	@asciinema upload demo.cast