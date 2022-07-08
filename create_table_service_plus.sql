-- Active: 1657148205325@@127.0.0.1@3306@service_plus_db
USE service_plus_db;

CREATE TABLE clientes (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    cep CHAR(8) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(200) NOT NULL,
    senha VARCHAR(100) NOT NULL
);
CREATE TABLE areas (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE profissionais (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    cep CHAR(8) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(200) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    area_id INT(10) NOT NULL,
    FOREIGN KEY(area_id) REFERENCES areas(id)
);

CREATE TABLE cliente_has_profissionais (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT(10) NOT NULL,
    profissional_id INT(10) NOT NULL,
    FOREIGN KEY(cliente_id) REFERENCES clientes(id),
    FOREIGN KEY(profissional_id) REFERENCES profissionais(id)
);