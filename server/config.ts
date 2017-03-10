let config = {
  'searchAndRescueApi': 'http://localhost:8081/nlp-backend/search'
};

class Config {
  public static get(key: string) {
    return config[key];
  }
}

export { Config };
