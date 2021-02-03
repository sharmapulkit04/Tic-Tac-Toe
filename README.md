# Tic-Tac-Toe

This repository contains a javascript based unbeatable AI bot with to play tic-tac-toe with.
The bot uses minimax algorithm to find out suitable move at its turn.

## Built with -
- HTML
- CSS
- Vanilla Javascript

To play tic-tac-toe download the repo and open page.html using your web browser.

Or you can use docker to run the site on a nginx server. 
Download the Dockerfile and build a docker image using the command
```bat 
docker build -t some-content-nginx . 
```
And then run the container using
```bat
docker run --name some-nginx -d -p 8080:80 some-content-nginx
```

Alternatively,you can run the docker image using-
```bat
docker run --name some-nginx -d -p 8080:80 anarchist04/tic-tac-toe:static-site
```
Now you can access the site by hitting http://localhost:8080/page.html in your browser.


