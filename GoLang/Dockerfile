FROM golang:1.20-alpine as builder

WORKDIR /go/src

COPY index.go .

RUN go build -o /go/src index.go

FROM scratch

WORKDIR /

COPY --from=builder /go/src .

EXPOSE 8080

ENTRYPOINT ["/index"]