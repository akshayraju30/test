# FROM ubuntu   
# # EXPOSE 5001 

# # COPY package.json .

# RUN apt update
# RUN apt install -y  nodejs

# RUN apt install -y npm

# #WORKDIR /Home/task

# # COPY ./ ./
# WORKDIR /task
# COPY ./ ./task 
# RUN npm install express
# # RUN node app.js 
# EXPOSE 5001 
# CMD [ "node", "app.js" ] 

# # EXPOSE 5001  

#-----------------------------------
FROM ubuntu   

RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm

WORKDIR /usr/src/app 

COPY package*.json ./



RUN npm install 



COPY . .



CMD [ "node", "app.js" ]



EXPOSE 5001