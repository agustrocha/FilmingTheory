import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        name: 'Filming Theory',
        images: [],
        video_link: 'https://youtu.be/w7a9skMkNqk'
      },
      {
        id: '0001',
        name: 'L´architetto',
        project_type: 'Spot publicitario',
        description_1: '¿Qué haces cuando descubres que el deporte no es una meta a lograr sino una forma de vida? Ese fue el aprendizaje tras nuestra colaboración con L´Architetto. Realizamos este spot para captar el concepto que desarrollan en su filosofía de marca, «You are your only limit». El trabajo y el equipo fue excelente y por eso nos complace mostrar este spot y su mensaje a quien quiera verlo.',
        description_2: 'Cuando el sedentarismo se encuentra presente en la vida de muchas personas, justifican su falta de actividad física con su “buena forma física”, buena salud o motivación personal. Pero el deporte no es sólo eso. El deporte es algo más que un objetivo.',
        audiovisual_production: 'Filming Theory @filmingtheory | www.filmingtheory.com',
        client: ' L\'architetto -marca de ropa-. @larchitetto_',
        colaboration_with: 'Oya Team @oya_team Alta Fit @altafittenerife',
        header_banner: 'https://drive.google.com/uc?export=view&id=1Ke1hAZOJ7HYJxL4TXd_q3dibazG-RTww',
        images: ['https://drive.google.com/uc?export=view&id=1VUgIOWPfDUIxoUCE7hTOpAJVaMqxXCFb', 'https://drive.google.com/uc?export=view&id=1VUgIOWPfDUIxoUCE7hTOpAJVaMqxXCFb', 'https://drive.google.com/uc?export=view&id=1VUgIOWPfDUIxoUCE7hTOpAJVaMqxXCFb', 'https://drive.google.com/uc?export=view&id=1VUgIOWPfDUIxoUCE7hTOpAJVaMqxXCFb', 'https://drive.google.com/uc?export=view&id=1VUgIOWPfDUIxoUCE7hTOpAJVaMqxXCFb', 'https://drive.google.com/uc?export=view&id=1VUgIOWPfDUIxoUCE7hTOpAJVaMqxXCFb', 'https://drive.google.com/uc?export=view&id=1VUgIOWPfDUIxoUCE7hTOpAJVaMqxXCFb'],
        team: 'Dirección: Eduardo Suárez @edufilmingtheory\n' +
          'Ayudante de dirección: Aliya Akhunova @aliyakhunova\n' +
          'Script: Sebas @seb_rik11 \n' +
          'Casting: Eduardo Suárez @edufilmingtheory; Aliya Akhunova @aliyakhunova; Gio @gio_en_audiovisual\n' +
          'Equipo de producción: Fede @federicodelgadolopez; Gabri @gabriela_producer; Natalia @natidicas\n' +
          'Localización: Ylenia @yleniasiverio; Elicio Hernández; Tracy @tracymedz; Ylenia @yleniasiverio\n' +
          'Operador cámara 1: Ayo @ayoxe\n' +
          'Operador cámara 2: Tracy @tracymedz\n' +
          'Operador cámara 3: Eduardo Suárez @edufilmingtheory\n' +
          'Ayudante de cámara: Álvaro Rey\n' +
          'Dron: Tommy García @tommy_progo\n' +
          'Foto fija: Gema @gmahdez\n' +
          'Ayudante de iluminación: Tracy @tracymedz\n' +
          'Directora de arte: Gio @gio_en_audiovisual\n' +
          'Estilista: Aliya Akhunova @aliyakhunova\n' +
          'Maquillaje: Sonia @sonii_makeup\n' +
          'Peluquería: @fuentesnerea @paulahairstyle_\n' +
          'Edición: Eduardo Suárez @edufilmingtheory\n' +
          'Diseño sonido: Eduardo Suárez @edufilmingtheory\n' +
          'Etalonaje: Eduardo Suárez @edufilmingtheory\n' +
          'Diseño gráfico: Atteneri González @attenerigonmen\n' +
          'Reparto: Cristián Hidalgo @chv_cristian; Bea Díaz @bdm_bea; Aygul Akhunova @akhunovaygul; \n' +
          'Carlos Gómez; Ricardo Carrabia @rjcarrabiabmx; Sergio Ruíz @sergioruiz8; Ana Berdejo @anaber_mrs_model; Mamadou @black_perry1; Salva @salva_roguez24; Jennifer Obama @jennifer_obama; Jorge Peraza @jorperaza; Cathaysa Leyton @catyleyton_ \n' +
          '\n',
        music: 'Música: Sport Cars Rock by Infraction [No Copyright Music]\n',
        copyright: '© Filming Theory 2021',
        videos: []
      },
      {
        id: '0002',
        name: 'Peccati Di Gola',
        project_type: 'Video reel',
        header_banner: 'https://drive.google.com/uc?export=view&id=1VZcjYjeaJ84w7nsG2FN4KK9tvuC_43KC',
        images: ['https://drive.google.com/uc?export=view&id=1nI0cmjICK9AtMxIealnvcdpdoQwBjSIK'],
        description_1: 'Muestra de vídeo reel de una de las primeras empresas en restauración que nos confió un trabajo de fotografía, vídeo, diseño de RRSS y cartelería personalizado para su comercio. Trabajamos con un equipo pequeño debido a las circunstancias restrictivas a causa del COVID 19. Aún así, el trabajo fue fructífero y cumplimos todas las metas y expectativas marcadas.',
        audiovisual_production: 'Producción audiovisual: Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Cliente: Pecatti Di Gola -restaurante italiano en Tenerife-. @pecattidigola.menu',
        team: 'Fotografía: Ayoze Delgado @ayoxe\n' +
          'Vídeo: Eduardo Suárez @edufilmingtheory\n' +
          'Ayudante de cámara: Aliya Akhunova @aliyakhunova\n' +
          'Modelo: Sara Ramos @sara.ramoss_\n',
        music: 'Swing Beats Jazz Hop Lo-fi Chill Mix [No Copyright Music]',
        copyright: '© Filming Theory 2021'
      },
      {
        id: '0003',
        name: 'Aliya Akhunova',
        project_type: 'Fashion film',
        header_banner: 'https://drive.google.com/uc?export=view&id=11kfB2jcJPtwVcLLrNeV1g8PGlOsscxwP',
        images: ['https://drive.google.com/uc?export=view&id=1yoO21Waf4xKQ4GqrY9Mlwprv2-zzzJy4'],
        description_1: 'Aliya Akhunova, diseñadora rusa residente en Tenerife, contactó con nosotros para llevar a cabo un fashion film de uno de sus diseños y fotografía de producto de la colección que presentó al concurso Jóvenes Diseñadores.',
        audiovisual_production: 'Producción audiovisual: Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Aliya Akhunova @aliyakhunova',
        team: 'Director de fotografía: Eduardo Suárez @edufilmingtheory\n' +
          'Ayudante de cámara: Ayoze Delgado @ayoxe \n' +
          'Vestuario: Aliya Akhunova @aliyakhunova\n' +
          'Modelo: Aygul Akhunova @akhunovaygul\n',
        music: '[Copyright Music]',
        copyright: '© Filming Theory 2021'
      },
      {
        id: '0004',
        name: 'Blackout Films',
        project_type: 'Video reel',
        header_banner: 'https://drive.google.com/uc?export=view&id=1_QLcWibuAcnKzEk-yFthwNNw1KQhUNFR',
        images: ['https://drive.google.com/uc?export=view&id=1ZxVV_CUw-h3GUPkoEfvQYmVKCD0fh-mU'],
        description_1: 'Este video reel para la empresa Blackout Film, nos dio la oportunidad de realizar un proyecto que recopila muchas de las producciones con las que llegaron a colaborar en el año 2019. Trabajo arduo que nos dio la posibilidad de estar en contacto con archivos de grandes producciones como Mugler, Northwestern Mutual o grandes directores de fotografía como Lubezki.',
        audiovisual_production: 'Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Blackout Films @blackout_films',
        editor: 'Eduardo Suárez @edufilmingtheory',
        spots: ['Northwestern Mutual Commercial - Travel Planning', 'Alien Mugler Eau de Parfum - The Film', 'Armani Exchange - Martin Garrix - Internacional Spot'],
        copyright: '© Filming Theory 2021'
      },
      {
        id: '0005',
        name: 'Eventos',
        project_type: 'Highlights',
        header_banner: 'https://drive.google.com/uc?export=view&id=1lzvNtDnjliBS0l1MZlYu7l5emMRnxEkj',
        images: ['https://drive.google.com/uc?export=view&id=1Jcncxipfi0lp2zx4xK7Gmjs5gTLeloX9'],
        description_1: 'Pablo y Karen decidieron contar con nosotros para dejar constancia en vídeo de uno de los momentos más importantes de sus vidas, su boda. Para nosotros es un placer haberlos acompañado.',
        audiovisual_production: 'Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Particular',
        editor: 'Editor: Eduardo Suárez @edufilmingtheory',
        music: '[Copyright Music]',
        copyright: '© Filming Theory 2021'
      },
      {
        id: '0006',
        name: 'Hamilton',
        project_type: 'Teaser',
        header_banner: 'https://drive.google.com/uc?export=view&id=1Vws07O9m0Mx6_Y-Fa5VEOQzIYGqupsbt',
        images: ['https://drive.google.com/uc?export=view&id=1P1j-kR01-z-g_lDAQ7XTWzCN1Muse7FO'],
        description_1: '"Hamilton" cuenta la vida del entonces secretario del Tesoro y uno de los padres fundadores de Estados Unidos, pero quizás el menos conocido, Alexander Hamilton. \n' +
          '\n' +
          'La premisa de la historia y el hecho de tener que grabar durante una de sus funciones, nos mostraron la complejidad de alcanzar imágenes de buena calidad en entornos luminosos y de exposición complejos. Al final en la dificultad radica el aprendizaje y gracias a Mandrágora Producciones nosotros aprendimos muchísimo.\n',
        audiovisual_production: 'Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Mandrágora Producciones',
        team: ['Dirección: Ariadna Simó y Melodie Schmunk', 'Director de fotografía: Eduardo Suárez @edufilmingtheory', 'Ayudante de cámara: Aliya Akhunova @aliyakhunova'],
        music: '[Copyright Music]',
        copyright: '© Filming Theory 2021'
      },
      {
        id: '0007',
        name: 'Mr.Global',
        project_type: 'Film',
        header_banner: 'https://drive.google.com/uc?export=view&id=1UpgX9FS_kD7vluZ3z2RFnkVEPpw3IE9z',
        images: ['https://drive.google.com/uc?export=view&id=1GTfE9AJ_ddKJkENLhigvaHfaCVnhAKLH'],
        description_1: 'Jorge Peraza, influencer y ganador de Mr. Global Tenerife, contrató nuestros servicios para realizar su vídeo de presentación a Mr. Global España. Además de que un placer trabajar con él, este proyecto nos permitió visitar lugares emblemáticos de la isla de Tenerife y ayudar con un mensaje positivo y de concienciación sobre el medioambiente en Canarias.',
        audiovisual_production: 'Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Jorge Peraza - Mr Global Tf @jorperaza',
        colaboration_with: 'Agencia Bellegroup @agencia_bellegroup',
        team: ['DOP: Eduardo Suárez @edufilmingtheory', 'Fotógrafo: Adrián de la Cruz  @a_delacruz'],
        copyright: '© Filming Theory 2021'
      }
    ],
    menuLinks: [
      {
        title: 'Portfolio'
      },
      {
        title: '¿Quiènes somos?'
      },
      {
        title: 'Productos y servicios',
        submenuLinks: ['Videomarketing', 'YAYA La capsula del tiempo']
      },
      {
        title: 'Contacto'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
