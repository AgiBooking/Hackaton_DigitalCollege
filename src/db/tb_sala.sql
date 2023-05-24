CREATE TABLE tb_sala (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (50),
    capacidade INT NOT NULL,
    localizacao VARCHAR(255) NOT NULL,
    recursos VARCHAR (255),
    empresa_id INT,
        FOREIGN KEY (empresa_id) REFERENCES tb_empresa(id),
    update_at DATETIME NULL
);


INSERT INTO tb_sala
    (nome, capacidade, localizacao, recursos, empresa_id)
VALUES
    ('STEVE JOBS', 
    '30', 
    '10º ANDAR DIGITAL COLLEGE',
    'CADEIRAS, NOTEBOOK, PROJETOR, WIFI', '1');