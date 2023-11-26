# Client and Package App
## How to run
1. install docker compose on the machine
2. `docker-compose build` or `docker compose build` if using the compose plug-in to build the project.
3. `docker-compose up` or `docker compose up` if using the compose plug-in to run the project.
4. open browser and go to `http://localhost:5050`

## Notes
- The backend is implemented with Java and Spring framework. (the `back` folder)
- The databse is based on the H2 SQL database with annotated bootstrapping
- The UI is implemented with Angular 10 running on Nginx. (the `front` folder)
- backend and frontned are containerized using Docker (the `deploy` folder)
