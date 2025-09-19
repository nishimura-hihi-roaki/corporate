import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white font-serif overflow-x-hidden">
      {/* CSS アニメーション */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .hero-bg {
          animation: scaleIn 2s ease-out;
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-wider text-amber-400">
              雅亭
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'rooms', 'cuisine', 'onsen', 'access'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-amber-400 transition-colors duration-300 capitalize"
                >
                  {item === 'home'
                    ? 'ホーム'
                    : item === 'rooms'
                    ? '客室'
                    : item === 'cuisine'
                    ? '料理'
                    : item === 'onsen'
                    ? '温泉'
                    : 'アクセス'}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black/95 transition-all duration-300 ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="px-6 py-4 space-y-4">
            {['home', 'rooms', 'cuisine', 'onsen', 'access'].map(
              (item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-white hover:text-amber-400 transition-all duration-300 capitalize"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {item === 'home'
                    ? 'ホーム'
                    : item === 'rooms'
                    ? '客室'
                    : item === 'cuisine'
                    ? '料理'
                    : item === 'onsen'
                    ? '温泉'
                    : 'アクセス'}
                </button>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1
            className="text-6xl md:text-8xl font-bold mb-6 text-amber-400 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            雅亭
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-white opacity-0 animate-fadeInUp max-w-2xl mx-auto"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            川音が奏でる、心安らぐひととき
          </p>
          <button
            onClick={() => scrollToSection('rooms')}
            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 opacity-0 animate-fadeInUp shadow-lg hover:shadow-xl"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
          >
            客室を見る
          </button>
        </div>
      </section>

      {/* 客室セクション */}
      <section id="rooms" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-400">
            客室
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '川音の間',
                description: '川のせせらぎを聞きながら、くつろぎのひとときを',
                image:
                  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: '山桜の間',
                description: '四季折々の山景色を楽しむ、上品な和室',
                image:
                  'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: '月見の間',
                description:
                  '夜空を見上げる特別な時間を過ごせる露天風呂付き客室',
                image:
                  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
            ].map((room, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('${room.image}')` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-amber-400">
                    {room.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {room.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料理セクション */}
      <section id="cuisine" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-amber-400">料理</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                四季の恵みを活かした会席料理。地元の新鮮な食材と、料理人の技が織りなす、心に残る味わいをお楽しみください。
              </p>
              <p className="text-gray-300 leading-relaxed">
                朝食には、炊きたての土鍋ご飯と、地元の野菜を使った優しい味の料理をご用意しております。
              </p>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* 温泉セクション */}
      <section id="onsen" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 bg-cover bg-center rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
              }}
            ></div>
            <div>
              <h2 className="text-4xl font-bold mb-8 text-amber-400">温泉</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                源泉かけ流しの天然温泉。肌に優しい泉質で、日頃の疲れを癒していただけます。
              </p>
              <p className="text-gray-300 leading-relaxed">
                露天風呂からは四季折々の自然を眺めながら、ゆったりとした時間をお過ごしいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* アクセスセクション */}
      <section id="access" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-400">
            アクセス
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">
                交通案内
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-amber-400 mt-1" size={20} />
                  <div>
                    <p className="font-medium">電車でお越しの場合</p>
                    <p className="text-sm">JR温泉線 湯の里駅より徒歩15分</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-amber-400 mt-1" size={20} />
                  <div>
                    <p className="font-medium">お車でお越しの場合</p>
                    <p className="text-sm">温泉自動車道 湯の里ICより車で10分</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 mt-12 text-amber-400">
                お問い合わせ
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="text-amber-400" size={20} />
                  <span>0123-45-6789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-amber-400" size={20} />
                  <span>info@miyabi-tei.jp</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">住所</h3>
              <p className="text-gray-300 mb-6">
                〒123-4567
                <br />
                温泉県湯の里町1-2-3
                <br />
                雅亭
              </p>
              <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">地図表示エリア</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-amber-400">雅亭</h2>
          <p className="text-gray-400 mb-6">
            心安らぐひととき、忘れられない思い出を
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 雅亭. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;