// ABC Kids – a feladványok: emoji + a szó neve nyelvenként.
// Szerkesztés: minden sor egy emoji. Az oszlopok sorrendje a "langs" listáé: [emoji, magyar, spanyol].
// A szavak NAGYBETŰSEK, szóköz nélkül. Spanyolban a névelő a szó előtt áll, szóközzel elválasztva (pl. 'EL PERRO'),
// ez a játékban fix, kisebb betűkkel jelenik meg a kitöltendő vonalak fölött.
// Új nyelv: vedd fel a "langs"-be (és a lang.js-be), majd minden sor végére írd be a szót. Ha egy nyelvnél üres a szó (''), az az emoji abban a nyelvben kimarad.
// A "digraphs" a kettős (hármas) betűk listája nyelvenként: a feladványban ezek vonalai összekötve jelennek meg.
window.WORDS={
langs:['hu','es'],
digraphs:{hu:['DZS','CS','DZ','GY','LY','NY','SZ','TY','ZS']},
items:[
// --- állatok ---
['🐶','KUTYA','EL PERRO'],['🐱','MACSKA','EL GATO'],['🐭','EGÉR','EL RATÓN'],['🐹','HÖRCSÖG','EL HÁMSTER'],['🐰','NYUSZI','EL CONEJO'],
['🦊','RÓKA','EL ZORRO'],['🐻','MEDVE','EL OSO'],['🐼','PANDA','EL PANDA'],['🐨','KOALA','EL KOALA'],['🐯','TIGRIS','EL TIGRE'],
['🦁','OROSZLÁN','EL LEÓN'],['🐮','TEHÉN','LA VACA'],['🐷','MALAC','EL CERDO'],['🐸','BÉKA','LA RANA'],['🐵','MAJOM','EL MONO'],
['🐔','TYÚK','LA GALLINA'],['🐧','PINGVIN','EL PINGÜINO'],['🐦','MADÁR','EL PÁJARO'],['🐤','CSIBE','EL POLLITO'],['🦆','KACSA','EL PATO'],
['🦅','SAS','EL ÁGUILA'],['🦉','BAGOLY','EL BÚHO'],['🦇','DENEVÉR','EL MURCIÉLAGO'],['🐺','FARKAS','EL LOBO'],['🐗','VADDISZNÓ','EL JABALÍ'],
['🐴','LÓ','EL CABALLO'],['🦄','EGYSZARVÚ','EL UNICORNIO'],['🐝','MÉH','LA ABEJA'],['🐛','HERNYÓ','LA ORUGA'],['🦋','PILLANGÓ','LA MARIPOSA'],
['🐌','CSIGA','EL CARACOL'],['🐞','KATICA','LA MARIQUITA'],['🐜','HANGYA','LA HORMIGA'],['🕷️','PÓK','LA ARAÑA'],['🦂','SKORPIÓ','EL ESCORPIÓN'],
['🐢','TEKNŐS','LA TORTUGA'],['🐍','KÍGYÓ','LA SERPIENTE'],['🦎','GYÍK','LA LAGARTIJA'],['🦖','DINÓ','EL DINOSAURIO'],['🐙','POLIP','EL PULPO'],
['🦑','TINTAHAL','EL CALAMAR'],['🦐','GARNÉLA','LA GAMBA'],['🦀','RÁK','EL CANGREJO'],['🐠','HAL','EL PEZ'],['🐬','DELFIN','EL DELFÍN'],
['🐳','BÁLNA','LA BALLENA'],['🦈','CÁPA','EL TIBURÓN'],['🐊','KROKODIL','EL COCODRILO'],['🐘','ELEFÁNT','EL ELEFANTE'],['🦒','ZSIRÁF','LA JIRAFA'],
['🦓','ZEBRA','LA CEBRA'],['🦍','GORILLA','EL GORILA'],['🦛','VÍZILÓ','EL HIPOPÓTAMO'],['🦏','ORRSZARVÚ','EL RINOCERONTE'],['🐫','TEVE','EL CAMELLO'],
['🦘','KENGURU','EL CANGURO'],['🐑','JUH','LA OVEJA'],['🐐','KECSKE','LA CABRA'],['🦌','SZARVAS','EL CIERVO'],['🐿️','MÓKUS','LA ARDILLA'],
['🦔','SÜNI','EL ERIZO'],['🦥','LUSTAMAJOM','EL PEREZOSO'],['🦦','VIDRA','LA NUTRIA'],['🦩','FLAMINGÓ','EL FLAMENCO'],['🦜','PAPAGÁJ','EL LORO'],
['🦢','HATTYÚ','EL CISNE'],['🦃','PULYKA','EL PAVO'],['🐓','KAKAS','EL GALLO'],['🐲','SÁRKÁNY','EL DRAGÓN'],
// --- gyümölcs, zöldség, étel ---
['🍎','ALMA','LA MANZANA'],['🍌','BANÁN','EL PLÁTANO'],['🍇','SZŐLŐ','LAS UVAS'],['🍓','EPER','LA FRESA'],['🍉','DINNYE','LA SANDÍA'],
['🍊','NARANCS','LA NARANJA'],['🍋','CITROM','EL LIMÓN'],['🍍','ANANÁSZ','LA PIÑA'],['🍒','CSERESZNYE','LA CEREZA'],['🍑','BARACK','EL MELOCOTÓN'],
['🍐','KÖRTE','LA PERA'],['🥝','KIWI','EL KIWI'],['🥥','KÓKUSZ','EL COCO'],['🥭','MANGÓ','EL MANGO'],['🥑','AVOKÁDÓ','EL AGUACATE'],
['🍅','PARADICSOM','EL TOMATE'],['🥕','SÁRGARÉPA','LA ZANAHORIA'],['🌽','KUKORICA','EL MAÍZ'],['🥔','BURGONYA','LA PATATA'],['🍄','GOMBA','LA SETA'],
['🥦','BROKKOLI','EL BRÓCOLI'],['🥒','UBORKA','EL PEPINO'],['🧅','HAGYMA','LA CEBOLLA'],['🧄','FOKHAGYMA','EL AJO'],['🍞','KENYÉR','EL PAN'],
['🧀','SAJT','EL QUESO'],['🥚','TOJÁS','EL HUEVO'],['🍕','PIZZA','LA PIZZA'],['🍔','HAMBURGER','LA HAMBURGUESA'],['🍦','FAGYI','EL HELADO'],
['🍩','FÁNK','EL DONUT'],['🍪','KEKSZ','LA GALLETA'],['🎂','TORTA','LA TARTA'],['🍫','CSOKI','EL CHOCOLATE'],['🍬','CUKORKA','EL CARAMELO'],
['🍭','NYALÓKA','LA PIRULETA'],['🍯','MÉZ','LA MIEL'],['🥛','TEJ','LA LECHE'],['☕','KÁVÉ','EL CAFÉ'],['🥐','KIFLI','EL CRUASÁN'],['🥞','PALACSINTA','LA TORTITA'],
// --- járművek ---
['🚗','AUTÓ','EL COCHE'],['🚕','TAXI','EL TAXI'],['🚌','BUSZ','EL AUTOBÚS'],['🚑','MENTŐ','LA AMBULANCIA'],['🚜','TRAKTOR','EL TRACTOR'],
['🚲','BICIKLI','LA BICICLETA'],['🛴','ROLLER','EL PATINETE'],['🏍️','MOTOR','LA MOTO'],['🚂','MOZDONY','LA LOCOMOTORA'],['🚆','VONAT','EL TREN'],
['✈️','REPÜLŐ','EL AVIÓN'],['🚁','HELIKOPTER','EL HELICÓPTERO'],['🚀','RAKÉTA','EL COHETE'],['🛸','UFÓ','EL OVNI'],['⛵','VITORLÁS','EL VELERO'],
['🚢','HAJÓ','EL BARCO'],['🛶','KENU','LA CANOA'],
// --- természet, helyek ---
['🏠','HÁZ','LA CASA'],['🏰','VÁR','EL CASTILLO'],['🏫','ISKOLA','LA ESCUELA'],['🏥','KÓRHÁZ','EL HOSPITAL'],['⛪','TEMPLOM','LA IGLESIA'],
['🌉','HÍD','EL PUENTE'],['🗼','TORONY','LA TORRE'],['⛲','KÚT','LA FUENTE'],['🏖️','STRAND','LA PLAYA'],['⛰️','HEGY','LA MONTAÑA'],
['🌋','VULKÁN','EL VOLCÁN'],['🏝️','SZIGET','LA ISLA'],['🌳','FA','EL ÁRBOL'],['🌲','FENYŐ','EL PINO'],['🌴','PÁLMA','LA PALMERA'],
['🌵','KAKTUSZ','EL CACTUS'],['🌻','NAPRAFORGÓ','EL GIRASOL'],['🌹','ROZSA','LA ROSA'],['🌷','TULIPÁN','EL TULIPÁN'],['🍀','LÓHERE','EL TRÉBOL'],
['🍁','LEVÉL','LA HOJA'],['🌈','SZIVÁRVÁNY','EL ARCOÍRIS'],['☀️','NAP','EL SOL'],['🌙','HOLD','LA LUNA'],['⭐','CSILLAG','LA ESTRELLA'],
['☁️','FELHŐ','LA NUBE'],['⚡','VILLÁM','EL RAYO'],['☂️','ESERNYŐ','EL PARAGUAS'],['🔥','TŰZ','EL FUEGO'],['💧','CSEPP','LA GOTA'],
['🌊','HULLÁM','LA OLA'],['🌍','FÖLD','LA TIERRA'],['🪐','BOLYGÓ','EL PLANETA'],['🎃','TÖK','LA CALABAZA'],
// --- tárgyak ---
['⚽','LABDA','LA PELOTA'],['🎈','LUFI','EL GLOBO'],['🎁','AJÁNDÉK','EL REGALO'],['🎸','GITÁR','LA GUITARRA'],['🎹','ZONGORA','EL PIANO'],
['🥁','DOB','EL TAMBOR'],['🎺','TROMBITA','LA TROMPETA'],['🎻','HEGEDŰ','EL VIOLÍN'],['🎨','PALETTA','LA PALETA'],['🎤','MIKROFON','EL MICRÓFONO'],
['📖','KÖNYV','EL LIBRO'],['✏️','CERUZA','EL LÁPIZ'],['✂️','OLLÓ','LAS TIJERAS'],['🔑','KULCS','LA LLAVE'],['🔔','HARANG','LA CAMPANA'],
['⏰','ÓRA','EL RELOJ'],['📱','TELEFON','EL TELÉFONO'],['💻','LAPTOP','EL PORTÁTIL'],['📷','KAMERA','LA CÁMARA'],['💡','IZZÓ','LA BOMBILLA'],
['🔦','ZSEBLÁMPA','LA LINTERNA'],['🧲','MÁGNES','EL IMÁN'],['🕯️','GYERTYA','LA VELA'],['🪑','SZÉK','LA SILLA'],['🛏️','ÁGY','LA CAMA'],
['🚪','AJTÓ','LA PUERTA'],['🪟','ABLAK','LA VENTANA'],['🛁','KÁD','LA BAÑERA'],['🚿','ZUHANY','LA DUCHA'],['🧸','MACI','EL PELUCHE'],
['👓','SZEMÜVEG','LAS GAFAS'],['🎩','KALAP','EL SOMBRERO'],['👟','CIPŐ','LA ZAPATILLA'],['🧦','ZOKNI','EL CALCETÍN'],['👕','PÓLÓ','LA CAMISETA'],
['👗','RUHA','EL VESTIDO'],['🧤','KESZTYŰ','EL GUANTE'],['🧣','SÁL','LA BUFANDA'],['👑','KORONA','LA CORONA'],['💍','GYŰRŰ','EL ANILLO'],
['🎒','HÁTIZSÁK','LA MOCHILA'],['🔨','KALAPÁCS','EL MARTILLO'],['🪚','FŰRÉSZ','LA SIERRA'],['🪣','VÖDÖR','EL CUBO'],['🧹','SEPRŰ','LA ESCOBA'],
['🧺','KOSÁR','LA CESTA'],['🔍','NAGYÍTÓ','LA LUPA'],['🧩','KIRAKÓ','EL PUZLE'],['🎯','CÉLTÁBLA','LA DIANA'],['🎮','JÁTÉK','EL JUEGO'],
['🏆','KUPA','LA COPA'],['🥇','ÉREM','LA MEDALLA'],['🪙','ÉRME','LA MONEDA'],['📦','DOBOZ','LA CAJA'],['✉️','BORÍTÉK','EL SOBRE'],
['🧭','IRÁNYTŰ','LA BRÚJULA'],['⚓','HORGONY','EL ANCLA'],['🪜','LÉTRA','LA ESCALERA'],['🪞','TÜKÖR','EL ESPEJO'],['🧽','SZIVACS','LA ESPONJA'],
['🧼','SZAPPAN','EL JABÓN'],
// --- test, emberek, mesék ---
['👁️','SZEM','EL OJO'],['👂','FÜL','LA OREJA'],['👃','ORR','LA NARIZ'],['👄','SZÁJ','LA BOCA'],['🦷','FOG','EL DIENTE'],
['🦴','CSONT','EL HUESO'],['✋','KÉZ','LA MANO'],['🦶','LÁB','EL PIE'],['🧠','AGY','EL CEREBRO'],['❤️','SZÍV','EL CORAZÓN'],
['👶','BABA','EL BEBÉ'],['👦','FIÚ','EL NIÑO'],['👧','LÁNY','LA NIÑA'],['👨','FÉRFI','EL HOMBRE'],['👩','NŐ','LA MUJER'],
['👴','NAGYAPA','EL ABUELO'],['👵','NAGYI','LA ABUELA'],['🤖','ROBOT','EL ROBOT'],['👻','SZELLEM','EL FANTASMA'],['👽','ÚRLÉNY','EL MARCIANO'],
['🧙','VARÁZSLÓ','EL MAGO'],['🧚','TÜNDÉR','EL HADA'],['🧜','SELLŐ','LA SIRENA'],['🤡','BOHÓC','EL PAYASO'],['👸','HERCEGNŐ','LA PRINCESA'],
['🤴','HERCEG','EL PRÍNCIPE']
]};
