import http from 'k6/http';

export const options = {
    stages: [
        { duration: '10s', target: 150 }, // Aumenta para 150 VUs
        { duration: '10s', target: 150 }, // Mantém 150 VUs
    ],
};

export default () => {
    http.get('http://localhost/api_sistemas_distribuidos/?n1=10&n2=20');
};
