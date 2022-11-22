export type Organization = {
  identifier: string,
  active: boolean,
  type: string,
  name: string,
  alias: string,
  telecom: string,
  address: string,
  partOf: string,
  contact: {
    name: string,
    telecom: string,
  },
};
