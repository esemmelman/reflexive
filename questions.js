const questions = [
  { sentence: 'Yo ___ levanto a las siete.', translation: 'I get up at seven.', hint: 'I get up', answer: 'me', explanation: 'Use me with yo (I): yo me levanto.' },
  { sentence: 'Yo ___ lavo las manos.', translation: 'I wash my hands.', hint: 'I wash my hands', answer: 'me', explanation: 'Use me with yo (I). Spanish uses las manos with the reflexive pronoun to say “my hands.”' },
  { sentence: 'Tú ___ cepillas los dientes.', translation: 'You brush your teeth.', hint: 'you (one friend)', answer: 'te', explanation: 'Use te with tú (you, one person informally): tú te cepillas.' },
  { sentence: 'Tú ___ duchas por la mañana.', translation: 'You shower in the morning.', hint: 'you (one friend)', answer: 'te', explanation: 'Use te with tú (you, one person informally): tú te duchas.' },
  { sentence: 'Ella ___ peina antes de salir.', translation: 'She combs her hair before going out.', hint: 'she combs her hair', answer: 'se', explanation: 'Use se with ella (she): ella se peina.' },
  { sentence: 'Usted ___ despierta temprano.', translation: 'You wake up early.', hint: 'you (one person, formally)', answer: 'se', explanation: 'Use se with usted (formal you), just as with él and ella: usted se despierta.' },
  { sentence: 'Nosotros ___ acostamos a las diez.', translation: 'We go to bed at ten.', hint: 'we go to bed', answer: 'nos', explanation: 'Use nos with nosotros (we): nosotros nos acostamos.' },
  { sentence: 'Nosotras ___ preparamos para la escuela.', translation: 'We get ready for school.', hint: 'we (a group of girls or women)', answer: 'nos', explanation: 'Use nos with nosotras (we), just as with nosotros: nosotras nos preparamos.' },
  { sentence: 'Vosotros ___ vestís rápidamente.', translation: 'You all get dressed quickly.', hint: 'you all (informally in Spain)', answer: 'os', explanation: 'Use os with vosotros or vosotras (informal plural you in Spain): vosotros os vestís.' },
  { sentence: 'Ellos ___ afeitan por la mañana.', translation: 'They shave in the morning.', hint: 'they shave', answer: 'se', explanation: 'Use se with ellos (they). Ellas and ustedes also use se.' }
].map(question => ({ ...question, choices: ['me', 'te', 'se', 'nos', 'os'] }));
