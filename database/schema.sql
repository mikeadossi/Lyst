
/* Restrict the todo_name to 255 characters*/
DROP TABLE IF EXISTS todos;
  CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    now TIMESTAMP DEFAULT current_time,
    isComplete BOOLEAN DEFAULT FALSE
  );
