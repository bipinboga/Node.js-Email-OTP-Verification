require('dotenv/config')
const speakeasy = require('speakeasy')

var verified = speakeasy.totp.verify({
    secret:'(bcqhcv^JaRqNtSo,}5.T@Bgi{SWh6SW',
    encoding: 'ascii',
    token: '525363'
})

console.log(verified)