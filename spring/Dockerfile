FROM amazoncorretto:17-alpine

ENV TZ=Europe/Budapest

COPY build/extracted/dependencies .
COPY build/extracted/spring-boot-loader .
COPY build/extracted/snapshot-dependencies .
COPY build/extracted/application .

RUN addgroup -g 1000 spring && adduser -G spring -D -u 1000 spring
USER spring:spring

ENTRYPOINT [ "java", "org.springframework.boot.loader.JarLauncher" ]
