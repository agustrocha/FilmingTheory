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
        header_banner: 'images/larchitetto/PáginaLarchitteto.jpg',
        home_image: 'images/larchitetto/PortadaLarchittetojpg.jpg',
        images: ['images/larchitetto/carrousel/Architetto.jpg', 'images/larchitetto/carrousel/Architetto1.jpg', 'images/larchitetto/carrousel/Architetto2.jpg', 'images/larchitetto/carrousel/Architetto3.jpg', 'images/larchitetto/carrousel/Architetto4.jpg', 'images/larchitetto/carrousel/Architetto5.jpg', 'images/larchitetto/carrousel/Architetto6.jpg'],
        team: ['Dirección: Eduardo Suárez @edufilmingtheory',
          'Ayudante de dirección: Aliya Akhunova @aliyakhunova',
          'Script: Sebas @seb_rik11 \n',
          'Casting: Eduardo Suárez @edufilmingtheory; Aliya Akhunova @aliyakhunova; Gio @gio_en_audiovisual\n',
          'Equipo de producción: Fede @federicodelgadolopez; Gabri @gabriela_producer; Natalia @natidicas\n',
          'Localización: Ylenia @yleniasiverio; Elicio Hernández; Tracy @tracymedz; Ylenia @yleniasiverio\n',
          'Operador cámara 1: Ayo @ayoxe\n',
          'Operador cámara 2: Tracy @tracymedz\n',
          'Operador cámara 3: Eduardo Suárez @edufilmingtheory\n',
          'Ayudante de cámara: Álvaro Rey\n',
          'Dron: Tommy García @tommy_progo\n',
          'Foto fija: Gema @gmahdez\n',
          'Ayudante de iluminación: Tracy @tracymedz\n',
          'Directora de arte: Gio @gio_en_audiovisual\n',
          'Estilista: Aliya Akhunova @aliyakhunova\n',
          'Maquillaje: Sonia @sonii_makeup\n',
          'Peluquería: @fuentesnerea @paulahairstyle_\n',
          'Edición: Eduardo Suárez @edufilmingtheory\n',
          'Diseño sonido: Eduardo Suárez @edufilmingtheory\n',
          'Etalonaje: Eduardo Suárez @edufilmingtheory\n',
          'Diseño gráfico: Atteneri González @attenerigonmen\n'],
        music: 'Música: Sport Cars Rock by Infraction [No Copyright Music]',
        copyright: '© Filming Theory 2021',
        video: 'https://www.youtube.com/watch?v=w7a9skMkNqk'
      },
      {
        id: '0002',
        name: 'Peccati Di Gola',
        project_type: 'Video reel',
        header_banner: 'images/peccati/PáginaPecatti.jpg',
        home_image: 'images/peccati/PortadaPecattijpg.jpg',
        images: ['images/peccati/carrousel/Peccati1.jpg', 'images/peccati/carrousel/Peccati2.jpg', 'images/peccati/carrousel/Peccati3.jpg', 'images/peccati/carrousel/Peccati4.jpg', 'images/peccati/carrousel/Peccati5.jpg', 'images/peccati/carrousel/Peccati6.jpg'],
        description_1: 'Muestra de vídeo reel de una de las primeras empresas en restauración que nos confió un trabajo de fotografía, vídeo, diseño de RRSS y cartelería personalizado para su comercio. Trabajamos con un equipo pequeño debido a las circunstancias restrictivas a causa del COVID 19. Aún así, el trabajo fue fructífero y cumplimos todas las metas y expectativas marcadas.',
        audiovisual_production: 'Producción audiovisual: Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Cliente: Pecatti Di Gola -restaurante italiano en Tenerife-. @pecattidigola.menu',
        team: ['Fotografía: Ayoze Delgado @ayoxe\n',
          'Vídeo: Eduardo Suárez @edufilmingtheory\n',
          'Ayudante de cámara: Aliya Akhunova @aliyakhunova\n',
          'Modelo: Sara Ramos @sara.ramoss_\n'],
        music: 'Swing Beats Jazz Hop Lo-fi Chill Mix [No Copyright Music]',
        copyright: '© Filming Theory 2021',
        video: 'https://www.youtube.com/watch?v=c5MYgiWgkxQ'
      },
      {
        id: '0003',
        name: 'Aliya Akhunova',
        project_type: 'Fashion film',
        header_banner: 'images/Aliya/PortadaAliyajpg.jpg',
        home_image: 'images/Aliya/PortadaAliyajpg.jpg',
        images: ['images/Aliya/carrousel/Aliya1.jpg', 'images/Aliya/carrousel/Aliya2.jpg', 'images/Aliya/carrousel/Aliya3.jpg', 'images/Aliya/carrousel/Aliya4.jpg', 'images/Aliya/carrousel/Aliya5.jpg'],
        description_1: 'Aliya Akhunova, diseñadora rusa residente en Tenerife, contactó con nosotros para llevar a cabo un fashion film de uno de sus diseños y fotografía de producto de la colección que presentó al concurso Jóvenes Diseñadores.',
        audiovisual_production: 'Producción audiovisual: Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Aliya Akhunova @aliyakhunova',
        team: ['Director de fotografía: Eduardo Suárez @edufilmingtheory',
          'Ayudante de cámara: Ayoze Delgado @ayoxe \n',
          'Vestuario: Aliya Akhunova @aliyakhunova\n',
          'Modelo: Aygul Akhunova @akhunovaygul\n'],
        music: '[Copyright Music]',
        copyright: '© Filming Theory 2021',
        video: 'https://www.youtube.com/watch?v=MiLSQsNUOGo&t=1s'
      },
      {
        id: '0004',
        name: 'Blackout Films',
        project_type: 'Video reel',
        home_image: 'images/blackout/PortadaBlackoutjpg.jpg',
        header_banner: 'images/blackout/PáginaBlackout.jpg',
        images: [],
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
        header_banner: 'images/events/PáginaHighlight.jpg',
        home_image: 'images/events/PortadaHighlightjpg.jpg',
        images: ['images/events/carrousel/Evento1.1.jpg', 'images/events/carrousel/Evento2.jpg', 'images/events/carrousel/Evento3.jpg', 'images/events/carrousel/Evento4.jpg', 'images/events/carrousel/Evento5.jpg', 'images/events/carrousel/Evento6.jpg'],
        description_1: 'Pablo y Karen decidieron contar con nosotros para dejar constancia en vídeo de uno de los momentos más importantes de sus vidas, su boda. Para nosotros es un placer haberlos acompañado.',
        audiovisual_production: 'Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Particular',
        editor: 'Editor: Eduardo Suárez @edufilmingtheory',
        music: '[Copyright Music]',
        copyright: '© Filming Theory 2021',
        video: 'https://www.youtube.com/watch?v=gphtWOT-NWA'
      },
      {
        id: '0006',
        name: 'Hamilton',
        project_type: 'Teaser',
        header_banner: 'images/hamilton/PáginaHamilton.jpg',
        home_image: 'images/hamilton/PortadaHamiltonjpg.jpg',
        images: ['images/hamilton/carrousel/Sin título_1.1.2.jpg', 'images/hamilton/carrousel/Sin título_1.2.1.jpg', 'images/hamilton/carrousel/Sin título_1.3.2.jpg', 'images/hamilton/carrousel/Sin título_1.4.1.jpg', 'images/hamilton/carrousel/Sin título_1.5.1.jpg', 'images/hamilton/carrousel/Sin título_1.6.1.jpg', 'images/hamilton/carrousel/Sin título_1.7.1.jpg'],
        description_1: '"Hamilton" cuenta la vida del entonces secretario del Tesoro y uno de los padres fundadores de Estados Unidos, pero quizás el menos conocido, Alexander Hamilton. \n' +
          '\n' +
          'La premisa de la historia y el hecho de tener que grabar durante una de sus funciones, nos mostraron la complejidad de alcanzar imágenes de buena calidad en entornos luminosos y de exposición complejos. Al final en la dificultad radica el aprendizaje y gracias a Mandrágora Producciones nosotros aprendimos muchísimo.\n',
        audiovisual_production: 'Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Mandrágora Producciones',
        team: ['Dirección: Ariadna Simó y Melodie Schmunk', 'Director de fotografía: Eduardo Suárez @edufilmingtheory', 'Ayudante de cámara: Aliya Akhunova @aliyakhunova'],
        music: '[Copyright Music]',
        copyright: '© Filming Theory 2021',
        video: 'https://www.youtube.com/watch?v=iqoUwG6zm_0'
      },
      {
        id: '0007',
        name: 'Mr.Global',
        project_type: 'Film',
        home_image: 'images/mrglobal/Portada_MisterGlobaljpg.jpg',
        header_banner: 'images/mrglobal/Página_MisterGlobal.jpg',
        images: ['images/mrglobal/carrousel/Sin título_1.2.1(1).jpg', 'images/mrglobal/carrousel/Sin título_1.3.1.jpg', 'images/mrglobal/carrousel/Sin título_1.4.1(1).jpg', 'images/mrglobal/carrousel/Sin título_1.5.1(1).jpg', 'images/mrglobal/carrousel/Sin título_1.6.1(1).jpg', 'images/mrglobal/carrousel/Sin título_1.7.1(1).jpg'],
        description_1: 'Jorge Peraza, influencer y ganador de Mr. Global Tenerife, contrató nuestros servicios para realizar su vídeo de presentación a Mr. Global España. Además de que un placer trabajar con él, este proyecto nos permitió visitar lugares emblemáticos de la isla de Tenerife y ayudar con un mensaje positivo y de concienciación sobre el medioambiente en Canarias.',
        audiovisual_production: 'Filming Theory @filmingtheory | www.filmingtheory.com',
        client: 'Jorge Peraza - Mr Global Tf @jorperaza',
        colaboration_with: 'Agencia Bellegroup @agencia_bellegroup',
        team: ['DOP: Eduardo Suárez @edufilmingtheory', 'Fotógrafo: Adrián de la Cruz  @a_delacruz'],
        copyright: '© Filming Theory 2021',
        video: 'https://www.youtube.com/watch?v=GFH8-CAzhOg'
      }
    ],
    menuLinks: [
      {
        title: 'Portfolio',
        url: 'Home'
      },
      // {
      //   title: '¿Quiénes somos?',
      //   url: 'Home'
      // },
      {
        title: 'Productos y servicios',
        submenuLinks: [
          {
            title: 'Videomarketing',
            url: 'Home'
          },
          {
            title: 'YAYA La capsula del tiempo',
            url: 'Home'
          },
          {
            title: '54% Rebate',
            url: '54% Rebate'
          }
        ]
      },
      {
        title: 'Contacto',
        url: 'Contact'
      }
    ],
    rebate: {
      images: ['https://drive.google.com/uc?export=view&id=1nsmJXiBqboJb8T2y2G-Pkugh0XgqC7xL', 'https://drive.google.com/uc?export=view&id=1n3hx4pOyaJfdIn3jRExWbm-Y6X7m-yQK', 'https://drive.google.com/uc?export=view&id=1KpGfSUIm-JAenfCaUzfprEDevOtuuVh_', 'https://drive.google.com/uc?export=view&id=1jJYZf_Yk9LUDHmtuJG3yBIZv1mgmmkh3', 'https://drive.google.com/uc?export=view&id=1BUW0MOGpUF4SJzz2SlcfhR3C3LCDgXwY', 'https://drive.google.com/uc?export=view&id=1QowdeeM9oqybvn9sS6U1IbiS1PCOyOIA', 'https://drive.google.com/uc?export=view&id=1ZQ6q9wCvU3ejVM5qBf0ioGfS4UurVRCA', 'https://drive.google.com/uc?export=view&id=1uJW-1jxQ2ZTmBPfwFDY7yx30vUyFyrgS', 'https://drive.google.com/uc?export=view&id=1eFQII7IDYRN5O019uv8jsEDymusROKk2', 'https://drive.google.com/uc?export=view&id=1N1t11CAPlLeLYICciJ8RMfnW6zXKMQGD', 'https://drive.google.com/uc?export=view&id=1awL377_Csyoe3be950uw6hrb6RDIdFJH']
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
