## First stage (named "builder")
## Will run your command (using add git as sample) and store the result on "output" file
FROM alpine:latest as builder
RUN apk add git > ./output.log

## Second stage
## Will copy the "output" file from first stage
FROM alpine:latest
COPY --from=builder ./output.log .
RUN cat output.log
CMD []