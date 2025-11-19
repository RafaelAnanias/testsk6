import http from 'k6/http';

export const options = {
    stages: [
        { duration: '5m', target: 30 }, // 5 minutos de teste prolongado
    ],
};

export default () => {
    http.get('http://localhost/api_sistemas_distribuidos/?n1=10&n2=20');
};
