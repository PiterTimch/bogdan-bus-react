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

server {
    server_name   transportation.itstep.click *.transportation.itstep.click;
    client_max_body_size 200M;
    location / {
       proxy_pass         http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header   Upgrade $http_upgrade;
       proxy_set_header   Connection keep-alive;
       proxy_set_header   Host $host;
       proxy_cache_bypass $http_upgrade;
       proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header   X-Forwarded-Proto $scheme;
    }
}

systemctl status nginx
systemctl restart nginx
certbot

```