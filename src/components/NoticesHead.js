import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../components/css/Error404.css';

const NoticesHead = () => {
  const [noticias, setNoticias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulação de carregamento de dados do arquivo JSON
    const carregarNoticias = async () => {
      try {
        const response = await fetch('/data/noticias.json');
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error('Erro ao carregar as notícias:', error);
      }
    };

    carregarNoticias();
  }, []);

  const handleNewsClick = (url) => {
    navigate(url); // Navega para a URL da notícia completa
  };

  return (
    <Container>
      <Row>
        <Col lg={6} md={12}>
          <div className="large-square" onClick={() => handleNewsClick('/noticia/grande')}>
            {/* Exibição da imagem da notícia grande */}
            <img
              className="news-image"
              src="caminho_da_imagem_grande"
              alt="Notícia Grande"
              style={{ cursor: 'pointer' }}
            />
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="medium-square" onClick={() => handleNewsClick('/noticia/media')}>
            {/* Exibição da imagem da notícia média */}
            <img
              className="news-image"
              src="caminho_da_imagem_media"
              alt="Notícia Média"
              style={{ cursor: 'pointer' }}
            />
          </div>
        </Col>
        <Col lg={3} md={6}>
          <Row>
            <Col>
              <div className="small-square" onClick={() => handleNewsClick('/noticia/pequena1')}>
                {/* Exibição da imagem da notícia pequena 1 */}
                <img
                  className="news-image"
                  src="caminho_da_imagem_pequena_1"
                  alt="Notícia Pequena 1"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="small-square" onClick={() => handleNewsClick('/noticia/pequena2')}>
                {/* Exibição da imagem da notícia pequena 2 */}
                <img
                  className="news-image"
                  src="caminho_da_imagem_pequena_2"
                  alt="Notícia Pequena 2"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NoticesHead;
