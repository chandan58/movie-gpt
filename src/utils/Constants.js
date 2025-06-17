export const USER_IMAGE = "https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png";
export const BANNER_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg";
export const BACKDROP_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg";
export const NOWPLAYING_API_TMDB = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_BEARER_TOKEN
    }
};
export const POPULAR_API_TMDB = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_BEARER_TOKEN
  }
};
export const TOPRATED_API_TMDB = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_BEARER_TOKEN
  }
};
export const UPCOMING_API_TMDB = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_BEARER_TOKEN
  }
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const LANGUAGES = [
    {
        id: "en",
        name: "English",
    },
    {
        id: "hi",
        name: "Hindi",
    },
    {
        id: "es",
        name: "Spanish",
    },
]
export const GEMINI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY