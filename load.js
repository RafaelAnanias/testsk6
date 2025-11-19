import http from 'k6/http';

export const options = {
    stages: [
        { duration: '5s', target: 50 },  // Ramp-up para 50 VUs
        { duration: '20s', target: 50 }, // Mantém 50 VUs
        { duration: '5s', target: 0 },   // Ramp-down para 0 VUs
    ],
};

export default () => {
    http.get('http://localhost/api_sistemas_distribuidos/?n1=10&n2=20');
};
