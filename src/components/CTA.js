import Link from 'next/link';

export default function CTA({ title, description, buttonText, buttonLink }) {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-white/80">
            {description}
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <Link
            href={buttonLink}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-accent hover:text-white transition-colors duration-200"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
