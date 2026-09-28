export type CategoryType = 'western' | 'ethnic';

export interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  proportion: number;
  usage: string;
  pantone?: string;
  placement?: string;
}

export interface MaterialSpec {
  name: string;
  composition: string;
  weight: string;
  texture: string;
  drape: string;
  color: string;
  hex?: string;
  description?: string;
}

export interface Moodboard {
  title: string;
  description: string;
  image: string;
  keywords: string[];
}

export interface ThemeBoardData {
  title: string;
  themeTagline: string;
  conceptNarrative: string;
  moodKeywords: string[];
  aestheticPillars: { title: string; desc: string }[];
  visualElements: { url: string; caption: string; tag: string }[];
  paletteStory: { name: string; hex: string; emotion: string }[];
  quote: string;
}

export interface InspirationBoardData {
  title: string;
  culturalRoots: string;
  historicalEra: string;
  architecturalArtReferences: { title: string; source: string; notes: string; image?: string }[];
  motifsAndSymbols: { name: string; meaning: string; technique: string }[];
  craftLineage: string;
  visualReferences: { url: string; label: string; context: string }[];
}

export interface GarmentBackdropStyle {
  accentColor: string;
  secondaryAccent: string;
  gradient: string;
  patternType: 'architectural-grid' | 'corduroy-rib' | 'industrial-lattice' | 'minimalist-waves' | 'bandhani-dots' | 'patola-ikat' | 'jaali-lattice' | 'warli-tribal' | 'botanical-leaves';
  ambientGlow: string;
  moodBadge: string;
}

export interface TechFlats {
  front: string;
  back: string;
  annotations: string[];
}

export interface Garment {
  id: string;
  category: CategoryType;
  title: string;
  subtitle: string;
  tagline: string;
  year: string;
  heroImage: string;
  videoUrl?: string;
  galleryImages: string[];
  concept: string;
  inspiration: string;
  moodboard: Moodboard;
  themeBoard?: ThemeBoardData;
  inspirationBoard?: InspirationBoardData;
  backdropStyle?: GarmentBackdropStyle;
  colors: ColorSwatch[];
  materials: MaterialSpec[];
  silhouette: string;
  textileTechniques: string[];
  sketches: string[];
  techFlats: TechFlats;
  developmentNotes: string[];
  garmentDataId?: string;
}

export interface TextileSample {
  id: string;
  title: string;
  technique: string;
  materials: string;
  category: 'manipulation' | 'ornamentation' | 'sustainable' | 'structure';
  description: string;
  image: string;
  detailNotes: string[];
}

export interface SustainabilityStage {
  id: number;
  title: string;
  subtitle: string;
  percentage: string;
  description: string;
  materials: string[];
  image: string;
  metric: {
    label: string;
    value: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  materials: string[];
  image: string;
  milestones: string[];
}

export interface PresentationSlide {
  pageNumber: number;
  sectionId: string;
  sectionTitle: string;
  title: string;
  subtitle: string;
  bodyText: string[];
  quote?: string;
  bulletPoints?: string[];
  heroImage?: string;
  caption?: string;
}
