# Client and Package App
## How to run
0. A Linux based machine is highly recommended!
1. install docker compose on the machine
2. execute `docker-compose build` or `docker compose build` if using the compose plug-in to build the project.
3. execute `docker-compose up` or `docker compose up` if using the compose plug-in to run the project.
4. open browser and go to `http://localhost:5050`

## ER Design
```
Table Client {
	id varchar [primary key]
	first_name varchar
	last_name varchar 
}

Table Package {
	id varchar [primary key]
	name varchar
	client_id varchar
}

Ref: Client.id < Package.client_id
```
![alt text](https://raw.githubusercontent.com/poname/canhs-task/main/blob/erd.png?raw=true)



## Methods
The backend is running on `localhost:8080` and provides the folloing endpoints:

| Methods | Urls | Actions |
| ------------ | ------------ | ------------ |
| GET | /api/client | retrieve all Clients |
| DELETE | /api/client  | delete all Clients, with Cascading effect |
| GET | /api/client/:id  | retrieve a Client by :id |
| DELETE | /api/client/:id  | delete a Client by :id, with Cascading effect |
| POST | /api/client  | create a Client |
| PUT | /api/client/:id  | update a Client by :id |
| GET | /api/package | retrieve all Packages |
| DELETE | /api/package  | delete all Packages, no Cascading effect |
| GET | /api/package/:id  | retrieve a Package by :id |
| DELETE | /api/package/:id  | delete a Package by :id, no Cascading effect |
| GET | /api/package/client/:id  | retrieve all Packages of Client by :id |
| POST | /api/package/client/:id  | create a Package for Client by :id |
| PUT | /api/package/:id  | update a Package by :id |

## Notes
- The backend is implemented with Java and Spring framework. (the `back` folder)
- The databse is based on the H2 SQL database with annotated bootstrapping
- The UI is implemented with Angular 10 running on Nginx. (the `front` folder)
- backend and frontned are containerized using Docker (the `deploy` folder)
- The frontend is inspired from this [repository](https://github.com/RameshMF/Angular10-SpringBoot-CRUD-Tutorialhttp:// "repo")

## Demo
<img src="https://raw.githubusercontent.com/poname/canhs-task/main/blob/demo-clients-1.png?raw=true" width="23%"></img> <img
src="https://raw.githubusercontent.com/poname/canhs-task/main/blob/demo-clients-2.png?raw=true" width="23%"></img> <img src="https://raw.githubusercontent.com/poname/canhs-task/main/blob/demo-clients-3.png?raw=true" width="23%"></img> <img src="https://raw.githubusercontent.com/poname/canhs-task/main/blob/demo-clients-4.png?raw=true" width="23%"></img> <img src="https://raw.githubusercontent.com/poname/canhs-task/main/blob/demo-packages-1.png?raw=true" width="23%"></img> <img src="https://raw.githubusercontent.com/poname/canhs-task/main/blob/demo-packages-2.png?raw=true" width="23%"></img> <img src="https://raw.githubusercontent.com/poname/canhs-task/main/blob/demo-packages-3.png?raw=true" width="23%"></img> <img src="https://raw.githubusercontent.com/poname/canhs-task/main/blob/demo-packages-4.png?raw=true" width="23%"></img>
