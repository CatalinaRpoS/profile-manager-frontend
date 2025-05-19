# Profile Manager Frontend

**Author:** Catalina Restrepo Salgado

**Tools used:** Vite, React Typescript

## Summary

This repository corresponds to my solution on the technical assesment presented for applying to the Systems Engineerign Intern Position at Factored

Here, you'll fin the web application designed and developed to find and manage easily the corportate profile of workers in the company. You can watch your own profile and the skills you have in a clear, friendly user interface.

## Requirements

This project was dockerized so you can use it easily. You need to install the following tools:

- Docker.
- Docker Compose (optional).

**Note:** I highly recommend you install Docker Compose, the whole proccess of setup and running the project will be faster!

## Instructions

1. **Running Docker Engine**

Once you have installed Docker on your computer, you must run the engine in order to succesfully complete the other steps. Only click on the Docker Desktop Icon you'll fin in the Desktop after the instalation and everything will be ready!

2. **Running the API**

First of all, you need to run [the backend repository](https://github.com/CatalinaRpoS/profile-manager-backend) in order to the web application work properly. Just follow the instructions you'll find there and then, return to the next step.

3. **Make a clon of the repository**

Then, you want to make a copy of this repository on your local machine using the following commands in a console like `cmd` or `bash`.

```bash
git clone https://github.com/CatalinaRpoS/profile-manager-frontend
cd profile-manager-frontend
```

4. **Without Docker Compose:**

If you haven't installed Docker Compose, you must perform the following steps:

- Create an `.env` file in the project with the same information you can find in the `.env.example` file that there's in the repository.

- Open a console and run the following commands:

```bash
docker build -t profile-manager-frontend .
docker run --name frontend-container -p 3000:3000 profile-manager-backend
```

5. **With Docker Compose:**

If you have already installed Docker Compose in your computer, you just need to run the following command in the console of the project.

```bash
docker-compose up --build
```

6. **Running the project**

When you have executed the commands you needed, you'll can access to the application in your web browser going to `http://localhost:3000` route. Since you haven't logged in, you will see the main page first.

## Final considerations

Again, I hope you will find this project interesting and useful, and I will be expecting any suggestion or comment you could give to me.

Thank you, have a nice day!
