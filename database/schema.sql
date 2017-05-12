
/* Restrict the todo_name to 255 characters*/
DROP TABLE IF EXISTS todos;
  CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    currentTime TIMESTAMP DEFAULT now(),
    isComplete BOOLEAN DEFAULT FALSE
  );

  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(40),
    password VARCHAR(20)
  );

-- INSERT INTO todos (id,task,isComplete) VALUES (1, 'it works!', true);
-- INSERT INTO todos (id,task,isComplete) VALUES (2, 'here is the next tag!', true);
-- INSERT INTO todos (id,task,isComplete) VALUES (3, 'and lastly!', true);
