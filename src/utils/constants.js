export const LOGO = 
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = 
"https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";


export const API_OPTIONS={
    
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: "Bearer " + process.env.REACT_APP_TMBD_KEY,
        },
      };


export const IMG_CDN="https://image.tmdb.org/t/p/w500";


export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/US-en-20250512-TRIFECTA-perspective_a6515802-34a4-4f19-947a-47380b934c44_large.jpg";


export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"}, 
  {identifier: "spanish", name: "Spanish"}
];

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;