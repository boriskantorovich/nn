'use client'

interface HelpCardProps {
  title: string;
  imageSrc: string;
  statistic1: { number: string; text: string };
  statistic2: { number: string; text: string };
  description: string;
}

export function HelpCardComponent({ title, imageSrc, statistic1, statistic2, description }: HelpCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-[800px] w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 md:aspect-h-7">
          {/* Replace with actual image component */}
          <img src={imageSrc} alt={title} className="object-cover w-full h-full" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{statistic1.number}</h3>
          <p className="text-base" dangerouslySetInnerHTML={{ __html: statistic1.text }}></p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">{statistic2.number}</h3>
          <p className="text-base" dangerouslySetInnerHTML={{ __html: statistic2.text }}></p>
        </div>
      </div>
      
      <p className="text-base md:text-lg">{description}</p>
    </div>
  )
}