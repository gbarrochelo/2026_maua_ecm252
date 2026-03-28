create table tb_tarefa(
    cod_tarefa INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tb_tarefa(titulo, descricao) VALUES
('Ir ao mercado', 'Comprar leite e ovos');

SELECT * FROM tb_tarefa;