import {Client} from "@elastic/elasticsearch"

const client = new Client({
  node: 'http://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'myelasticpassword*123'
  }
});

async function testElastiConnection() {
  try {
    const response = await client.ping();
    console.log('Elasticsearch bağlantısı başarılı:', response);
  } catch (error) {
    console.error('Elasticsearch bağlantısı başarısız:', error);
  }
}

export {
    testElastiConnection
}
