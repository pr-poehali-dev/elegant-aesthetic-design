import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedVersion, setSelectedVersion] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  const logoVersions = [
    {
      id: 1,
      name: 'Одна линия',
      url: 'https://cdn.poehali.dev/projects/b5d36ffb-0f13-431b-94ac-bfa35566f781/files/3b457eb4-7696-4bea-bfc2-1903f0ce82c4.jpg',
      description: 'Непрерывная линия без отрыва, профиль одной стороны лица с цветами'
    },
    {
      id: 2,
      name: 'Мягкие контуры',
      url: 'https://cdn.poehali.dev/projects/b5d36ffb-0f13-431b-94ac-bfa35566f781/files/28b746ec-ea4d-4f25-a08f-43dc9578bdea.jpg',
      description: 'Нежные размытые контуры, наклонённая голова, цветы повторяют линии лица'
    },
    {
      id: 3,
      name: 'Классический',
      url: 'https://cdn.poehali.dev/projects/b5d36ffb-0f13-431b-94ac-bfa35566f781/files/49a6e171-4129-4750-aa1f-436d134fd280.jpg',
      description: 'Сочетание изящности и профессионализма с чёткими контурами'
    },
    {
      id: 4,
      name: 'Акварельный',
      url: 'https://cdn.poehali.dev/projects/b5d36ffb-0f13-431b-94ac-bfa35566f781/files/09965bd2-095b-4c2b-b646-94dd051851c8.jpg',
      description: 'Нежные акварельные переходы с акцентом на цветочные элементы'
    },
    {
      id: 5,
      name: 'Геометрический',
      url: 'https://cdn.poehali.dev/projects/b5d36ffb-0f13-431b-94ac-bfa35566f781/files/bb3579c8-dd62-4411-85eb-cc490771cc5e.jpg',
      description: 'Строгие линии и геометрия для современного образа'
    }
  ];

  const selectedLogo = logoVersions.find(v => v.id === selectedVersion);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDEE2] via-[#E5DEFF] to-[#FDE1D3]">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4 tracking-tight">
            Логотип косметолога
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изящный дизайн с нежными тонами и тёмными акцентами
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-2xl border-2 border-primary/10 animate-scale-in">
              <div 
                className={`relative bg-white rounded-2xl p-12 flex items-center justify-center cursor-zoom-in transition-all duration-300 ${
                  isZoomed ? 'scale-105' : ''
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={selectedLogo?.url}
                  alt={selectedLogo?.name}
                  className="max-w-full h-auto max-h-[600px] object-contain rounded-lg"
                />
                {!isZoomed && (
                  <div className="absolute bottom-4 right-4 bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <Icon name="ZoomIn" size={16} />
                    Нажмите для увеличения
                  </div>
                )}
              </div>
            </Card>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-bold text-primary">Выберите вариант</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {logoVersions.map((version) => (
                  <Card 
                    key={version.id}
                    className={`p-3 cursor-pointer transition-all hover:shadow-lg ${
                      selectedVersion === version.id 
                        ? 'bg-primary/10 border-2 border-primary' 
                        : 'bg-white/60 backdrop-blur-sm hover:bg-white/80'
                    }`}
                    onClick={() => setSelectedVersion(version.id)}
                  >
                    <img 
                      src={version.url} 
                      alt={version.name}
                      className="w-full aspect-square object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-semibold text-center text-primary">{version.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <Card className="p-4 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all">
                <div className="flex items-center gap-3 text-primary">
                  <Icon name="Flower2" size={24} />
                  <div>
                    <p className="font-semibold text-sm">Цветы</p>
                    <p className="text-xs text-muted-foreground">Нежность</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all">
                <div className="flex items-center gap-3 text-primary">
                  <Icon name="Syringe" size={24} />
                  <div>
                    <p className="font-semibold text-sm">Шприц</p>
                    <p className="text-xs text-muted-foreground">Профессионализм</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all">
                <div className="flex items-center gap-3 text-primary">
                  <Icon name="User" size={24} />
                  <div>
                    <p className="font-semibold text-sm">Силуэт</p>
                    <p className="text-xs text-muted-foreground">Элегантность</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Icon name="Palette" size={28} />
                Цветовая палитра
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FFDEE2] border-2 border-primary/20 shadow-sm"></div>
                  <div>
                    <p className="font-medium text-sm">Нежный розовый</p>
                    <p className="text-xs text-muted-foreground">#FFDEE2</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FDE1D3] border-2 border-primary/20 shadow-sm"></div>
                  <div>
                    <p className="font-medium text-sm">Пудровый персик</p>
                    <p className="text-xs text-muted-foreground">#FDE1D3</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#E5DEFF] border-2 border-primary/20 shadow-sm"></div>
                  <div>
                    <p className="font-medium text-sm">Лавандовый</p>
                    <p className="text-xs text-muted-foreground">#E5DEFF</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1A1F2C] border-2 border-primary/20 shadow-sm"></div>
                  <div>
                    <p className="font-medium text-sm">Тёмный акцент</p>
                    <p className="text-xs text-muted-foreground">#1A1F2C</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Icon name="Info" size={28} />
                О логотипе
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {selectedLogo?.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="mt-1 text-primary" />
                  <span>Рисунок одной линией без отрыва</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="mt-1 text-primary" />
                  <span>Профиль только одной стороны лица</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="mt-1 text-primary" />
                  <span>Цветы интегрированы в непрерывную линию</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="mt-1 text-primary" />
                  <span>Минималистичный стиль line art</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl animate-scale-in">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Download" size={24} />
                Готово к использованию
              </h3>
              <p className="text-sm mb-4 opacity-90">
                Логотип создан и готов для применения на визитках, сайте и в социальных сетях
              </p>
              <Button 
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                size="lg"
                onClick={() => window.open(selectedLogo?.url, '_blank')}
              >
                <Icon name="Download" size={20} className="mr-2" />
                Открыть в полном размере
              </Button>
            </Card>
          </div>
        </div>

        <footer className="text-center mt-16 text-primary/60 text-sm">
          <p>Создано с заботой о деталях ✨</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;