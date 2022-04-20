# solution

ASSUMPTIONS: 

* Docker or some container runtime engine installed
* Kubernetes cluster already setup

Clone Repo

	git clone  https://github.com/bjayant27/solution.git

**Optional steps if you would like to make changes and push to registry.

build, tag & push image

	docker build -t bjayant/my-hello-app:1.0.0 .

	docker tag bjayant/my-hello-app:1.0.0 bjayant/my-hello-app:latest

	docker push <your docker registry/project:tag>

deploy to K8S

	kubectl apply -f k8s/deploy-hello-app.yaml
