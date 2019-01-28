#!/bin/bash
### Maintainer: Mahadi Hasan

STATUS=`docker ps -a | egrep "redis|vue" | awk '{print $1}'`

if [ -n "$STATUS" ];then
	docker ps -a | egrep "redis|vue" | awk '{print $1}'| xargs docker rm -f > /dev/null
fi

SERVICE=$(ps ax | grep -v grep | grep apache2)
if  [ -n "$SERVICE" ];then
	sudo service apache2 stop
fi

docker run -d -h vue \
-v $(pwd):/var/www/html \
-p 8099:8080 \
--name vue csemahadi/php7-docker-image > /dev/null

ip=$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' vue)

echo "####################################################"
echo "#Your site IP address is : $ip"
echo "####################################################"
