// ABC Kids – a felület szövegei és a billentyűzet-kiosztások. Új nyelv: másolj le egy blokkot, és vedd fel az emojik.js "langs" listájába is.
// flag: a flag-icons országkódja (flags/<kód>.svg).
// kb.abc / kb.qwe: a saját billentyűzet sorai ("⌫" = törlés). Több betűs gomb (pl. "CS") egyszerre több vonalat tölt ki.
window.LANGS={
hu:{flag:'hu',name:'Magyar',title:'ABC Kids',language:'Nyelv',level:'Nehézség',letter:'Betű',
 help:'Segítség',case:'Nagybetű / kisbetű',prev:'Előző szó',next:'Következő szó',erase:'Törlés',
 hint:'Írd be a hiányzó betűket.',fix:'Javítsd ki a pirossal jelölt betűket.',great:'Szuper!',close:'Bezár',
 settings:'Beállítások',
 kb_sys:'Rendszer billentyűzet',kb_sys_d:'Számítógépen a gombok, telefonon a telefon saját billentyűzete.',
 kb_abc:'Saját billentyűzet: ABC sorrend',kb_abc_d:'A betűk ábécé sorrendben, a kettős betűk és az ékezetesek külön gombon.',
 kb_qwe:'Saját billentyűzet: QWERTZ',kb_qwe_d:'A számítógépes kiosztás szerint, a kettős betűk nélkül.',
 kb:{abc:[['A','Á','B','C','CS','D','DZ','DZS','E'],
          ['É','F','G','GY','H','I','Í','J','K'],
          ['L','LY','M','N','NY','O','Ó','Ö','Ő'],
          ['P','Q','R','S','SZ','T','TY','U','Ú'],
          ['Ü','Ű','V','W','X','Y','Z','ZS','⌫']],
     qwe:[['Q','W','E','R','T','Z','U','I','O','P'],
          ['A','S','D','F','G','H','J','K','L'],
          ['Y','X','C','V','B','N','M','⌫'],
          ['Á','É','Í','Ó','Ö','Ő','Ú','Ü','Ű']]}},
es:{flag:'es',name:'Español',title:'ABC Kids',language:'Idioma',level:'Dificultad',letter:'Letra',
 help:'Ayuda',case:'Mayúsculas / minúsculas',prev:'Palabra anterior',next:'Siguiente palabra',erase:'Borrar',
 hint:'Escribe las letras que faltan.',fix:'Corrige las letras marcadas en rojo.',great:'¡Muy bien!',close:'Cerrar',
 settings:'Ajustes',
 kb_sys:'Teclado del sistema',kb_sys_d:'En el ordenador las teclas, en el móvil el teclado del teléfono.',
 kb_abc:'Teclado propio: orden alfabético',kb_abc_d:'Las letras en orden alfabético.',
 kb_qwe:'Teclado propio: QWERTY',kb_qwe_d:'Como en el ordenador.',
 kb:{abc:[['A','B','C','D','E','F','G','H','I'],
          ['J','K','L','M','N','Ñ','O','P','Q'],
          ['R','S','T','U','V','W','X','Y','Z','⌫']],
     qwe:[['Q','W','E','R','T','Y','U','I','O','P'],
          ['A','S','D','F','G','H','J','K','L','Ñ'],
          ['Z','X','C','V','B','N','M','⌫']]}}
};
