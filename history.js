// Daily Video History Log & Topic Registry
const PODCAST_HISTORY = [
  {
    "episode": 1,
    "topic": "The Cognitive Traps We Fall Into: Navigating Bias for Smarter Decisions",
    "date": "2026-10-15T18:40:27.346675",
    "duration_sec": 1324.41,
    "duration_min": 22.07,
    "video_file": "podcast_ep1_20261015_182743.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 2,
    "topic": "L'Art de la Décision Contre-Intuitive : Réussir là où les autres échouent",
    "date": "2026-10-17T11:55:57.702819",
    "duration_sec": 1206.24,
    "duration_min": 20.1,
    "video_file": "podcast_ep2_20261017_113802.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 3,
    "topic": "L'Art de l'Écoute Profonde : Comprendre l'Autre pour Mieux se Comprendre Soi-même",
    "date": "2026-10-18T04:51:06.883519",
    "duration_sec": 1277.62,
    "duration_min": 21.29,
    "video_file": "podcast_ep3_20261018_043454.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 4,
    "topic": "L'Éveil de la Conscience Corporelle : La Sagesse du Corps dans Nos Décisions",
    "date": "2026-10-18T05:33:19.200039",
    "duration_sec": 1135.27,
    "duration_min": 18.92,
    "video_file": "podcast_ep4_20261018_051420.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 5,
    "topic": "La Force Tranquille : Cultiver la Résilience Mentale face aux Épreuves",
    "date": "2026-10-19T05:38:08.157104",
    "duration_sec": 1262.42,
    "duration_min": 21.04,
    "video_file": "podcast_ep5_20261019_052536.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 6,
    "topic": "La Symphonie des Émotions : Diriger l'Orchestre Intérieur pour une Vie Équilibrée",
    "date": "2026-10-20T05:41:24.065199",
    "duration_sec": 1285.32,
    "duration_min": 21.42,
    "video_file": "podcast_ep6_20261020_052748.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 7,
    "topic": "L'Égarement du Soi : Comment Reconnaître et Surmonter les Illusions Personnelles",
    "date": "2026-10-21T05:44:28.060832",
    "duration_sec": 1235.78,
    "duration_min": 20.6,
    "video_file": "podcast_ep7_20261021_052619.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 8,
    "topic": "L'Architecture Invisible de Nos Croyances : Comment Redessiner nos Pensées Fondamentales",
    "date": "2026-10-22T05:54:02.999460",
    "duration_sec": 1328.52,
    "duration_min": 22.14,
    "video_file": "podcast_ep8_20261022_053206.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 9,
    "topic": "Le Miroir Déformant de la Perception : Comment notre réalité est-elle construite ?",
    "date": "2026-10-23T05:51:44.568494",
    "duration_sec": 1202.95,
    "duration_min": 20.05,
    "video_file": "podcast_ep9_20261023_053025.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 10,
    "topic": "L'Art subtil de l'Auto-Compassion : Cultiver la bienveillance envers soi pour une vie plus riche",
    "date": "2026-10-24T05:29:32.265683",
    "duration_sec": 1233.05,
    "duration_min": 20.55,
    "video_file": "podcast_ep10_20261024_050905.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 11,
    "topic": "L'Ancre et la Voile : Naviguer entre Stabilité et Changement dans une Vie en Mouvement",
    "date": "2026-10-25T05:39:17.393720",
    "duration_sec": 1236.07,
    "duration_min": 20.6,
    "video_file": "podcast_ep11_20261025_052516.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 12,
    "topic": "La Sagesse des Silences : Décrypter les Messages Inaudibles pour une Communication Authentique",
    "date": "2026-10-26T05:49:57.091021",
    "duration_sec": 1192.63,
    "duration_min": 19.88,
    "video_file": "podcast_ep12_20261026_052950.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 13,
    "topic": "La Dialectique de l'Ambition : Réconcilier le Désir d'Accomplissement et le Bien-être Présent",
    "date": "2026-10-27T05:58:34.512708",
    "duration_sec": 1175.33,
    "duration_min": 19.59,
    "video_file": "podcast_ep13_20261027_054535.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 14,
    "topic": "Le Paradoxe de l'Attention : Comment Retrouver le Contrôle dans un Monde Hyperconnecté",
    "date": "2026-10-29T06:54:26.569522",
    "duration_sec": 1280.23,
    "duration_min": 21.34,
    "video_file": "podcast_ep14_20261029_063435.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 15,
    "topic": "Le Vertige de l'Infini : Comment Embrasser l'Incertitude pour une Liberté Retrouvée",
    "date": "2026-10-30T06:48:48.690595",
    "duration_sec": 1137.17,
    "duration_min": 18.95,
    "video_file": "podcast_ep15_20261030_063425.mp4",
    "platform": "Facebook"
  }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = PODCAST_HISTORY; }
if (typeof window !== 'undefined') { window.PODCAST_HISTORY = PODCAST_HISTORY; }
