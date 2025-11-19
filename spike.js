import http from 'k6/http';

export const options = {
    stages: [
        { duration: '5s', target: 5 },   // Ramp-up baixo
        { duration: '1s', target: 500 }, // Pico repentino de 500 VUs
        { duration: '5s', target: 5 },   // Retorno ao normal
    ],
};

export default () => {
    http.get('http://localhost/api_sistemas_distribuidos/?n1=10&n2=20');
};
