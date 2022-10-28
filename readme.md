# TALLER DE PROGRAMACION 2
## Instrucciones de resolución del examen recuperatorio

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador backend en nodejs con express y mongodb.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegaras, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del backend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo. 

> 1. Realizar un Fork del presente repositorio
> 2. Realizar un clone del presente repositorio
> 3. Instalar las dependencias
> 4. Solicitar las variables de entorno que contiene la conexion string a mongodb (antes de preguntar, revisa el chat, seguro estan ahí)
> 5. Ejecutar el servidor web de la api REST con el script de npm start-dev si queres trabajar con nodemon (tendrías que instalarlo) con start solo, tambien funciona. 
> El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos **sample_analytics** con las collections llamadas **accounts**, **customers** y **transactions** que contienen las transacciones de 500 clientes.
> 6. Proba el endpoint que ya se encuentra desarrollado: /api/customers debería retornar un json con los 500 clientes. Esta implementado el paginado, aunque es totalmente opcional. Sí por algun motivo no llegase a funcionar, solicita asistencia. 

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
> 1. Necesitamos un endpoint que nos devuelva un cliente  (**customer**) particular por email
> 2. Necesitamos un endpoint que retorne los clientes que tengan al menos 4 cuentas (**accounts**)
> 3. De la otra collectios **accounts** necesitamos conocer las cuentas que tengan un limite de 10.000  
> 4. Necesitamos un listado de los clientes que tienen una cuenta con 10.000 de limite

> ### SI TE DA EL TIEMPO DAME UN MANO TAMBIEN EN...
> 5. Necesitamos conocer todas las transacciones **transactions** que realizo el cliente: **Christopher Watson** en todas sus cuentas 
>
> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, no me gusta mucho las cosas fuera del estandar de APIREST, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

## Intrucciones para la entrega
Si ya terminaste o son las 10:00 asegurate de seguir los siguientes pasos para la entrega:

1. Completar el listado de endpoints, especificando parametros si los hubiera, mas abajo en este mismo archivo.
2. Realizar un commit a tu repo con un mensaje con tu nombre completo
2. Realizar un push a tu repositorio
3. Realizar un pull request a mi repositorio


## Listado de endpoint
-GET /api/customers?pageSize=[pageSize]&page=[page]

Agrego nuevos end points y sus descripciones
> 1. -GET /api/customers/?email=[email]
> 2. -GET /api/customers/more_accounts/[numero].  //Esta dinamico por si en el futuro se precisa obtener clientes con mas o menos cuentas
> 3. -GET /api/accounts/?limit=[limite]   //Esta dinamico por si en el futuro se precisa obtener cuentas con mas o menos limite
> 4. -GET /api/customers/acount_limit/?limit=[limite] //Esta dinamico por si en el futuro se precisa obtener clientes con cuentas con mas o menos limite
> 5. -GET /api/customers/transactions_by_name/[nombre] //Esta dinamico por si en el futuro se precisa obtener transacciones de distintos clientes ademas se detecto usuarios con el mismo nombre por lo cual se le agrego un pequeño manejo de error para avisar de esto se recomienda cambiar a tomarlos por ID o username para evitar este problema




