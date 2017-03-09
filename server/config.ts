let config = {
  'searchAndRescueApi': 'http://localhost:6000/search/api'
};

class Config {
  public static get(key: string) {
    return config[key];
  }
}

export { Config };
