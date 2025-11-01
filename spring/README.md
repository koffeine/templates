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

- File / Project Structure...
	- Project Settings
		- Project
			- SDK: `25`
- Run / Edit Configurations...
	- Spring Boot
		- KoffeineApplication
			- VM options: `-Dspring.config.location=classpath:/`
			- Active profiles: `dev`

## Docker

__Build__

```sh
./gradlew clean bootJar
java -Djarmode=tools -jar build/libs/*.jar extract --layers --launcher --destination build/extracted
docker build -t spring .
```

__docker run__

```sh
docker run \
	-p 8080:8080 \
	-e spring.config.location=classpath:/ \
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
            - spring.config.location=classpath:/
            - spring.profiles.active=dev
            - spring.output.ansi.enabled=always
```
