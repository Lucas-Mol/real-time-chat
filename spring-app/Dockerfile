FROM alpine:3.16.0

WORKDIR /app

COPY pom.xml .

COPY src ./src

RUN apk add --no-cache maven java-cacerts openjdk17-jdk

RUN mvn clean install

EXPOSE 8080

CMD ["mvn", "spring-boot:run"]