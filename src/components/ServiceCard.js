import Link from 'next/link';

export default function ServiceCard({ title, description, href, icon: Icon }) {
  return (
    <Link
      href={href}
      className="block group hover:transform hover:scale-105 transition-transform duration-200"
    >
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
        {Icon && (
          <div className="w-12 h-12 mb-4 text-primary group-hover:text-accent transition-colors duration-200">
            <Icon />
          </div>
        )}
        <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
