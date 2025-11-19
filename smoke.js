import http from 'k6/http';

export const options = {
    // 5 Usuários Virtuais (VUs) por 10 segundos
	vus: 5, 
	duration: '10s' 
};

export default () => {
  // Substitua pelo seu endpoint local
  http.get('http://localhost/api_sistemas_distribuidos/?n1=10&n2=20');
};