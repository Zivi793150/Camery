import { useEffect, useState } from "react";
import { ShoppingCart, Eye, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  category: string;
  article?: string;
  image?: string;
  coverPhoto?: string;
  retailPriceUSD?: number;
  wholesalePriceUSD?: number;
  description?: string;
  shortDescription?: string;
  slug?: string;
  categorySlug?: string;
}

interface CatalogSectionProps {
  apiUrl?: string;
  itemsPerPage?: number;
}

export const CatalogSection = ({
  apiUrl = "/api/products",
  itemsPerPage = 12,
}: CatalogSectionProps): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);
  const [usdRate, setUsdRate] = useState(500); // Курс USD/KZT

  // Загрузка курса валют
  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch("/api/rate/usd-kzt");
        const data = await res.json();
        if (data.rate) setUsdRate(data.rate);
      } catch (e) {
        console.log("Using default USD rate");
      }
    };
    fetchRate();
  }, []);

  // Загрузка товаров
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products || data);

        // Извлекаем уникальные категории
        const cats = [
          ...new Set(
            (data.products || data)
              .map((p: Product) => p.category)
              .filter(Boolean)
          ),
        ];
        setCategories(cats as string[]);
      } catch (err) {
        setError("Ошибка загрузки товаров");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [apiUrl]);

  // Фильтрация по категории
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Пагинация
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Конвертация цены в тенге
  const convertToKZT = (usdPrice?: number) => {
    if (!usdPrice) return null;
    const kzt = Math.round(usdPrice * usdRate);
    return kzt.toLocaleString("ru-RU");
  };

  if (loading) {
    return (
      <section className="w-full bg-[#262723] py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <div className="text-white text-xl">Загрузка каталога...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-[#262723] py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <div className="text-[#e36d24] text-xl">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="catalog" className="w-full bg-[#262723] py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[40px] mb-4">
            Каталог товаров
          </h2>
          <p className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white/70 text-lg">
            Видеокамеры, регистраторы и комплектующие для систем безопасности
          </p>
        </div>

        {/* Фильтры категорий */}
        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => {
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-full border transition-all ${
                selectedCategory === "all"
                  ? "bg-[#e36d24] border-[#e36d24] text-white"
                  : "border-[#e36d24] text-[#e36d24] hover:bg-[#e36d24]/10"
              }`}
            >
              Все товары
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full border transition-all ${
                  selectedCategory === cat
                    ? "bg-[#e36d24] border-[#e36d24] text-white"
                    : "border-[#e36d24] text-[#e36d24] hover:bg-[#e36d24]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {paginatedProducts.map((product) => (
            <div
              key={product._id}
              className="bg-[#3e3f3b] border border-[#e36d24]/30 rounded-[20px] overflow-hidden hover:border-[#e36d24] transition-all group"
            >
              {/* Изображение товара */}
              <div className="relative h-[200px] bg-[#262723] overflow-hidden">
                <img
                  src={product.coverPhoto || product.image || "/placeholder.jpg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' fill='%233e3f3b'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23e36d24' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";
                  }}
                />
                {product.article && (
                  <div className="absolute top-3 left-3 bg-[#e36d24] text-white text-xs px-2 py-1 rounded">
                    {product.article}
                  </div>
                )}
              </div>

              {/* Информация о товаре */}
              <div className="p-5">
                <div className="text-[#e36d24] text-sm mb-2">
                  {product.category}
                </div>
                <h3 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-lg mb-3 line-clamp-2">
                  {product.name}
                </h3>

                {product.shortDescription && (
                  <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/60 text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                )}

                {/* Цены */}
                <div className="mb-4">
                  {product.retailPriceUSD ? (
                    <div className="flex flex-col">
                      <span className="text-white/50 text-sm line-through">
                        от {(product.retailPriceUSD * usdRate * 1.2).toLocaleString("ru-RU")} ₸
                      </span>
                      <span className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[#e36d24] text-2xl">
                        от {convertToKZT(product.retailPriceUSD)} ₸
                      </span>
                    </div>
                  ) : (
                    <span className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[#e36d24] text-xl">
                      Цена по запросу
                    </span>
                  )}
                </div>

                {/* Кнопки действий */}
                <div className="flex gap-2">
                  <button className="flex-1 h-12 bg-[#e36d24] rounded-xl [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-sm flex items-center justify-center gap-2 hover:bg-[#ff8c4d] transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    В корзину
                  </button>
                  <button
                    className="w-12 h-12 border border-[#e36d24] rounded-xl flex items-center justify-center text-[#e36d24] hover:bg-[#e36d24]/10 transition-colors"
                    title="Быстрый просмотр"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-[#e36d24] flex items-center justify-center text-[#e36d24] disabled:opacity-30 hover:bg-[#e36d24]/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === page
                    ? "bg-[#e36d24] text-white"
                    : "border border-[#e36d24] text-[#e36d24] hover:bg-[#e36d24]/10"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-[#e36d24] flex items-center justify-center text-[#e36d24] disabled:opacity-30 hover:bg-[#e36d24]/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Итого товаров */}
        <div className="text-center mt-6 text-white/50 text-sm">
          Показано {paginatedProducts.length} из {filteredProducts.length} товаров
        </div>
      </div>
    </section>
  );
};
