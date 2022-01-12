import image from './image';

export const upcoming = [
  {
    image: image.BATTERY,
    title: 'Batterie',
    subtitle: "Contrôle d'usure / remplacement",
    distance: 'dans 40 km',
    type: 'default',
  },
  {
    image: image.LIQUID_COOLER,
    title: 'Huile moteur',
    subtitle: 'Remplacement',
    distance: 'dans 40 km',
    type: 'default',
  },
  {
    image: image.EXHAUST,
    title: "Ligne d'échappement",
    subtitle: "Contrôle d'usure / remplacement",
    distance: 'dans 40 km',
    type: 'default',
  },
  {
    image: image.CHASSIS,
    title: 'Chassis',
    subtitle: "Contrôle d'usure",
    distance: 'dans 40 km',
    type: 'default',
  },
];

export const toReplace = [
  {
    image: image.BRAKE_DISC,
    title: 'Disque de frein avant',
    subtitle: "Contrôle d'usure / remplacement",
    distance: 'dans 40 km',
    type: 'critical',
  },
  {
    image: image.LIQUID_COOLER,
    title: 'Liquide de refroidissement',
    subtitle: 'Remplacement',
    distance: 'dans 40 km',
    type: 'warning',
  },
  {
    image: image.AILE,
    title: 'Aile avant droite',
    subtitle: "Contrôle d'usure / remplacement",
    distance: 'dans 40 km',
    type: 'warning',
  },
];
