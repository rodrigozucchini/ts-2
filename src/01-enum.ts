enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

type User = {
  username: string;
  role: ROLES;
}

const nicoUser: User = {
  username: "rodrigozucchini",
  role: ROLES.ADMIN
}
