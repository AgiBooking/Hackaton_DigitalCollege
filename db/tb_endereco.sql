CREATE TABLE tb_endereco (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rua VARCHAR(255),
  numero VARCHAR(10),
  cidade VARCHAR(100),
  estado VARCHAR(100),
  pais VARCHAR(100),
  cep VARCHAR(10)
);

INSERT INTO tb_endereco (rua, numero, cidade, estado, pais, cep)
 VALUES ('Rua Gilberto Studart', '55', 'Fortaleza', 'Ceara', 'Brasil', '60824245');