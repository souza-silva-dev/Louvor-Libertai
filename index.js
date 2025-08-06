 const conselhos = [
      "Confie no Senhor de todo o seu coração. Provérbios 3:5",
      "Não ande ansioso por coisa alguma. Filipenses 4:6",
      "Ame o próximo como a si mesmo. Marcos 12:31",
      "Busque a Deus em primeiro lugar. Mateus 6:33",
      "Perdoe sempre, assim como Deus perdoa você. Efésios 4:32",
      "Seja forte e corajoso. Josué 1:9",
      "Fuja do mal e siga o que é bom. 1 Tessalonicenses 5:22",
      "Ore sem cessar. 1 Tessalonicenses 5:17",
      "Seja grato em todas as circunstâncias. 1 Tessalonicenses 5:18",
      "Não se conforme com este mundo. Romanos 12:2",
      "Guarde o seu coração, pois dele procedem as fontes da vida. Provérbios 4:23",
      "Não julgue para não ser julgado. Mateus 7:1",
      "Tudo o que fizer, faça como para o Senhor. Colossenses 3:23",
      "Tenha fé, pois para Deus nada é impossível. Lucas 1:37",
      "Ande com sabedoria e humildade. Tiago 3:13",
      "Honre pai e mãe. Êxodo 20:12",
      "Seja luz onde estiver. Mateus 5:14",
      "Controle sua língua, pois palavras têm poder. Provérbios 18:21",
      "Faça o bem sem esperar recompensa. Mateus 6:3-4",
      "Espere no Senhor com paciência. Salmo 37:7",
      "Examine as escrituras. João 5:39",
      "Dedique-se ao seu ministério",
      "Ame louvar a Deus",
      "Gaste tempo estudando as músicas",
      "Se dedique em aprender",
      
   
    ];

    function gerarConselho() {
      const aleatorio = Math.floor(Math.random() * conselhos.length);
      document.getElementById("conselho").textContent = conselhos[aleatorio];
    }