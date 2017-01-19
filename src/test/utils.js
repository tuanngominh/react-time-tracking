//mock matchMedia
export function setupWindowMatchMedia(matches){
  window.matchMedia = () => {
    return {
      matches: matches
    }
  }  
}