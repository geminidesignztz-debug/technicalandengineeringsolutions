export default function Stats() {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Satisfied Clients', value: '200+' },
    { label: 'Expert Engineers', value: '20+' },
  ];

  return (
    <div className="bg-primary py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
