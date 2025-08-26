export default function Hero({ title, subtitle, imageUrl, children }) {
  return (
    <div className="relative bg-primary text-white py-16 sm:py-24">
      {imageUrl && (
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  );
}
