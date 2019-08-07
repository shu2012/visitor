const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001' // Baobab Network 고유 ID
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651' // Baobab TestNET 접속되는 망의 정보
const PRIVATE_KEY = '0x9c469afe25e7fcbe393f6a3f8f9325cc58c5cd613066dab17d6fc4424104433e' // 누가 배포하는가
module.exports = {
  networks: {
    klaytn: {
      provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null, // Baobab Network 에서 자동으로 값 지정
    }
  }
}