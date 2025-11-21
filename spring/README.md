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
			- Active profiles: `dev`
