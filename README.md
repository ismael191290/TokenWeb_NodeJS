# TokenWeb_NodeJS
  -- instalar npm
npm install
  --- iniciar creardo el archivo .json
npm init 
  -- instalar express y json web token
npm i express jsonwebtoken 


URLs: si lo ejecutas con Postman

  -- obtener token como respuesta
login post : http://localhost:3000/api/login

  -- obtener datos enviando el token
protected get: http://localhost:3000/api/protected add Authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNTM0MzA2MDg0fQ.-arFYOMPwWpRzdNKtx1hDayiXoV4WXhJRElSYlh_wtk
