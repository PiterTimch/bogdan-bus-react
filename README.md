# Full docker setup
# wsl
```
wsl --list --verbose
wsl -d Ubuntu-22.04
```
# docker
```
docker build -t webapi-react-java .

docker run -d --name webapi-front -p 3000:80 webapi-react-java
docker ps

docker tag webapi-react-java pedro007salo/webapi-react-java:latest
docker push pedro007salo/webapi-react-java:latest

```