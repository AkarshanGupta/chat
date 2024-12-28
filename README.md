# Chatverse
Welcome to our innovative chatting website, where communication knows no bounds! Our 
platform offers an array of enticing perks that redefine how people connect and interact 
online. Embracing the essence of real-time conversations, our website provides a seamless 
and user-friendly interface, ensuring a delightful chatting experience for users of all ages. 
Engage in meaningful discussions, share ideas, and build friendships effortlessly. The 
convenience of chatting from any device, be it a smartphone, tablet, or computer, empowers 
you to stay connected on the go. With robust security measures, we prioritize the safety and 
privacy of our users, guaranteeing a secure environment for exchanging thoughts and 
feelings. Our vibrant community fosters inclusivity, bringing together individuals from 
diverse backgrounds to celebrate unity in diversity. Embrace the power of words and embark 
on a journey of discovery and growth with our exceptional chatting website!"

# Objective
* Communication and Interaction: To facilitate seamless and instant communication between users,
  allowing them to exchange messages, thoughts, and ideas in real-time.
* Connectivity: To bridge the gap between people separated by geographical boundaries,
  enabling them to stay connected with friends, family, colleagues, and even make new acquaintances.
* Convenience: To offer a user-friendly interface that allows users to chat easily from various devices,
  such as computers, smartphones, and tablets, enhancing accessibility and convenience.

# Technology
* This site was made using React js Framework and various libraires like Redux , Material ui.
  You can install various React js commands by using thier respective npx/npm commands.
  You can search it online.
* For Database , I have use **firebase** it stores the chats which are send in the website.

# Logo 
![img](https://github.com/AkarshanGupta/chat/assets/115368981/87966dde-0292-45c0-bf28-97bb87636141)

# Login page
![Screenshot 2023-07-29 210437](https://github.com/AkarshanGupta/chat/assets/115368981/dd8747f4-6047-484e-afd8-24f7bcda51f5)

# Website 
![Screenshot 2023-07-29 211108](https://github.com/AkarshanGupta/chat/assets/115368981/1d30e906-f27e-4468-ad6b-c54e4e6c6b09)
![Screenshot 2023-07-29 211249](https://github.com/AkarshanGupta/chat/assets/115368981/9338ef79-3b36-45aa-bdac-6048392840be)

# Thoughts 
* This is my first React js Project.So it is not perfect.
  I tried to add components folder where, I can keep the various file
  for better understanding but it was not working.So,I have named every file different 
  so it is recognizable.

## Dockerize the Project

To make the Chatverse app run in a Docker container, follow these steps:

### Prerequisites

1. Install Docker on your system.
2. Ensure you have the necessary permissions to run Docker commands.

### Dockerfile

Create a `Dockerfile` in the root of your project directory with the following content:

```dockerfile
# Use Node.js 20 Alpine image as base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./ 

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . . 

# Expose the port the React app runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]





