export const MenuList =[
    {
        title:"Home",
        url: '/',
        hassubmenu: 0

    },
    {
        title:"Latest News",
        url: '/latest',
        hassubmenu: 1,
        submenu_name: "list_submenu_latest"
    },

    {
        title:"Media",
        url: '/media',
        hassubmenu: 0
    },
    {
        title:"Sports",
        url: '/sports',
        hassubmenu: 0
    },
        {
        title:"Technology",
        url: '/tech',
        hassubmenu: 1,
        submenu_name: "list_submenu_tech"
    },
    {
        title:"Politics",
        url: '/politics',
        hassubmenu: 0
    }
,
    {
        title:"Business",
        url: '/business',
        hassubmenu: 0
    }


];

export const submenu_latest =[
      {
        title:"Daily",
        url: '/daily'
    },
    {
        title:"Weekly",
        url: '/weekly'
    },    
    {
        title:"Monthly",
        url: '/monthly'
    }

];


export const submenu_tech =[
          {
        title:"All",
        url: '/alltech'
    },
      {
        title:"Laptop",
        url: '/'
    },
    {
        title:"Mobile",
        url: '/'
    }
];