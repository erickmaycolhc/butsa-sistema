const patterns = {
    invalidEmail:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    invalidBudget: /^\d+(\.\d+)?$/,
    invalidString: /^(?!\s*$).+/
  };
   
  
  export default patterns;
  