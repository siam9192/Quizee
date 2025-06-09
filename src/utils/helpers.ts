export function formatSeconds(sec: number){
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return  {
         minutes,
         seconds
    }
  }