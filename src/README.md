    This is base node JS project template, which anyone can use it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

    `src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests.(You might want to make separate tests folder).

    lets taka a look the `src` folder

    - `config` -> Inside this folder anything and everything regarding any configuration or setup of the library and module will be done. For example setting up `dotenv` so that we can use the envrionmental variables anywhere in the project in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup logging library that can help you to prepare meaningful logs, so configuration for this library should be done here.

    - `routes` -> In this folder we registe route and corresponding middleware and controllers to it.

    - `middleware` -> they are just going to intercept the incoming requests where we can write our validators, authentications etc.

    - `controller` -> they are kind of the last middleware as post them you call you business layer to excute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the output API response in controllers and send it to the output.

    - `repositories` -> this folder contains all the logic using which we interact the DB (DataBase) by writing queries, all the raw queries or ORM (Object Relational Mapping) queries will go here.

    - `services` -> this folder contains all the business logic and interacts with repositories for data from database.

    - `utils` -> this folder contains helper methods, error classes, etc.


    ###Setup the Project

    - Download this template from github and open it in your favorite text editor.
    - Go inside the folder path and execute the following command :
   
   ```
        PORT = <Port numbder of your choice>
   ```

    example

   ```
        PORT = 3000
   ```

    - go inside `src` folder and execute the following command:

    ```
        npx sequilize init
    ```

    - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

    - If you are setting up your development envrionmemnt, then write the usdername of your DB, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb, etc.

    -if you are setting up your test and production environment, make sure you also replace the host with the hosted DB url.

    -To run the server execute 

    ```
        npm run dev
    ```

