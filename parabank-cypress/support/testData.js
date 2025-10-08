const random3Digits = Math.floor(Math.random() * 900) + 100;

export const customerInfo = {
    firstName: 'Jane',
    lastName: 'Durbin',
    street: 'New York',
    city: 'New York',
    state: 'New York',
    zipCode: '12345',
    phoneNumber: '1234567890',
    ssn: '12345',
    userName: `Jane_${random3Digits}`, // This uses the random number
    password: 'password'
};