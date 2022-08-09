CREATE TABLE contas_users (
	id_user VARCHAR(255) PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE tasks (
	id_task VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description VARCHAR(255) NULL, 
    limitDate VARCHAR(255),
    creatorUserId VARCHAR(255) NOT NULL,
    FOREIGN KEY (creatorUserId) REFERENCES contas_users(id_user)
);

CREATE TABLE userTask_relation (
	relation_task_id VARCHAR(255),
    relation_creator_id VARCHAR(255),
    FOREIGN KEY (relation_task_id) REFERENCES tasks(id_task),
    FOREIGN KEY (relation_creator_id) REFERENCES contas_users(id_user)
);

SELECT * FROM contas_users;

SELECT * FROM tasks;

SELECT * FROM userTask_relation;