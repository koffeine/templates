FROM amazoncorretto:25-alpine

ENV TZ=Europe/Budapest

WORKDIR /application

COPY build/extracted/dependencies .
COPY build/extracted/spring-boot-loader .
COPY build/extracted/snapshot-dependencies .
COPY build/extracted/application .

RUN addgroup -g 1000 spring && adduser -G spring -D -u 1000 spring
USER spring:spring

ENTRYPOINT [ "java", "-jar", "application.jar" ]
