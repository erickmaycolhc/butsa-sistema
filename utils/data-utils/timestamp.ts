export const getFormattedTime = (): String => {
    const today = new Date();
    const y = today.getFullYear(); 
    const m = today.getMonth() + 1;
    const d = today.getDate();
    const h = today.getHours();
    const mi = today.getMinutes();
    const s = today.getSeconds();
    const ml = today.getMilliseconds();
    return `_${y}-${m}-${d}_${h}-${mi}-${s}-${ml}`;
  }
  