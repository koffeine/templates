# Koffeine's spring project template

Template for a Spring (Web + Validation) project.

## Usage

```sh
npx degit koffeine/templates/spring <dir>

cd <dir>

git init
git add .
```

## Replace

- settings.gradle: name
- src/main/java/koffeine: package name
- src/main/java/koffeine/KoffeineApplication.java: file/class name
- src/main/java/koffeine/controller/IndexController.java: index method
- src/test/java/koffeine: package name

## IDEA

- Run/Debug Configurations
	- Spring Boot
		- KoffeineApplication
			- VM options: `-Dspring.config.location=classpath:/`
			- Active profiles: `dev`

## Test

```sh
# test unauthenticated endpoint
curl -v localhost:8080

# login
curl -v -X POST -H "Content-Type: application/json" -d '{"username":"user","password":"pass"}' localhost:8080/api/login

# test authenticated endpoint
curl -v --cookie "JSESSIONID=24A220052C3159A80C1F0147C1EBFE8A" localhost:8080

# logout
curl -v -X POST -H "Content-Type: application/json" --cookie "JSESSIONID=24A220052C3159A80C1F0147C1EBFE8A" localhost:8080/api/logout
```
