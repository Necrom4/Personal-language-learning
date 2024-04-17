all: up

up:
	@docker-compose -f ./docker-compose.yml up -d

down:
	@docker-compose -f ./docker-compose.yml down -v

stop:
	@docker-compose -f ./docker-compose.yml stop

start:
	@docker-compose -f ./docker-compose.yml start

status:
	@docker ps

kill:
	@docker system prune -af

run:
	@docker exec -it django /bin/bash

clean:
	@docker-compose -f ./docker-compose.yml down -v
	@docker system prune -af

fclean:
	@docker-compose -f ./docker-compose.yml down -v
	@docker system prune -af
	@rm -rf ./app/*

restart:
	@docker-compose -f ./docker-compose.yml down -v
	@docker system prune -af
	@docker-compose -f ./docker-compose.yml up -d
