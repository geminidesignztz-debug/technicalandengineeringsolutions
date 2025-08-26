export const services = [
  {
    slug: 'infrared-thermography',
    title: 'Infrared Thermography',
    description: 'Detect thermal anomalies and potential issues before they become problems.',
    image: '/infaredthermography.webp',
    features: [
      'Non-contact temperature measurement',
      'Early fault detection',
      'Preventive maintenance',
      'Energy efficiency analysis',
      'High-resolution thermal imaging',
      'Real-time temperature monitoring'
    ],
    benefits: [
      'Reduce equipment failures',
      'Minimize downtime',
      'Improve safety',
      'Save energy costs',
      'Extend equipment life',
      'Optimize maintenance schedules'
    ],
    applications: [
      'Electrical systems inspection',
      'Mechanical equipment monitoring',
      'Building envelope analysis',
      'HVAC system evaluation'
    ]
  },
  {
    slug: 'power-quality-analysis',
    title: 'Power Quality Analysis',
    description: 'Comprehensive analysis of electrical power systems for optimal performance.',
    image: '/powerqualityanalysis.webp',
    features: [
      'Harmonic analysis',
      'Voltage/current monitoring',
      'Power factor measurement',
      'Transient detection',
      'Load analysis',
      'Energy consumption tracking'
    ],
    benefits: [
      'Optimize system performance',
      'Reduce energy costs',
      'Prevent equipment damage',
      'Ensure regulatory compliance',
      'Improve power reliability',
      'Enhance system efficiency'
    ],
    applications: [
      'Industrial facilities',
      'Commercial buildings',
      'Data centers',
      'Manufacturing plants'
    ]
  },
  {
    slug: 'vibration-analysis',
    title: 'Advanced Vibration Analysis',
    description: 'Identify and diagnose mechanical issues through vibration monitoring.',
    image: '/vibrationalanalysis.webp',
    features: [
      'Real-time monitoring',
      'Frequency analysis',
      'Bearing diagnostics',
      'Alignment checking',
      'Balancing assessment',
      'Trend analysis'
    ],
    benefits: [
      'Extend equipment life',
      'Prevent catastrophic failures',
      'Reduce maintenance costs',
      'Improve reliability',
      'Optimize performance',
      'Increase uptime'
    ],
    applications: [
      'Rotating equipment',
      'Industrial machinery',
      'Pumps and motors',
      'HVAC systems'
    ]
  },
  {
    slug: 'oil-monitoring',
    title: 'Oil Condition Monitoring',
    description: 'Monitor and analyze oil conditions for optimal equipment performance.',
    image: '/Oil Condition Monitoring.webp',
    features: [
      'Particle analysis',
      'Contamination detection',
      'Viscosity testing',
      'Chemical composition analysis',
      'Wear particle monitoring',
      'Real-time oil quality tracking'
    ],
    benefits: [
      'Extend oil life',
      'Protect equipment',
      'Reduce maintenance costs',
      'Optimize performance',
      'Prevent failures',
      'Improve efficiency'
    ],
    applications: [
      'Industrial machinery',
      'Transformers',
      'Hydraulic systems',
      'Gearboxes'
    ]
  },
  {
    slug: 'battery-testing',
    title: 'Battery & Electrical Testing',
    description: 'Comprehensive battery health and electrical system analysis.',
    image: '/Battery Impedance Inspection.webp',
    features: [
      'Impedance measurement',
      'Capacity testing',
      'Load bank testing',
      'Temperature monitoring',
      'Voltage analysis',
      'Internal resistance testing'
    ],
    benefits: [
      'Ensure reliable backup power',
      'Prevent unexpected failures',
      'Extend battery life',
      'Optimize maintenance schedules',
      'Reduce replacement costs',
      'Improve system reliability'
    ],
    applications: [
      'UPS systems',
      'Emergency power systems',
      'Telecommunications',
      'Data centers'
    ]
  },
  {
    slug: 'acoustic-imaging',
    title: 'Acoustic Imaging & Leak Detection',
    description: 'Advanced ultrasound technology for leak detection and system analysis.',
    image: '/Industrial Acoustic Imaging.webp',
    features: [
      'Compressed air leak detection',
      'Vacuum leak testing',
      'Partial discharge detection',
      'Steam trap inspection',
      'Ultrasonic analysis',
      'Real-time visualization'
    ],
    benefits: [
      'Reduce energy waste',
      'Prevent system failures',
      'Improve efficiency',
      'Save operational costs',
      'Enhance safety',
      'Minimize downtime'
    ],
    applications: [
      'Compressed air systems',
      'Steam systems',
      'Vacuum systems',
      'Electrical systems'
    ]
  }
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
