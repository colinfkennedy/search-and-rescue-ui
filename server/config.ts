let config = {
  'searchAndRescueApi': 'http://bearshark.advertising.aol.com:8081/nlp-backend/search'
};

class Config {
  public static get(key: string) {
    return config[key];
  }
}

export { Config };
