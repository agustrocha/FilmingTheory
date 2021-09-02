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
        home_image: 'https://drive.google.com/uc?export=view&id=1VUgIOWPfDUIxoUCE7hTOpAJVaMqxXCFb',
        images: ['https://drive.google.com/uc?export=view&id=13bRnMXNLloPoNpjXGoVYGtbH-TJV0l4l', 'https://drive.google.com/uc?export=view&id=1C2d0VLrkOiYhz8Amfm_8ggs3-DTMLYbP', 'https://drive.google.com/uc?export=view&id=1t3st2yjMRtD3DEpr3s97LnuR2hU4VrI1', 'https://drive.google.com/uc?export=view&id=1t0jYk4Tj76E9gGkBy_E01q6fSUQrYrl4', 'https://drive.google.com/uc?export=view&id=1EtklShivI_VaB55seEt4ea-n9xgVBX6g', 'https://drive.google.com/uc?export=view&id=1XWPAxVX_xeSd_8FQT10FOPF-94u0_7xr', 'https://drive.google.com/uc?export=view&id=1UwQt7O2ykaoOdV9SCzR4WEJy2RxUhELm'],
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
        header_banner: 'https://drive.google.com/uc?export=view&id=17_WT6gGb5ZJWUxWCh04WHemlX0tP8QsR',
        home_image: 'https://drive.google.com/uc?export=view&id=1nI0cmjICK9AtMxIealnvcdpdoQwBjSIK',
        images: ['https://drive.google.com/uc?export=view&id=1d5ulJSkkc4qAXBvWZnh-uXFdY2KOtA1-', 'https://drive.google.com/uc?export=view&id=1EjmH2E_5n8P6p3dvWQ-zjpujZ8iDdy0s', 'https://drive.google.com/uc?export=view&id=1o8_vHckQAltKADCA3Oh9kSyQhDMZpL9V', 'https://drive.google.com/uc?export=view&id=180ET__BO3XNUfyNU6npbfddC5rrDC8zJ', 'https://drive.google.com/uc?export=view&id=1OYWS8LAX5L5ZTW4EalYj5SNgV0S2r27p', 'https://drive.google.com/uc?export=view&id=1O2XbIEXtv21feTgMzL3rkoqgYmgrxUB6'],
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
        header_banner: 'https://drive.google.com/uc?export=view&id=1Vjw2pKdseiCPm3Zm3XfzbGRH0vViisbu',
        home_image: 'https://drive.google.com/uc?export=view&id=1yoO21Waf4xKQ4GqrY9Mlwprv2-zzzJy4',
        images: ['https://drive.google.com/uc?export=view&id=1QTaYEQNrAa0rFovo30PAdPG30gz7vldb', 'https://drive.google.com/uc?export=view&id=1l0tmm4hGPVfglw-GiCEByjT7u6_LSl5E', 'https://drive.google.com/uc?export=view&id=1ZLGZDdG_avCbULH1Jk04UZOH9dKLHN5C', 'https://drive.google.com/uc?export=view&id=1uAwysXHQRrA_SbG6ssdNkmBE7BAZ83Ld', 'https://drive.google.com/uc?export=view&id=1X3kSMFTI3ophHzhHP52suhrRX3wfBnsO'],
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
        home_image: 'https://drive.google.com/uc?export=view&id=1ZxVV_CUw-h3GUPkoEfvQYmVKCD0fh-mU',
        header_banner: ['https://drive.google.com/uc?export=view&id=1xfEp6T6_pZVi9i_zlZOcnfUe5ktvhstZ'],
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
        header_banner: ['https://drive.google.com/uc?export=view&id=1lfGy4lDiI00DmE8t3dkOGmwkDrpQMYhx'],
        home_image: 'https://drive.google.com/uc?export=view&id=1Jcncxipfi0lp2zx4xK7Gmjs5gTLeloX9',
        images: ['https://drive.google.com/uc?export=view&id=1rJc-qIzrZgM349WB71ypKpdhOpWewskO', 'https://drive.google.com/uc?export=view&id=1ui5AerjoCVvmT593GZaIGkwn_I69sc3R', 'https://drive.google.com/uc?export=view&id=1LMq_4vhzd1ebcRWwBkOAbSKaMBVHstwr', 'https://drive.google.com/uc?export=view&id=1LnpoH1XK93GlslZa7Sj6g9BsoPsW0axS', 'https://drive.google.com/uc?export=view&id=1wQfPRqo_xVa-eesBuawNiDuFHOUxUFmH', 'https://drive.google.com/uc?export=view&id=1Q-MY6vN1ePoJzrqJJ93wnAgiGbUNiIbm'],
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
        header_banner: ['https://drive.google.com/uc?export=view&id=1MvMSvGIJZK8yUZ0lInqdzjqi8goOYj3g'],
        home_image: 'https://drive.google.com/uc?export=view&id=1P1j-kR01-z-g_lDAQ7XTWzCN1Muse7FO',
        images: ['https://drive.google.com/uc?export=view&id=1F4y8PY1mohXkMrG7DqmiGP2aWHGFznA4', 'https://drive.google.com/uc?export=view&id=1MY_m_XHYvrQjqbsg1-IZthuew45g3Sdz', 'https://drive.google.com/uc?export=view&id=1FCo3-KIQFjqL9EPC6BXjTGcFyjvhFQbf', 'https://drive.google.com/uc?export=view&id=1AyeE1THPlYLHBZws-rG_6F0bS7sMqBDa', 'https://drive.google.com/uc?export=view&id=1ZgGRkZs15kNKc2PesoHhr-34rIcs7wla', 'https://drive.google.com/uc?export=view&id=1Lbp7EoZP1hirg1ZL9oX0JHc61qQh_GU0', 'https://drive.google.com/uc?export=view&id=1Uh_cSCv1H14mvu2y5665AI7_ctOyJ3TX'],
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
        header_banner: 'https://drive.google.com/uc?export=view&id=1UpgX9FS_kD7vluZ3z2RFnkVEPpw3IE9z',
        home_image: 'https://drive.google.com/uc?export=view&id=1GTfE9AJ_ddKJkENLhigvaHfaCVnhAKLH',
        images: ['https://drive.google.com/uc?export=view&id=1tOxCT3NIxAvgjSyb6vwDHXyWvPg6_Xn9', 'https://drive.google.com/uc?export=view&id=13lWpQ2YpGByhdAvV968UF5AhyYceTgll', 'https://drive.google.com/uc?export=view&id=12WSQwy3uedLHWB5DJxtIUVyJLI6V_hs-', 'https://drive.google.com/uc?export=view&id=11j-O02fbvKRg1pzPey1QPpN_QfIkoY49', 'https://drive.google.com/uc?export=view&id=1_y9B8Wm6slSnutMNohwPt92E1_99wFYK', 'https://drive.google.com/uc?export=view&id=1apXaxX6venrZ2ErzGtTziTjt3o42yPBP'],
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
