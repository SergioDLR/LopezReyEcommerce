const productos = [
  {
    id: 1,
    title: 'Elden Ring (PC) - Steam Key',
    price: 7855,
    description:
      "Elden Ring es un juego de rol de fantasía oscura desarrollado por FromSoftware y publicado gracias a Bandai Namco Entertainment. Es una aventura épica y desafiante creada por los desarrolladores de Demon's Souls.",
    pictureUrl: 'https://img.g2a.com/323x433/1x1x0/elden-ring-pc-steam-key-europe/d5bf6f91240e45aaa1ea1201',
    category: 'cd-key',
    discount: false
  },
  {
    id: 2,
    title: 'Dark Souls III Steam Key',
    price: 3478.5,
    description:
      'Dark Souls III es el final perfecto para la épica franquicia de fantasía oscura creada por From Software. Viaja a través del reino de Lothric como el Ser de la Ceniza',
    pictureUrl: 'https://img.g2a.com/323x433/1x1x0/dark-souls-iii-steam-key-global/5912ecd65bafe3d94049a98b',
    category: 'cd-key',
    discount: false
  },
  {
    id: 3,
    title: 'Minecraft Java Edition  Key',
    price: 3141.49,
    description:
      '¡Explora, recopila recursos y deja volar tu creatividad! En este mundo sin fin, puedes poseer un poder absoluto sobre todo lo que te rodea. Obtén Minecraft Java Edition y únete a la épica comunidad de jugadores conectados por la pasión por la creación.',
    pictureUrl:
      'https://img.g2a.com/323x433/1x1x0/minecraft-java-edition-minecraft-key-global/5ca5b5095bafe32413643e03',
    category: 'cd-key',
    discount: false
  },
  {
    id: 4,
    title: 'Grand Theft Auto V (PC) - Rockstar Key',
    price: 2246,
    description:
      'Bienvenido de nuevo al soleado estado de San Andreas, donde surgen oportunidades y la gente cae. La serie Grand Theft Auto vuelve a visitar a San Andreas en el formato de triple A por primera vez desde el GTA: San Andreas',
    pictureUrl: 'https://img.g2a.com/323x433/1x1x0/grand-theft-auto-v-pc-rockstar-key-global/59e5efeb5bafe304c4426c47',
    category: 'cd-key',
    discount: true
  },
  {
    id: 5,
    title: 'Total War - Steam Key WARHAMMER III (PC) ',
    price: 7541,
    description:
      'Total War Warhammer 3  con su fecha de lanzamiento prevista para el año 2022, es la conclusión de la trilogía de juegos de Total War de Warhammer. La legendaria franquicia creada por Games Workshop ',
    pictureUrl:
      'https://img.g2a.com/323x433/1x1x0/total-war-warhammer-iii-pc-steam-key-global/601b9f4546177c75f408d6f3',
    category: 'cd-key',
    discount: false
  },
  {
    id: 6,
    title: "Sid Meier's Civilization VI | Platinum Edition (PC) - Steam Key",
    price: 2491,
    description:
      'Civilization VI es la nueva entrega de la larga serie de juegos de estrategia y la primera de la serie principal desde Civilization V de 2010. Civ 6 tiene gráficos mejorados y un estilo artístico renovado.',
    pictureUrl:
      'https://img.g2a.com/323x433/1x1x0/sid-meiers-civilization-vi-platinum-edition-steam-key-global/2517220526c446ec9d207cb9',
    category: 'cd-key',
    discount: true
  },
  {
    id: 7,
    title: 'Hearts of Iron IV: Cadet Edition (PC) - Steam Key',
    price: 1569,
    description:
      'Hearts of Iron 4 es un juego de estrategia de guerra desarrollado por Paradox Development Studio de Suecia. El juego se lanzó el 6 de junio de 2016, en el 72.º aniversario del desembarco de Normandía. ',
    pictureUrl:
      'https://img.g2a.com/323x433/1x1x0/hearts-of-iron-iv-cadet-edition-steam-key-global/5911f84e5bafe3e9a2752ace',
    category: 'cd-key',
    discount: false
  },
  {
    id: 8,
    title: 'Microsoft Xbox Series S 512GB',
    price: 98999,
    description:
      'La nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_627149-MLA44484230438_012021-O.webp',
    category: 'console',
    discount: true
  },
  {
    id: 9,
    title: 'Sony PlayStation 4 Slim 1TB',
    price: 104295,
    description:
      'Con la consola PlayStation 4, líder mundial en ventas durante años, podrás gozar de horas de juego y una excelente navegabilidad para disfrutar de películas, series y contenido online.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_752561-MLA32731813778_112019-O.webp',
    category: 'console',
    discount: true
  },
  {
    id: 10,
    title: 'Sony PlayStation 5 825GB',
    price: 246999,
    description:
      'PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp',
    category: 'console',
    discount: true
  },
  {
    id: 11,
    title: 'Nintendo Switch 32GB color rojo neón ',
    price: 92168,
    description:
      'Switch se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología de elite en un aparato portátil con el que podrás jugar y disfrutar de diverso contenido online.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_865283-MLA32731749270_112019-O.webp',
    category: 'console',
    discount: true
  },
  {
    id: 12,
    title: 'Mouse de juego Logitech G Series Lightsync G203',
    price: 2839,
    description:
      'Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_779763-MLA45385615296_032021-O.webp',
    category: 'peripherals',
    discount: false
  },
  {
    id: 13,
    title: 'Teclado gamer Redragon Kumara K552',
    price: 6632,
    description:
      'La gran calidad del Redragon Kumara K552, y su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Su ergonomía, su base antidelizante y su rápido tiempo de respuesta permite que tus juegos favoritos se sientan más cerca que nunca, al alcance de tus manos.    ',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_654842-MLA32722683116_102019-O.webp',
    category: 'peripherals',
    discount: true
  },
  {
    id: 14,
    title: 'Red Dead Redemption 2 Standard Edition ',
    price: 4599,
    description:
      'Ambientado a fines del siglo XIX y comienzos del XX, Red Dead narra la historia del bandido John Marston, quien es chantajeado por agentes federales que además, tienen amenazada a su familia. Es una franquicia de videojuegos que combina sus modernos gráficos y una gran cantidad de desafíos para sus gamers. Su completa historia hace que sea considerado por la crítica especializada como uno de los mejores juegos dentro del género aventura en los últimos años.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_667696-MLA46792682054_072021-O.webp',
    category: 'fisic',
    discount: true
  },
  {
    id: 15,
    title: 'Horizon Forbidden West Standard Edition Sony PS4',
    price: 9317,
    description:
      'Con este juego de Horizon vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer. Diversión sin fronteras Podrás compartir cada juego con personas de todo el mundo, ya que es posible conectarse de manera online.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_936910-MLA48799564615_012022-O.webp',
    category: 'fisic',
    discount: true
  },
  {
    id: 16,
    title: 'Horizon Zero Dawn Complete Edition Sony PS4',
    price: 2790,
    description:
      'Con este juego de Horizon Zero Dawn vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_632920-MLA44507414522_012021-O.webp',
    category: 'fisic',
    discount: true
  },
  {
    id: 17,
    title: 'Just Dance 2020 Ubisoft Xbox One',
    price: 6900,
    description:
      'Con este juego de Just Dance vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.Interactuá con otros jugadores Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_833926-MLA40918188646_022020-O.webp',
    category: 'fisic',
    discount: true
  },
  {
    id: 18,
    title: 'Paw Patrol: Mighty Pups Save Adventure Bay Outright Games Xbox One',
    price: 7700,
    description:
      'Con este juego de Paw Patrol vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.Interactuá con otros jugadores Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_724090-MLA45628970108_042021-O.webp',
    category: 'fisic',
    discount: false
  },
  {
    id: 19,
    title: 'Nintendo 2DS Link Edition color verde y negro',
    price: 41999,
    description:
      'Con tu consola 2DS tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_954295-MLA40301333423_012020-O.webp',
    category: 'console',
    discount: true
  },
  {
    id: 20,
    title: 'Consola Level Up Retroboy 8GB color blanco',
    price: 2929,
    description:
      'Con tu consola Retroboy tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_966564-MLA32731490045_112019-O.webp',
    category: 'console',
    discount: true
  },
  {
    id: 21,
    title: 'Auriculares gamer inalámbricos HyperX Cloud Flight',
    price: 15899,
    description:
      'Ideado para los gamers más exigentes, el HyperX Cloud Flight tiene todo lo que un jugador busca. Su conectividad inalámbrica permite moverte de un lugar a otro sin cables. A su vez, su batería de larga duración te dará horas interminables de sonidos envolventes en tus partidas. Sus orejeras son sinónimo de comodidad, ya que pueden rotar en un ángulo de 90 grados y reposar de forma suave en tu cuello. Y como si esto fuera poco, en estas vas a controlar los efectos de luz LED, silenciar o encender el micrófono con cancelación de ruido y regular el volumen.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_675916-MLA40762447172_022020-O.webp',
    category: 'peripherals',
    discount: false
  },
  {
    id: 22,
    title: 'Auriculares gamer inalámbricos Logitech G Series G733',
    price: 18711,
    description:
      '¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G733 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_760857-MLA44771394445_022021-O.webp',
    category: 'peripherals',
    discount: true
  },
  {
    id: 23,
    title: 'Just Dance 2018 Ubisoft Xbox 360 Digital',
    price: 420,
    description:
      'Con este juego de Just Dance 2018 vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.Interactuá con otros jugadores Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_606230-MLA44495198781_012021-O.webp',
    category: 'cd-key',
    discount: true
  },
  {
    id: 24,
    title: 'Mortal Kombat XL Warner Bros. Xbox One',
    price: 729,
    description:
      'Desde su primera edición, Mortal Kombat, revolucionó el género de pelea. Cada luchador tiene su historia de vida, sus trucos especiales y su estilo de combatir al rival, lo que convierte a esta franquicia en una de las más completas del género.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_614188-MLA40864140518_022020-O.webp',
    category: 'cd-key',
    discount: true
  },
  {
    id: 25,
    title: 'Dragon Ball Xenoverse Bandai Namco Xbox One Físico',
    price: 1199,
    description:
      'Con este juego de Dragon Ball Xenoverse vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.Interactuá con otros jugadores Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_639149-MLA40919327052_022020-O.webp',
    category: 'cd-key',
    discount: false
  },
  {
    id: 26,
    title: 'Joystick inalámbrico Sony PlayStation DualSense CFI-ZCT1 cosmic red',
    price: 13999,
    description:
      'Este mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.',
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_665357-MLA46237938567_062021-O.webp',
    category: 'peripherals',
    discount: false
  }
]

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId === undefined) resolve(productos)
      else resolve(productos.filter((producto) => producto.category === categoryId))
    }, 2000)
  })
}

export const getSingleProduct = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos.find((product) => product.id === Number(itemId))), 2000)
  })
}
