import redis
import sys

def check_redis_connection(isLocal:bool=True):
    try:
        
        # Redis bağlantı parametreleri
        redis_client = redis.Redis(
            host= 'localhost' if isLocal else 'redis',
            port=5679 if isLocal else 6379,
            password='mypassword*1xw',
            db=0,
            decode_responses=True
        )
        
        # Bağlantıyı test et
        redis_client.ping()
        print("✅ Redis bağlantısı başarılı!")
        
        # Redis bilgilerini göster
        info = redis_client.info()
        print("\nRedis Sunucu Bilgileri:")
        print(f"Redis Versiyonu: {info['redis_version']}")
        print(f"Bağlı Müşteri Sayısı: {info['connected_clients']}")
        print(f"Kullanılan Bellek: {info['used_memory_human']}")
        
        return True
        
    except redis.ConnectionError:
        print("❌ Redis bağlantısı başarısız! Bağlantı hatası.")
        return False
    except redis.AuthenticationError:
        print("❌ Redis bağlantısı başarısız! Kimlik doğrulama hatası.")
        return False
    except Exception as e:
        print(f"❌ Redis bağlantısı başarısız! Hata: {str(e)}")
        return False


