# solution

ASSUMPTIONS: 

* Docker or some container runtime engine installed
* Kubernetes cluster already setup
* Access to GitHub

Clone Repo & checkout solutions/task2 branch

	git clone  https://github.com/bjayant27/solution.git
	git checkout solutions/task2


	
deploy to K8S

	kubectl apply -f k8s/mysql-deploy.yaml
	kubectl apply -f k8s/web-deploy.yaml


Steps to Rollback Deployment to Previous Version

	Suppose version 2.0.0 has been newly deployed and you want to rollback to the previous version, assuming there was one, you can run the below command to rollback the deployment.
	
	kubectl rollout undo deployment.apps/my-node-app

Steps to Scale Deployment (Only for web component)

	kubectl scale deployment my-node-app --replicas=2


**Optional steps if you would like to make changes and push to registry. Replace docker user with your own.

build, tag, push image

	docker build -t bjayant/todoapp:1.0.0 .
	docker tag bjayant/todoapp:1.0.0 bjayant/todoapp:latest
	docker push bjayant/todoapp:latest