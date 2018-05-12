export const dateChecker = (value: string) => {

  if ( value.charAt(2) !== '/' || value.charAt(5) !== '/' ) {
    return null;
  } else {
    return value;
  }

}