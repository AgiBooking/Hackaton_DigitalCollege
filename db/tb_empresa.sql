CREATE TABLE tb_empresa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  cnpj VARCHAR(20),
  endereco_id INT,
  FOREIGN KEY (endereco_id) REFERENCES tb_endereco(id),
  telefone VARCHAR(20),
  email VARCHAR(255)
);

INSERT INTO tb_empresa (nome, cnpj, endereco_id, telefone, email)
 VALUES ('Apibooking', '17.392.063/0001-55', '1', '85 992547788', 'api@gmail.com');
