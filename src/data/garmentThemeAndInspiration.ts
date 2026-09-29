import { ThemeBoardData, InspirationBoardData, GarmentBackdropStyle } from '../types';
import look01ThemeBoardImage from '../assets/images/look01_theme_board_1790686807950.jpg';
import look01InspirationBoardImage from '../assets/images/look01_inspiration_board_1790686634863.jpg';
import look02ThemeBoardImage from '../assets/images/look02_theme_board_1790687449134.jpg';
import look02InspirationBoardImage from '../assets/images/look02_inspiration_board_1790687691622.jpg';
import look09InspirationBoardImage from '../assets/images/look09_inspiration_board_1790253983527.jpg';
import look09HeroImage from '../assets/images/regenerated_image_1790254080563.RAF';
import look09GalleryImage1 from '../assets/images/regenerated_image_1790514728395.RAF';
import look03ThemeBoardImage from '../assets/images/regenerated_image_1790399986806.jpg';
import look03InspirationBoardImage from '../assets/images/regenerated_image_1790400387991.jpg';
import look04ThemeBoardImage from '../assets/images/assets/noir_drape_sitting.jpg';
import look04InspirationBoardImage from '../assets/images/look04_inspiration_board_1790592494588.jpg';

export interface GarmentExtendedData {
  themeBoard: ThemeBoardData;
  inspirationBoard: InspirationBoardData;
  backdropStyle: GarmentBackdropStyle;
}

export const GARMENT_EXTENDED_DATA: Record<string, GarmentExtendedData> = {
  'proj-w01': {
    backdropStyle: {
      accentColor: '#E0B069',
      secondaryAccent: '#36454F',
      gradient: 'from-[#14181F] via-[#0E1117] to-[#0A0C10]',
      patternType: 'architectural-grid',
      ambientGlow: 'rgba(224, 176, 105, 0.15)',
      moodBadge: 'BRUTALIST MONOLITH • ARCHITECTURAL RIGOR',
    },
    themeBoard: {
      title: 'Monolithic Rigor & Exposed Framework',
      themeTagline: 'Rooted in nature, sculpted through razor-sharp architectural tailoring',
      conceptNarrative:
        'An uncompromising study in structural tension—where organic root morphology collides with brutalist urban masonry. The ensemble deconstructs the conventional trench coat into an architectural hourglass exoskeleton, utilizing pad-stitched micro-check linen and exposed spiral boning channels that transform internal tailor’s craft into external visual armor.',
      moodKeywords: [
        'Brutalist Rigor',
        'Architectural Boning',
        'Deconstructed Trench',
        'Exposed Seams',
        'Hourglass Hybrid',
        'Micro-Check Linen',
      ],
      aestheticPillars: [
        {
          title: 'Structural Exoskeleton',
          desc: 'Internal spiral boning channels and pad-stitching externalized as sculptural contouring.',
        },
        {
          title: 'Crisp Organic Handle',
          desc: 'Natural 240 GSM micro-check linen delivering breathable comfort with sharp architectural fall.',
        },
        {
          title: 'Metropolitan Armor',
          desc: 'Assertive shoulder lines and asymmetrical storm flaps empowering feminine presence.',
        },
      ],
      visualElements: [
        {
          url: look01ThemeBoardImage,
          caption: 'The Rooted Form Theme Board — Organic Root Morphology, Fissured Bark, Mossy Boulders & Brutalist Concrete Architecture.',
          tag: 'THEME MOODBOARD',
        },
        {
          url: '/assets/hetvi_look01_structured_sovereign-C3wasELE.jpg',
          caption: 'Asymmetrical cropped blazer silhouette with razor lapel and hourglass waist cinch.',
          tag: 'RUNWAY PROTOTYPE',
        },
        {
          url: '/assets/hetvi_look01_gallery2-BDcaiIrH.jpg',
          caption: 'High-waist structured mini skirt with vertical seam channeling and tailored slit.',
          tag: 'STRUCTURE DETAIL',
        },
        {
          url: '/assets/hetvi_look01_gallery3-xb9wRcOO.jpg',
          caption: 'Architectural collar layering and antique brass statement closure points.',
          tag: 'ATELIER HARDWARE',
        },
      ],
      paletteStory: [
        { name: 'Charcoal Grey', hex: '#36454F', emotion: 'Concrete Brutalism & Urban Grounding' },
        { name: 'Steel Slate', hex: '#5A6872', emotion: 'Industrial Scaffolding & Shadow' },
        { name: 'Platinum Ash', hex: '#B0BAC3', emotion: 'Morning Mist over Polished Masonry' },
        { name: 'Champagne Gold', hex: '#E0B069', emotion: 'Tailored Metallic Accents & Brass Fixtures' },
      ],
      quote:
        'Architecture is the will of an epoch translated into space; tailoring is that same will sculpted around the living human form.',
    },
    inspirationBoard: {
      title: 'Brutalist Concrete, Industrial Scaffolding & Mid-Century Power Tailoring',
      culturalRoots: 'Chandigarh Capitol Complex by Le Corbusier & Ahmedabad Mill Owners’ Association Building.',
      historicalEra: '1950s modernist structuralism spliced with 1980s couture deconstruction.',
      craftLineage: 'Savile Row canvas pad-stitching fused with spiral steel orthotic boning insertion.',
      architecturalArtReferences: [
        {
          title: 'Le Corbusier’s Béton Brut in Chandigarh',
          source: 'Punjab High Court & Secretariat Facades',
          notes: 'Raw timber-imprinted concrete textures directly inspired the fine micro-check linen grain.',
        },
        {
          title: 'B.V. Doshi’s Sangath Atelier',
          source: 'Ahmedabad Vault Architecture',
          notes: 'Parabolic barrel vaults mirrored in the curved hip peplum drape and collar contours.',
        },
        {
          title: 'Cristóbal Balenciaga’s 1950s Cocoon Tailoring',
          source: 'Historical Haute Couture Archive',
          notes: 'Stand-away collar construction providing dramatic negative space around the clavicle.',
        },
      ],
      motifsAndSymbols: [
        {
          name: 'Asymmetric Lapel Chevron',
          meaning: 'Upward dynamic vector representing urban ambition and self-sovereignty',
          technique: 'Precision mitred corner binding with interior hair-canvas stay',
        },
        {
          name: 'Sleeve Vent Slits',
          meaning: 'Liberation of movement within rigid metropolitan frameworks',
          technique: 'Reinforced bar-tacked slit with clean French facing',
        },
      ],
      visualReferences: [
        {
          url: look01InspirationBoardImage,
          label: 'Textured Bouclé Tweed, Flared Bell Cuffs, Fringed Lapels & Woodland Editorial Mood',
          context: 'Macro tweed weave, pleated bell cuffs, raw fringed collar edges, and structured pleated mini skirt.',
        },
        {
          url: '/assets/hetvi_look01_structured_sovereign-C3wasELE.jpg',
          label: 'The Finished Garment Silhouette',
          context: 'Full editorial view showing balance of cropped architectural top and tailored skirt.',
        },
      ],
    },
  },

  'proj-w02': {
    backdropStyle: {
      accentColor: '#E0B069',
      secondaryAccent: '#9E783D',
      gradient: 'from-[#1C1309] via-[#120B05] to-[#0A0703]',
      patternType: 'corduroy-rib',
      ambientGlow: 'rgba(224, 176, 105, 0.18)',
      moodBadge: 'TACTILE WORKWEAR • SENSUAL ASYMMETRY',
    },
    themeBoard: {
      title: '90s Workwear Deconstruction & Corduroy Tactility',
      themeTagline: 'Where vintage utilitarian durability dissolves into sensual off-shoulder asymmetry',
      conceptNarrative:
        'A daring evolution of the classic utilitarian dungaree into an alluring, feminine off-shoulder jacket and asymmetrical wrap skirt. The warmth of fine-wale mud-yellow corduroy brings nostalgic tactile depth, juxtaposed against industrial suspender webbing, cargo utility pockets, and gunmetal quick-release buckles.',
      moodKeywords: [
        'Tactile Corduroy',
        '90s Workwear',
        'Exposed Harness',
        'Cargo Architecture',
        'Mud-Yellow',
        'Urban Nomad',
      ],
      aestheticPillars: [
        {
          title: 'Tactile Nostalgia',
          desc: 'Fine-wale velvety cotton corduroy delivering warmth, vintage patina, and soft handle.',
        },
        {
          title: 'Modular Functionalism',
          desc: '3D expandable cargo pockets and detachable suspender webbing offering kinetic utility.',
        },
        {
          title: 'Asymmetric Sensuality',
          desc: 'Exposed deconstructed neckline balancing heavy industrial fabrics with feminine softness.',
        },
      ],
      visualElements: [
        {
          url: look02ThemeBoardImage,
          caption: 'The Corduroy Utility Co-Ord Theme Board — Fine-Wale Mud Corduroy, Industrial Concrete Shadows, Vintage Workwear Atelier & Cargo Pocket Architecture.',
          tag: 'THEME MOODBOARD',
        },
        {
          url: '/assets/EPSI6804.JPG',
          caption: 'Off-shoulder jacket with utility pocketing and suspender harness straps.',
          tag: 'EDITORIAL CAMPAIGN',
        },
        {
          url: '/assets/hetvi_look02_gallery3-046amNvh.jpg',
          caption: 'Asymmetrical hemline wrap mini skirt highlighting vertical corduroy rib direction.',
          tag: 'SKIRT DRAPE',
        },
        {
          url: '/assets/hetvi_look02_gallery1-DZ_3AOS4.jpg',
          caption: 'Precision top-stitching along pocket flaps and suspender strap hardware.',
          tag: 'CRAFT SPECIFICATION',
        },
      ],
      paletteStory: [
        { name: 'Mud Yellow', hex: '#9E783D', emotion: 'Rich Ochre Earth & Weathered Workwear Canvas' },
        { name: 'Earthy Ochre', hex: '#7A6335', emotion: 'Desert Sand Dunes & Clay Terracotta' },
        { name: 'Gunmetal Obsidian', hex: '#1A1A1A', emotion: 'Industrial Iron Sliders & Rivets' },
        { name: 'Champagne Gold', hex: '#E0B069', emotion: 'Warm Sunlight Filtering Through Dust' },
      ],
      quote:
        'Utility is not merely functional; when stripped of convention, it becomes an intensely tactile expression of modern freedom.',
    },
    inspirationBoard: {
      title: 'Heritage Dungarees, 90s Industrial Streetwear & Kutch Mud Architecture',
      culturalRoots: 'Kutch traditional lipan mud-plaster dwellings & 1990s Japanese deconstructed workwear.',
      historicalEra: 'Late 20th century workwear ergonomics re-engineered for contemporary street couture.',
      craftLineage: 'Heavy-gauge flat-felled seam construction reinforced with industrial bar-tacking.',
      architecturalArtReferences: [
        {
          title: 'Kutch Bhunga Mud Plaster Textures',
          source: 'Western Gujarat Vernacular Architecture',
          notes: 'Natural earth ochre pigments matched perfectly to the mud-yellow corduroy dye batch.',
        },
        {
          title: 'Helmut Lang 1998 Tactical Harnesses',
          source: 'Minimalist Workwear Archives',
          notes: 'Internal shoulder suspension straps translated into exposed external design features.',
        },
        {
          title: 'Gordon Matta-Clark’s Building Slices',
          source: 'Deconstructivist Art Practice',
          notes: 'The diagonal hemline of the skirt mirrors surgical architectural cuts through solid mass.',
        },
      ],
      motifsAndSymbols: [
        {
          name: 'Vertical Wale Ribbing',
          meaning: 'Linear shadow play that elongates the torso while reacting dynamically to light',
          technique: 'Wale-matched directional cutting across bodice and sleeve panels',
        },
        {
          name: 'Suspender Webbing',
          meaning: 'Emblem of physical industry converted into an armature of self-expression',
          technique: 'Heavy cotton webbing anchored with box-X reinforced stitching',
        },
      ],
      visualReferences: [
        {
          url: look02InspirationBoardImage,
          label: 'Deconstructed Corduroy Draping, Suspender Hardware, Swatch Studies & Multi-Pocket Utility Craft',
          context: 'Vintage corduroy workwear jacket, asymmetrical off-shoulder form draping, weathered buckle hardware, corduroy swatches, and cargo pocket construction.',
        },
        {
          url: '/assets/EPSI6804.JPG',
          label: 'Full Garment Manifestation',
          context: 'Complete look showcasing off-shoulder neckline and asymmetric skirt dialogue.',
        },
      ],
    },
  },

  'proj-w03': {
    backdropStyle: {
      accentColor: '#E0B069',
      secondaryAccent: '#543D2B',
      gradient: 'from-[#170E0A] via-[#0F0805] to-[#080402]',
      patternType: 'industrial-lattice',
      ambientGlow: 'rgba(212, 155, 96, 0.2)',
      moodBadge: 'INDUSTRIAL ARMOR • LEATHER REBELLION',
    },
    themeBoard: {
      title: 'Industrial Armor & Sculptural Rebellion',
      themeTagline: 'Soft feminine vulnerability fortified by architectural leather contouring',
      conceptNarrative:
        'A radical exploration of feminine duality—where sensual sweetheart anatomical corsetry meets uncompromising gunmetal eyelets and sculptural box pleating. The deep metallic brown full-grain leather forms a protective shell, while the voluminous skirt unleashes kinetic rebellion and effortless freedom.',
      moodKeywords: [
        'Anatomical Leather',
        'Spiral Boning',
        'Industrial Eyelets',
        'Sweetheart Cutout',
        'Box Pleat Skirt',
        'Dark Rebellion',
      ],
      aestheticPillars: [
        {
          title: 'Protective Armor',
          desc: 'Full-grain structured leather molded anatomically to hug and accentuate the natural torso.',
        },
        {
          title: 'Kinetic Tension',
          desc: 'Cross-laced eyelets allowing the wearer to calibrate their own breath and waist cinch.',
        },
        {
          title: 'Sculptural Volume',
          desc: 'High-density box pleats heat-set to hold voluminous flare without collapsing.',
        },
      ],
      visualElements: [
        {
          url: look03ThemeBoardImage,
          caption: 'Industrial armor, riveted steel metallurgy, and sculptural leather rebellion.',
          tag: 'THEME MOODBOARD',
        },
        {
          url: '/assets/hetvi_look03_leather_laceup-2K8W1NJL.jpg',
          caption: 'Sweetheart leather corset bodice with lace-up side panels and box pleat skirt.',
          tag: 'SIGNATURE LOOK',
        },
        {
          url: '/assets/hetvi_look03_gallery1-1y_h9HBP.jpg',
          caption: 'Close-up on gunmetal eyelet settings and precision waxed lacing tension.',
          tag: 'LACING DETAIL',
        },
        {
          url: '/assets/hetvi_look03_gallery2-7YkMO_Za.jpg',
          caption: 'Contrast panels and internal spiral steel boning channels.',
          tag: 'INTERNAL ANATOMY',
        },
      ],
      paletteStory: [
        { name: 'Metallic Brown', hex: '#543D2B', emotion: 'Hand-Buffed Saddle Leather & Industrial Rust' },
        { name: 'Obsidian Black', hex: '#141216', emotion: 'Midnight Shadows & Waxed Heavy Cord' },
        { name: 'Burnished Bronze', hex: '#8A5D3B', emotion: 'Molten Alloy & Kinetic Friction' },
        { name: 'Champagne Gold', hex: '#E0B069', emotion: 'Fine Polished Eyelet Reflections' },
      ],
      quote:
        'The corset was once a gilded cage; re-engineered in full-grain leather with exposed lacing, it becomes armor for the self-determined spirit.',
    },
    inspirationBoard: {
      title: 'Medieval Cuirass Metallurgy, McQueen 90s Tailoring & Urban Steel Bridges',
      culturalRoots: 'European anatomical armor crafting & 1990s subcultural gothic tailoring.',
      historicalEra: 'Renaissance body-casting spliced with 21st-century architectural streetwear.',
      craftLineage: 'Hand-beveled leather edge finishing, 160°C pleat baking, and spiral boning.',
      architecturalArtReferences: [
        {
          title: 'Zaha Hadid’s Parametric Ribbing',
          source: 'Contemporary Architectural Contours',
          notes: 'Smooth compound curvatures mirrored in the sweetheart corset cup drape.',
        },
        {
          title: 'Equestrian Saddlery Guild Techniques',
          source: 'English Leathercraft Masteries',
          notes: 'Beveled, waxed, and burnished raw leather edges ensuring no raw fraying.',
        },
        {
          title: 'Alexander McQueen’s "Highland Rape" Tailoring (1995)',
          source: 'Provocative British Couture Archive',
          notes: 'The tension between exposed skin and structural protection.',
        },
      ],
      motifsAndSymbols: [
        {
          name: 'Sweetheart Anatomical Notch',
          meaning: 'Celebration of feminine heart contouring backed with internal steel stability',
          technique: 'Underwired channel tape with spiral steel insert and French binding',
        },
        {
          name: 'Cross-Laced Side Flanks',
          meaning: 'Wearer autonomy—the ability to dial tension, comfort, and attitude',
          technique: 'Double-walled eyelet stay with reinforced interlining',
        },
      ],
      visualReferences: [
        {
          url: look03InspirationBoardImage,
          label: 'Distressed Leather Corsetry & Industrial Armor Craftsmanship',
          context: 'Laced leather corset details, pointed shoulder armor, antique-brass hardware, and textured twill swatches.',
        },
        {
          url: '/assets/hetvi_look03_leather_laceup-2K8W1NJL.jpg',
          label: 'The Complete Leather Ensemble',
          context: 'Striking balance of tough leather corset against bouncy box-pleated skirt.',
        },
      ],
    },
  },

  'proj-w04': {
    backdropStyle: {
      accentColor: '#E0B069',
      secondaryAccent: '#1E1E24',
      gradient: 'from-[#0D0D10] via-[#08080A] to-[#040405]',
      patternType: 'minimalist-waves',
      ambientGlow: 'rgba(224, 176, 105, 0.12)',
      moodBadge: 'RADICAL MINIMALISM • MONOLITHIC VELVET',
    },
    themeBoard: {
      title: 'Radical Minimalism & The Poetics of Pure Drape',
      themeTagline: 'Minimalism that sculpts, not just covers — pure fabric as living architecture',
      conceptNarrative:
        'Stripping away all extraneous ornamentation to reveal the pure sculptural dialogue between the human anatomy and fluid heavyweight stretch velvet. The strapless column silhouette requires surgical precision in vertical contour darting, invisible silicone stay engineering, and floor-skimming weight distribution.',
      moodKeywords: [
        'Sculpted Velvet',
        'Radical Minimalism',
        'Body-Contouring Column',
        'Strapless Precision',
        'Obsidian Noir',
        'Zero-Noise Luxury',
      ],
      aestheticPillars: [
        {
          title: 'Zero-Noise Discipline',
          desc: 'No surface prints, no embroidery; the velvet pile and pristine drape are the entire thesis.',
        },
        {
          title: 'Anatomical Grip',
          desc: 'Concealed medical-grade silicone stay tape and interior grosgrain hook maintaining flawless hold.',
        },
        {
          title: 'Monolithic Fluidity',
          desc: '4-way stretch velvet moving like dark liquid mercury with every deliberate stride.',
        },
      ],
      visualElements: [
        {
          url: look04ThemeBoardImage,
          caption: 'Noir Drape Theme Board — Black Silk Drape, Sculpted Torso, Obsidian Marble, Shadow Play & Evening Glamour.',
          tag: 'THEME BOARD',
        },
        {
          url: '/assets/noir_drape_standing.jpg',
          caption: 'Full-length strapless column gown showcasing uninterrupted vertical line.',
          tag: 'COLUMN LINE',
        },
        {
          url: '/assets/noir_drape_sitting.jpg',
          caption: 'Deep velvet pile catching ambient stage light across seated contours.',
          tag: 'VELVET LUSTER',
        },
      ],
      paletteStory: [
        { name: 'Noir Obsidian', hex: '#0F0F10', emotion: 'Infinite Light Absorption & Velvet Depths' },
        { name: 'Midnight Charcoal', hex: '#1E1E22', emotion: 'Subtle Contour Shadows along the Spine' },
        { name: 'Moonlit Silver', hex: '#C8CDD4', emotion: 'Subtle Sheen of Concealed Hardware' },
        { name: 'Champagne Gold', hex: '#E0B069', emotion: 'Couture Contrast Accents' },
      ],
      quote:
        'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
    },
    inspirationBoard: {
      title: 'Madame Grès Classical Pleats, Richard Serra Monoliths & 90s Calvin Klein',
      culturalRoots: 'Greco-Roman classical wet draping & 1990s New York radical minimalism.',
      historicalEra: '1930s Madeleine Vionnet bias mastery updated with modern spandex recovery.',
      craftLineage: '4-thread overlock with differential feed, low-heat pile press, and weighted hem.',
      architecturalArtReferences: [
        {
          title: 'Richard Serra’s Torqued Ellipses',
          source: 'Weatherproof Steel Sculptures',
          notes: 'Monumental curved steel sheets inspiring the single-stroke monolithic column wrap.',
        },
        {
          title: 'Madame Grès Hellenic Gowns',
          source: 'Parisian Haute Couture Archive',
          notes: 'Fabric treated as a sculptor treats clay—flowing without visible interruption.',
        },
        {
          title: 'Peter Lindbergh’s Monochrome Portfolios',
          source: '90s Editorial Photography',
          notes: 'Deep velvety black tones creating high-contrast emotional gravity.',
        },
      ],
      motifsAndSymbols: [
        {
          name: 'Monolithic Column',
          meaning: 'Classical Doric/Ionic pillar symbolizing poise, timelessness, and inner strength',
          technique: 'Continuous grain-line cutting without horizontal breaks',
        },
        {
          name: 'Pure Strapless Horizon',
          meaning: 'Direct unadorned connection to collarbone and crown',
          technique: 'Inner stay band with silicone grip and boned underarm stabilizing tabs',
        },
      ],
      visualReferences: [
        {
          url: look04InspirationBoardImage,
          label: 'Noir Drape Inspiration Board — Boned Strapless Architecture, Textured Knit Drape & Minimalist Evening Styling',
          context: 'Structured strapless corset construction, tactile black crepe-knit texture, minimalist column silhouette, and refined evening styling.',
        },
        {
          url: '/assets/noir_drape_standing.jpg',
          label: 'The Sculpted Column Gown',
          context: 'Standing silhouette demonstrating clean floor-length fall and posture.',
        },
        {
          url: '/assets/noir_drape_sitting.jpg',
          label: 'The Sitting Contour Study',
          context: 'Fluid recovery of 300 GSM stretch velvet conforming to relaxed anatomy.',
        },
      ],
    },
  },

  'proj-e01': {
    backdropStyle: {
      accentColor: '#E0B069',
      secondaryAccent: '#5A1F2B',
      gradient: 'from-[#1F0811] via-[#14050B] to-[#0A0205]',
      patternType: 'bandhani-dots',
      ambientGlow: 'rgba(212, 139, 150, 0.22)',
      moodBadge: 'ANCESTRAL BANDHANI • 32 PARABOLIC KALIS',
    },
    themeBoard: {
      title: 'Ancestral Bandhani & 32-Panel Parabolic Kalidar',
      themeTagline: 'Ancestral Gujarati resist craft meets 32-panel architectural flare',
      conceptNarrative:
        'Honoring the sacred resist-dye traditions of Kutch artisan women, where thousands of microscopic silk threads tie individual fabric points before immersion in natural dyes. The resulting chevron dots cascade across 32 individually graduated parabolic panels, structured by raised silk dori cording and horsehair crinoline.',
      moodKeywords: [
        'Kutch Bandhani',
        '32 Kalis',
        'Parabolic Kalidar',
        'Dori Cording',
        'Chanderi Shimmer',
        'Mashru Luster',
      ],
      aestheticPillars: [
        {
          title: 'Sacred Dot Discipline',
          desc: 'Micro tie-dye dots engineered into contemporary chevron vectors across Chanderi silk.',
        },
        {
          title: 'Parabolic Motion',
          desc: '32 graduated panels expanding from 3cm to 22cm width, yielding an 820cm bell circumference.',
        },
        {
          title: 'Tactile Relief',
          desc: 'Hand-couched silk dori cords structuring the corset bodice without stiff metal armature.',
        },
      ],
      visualElements: [
        {
          url: '/assets/hetvi_look04_e01_bandhani-DPkLHLn7.jpg',
          caption: '32-kali Anarkali with corded bodice and balloon sleeves.',
          tag: 'CEREMONIAL ENSEMBLE',
        },
        {
          url: '/assets/hetvi_e01_gallery1-De4QJ55i.jpg',
          caption: 'Microscopic Bandhani dots tied by hand creating chevron fractal waves.',
          tag: 'BANDHANI SPECIMEN',
        },
        {
          url: '/assets/hetvi_e01_gallery2-AkWx_s-d.jpg',
          caption: 'Silk dori raised cording detail on Mashru sateen bodice.',
          tag: 'SURFACE CORDING',
        },
      ],
      paletteStory: [
        { name: 'Royal Ivory', hex: '#F7F3EC', emotion: 'Unbleached Chanderi Silk & Moonlit Radiance' },
        { name: 'Deep Wine', hex: '#5A1F2B', emotion: 'Fermented Madder Root & Royal Gujarati Court' },
        { name: 'Dusty Rose', hex: '#9A6670', emotion: 'Ombré Silk Organza Veil Horizon' },
        { name: 'Antique Gold', hex: '#E0B069', emotion: 'Sacred Temple Zari & Festive Light' },
      ],
      quote:
        'Each Bandhani dot is a tied prayer—a sacred point in space that resists darkness to emerge pure and illuminated.',
    },
    inspirationBoard: {
      title: 'Adalaj Stepwell Symmetries, Kutch Khatri Dyers & Fractal Geometry',
      culturalRoots: 'Khatri artisan communities of Bhuj & Mandvi, Gujarat.',
      historicalEra: '12th-century Solanki dynasty stepwell geometry meets modern festive couture.',
      craftLineage: 'Hand-tied micro Bandhani (Rani Chhap), natural alum mordanting, and dori embroidery.',
      architecturalArtReferences: [
        {
          title: 'Adalaj Stepwell (Vav) Symmetries',
          source: '15th-Century Ahmedabad Subterranean Architecture',
          notes: 'Descending octagonal shafts directly informed the 32 radiating kalidar panels.',
        },
        {
          title: 'Vedic Mandala Geometry',
          source: 'Traditional Sacred Diagrammatics',
          notes: 'The dot (bindu) at the center expanding infinitely outward into cosmic dance.',
        },
        {
          title: 'Mashru Weaving Heritage',
          source: 'Patan Muslim Silk Guilds',
          notes: 'Silk face for royal luster, soft cotton back for tropical skin breathability.',
        },
      ],
      motifsAndSymbols: [
        {
          name: 'Chevron Bandhani Vectors',
          meaning: 'Ascending arrows signifying spiritual elevation and celebratory joy',
          technique: 'Tied with unspun cotton thread (kacchi dori) before immersion in dye vats',
        },
        {
          name: '32 Kalidar Panels',
          meaning: 'Sacred completeness reflecting all cardinal and intercardinal compass directions',
          technique: 'Laser-calibrated parabolic curve drafting with 0.5mm joining allowances',
        },
      ],
      visualReferences: [
        {
          url: '/assets/hetvi_look04_e01_bandhani-DPkLHLn7.jpg',
          label: 'The Kalidar Anarkali in Motion',
          context: 'Full volume display showing the 820cm flare of the 32 individual panels.',
        },
        {
          url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
          label: 'Adalaj Stepwell & Fractal Architecture',
          context: 'Subterranean stone pillars, geometric landings, and carved filigree screens.',
        },
      ],
    },
  },

  'proj-e02': {
    backdropStyle: {
      accentColor: '#E0B069',
      secondaryAccent: '#722F37',
      gradient: 'from-[#22090F] via-[#17050A] to-[#0A0204]',
      patternType: 'patola-ikat',
      ambientGlow: 'rgba(224, 176, 105, 0.2)',
      moodBadge: 'DOUBLE-IKAT HERITAGE • ARMATURE BLOUSE',
    },
    themeBoard: {
      title: 'Patan Patola Double-Ikat & The Architecture of Rebirth',
      themeTagline: 'Upcycling Gujarat’s legendary double-ikat weave into modern couture',
      conceptNarrative:
        'Patan Patola is one of humanity’s most demanding textile arts, where both warp and weft are tie-dyed prior to weaving to match millimeter-perfect geometric motifs. This ensemble upcycles precious deadstock trial strips and test swatches into a dramatic pre-draped concept saree with a winged corset armature blouse.',
      moodKeywords: [
        'Double-Ikat Patola',
        'Zero-Waste Upcycling',
        'Concept Saree',
        'Armature Corset',
        'Matka Slub',
        'Gold Couching',
      ],
      aestheticPillars: [
        {
          title: 'Heritage Reclaimed',
          desc: '85 deadstock Patola test strips joined with 0.5mm French seams into a new heirloom.',
        },
        {
          title: 'Armature Silhouette',
          desc: 'Molded high-neck corset blouse with wing shoulders providing dignified posture.',
        },
        {
          title: 'Pre-Draped Ergonomics',
          desc: 'Micro-pleated apron and hidden shoulder anchors preventing slippage during movement.',
        },
      ],
      visualElements: [
        {
          url: '/assets/hetvi_look05_e02_lehenga-CWe-iGnK.jpg',
          caption: 'Pre-draped Patola concept saree with sculptural corset blouse and wing sleeves.',
          tag: 'COUTURE MASTERWORK',
        },
        {
          url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
          caption: 'Deadstock double-ikat grid fragments assembled into chevron mosaic.',
          tag: 'IKAT ARCHIVE',
        },
      ],
      paletteStory: [
        { name: 'Royal Burgundy', hex: '#722F37', emotion: 'Ancient Cochineal & Royal Patan Court Silk' },
        { name: 'Warm Matka Beige', hex: '#D8C7B5', emotion: 'Raw Hand-Spun Silk with Natural Textured Slubs' },
        { name: 'Deep Wine', hex: '#5A1F2B', emotion: 'Silk Velvet Cummerbund Horizon' },
        { name: 'Antique Zari Gold', hex: '#E0B069', emotion: 'Couched Metallic Filament Thread' },
      ],
      quote:
        'Padi Patole Bhaat, Phate Pan Fite Nahi — The sacred pattern etched into a Patola never fades, even if the fabric weathers through eternity.',
    },
    inspirationBoard: {
      title: 'Patan Weaving Guilds, Rani ki Vav Bas-Reliefs & Royal Mandapa Architecture',
      culturalRoots: 'Salvi master weaving families of Patan, North Gujarat (patronized since 1143 CE).',
      historicalEra: '12th-century Chalukya royal textile guild heritage reimagined for 2026.',
      craftLineage: 'Double-ikat calculation, water-soluble stabilizer, French seams, and couching.',
      architecturalArtReferences: [
        {
          title: 'Rani ki Vav UNESCO World Heritage Stepwell',
          source: 'Patan Stone Carvings & Apsaras',
          notes: 'Stone-carved draperies and jewelry bands inspired the cummerbund and shoulder wings.',
        },
        {
          title: 'Ratanchowk Geometric Matrix',
          source: 'Traditional Patola Weaving Layout',
          notes: 'The diamond grid motif representing cosmic balance across warp and weft.',
        },
        {
          title: 'Temple Mandapa Pillars',
          source: 'Modhera Sun Temple Sanctuaries',
          notes: 'Vertical fluting translated into micro-accordion pleats of the saree apron.',
        },
      ],
      motifsAndSymbols: [
        {
          name: 'Ratanchowk (Jeweled Square)',
          meaning: 'Universal order, prosperity, and the four corners of the celestial realm',
          technique: 'Double-ikat resist weaving where warp and weft meet at microscopic tolerances',
        },
        {
          name: 'Architectural Shoulder Wings',
          meaning: 'Celestial guardian wings elevating the posture of the modern Indian woman',
          technique: 'Internal buckram and wire armature encased in pure Matka silk',
        },
      ],
      visualReferences: [
        {
          url: '/assets/hetvi_look05_e02_lehenga-CWe-iGnK.jpg',
          label: 'The Patola Rebirth Concept Saree',
          context: 'Full view of pre-draped saree with sculpted high-neck armature blouse.',
        },
        {
          url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
          label: 'Double-Ikat Textile Geometry',
          context: 'Intricate intersecting silk threads dyed prior to weaving.',
        },
      ],
    },
  },

  'proj-e03': {
    backdropStyle: {
      accentColor: '#E0B069',
      secondaryAccent: '#2A4B7C',
      gradient: 'from-[#0B1524] via-[#070D17] to-[#04070D]',
      patternType: 'jaali-lattice',
      ambientGlow: 'rgba(91, 134, 196, 0.22)',
      moodBadge: 'JAALI LATTICE • INDIGO FLORA',
    },
    themeBoard: {
      title: 'Jaali Muse & Twilight Indigo Nocturne',
      themeTagline: 'Where heritage jaali meets free-flowing femininity',
      conceptNarrative:
        'Capturing the poetic coolness of twilight garden pavilions. The structured crop bodice in cotton satin features delicate Pichwai botanical blooms, while the deep indigo georgette skirt bursts into a 5-meter sunburst micro-pleated flare that catches the evening breeze like undulating water.',
      moodKeywords: [
        'Jaali Architecture',
        'Indigo Flora',
        'Pichwai Bloom',
        'Sunburst Pleating',
        '5-Meter Georgette',
        'Nocturnal Romance',
      ],
      aestheticPillars: [
        {
          title: 'Light & Shadow Lattice',
          desc: 'Evoking pierced marble screens where moonlight filters gently into sacred courtyards.',
        },
        {
          title: 'Kinetic Sunburst',
          desc: '360-degree heat-set accordion micro-pleats expanding dramatically in full rotation.',
        },
        {
          title: 'Print-to-Plain Poise',
          desc: 'Dense floral art on the torso floating above vast, unbroken indigo georgette waters below.',
        },
      ],
      visualElements: [
        {
          url: '/assets/hetvi_look06_e03_paisley-fKLwFFKf.jpg',
          caption: 'Crop blouse in floral cotton satin paired with navy sunburst pleated skirt.',
          tag: 'GARDEN ENSEMBLE',
        },
        {
          url: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1200&q=85',
          caption: 'Close-up of Pichwai floral motifs and crisp square neckline darting.',
          tag: 'BOTANICAL DETAIL',
        },
      ],
      paletteStory: [
        { name: 'Midnight Navy', hex: '#132238', emotion: 'Infinite Expanse of Twilight Heavens' },
        { name: 'Indigo Lapis', hex: '#2A4B7C', emotion: 'Sacred Plant Dye from Gujarat Coastal Ports' },
        { name: 'Soft Pearl Ecru', hex: '#F8F6F0', emotion: 'Jasmine Petals Glistening in Moonlight' },
        { name: 'Champagne Gold', hex: '#E0B069', emotion: 'Fine Filigree Brass Lantern Accents' },
      ],
      quote:
        'A jaali does not separate inside from outside; it filters the wind, softens the sunlight, and transforms space into a living sanctuary.',
    },
    inspirationBoard: {
      title: 'Sidi Saiyyed Tree of Life Jaali, Nathdwara Pichwai & Zenana Pavilions',
      culturalRoots: 'Indo-Islamic pierced marble craftsmanship of Ahmedabad & Nathdwara temple art.',
      historicalEra: '16th-century Gujarat Sultanate marble craft meets contemporary festive wear.',
      craftLineage: 'Digital reactive printing on cotton satin, steam knife pleating, and baby-hem rolling.',
      architecturalArtReferences: [
        {
          title: 'Sidi Saiyyed Mosque "Tree of Life" Window',
          source: '1573 CE Ahmedabad Architectural Masterpiece',
          notes: 'Intricately entwined palm and banyan branches inspired the print placement.',
        },
        {
          title: 'Nathdwara Lotus Pichwai Cloth Hangings',
          source: 'Devotional Rajasthani Temple Tapestries',
          notes: 'Stylized lotus ponds and nocturnal indigo backdrops.',
        },
        {
          title: 'Jodhpur Blue City Stepwells',
          source: 'Toorji Ka Jhalra Reservoirs',
          notes: 'The tiered depths of water reflected in the graduated pleats of the georgette flare.',
        },
      ],
      motifsAndSymbols: [
        {
          name: 'Tree of Life Entwined Foliage',
          meaning: 'Perpetual renewal, cosmic connection, and grace under the evening stars',
          technique: 'Placed placement print centered across the bust line with side seam matching',
        },
        {
          name: '360° Sunburst Accordion Pleats',
          meaning: 'Solar rays captured and set into motion through textile fluidity',
          technique: 'Mechanical steam-setting under heat press with paper mold stabilization',
        },
      ],
      visualReferences: [
        {
          url: '/assets/hetvi_look06_e03_paisley-fKLwFFKf.jpg',
          label: 'The Jaali Muse Ensemble',
          context: 'Full crop blouse and fluid georgette skirt showing contrast of print and texture.',
        },
        {
          url: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80',
          label: 'Indigo Floral Heritage',
          context: 'Botanical bloom studies and traditional block-printed motifs.',
        },
      ],
    },
  },

  'proj-e04': {
    backdropStyle: {
      accentColor: '#E0B069',
      secondaryAccent: '#9B2226',
      gradient: 'from-[#141C2B] via-[#0D121C] to-[#06090E]',
      patternType: 'warli-tribal',
      ambientGlow: 'rgba(233, 180, 76, 0.2)',
      moodBadge: 'WARLI FOLK ART • DENIM STREETWEAR',
    },
    themeBoard: {
      title: 'Tribal Warli Soul & Urban Denim Street Culture',
      themeTagline: 'Denim street meets tribal soul through hand-painted Warli and authentic mirror work',
      conceptNarrative:
        'Uniting the raw, democratic utilitarianism of washed indigo cotton denim with the sacred indigenous folk art of Maharashtra’s Warli community. Hand-painted rice-paste white silhouettes dance across crimson block-printed malmal and a structured boned vest, cascading into an ethereal tiered white georgette skirt.',
      moodKeywords: [
        'Warli Tribe',
        'Washed Denim',
        'Abhala Mirrors',
        'Hand-Painted Folk',
        'Sweetheart Vest',
        'Tiered White Skirt',
      ],
      aestheticPillars: [
        {
          title: 'Folk Ritual Translation',
          desc: 'Warli Tarpa circle dance narrating human harmony with nature translated to denim.',
        },
        {
          title: 'Craft Juxtaposition',
          desc: 'Durable 280 GSM twill denim juxtaposed with whisper-soft block-printed malmal cotton.',
        },
        {
          title: 'Solar Reflection',
          desc: 'Hand-sewn Abhala mirrorwork catching ambient light and scattering brilliant reflections.',
        },
      ],
      visualElements: [
        {
          url: '/assets/IMG_6787.jpg',
          caption: 'Hand-painted Warli denim waistcoat paired with voluminous tiered ivory skirt.',
          tag: 'FOLK COUTURE',
        },
        {
          url: '/assets/hetvi_e01_gallery1-De4QJ55i.jpg',
          caption: 'Mirrorwork embroidery and block-printed malmal cotton border trim.',
          tag: 'MIRROR DETAIL',
        },
        {
          url: '/assets/hetvi_e01_gallery2-AkWx_s-d.jpg',
          caption: 'Structured sweetheart corset neckline with handmade dori piping.',
          tag: 'WAISTCOAT ANATOMY',
        },
      ],
      paletteStory: [
        { name: 'Indigo Denim Blue', hex: '#1B2A4A', emotion: 'Modern Urban Streetwear Twill Canvas' },
        { name: 'Ecru Rice White', hex: '#F8F6F0', emotion: 'Sacred Rice Paste Pigment & Pure Fluidity' },
        { name: 'Crimson Madder', hex: '#9B2226', emotion: 'Village Mud Plaster & Ancient Earth Pigment' },
        { name: 'Turmeric Ochre', hex: '#E9B44C', emotion: 'Solar Festivities & Auspicious Warmth' },
        { name: 'Abhala Mirror Silver', hex: '#E0B069', emotion: 'Convex Glass Scattering Joyous Light' },
      ],
      quote:
        'In Warli art, there are no straight lines, only circles of community and triangles of earth and sky dancing as one.',
    },
    inspirationBoard: {
      title: 'Sahyadri Mountain Warli Dwellings, Kutchi Abhala Mirrorwork & 90s Denim',
      culturalRoots: 'Indigenous Warli tribe of Western India (Dahanu/Palghar) & Rabari mirror embroiderers.',
      historicalEra: '2500 BCE animist tribal iconography spliced with modern festival streetwear.',
      craftLineage: 'Hand-painted mineral pigment, wooden block printing, and hand-inserted Abhala mirrors.',
      architecturalArtReferences: [
        {
          title: 'Warli Ritual Marriage Mud Walls (Lagnacha Chawk)',
          source: 'Tribal Dahanu Mud Dwellings',
          notes: 'Square geometric frame filled with sacred figures, plants, and celestial sun/moon.',
        },
        {
          title: 'The Tarpa Dance Circle',
          source: 'Warli Musical Instruments & Harvest Rituals',
          notes: 'Dancers entwining hands in a spiraling circle that never breaks, mimicking the cycle of life.',
        },
        {
          title: 'Kutch Abhala Mirrorwork',
          source: 'Gujarat Desert Nomadic Embroidery',
          notes: 'Tiny circular mirrors hand-stitched with cross-herringbone stitch to reflect the evil eye.',
        },
      ],
      motifsAndSymbols: [
        {
          name: 'Inverted & Upright Triangles',
          meaning: 'Human form where two triangles touch at the waist—symbol of cosmic balance and fertility',
          technique: 'Freehand brushwork executed with non-toxic white acrylic on indigo ground',
        },
        {
          name: 'The Spiraling Sun',
          meaning: 'The sun nurturing crops and blessing the community with light',
          technique: 'Concentric dots applied with bamboo stylus tools',
        },
      ],
      visualReferences: [
        {
          url: '/assets/IMG_6787.jpg',
          label: 'The Warli Echo Set',
          context: 'Full editorial photograph capturing the denim vest and cascading tiered skirt.',
        },
        {
          url: '/assets/hetvi_e01_gallery2-AkWx_s-d.jpg',
          label: 'Artisanal Mirror & Piping Detail',
          context: 'Close-up of handcrafted trims and precise seam finishes.',
        },
      ],
    },
  },

  'proj-e05': {
    backdropStyle: {
      accentColor: '#3FA383',
      secondaryAccent: '#C27D4E',
      gradient: 'from-[#0C1A17] via-[#081210] to-[#040908]',
      patternType: 'botanical-leaves',
      ambientGlow: 'rgba(63, 163, 131, 0.25)',
      moodBadge: 'BOTANICAL STEAM • ZERO-WASTE DHOTI',
    },
    themeBoard: {
      title: 'Folk Kédiyú & The Alchemy of Botanical Steam',
      themeTagline: 'Folk Garba rhythms reinterpreted through zero-waste botanical draping',
      conceptNarrative:
        'Re-engineering the celebratory nomadic Kédiyú silhouette of Saurashtra into a zero-waste sustainable masterpiece. Fallen eucalyptus leaves and temple marigold petals are steam-pressed directly onto ahimsa silk-cotton, capturing nature’s exact botanical fingerprints without artificial chemical fixatives. The gathered peplum jacket dialogues with sculpted asymmetric cowl dhoti trousers.',
      moodKeywords: [
        'Kédiyú Peplum',
        'Botanical Eco-Print',
        'Cowl Dhoti',
        'Zero-Waste Draping',
        'Garba Rhythm',
        'Clay Khadi',
      ],
      aestheticPillars: [
        {
          title: 'Botanical Imprint',
          desc: 'Real leaf silhouettes, veins, and natural tannins permanently bonded to organic fibers.',
        },
        {
          title: 'Nomadic Kinematics',
          desc: '1:4 gathered peplum flare engineered to blossom in 360 degrees during celebratory spinning.',
        },
        {
          title: 'Continuous Bias Drape',
          desc: '94% textile yield achieved through a single seamless architectural cowl dhoti pattern.',
        },
      ],
      visualElements: [
        {
          url: look09HeroImage,
          caption: 'Botanical eco-printed Kédiyú peplum jacket paired with sculpted cowl dhoti trousers.',
          tag: 'BOTANICAL ATELIER',
        },
        {
          url: look09GalleryImage1,
          caption: 'Handcrafted mirrorwork chest yoke and angrakha braided silk latkan closures.',
          tag: 'FOLK YOKE SPEC',
        },
      ],
      paletteStory: [
        { name: 'Indigo Forest', hex: '#1F3B4D', emotion: 'Dense Canopy Shade & Plant Fermentation' },
        { name: 'Warm Clay Ochre', hex: '#C27D4E', emotion: 'Saurashtra Terracotta Soil & Handloom Khadi' },
        { name: 'Madder Rose', hex: '#8A3344', emotion: 'Ancestral Root Mordant & Heart Tone' },
        { name: 'Sage Emerald', hex: '#3FA383', emotion: 'Fresh Steamed Eucalyptus Leaf Tannins' },
        { name: 'Champagne Gold', hex: '#E0B069', emotion: 'Raw Muga Zari & Festive Solar Accents' },
      ],
      quote:
        'The earth does not need our ornamentation; when we steam its fallen leaves into cloth, nature designs itself upon our skin.',
    },
    inspirationBoard: {
      title: 'Saurashtra Rabari Pastoralists, Yakshi Eco-Printing & Bharatnatyam Mudra Drapes',
      culturalRoots: 'Pastoral shepherd communities of Kutch and Saurashtra, Gujarat.',
      historicalEra: 'Nomadic folk wear evolved through 21st-century circular zero-waste engineering.',
      craftLineage: 'Zero-chemical steam contact eco-printing, continuous bias draping, and Abhala mirrors.',
      architecturalArtReferences: [
        {
          title: 'Nomadic Kédiyú Garba Tunics',
          source: 'Saurashtra Folk Dance Costumes',
          notes: 'The 1:4 gathered peplum protected pastoralists from desert winds while enabling dance.',
        },
        {
          title: 'Temple Sculpture Dhoti Drapery',
          source: 'Khajuraho & Ellora Carved Reliefs',
          notes: 'Cascading asymmetrical pleats framing the legs in fluid sculptural rhythm.',
        },
        {
          title: 'Ayurvedic Herbal Textile Science (Ayurvastra)',
          source: 'Ancient Kerala Medicinal Botanical Dyes',
          notes: 'Eucalyptus tannins provide natural anti-microbial skin soothing properties.',
        },
      ],
      motifsAndSymbols: [
        {
          name: 'Angrakha Crossover Bodice',
          meaning: 'Ancient wrap design honoring personal adaptability without synthetic zippers',
          technique: 'Triple hand-braided silk cord ties with artisanal fabric tassels (latkans)',
        },
        {
          name: 'Eucalyptus Botanical Imprint',
          meaning: 'Nature’s immutable fingerprint immortalized on organic cloth',
          technique: 'Iron-water and alum mordanted steam contact bundle dyeing at 95°C for 2.5 hours',
        },
      ],
      visualReferences: [
        {
          url: look09InspirationBoardImage,
          label: 'Botanical Leaf, Steam Dye & Nomadic Rabari Inspiration',
          context: 'Steam-contact eucalyptus leaves, warm terracotta clay khadi, and nomadic Kédiyú folk elements.',
        },
        {
          url: look09HeroImage,
          label: 'The Botanical Kédiyú Study',
          context: 'Full ensemble showing organic leaf patterns and sculpted architectural dhoti.',
        },
      ],
    },
  },
};
