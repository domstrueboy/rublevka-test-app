function ago (when) {

  const now = Date.now(),
        posted = new Date(when);
        
  let ago = Math.round((now - posted) / 1000); // seconds ago

  const years = Math.round(ago / (60*60*24*30*12)),
        months = Math.round(ago / (60*60*24*30)),
        days = Math.round(ago / (60*60*24)),
        hours = Math.round(ago / (60*60)),
        minutes = Math.round(ago / 60);

  if (years > 1) {
    ago = `${years} years ago`;
  } else if (years === 1) {
    ago = '1 year ago';
  } else if (months > 1) {
    ago = `${months} months ago`;
  } else if (months === 1) {
    ago = '1 month ago';
  } else if (days > 1) {
    ago = `${days} days ago`;
  } else if (days === 1) {
    ago = '1 day ago';
  } else if (hours > 1) {
    ago = `${hours} hours ago`;
  } else if (hours === 1) {
    ago = '1 hour ago';
  } else if (minutes > 1) {
    ago = `${minutes} minutes ago`;
  } else if (minutes === 1) {
    ago = '1 minute ago';
  } else {
    ago = 'just now';
  }

  return ago;
}

export default ago;