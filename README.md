# solution

ASSUMPTIONS: 

* Docker or some container runtime engine installed
* Kubernetes cluster already setup

Clone Repo

	git clone  https://github.com/bjayant27/solution.git

**Optional steps if you would like to make changes and push to registry.

build image

	docker build -t my-node-webapp .

push to registry

	docker push <your docker registry/project:tag>

deploy to K8S

   TO RUN AS STANDALONE POD AND SERVICE

   	kubectl apply -f k8s/web-pod.yaml
	kubectl apply -f k8s/web-service.yaml

   TO RUN AS DEPLOYMENT

	kubectl apply -f k8s/web-deploy.yaml
	kubectl apply -f k8s/web-service.yaml
