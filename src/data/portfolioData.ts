import { Garment, TextileSample, SustainabilityStage, ProcessStep, PresentationSlide } from '../types';
import regeneratedImageThumb1 from '../assets/images/regenerated_image_1789967583213.jpg';

export const DESIGNER_INFO = {
  name: "Hetvi Kapadia",
  brand: "HK ATELIER",
  role: "Fashion Designer & Material Explorer",
  institution: "Indus University, Ahmedabad",
  degree: "Bachelors in Fashion Designing",
  cgpa: "9.0 CGPA",
  minor: "Sustainable Studies (Grade 9)",
  secondarySchool: "Amicus International School (2021 — 2023, Standard 11th & 12th, 80% in 12th)",
  location: "Ahmedabad, Gujarat, India",
  coordinates: "+ 23°02′N // 72°35′E",
  email: "hetvi8104@gmail.com",
  manifesto: "Fashion is neither purely ornament nor static geometry; it is an architectural carapace that negotiates human movement, ancestral memory, and zero-waste responsibility.",
  bio: "I am Hetvi Kapadia, a passionate fashion design student with a strong interest in experimenting with different concepts, techniques, and design elements. I enjoy exploring creativity through fashion and continuously pushing my ideas beyond conventional boundaries. I am a dedicated and detail-oriented person who prefers completing my work within the given timeline while maintaining quality and creativity. My primary area of interest lies in ethnic wear, where I love combining traditional aesthetics with contemporary design approaches. Through my work, I aim to create designs that reflect innovation, craftsmanship, and cultural elegance while expressing my individuality as a designer.",
  portraitImage: "/assets/hetvi_kapadia_designer_portrait-Bamb8bML.jpg",
  software: ["Procreate", "Illustrator", "Photoshop", "Canva", "Microsoft Office"],
  competencies: ["Draping", "Pattern Making", "Embroidery", "Material Manipulation", "Tailoring", "Zero-Waste Drafting", "Quick Learner"],
  languages: ["Gujarati", "Hindi", "English"],
  workshops: [
    "Calligraphy & Mandala art",
    "Upcycled coconut shell waste (Egai craft)",
    "Upcycled waste newspaper baskets (Wellpaper)",
    "Eco-printing (Yakshi studio) & Cyanotype printing",
    "Kolam rangoli & Paper mache art",
    "Pedilite workshop (pottery)"
  ],
  interests: ["Dancing", "Bharatnatyam (6 yrs)", "Drawing", "Playing", "Travelling", "Styling", "Nail Artist"]
};

export const GARMENTS: Garment[] = [
  {
    id: "proj-w01",
    category: "western",
    title: "THE ROOTED FORM",
    subtitle: "Deconstructed Architectural Trench & Boned Bodice",
    tagline: "Rooted in nature, shaped through tailoring",
    year: "2026",
    heroImage: "/assets/hetvi_look01_structured_sovereign-C3wasELE.jpg",
    galleryImages: [
      "/assets/hetvi_look01_structured_sovereign-C3wasELE.jpg",
      regeneratedImageThumb1,
      "/assets/hetvi_look01_gallery2-BDcaiIrH.jpg",
      "/assets/hetvi_look01_gallery3-xb9wRcOO.jpg"
    ],
    concept: "This blazer and skirt set is inspired by modern urban architecture and sharp feminine tailoring. The asymmetrical cropped blazer with exaggerated lapels creates a bold and structured silhouette, while the fitted mini skirt balances the look with elegance and movement. The monochrome textured fabric reflects sophistication, confidence, and contemporary street-style aesthetics. Metallic grey tones and statement buttons enhance the power-dressing appeal, making the ensemble a fusion of edgy modern fashion and refined craftsmanship. The design represents confidence, individuality, and the strength of modern women in urban spaces.",
    inspiration: "Brutalist architecture in Chandigarh and Ahmedabad, mid-century couture tailoring, and industrial scaffolding.",
    moodboard: {
      title: "Monolithic Rigor & Exposed Framework",
      description: "Chiseled concrete angles, raw seams, tailored canvas pad-stitching, and contrast velvet piping.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
      keywords: ["Exoskeleton", "Architectural Boning", "Deconstructed Trench", "Hourglass Hybrid", "Micro-Check Linen"]
    },
    colors: [
      { 
        name: "Charcoal Grey", 
        hex: "#36454F", 
        rgb: "rgb(54, 69, 79)", 
        proportion: 100, 
        usage: "Entire blazer + skirt",
        pantone: "Approx. 432 C",
        placement: "Main body, sleeves, collar, skirt and all major garment panels"
      }
    ],
    materials: [
      { 
        name: "Micro-Check Linen", 
        composition: "100% Lightweight Linen", 
        weight: "240 GSM", 
        texture: "Fine micro-check surface", 
        drape: "Crisp, structured handle", 
        color: "Charcoal Grey", 
        hex: "#36454F",
        description: "Lightweight linen with a fine micro-check surface, combining natural texture with a crisp, structured handle."
      }
    ],
    silhouette: "Hourglass trench exoskeleton with cinched waist, exaggerated storm flap wings and flared structured peplum drape.",
    textileTechniques: [
      "Layered collar — adds structured depth",
      "Slit sleeves — creates movement and openness",
      "Statement buttons — adds a bold tailored accent"
    ],
    sketches: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    techFlats: {
      front: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
      back: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
      annotations: [
        "Asymmetrical peaked lapel with contrast deep wine binding",
        "6 spiral steel boning channels in velvet channels",
        "Modular storm flap transforming into shoulder capelet",
        "Double-welted angle pockets with antique brass snaps"
      ]
    },
    developmentNotes: [
      "Micro-check linen selected for its crisp structure and natural texture.",
      "Blazer and skirt refined through layered collar and slit-sleeve details.",
      "Root-inspired lines translated into subtle surface detailing."
    ],
    garmentDataId: "western-look-01"
  },
  {
    id: "proj-w02",
    category: "western",
    title: "THE CORDUROY UTILITY CO-ORD",
    subtitle: "Off-Shoulder Utility Jacket & Asymmetrical Mini Skirt",
    tagline: "Contemporary Streetwear Utility Meets Vintage Corduroy Warmth & Bold Asymmetry",
    year: "2026",
    heroImage: "/assets/EPSI6804.JPG",
    galleryImages: [
      "/assets/EPSI6804.JPG",
      "/assets/hetvi_look02_gallery3-046amNvh.jpg"
    ],
    concept: "This look is inspired by contemporary street fashion with a structured yet feminine silhouette. The outfit features a mud corduroy fabric that adds texture, warmth, and a vintage aesthetic. The off-shoulder jacket with utility pockets and detachable-style straps creates an experimental and edgy appeal, while the asymmetrical mini skirt balances the look with a sleek modern finish. The design combines utility detailing with bold styling, making it a statement western wear ensemble suitable for fashion-forward styling and editorial presentation. The earthy tone, structured form, and relaxed drape together represent confidence, individuality, and modern urban fashion.",
    inspiration: "Inspired by 90s workwear and modern deconstructed streetwear. The garment reinterprets classic corduroy dungaree into an off-shoulder, feminine utility dress with exposed suspender straps and cargo details. The mud-yellow tone reflects your earthy palette, blending rugged workwear heritage with soft western sensuality.",
    moodboard: {
      title: "90s Workwear & Modern Streetwear Deconstruction",
      description: "Mud-yellow corduroy texture, exposed suspender straps, utilitarian cargo pockets, and feminine off-shoulder silhouette.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=85",
      keywords: ["90s Workwear", "Corduroy Dungaree", "Off-Shoulder Dress", "Suspender Straps", "Mud-Yellow"]
    },
    colors: [
      { name: "Mud-Yellow", hex: "#9E783D", rgb: "rgb(158, 120, 61)", proportion: 75, usage: "Entire off-shoulder dress body & cargo pockets" },
      { name: "Earthy Ochre", hex: "#7A6335", rgb: "rgb(122, 99, 53)", proportion: 25, usage: "Pocket flap facing, tonal accents & suspender trim" }
    ],
    materials: [
      { name: "Textured Mud-Yellow Corduroy", composition: "100% Cotton", weight: "280 GSM", texture: "Warm ribbed fine-wale velvety pile", drape: "Structured yet relaxed drape", color: "Mud-Yellow", hex: "#9E783D", description: "Fine-wale corduroy in an earthy mud-yellow tone, adding warmth, vintage aesthetic, and rugged workwear heritage." },
      { name: "Exposed Suspender Webbing & Hardware", composition: "Reinforced Cotton Webbing", weight: "210 GSM", texture: "Durable matte utility weave", drape: "Rigid anchor", color: "Gunmetal Obsidian", hex: "#1A1A1A", description: "Exposed dungaree suspender straps with metal sliders and quick-release hardware." }
    ],
    silhouette: "Off-shoulder feminine utility silhouette with exposed suspender straps, cargo pockets, and asymmetrical hemline.",
    textileTechniques: [
      "Wale Play — Vertical corduroy ribs used as natural surface, with contrasting top-stitching on seams.",
      "Utility Detailing — Exposed cargo pockets & suspender buckles as functional surface elements.",
      "Raw Harness Structure — Deconstructed off-shoulder straps with extended bib creating layered texture."
    ],
    sketches: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80"
    ],
    techFlats: {
      front: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
      back: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
      annotations: [
        "Off-shoulder structured neckline with interior stay band",
        "Utility flap cargo pockets with concealed snap closures",
        "Asymmetrical hemline wrap mini skirt with diagonal zip closure"
      ]
    },
    developmentNotes: [
      "Fine-wale mud corduroy selected for its rich surface texture, warmth, and vintage tactile depth.",
      "Off-shoulder utility jacket engineered with ergonomic armhole cutouts and detachable multi-position straps.",
      "Asymmetrical mini skirt balanced with angular panel overlap for a clean, sharp contemporary finish."
    ],
    garmentDataId: "western-look-02"
  },
  {
    id: "proj-w03",
    category: "western",
    title: "THE STRUCTURED LEATHER CORSET",
    subtitle: "Structured Leather Corset Top & Voluminous Mini Skirt",
    tagline: "Industrial Architecture Meets Futuristic Streetwear, Sharp Tailoring & Bold Rebellion",
    year: "2026",
    heroImage: "/assets/hetvi_look03_leather_laceup-2K8W1NJL.jpg",
    galleryImages: [
      "/assets/hetvi_look03_leather_laceup-2K8W1NJL.jpg",
      "/assets/hetvi_look03_gallery1-1y_h9HBP.jpg",
      "/assets/hetvi_look03_gallery2-7YkMO_Za.jpg",
      "/assets/hetvi_look03_gallery3-C_MFkVEm.jpg"
    ],
    concept: "This outfit is inspired by industrial architecture and futuristic street fashion. The structured leather corset top with cut-out details and lace-up sides creates a bold and edgy silhouette, while the voluminous mini skirt adds movement and femininity. Metallic brown and black tones reflect strength, mystery, and modern rebellion. The design combines sharp tailoring with contemporary styling, representing confidence, individuality, and fearless self-expression in an urban environment.",
    inspiration: "Duality of soft femininity vs hard industrial - reimagining western corsetry through deconstructed workwear.",
    silhouette: "Structured form-fitted corset bodice with geometric cut-out details and adjustable lace-up side panels, juxtaposed with a voluminous flared mini skirt.",
    moodboard: {
      title: "Industrial Architecture & Futuristic Streetwear",
      description: "Structured leather corsetry, gunmetal hardware, lace-up side vents, and voluminous skirt movement.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      keywords: ["Industrial Architecture", "Leather Corset", "Lace-Up Details", "Voluminous Mini Skirt", "Urban Rebellion"]
    },
    colors: [
      { name: "Metallic Brown", hex: "#543D2B", rgb: "rgb(84, 61, 43)", proportion: 55, usage: "Structured leather corset body & trim" },
      { name: "Obsidian Black", hex: "#141216", rgb: "rgb(20, 18, 22)", proportion: 45, usage: "Contrast panels, lacing cord & hardware" }
    ],
    materials: [
      { name: "Structured Architectural Leather", composition: "100% Genuine Full-Grain Leather", weight: "320 GSM", texture: "Smooth firm hand with subtle natural grain", drape: "Rigid anatomical contour mold", color: "Metallic Brown", hex: "#543D2B" },
      { name: "High-Density Technical Cotton Twill", composition: "100% Heavy Twill", weight: "280 GSM", texture: "Crisp matte weave", drape: "Holds voluminous sculptural flare", color: "Obsidian Black", hex: "#141216" },
      { name: "Waxed Cotton Lacing & Metal Eyelets", composition: "Reinforced Waxed Cord / Gunmetal", weight: "—", texture: "Tactile industrial hardware", drape: "Firm cinch tension", color: "Obsidian Black", hex: "#141216" }
    ],
    textileTechniques: [
      "Precision leather cut-out pattern engineering",
      "Reinforced gunmetal eyelet setting & cross-lacing channels",
      "Internal spiral steel boning channels for waist contouring",
      "Sculptural box pleating for voluminous mini skirt flare"
    ],
    sketches: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80"
    ],
    techFlats: {
      front: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80",
      back: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
      annotations: [
        "Sweetheart neckline cut-out with reinforced internal spiral steel boning",
        "Adjustable side lace-up panels with reinforced eyelets on brown & black PU",
        "Back lace gap calibrated to 4-inch opening for customized waist cinch",
        "Voluminous box-pleated mini skirt block with crisp architectural flare"
      ]
    },
    developmentNotes: [
      "PATTERN & DRAPING\n• Draped corset on form for sweetheart cut-out\n• Developed box pleat skirt block in 1/4 scale\n• Collar deconstruction test in muslin",
      "MATERIAL TESTING\n• PU rexine heat test - pleats holding at 160°C\n• Eyelet pull test on brown & black PU\n• Lace-up cord tension check for stretch",
      "PROTOTYPE & FIT\n• Toile 01 - fit correction at waist cinch\n• Toile 02 - back lace gap adjusted to 4-inch open\n• Final prototype - hardware finishing + steam press"
    ],
    garmentDataId: "western-look-03"
  },
  {
    id: "proj-w04",
    category: "western",
    title: "NOIR DRAPE — THE SCULPTED KNIT COLUMN DRESS",
    subtitle: "Sleek Strapless Minimalist Knit Column Dress & Body-Contouring Fit",
    tagline: "Draped in confidence, knitted for movement — minimalism that sculpts, not just covers.",
    year: "2026",
    heroImage: "/assets/noir_drape_standing.jpg",
    galleryImages: [
      "/assets/noir_drape_standing.jpg",
      "/assets/noir_drape_sitting.jpg"
    ],
    concept: "This dress is inspired by modern minimalism and timeless elegance. The sleek black silhouette highlights confidence, sophistication, and simplicity through its clean strapless design and body-contouring fit. The monochrome palette creates a bold yet refined aesthetic, while the smooth texture and fluid fall of the fabric add subtle luxury. Designed to embody effortless glamour, the garment reflects strength, femininity, and contemporary evening wear style.",
    inspiration: "Rooted in modern minimalism and 90s bodycon ethos, where fluid knit drape meets timeless black elegance.",
    silhouette: "Clean strapless neckline with a sleek, body-contouring column fit and fluid floor-length fall.",
    moodboard: {
      title: "Modern Minimalism & Monochrome Elegance",
      description: "Sleek black strapless form, monochrome purity, body-contouring drape, and understated evening luxury.",
      image: "/assets/noir_drape_sitting.jpg",
      keywords: ["Modern Minimalism", "Timeless Elegance", "Sleek Black Silhouette", "Strapless Design", "Body-Contouring Fit", "Monochrome Palette", "Effortless Glamour"]
    },
    colors: [
      { name: "Noir Obsidian", hex: "#0F0F10", rgb: "rgb(15, 15, 16)", proportion: 100, usage: "Main strapless body-contouring gown body" }
    ],
    materials: [
      {
        name: "Fabric Identity",
        composition: "90% Polyester / 10% Spandex",
        weight: "260-300 GSM",
        texture: "Plush velvet pile on face with matte knit back",
        drape: "4-way stretch with soft fluid drape, 100% opaque, 58-60\" width",
        color: "Deep Black",
        hex: "#0F0F10",
        description: "Description: Knitted Velvet (Stretch Velvet) - 90% Polyester / 10% Spandex, 260-300 GSM, 58-60\" width, 4-way stretch with soft fluid drape, plush velvet pile on face with matte knit back, 100% opaque."
      },
      {
        name: "Performance & Handling",
        composition: "Low-pile stretch velvet recovery",
        weight: "260-300 GSM",
        texture: "Low-pile velvet with excellent recovery and wrinkle resistance",
        drape: "Clear elastic at strapless top for grip",
        color: "Deep Black",
        hex: "#0F0F10",
        description: "Description: Low-pile velvet with excellent recovery and wrinkle resistance, requires low-heat pressing with pile protection, ballpoint needle 80/12, clear elastic at strapless top for grip, color fastness 4-5 for deep black."
      }
    ],
    textileTechniques: [
      "Clean drape - fabric itself is the design",
      "Heat press bodycon shaping",
      "Matte anti-pilling finish",
      "Laser cut clean neckline",
      "Clear elastic grip - invisible support",
      "No embroidery / print - to retain fluid drape"
    ],
    sketches: [
      "/assets/noir_drape_sitting.jpg",
      "/assets/noir_drape_standing.jpg"
    ],
    techFlats: {
      front: "/assets/noir_drape_standing.jpg",
      back: "/assets/noir_drape_sitting.jpg",
      annotations: [
        "Clean strapless neckline with concealed non-slip silicone stay grip",
        "Precision vertical contour darts following natural feminine silhouette",
        "Floor-skimming column skirt with fluid weighted hem",
        "Concealed invisible center-back zipper with inner grosgrain stay hook"
      ]
    },
    developmentNotes: [
      "Entry 1 - Cutting: Straight grain, flat lay, no tension, 300 GSM ponte knit.",
      "Entry 2 - Sewing: Drape on form, clear elastic at top, 4-thread overlock + coverstitch.",
      "Entry 3 - Finishing: Low heat press with cloth, check recovery, no wavy seams, QC in bright light."
    ],
    garmentDataId: "western-look-04"
  },
  {
    id: "proj-e01",
    category: "ethnic",
    title: "THE HERITAGE WEAVER",
    subtitle: "Modernized Bandhani & Structural Cording Kalidar Anarkali",
    tagline: "Ancestral Gujarati Resist Craft Meets 32-Panel Architectural Flare",
    year: "2026",
    heroImage: "/assets/hetvi_look04_e01_bandhani-DPkLHLn7.jpg",
    galleryImages: [
      "/assets/hetvi_look04_e01_bandhani-DPkLHLn7.jpg",
      "/assets/hetvi_e01_gallery1-De4QJ55i.jpg",
      "/assets/hetvi_e01_gallery2-AkWx_s-d.jpg"
    ],
    concept: "Reinventing Gujarati Bandhani tie-dye through contemporary geometric chevron grids and multi-layered silk dori cording. The kalidar silhouette features 32 parabolic panels cascading from a corded corset bodice.",
    inspiration: "Kutch artisan communities, traditional stepwells (vavs) of Gujarat, and fractal geometry.",
    moodboard: {
      title: "Bandhani Geometries & Hand Dori Cording",
      description: "Micro tie-dye dots, 32 flared panels, sheer balloon sleeves, and deep wine silk accents.",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      keywords: ["Bandhani", "32 Kalis", "Dori Cording", "Chanderi Silk", "Mashru Sateen"]
    },
    colors: [
      { name: "Ivory", hex: "#F7F3EC", rgb: "rgb(247, 243, 236)", proportion: 40, usage: "Chanderi silk base & Bandhani dots" },
      { name: "Deep Wine", hex: "#5A1F2B", rgb: "rgb(90, 31, 43)", proportion: 35, usage: "Bodice & panel joint cording" },
      { name: "Dusty Rose", hex: "#9A6670", rgb: "rgb(154, 102, 112)", proportion: 15, usage: "Organza dupatta ombre dip" },
      { name: "Charcoal", hex: "#262223", rgb: "rgb(38, 34, 35)", proportion: 10, usage: "Boning structure & buttons" }
    ],
    materials: [
      { name: "Chanderi Silk-Cotton", composition: "70% Silk, 30% Fine Cotton", weight: "90 GSM", texture: "Crisp sheer shimmer", drape: "Architectural volume", color: "Ivory", hex: "#F7F3EC" },
      { name: "Mashru Silk Sateen", composition: "Silk face, Cotton back", weight: "160 GSM", texture: "Glossy luminous face", drape: "Medium body", color: "Deep Wine", hex: "#5A1F2B" }
    ],
    silhouette: "Kalidar Anarkali with fitted corded bodice, 32 flared panels, and an asymmetrical architectural dupatta.",
    textileTechniques: [
      "Hand-tied micro Bandhani dots",
      "Raised silk dori cording lattice",
      "Horsehair crinoline bell hem"
    ],
    sketches: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80"
    ],
    techFlats: {
      front: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      back: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80",
      annotations: [
        "Hand-tied micro Bandhani dots forming contemporary chevrons",
        "Extensive surface cording (dori work) along bodice",
        "Layered crinoline horsehair hem creating dramatic 820cm bell flare"
      ]
    },
    developmentNotes: [
      "32 individual kalis graduated from 3cm to 22cm width for seamless parabolic flare.",
      "Natural alum fixative used to lock dye brilliance."
    ],
    garmentDataId: "ethnic-look-01"
  },
  {
    id: "proj-e02",
    category: "ethnic",
    title: "THE PATOLA REBIRTH",
    subtitle: "Upcycled Patola Draped Saree & Armature Blouse",
    tagline: "Upcycling Gujarat’s Legendary Double-Ikat Weave Into Modern Couture",
    year: "2026",
    heroImage: "/assets/hetvi_look05_e02_lehenga-CWe-iGnK.jpg",
    galleryImages: [
      "/assets/hetvi_look05_e02_lehenga-CWe-iGnK.jpg",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
    ],
    concept: "Honoring Gujarat’s legendary double-ikat Patola weaving heritage by upcycling deadstock geometric weave remnants into a modern pre-draped concept saree with a sculpted architectural corset blouse.",
    inspiration: "Patan Patola museum archives, Gujarat temple mandapas, and modernist corset engineering.",
    moodboard: {
      title: "Patan Patola Double-Ikat & Structural Wings",
      description: "Geometric double-ikat fragments, gold couching thread, structured wing collar, and accordion saree pleats.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      keywords: ["Upcycled Patola", "Concept Saree", "Armature Blouse", "Matka Silk", "Gold Couching"]
    },
    colors: [
      { name: "Burgundy", hex: "#722F37", rgb: "rgb(114, 47, 55)", proportion: 40, usage: "Patola scrap geometric motifs" },
      { name: "Warm Beige", hex: "#D8C7B5", rgb: "rgb(216, 199, 181)", proportion: 30, usage: "Raw Matka silk base" },
      { name: "Deep Wine", hex: "#5A1F2B", rgb: "rgb(90, 31, 43)", proportion: 20, usage: "Velvet cummerbund belt" },
      { name: "Off White", hex: "#FCFAF7", rgb: "rgb(252, 250, 247)", proportion: 10, usage: "Tissue lamé lining" }
    ],
    materials: [
      { name: "Authentic Patan Patola Silk Scraps", composition: "100% Double-Ikat Silk", weight: "140 GSM", texture: "Dense geometric weave", drape: "Crisp royal luster", color: "Burgundy & Wine", hex: "#722F37" },
      { name: "Pure Raw Matka Silk", composition: "100% Hand-Spun Silk", weight: "210 GSM", texture: "Natural rich slub", drape: "Holds rigid angles", color: "Warm Beige", hex: "#D8C7B5" }
    ],
    silhouette: "Pre-stitched concept saree with micro-pleated front apron and structured high-neck molded corset blouse.",
    textileTechniques: [
      "Zero-waste deadstock Patola reassembly",
      "Metallic gold zari couching embroidery",
      "Internal 8-piece boned corset foundation"
    ],
    sketches: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80"
    ],
    techFlats: {
      front: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      back: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      annotations: [
        "85 deadstock Patola test strips joined with 0.5mm French seams",
        "Molded high-neck corset blouse with wing shoulders",
        "Deep wine silk velvet cummerbund belt with brass buckle"
      ]
    },
    developmentNotes: [
      "85 deadstock Patola test-strips sorted by color tone, backed with fusible organza.",
      "Saree pallu is pre-pleated with hidden shoulder anchor tabs to prevent slippage."
    ],
    garmentDataId: "ethnic-look-02"
  },
  {
    id: "proj-e03",
    category: "ethnic",
    title: "NEEL - The Jaali Muse",
    subtitle: "Floral Printed Crop Blouse & Sunburst Pleated Georgette Skirt",
    tagline: "Where heritage jaali meets free-flowing femininity.",
    year: "2026",
    heroImage: "/assets/hetvi_look06_e03_paisley-fKLwFFKf.jpg",
    galleryImages: [
      "/assets/hetvi_look06_e03_paisley-fKLwFFKf.jpg",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1200&q=85"
    ],
    concept: "Inspired by the elegance of evening gardens and flowing silhouettes, this ensemble combines traditional prints with modern fluidity. The printed structured bodice adds richness and artistic detail, while the deep indigo pleated skirt creates graceful movement and softness. The design reflects confidence, femininity, and timeless charm through its balance of vibrant patterns and delicate drapes. With its fusion of contemporary styling and ethnic inspiration, the garment captures a dreamy and sophisticated aesthetic.",
    inspiration: "Inspired by traditional Indian jali architecture and coastal indigo prints, reimagined for 2026 ethnic silhouette.",
    moodboard: {
      title: "Jaali Muse & Indigo Flora",
      description: "Indigo floral Pichwai prints on cotton satin, deep navy sunburst micro-pleating, and structured crop-and-ghagra drape.",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      keywords: ["Jaali Muse", "Floral Print", "Pichwai Motif", "Sunburst Pleats", "Navy Georgette", "Cotton Satin"]
    },
    colors: [
      { name: "Navy Blue", hex: "#132238", rgb: "rgb(19, 34, 56)", proportion: 50, usage: "Pleated georgette 5-meter flare skirt" },
      { name: "Blue Floral Indigo", hex: "#2A4B7C", rgb: "rgb(42, 75, 124)", proportion: 35, usage: "Printed cotton satin crop blouse" },
      { name: "Soft Ecru", hex: "#F8F6F0", rgb: "rgb(248, 246, 240)", proportion: 15, usage: "Floral print highlights & inner finishing" }
    ],
    materials: [
      {
        name: "Upper - Blouse: Blue Floral Printed Cotton Satin",
        composition: "100% Cotton Satin, 120 GSM",
        weight: "120 GSM",
        texture: "Soft sheen, structured yet breathable",
        drape: "Structured hold for tailored crop blouse",
        color: "Blue Floral Print",
        hex: "#2A4B7C"
      },
      {
        name: "Lower - Skirt: Navy Blue Pleated Georgette",
        composition: "100% Fine Pleated Georgette, 60 GSM",
        weight: "60 GSM",
        texture: "Light, airy sunburst micro-pleats",
        drape: "5 meters flare with fluid graceful movement",
        color: "Navy Blue",
        hex: "#132238"
      }
    ],
    silhouette: "Structured crop blouse in blue floral cotton satin, paired with an ankle-length navy blue pleated georgette skirt with 5 meters flare.",
    textileTechniques: [
      "Digital Floral Printing — White & blue indigo bloom print on blouse - gives vintage Pichwai feel.",
      "Micro Sunburst Pleating — Full 360° pleats in navy skirt - creates flow and sheer elegance.",
      "Structured Draping — Fitted crop top + high-waist ghagra drape - balances print and plain for ethnic modern look."
    ],
    sketches: [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
    ],
    techFlats: {
      front: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80",
      back: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      annotations: [
        "Structured crop blouse with fitted bust darts and concealed side zip",
        "High-waisted waistband with reinforced support for full ghagra drape",
        "Full 360° sunburst micro-pleating yielding 5 meters hem circumference"
      ]
    },
    developmentNotes: [
      "Engineered digital placement of blue and white indigo bloom motifs on cotton satin for a vintage Pichwai look.",
      "Precision heat-set micro sunburst pleating on 60 GSM georgette ensuring 5-meter effortless circular flare."
    ],
    garmentDataId: "ethnic-look-03"
  },
  {
    id: "proj-e04",
    category: "ethnic",
    title: "WARLI ECHO - Painted & Mirror Vest Set",
    subtitle: "Painted & Mirror Vest Set",
    tagline: "A denim street meets tribal soul through hand-painted Warli and mirror work on malmal printed cotton.",
    year: "2026",
    heroImage: "/assets/IMG_6787.jpg",
    galleryImages: [
      "/assets/IMG_6787.jpg",
      "/assets/hetvi_e01_gallery1-De4QJ55i.jpg",
      "/assets/hetvi_e01_gallery2-AkWx_s-d.jpg"
    ],
    concept: "This outfit is inspired by contemporary street fashion blended with tribal art elements. The hand-painted motifs, geometric patterns, and mirror detailing create a bold artistic expression, while the denim base adds a modern and casual appeal. The cropped jacket and embroidered jeans reflect individuality, freedom, and youthful energy. Designed with a fusion of traditional craft and urban styling, the garment celebrates creativity, culture, and self-expression in everyday fashion.",
    inspiration: "Rooted in Maharashtra's Warli tribe art - translating rural folk stories to contemporary denim.",
    silhouette: "Structured sweetheart-cut corset blouse with boned panel contouring, paired with an ankle-length high-waisted flowy flared skirt in pure ivory.",
    moodboard: {
      title: "Artisanal Bohemia & Modern Softness",
      description: "Vibrant ethnic block-printed motifs, structured boned corset bodice, sweeping fluid white georgette layers, and delicate handcrafted tasseled trims.",
      image: "/assets/hetvi_e01_gallery2-AkWx_s-d.jpg",
      keywords: ["Bohemian Ethnic", "Corset Blouse", "Flowy White Skirt", "Block Print", "Artisanal Contouring", "Handcrafted Textures"]
    },
    colors: [
      { name: "Deep Indigo Denim Blue", hex: "#1B2A4A", rgb: "rgb(27, 42, 74)", proportion: 35, usage: "Structured denim waistcoat base & front panels" },
      { name: "Ecru Silk White", hex: "#F8F6F0", rgb: "rgb(248, 246, 240)", proportion: 30, usage: "Fluid voluminous tiered skirt & painted Warli motifs" },
      { name: "Vibrant Multi-Print Crimson", hex: "#9B2226", rgb: "rgb(155, 34, 38)", proportion: 20, usage: "Hand-printed malmal cotton accents & border trim" },
      { name: "Turmeric Ochre", hex: "#E9B44C", rgb: "rgb(233, 180, 76)", proportion: 10, usage: "Warli folk embroidery, piping & geometric highlights" },
      { name: "Reflective Mirror Silver", hex: "#C5C9D1", rgb: "rgb(197, 201, 209)", proportion: 5, usage: "Handcrafted authentic abhala mirror-work detailing" }
    ],
    materials: [
      { name: "Deep Indigo Washed Denim", composition: "100% Cotton Denim", weight: "280 GSM", texture: "Durable twill weave with soft washed hand", drape: "Structured architectural hold", color: "Deep Indigo Denim Blue", hex: "#1B2A4A", description: "Modern dark blue denim base providing structured street silhouette for tribal folk craft." },
      { name: "Handcrafted Malmal Printed Cotton", composition: "100% Pure Malmal Cotton", weight: "85 GSM", texture: "Fine breathable hand-block print", drape: "Soft and pliable", color: "Crimson Multi-Print", hex: "#9B2226", description: "Artisanal printed malmal cotton adorned with hand-painted Warli folk motifs and mirror work." },
      { name: "Flowy Multi-Tiered Georgette", composition: "100% Fine Georgette", weight: "65 GSM", texture: "Subtle pebbled fluid weave", drape: "Ethereal cascading movement", color: "Ecru Silk White", hex: "#F8F6F0", description: "Lightweight tiered georgette creating dramatic swirling flare in motion." },
      { name: "Organic Mulmul Cotton Lining", composition: "100% GOTS Cotton", weight: "80 GSM", texture: "Breathable ultra-soft hand", drape: "Smooth inner skin barrier", color: "Soft Ivory", hex: "#FAF7F2", description: "Breathable internal waistcoat lining for comfort during all-day wear." }
    ],
    textileTechniques: [
      "Traditional wooden block printing executed with azo-free mineral pigments",
      "Multi-channel spiral boning insertion for ergonomic waist cinching",
      "Tiered full circular flare drafting with micro hand-rolled hems",
      "Handmade silk dori piping along neckline and corset seamlines"
    ],
    sketches: [
      "/assets/hetvi_e01_gallery1-De4QJ55i.jpg",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80"
    ],
    techFlats: {
      front: "/assets/hetvi_e01_gallery1-De4QJ55i.jpg",
      back: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      annotations: [
        "Contoured sweetheart neckline with piped cotton-silk border",
        "6 internal lightweight boning channels supporting front and side panels",
        "Concealed side zipper closure with inner security hook",
        "High-waisted elasticized back waistband on tiered full-flare skirt"
      ]
    },
    developmentNotes: [
      "Draped the sweetheart corset bodice directly on the dress form to balance the bold print placement across symmetrical panels.",
      "Calibrated skirt circumference to 540cm across three graduating tiers for effortless fluid movement.",
      "Fit tests conducted to ensure optimal mobility and comfortable posture while sitting and moving."
    ],
    garmentDataId: "ethnic-look-04"
  },
  {
    id: "proj-e05",
    category: "ethnic",
    title: "THE BOTANICAL KÉDİYÚ & SCULPTED DHOTI",
    subtitle: "Eco-Printed Flared Kédiyú Jacket & Pleated Modern Dhoti",
    tagline: "Folk Garba Rhythms Reinterpreted Through Zero-Waste Botanical Draping",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
      "/assets/hetvi_look04_e01_bandhani-DPkLHLn7.jpg",
      "/assets/hetvi_e01_gallery2-AkWx_s-d.jpg",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85"
    ],
    concept: "Reinterpreting the ancestral Gujarati Kédiyú folk silhouette through zero-waste botanical eco-printing and structural pleating. The gathered peplum jacket dialogues with sculpted asymmetric dhoti drapery, celebrating celebratory Garba movement and mindful organic dye craftsmanship.",
    inspiration: "Folk Kédiyú jackets of Saurashtra, Yakshi Studio eco-printing techniques, and the rhythmic dynamics of Bharatnatyam mudras.",
    silhouette: "Flared gathered high-waist Kédiyú jacket with crossover angrakha front, paired with sculpted architectural cowl-pleated dhoti trousers.",
    moodboard: {
      title: "Folk Kédiyú & Organic Botanical Steam",
      description: "Direct leaf contact eco-printing on silk-cotton, gathered frill peplum, hand-embroidered mirrorwork yoke, and sculpted cowl dhoti.",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      keywords: ["Kédiyú Jacket", "Botanical Eco-Print", "Sculpted Dhoti", "Mirrorwork Accents", "Garba Silhouette", "Zero-Waste Draping"]
    },
    colors: [
      { name: "Indigo Forest", hex: "#1F3B4D", rgb: "rgb(31, 59, 77)", proportion: 40, usage: "Eco-printed Kédiyú peplum body" },
      { name: "Warm Clay Ochre", hex: "#C27D4E", rgb: "rgb(194, 125, 78)", proportion: 30, usage: "Draped pleated dhoti pant" },
      { name: "Earthy Madder Rose", hex: "#8A3344", rgb: "rgb(138, 51, 68)", proportion: 20, usage: "Embroidered yoke & corded tie closures" },
      { name: "Raw Muga Gold", hex: "#D4AF37", rgb: "rgb(212, 175, 55)", proportion: 10, usage: "Zari accents & mirrorwork highlights" }
    ],
    materials: [
      { name: "Botanical Eco-Printed Silk-Cotton", composition: "50% Ahimsa Silk, 50% Organic Cotton", weight: "125 GSM", texture: "Subtle slub with organic leaf silhouettes", drape: "Crisp flare with soft touch", color: "Indigo Forest", hex: "#1F3B4D", description: "Steamed with eucalyptus and marigold leaves using natural alum mordants." },
      { name: "Handloom Khadi Twill", composition: "100% Hand-Spun Cotton", weight: "190 GSM", texture: "Earthy textured hand-spun grain", drape: "Sculptural pleat retention", color: "Warm Clay Ochre", hex: "#C27D4E", description: "Durable handloom khadi holding structural cowl pleats along the leg." },
      { name: "Mirrored Silk Brocade Accent", composition: "Silk & Metallic Zari", weight: "175 GSM", texture: "Fine woven geometric relief", drape: "Firm yoke anchor", color: "Earthy Madder Rose", hex: "#8A3344", description: "Ancestral Kutch mirror embroidery on rich madder silk." }
    ],
    textileTechniques: [
      "Steam contact botanical eco-printing using fallen eucalyptus and temple marigold petals",
      "Dense accordion knife gathering generating voluminous 360-degree Kédiyú flare",
      "Continuous one-piece zero-waste bias drape pattern for asymmetric dhoti folds",
      "Hand-set Abhla mirrorwork embroidery on the chest yoke and cuffs"
    ],
    sketches: [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
    ],
    techFlats: {
      front: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80",
      back: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      annotations: [
        "Angrakha crossover neckline with triple hand-braided silk latkan ties",
        "Exaggerated gathered waist peplum with 1:4 gathering ratio for celebratory flare",
        "Sculpted cowl dhoti trousers with deep knife pleats tapered at the ankle",
        "Concealed inner ankle zipper for sleek tailored fit"
      ]
    },
    developmentNotes: [
      "Natural leaf eco-print tests calibrated over 4 steam trials to achieve sharp botanical clarity without chemical fixatives.",
      "The Kédiyú yoke proportions modified to sit precisely at the natural waist for ergonomic comfort during dance movement.",
      "Zero-waste pattern layout drafted for the dhoti trousers, achieving 94% textile utilization."
    ],
    garmentDataId: "ethnic-look-05"
  }
];

export const TEXTILE_SAMPLES: TextileSample[] = [
  {
    id: "sample-01",
    title: "Architectural Box Pleating & Stitch-Fold Manipulation",
    technique: "Precision Steam-Set Origami Pleating",
    materials: "Heavy Silk Gabardine & Crushed Organza",
    category: "manipulation",
    description: "Geometric fold transitions where structured ridges dissolve into organic undulating drapes. Tested with 3 different heat presses to determine maximum resilience.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    detailNotes: ["0.8cm grid pitch", "Pre-ironed with vinegar setting agent", "Resistant to dry cleaning wash cycle"]
  },
  {
    id: "sample-02",
    title: "Multi-Strand Silk Cording (Dori Work) on Velvet",
    technique: "Hand-Couched Raised Cording Lattice",
    materials: "Micro-Velvet Base, 3mm Silk Filler Cord, Metallic Zari",
    category: "ornamentation",
    description: "Continuous linear cording forming high-relief tactile patterns across garment yokes, providing structural stability without heavy metal boning.",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80",
    detailNotes: ["240 meters of cord hand-applied per bodice", "Zero fabric puckering achieved with stabilizer mesh", "Soft pliable tactile surface"]
  },
  {
    id: "sample-03",
    title: "Deadstock Waste Mosaic & Gold Filigree Patchwork",
    technique: "Zero-Waste Cutting Scrap Reassembly",
    materials: "Post-Cutting Patola, Linen & Velvet Offcuts",
    category: "sustainable",
    description: "Sorting cutting-room waste below 10cm into tonal color gradients, fused onto water-soluble backing and embroidered with fine gold thread.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    detailNotes: ["Upcycles 92% of pre-consumer workshop offcuts", "Tensile strength equal to virgin woven fabric", "Each panel unique in micro-patterning"]
  },
  {
    id: "sample-04",
    title: "Canadian Honeycomb Smocking on Sheer Organza",
    technique: "Direct Geometric Hand-Smocking",
    materials: "Pure Kora Organza & Burgundy Silk Thread",
    category: "manipulation",
    description: "Grid-based reverse smocking transforming flat planar organza into dynamic 3D volumetric waffle sculptures that compress and expand with body movement.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    detailNotes: ["1.5cm square grid mapping", "Expands up to 220% on stretch axis", "Translucent depth with multi-light refraction"]
  },
  {
    id: "sample-05",
    title: "Micro-Zardozi & French Knot Relief Embroidery",
    technique: "Adda Frame Artisan Needlework",
    materials: "Dull Antique Dabka, Metallic Bullion, Silk Floss",
    category: "ornamentation",
    description: "Traditional Gujarati and Mughal metallic wire embroidery reimagined into modern minimalist linear contours inspired by architectural blueprints.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    detailNotes: ["Executed in Ahmedabad artisan cluster", "Gold-plated non-tarnishing dabka alloy", "High abrasion resistance"]
  },
  {
    id: "sample-06",
    title: "From Scrap to System: Recycled Yarn Weft Weaving",
    technique: "Handloom Re-Weft Construction",
    materials: "Unraveled Scrap Threads & Organic Cotton Warp",
    category: "structure",
    description: "Shredded fabric edges unraveled by hand, carded and re-spun into thick irregular slub yarn, handwoven on a table loom into heavy textured outerwear fabric.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    detailNotes: ["Weight: 380 GSM", "No chemical dyes applied", "Circular lifecycle closed loop"]
  }
];

export const SUSTAINABILITY_STAGES: SustainabilityStage[] = [
  {
    id: 1,
    title: "Fabric Waste Audit",
    subtitle: "Building Community Connections for Responsible Textile Recovery",
    percentage: "7-8 kg Total Fabric Collected",
    description: "Each fabric leftover is assessed by its condition and directed toward reuse, upcycling or recycling to maximise its material value.",
    materials: [
      "Reuse",
      "Recycle",
      "Upcycle"
    ],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
    metric: { label: "Total Waste Collected", value: "7-8 kg" }
  },
  {
    id: 2,
    title: "University Survey",
    subtitle: "Sorting Waste into Pathways for Reuse, Upcycling and Recycling",
    percentage: "Qualitative & Quantitative Survey",
    description: "In-depth campus survey analyzing student awareness, disposal behaviors, fabric discard rates, and sustainable reuse potential across university fashion departments.",
    materials: ["Survey Questionnaires", "Student Feedback Data", "Departmental Waste Metrics"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
    metric: { label: "Departments Surveyed", value: "Fashion & Design" }
  },
  {
    id: 3,
    title: "NGO Collaboration",
    subtitle: "Building Community Connections for Responsible Textile Recovery",
    percentage: "Social & Circular Impact",
    description: "Partnership with local non-governmental organizations to upcycle collected studio remnants, co-create handcrafted sustainable collections, and provide fair-wage artisan livelihoods.",
    materials: ["Upcycled Remnants", "Artisan Handcrafted Elements", "Community Workshop Textiles"],
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
    metric: { label: "Community Impact", value: "Artisan Empowerment" }
  },
  {
    id: 4,
    title: "Circular Economy Model",
    subtitle: "Giving Every Fabric Leftover a Defined Pathway Beyond Disposal",
    percentage: "Zero-Waste Closed Loop",
    description: "A comprehensive circular system connecting universities, artisan communities, and fashion ateliers—transforming textile remnants into durable, high-value couture while minimizing environmental footprint.",
    materials: ["Interlocking Tessellations", "Recycled Fiber Blends", "Circular Garment Prototypes"],
    image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80",
    metric: { label: "Circular Resource Efficiency", value: "Closed-Loop" }
  },
  {
    id: 5,
    title: "Environmental Impact",
    subtitle: "Lifecycle Assessment & Carbon Footprint Reduction",
    percentage: "Significant Ecological Footprint Reduction",
    description: "Measuring life cycle improvements through waste diversion, reduced carbon emissions from avoided landfilling, non-toxic processing, and complete natural biodegradability.",
    materials: ["Carbon Offset Metrics", "Water Conservation Data", "Biodegradable Natural Fibers"],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    metric: { label: "Ecological Benefit", value: "Measurable Reduction" }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Gestural Draping & 3D Form Finding",
    subtitle: "Physical Muslin Exploration & Tension Sculpting",
    description: "The design begins on the live dress form with raw unbleached calico. Grainlines are rotated 45 degrees across the bias to establish liquid gravity before structural boning channels are pinned directly onto the anatomy.",
    materials: ["Unbleached Cotton Muslin", "Dressmaker Pins", "Graphite Marking Lead"],
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
    milestones: [
      "Bias drape balance verification under 360-degree rotation",
      "Direct bodice volume carving without paper constraints",
      "Tension point mapping across shoulder and iliac crest"
    ]
  },
  {
    number: "02",
    title: "Zero-Waste Origami & Flat Pattern Geometry",
    subtitle: "Tessellated Mathematical CAD Construction",
    description: "Muslin draping is translated into precision 2D pattern vectors. Polygon edges interlock with zero negative offcut scrap across standard 140cm textile bolts, optimizing fabric yield to 99.4%.",
    materials: ["CAD Vector Drafting", "Heavy Manila Pattern Paper", "Rotary Cutters"],
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80",
    milestones: [
      "Zero-waste pattern interlocking layout calculation",
      "Origami accordion crease geometry scoring",
      "Grainline alignment matching across double-ikat repeats"
    ]
  },
  {
    number: "03",
    title: "Ancestral Gujarati Craft Execution",
    subtitle: "Patola Double-Ikat, Bandhani & Zari Couching",
    description: "Collaborating with generational master weavers in Patan and Kutch. Pure silk warps and wefts are resist-dyed before weaving, creating double-ikat geometric symmetry fused with hand-couched metallic dori cording.",
    materials: ["Pure Mulberry Silk", "Natural Indigo & Madder Dyes", "Metallic Zari Cords"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
    milestones: [
      "100% natural dyestuff extraction and fixing with alum",
      "Micro-tied silk Bandhani resist-dye clusters",
      "Water-soluble PVA membrane filigree embroidery"
    ]
  },
  {
    number: "04",
    title: "Architectural Tailoring & Exoskeleton Assembly",
    subtitle: "Pad-Stitched Canvas & Spiral Steel Boning",
    description: "Merging traditional bespoke English tailoring with couture construction. Horsehair canvas is pad-stitched by hand to give resilient chest spring, reinforced by spiral steel bones encased in plush velvet channels.",
    materials: ["Horsehair Canvas Interfacing", "Spiral Steel Corset Bones", "Solid Brass Snaps"],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    milestones: [
      "Internal waist stay balancing garment load",
      "French-seamed silk organza lining insertion",
      "Modular screw-in hardware for circular end-of-life disassembly"
    ]
  }
];

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    pageNumber: 1,
    sectionId: "cover",
    sectionTitle: "AUTUMN / WINTER 2026 ARCHIVE",
    title: "DUALITY EDITORIAL ARCHIVE",
    subtitle: "Nine Curated Master Garments • Western Rigor & Ethnic Heritage",
    bodyText: [
      "An architectural haute-couture thesis by Hetvi Kapadia, Indus University, Ahmedabad.",
      "A systematic investigation into the intersection of European deconstructivist tailoring, ancestral Gujarati craft traditions, and sustainable circularity."
    ],
    heroImage: "/assets/hetvi_look01_structured_sovereign-C3wasELE.jpg",
    caption: "Signature Architectural Silhouette | Ahmedabad, 2026"
  },
  {
    pageNumber: 2,
    sectionId: "intro",
    sectionTitle: "01 — INTRODUCTION",
    title: "ABOUT THE DESIGNER",
    subtitle: "Hetvi Kapadia — Fashion Design Student & Material Explorer",
    bodyText: [
      "I am an emerging fashion designer based in Ahmedabad, pursuing my Bachelor of Fashion Design at Indus University. My work exists at the captivating intersection of structured contemporary tailoring, traditional Indian craft heritage, and sustainable circular textile systems.",
      "Raised amidst the vibrant textile legacy of Gujarat, I have developed an intuitive fascination with tactile manipulation—from raw selvedge textures to intricate hand-cording, Bandhani resist-dyeing, and architectural boning. I perceive garments not merely as aesthetic garments, but as spatial sculptures that communicate identity, dialogue with the body, and respect the lifecycle of materials."
    ],
    quote: "“Fashion as a dialogue between individuality, craftsmanship, culture and contemporary expression.”",
    bulletPoints: [
      "Fashion Illustration & Digital Flat Technicals",
      "Garment Construction & Tailored Pattern Drafting",
      "Textile Experimentation & Fabric Manipulation",
      "Surface Ornamentation (Zardozi, Cording, Smocking)",
      'Circular Design & "From Scrap to System" Upcycling',
      "Contemporary Silhouettes & Traditional Craft Fusion"
    ],
    heroImage: "/assets/hetvi_kapadia_designer_portrait-Bamb8bML.jpg",
    caption: "Hetvi Kapadia | Indus University, Ahmedabad"
  },
  {
    pageNumber: 3,
    sectionId: "philosophy",
    sectionTitle: "02 — CORE PILLARS",
    title: "DESIGN PHILOSOPHY & DUAL NARRATIVES",
    subtitle: "The Synthesis of Craft & Intention",
    bodyText: [
      "This collection stands as a testament to my journey as a fashion designer, articulating a distinct creative identity that balances heritage with modernity.",
      "By pairing architectural rigor with ancestral craft, garments transform into timeless cultural artifacts rather than seasonal disposables."
    ],
    bulletPoints: [
      "PILLAR 01: ETHNIC — Rooted in Gujarati & Mughal craftsmanship (Patola, Bandhani, Zardozi, Farshi pajama, Bohemian print, Kédiyú)",
      "PILLAR 02: WESTERN — Contemporary deconstructed silhouettes, architectural boning, 3D CLO digital athletics, and utility workwear"
    ],
    quote: "“Designing with intention. Creating with identity.”"
  },
  {
    pageNumber: 4,
    sectionId: "western-01",
    sectionTitle: "LOOK 01 • WESTERN",
    title: "THE ROOTED FORM",
    subtitle: "Deconstructed Architectural Trench & Boned Bodice",
    bodyText: [
      "Inspired by modern urban architecture and sharp feminine tailoring.",
      "An asymmetrical cropped blazer with exaggerated lapels paired with a fitted mini skirt, balancing power dressing with contemporary street-style elegance."
    ],
    bulletPoints: [
      "Layered collar — adds structured depth",
      "Slit sleeves — creates movement and openness",
      "Statement buttons — adds a bold tailored accent"
    ],
    heroImage: "/assets/hetvi_look01_structured_sovereign-C3wasELE.jpg",
    caption: "Look 01: The Rooted Form | Runway Specification"
  },
  {
    pageNumber: 5,
    sectionId: "western-02",
    sectionTitle: "LOOK 02 • WESTERN",
    title: "THE CORDUROY UTILITY ENSEMBLE",
    subtitle: "Deconstructed Off-Shoulder Dungaree Dress & Utility Straps",
    bodyText: [
      "Inspired by 90s workwear and modern deconstructed streetwear.",
      "Reinterpreting classic corduroy dungaree into an off-shoulder, feminine utility dress with exposed suspender straps, cargo details, and an earthy mud-yellow tone."
    ],
    bulletPoints: [
      "Mud-yellow fine-wale corduroy combining rugged workwear heritage with soft western sensuality",
      "Off-shoulder feminine silhouette with utility cargo pockets and exposed suspender straps",
      "Asymmetrical balance suitable for fashion-forward styling and editorial presentation"
    ],
    heroImage: "/assets/EPSI6804.JPG",
    caption: "Look 02: 90s Workwear Deconstruction | Mud-Yellow Corduroy Utility Dress"
  },
  {
    pageNumber: 6,
    sectionId: "western-03",
    sectionTitle: "LOOK 03 • WESTERN",
    title: "THE STRUCTURED LEATHER CORSET",
    subtitle: "Structured Leather Corset Top & Voluminous Mini Skirt",
    bodyText: [
      "Inspired by industrial architecture and futuristic street fashion, reinterpreting structured corsetry into edgy urban streetwear.",
      "Features a structured leather corset top with cut-out details and lace-up sides paired with a voluminous mini skirt in metallic brown and black."
    ],
    bulletPoints: [
      "Structured leather corset top with cut-out details & side lace-up cinch",
      "Voluminous mini skirt adding movement, drama, and feminine balance",
      "Metallic brown and black tones reflecting strength, mystery, and modern rebellion"
    ],
    heroImage: "/assets/hetvi_look03_leather_laceup-2K8W1NJL.jpg",
    caption: "Look 03: The Structured Leather Corset | Editorial Presentation"
  },
  {
    pageNumber: 7,
    sectionId: "western-04",
    sectionTitle: "LOOK 04 • WESTERN",
    title: "NOIR DRAPE — THE SCULPTED KNIT COLUMN DRESS",
    subtitle: "The Sculpted Knit Column Dress • Modern Evening Minimalism",
    bodyText: [
      "This dress is inspired by modern minimalism and timeless elegance. The sleek black silhouette highlights confidence, sophistication, and simplicity through its clean strapless design and body-contouring fit.",
      "The monochrome palette creates a bold yet refined aesthetic, while the smooth texture and fluid fall of the fabric add subtle luxury. Designed to embody effortless glamour, the garment reflects strength, femininity, and contemporary evening wear style."
    ],
    bulletPoints: [
      "Clean strapless architectural design with concealed non-slip internal stay",
      "Sleek monochrome palette in sculpted knit & fluid silk-viscose cady",
      "Seamless body-contouring column fit embodying effortless evening glamour"
    ],
    heroImage: "/assets/noir_drape_standing.jpg",
    caption: "Look 04: Noir Drape — The Sculpted Knit Column Dress"
  },
  {
    pageNumber: 8,
    sectionId: "ethnic-01",
    sectionTitle: "LOOK 05 • ETHNIC",
    title: "THE HERITAGE WEAVER",
    subtitle: "Modernized Bandhani & Structural Cording Kalidar Anarkali",
    bodyText: [
      "Reinterpreting Gujarati Bandhani resist-dyeing into modern chevron geometry across 32 flared parabolic kalis.",
      "Features a fitted corset bodice overlaid with multi-strand silk dori cording and a horsehair crinoline bell hem extending to an 820cm sweep."
    ],
    bulletPoints: [
      "Hand-tied micro Bandhani dots on Chanderi silk-cotton base",
      "Raised dori cording lattice providing natural structural rigidity",
      "32 individual kalis graduated from 3cm to 22cm width"
    ],
    heroImage: "/assets/hetvi_look04_e01_bandhani-DPkLHLn7.jpg",
    caption: "Look 05: The Heritage Weaver | 32-Kali Architectural Anarkali"
  },
  {
    pageNumber: 9,
    sectionId: "ethnic-02",
    sectionTitle: "LOOK 06 • ETHNIC",
    title: "THE PATOLA REBIRTH",
    subtitle: "Upcycled Patola Draped Saree & Armature Blouse",
    bodyText: [
      "Honoring Gujarat's legendary Patan Patola double-ikat heritage by salvaging 85 deadstock test strips and pre-consumer offcuts.",
      "The pre-pleated concept saree features an armature corset blouse with structured wing shoulders and metallic gold couching embroidery."
    ],
    bulletPoints: [
      "85 deadstock Patola test strips joined with 0.5mm French seams",
      "Pre-stitched micro-pleated saree apron with hidden anchor tabs",
      "Raw hand-spun Matka silk base with velvet cummerbund belt"
    ],
    heroImage: "/assets/hetvi_look05_e02_lehenga-CWe-iGnK.jpg",
    caption: "Look 06: The Patola Rebirth | Upcycled Double-Ikat Saree"
  },
  {
    pageNumber: 10,
    sectionId: "ethnic-03",
    sectionTitle: "LOOK 07 • ETHNIC",
    title: "NEEL - The Jaali Muse",
    subtitle: "Floral Printed Crop Blouse & Sunburst Pleated Georgette Skirt",
    bodyText: [
      "Inspired by the elegance of evening gardens and flowing silhouettes, this ensemble combines traditional prints with modern fluidity.",
      "The printed structured bodice adds richness and artistic detail, while the deep indigo pleated skirt creates graceful movement and softness. The design reflects confidence, femininity, and timeless charm through its balance of vibrant patterns and delicate drapes, capturing a dreamy and sophisticated aesthetic."
    ],
    bulletPoints: [
      "Blue floral printed cotton satin crop blouse with structured hold (120 GSM)",
      "Navy blue sunburst micro-pleated georgette skirt with 5-meter flare (60 GSM)",
      "Architectural jaali inspiration balanced with airy, cascading movement"
    ],
    heroImage: "/assets/hetvi_look06_e03_paisley-fKLwFFKf.jpg",
    caption: "Look 07: NEEL - The Jaali Muse | Floral Cotton Satin & Pleated Georgette"
  },
  {
    pageNumber: 11,
    sectionId: "ethnic-04",
    sectionTitle: "LOOK 08 • ETHNIC",
    title: "WARLI ECHO - Painted & Mirror Vest Set",
    subtitle: "Painted & Mirror Vest Set",
    bodyText: [
      "This outfit is inspired by contemporary street fashion blended with tribal art elements. The hand-painted motifs, geometric patterns, and mirror detailing create a bold artistic expression, while the denim base adds a modern and casual appeal.",
      "The cropped jacket and embroidered jeans reflect individuality, freedom, and youthful energy. Designed with a fusion of traditional craft and urban styling, the garment celebrates creativity, culture, and self-expression in everyday fashion."
    ],
    bulletPoints: [
      "Traditional Indian wooden block printing with azo-free mineral dyes",
      "Contoured sweetheart corset bodice with 6 internal spiral boning stays",
      "Cascading 3-tiered flowy georgette skirt with 540cm sweep"
    ],
    heroImage: "/assets/IMG_6787.jpg",
    caption: "Look 08: WARLI ECHO - Painted & Mirror Vest Set | Hand-Painted Warli & Mirror Work"
  },
  {
    pageNumber: 12,
    sectionId: "ethnic-05",
    sectionTitle: "LOOK 09 • ETHNIC",
    title: "THE BOTANICAL KÉDİYÚ & SCULPTED DHOTI",
    subtitle: "Eco-Printed Flared Kédiyú Jacket & Pleated Modern Dhoti",
    bodyText: [
      "Reinterpreting the ancestral Gujarati Kédiyú folk silhouette through zero-waste botanical eco-printing and structural pleating.",
      "The gathered peplum jacket dialogues with sculpted asymmetric dhoti drapery, celebrating celebratory Garba movement and mindful organic dye craftsmanship."
    ],
    bulletPoints: [
      "Steam contact botanical eco-printing using fallen eucalyptus and temple marigold petals",
      "Dense accordion knife gathering generating voluminous 360-degree Kédiyú flare",
      "Sculpted cowl dhoti trousers with continuous one-piece zero-waste bias drape pattern"
    ],
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    caption: "Look 09: The Botanical Kédiyú & Sculpted Dhoti | Eco-Printed Folk Silhouette"
  },
  {
    pageNumber: 13,
    sectionId: "conclusion",
    sectionTitle: "10 — CONCLUSION",
    title: "THE SYNTHESIS OF CRAFT & INTENTION",
    subtitle: "Hetvi Kapadia — Ready for Atelier & Industry Collaboration",
    bodyText: [
      "This collection represents not just the completion of an academic journey, but the launchpad for a forward-thinking design practice.",
      "Equipped with comprehensive proficiencies spanning 3D pattern engineering, artisanal textile conservation, and circular supply chains, I look forward to contributing to visionary fashion houses, couture ateliers, and innovative design research studios."
    ],
    bulletPoints: [
      "B.Des Fashion Design • Indus University (9.0 CGPA)",
      "Technical Craft & Software Mastery (Procreate, Illustrator, Photoshop, CLO3D)",
      "Contact: hetvi8104@gmail.com • Ahmedabad Atelier"
    ],
    heroImage: "/assets/hetvi_kapadia_designer_portrait-Bamb8bML.jpg",
    caption: "Hetvi Kapadia | Fashion Designer & Material Explorer"
  }
];
