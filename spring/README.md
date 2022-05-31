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

- Run/Debug Configurations
	- Spring Boot
		- KoffeineApplication
			- Modify options
				- `✓` Disable launch optimization
			- VM options: `-Dspring.config.location=classpath:/ -XX:TieredStopAtLevel=1`
