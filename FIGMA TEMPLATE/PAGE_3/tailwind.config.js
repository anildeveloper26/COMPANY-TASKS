tailwind.config = {
    theme:{
      extend:{
        screens:{
          xs:'5px',
          'xl':'1280px',
          '2xl':'1220px',
          '3xl':'2560px',
          '4xl':'3840px',
        },
        boxShadow:{
          '4xl':'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        },
        fontSize:{
          xsm:'13px',
          xss:'9px'
        },
        colors:{
          cyan:'#00435d',
          'c-orange':"#ed8818"
        },
        height:{
          'c-19':'70px'
        },
        backgroundImage: {
          'custom-radial': 'radial-gradient(83.48% 2611.75% at 79.77% 50%, #55aacb 0%, #00435d 100%)',
        },
      }
    }
  }