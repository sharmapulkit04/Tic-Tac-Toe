FROM ubuntu
WORKDIR /game
COPY . .
RUN apt update
RUN apt -y -qq install firefox
CMD firefox page.html