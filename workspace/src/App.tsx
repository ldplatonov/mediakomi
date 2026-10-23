import { useState, useEffect, useRef, useCallback } from 'react';
import { getRandomApartments, Apartment } from './data/apartments';

type GameState = 'welcome' | 'playing' | 'result';

interface RoundResult {
  apartment: Apartment;
  guessedPrice: number;
  actualPrice: number;
  points: number;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU').format(Math.round(price));
}

function calculatePoints(guessed: number, actual: number): number {
  const diff = Math.abs(guessed - actual) / actual;
  if (diff <= 0.05) return 10;
  if (diff <= 0.10) return 8;
  if (diff <= 0.15) return 6;
  if (diff <= 0.20) return 4;
  if (diff <= 0.30) return 2;
  return 0;
}

function getResultTitle(totalPoints: number, avgDiff: number): { title: string; subtitle: string; emoji: string } {
  if (totalPoints >= 75) {
    return {
      title: 'Опытный инвестор',
      subtitle: 'Вы близки к результату! Отличное чутьё на рынке недвижимости.',
      emoji: '🎯'
    };
  } else if (avgDiff > 0) {
    return {
      title: 'Щедрый инвестор',
      subtitle: 'Вы переплачиваете за недвижимость. Попробуйте быть внимательнее к деталям.',
      emoji: '💰'
    };
  } else {
    return {
      title: 'Скряга',
      subtitle: 'Экономный инвестор. Но иногда стоит платить больше за качество!',
      emoji: '🪙'
    };
  }
}

// ============ WELCOME SCREEN ============
function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-4 py-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto">
        {/* Logo */}
        <div className="w-20 h-20 rounded-2xl bg-[#26CD94] flex items-center justify-center mb-6 shadow-lg shadow-[#26CD94]/20">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">
          Медиа<span className="text-[#26CD94]">коми</span>
        </h1>
        
        <p className="text-slate-300 text-base mb-8 leading-relaxed">
          Симулятор оценки недвижимости. Угадайте цену квартиры по фото и описанию. 
          10 раундов, 100 баллов максимум. Проверьте своё чутьё!
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="px-3 py-1.5 bg-slate-700/50 rounded-full text-xs text-slate-300 border border-slate-600/50">
            🏠 35 квартир
          </span>
          <span className="px-3 py-1.5 bg-slate-700/50 rounded-full text-xs text-slate-300 border border-slate-600/50">
            📊 10 раундов
          </span>
          <span className="px-3 py-1.5 bg-slate-700/50 rounded-full text-xs text-slate-300 border border-slate-600/50">
            🎯 До 100 баллов
          </span>
        </div>

        <button
          onClick={onStart}
          className="w-full max-w-xs py-4 px-8 bg-[#26CD94] hover:bg-[#20b882] text-white font-semibold text-lg rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#26CD94]/25"
        >
          🚀 Запустить игру
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-xs mt-8">
        <p>© 2024 Медиакоми. Данные: Авито</p>
      </footer>
    </div>
  );
}

// ============ GAME SCREEN ============
function GameScreen({ apartments, onFinish }: { apartments: Apartment[]; onFinish: (results: RoundResult[]) => void }) {
  const [currentRound, setCurrentRound] = useState(0);
  const [guessedPrice, setGuessedPrice] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showSliderAnimation, setShowSliderAnimation] = useState(true);
  const sliderRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<RoundResult[]>([]);
  
  const apartment = apartments[currentRound];
  const maxPrice = Math.max(...apartments.map(a => a.price)) * 1.2;
  const minPrice = 0;

  // Slider animation on first load
  useEffect(() => {
    if (showSliderAnimation && sliderRef.current) {
      const mid = (maxPrice * 0.5);
      setGuessedPrice(mid);
      const timer = setTimeout(() => {
        setGuessedPrice(apartment.price * 0.3);
        setShowSliderAnimation(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentRound, showSliderAnimation, apartment.price, maxPrice]);

  // Reset photo index on new round
  useEffect(() => {
    setCurrentPhotoIndex(0);
    setIsAnswered(false);
    setShowSliderAnimation(true);
  }, [currentRound]);

  const handleAnswer = useCallback(() => {
    if (isAnswered) return;
    setIsAnswered(true);
    
    const points = calculatePoints(guessedPrice, apartment.price);
    const newResult: RoundResult = {
      apartment,
      guessedPrice,
      actualPrice: apartment.price,
      points
    };
    resultsRef.current = [...resultsRef.current, newResult];
    setResults(resultsRef.current);
  }, [guessedPrice, apartment, isAnswered]);

  const handleNext = () => {
    if (currentRound < apartments.length - 1) {
      setCurrentRound(prev => prev + 1);
    } else {
      onFinish(resultsRef.current);
    }
  };

  const points = isAnswered ? calculatePoints(guessedPrice, apartment.price) : 0;
  const diff = guessedPrice - apartment.price;
  const isOverpay = diff > 0;
  const totalPoints = results.reduce((s, r) => s + r.points, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-400 text-sm font-medium">
            Раунд {currentRound + 1}/{apartments.length}
          </span>
          <span className="text-[#26CD94] text-sm font-bold">
            ⭐ {totalPoints} баллов
          </span>
        </div>
        {/* Progress bar */}
        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#26CD94] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentRound + (isAnswered ? 1 : 0)) / apartments.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Photo gallery */}
      <div className="px-4 py-3">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800">
          {apartment.photos.length > 0 ? (
            <img
              src={apartment.photos[currentPhotoIndex]}
              alt={`Фото квартиры ${currentPhotoIndex + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              <span className="text-4xl">🏠</span>
            </div>
          )}
          
          {/* Photo dots */}
          {apartment.photos.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {apartment.photos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPhotoIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentPhotoIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Apartment info */}
      <div className="px-4 pb-3">
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50">
          <h2 className="text-white font-semibold text-base mb-1">{apartment.description}</h2>
          <p className="text-slate-400 text-sm">📍 {apartment.street}</p>
          <p className="text-slate-400 text-sm">📐 {apartment.area} м²</p>
        </div>
      </div>

      {/* Price slider */}
      <div className="px-4 pb-3 flex-1">
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50">
          <label className="text-slate-300 text-sm font-medium block mb-3">
            Ваша цена:
          </label>
          <div className="text-center mb-4">
            <span className={`text-3xl font-bold ${isAnswered ? (isOverpay ? 'text-red-400' : 'text-blue-400') : 'text-[#26CD94]'}`}>
              {formatPrice(guessedPrice)} ₽
            </span>
          </div>
          
          <input
            ref={sliderRef}
            type="range"
            min={minPrice}
            max={maxPrice}
            step={1000}
            value={guessedPrice}
            onChange={(e) => setGuessedPrice(Number(e.target.value))}
            disabled={isAnswered}
            className="w-full h-3 bg-slate-700 rounded-full appearance-none cursor-pointer disabled:cursor-not-allowed
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#26CD94] 
              [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#26CD94]/30
              [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
              [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150
              [&::-webkit-slider-thumb]:active:scale-125"
          />
          
          <div className="flex justify-between mt-2 text-xs text-slate-500">
            <span>0 ₽</span>
            <span>{formatPrice(maxPrice)} ₽</span>
          </div>
        </div>
      </div>

      {/* Answer section */}
      <div className="px-4 pb-4">
        {isAnswered ? (
          <div className="space-y-3">
            {/* Result card */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Правильная цена:</span>
                <span className="text-white font-bold text-lg">{formatPrice(apartment.price)} ₽</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Ваш ответ:</span>
                <span className={`font-bold ${isOverpay ? 'text-red-400' : 'text-blue-400'}`}>
                  {formatPrice(guessedPrice)} ₽
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Разница:</span>
                <span className={`font-semibold ${isOverpay ? 'text-red-400' : 'text-blue-400'}`}>
                  {isOverpay ? '+' : ''}{formatPrice(diff)} ₽ ({isOverpay ? 'переплата' : 'недоплата'})
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700 flex items-center justify-between">
                <span className="text-slate-400 text-sm">Баллы за раунд:</span>
                <span className="text-[#26CD94] font-bold text-xl">{points}/10</span>
              </div>
            </div>
            
            <button
              onClick={handleNext}
              className="w-full py-4 bg-[#26CD94] hover:bg-[#20b882] text-white font-semibold text-base rounded-2xl transition-all active:scale-[0.98]"
            >
              {currentRound < apartments.length - 1 ? 'Следующий раунд →' : 'Итоги игры 🏆'}
            </button>
          </div>
        ) : (
          <button
            onClick={handleAnswer}
            className="w-full py-4 bg-[#26CD94] hover:bg-[#20b882] text-white font-semibold text-base rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-[#26CD94]/20"
          >
            Оценить ✓
          </button>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-slate-600 text-xs py-2">
        Медиакоми © 2024
      </footer>
    </div>
  );
}

// ============ RESULT SCREEN ============
function ResultScreen({ results, onRestart }: { results: RoundResult[]; onRestart: () => void }) {
  const totalPoints = results.reduce((s, r) => s + r.points, 0);
  const totalOverpay = results.reduce((s, r) => s + (r.guessedPrice - r.actualPrice), 0);
  const avgDiff = totalOverpay / results.length;
  
  const { title, subtitle, emoji } = getResultTitle(totalPoints, avgDiff);
  
  const totalActual = results.reduce((s, r) => s + r.actualPrice, 0);
  const totalGuessed = results.reduce((s, r) => s + r.guessedPrice, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-8">
      <div className="flex-1 flex flex-col items-center max-w-md mx-auto w-full">
        {/* Result emoji */}
        <div className="text-6xl mb-4 animate-bounce">{emoji}</div>
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-white text-center mb-2">{title}</h1>
        <p className="text-slate-400 text-sm text-center mb-6 leading-relaxed">{subtitle}</p>

        {/* Score card */}
        <div className="w-full bg-slate-800/80 rounded-2xl p-5 border border-slate-700/50 mb-4">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-[#26CD94] mb-1">{totalPoints}</div>
            <div className="text-slate-400 text-sm">из 100 баллов</div>
          </div>
          
          {/* Score bar */}
          <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-[#26CD94] rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${totalPoints}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-700/50 rounded-xl p-3 text-center">
              <div className="text-white font-bold text-lg">{formatPrice(totalActual)}</div>
              <div className="text-slate-400 text-xs">Реальная сумма</div>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-3 text-center">
              <div className={`font-bold text-lg ${totalOverpay > 0 ? 'text-red-400' : 'text-blue-400'}`}>
                {formatPrice(totalGuessed)}
              </div>
              <div className="text-slate-400 text-xs">Ваши оценки</div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-700 text-center">
            <span className={`text-sm font-medium ${totalOverpay > 0 ? 'text-red-400' : 'text-blue-400'}`}>
              {totalOverpay > 0 ? '💸 Переплата' : '💡 Недоплата'}: {formatPrice(Math.abs(totalOverpay))} ₽
            </span>
          </div>
        </div>

        {/* Round details */}
        <div className="w-full bg-slate-800/80 rounded-2xl p-4 border border-slate-700/50 mb-6">
          <h3 className="text-white font-semibold text-sm mb-3">Детализация по раундам:</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {results.map((r, idx) => (
              <div key={idx} className="flex items-center justify-between py-1.5 border-b border-slate-700/50 last:border-0">
                <span className="text-slate-300 text-xs truncate mr-2">
                  #{idx + 1} {r.apartment.rooms}-к. {r.apartment.area}м²
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[#26CD94] text-xs font-bold">{r.points}pt</span>
                  <span className={`text-xs ${r.guessedPrice > r.actualPrice ? 'text-red-400' : 'text-blue-400'}`}>
                    {r.guessedPrice > r.actualPrice ? '↑' : '↓'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restart button */}
        <button
          onClick={onRestart}
          className="w-full max-w-xs py-4 bg-[#26CD94] hover:bg-[#20b882] text-white font-semibold text-base rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-[#26CD94]/25"
        >
          🔄 Играть снова
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-xs mt-6 pb-4">
        <p>© 2024 Медиакоми. Данные: Авито</p>
      </footer>
    </div>
  );
}

// ============ MAIN APP ============
export default function App() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [results, setResults] = useState<RoundResult[]>([]);

  const startGame = () => {
    const selected = getRandomApartments(10);
    setApartments(selected);
    setResults([]);
    setGameState('playing');
  };

  const finishGame = (gameResults: RoundResult[]) => {
    setResults(gameResults);
    setGameState('result');
  };

  const restart = () => {
    setGameState('welcome');
    setResults([]);
    setApartments([]);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen">
      {gameState === 'welcome' && <WelcomeScreen onStart={startGame} />}
      {gameState === 'playing' && apartments.length > 0 && (
        <GameScreen apartments={apartments} onFinish={finishGame} />
      )}
      {gameState === 'result' && <ResultScreen results={results} onRestart={restart} />}
    </div>
  );
}
