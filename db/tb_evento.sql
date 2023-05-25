CREATE TABLE tb_evento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES tb_usuario(id),
    sala_id INT,
    FOREIGN KEY (sala_id) REFERENCES tb_sala(id),
    token VARCHAR (50) NOT NULL UNIQUE,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fim TIME NOT NULL,
    quant_participantes INT NOT NULL,
    acessibilidade VARCHAR(250),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME NULL
);

INSERT INTO tb_evento
    (usuario_id, sala_id, token, data_inicio, data_fim, hora_inicio, hora_fim, quant_participantes, acessibilidade)
VALUES
    ('1', '1', '1TESTE', '2023-05-22', '2023-05-22', '09:00:01', '10:00:01', '30', 'espaço com apenas 10 cadeiras para dar espaço para cadeirantes');