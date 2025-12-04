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
- src/main/resources/application.yaml: logging.level package name
- src/test/java/koffeine: package name

## IDEA

- Run / Edit Configurations...
	- Spring Boot
		- KoffeineApplication
			- Active profiles: `dev`

## Docker

__Build__

```sh
./gradlew clean bootJar
java -Djarmode=tools -jar build/libs/application.jar extract --layers --destination build/extracted
docker build -t spring .
```

__docker run__

```sh
docker run \
	-p 8080:8080 \
	-e spring.profiles.active=dev \
	-e spring.output.ansi.enabled=always \
	--rm \
	spring
```

__compose.yaml__

```yaml
services:
    spring:
        image: spring
        ports:
            - 8080:8080
        environment:
            - spring.profiles.active=dev
            - spring.output.ansi.enabled=always
```
