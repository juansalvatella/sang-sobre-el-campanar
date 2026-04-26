/**
 * Traduccions catalanes dels noms dels personatges de Blood on the Clocktower.
 * Format: { [id]: 'Nom en Català' }
 */
export const charNamesCa: Record<string, string> = {

  // === TROUBLE BREWING ===
  // Habitants
  washerwoman:  'Bugadera',
  librarian:    'Bibliotecari',
  investigator: 'Investigador',
  chef:         'Cuiner',
  empath:       'Empàtic',
  fortuneteller:'Endevina',
  undertaker:   'Enterramorts',
  monk:         'Monjo',
  ravenkeeper:  'Guardacorb',
  virgin:       'Verge',
  slayer:       'Matador',
  soldier:      'Soldat',
  mayor:        'Alcalde',
  // Forasters
  butler:       'Majordom',
  drunk:        'Borratxo',
  recluse:      'Reclús',
  saint:        'Sant',
  // Esbirros
  poisoner:     'Enverinadora',
  spy:          'Espia',
  scarletwoman: 'Dona Escarlata',
  baron:        'Baró',
  // Dimoni
  imp:          'Dimoniàs',
  // Viatgers
  bureaucrat:   'Buròcrata',
  thief:        'Lladre',
  gunslinger:   'Pistoler',
  scapegoat:    'Cap de Turc',
  beggar:       'Mendic',

  // === BAD MOON RISING ===
  // Habitants
  grandmother:    'Àvia',
  sailor:         'Mariner',
  chambermaid:    'Minyona',
  exorcist:       'Exorcista',
  innkeeper:      'Hostaler',
  gambler:        'Jugador',
  gossip:         'Xafardera',
  courtier:       'Cortesà',
  professor:      'Professor',
  minstrel:       'Menestrel',
  tealady:        'Senyora del Té',
  pacifist:       'Pacifista',
  fool:           'Bufó',
  // Forasters
  tinker:         'Llanterner',
  moonchild:      'Fill de la Lluna',
  goon:           'Pallús',
  lunatic:        'Llunàtic',
  // Esbirros
  godfather:      'Padrí',
  devilsadvocate: "Advocat del Dimoni",
  assassin:       'Assassí',
  mastermind:     'Cervell',
  // Dimonis
  zombuul:        'Zombuul',
  pukka:          'Pukka',
  shabaloth:      'Shabaloth',
  po:             'Po',
  // Viatgers
  apprentice:     'Aprenent',
  matron:         'Majordoma',
  judge:          'Jutge',
  bishop:         'Bisbe',
  voudon:         'Voudon',

  // === SECTS AND VIOLETS ===
  // Habitants
  clockmaker:   'Rellotger',
  dreamer:      'Somiador',
  snakecharmer: 'Encantador de Serps',
  mathematician:'Matemàtic',
  flowergirl:   'Florista',
  towncrier:    'Pregoner',
  oracle:       'Oracle',
  savant:       'Savi',
  seamstress:   'Costurera',
  philosopher:  'Filòsof',
  artist:       'Artista',
  juggler:      'Malabari',
  sage:         'Endeví',
  // Forasters
  mutant:       'Mutant',
  sweetheart:   'Estimada',
  barber:       'Barber',
  klutz:        'Maldestre',
  // Esbirros
  eviltwin:     'Bessó Malvat',
  witch:        'Bruixa',
  cerenovus:    'Cerenovus',
  pithag:       'Maga del Pou',
  // Dimonis
  fanggu:       'Fang Gu',
  vigormortis:  'Vigormortis',
  nodashii:     'No Dashii',
  vortox:       'Vòrtex',
  // Viatgers
  barista:      'Barista',
  harlot:       'Meuca',
  butcher:      'Carnisser',
  bonecollector:'Col·leccionista d\'Ossos',
  deviant:      'Desviat',
};

/** Retorna el nom en català, o l'anglès si no hi ha traducció. */
export function getNameCa(id: string, nameEn: string): string {
  return charNamesCa[id] ?? nameEn;
}
