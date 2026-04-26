/**
 * Traduccions catalanes de les habilitats dels personatges de Blood on the Clocktower.
 * Format: { [id]: 'Descripció de la habilitat en Català' }
 */
export const charAbilitiesCa: Record<string, string> = {

  // === TROUBLE BREWING ===
  // Vilatans
  washerwoman:  'Comences sabent que 1 de 2 jugadors és un Vilatà en concret.',
  librarian:    'Comences sabent que 1 de 2 jugadors és un Foraster en concret. (O que no n\'hi ha cap en joc.)',
  investigator: 'Comences sabent que 1 de 2 jugadors és un Esbirro en concret.',
  chef:         'Comences sabent quantes parelles de jugadors dolents hi ha.',
  empath:       'Cada nit, saps quants dels teus 2 veïns vius són dolents.',
  fortuneteller:'Cada nit, tria 2 jugadors: saps si algun és el Dimoni. Hi ha un jugador bo que t\'apareix com a Dimoni.',
  undertaker:   'Cada nit*, saps quin personatge ha mort executat avui.',
  monk:         'Cada nit*, tria un jugador (no tu mateix): està protegit del Dimoni aquesta nit.',
  ravenkeeper:  'Si mors a la nit, et desperten per triar un jugador: saps el seu personatge.',
  virgin:       'La 1a vegada que et nominen, si el nominador és un Vilatà, és executat immediatament.',
  slayer:       'Un cop per partida, durant el dia, tria públicament un jugador: si és el Dimoni, mor.',
  soldier:      'Estàs protegit del Dimoni.',
  mayor:        'Si només queden 3 jugadors vius i no hi ha execució, el teu equip guanya. Si mors a la nit, un altre jugador podria morir en el teu lloc.',
  // Forasters
  butler:       'Cada nit, tria un jugador (no tu mateix): demà, només pots votar si ell també vota.',
  drunk:        'No saps que ets el Borratxo. Creus que ets un personatge Vilatà, però no ho ets.',
  recluse:      'Pots aparèixer com a dolent i com a Esbirro o Dimoni, fins i tot mort.',
  saint:        'Si mors per execució, el teu equip perd.',
  // Esbirros
  poisoner:     'Cada nit, tria un jugador: queda enverrinat aquesta nit i el dia de demà.',
  spy:          'Cada nit, veus el Grimori. Pots aparèixer com a bo i com a Vilatà o Foraster, fins i tot mort.',
  scarletwoman: 'Si hi ha 5 o més jugadors vius i el Dimoni mor, et converteixes en el Dimoni. (Els Viatgers no compten.)',
  baron:        'Hi ha Forasters addicionals en joc. [+2 Forasters]',
  // Dimoni
  imp:          'Cada nit*, tria un jugador: mor. Si et mates a tu mateix d\'aquesta manera, un Esbirro es converteix en l\'Imp.',
  // Viatgers
  bureaucrat:   'Cada nit, tria un jugador (no tu mateix): el seu vot compta com a 3 vots demà.',
  thief:        'Cada nit, tria un jugador (no tu mateix): el seu vot compta negativament demà.',
  gunslinger:   'Cada dia, després del primer recompte de vots, pots triar un jugador que hagi votat: mor.',
  scapegoat:    'Si s\'executa un jugador de la teva alineació, podries ser executat tu en el seu lloc.',
  beggar:       'Has d\'usar una fitxa de vot per votar. Si un jugador mort et dóna la seva, saps la seva alineació. Estàs sobri i sa.',

  // === BAD MOON RISING ===
  // Vilatans
  grandmother:    'Comences sabent un jugador bo i el seu personatge. Si el Dimoni els mata, tu també mors.',
  sailor:         'Cada nit, tria un jugador viu: o tu o ell esteu borratxos fins al capvespre. No pots morir.',
  chambermaid:    'Cada nit, tria 2 jugadors vius (no tu mateix): saps quants s\'han despertat aquesta nit per la seva habilitat.',
  exorcist:       'Cada nit*, tria un jugador (diferent al de l\'última nit): el Dimoni, si és triat, sap qui ets i no es desperta aquesta nit.',
  innkeeper:      'Cada nit*, tria 2 jugadors: no poden morir aquesta nit, però 1 d\'ells queda borratxo fins al capvespre.',
  gambler:        'Cada nit*, tria un jugador i endevina el seu personatge: si t\'equivoques, mors.',
  gossip:         'Cada dia, pots fer una declaració pública. Si era certa, un jugador mor aquesta nit.',
  courtier:       'Un cop per partida, a la nit, tria un personatge: queda borratxo durant 3 nits i 3 dies.',
  professor:      'Un cop per partida, a la nit*, tria un jugador mort: si és un Vilatà, ressuscita.',
  minstrel:       'Quan un Esbirro mor per execució, tots els altres jugadors (excepte Viatgers) queden borratxos fins al capvespre de l\'endemà.',
  tealady:        'Si els teus 2 veïns vius són bons, no poden morir.',
  pacifist:       'Els jugadors bons executats podrien no morir.',
  fool:           'La 1a vegada que mors, no mors.',
  // Forasters
  tinker:         'Pots morir en qualsevol moment.',
  moonchild:      'Quan saps que has mort, tria públicament 1 jugador viu. Si era un jugador bo, mor aquesta nit.',
  goon:           'Cada nit, el primer jugador que et triï amb la seva habilitat queda borratxo fins al capvespre. Adoptes la seva alineació.',
  lunatic:        'Creus que ets un Dimoni, però no ho ets. El Dimoni sap qui ets i a qui tries a la nit.',
  // Esbirros
  godfather:      'Comences sabent quins Forasters hi ha en joc. Si 1 ha mort avui, tria un jugador aquesta nit: mor. [-1 o +1 Foraster]',
  devilsadvocate: 'Cada nit, tria un jugador viu (diferent al de l\'última nit): si és executat demà, no mor.',
  assassin:       'Un cop per partida, a la nit*, tria un jugador: mor, fins i tot si per algun motiu no pogués.',
  mastermind:     'Si el Dimoni mor per execució (acabant la partida), juguen 1 dia més. Si s\'executa un jugador, el seu equip perd.',
  // Dimonis
  zombuul:        'Cada nit*, si ningú ha mort avui, tria un jugador: mor. La 1a vegada que mors, continues viu però apareixies com a mort.',
  pukka:          'Cada nit, tria un jugador: queda enverrinat. El jugador enverrinat anteriorment mor i es recupera.',
  shabaloth:      'Cada nit*, tria 2 jugadors: moren. Un jugador mort que hagis triat l\'última nit podria ser regurgitat.',
  po:             'Cada nit*, pots triar un jugador: mor. Si l\'última vegada no en vas triar cap, tria 3 jugadors aquesta nit.',
  // Viatgers
  apprentice:     'La 1a nit, guanyes una habilitat de Vilatà (si ets bo), o una habilitat d\'Esbirro (si ets dolent).',
  matron:         'Cada dia, pots triar fins a 3 parelles de jugadors per intercanviar els seients. Els jugadors no poden abandonar el seu seient per parlar en privat.',
  judge:          'Un cop per partida, si un altre jugador ha nominat, pots forçar que l\'execució actual passi o falli.',
  bishop:         'Només el Narrador pot nominar. Almenys 1 jugador oponent ha de ser nominat cada dia.',
  voudon:         'Només tu i els morts podeu votar. Ells no necessiten fitxa de vot. No cal una majoria del 50%.',

  // === SECTS AND VIOLETS ===
  // Vilatans
  clockmaker:   'Comences sabent quants passos separen el Dimoni del seu Esbirro més proper.',
  dreamer:      'Cada nit, tria un jugador (no tu mateix ni Viatgers): saps 1 personatge bo i 1 de dolent, 1 dels quals és correcte.',
  snakecharmer: 'Cada nit, tria un jugador viu: un Dimoni triat intercanvia personatge i alineació amb tu i queda enverrinat.',
  mathematician:'Cada nit, saps quantes habilitats de jugadors han funcionat de forma anormal (des de l\'alba) a causa de l\'habilitat d\'un altre personatge.',
  flowergirl:   'Cada nit*, saps si un Dimoni ha votat avui.',
  towncrier:    'Cada nit*, saps si un Esbirro ha nominat avui.',
  oracle:       'Cada nit*, saps quants jugadors morts són dolents.',
  savant:       'Cada dia, pots visitar el Narrador per saber 2 coses en privat: 1 és certa i 1 és falsa.',
  seamstress:   'Un cop per partida, a la nit, tria 2 jugadors (no tu mateix): saps si tenen la mateixa alineació.',
  philosopher:  'Un cop per partida, a la nit, tria un personatge bo: guanyes aquella habilitat. Si aquest personatge és en joc, queda borratxo.',
  artist:       'Un cop per partida, durant el dia, fes al Narrador qualsevol pregunta de sí o no en privat.',
  juggler:      'El teu 1r dia, endevina públicament el personatge de fins a 5 jugadors. Aquella nit, saps quants has encertat.',
  sage:         'Si el Dimoni et mata, saps que és 1 de 2 jugadors.',
  // Forasters
  mutant:       'Si estàs "convençut" de ser un Foraster, podries ser executat.',
  sweetheart:   'Quan mors, 1 jugador queda borratxo des d\'ara.',
  barber:       'Si has mort avui o aquesta nit, el Dimoni pot triar 2 jugadors (no un altre Dimoni) per intercanviar els seus personatges.',
  klutz:        'Quan saps que has mort, tria públicament 1 jugador viu: si és dolent, el teu equip perd.',
  // Esbirros
  eviltwin:     'Tu i un jugador oponent us coneixeu. Si el jugador bo és executat, guanya el mal. El bé no pot guanyar si tots dos viviu.',
  witch:        'Cada nit, tria un jugador: si nomina demà, mor. Si només queden 3 jugadors, perds aquesta habilitat.',
  cerenovus:    'Cada nit, tria un jugador i un personatge bo: demà ha d\'estar "convençut" de ser aquest personatge, o podria ser executat.',
  pithag:       'Cada nit*, tria un jugador i un personatge en què es converteix (si no és en joc). Si es crea un Dimoni, les morts d\'aquesta nit són arbitràries.',
  // Dimonis
  fanggu:       'Cada nit*, tria un jugador: mor. El 1r Foraster que mates es converteix en un Fang Gu dolent i tu mors en el seu lloc. [+1 Foraster]',
  vigormortis:  'Cada nit*, tria un jugador: mor. Els Esbirros que mates conserven la seva habilitat i enverinen 1 veí Vilatà. [-1 Foraster]',
  nodashii:     'Cada nit*, tria un jugador: mor. Els teus 2 veïns Vilatans estan enverinats.',
  vortox:       'Cada nit*, tria un jugador: mor. Les habilitats dels Vilatans donen informació falsa. Cada dia, si ningú és executat, guanya el mal.',
  // Viatgers
  barista:      'Cada nit, fins al capvespre, 1) un jugador es torna sobri, sa i rep informació certa, o 2) la seva habilitat funciona dues vegades. S\'assabenten de quin.',
  harlot:       'Cada nit*, tria un jugador viu: si accepta, saps el seu personatge, però tots dos podríeu morir.',
  butcher:      'Cada dia, després de la 1a execució, pots nominar una altra vegada.',
  bonecollector:'Un cop per partida, a la nit*, tria un jugador mort: recupera la seva habilitat fins al capvespre.',
  deviant:      'Si has estat divertit avui, no pots morir per exili.',
};
