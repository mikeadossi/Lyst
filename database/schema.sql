
/* Restrict the todo_name to 255 characters*/
DROP TABLE IF EXISTS todos;
  CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    currentTime TIMESTAMP DEFAULT now(),
    isComplete BOOLEAN DEFAULT FALSE
  );

INSERT INTO todos (id,task,isComplete) VALUES (1, 'run', true);
