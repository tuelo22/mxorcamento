export class APIAuthenticationToken {
  constructor(
    public Username: string,
    public Password: string,
    public EnvironmentName: string,
  ) { }
}

export class APIDefaultParameter {
  constructor(
    public AutheticationToken: APIAuthenticationToken,
    public Data: string
  ) { }
}
