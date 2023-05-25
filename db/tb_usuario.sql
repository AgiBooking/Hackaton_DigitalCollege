CREATE TABLE tb_usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  sobrenome VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(100) NOT NULL UNIQUE,
  telefone VARCHAR(20),
  img_id INT,
    FOREIGN KEY (img_id) REFERENCES imagens_pg3(id),
  empresa_id INT,  
    FOREIGN KEY (empresa_id) REFERENCES tb_empresa(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at DATETIME NULL
);

INSERT INTO tb_usuario (nome, sobrenome, email, senha, telefone, img_id, empresa_id)
 VALUES ('João', 'Silva', 'joao.silva@gmail.com', '123452678', '85 992547788', '2', '1');
