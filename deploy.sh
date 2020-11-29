docker build -t generic-pos-cms -f ./DockerFile .
docker run -it -p 8003:80 --rm --name generic-pos-cms -d generic-pos-cms:latest